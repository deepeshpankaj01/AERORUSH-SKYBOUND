// AERORUSH: SKYBOUND - Multi-Environment Definitions & Atmospheric Palettes

export interface EnvironmentTheme {
  id: 'neon_dusk' | 'canyon_express' | 'monsoon_highway' | 'orbital_skyway';
  name: string;
  tagline: string;
  skyColor: number;
  fogColor: number;
  fogDensity: number;
  sunColor: number;
  sunIntensity: number;
  sunPosition: [number, number, number];
  ambientColor: number;
  ambientIntensity: number;
  roadColor: number;
  roadMarkingsColor: number;
  barrierColor: number;
  barrierGlowColor: number;
  rampColor: number;
  rampGlowColor: number;
  obstacleColor: number;
  obstacleEmissive: number;
  hasRain: boolean;
  hasDust: boolean;
  skylineStyle: 'cyber' | 'canyon' | 'monsoon' | 'orbital';
}

export const ENVIRONMENTS: Record<string, EnvironmentTheme> = {
  neon_dusk: {
    id: 'neon_dusk',
    name: 'Neon Skyline (Dusk)',
    tagline: 'High-speed elevated expressway through a twilight cyberpunk metropolis.',
    skyColor: 0x1c133a,
    fogColor: 0x241850,
    fogDensity: 0.0022,
    sunColor: 0xff6b9d,
    sunIntensity: 3.2,
    sunPosition: [30, 40, -40],
    ambientColor: 0x483678,
    ambientIntensity: 2.0,
    roadColor: 0x1a2332,
    roadMarkingsColor: 0x00ffff,
    barrierColor: 0x18243a,
    barrierGlowColor: 0x00f0ff,
    rampColor: 0x222e44,
    rampGlowColor: 0xff0088,
    obstacleColor: 0xff3355,
    obstacleEmissive: 0xff0044,
    hasRain: false,
    hasDust: false,
    skylineStyle: 'cyber',
  },

  canyon_express: {
    id: 'canyon_express',
    name: 'Canyon Expressway',
    tagline: 'Sun-drenched sandstone canyon highway with desert thermal updrafts.',
    skyColor: 0x3a1a0c,
    fogColor: 0x301e14,
    fogDensity: 0.0024,
    sunColor: 0xffb84d,
    sunIntensity: 3.2,
    sunPosition: [40, 50, -30],
    ambientColor: 0x583a28,
    ambientIntensity: 2.0,
    roadColor: 0x2a201a,
    roadMarkingsColor: 0xffbb00,
    barrierColor: 0x30241c,
    barrierGlowColor: 0xff8800,
    rampColor: 0x38281e,
    rampGlowColor: 0xffbb00,
    obstacleColor: 0xe65100,
    obstacleEmissive: 0xff4d00,
    hasRain: false,
    hasDust: true,
    skylineStyle: 'canyon',
  },

  monsoon_highway: {
    id: 'monsoon_highway',
    name: 'Monsoon Highway',
    tagline: 'Storm-swept wet expressway with falling rain, mist, and road spray.',
    skyColor: 0x0c1628,
    fogColor: 0x142238,
    fogDensity: 0.0038,
    sunColor: 0x7ec0ff,
    sunIntensity: 2.4,
    sunPosition: [10, 45, -20],
    ambientColor: 0x22324a,
    ambientIntensity: 1.8,
    roadColor: 0x141c2a,
    roadMarkingsColor: 0x38bdf8,
    barrierColor: 0x16263a,
    barrierGlowColor: 0x0284c7,
    rampColor: 0x1a2a3e,
    rampGlowColor: 0x00f0ff,
    obstacleColor: 0xef4444,
    obstacleEmissive: 0xdc2626,
    hasRain: true,
    hasDust: false,
    skylineStyle: 'monsoon',
  },

  orbital_skyway: {
    id: 'orbital_skyway',
    name: 'Orbital Skyway',
    tagline: 'Zero-gravity elevated highway suspended in low planetary orbit.',
    skyColor: 0x121428,
    fogColor: 0x181a38,
    fogDensity: 0.0022,
    sunColor: 0xd699ff,
    sunIntensity: 3.0,
    sunPosition: [0, 60, -50],
    ambientColor: 0x2c2054,
    ambientIntensity: 1.9,
    roadColor: 0x16182c,
    roadMarkingsColor: 0xe056fd,
    barrierColor: 0x1a1e3c,
    barrierGlowColor: 0xa855f7,
    rampColor: 0x242046,
    rampGlowColor: 0xf43f5e,
    obstacleColor: 0xf43f5e,
    obstacleEmissive: 0xe11d48,
    hasRain: false,
    hasDust: false,
    skylineStyle: 'orbital',
  },
};
