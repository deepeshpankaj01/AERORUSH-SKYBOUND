// AERORUSH: SKYBOUND - Central Game Configuration

export interface QualityProfile {
  name: 'low' | 'medium' | 'high';
  pixelRatio: number;
  shadows: boolean;
  shadowMapSize: number;
  maxParticles: number;
  drawDistance: number;
  cityDetail: number;
}

export const QUALITY_PROFILES: Record<'low' | 'medium' | 'high', QualityProfile> = {
  low: {
    name: 'low',
    pixelRatio: 1.0,
    shadows: false,
    shadowMapSize: 512,
    maxParticles: 250,
    drawDistance: 350,
    cityDetail: 40,
  },
  medium: {
    name: 'medium',
    pixelRatio: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 1.5) : 1.5,
    shadows: true,
    shadowMapSize: 1024,
    maxParticles: 600,
    drawDistance: 500,
    cityDetail: 80,
  },
  high: {
    name: 'high',
    pixelRatio: typeof window !== 'undefined' ? Math.min(window.devicePixelRatio || 1, 2.0) : 2.0,
    shadows: true,
    shadowMapSize: 2048,
    maxParticles: 1200,
    drawDistance: 650,
    cityDetail: 140,
  },
};

export const GAME_CONFIG = {
  // Vehicle Dynamics
  vehicle: {
    width: 2.1,
    length: 4.8,
    height: 1.15,
    mass: 1450, // kg equivalent
    baseTopSpeed: 82, // m/s (~295 km/h)
    boostTopSpeed: 110, // m/s (~396 km/h)
    reverseTopSpeed: 20, // m/s (~72 km/h)
    acceleration: 48, // m/s^2
    brakingDecel: 60, // m/s^2
    naturalDrag: 0.985,
    steerSpeed: 3.4, // rad/s
    steerReturnSpeed: 5.5,
    maxSteerAngle: 0.42, // radians (~24 deg)
    lateralFriction: 0.92,
    driftLateralFriction: 0.975,
    driftSteerFactor: 1.45,
    groundSnapY: 0.6,
  },

  // Energy & Boost
  energy: {
    max: 100,
    boostDrainPerSec: 28,
    thrustDrainPerSec: 32,
    passiveRechargeRate: 9, // per sec when not boosting
    pickupRechargeBonus: 35,
  },

  // Flight & Aerial Stunts
  flight: {
    gravity: 34, // m/s^2 downward
    rampLaunchVerticalSpeed: 24, // m/s initial upward velocity
    rampLaunchForwardMult: 1.25,
    thrusterLiftAccel: 45, // m/s^2 vertical thrust upward
    thrusterMaxRiseSpeed: 30, // m/s max upward speed
    airPitchSpeed: 4.5, // rad/s
    airRollSpeed: 6.8, // rad/s for barrel roll
    stuntThresholdAngle: Math.PI * 1.85, // ~333 deg to count as full 360
    landingMaxRollSafe: 0.52, // radians (~30 deg)
    landingMaxPitchSafe: 0.45,
  },

  // Scoring
  scoring: {
    distPointsPerMeter: 1,
    energyPickupPoints: 150,
    driftPointsPerSec: 120,
    barrelRollPoints: 500,
    flipPoints: 600,
    stuntGatePoints: 400,
    cleanLandingBonus: 350,
    comboStep: 0.5,
    comboMax: 8.0,
    comboDecayTime: 3.2, // seconds without stunt/drift before combo resets
  },

  // World & Track
  world: {
    roadWidth: 26, // meters
    segmentLength: 80, // meters per segment
    activeSegments: 8, // total segments kept alive ahead
    totalStageLength: 5000, // meters before complete or endless milestone
    barrierHeight: 1.6,
    fogNear: 60,
    fogFar: 500,
    colors: {
      road: 0x070b12,
      roadMarkings: 0x00f0ff,
      roadBarrier: 0x0f1826,
      barrierGlow: 0x00b4d8,
      sky: 0x04060a,
      cyanGlow: 0x00f0ff,
      orangeAccent: 0xff5500,
      stuntRing: 0xff0077,
    },
  },

  // Audio Synthesizer
  audio: {
    masterVolume: 0.8,
    sfxEnabled: true,
  },
};
