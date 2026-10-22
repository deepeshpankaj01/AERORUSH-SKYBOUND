// AERORUSH: SKYBOUND - Automated Behavioral Tests for Core Gameplay Systems (Phase 1 & Phase 2)
import { describe, it, expect, beforeEach } from 'vitest';
import { VehiclePhysics, StuntEvent } from '../physics/VehiclePhysics';
import { ScoreManager } from '../scoring/ScoreManager';
import { GAME_CONFIG } from '../config/GameConfig';
import { InputState } from '../input/InputManager';
import { CarModel, LIVERIES } from '../entities/CarModel';
import { GameStateManager } from '../core/GameState';
import { TrackManager } from '../world/TrackManager';
import { ProgressionManager, PAINT_CATALOG } from '../progression/ProgressionManager';
import { CareerManager } from '../progression/CareerManager';
import { AchievementManager } from '../progression/AchievementManager';
import { GhostSystem } from '../replay/GhostSystem';
import { ENVIRONMENTS } from '../world/EnvironmentConfig';
import * as THREE from 'three';

function createMockInput(overrides: Partial<InputState> = {}): InputState {
  return {
    steerLeft: false,
    steerRight: false,
    accelerate: false,
    brake: false,
    boost: false,
    drift: false,
    thruster: false,
    rollLeft: false,
    rollRight: false,
    pausePressed: false,
    ...overrides,
  };
}

describe('VehiclePhysics & Stunt Mechanics', () => {
  let physics: VehiclePhysics;

  beforeEach(() => {
    physics = new VehiclePhysics();
  });

  it('initializes with default standing state', () => {
    expect(physics.forwardSpeed).toBe(0);
    expect(physics.isAirborne).toBe(false);
    expect(physics.energy).toBe(GAME_CONFIG.energy.max);
    expect(physics.position.y).toBe(GAME_CONFIG.vehicle.groundSnapY);
  });

  it('accelerates forward under acceleration input', () => {
    const input = createMockInput({ accelerate: true });
    physics.update(0.1, input);
    expect(physics.forwardSpeed).toBeGreaterThan(0);
    expect(physics.forwardSpeed).toBeLessThanOrEqual(GAME_CONFIG.vehicle.baseTopSpeed);
  });

  it('activates boost, increases top speed, and consumes energy', () => {
    physics.forwardSpeed = 30;
    const initialEnergy = physics.energy;
    const input = createMockInput({ accelerate: true, boost: true });

    physics.update(0.2, input);
    expect(physics.isBoosting).toBe(true);
    expect(physics.energy).toBeLessThan(initialEnergy);
  });

  it('steers and enforces track boundaries on lateral movement', () => {
    physics.forwardSpeed = 40;
    const input = createMockInput({ steerLeft: true });

    for (let i = 0; i < 20; i++) {
      physics.update(0.05, input);
    }

    expect(physics.steerAngle).toBeLessThan(0);
    expect(physics.position.x).toBeGreaterThanOrEqual(-physics.trackHalfWidth);
  });

  it('launches off ramps and enters airborne state', () => {
    physics.forwardSpeed = 50;
    physics.launchOffRamp(3.0);

    expect(physics.isAirborne).toBe(true);
    expect(physics.verticalVelocity).toBeGreaterThan(0);
  });

  it('fires vertical thrusters in the air and consumes energy', () => {
    physics.isAirborne = true;
    physics.verticalVelocity = 0;
    const initialEnergy = physics.energy;
    const input = createMockInput({ thruster: true });

    physics.update(0.1, input);
    expect(physics.isThrusting).toBe(true);
    expect(physics.verticalVelocity).toBeGreaterThan(0);
    expect(physics.energy).toBeLessThan(initialEnergy);
  });

  it('executes a 360-degree barrel roll stunt and triggers callback', () => {
    physics.isAirborne = true;
    physics.position.y = 15;

    let stuntRecorded: StuntEvent | null = null;
    physics.onStuntCallback = (event) => {
      stuntRecorded = event;
    };

    const input = createMockInput({ rollRight: true });

    for (let i = 0; i < 25; i++) {
      physics.update(0.04, input);
      if (stuntRecorded) break;
    }

    expect(stuntRecorded).not.toBeNull();
    const result = stuntRecorded as StuntEvent | null;
    expect(result?.type).toBe('BARREL_ROLL');
    expect(result?.points).toBe(GAME_CONFIG.scoring.barrelRollPoints);
    expect(physics.totalBarrelRolls).toBe(1);
  });

  it('detects a clean landing when vehicle returns to ground level', () => {
    physics.isAirborne = true;
    physics.position.y = 0.5;
    physics.verticalVelocity = -10;
    physics.rotation.z = 0;
    physics.rotation.x = 0;

    let stuntRecorded: StuntEvent | null = null;
    physics.onStuntCallback = (event) => {
      stuntRecorded = event;
    };

    physics.update(0.06, createMockInput());

    expect(physics.isAirborne).toBe(false);
    const result = stuntRecorded as StuntEvent | null;
    expect(result?.type).toBe('CLEAN_LANDING');
    expect(physics.cleanLandingsCount).toBe(1);
  });

  it('detects inverted crash when landing upside down', () => {
    physics.isAirborne = true;
    physics.position.y = 0.5;
    physics.verticalVelocity = -10;
    physics.rotation.z = Math.PI;

    let stuntRecorded: StuntEvent | null = null;
    physics.onStuntCallback = (event) => {
      stuntRecorded = event;
    };

    physics.update(0.06, createMockInput());

    expect(physics.isCrashed).toBe(true);
    const result = stuntRecorded as StuntEvent | null;
    expect(result?.type).toBe('CRASH');
  });

  it('recovers from crash to a playable state', () => {
    physics.isCrashed = true;
    physics.forwardSpeed = 0;
    physics.recoverFromCrash();

    expect(physics.isCrashed).toBe(false);
    expect(physics.forwardSpeed).toBeGreaterThan(0);
    expect(physics.position.y).toBe(GAME_CONFIG.vehicle.groundSnapY);
  });

  it('applies upgrade modifiers to top speed, acceleration, and thrusters', () => {
    physics.applyUpgrades({
      topSpeed: 95,
      acceleration: 60,
      steerSpeed: 4.2,
      driftGrip: 0.95,
      thrusterLift: 55,
      rechargeRate: 15,
      maxEnergy: 130,
    });

    expect(physics.baseTopSpeed).toBe(95);
    expect(physics.acceleration).toBe(60);
    expect(physics.maxEnergy).toBe(130);
  });
});

describe('ScoreManager & Combo System', () => {
  let scoreMgr: ScoreManager;

  beforeEach(() => {
    scoreMgr = new ScoreManager();
  });

  it('accumulates score based on forward distance', () => {
    scoreMgr.update(0.1, 100, 150, false);
    expect(scoreMgr.distanceMeters).toBe(100);
    expect(scoreMgr.currentScore).toBe(100 * GAME_CONFIG.scoring.distPointsPerMeter);
  });

  it('awards stunt points and bumps combo multiplier', () => {
    const initialScore = scoreMgr.currentScore;
    scoreMgr.addStuntPoints(500, 'BARREL ROLL');

    expect(scoreMgr.comboMultiplier).toBeGreaterThan(1.0);
    expect(scoreMgr.currentScore).toBe(initialScore + 500 * scoreMgr.comboMultiplier);
    expect(scoreMgr.stuntsCount).toBe(1);
  });

  it('resets combo multiplier upon crash', () => {
    scoreMgr.addStuntPoints(500, 'BARREL ROLL');
    expect(scoreMgr.comboMultiplier).toBeGreaterThan(1.0);

    scoreMgr.onCrashOrCollision();
    expect(scoreMgr.comboMultiplier).toBe(1.0);
  });

  it('saves and retrieves local high score records', () => {
    const summary = scoreMgr.finalizeSummary();
    expect(summary).toBeDefined();

    const records = scoreMgr.getRecords();
    expect(records.length).toBeGreaterThan(0);
  });
});

describe('VANTA XR Car Model Geometry & Customization', () => {
  it('creates car model with chassis, wheels, and materials', () => {
    const car = new CarModel();
    expect(car.root).toBeDefined();
    expect(car.wheelFL).toBeDefined();
    expect(car.wheelFR).toBeDefined();
    expect(car.wheelRL).toBeDefined();
    expect(car.wheelRR).toBeDefined();
  });

  it('applies custom livery palette without errors', () => {
    const car = new CarModel();
    car.setLivery('solar');
    expect(LIVERIES.solar).toBeDefined();
    car.setLivery('violet');
    expect(LIVERIES.violet).toBeDefined();
  });

  it('supports dynamic paint, underglow, and thruster color adjustments', () => {
    const car = new CarModel();
    car.setPaint('silver');
    car.setUnderglowColor(0xff6600);
    car.setThrusterColor(0xaa22ff);
    car.setWheelStyle('turbine');
    expect(car.root).toBeDefined();
  });
});

describe('ProgressionManager & Economy', () => {
  let prog: ProgressionManager;

  beforeEach(() => {
    prog = new ProgressionManager();
    prog.resetLocalData();
  });

  it('initializes with starting credits and factory upgrade levels', () => {
    const data = prog.getData();
    expect(data.credits).toBeGreaterThanOrEqual(1000);
    expect(data.upgrades.engine).toBe(1);
    expect(data.upgrades.handling).toBe(1);
  });

  it('upgrades vehicle components when player has sufficient credits', () => {
    const initialCredits = prog.getData().credits;
    const res = prog.upgradeComponent('engine');
    expect(res.success).toBe(true);
    expect(prog.getData().upgrades.engine).toBe(2);
    expect(prog.getData().credits).toBeLessThan(initialCredits);
  });

  it('purchases and equips cosmetic paints', () => {
    const silverPaint = PAINT_CATALOG.find(p => p.id === 'silver')!;
    const res = prog.buyCosmetic('paint', silverPaint);
    expect(res.success).toBe(true);
    expect(prog.getData().cosmetics.paint).toBe('silver');
    expect(prog.getData().unlockedPaints).toContain('silver');
  });

  it('rejects purchase when player has insufficient credits', () => {
    prog.spendCredits(prog.getData().credits); // Drain balance to 0
    const expensivePaint = PAINT_CATALOG.find(p => p.id === 'stealth')!;
    const res = prog.buyCosmetic('paint', expensivePaint);
    expect(res.success).toBe(false);
  });

  it('computes handling modifiers reflecting upgrade levels', () => {
    prog.upgradeComponent('engine');
    const mods = prog.getAppliedHandlingModifiers();
    expect(mods.topSpeed).toBeGreaterThan(GAME_CONFIG.vehicle.baseTopSpeed);
  });
});

describe('CareerManager & Mission Evaluation', () => {
  let career: CareerManager;

  beforeEach(() => {
    career = new CareerManager();
  });

  it('starts career missions and evaluates bronze/silver/gold medals', () => {
    career.startMission('m1_ignition');
    expect(career.getActiveMission()).not.toBeNull();

    // Evaluate stats meeting gold requirements
    const result = career.evaluateMission({
      score: 6000,
      distanceM: 1200,
      stuntsCount: 1,
      cleanLandings: 1,
      gatesCleared: 0,
      driftSeconds: 2,
      maxSpeedKmH: 220,
      crashesCount: 0,
    });

    expect(result).not.toBeNull();
    expect(result?.passed).toBe(true);
    expect(result?.medal).toBe('gold');
    expect(result?.creditsEarned).toBeGreaterThan(0);
  });
});

describe('AchievementManager', () => {
  let prog: ProgressionManager;
  let achieve: AchievementManager;

  beforeEach(() => {
    prog = new ProgressionManager();
    prog.resetLocalData();
    achieve = new AchievementManager(prog);
  });

  it('unlocks achievements and grants credit rewards', () => {
    const initialCredits = prog.getData().credits;
    achieve.checkAchievement('first_spark');

    expect(achieve.isUnlocked('first_spark')).toBe(true);
    expect(prog.getData().credits).toBeGreaterThan(initialCredits);
  });
});

describe('GhostSystem Replay', () => {
  it('records keyframes and performs smooth interpolation', () => {
    const ghost = new GhostSystem();
    ghost.startRecording();

    ghost.recordFrame(0.0, new THREE.Vector3(0, 0, 0), new THREE.Euler(0, 0, 0), 0);
    ghost.recordFrame(0.2, new THREE.Vector3(0, 0, 20), new THREE.Euler(0, 0, 0), 100);

    const rec = ghost.stopRecording('neon_dusk', 500, 100);
    expect(rec).not.toBeNull();
    expect(rec?.frames.length).toBeGreaterThan(0);
  });
});

describe('EnvironmentConfig', () => {
  it('defines 4 distinct playable environments with complete palettes', () => {
    expect(ENVIRONMENTS.neon_dusk).toBeDefined();
    expect(ENVIRONMENTS.canyon_express).toBeDefined();
    expect(ENVIRONMENTS.monsoon_highway).toBeDefined();
    expect(ENVIRONMENTS.orbital_skyway).toBeDefined();
    expect(ENVIRONMENTS.monsoon_highway.hasRain).toBe(true);
  });
});

describe('GameStateManager', () => {
  it('manages state transitions and notifies listeners', () => {
    const sm = new GameStateManager();
    expect(sm.getState()).toBe('LOADING');

    let recordedNext = '';
    sm.onStateChange((next) => {
      recordedNext = next;
    });

    sm.setState('MENU');
    expect(sm.is('MENU')).toBe(true);
    expect(recordedNext).toBe('MENU');
  });
});

describe('TrackManager Segment Lifecycle', () => {
  it('initializes pooled track segments with road, barriers, and hazards', () => {
    const tm = new TrackManager();
    expect(tm.root.children.length).toBeGreaterThan(0);
  });

  it('recycles segments seamlessly when player advances along z axis', () => {
    const tm = new TrackManager();
    tm.update(500, 0.1);
    expect(tm.root).toBeDefined();
  });
});

describe('Audit Fixes: Collision Cooldown, InputManager Touch & Achievement Triggers', () => {
  it('enforces a cooldown on barrier collision callbacks to prevent machine-gunning audio', () => {
    const physics = new VehiclePhysics();
    let collisionEvents = 0;
    physics.onCollisionCallback = (severity) => {
      if (severity === 'barrier') collisionEvents++;
    };

    // Force car against right barrier
    physics.position.x = physics.trackHalfWidth + 5;
    const input = createMockInput({ steerRight: true });

    // Frame 1: triggers collision callback and starts 500ms cooldown
    physics.update(0.016, input);
    expect(collisionEvents).toBe(1);

    // Frame 2 (after 16ms): still against barrier, should NOT trigger again
    physics.position.x = physics.trackHalfWidth + 5;
    physics.update(0.016, input);
    expect(collisionEvents).toBe(1);

    // Frame 3 (after 550ms total dt): cooldown has expired, should trigger again
    physics.position.x = physics.trackHalfWidth + 5;
    physics.update(0.6, input);
    expect(collisionEvents).toBe(2);
  });

  it('correctly tracks and unlocks newly-wired achievements', () => {
    const prog = new ProgressionManager();
    const achieve = new AchievementManager(prog);

    // Check tuned_perfection
    achieve.checkAchievement('tuned_perfection');
    expect(achieve.isUnlocked('tuned_perfection')).toBe(true);

    // Check stylist
    achieve.checkAchievement('stylist');
    expect(achieve.isUnlocked('stylist')).toBe(true);

    // Check apex_champion
    achieve.checkAchievement('apex_champion');
    expect(achieve.isUnlocked('apex_champion')).toBe(true);
  });
});
