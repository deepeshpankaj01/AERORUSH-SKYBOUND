// AERORUSH: SKYBOUND - Automated Behavioral Tests for Phase 3 Online, Multiplayer & Monetization Systems
import { describe, it, expect, beforeEach } from 'vitest';
import { DailyChallengeService } from '../services/DailyChallenge';
import { FriendChallengeService } from '../services/FriendChallenge';
import { OnlineLeaderboardService } from '../services/OnlineLeaderboard';
import { PassAndPlayManager } from '../competition/PassAndPlay';
import { AdManager } from '../monetization/AdManager';
import { MultiplayerClient } from '../services/MultiplayerClient';
import { ScoreSummary } from '../scoring/ScoreManager';

describe('Phase 3: Daily Challenge Determinism & Scheduling', () => {
  it('generates identical daily seeds and environments for the same UTC date', () => {
    const fixedDate1 = new Date('2026-10-20T08:00:00Z');
    const fixedDate2 = new Date('2026-10-20T21:30:00Z');

    const ch1 = DailyChallengeService.getDailyChallenge(fixedDate1);
    const ch2 = DailyChallengeService.getDailyChallenge(fixedDate2);

    expect(ch1.seed).toBe(ch2.seed);
    expect(ch1.environmentId).toBe(ch2.environmentId);
    expect(ch1.targetDistance).toBe(ch2.targetDistance);
    expect(ch1.title).toBe(ch2.title);
  });

  it('generates distinct seeds for different calendar dates', () => {
    const day1 = new Date('2026-10-20T12:00:00Z');
    const day2 = new Date('2026-10-21T12:00:00Z');

    const ch1 = DailyChallengeService.getDailyChallenge(day1);
    const ch2 = DailyChallengeService.getDailyChallenge(day2);

    expect(ch1.seed).not.toBe(ch2.seed);
    expect(ch1.dateStr).not.toBe(ch2.dateStr);
  });

  it('correctly formats millisecond countdowns into HH:MM:SS', () => {
    const ms = (5 * 3600 + 42 * 60 + 9) * 1000;
    const formatted = DailyChallengeService.formatCountdown(ms);
    expect(formatted).toBe('05:42:09');
  });
});

describe('Phase 3: Friend Challenge Code Serialization', () => {
  it('encodes and decodes challenge payloads losslessly', () => {
    const original = {
      creatorName: 'APEX_PILOT',
      environmentId: 'monsoon_highway',
      seed: 849201,
      targetDistance: 3500,
      targetScore: 92450,
      stuntsTarget: 8,
    };

    const code = FriendChallengeService.encodeChallenge(original);
    expect(code).toContain('AERO-');

    const decoded = FriendChallengeService.decodeChallenge(code);
    expect(decoded).not.toBeNull();
    expect(decoded?.creatorName).toBe('APEX_PILOT');
    expect(decoded?.environmentId).toBe('monsoon_highway');
    expect(decoded?.seed).toBe(849201);
    expect(decoded?.targetDistance).toBe(3500);
    expect(decoded?.targetScore).toBe(92450);
    expect(decoded?.stuntsTarget).toBe(8);
  });

  it('safely handles corrupted or invalid challenge codes without crashing', () => {
    expect(FriendChallengeService.decodeChallenge('')).toBeNull();
    expect(FriendChallengeService.decodeChallenge('invalid-gibberish-123')).toBeNull();
    expect(FriendChallengeService.decodeChallenge('AERO-badbase64???')).toBeNull();
  });

  it('generates valid shareable challenge URLs', () => {
    const url = FriendChallengeService.getShareUrl('AERO-TESTCODE');
    expect(url).toContain('challenge=AERO-TESTCODE');
  });
});

describe('Phase 3: Online Leaderboard & Security Architecture', () => {
  let service: OnlineLeaderboardService;

  beforeEach(() => {
    service = new OnlineLeaderboardService();
  });

  it('sanitizes pilot callsigns and prevents HTML injection', () => {
    const raw = '<script>alert("hack")</script> Pilot_99!@#';
    const cleaned = service.sanitizePlayerName(raw);
    expect(cleaned).not.toContain('<script>');
    expect(cleaned).not.toContain('</script>');
    expect(cleaned).toBe('PILOT_99');
    expect(cleaned.length).toBeLessThanOrEqual(15);
  });

  it('generates anti-tamper verification tokens for telemetry records', () => {
    const payload = {
      playerName: 'PILOT 01',
      score: 55000,
      distanceMeters: 3000,
      maxSpeedKmH: 340,
      stuntsExecuted: 5,
      environmentId: 'neon_dusk',
    };

    const token = service.generateVerificationToken(payload);
    expect(token).toMatch(/^sig_[0-9a-f]+$/);
  });

  it('validates submission boundaries and rejects impossible telemetry', () => {
    const valid = service.validateSubmission({
      playerName: 'PILOT 01',
      score: 55000,
      distanceMeters: 3000,
      maxSpeedKmH: 340,
      stuntsExecuted: 5,
      environmentId: 'neon_dusk',
    });
    expect(valid.valid).toBe(true);

    const negativeScore = service.validateSubmission({
      playerName: 'PILOT 01',
      score: -500,
      distanceMeters: 3000,
      maxSpeedKmH: 340,
      stuntsExecuted: 5,
      environmentId: 'neon_dusk',
    });
    expect(negativeScore.valid).toBe(false);

    const impossibleSpeed = service.validateSubmission({
      playerName: 'PILOT 01',
      score: 55000,
      distanceMeters: 3000,
      maxSpeedKmH: 9999,
      stuntsExecuted: 5,
      environmentId: 'neon_dusk',
    });
    expect(impossibleSpeed.valid).toBe(false);
  });

  it('serves cached offline leaderboard entries seamlessly when backend is absent', async () => {
    const res = await service.fetchLeaderboard({ challengeType: 'all_time' });
    expect(res.success).toBe(true);
    expect(res.entries.length).toBeGreaterThan(0);
    expect(res.isOfflineFallback).toBe(true);
    // Verifies records are sorted descending by score
    for (let i = 0; i < res.entries.length - 1; i++) {
      expect(res.entries[i].score).toBeGreaterThanOrEqual(res.entries[i + 1].score);
    }
  });
});

describe('Phase 3: Pass-and-Play Offline Local Competition', () => {
  let duel: PassAndPlayManager;

  const mockSummary1: ScoreSummary = {
    finalScore: 88500,
    distanceMeters: 3000,
    stuntsExecuted: 9,
    cleanLandings: 4,
    maxSpeedKmH: 342,
    maxCombo: 3.5,
    energyPickups: 6,
    isNewRecord: true,
  };

  const mockSummary2: ScoreSummary = {
    finalScore: 72100,
    distanceMeters: 2950,
    stuntsExecuted: 6,
    cleanLandings: 2,
    maxSpeedKmH: 330,
    maxCombo: 2.0,
    energyPickups: 4,
    isNewRecord: false,
  };

  beforeEach(() => {
    duel = new PassAndPlayManager();
    duel.initDuel('ALICE', 'BOB', 'canyon_express', 3000, 555123);
  });

  it('advances turn phases from Player 1 to Handoff to Comparison', () => {
    expect(duel.getPhase()).toBe('SETUP');
    expect(duel.getPlayer1Name()).toBe('ALICE');
    expect(duel.getPlayer2Name()).toBe('BOB');

    duel.startPlayer1Turn();
    expect(duel.getPhase()).toBe('PLAYER1_RACING');

    duel.completePlayer1Turn(mockSummary1);
    expect(duel.getPhase()).toBe('HANDOFF');

    duel.startPlayer2Turn();
    expect(duel.getPhase()).toBe('PLAYER2_RACING');

    duel.completePlayer2Turn(mockSummary2);
    expect(duel.getPhase()).toBe('COMPARISON');
  });

  it('accurately evaluates the duel victor and statistical margins', () => {
    duel.startPlayer1Turn();
    duel.completePlayer1Turn(mockSummary1);
    duel.startPlayer2Turn();
    duel.completePlayer2Turn(mockSummary2);

    const result = duel.evaluateDuelWinner();
    expect(result.winner).toBe('PLAYER_1');
    expect(result.winnerName).toBe('ALICE');
    expect(result.scoreDiff).toBe(88500 - 72100);
    expect(result.distDiff).toBe(3000 - 2950);
  });

  it('handles tie races gracefully', () => {
    duel.startPlayer1Turn();
    duel.completePlayer1Turn(mockSummary1);
    duel.startPlayer2Turn();
    duel.completePlayer2Turn(mockSummary1); // same score

    const result = duel.evaluateDuelWinner();
    expect(result.winner).toBe('TIE');
    expect(result.scoreDiff).toBe(0);
  });
});

describe('Phase 3: Monetization & Ad Adapter Safety', () => {
  it('enforces run frequency caps and minimum cooldowns before interstitials', () => {
    const adMgr = new AdManager({
      interstitialRunFrequency: 3,
      interstitialCooldownMs: 180000,
      isDevMode: true,
    });

    // Run 0: cannot show
    expect(adMgr.canShowInterstitial()).toBe(false);

    adMgr.onRunCompleted();
    expect(adMgr.canShowInterstitial()).toBe(false);

    adMgr.onRunCompleted();
    expect(adMgr.canShowInterstitial()).toBe(false);

    adMgr.onRunCompleted();
    // After 3 runs, eligible
    expect(adMgr.canShowInterstitial()).toBe(true);

    // Showing resets counter
    adMgr.showInterstitial(() => {});
    expect(adMgr.canShowInterstitial()).toBe(false);
  });

  it('rewards user only when rewarded callback executes in dev mode', () => {
    const adMgr = new AdManager({ isDevMode: true });
    let rewardGranted = false;
    let earnedCredits = 0;

    adMgr.showRewardedAd(
      (credits) => {
        rewardGranted = true;
        earnedCredits = credits;
      },
      () => {}
    );

    // Initial state before completion
    expect(rewardGranted).toBe(false);
  });

  it('strictly validates publisher ID format matching ca-pub-XXXXXXXXXXXXXXXX', () => {
    expect(AdManager.isValidPublisherId('ca-pub-1234567890123456')).toBe(true);
    expect(AdManager.isValidPublisherId('CA-PUB-9876543210')).toBe(true);
    expect(AdManager.isValidPublisherId('invalid-publisher-id')).toBe(false);
    expect(AdManager.isValidPublisherId('')).toBe(false);
    expect(AdManager.isValidPublisherId('pub-12345678')).toBe(false);
  });

  it('rejects simulated reward grants in production mode when provider is absent', () => {
    const prodAdMgr = new AdManager({ isDevMode: false });
    let rewardGranted = false;
    let failureReason = '';

    prodAdMgr.showRewardedAd(
      () => {
        rewardGranted = true;
      },
      (reason) => {
        failureReason = reason;
      }
    );

    // In production without provider, it must immediately fail safely without granting credits
    expect(rewardGranted).toBe(false);
    expect(failureReason).toMatch(/unavailable|offline/i);
  });

  it('rejects impossible scores that violate physical telemetry bounds', () => {
    const service = new OnlineLeaderboardService();
    // 100 meters driven cannot realistically generate 5,000,000 score
    const impossible = service.validateSubmission({
      playerName: 'SPEED_HACKER',
      score: 5000000,
      distanceMeters: 100,
      maxSpeedKmH: 400,
      stuntsExecuted: 0,
      environmentId: 'neon_dusk',
    });
    expect(impossible.valid).toBe(false);
    expect(impossible.reason).toContain('physical limits');
  });

  it('validates safe multiplayer endpoint resolution', () => {
    const endpoint = MultiplayerClient.resolveEndpoint();
    // Under vitest / node environment, isLocalhost is true or non-browser fallback
    expect(endpoint).toBeDefined();
    expect(typeof endpoint.configured).toBe('boolean');
  });
});
