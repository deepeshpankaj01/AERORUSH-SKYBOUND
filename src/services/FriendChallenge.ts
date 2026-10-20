// AERORUSH: SKYBOUND - Friend Challenge Code Encoder & Decoder
// Allows players to challenge friends with identical track seeds, environments, and target scores.

export interface FriendChallengeData {
  version: number;
  creatorName: string;
  environmentId: string;
  seed: number;
  targetDistance: number;
  targetScore: number;
  stuntsTarget?: number;
  createdTimestamp: number;
}

export class FriendChallengeService {
  private static PREFIX = 'AERO';

  /**
   * Encodes a friend challenge into a human-readable share code
   */
  public static encodeChallenge(data: Omit<FriendChallengeData, 'version' | 'createdTimestamp'>): string {
    const payload: FriendChallengeData = {
      version: 1,
      creatorName: data.creatorName.trim().slice(0, 16) || 'PILOT',
      environmentId: data.environmentId,
      seed: Math.floor(Math.abs(data.seed)),
      targetDistance: Math.floor(Math.abs(data.targetDistance)),
      targetScore: Math.floor(Math.abs(data.targetScore)),
      stuntsTarget: data.stuntsTarget || 0,
      createdTimestamp: Date.now(),
    };

    const json = JSON.stringify(payload);
    // Base64 encode safe for URL and chat
    const b64 = btoa(unescape(encodeURIComponent(json)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    return `${this.PREFIX}-${b64}`;
  }

  /**
   * Decodes a friend challenge code
   */
  public static decodeChallenge(code: string): FriendChallengeData | null {
    if (!code || typeof code !== 'string') return null;

    let clean = code.trim();
    if (clean.startsWith(`${this.PREFIX}-`)) {
      clean = clean.slice(this.PREFIX.length + 1);
    } else if (clean.startsWith(this.PREFIX)) {
      clean = clean.slice(this.PREFIX.length);
    }

    try {
      // Revert base64 URL safe characters
      let base64 = clean.replace(/-/g, '+').replace(/_/g, '/');
      while (base64.length % 4) {
        base64 += '=';
      }
      const json = decodeURIComponent(escape(atob(base64)));
      const obj = JSON.parse(json) as FriendChallengeData;

      if (!obj || typeof obj.seed !== 'number' || typeof obj.targetScore !== 'number') {
        return null;
      }

      // Sanitize fields
      return {
        version: obj.version || 1,
        creatorName: (obj.creatorName || 'PILOT').slice(0, 16),
        environmentId: obj.environmentId || 'neon_dusk',
        seed: Math.max(1, Math.floor(obj.seed)),
        targetDistance: Math.max(500, Math.min(20000, obj.targetDistance || 3000)),
        targetScore: Math.max(0, Math.floor(obj.targetScore)),
        stuntsTarget: obj.stuntsTarget ? Math.floor(obj.stuntsTarget) : 0,
        createdTimestamp: obj.createdTimestamp || Date.now(),
      };
    } catch (_) {
      return null;
    }
  }

  /**
   * Generates a full URL for sharing a challenge
   */
  public static getShareUrl(code: string): string {
    const origin = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://aerorush.app';
    return `${origin}?challenge=${encodeURIComponent(code)}`;
  }

  /**
   * Checks if URL contains a challenge query param on page load
   */
  public static getChallengeFromUrl(): string | null {
    if (typeof window === 'undefined') return null;
    const params = new URLSearchParams(window.location.search);
    return params.get('challenge');
  }
}
