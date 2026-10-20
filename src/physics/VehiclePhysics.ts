// AERORUSH: SKYBOUND - Arcade Vehicle Dynamics & Aerial Stunt Physics
import * as THREE from 'three';
import { GAME_CONFIG } from '../config/GameConfig';
import { InputState } from '../input/InputManager';

export interface StuntEvent {
  type: 'BARREL_ROLL' | 'AERIAL_FLIP' | 'CLEAN_LANDING' | 'ROUGH_LANDING' | 'CRASH';
  points: number;
  label: string;
}

export class VehiclePhysics {
  // World Transform
  public position: THREE.Vector3 = new THREE.Vector3(0, GAME_CONFIG.vehicle.groundSnapY, 0);
  public rotation: THREE.Euler = new THREE.Euler(0, 0, 0, 'YXZ');
  public quaternion: THREE.Quaternion = new THREE.Quaternion();

  // Velocities
  public forwardSpeed: number = 0; // m/s
  public lateralVelocity: number = 0; // m/s (drift/skid)
  public verticalVelocity: number = 0; // m/s (jumping/falling)
  public steerAngle: number = 0; // radians

  // Handling & State
  public energy: number = GAME_CONFIG.energy.max;
  public isAirborne: boolean = false;
  public isDrifting: boolean = false;
  public isBoosting: boolean = false;
  public isThrusting: boolean = false;
  public isCrashed: boolean = false;

  // Stunt & Race Trackers
  public airTime: number = 0;
  public driftDuration: number = 0;
  public totalDriftSeconds: number = 0;
  public totalBarrelRolls: number = 0;
  public totalFlips: number = 0;
  public cleanLandingsCount: number = 0;
  public crashesCount: number = 0;
  public gatesClearedCount: number = 0;

  // Upgraded Performance Overrides
  public maxEnergy: number = GAME_CONFIG.energy.max;
  public baseTopSpeed: number = GAME_CONFIG.vehicle.baseTopSpeed;
  public acceleration: number = GAME_CONFIG.vehicle.acceleration;
  public steerSpeed: number = GAME_CONFIG.vehicle.steerSpeed;
  public driftLateralFriction: number = GAME_CONFIG.vehicle.driftLateralFriction;
  public thrusterLiftAccel: number = GAME_CONFIG.flight.thrusterLiftAccel;
  public passiveRechargeRate: number = GAME_CONFIG.energy.passiveRechargeRate;

  private accumulatedRoll: number = 0;
  private accumulatedPitch: number = 0;
  private stuntsThisJump: number = 0;

  // Event Callbacks
  public onStuntCallback: ((event: StuntEvent) => void) | null = null;
  public onCollisionCallback: ((severity: 'barrier' | 'obstacle') => void) | null = null;

  // Track boundaries
  public trackHalfWidth: number = (GAME_CONFIG.world.roadWidth / 2) - (GAME_CONFIG.vehicle.width / 2);

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.position.set(0, GAME_CONFIG.vehicle.groundSnapY, 0);
    this.rotation.set(0, 0, 0);
    this.quaternion.identity();
    this.forwardSpeed = 0;
    this.lateralVelocity = 0;
    this.verticalVelocity = 0;
    this.steerAngle = 0;
    this.energy = this.maxEnergy;
    this.isAirborne = false;
    this.isDrifting = false;
    this.isBoosting = false;
    this.isThrusting = false;
    this.isCrashed = false;
    this.airTime = 0;
    this.driftDuration = 0;
    this.totalDriftSeconds = 0;
    this.accumulatedRoll = 0;
    this.accumulatedPitch = 0;
    this.stuntsThisJump = 0;
    this.crashesCount = 0;
    this.gatesClearedCount = 0;
  }

  public applyUpgrades(modifiers: {
    topSpeed: number;
    acceleration: number;
    steerSpeed: number;
    driftGrip: number;
    thrusterLift: number;
    rechargeRate: number;
    maxEnergy: number;
  }): void {
    this.baseTopSpeed = modifiers.topSpeed;
    this.acceleration = modifiers.acceleration;
    this.steerSpeed = modifiers.steerSpeed;
    this.driftLateralFriction = modifiers.driftGrip;
    this.thrusterLiftAccel = modifiers.thrusterLift;
    this.passiveRechargeRate = modifiers.rechargeRate;
    this.maxEnergy = modifiers.maxEnergy;
    this.energy = Math.min(this.energy, this.maxEnergy);
  }

  public update(dt: number, input: InputState): void {
    if (this.isCrashed) {
      // Rapid crash recovery deceleration
      this.forwardSpeed = THREE.MathUtils.lerp(this.forwardSpeed, 0, 5 * dt);
      this.position.z += this.forwardSpeed * dt;
      return;
    }

    const cfg = GAME_CONFIG;

    // 1. Boost Management
    const wantsBoost = input.boost && this.energy > 3;
    this.isBoosting = wantsBoost && this.forwardSpeed > 5;

    if (this.isBoosting) {
      this.energy = Math.max(0, this.energy - cfg.energy.boostDrainPerSec * dt);
    } else if (!this.isThrusting) {
      // Passive recharge
      this.energy = Math.min(this.maxEnergy, this.energy + this.passiveRechargeRate * dt);
    }

    // 2. Acceleration & Braking
    const boostTopSpeed = this.baseTopSpeed * 1.34;
    const topSpeed = this.isBoosting ? boostTopSpeed : this.baseTopSpeed;
    const accelRate = this.isBoosting ? this.acceleration * 1.6 : this.acceleration;

    if (input.accelerate) {
      this.forwardSpeed = Math.min(topSpeed, this.forwardSpeed + accelRate * dt);
    } else if (input.brake) {
      if (this.forwardSpeed > 0) {
        this.forwardSpeed = Math.max(0, this.forwardSpeed - cfg.vehicle.brakingDecel * dt);
      } else {
        // Reverse
        this.forwardSpeed = Math.max(-cfg.vehicle.reverseTopSpeed, this.forwardSpeed - (this.acceleration * 0.5) * dt);
      }
    } else {
      // Natural aerodynamic drag
      this.forwardSpeed *= Math.pow(cfg.vehicle.naturalDrag, dt * 60);
    }

    // 3. Steering & Drift
    this.isDrifting = input.drift && this.forwardSpeed > 25 && !this.isAirborne;
    const steerMax = cfg.vehicle.maxSteerAngle * (this.isDrifting ? cfg.vehicle.driftSteerFactor : 1.0);

    let targetSteer = 0;
    if (input.steerLeft) targetSteer -= steerMax;
    if (input.steerRight) targetSteer += steerMax;

    if (targetSteer !== 0) {
      this.steerAngle = THREE.MathUtils.lerp(this.steerAngle, targetSteer, this.steerSpeed * dt);
    } else {
      this.steerAngle = THREE.MathUtils.lerp(this.steerAngle, 0, cfg.vehicle.steerReturnSpeed * dt);
    }

    // Drift timer
    if (this.isDrifting) {
      this.driftDuration += dt;
      this.totalDriftSeconds += dt;
      // Slight outward lateral slip
      this.lateralVelocity += (this.steerAngle * 45) * dt;
    } else {
      this.driftDuration = 0;
      this.lateralVelocity *= Math.pow(this.driftLateralFriction, dt * 60);
    }

    // 4. Ground vs Airborne Physics
    if (!this.isAirborne) {
      // Ground steering alters lateral position and yaw
      const speedRatio = Math.min(1.0, Math.abs(this.forwardSpeed) / 30);
      const lateralShift = -this.steerAngle * this.forwardSpeed * 0.65 * speedRatio;
      this.position.x += (lateralShift + this.lateralVelocity) * dt;

      // Road boundary check
      this.enforceTrackBoundaries();

      // Heading yaw aligns smoothly with steering
      this.rotation.y = THREE.MathUtils.lerp(this.rotation.y, -this.steerAngle * 0.45, 12 * dt);
      this.rotation.z = THREE.MathUtils.lerp(this.rotation.z, 0, 15 * dt);
      this.rotation.x = THREE.MathUtils.lerp(this.rotation.x, 0, 15 * dt);

      // Snap to ground height
      this.position.y = cfg.vehicle.groundSnapY;
      this.verticalVelocity = 0;
    } else {
      // Airborne State
      this.airTime += dt;

      // Flight Thruster (F key / mobile thrust button)
      const wantsThrust = input.thruster && this.energy > 5;
      this.isThrusting = wantsThrust;

      if (this.isThrusting) {
        this.energy = Math.max(0, this.energy - cfg.energy.thrustDrainPerSec * dt);
        this.verticalVelocity = Math.min(
          cfg.flight.thrusterMaxRiseSpeed,
          this.verticalVelocity + this.thrusterLiftAccel * dt
        );
      } else {
        // Gravity
        this.verticalVelocity -= cfg.flight.gravity * dt;
      }

      this.position.y += this.verticalVelocity * dt;

      // Aerial Lateral Steering
      if (input.steerLeft) this.position.x += 16 * dt;
      if (input.steerRight) this.position.x -= 16 * dt;
      this.enforceTrackBoundaries();

      // Aerial Pitch & Roll Stunt Controls
      // Barrel Roll (Q = left, E = right)
      let rollDelta = 0;
      if (input.rollLeft) {
        rollDelta = cfg.flight.airRollSpeed * dt;
      } else if (input.rollRight) {
        rollDelta = -cfg.flight.airRollSpeed * dt;
      }
      this.rotation.z += rollDelta;
      this.accumulatedRoll += Math.abs(rollDelta);

      // Pitch control in air (W/S)
      let pitchDelta = 0;
      if (input.accelerate) {
        pitchDelta = -cfg.flight.airPitchSpeed * dt; // pitch nose down
      } else if (input.brake) {
        pitchDelta = cfg.flight.airPitchSpeed * dt; // pitch nose up
      }
      this.rotation.x += pitchDelta;
      this.accumulatedPitch += Math.abs(pitchDelta);

      // Detect 360-degree Barrel Roll completion
      if (this.accumulatedRoll >= cfg.flight.stuntThresholdAngle) {
        this.accumulatedRoll -= Math.PI * 2;
        this.totalBarrelRolls++;
        this.stuntsThisJump++;
        if (this.onStuntCallback) {
          this.onStuntCallback({
            type: 'BARREL_ROLL',
            points: cfg.scoring.barrelRollPoints,
            label: '⚡ BARREL ROLL 360°!',
          });
        }
      }

      // Detect 360-degree Flip completion
      if (this.accumulatedPitch >= cfg.flight.stuntThresholdAngle) {
        this.accumulatedPitch -= Math.PI * 2;
        this.totalFlips++;
        this.stuntsThisJump++;
        if (this.onStuntCallback) {
          this.onStuntCallback({
            type: 'AERIAL_FLIP',
            points: cfg.scoring.flipPoints,
            label: '🌀 AERIAL FLIP 360°!',
          });
        }
      }

      // Landing Detection
      if (this.position.y <= cfg.vehicle.groundSnapY) {
        this.completeLanding();
      }
    }

    // 5. Update forward longitudinal distance
    this.position.z += this.forwardSpeed * dt;

    // Synchronize quaternion
    this.quaternion.setFromEuler(this.rotation);
  }

  public launchOffRamp(rampHeight: number = 3.5): void {
    if (this.isAirborne) return;
    this.isAirborne = true;
    this.position.y += 0.4;
    this.verticalVelocity = GAME_CONFIG.flight.rampLaunchVerticalSpeed;
    this.forwardSpeed *= GAME_CONFIG.flight.rampLaunchForwardMult;
    this.accumulatedRoll = 0;
    this.accumulatedPitch = 0;
    this.stuntsThisJump = 0;
    this.airTime = 0;
  }

  private completeLanding(): void {
    const cfg = GAME_CONFIG;
    this.isAirborne = false;
    this.position.y = cfg.vehicle.groundSnapY;
    this.verticalVelocity = 0;

    // Normalize roll and pitch to [-PI, PI]
    const normRoll = Math.atan2(Math.sin(this.rotation.z), Math.cos(this.rotation.z));
    const normPitch = Math.atan2(Math.sin(this.rotation.x), Math.cos(this.rotation.x));

    const isRollSafe = Math.abs(normRoll) <= cfg.flight.landingMaxRollSafe;
    const isPitchSafe = Math.abs(normPitch) <= cfg.flight.landingMaxPitchSafe;

    if (isRollSafe && isPitchSafe) {
      // Clean Landing!
      this.cleanLandingsCount++;
      if (this.onStuntCallback) {
        this.onStuntCallback({
          type: 'CLEAN_LANDING',
          points: cfg.scoring.cleanLandingBonus,
          label: '✨ CLEAN LANDING!',
        });
      }
    } else if (Math.abs(normRoll) > Math.PI * 0.65) {
      // Upside down crash
      this.triggerCrash();
      return;
    } else {
      // Rough landing
      this.forwardSpeed *= 0.7; // Speed penalty
      if (this.onStuntCallback) {
        this.onStuntCallback({
          type: 'ROUGH_LANDING',
          points: 50,
          label: '⚠️ ROUGH LANDING',
        });
      }
    }

    // Reset angles cleanly to track level
    this.rotation.z = 0;
    this.rotation.x = 0;
    this.accumulatedRoll = 0;
    this.accumulatedPitch = 0;
    this.airTime = 0;
  }

  public triggerCrash(): void {
    if (this.isCrashed) return;
    this.isCrashed = true;
    this.crashesCount++;
    if (this.onStuntCallback) {
      this.onStuntCallback({
        type: 'CRASH',
        points: 0,
        label: '💥 CRASH OVERLOAD!',
      });
    }
  }

  public recoverFromCrash(): void {
    this.isCrashed = false;
    this.position.y = GAME_CONFIG.vehicle.groundSnapY;
    this.position.x = 0;
    this.rotation.set(0, 0, 0);
    this.forwardSpeed = 25; // Gentle restart boost
    this.verticalVelocity = 0;
    this.isAirborne = false;
  }

  private enforceTrackBoundaries(): void {
    if (this.position.x < -this.trackHalfWidth) {
      this.position.x = -this.trackHalfWidth;
      this.lateralVelocity = 8; // Inward rebound
      this.forwardSpeed *= 0.78;
      if (this.onCollisionCallback) {
        this.onCollisionCallback('barrier');
      }
    } else if (this.position.x > this.trackHalfWidth) {
      this.position.x = this.trackHalfWidth;
      this.lateralVelocity = -8; // Inward rebound
      this.forwardSpeed *= 0.78;
      if (this.onCollisionCallback) {
        this.onCollisionCallback('barrier');
      }
    }
  }

  public addEnergyBonus(amount: number): void {
    this.energy = Math.min(this.maxEnergy, this.energy + amount);
  }

  public getSpeedKmH(): number {
    return Math.round(this.forwardSpeed * 3.6);
  }
}
