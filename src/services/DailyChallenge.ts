// AERORUSH: SKYBOUND - Deterministic Daily & Weekly Challenge Service
// Generates identical seeds and challenge requirements worldwide based on UTC calendar dates.

export interface DailyChallengeInfo {
  id: string;             // e.g. "daily-2026-10-20"
  type: 'daily' | 'weekly';
  dateStr: string;        // "2026-10-20"
  environmentId: string;  // "neon_dusk" | "canyon_express" | "monsoon_highway" | "orbital_skyway"
  environmentName: string;
  seed: number;           // Deterministic track generation seed
  targetDistance: number; // e.g. 3500
  title: string;
  description: string;
  rewardCredits: number;
  timeRemainingMs: number;
}

export class DailyChallengeService {
  private static ENVIRONMENTS_CYCLE = [
    { id: 'neon_dusk', name: 'Neon Dusk' },
    { id: 'canyon_express', name: 'Canyon Express' },
    { id: 'monsoon_highway', name: 'Monsoon Highway' },
    { id: 'orbital_skyway', name: 'Orbital Skyway' },
  ];

  /**
   * Deterministic Mulberry32 32-bit PRNG from an integer seed
   */
  public static mulberry32(a: number): () => number {
    return () => {
      let t = (a += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /**
   * Hashes a date string to a 32-bit positive integer
   */
  public static hashDateString(str: string): number {
    let hash = 2166136261;
    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  /**
   * Get formatted UTC date string "YYYY-MM-DD"
   */
  public static getUtcDateString(date: Date = new Date()): string {
    const y = date.getUTCFullYear();
    const m = String(date.getUTCMonth() + 1).padStart(2, '0');
    const d = String(date.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  /**
   * Get the current Daily Challenge specification
   */
  public static getDailyChallenge(now: Date = new Date()): DailyChallengeInfo {
    const dateStr = this.getUtcDateString(now);
    const hash = this.hashDateString(`daily_${dateStr}`);
    const rng = this.mulberry32(hash);

    const envIdx = Math.floor(rng() * this.ENVIRONMENTS_CYCLE.length);
    const env = this.ENVIRONMENTS_CYCLE[envIdx];
    const targetDistance = 2500 + Math.floor(rng() * 4) * 500; // 2500, 3000, 3500, or 4000
    const seed = 100000 + Math.floor(rng() * 899999);

    // Calculate time remaining until midnight UTC
    const midnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0));
    const timeRemainingMs = Math.max(0, midnight.getTime() - now.getTime());

    const titles = [
      'TURBINE OVERDRIVE',
      'APEX VELOCITY',
      'SKYLINE INVERSION',
      'MONSOON SURGE',
      'COSMIC RUNWAY',
      'AERO DRIFT PROTOCOL',
    ];
    const titleIdx = Math.floor(rng() * titles.length);

    return {
      id: `daily-${dateStr}`,
      type: 'daily',
      dateStr,
      environmentId: env.id,
      environmentName: env.name,
      seed,
      targetDistance,
      title: titles[titleIdx],
      description: `Complete the ${targetDistance.toLocaleString()}m course in ${env.name}. Master stunts to top the leaderboard.`,
      rewardCredits: 1500,
      timeRemainingMs,
    };
  }

  /**
   * Format milliseconds into HH:MM:SS
   */
  public static formatCountdown(ms: number): string {
    const totalSecs = Math.floor(ms / 1000);
    const hours = Math.floor(totalSecs / 3600);
    const minutes = Math.floor((totalSecs % 3600) / 60);
    const seconds = totalSecs % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
}
