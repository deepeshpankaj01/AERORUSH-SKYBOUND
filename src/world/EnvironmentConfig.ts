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
    skyColor: 0x140a28,
    fogColor: 0x181032,
    fogDensity: 0.0028,
    sunColor: 0xff5599,
    sunIntensity: 2.8,
    sunPosition: [30, 40, -40],
    ambientColor: 0x322458,
    ambientIntensity: 1.8,
    roadColor: 0x151c28,
    roadMarkingsColor: 0x00f8ff,
    barrierColor: 0x141e30,
    barrierGlowColor: 0x00e8ff,
    rampColor: 0x1e283c,
    rampGlowColor: 0xff0088,
    obstacleColor: 0xff2a4b,
    obstacleEmissive: 0xff0044,
    hasRain: false,
    hasDust: false,
    skylineStyle: 'cyber',
  },

  canyon_express: {
    id: 'canyon_express',
    name: 'Canyon Expressway',
    tagline: 'Sun-drenched sandstone canyon highway with desert thermal updrafts.',
    skyColor: 0x2e140a,
    fogColor: 0x281810,
    fogDensity: 0.0026,
    sunColor: 0xffb044,
    sunIntensity: 3.0,
    sunPosition: [40, 50, -30],
    ambientColor: 0x483222,
    ambientIntensity: 1.8,
    roadColor: 0x261e18,
    roadMarkingsColor: 0xffbb00,
    barrierColor: 0x2c2018,
    barrierGlowColor: 0xff8800,
    rampColor: 0x34241a,
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
    skyColor: 0x081020,
    fogColor: 0x101c30,
    fogDensity: 0.0042,
    sunColor: 0x72b8ff,
    sunIntensity: 2.2,
    sunPosition: [10, 45, -20],
    ambientColor: 0x1c283c,
    ambientIntensity: 1.6,
    roadColor: 0x121824,
    roadMarkingsColor: 0x38bdf8,
    barrierColor: 0x122030,
    barrierGlowColor: 0x0284c7,
    rampColor: 0x182638,
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
    skyColor: 0x0a0c1a,
    fogColor: 0x101428,
    fogDensity: 0.0024,
    sunColor: 0xd094ff,
    sunIntensity: 2.8,
    sunPosition: [0, 60, -50],
    ambientColor: 0x241a44,
    ambientIntensity: 1.7,
    roadColor: 0x121424,
    roadMarkingsColor: 0xd946ef,
    barrierColor: 0x161a32,
    barrierGlowColor: 0xa855f7,
    rampColor: 0x201c3c,
    rampGlowColor: 0xf43f5e,
    obstacleColor: 0xf43f5e,
    obstacleEmissive: 0xe11d48,
    hasRain: false,
    hasDust: false,
    skylineStyle: 'orbital',
  },
};
