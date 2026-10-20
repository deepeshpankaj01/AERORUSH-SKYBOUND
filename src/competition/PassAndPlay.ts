// AERORUSH: SKYBOUND - Shared Device Pass-and-Play Offline 2-Player Duel Manager
// Allows 2 pilots on 1 device to race the identical track seed, with ghost playback & comparison.

import { ScoreSummary } from '../scoring/ScoreManager';
import { GhostRecording } from '../replay/GhostSystem';

export interface DuelPlayerResult {
  playerName: string;
  summary: ScoreSummary;
  ghostData?: GhostRecording;
}

export type DuelPhase = 'SETUP' | 'PLAYER1_RACING' | 'HANDOFF' | 'PLAYER2_RACING' | 'COMPARISON';

export class PassAndPlayManager {
  private phase: DuelPhase = 'SETUP';
  private player1Name: string = 'PILOT 1';
  private player2Name: string = 'PILOT 2';
  private trackSeed: number = 442001;
  private environmentId: string = 'neon_dusk';
  private targetDistance: number = 3000;

  private player1Result: DuelPlayerResult | null = null;
  private player2Result: DuelPlayerResult | null = null;

  public initDuel(p1Name: string, p2Name: string, envId: string, dist: number, seed?: number): void {
    this.player1Name = p1Name.trim() || 'PILOT 1';
    this.player2Name = p2Name.trim() || 'PILOT 2';
    this.environmentId = envId;
    this.targetDistance = dist;
    this.trackSeed = seed || (100000 + Math.floor(Math.random() * 899999));
    this.phase = 'SETUP';
    this.player1Result = null;
    this.player2Result = null;
  }

  public getPhase(): DuelPhase {
    return this.phase;
  }

  public getPlayer1Name(): string {
    return this.player1Name;
  }

  public getPlayer2Name(): string {
    return this.player2Name;
  }

  public getTrackSeed(): number {
    return this.trackSeed;
  }

  public getEnvironmentId(): string {
    return this.environmentId;
  }

  public getTargetDistance(): number {
    return this.targetDistance;
  }

  public startPlayer1Turn(): void {
    this.phase = 'PLAYER1_RACING';
  }

  public completePlayer1Turn(summary: ScoreSummary, ghostData?: GhostRecording): void {
    this.player1Result = {
      playerName: this.player1Name,
      summary,
      ghostData,
    };
    this.phase = 'HANDOFF';
  }

  public startPlayer2Turn(): void {
    this.phase = 'PLAYER2_RACING';
  }

  public completePlayer2Turn(summary: ScoreSummary, ghostData?: GhostRecording): void {
    this.player2Result = {
      playerName: this.player2Name,
      summary,
      ghostData,
    };
    this.phase = 'COMPARISON';
  }

  public getPlayer1Result(): DuelPlayerResult | null {
    return this.player1Result;
  }

  public getPlayer2Result(): DuelPlayerResult | null {
    return this.player2Result;
  }

  /**
   * Determine the victor and stats delta
   */
  public evaluateDuelWinner(): {
    winner: 'PLAYER_1' | 'PLAYER_2' | 'TIE';
    winnerName: string;
    scoreDiff: number;
    distDiff: number;
    speedDiff: number;
  } {
    const s1 = this.player1Result?.summary.finalScore || 0;
    const s2 = this.player2Result?.summary.finalScore || 0;
    const d1 = this.player1Result?.summary.distanceMeters || 0;
    const d2 = this.player2Result?.summary.distanceMeters || 0;
    const v1 = this.player1Result?.summary.maxSpeedKmH || 0;
    const v2 = this.player2Result?.summary.maxSpeedKmH || 0;

    let winner: 'PLAYER_1' | 'PLAYER_2' | 'TIE' = 'TIE';
    let winnerName = 'EVEN SPLIT';

    if (s1 > s2) {
      winner = 'PLAYER_1';
      winnerName = this.player1Name;
    } else if (s2 > s1) {
      winner = 'PLAYER_2';
      winnerName = this.player2Name;
    }

    return {
      winner,
      winnerName,
      scoreDiff: Math.abs(s1 - s2),
      distDiff: Math.abs(d1 - d2),
      speedDiff: Math.abs(v1 - v2),
    };
  }

  public reset(): void {
    this.phase = 'SETUP';
    this.player1Result = null;
    this.player2Result = null;
  }
}
