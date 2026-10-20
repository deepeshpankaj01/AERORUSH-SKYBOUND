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
    skyColor: 0x0c0618,
    fogColor: 0x120c24,
    fogDensity: 0.0035,
    sunColor: 0xff4488,
    sunIntensity: 2.2,
    sunPosition: [30, 40, -40],
    ambientColor: 0x1a122e,
    ambientIntensity: 1.4,
    roadColor: 0x080c14,
    roadMarkingsColor: 0x00f0ff,
    barrierColor: 0x0e1422,
    barrierGlowColor: 0x00d0ff,
    rampColor: 0x161e2e,
    rampGlowColor: 0xff0077,
    obstacleColor: 0xff2a4b,
    obstacleEmissive: 0xff0033,
    hasRain: false,
    hasDust: false,
    skylineStyle: 'cyber',
  },

  canyon_express: {
    id: 'canyon_express',
    name: 'Canyon Expressway',
    tagline: 'Sun-drenched sandstone canyon highway with desert thermal updrafts.',
    skyColor: 0x240e06,
    fogColor: 0x22120a,
    fogDensity: 0.003,
    sunColor: 0xffaa44,
    sunIntensity: 2.6,
    sunPosition: [40, 50, -30],
    ambientColor: 0x362014,
    ambientIntensity: 1.5,
    roadColor: 0x181310,
    roadMarkingsColor: 0xffaa00,
    barrierColor: 0x221812,
    barrierGlowColor: 0xff7700,
    rampColor: 0x2a1c14,
    rampGlowColor: 0xffaa00,
    obstacleColor: 0xe65100,
    obstacleEmissive: 0xff3d00,
    hasRain: false,
    hasDust: true,
    skylineStyle: 'canyon',
  },

  monsoon_highway: {
    id: 'monsoon_highway',
    name: 'Monsoon Highway',
    tagline: 'Storm-swept wet expressway with falling rain, mist, and road spray.',
    skyColor: 0x040810,
    fogColor: 0x08101e,
    fogDensity: 0.005,
    sunColor: 0x60a5fa,
    sunIntensity: 1.5,
    sunPosition: [10, 45, -20],
    ambientColor: 0x0c1626,
    ambientIntensity: 1.2,
    roadColor: 0x05070c,
    roadMarkingsColor: 0x38bdf8,
    barrierColor: 0x0a1420,
    barrierGlowColor: 0x0284c7,
    rampColor: 0x101a28,
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
    skyColor: 0x020308,
    fogColor: 0x060814,
    fogDensity: 0.0028,
    sunColor: 0xc084fc,
    sunIntensity: 2.4,
    sunPosition: [0, 60, -50],
    ambientColor: 0x16122c,
    ambientIntensity: 1.3,
    roadColor: 0x060810,
    roadMarkingsColor: 0xb026ff,
    barrierColor: 0x0d1020,
    barrierGlowColor: 0x9333ea,
    rampColor: 0x181430,
    rampGlowColor: 0xd946ef,
    obstacleColor: 0xf43f5e,
    obstacleEmissive: 0xe11d48,
    hasRain: false,
    hasDust: false,
    skylineStyle: 'orbital',
  },
};
