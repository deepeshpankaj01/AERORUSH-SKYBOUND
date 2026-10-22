// AERORUSH: SKYBOUND - Scoring, Combo Multiplier, and Local High Scores
import { GAME_CONFIG } from '../config/GameConfig';

export interface ScoreSummary {
  finalScore: number;
  distanceMeters: number;
  stuntsExecuted: number;
  cleanLandings: number;
  energyPickups: number;
  maxSpeedKmH: number;
  maxCombo: number;
  isNewRecord: boolean;
}

export interface HighScoreRecord {
  score: number;
  distance: number;
  stunts: number;
  date: string;
}

const STORAGE_KEY = 'aerorush_skybound_records_v1';

export class ScoreManager {
  public currentScore: number = 0;
  public comboMultiplier: number = 1.0;
  public maxComboAchieved: number = 1.0;
  public distanceMeters: number = 0;
  public stuntsCount: number = 0;
  public cleanLandingsCount: number = 0;
  public energyPickupsCount: number = 0;
  public maxSpeedKmH: number = 0;

  private comboTimer: number = 0;
  private lastZPos: number = 0;

  // Notification callback for HUD
  public onTrickAnnouncement: ((label: string, bonus: number) => void) | null = null;
  public onComboChange: ((mult: number) => void) | null = null;
  private memoryRecords: HighScoreRecord[] = [];

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.currentScore = 0;
    this.comboMultiplier = 1.0;
    this.maxComboAchieved = 1.0;
    this.distanceMeters = 0;
    this.stuntsCount = 0;
    this.cleanLandingsCount = 0;
    this.energyPickupsCount = 0;
    this.maxSpeedKmH = 0;
    this.comboTimer = 0;
    this.lastZPos = 0;
  }

  public update(dt: number, currentZ: number, currentSpeedKmH: number, isDrifting: boolean): void {
    // 1. Distance tracking & points
    if (currentZ > this.lastZPos) {
      const deltaZ = currentZ - this.lastZPos;
      this.distanceMeters += deltaZ;
      this.currentScore += Math.floor(deltaZ * GAME_CONFIG.scoring.distPointsPerMeter);
      this.lastZPos = currentZ;
    }

    // 2. Max speed record
    if (currentSpeedKmH > this.maxSpeedKmH) {
      this.maxSpeedKmH = currentSpeedKmH;
    }

    // 3. Drift scoring
    if (isDrifting) {
      const driftBonus = Math.floor(GAME_CONFIG.scoring.driftPointsPerSec * dt * this.comboMultiplier);
      this.currentScore += driftBonus;
      this.refreshCombo();
    }

    // 4. Combo timer decay
    if (this.comboMultiplier > 1.0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) {
        this.resetCombo();
      }
    }
  }

  public addStuntPoints(points: number, label: string): void {
    this.stuntsCount++;
    this.bumpCombo();
    const totalAwarded = Math.floor(points * this.comboMultiplier);
    this.currentScore += totalAwarded;

    if (this.onTrickAnnouncement) {
      this.onTrickAnnouncement(label, totalAwarded);
    }
  }

  public addCleanLandingPoints(points: number): void {
    this.cleanLandingsCount++;
    this.bumpCombo();
    const totalAwarded = Math.floor(points * this.comboMultiplier);
    this.currentScore += totalAwarded;

    if (this.onTrickAnnouncement) {
      this.onTrickAnnouncement('✨ CLEAN LANDING!', totalAwarded);
    }
  }

  public addPickupPoints(): void {
    this.energyPickupsCount++;
    this.bumpCombo();
    const totalAwarded = Math.floor(GAME_CONFIG.scoring.energyPickupPoints * this.comboMultiplier);
    this.currentScore += totalAwarded;

    if (this.onTrickAnnouncement) {
      this.onTrickAnnouncement('⚡ ENERGY CELL!', totalAwarded);
    }
  }

  public addGatePoints(): void {
    this.bumpCombo(1.0); // Gates give an extra combo boost!
    const totalAwarded = Math.floor(GAME_CONFIG.scoring.stuntGatePoints * this.comboMultiplier);
    this.currentScore += totalAwarded;

    if (this.onTrickAnnouncement) {
      this.onTrickAnnouncement('🎯 STUNT GATE CLEARED!', totalAwarded);
    }
  }

  public onCrashOrCollision(): void {
    // Crash resets combo immediately
    this.resetCombo();
  }

  private bumpCombo(stepOverride?: number): void {
    const step = stepOverride || GAME_CONFIG.scoring.comboStep;
    this.comboMultiplier = Math.min(GAME_CONFIG.scoring.comboMax, +(this.comboMultiplier + step).toFixed(1));
    this.comboTimer = GAME_CONFIG.scoring.comboDecayTime;

    if (this.comboMultiplier > this.maxComboAchieved) {
      this.maxComboAchieved = this.comboMultiplier;
    }

    if (this.onComboChange) {
      this.onComboChange(this.comboMultiplier);
    }
  }

  private refreshCombo(): void {
    this.comboTimer = GAME_CONFIG.scoring.comboDecayTime;
  }

  private resetCombo(): void {
    if (this.comboMultiplier > 1.0) {
      this.comboMultiplier = 1.0;
      this.comboTimer = 0;
      if (this.onComboChange) {
        this.onComboChange(1.0);
      }
    }
  }

  public finalizeSummary(): ScoreSummary {
    const previousBest = this.getPersonalBest();
    const isNewRecord = this.currentScore > previousBest && this.currentScore > 0;

    this.saveRecord({
      score: this.currentScore,
      distance: Math.round(this.distanceMeters),
      stunts: this.stuntsCount,
      date: new Date().toLocaleDateString(),
    });

    return {
      finalScore: this.currentScore,
      distanceMeters: Math.round(this.distanceMeters),
      stuntsExecuted: this.stuntsCount,
      cleanLandings: this.cleanLandingsCount,
      energyPickups: this.energyPickupsCount,
      maxSpeedKmH: this.maxSpeedKmH,
      maxCombo: this.maxComboAchieved,
      isNewRecord,
    };
  }

  public getPersonalBest(): number {
    const records = this.getRecords();
    return records.length > 0 ? records[0].score : 0;
  }

  public getRecords(): HighScoreRecord[] {
    try {
      if (typeof localStorage !== 'undefined') {
        const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
          return JSON.parse(data) as HighScoreRecord[];
        }
        return [];
      }
    } catch (e) {
      console.warn('Could not read records from localStorage:', e);
    }
    return this.memoryRecords;
  }

  public saveRecord(record: HighScoreRecord): void {
    const records = this.getRecords();
    records.push(record);
    records.sort((a, b) => b.score - a.score);
    const top5 = records.slice(0, 5);

    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(top5));
        return;
      }
    } catch (e) {
      console.warn('Could not save record to localStorage:', e);
    }
    this.memoryRecords = top5;
  }

  public clearRecords(): void {
    this.memoryRecords = [];
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {
      console.warn('Could not clear records:', e);
    }
  }
}
