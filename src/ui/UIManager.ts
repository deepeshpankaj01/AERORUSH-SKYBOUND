// AERORUSH: SKYBOUND - Complete Phase 3 UI, Multiplayer Lobby, Duels, Leaderboard & Social Exporter
// Integrates Online Leaderboards, Real-Time Rooms, Pass-and-Play, Daily Challenges, and Ad Adapter.

import { GameStateManager, GameStateType } from '../core/GameState';
import { ScoreSummary, ScoreManager } from '../scoring/ScoreManager';
import { QualityProfile, QUALITY_PROFILES } from '../config/GameConfig';
import {
  ProgressionManager,
  PAINT_CATALOG,
  WHEEL_CATALOG,
  UNDERGLOW_CATALOG,
  THRUSTER_CATALOG,
  VehicleUpgrades,
} from '../progression/ProgressionManager';
import { CareerManager, CAREER_MISSIONS } from '../progression/CareerManager';
import { AchievementManager, AchievementDef } from '../progression/AchievementManager';
import { ENVIRONMENTS } from '../world/EnvironmentConfig';

import { OnlineLeaderboardService, LeaderboardEntry } from '../services/OnlineLeaderboard';
import { DailyChallengeService, DailyChallengeInfo } from '../services/DailyChallenge';
import { FriendChallengeService, FriendChallengeData } from '../services/FriendChallenge';
import { AdManager } from '../monetization/AdManager';
import { ScoreCardGenerator } from '../social/ScoreCardGenerator';
import { PassAndPlayManager, DuelPlayerResult } from '../competition/PassAndPlay';
import { MultiplayerClient, MultiplayerRoomInfo } from '../services/MultiplayerClient';

export interface Phase3UIEventHandlers {
  onStartRace: (options?: {
    environmentId?: string;
    stageLength?: number;
    isCareer?: boolean;
    isGhost?: boolean;
    seed?: number;
    customGhost?: any;
  }) => void;
  onRestartRace: () => void;
  onResume: () => void;
  onPause: () => void;
  onAbortToMenu: () => void;
  onOpenGarage: () => void;
  onCloseGarage: () => void;
  onQualityChange: (profile: QualityProfile) => void;
  onMasterVolumeChange: (val: number) => void;
  onMusicVolumeChange: (val: number) => void;
  onSfxVolumeChange: (val: number) => void;
  onReducedMotionToggle: (enabled: boolean) => void;
  onVibrationToggle: (enabled: boolean) => void;
  onResetData: () => void;
  onCosmeticsChanged?: () => void;
}

export class UIManager {
  private stateMgr: GameStateManager;
  private scoreMgr: ScoreManager;
  private progression: ProgressionManager;
  private careerMgr: CareerManager;
  private achieveMgr: AchievementManager;
  private handlers: Phase3UIEventHandlers;
  private settingsReturnState: GameStateType = 'MENU';

  // Online/Multiplayer Subsystem Services (Preserved for future use; disabled in offline release)
  public onlineLeaderboard: OnlineLeaderboardService | null = null;
  public adManager: AdManager | null = null;
  public passAndPlay: PassAndPlayManager | null = null;
  public mpClient: MultiplayerClient | null = null;

  // Active Selections & State
  private activeGarageTab: 'upgrades' | 'paints' | 'wheels' | 'underglow' | 'thrusters' = 'upgrades';
  private selectedQuickEnvId: string = 'neon_dusk';
  private selectedQuickDist: number = 3000;
  private selectedQuickGhost: boolean = true;

  private selectedMpEnvId: string = 'neon_dusk';
  private selectedMpDist: number = 3000;

  private selectedDuelEnvId: string = 'neon_dusk';
  private activeLeaderboardTab: 'global' | 'daily' | 'local' = 'global';
  private activeEnvFilter: string = 'all';

  private lastSummary: ScoreSummary | null = null;
  private dailyChallengeInfo: DailyChallengeInfo | null = null;
  private pendingFriendChallenge: FriendChallengeData | null = null;

  // Global & HUD Nodes
  private globalBar: HTMLElement | null;
  private globalCreditsVal: HTMLElement | null;
  private garageCreditsVal: HTMLElement | null;
  private networkStatusText: HTMLElement | null;
  private networkDot: HTMLElement | null;
  private hudContainer: HTMLElement | null;
  private hudScore: HTMLElement | null;
  private hudComboBadge: HTMLElement | null;
  private hudComboMult: HTMLElement | null;
  private hudTrickBanner: HTMLElement | null;
  private hudDistance: HTMLElement | null;
  private hudTimer: HTMLElement | null;
  private hudSpeed: HTMLElement | null;
  private hudSpeedArc: SVGPathElement | null;
  private hudEnergyBar: HTMLElement | null;
  private hudEnergyPercent: HTMLElement | null;
  private hudFlightIndicator: HTMLElement | null;
  private hudCountdown: HTMLElement | null;
  private hudCountdownNumber: HTMLElement | null;
  private hudCrashAlert: HTMLElement | null;
  private hudTutorial: HTMLElement | null;
  private hudGhostDelta: HTMLElement | null;

  // Toast
  private toastEl: HTMLElement | null;
  private toastTitle: HTMLElement | null;
  private toastDesc: HTMLElement | null;
  private toastReward: HTMLElement | null;
  private toastTimeout: number | null = null;
  private tutorialTimeout: number | null = null;

  private raceStartTime: number = 0;
  private trickTimeout: number | null = null;
  private isMyMpReady: boolean = false;

  constructor(
    stateMgr: GameStateManager,
    scoreMgr: ScoreManager,
    progression: ProgressionManager,
    careerMgr: CareerManager,
    achieveMgr: AchievementManager,
    handlers: Phase3UIEventHandlers,
    services?: {
      onlineLeaderboard?: OnlineLeaderboardService;
      adManager?: AdManager;
      passAndPlay?: PassAndPlayManager;
      mpClient?: MultiplayerClient;
    }
  ) {
    this.stateMgr = stateMgr;
    this.scoreMgr = scoreMgr;
    this.progression = progression;
    this.careerMgr = careerMgr;
    this.achieveMgr = achieveMgr;
    this.handlers = handlers;

    // In offline release, do not instantiate external network services
    this.onlineLeaderboard = services?.onlineLeaderboard || null;
    this.adManager = services?.adManager || null;
    this.passAndPlay = services?.passAndPlay || null;
    this.mpClient = services?.mpClient || null;

    // Cache DOM Nodes
    this.globalBar = document.getElementById('global-bar');
    this.globalCreditsVal = document.getElementById('global-credits-val');
    this.garageCreditsVal = document.getElementById('garage-credits-val');
    this.networkStatusText = document.getElementById('network-status-text');
    this.networkDot = document.querySelector('.status-dot');

    this.hudContainer = document.getElementById('game-hud');
    this.hudScore = document.getElementById('hud-score');
    this.hudComboBadge = document.getElementById('hud-combo-badge');
    this.hudComboMult = document.getElementById('hud-combo-mult');
    this.hudTrickBanner = document.getElementById('hud-trick-notification');
    this.hudDistance = document.getElementById('hud-distance');
    this.hudTimer = document.getElementById('hud-timer');
    this.hudSpeed = document.getElementById('hud-speed');
    this.hudSpeedArc = document.getElementById('speed-meter-arc') as unknown as SVGPathElement;
    this.hudEnergyBar = document.getElementById('hud-energy-bar');
    this.hudEnergyPercent = document.getElementById('hud-energy-percent');
    this.hudFlightIndicator = document.getElementById('hud-flight-indicator');
    this.hudCountdown = document.getElementById('hud-countdown');
    this.hudCountdownNumber = document.getElementById('countdown-number');
    this.hudCrashAlert = document.getElementById('hud-crash-alert');
    this.hudTutorial = document.getElementById('hud-tutorial');
    this.hudGhostDelta = document.getElementById('hud-ghost-delta');

    this.toastEl = document.getElementById('toast-achievement');
    this.toastTitle = document.getElementById('toast-title');
    this.toastDesc = document.getElementById('toast-desc');
    this.toastReward = document.getElementById('toast-reward');

    this.bindDomEvents();
    this.setupNetworkMonitor();
    this.updateCreditsDisplay();
    this.updateMenuBadges();

    // Listen to state changes
    this.stateMgr.onStateChange((next, prev) => this.handleStateTransition(next, prev));

    // Connect scoring trick notifications
    this.scoreMgr.onTrickAnnouncement = (label, bonus) => {
      this.showTrickBanner(`${label} +${bonus}`);
    };

    this.scoreMgr.onComboChange = (mult) => {
      if (this.hudComboBadge && this.hudComboMult) {
        if (mult > 1.0) {
          this.hudComboBadge.classList.remove('hidden');
          this.hudComboMult.textContent = `${mult.toFixed(1)}x`;
        } else {
          this.hudComboBadge.classList.add('hidden');
        }
      }
    };

    // Progression listener
    this.progression.onDataChanged(() => {
      this.updateCreditsDisplay();
      if (this.stateMgr.is('GARAGE')) {
        this.renderGarageTabContent();
        this.handlers.onCosmeticsChanged?.();
      }
    });

    // Achievement listener
    this.achieveMgr.onAchievementUnlocked = (ach) => {
      this.showAchievementToast(ach);
    };
  }

  private setupNetworkMonitor(): void {
    const updateStorageStatus = () => {
      if (this.networkStatusText && this.networkDot) {
        const isOnline = typeof navigator !== 'undefined' ? navigator.onLine : false;
        this.networkDot.className = 'status-dot online';
        this.networkStatusText.textContent = isOnline
          ? 'OFFLINE READY • LOCAL SAVE'
          : 'OFFLINE MODE • LOCAL SAVE';
      }
    };

    window.addEventListener('online', updateStorageStatus);
    window.addEventListener('offline', updateStorageStatus);
    updateStorageStatus();
  }

  private updateCreditsDisplay(): void {
    const val = this.progression.getData().credits.toLocaleString();
    if (this.globalCreditsVal) this.globalCreditsVal.textContent = val;
    if (this.garageCreditsVal) this.garageCreditsVal.textContent = val;
  }

  private bindDomEvents(): void {
    // Main Menu Nav Buttons
    document.getElementById('btn-main-play')?.addEventListener('click', () => this.launchCurrentLevel());
    document.getElementById('btn-nav-garage')?.addEventListener('click', () => this.handlers.onOpenGarage());
    document.getElementById('btn-nav-settings')?.addEventListener('click', () => this.openSettings());

    // Garage Screen
    document.getElementById('btn-garage-back')?.addEventListener('click', () => this.handlers.onCloseGarage());
    const garageTabs = document.querySelectorAll('.garage-tab');
    garageTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const tabCategory = tab.getAttribute('data-tab');
        if (tabCategory) {
          garageTabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          this.activeGarageTab = tabCategory as any;
          this.renderGarageTabContent();
        }
      });
    });

    // Settings Modal
    document.getElementById('btn-settings-back')?.addEventListener('click', () => this.stateMgr.setState(this.settingsReturnState));
    document.getElementById('btn-settings-save')?.addEventListener('click', () => this.stateMgr.setState(this.settingsReturnState));

    const qualityBtns = document.querySelectorAll('#group-quality .group-btn');
    qualityBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        qualityBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const q = btn.getAttribute('data-quality') || 'medium';
        this.progression.updateSettings({ quality: q as any });
        this.handlers.onQualityChange(QUALITY_PROFILES[q as keyof typeof QUALITY_PROFILES]);
      });
    });

    const volSlider = document.getElementById('slider-volume') as HTMLInputElement | null;
    volSlider?.addEventListener('input', (e) => {
      const val = parseInt((e.target as HTMLInputElement).value, 10) / 100;
      this.progression.updateSettings({ masterVolume: val });
      this.handlers.onMasterVolumeChange(val);
    });

    const musicSlider = document.getElementById('slider-music') as HTMLInputElement | null;
    musicSlider?.addEventListener('input', (e) => {
      const val = parseInt((e.target as HTMLInputElement).value, 10) / 100;
      this.progression.updateSettings({ musicVolume: val });
      this.handlers.onMusicVolumeChange(val);
    });

    const sfxSlider = document.getElementById('slider-sfx') as HTMLInputElement | null;
    sfxSlider?.addEventListener('input', (e) => {
      const val = parseInt((e.target as HTMLInputElement).value, 10) / 100;
      this.progression.updateSettings({ sfxVolume: val });
      this.handlers.onSfxVolumeChange(val);
    });

    const motionCheck = document.getElementById('check-motion') as HTMLInputElement | null;
    motionCheck?.addEventListener('change', (e) => {
      const val = (e.target as HTMLInputElement).checked;
      this.progression.updateSettings({ reducedMotion: val });
      this.handlers.onReducedMotionToggle(val);
    });

    const vibCheck = document.getElementById('check-vibration') as HTMLInputElement | null;
    vibCheck?.addEventListener('change', (e) => {
      const val = (e.target as HTMLInputElement).checked;
      this.progression.updateSettings({ vibration: val });
      this.handlers.onVibrationToggle(val);
    });

    // Reset Data Action
    document.getElementById('btn-reset-data')?.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all AERORUSH saved progress, upgrades, and high scores?')) {
        this.handlers.onResetData();
        alert('All local progress reset to factory state.');
        this.stateMgr.setState('MENU');
      }
    });

    // HUD Pause
    document.getElementById('btn-pause')?.addEventListener('click', () => this.handlers.onPause());

    // Pause Screen Buttons
    document.getElementById('btn-pause-resume')?.addEventListener('click', () => this.handlers.onResume());
    document.getElementById('btn-pause-restart')?.addEventListener('click', () => this.handlers.onRestartRace());
    document.getElementById('btn-pause-settings')?.addEventListener('click', () => this.openSettings('PAUSED'));
    document.getElementById('btn-pause-quit')?.addEventListener('click', () => this.handlers.onAbortToMenu());

    // Results Screen Actions
    document.getElementById('btn-results-next')?.addEventListener('click', () => {
      this.launchCurrentLevel();
    });

    document.getElementById('btn-results-retry')?.addEventListener('click', () => {
      this.handlers.onRestartRace();
    });

    document.getElementById('btn-results-menu')?.addEventListener('click', () => {
      this.updateMenuBadges();
      this.handlers.onAbortToMenu();
    });
  }

  // ================= MULTIPLAYER SYSTEM =================

  private openMultiplayerLobby(): void {
    const statusEl = document.getElementById('mp-connection-status');
    if (!this.mpClient) {
      if (statusEl) statusEl.textContent = 'STATUS: OFFLINE MODE (RELAY DISABLED)';
      return;
    }
    if (statusEl) statusEl.textContent = 'STATUS: CONNECTING TO RELAY...';

    // Populate multiplayer environment selector
    const grid = document.getElementById('mp-env-selector-grid');
    if (grid) {
      grid.innerHTML = '';
      Object.values(ENVIRONMENTS).forEach(env => {
        const card = document.createElement('div');
        card.className = `env-card ${env.id === this.selectedMpEnvId ? 'active' : ''}`;
        card.innerHTML = `<div class="env-card-title">${env.name}</div><div class="env-card-tagline">${env.tagline}</div>`;
        card.addEventListener('click', () => {
          grid.querySelectorAll('.env-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          this.selectedMpEnvId = env.id;
        });
        grid.appendChild(card);
      });
    }

    // Populate stage distance buttons
    const distBtns = document.querySelectorAll('#group-mp-distance .group-btn');
    distBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        distBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedMpDist = parseInt(btn.getAttribute('data-dist') || '3000', 10);
      });
    });

    document.getElementById('mp-view-lobby')?.classList.add('hidden');
    document.getElementById('mp-view-tabs')?.classList.remove('hidden');

    this.stateMgr.setState('MULTIPLAYER');

    if (!this.mpClient.isConfigured()) {
      if (statusEl) {
        statusEl.textContent = 'STATUS: UNCONFIGURED (RELAY SERVER REQUIRED)';
        statusEl.title = this.mpClient.getConfigReason() || 'Set VITE_MULTIPLAYER_SERVER_URL to connect.';
      }
    } else {
      if (statusEl) statusEl.textContent = 'STATUS: CONNECTING TO RELAY...';
      this.mpClient.connect(
        () => {
          if (statusEl) statusEl.textContent = 'STATUS: CONNECTED TO RELAY (READY)';
        },
        (err) => {
          if (statusEl) statusEl.textContent = `STATUS: OFFLINE (${err})`;
        }
      );
    }
  }

  private setupMultiplayerListeners(): void {
    if (!this.mpClient) return;
    this.mpClient.onRoomUpdated = (room: MultiplayerRoomInfo) => {
      document.getElementById('mp-view-tabs')?.classList.add('hidden');
      document.getElementById('mp-view-lobby')?.classList.remove('hidden');

      const codeBadge = document.getElementById('lbl-mp-room-code');
      if (codeBadge) codeBadge.textContent = room.code;

      const p1 = room.players[0];
      const p2 = room.players[1];

      const p1Name = document.getElementById('lbl-mp-p1-name');
      const p1Status = document.getElementById('lbl-mp-p1-status');
      if (p1 && p1Name && p1Status) {
        p1Name.textContent = p1.name + (p1.isHost ? ' (HOST)' : '');
        p1Status.textContent = p1.isReady ? 'READY' : 'NOT READY';
        p1Status.className = `slot-status ${p1.isReady ? 'ready-tag' : 'waiting-tag'}`;
      }

      const p2Name = document.getElementById('lbl-mp-p2-name');
      const p2Status = document.getElementById('lbl-mp-p2-status');
      if (p2Name && p2Status) {
        if (p2) {
          p2Name.textContent = p2.name;
          p2Status.textContent = p2.isReady ? 'READY' : 'NOT READY';
          p2Status.className = `slot-status ${p2.isReady ? 'ready-tag' : 'waiting-tag'}`;
        } else {
          p2Name.textContent = 'WAITING FOR RIVAL PILOT...';
          p2Status.textContent = 'OPEN SLOT';
          p2Status.className = 'slot-status waiting-tag';
        }
      }
    };

    this.mpClient.onRaceCountdown = (secs) => {
      const banner = document.getElementById('lbl-mp-countdown');
      if (banner) {
        banner.classList.remove('hidden');
        banner.textContent = `SYNCHRONIZING ENGINES... ${secs}`;
      }
    };

    this.mpClient.onRaceStart = () => {
      const room = this.mpClient?.getCurrentRoom();
      if (!room) return;

      this.handlers.onStartRace({
        environmentId: room.environmentId,
        stageLength: room.stageLength,
        seed: room.seed,
        isGhost: false,
      });
    };

    this.mpClient.onError = (msg) => {
      alert(`Multiplayer relay message: ${msg}`);
    };

    this.mpClient.onOpponentFinished = (data) => {
      this.showTrickBanner(`RIVAL ${data.name} FINISHED! Score: ${data.finalScore.toLocaleString()}`);
    };
  }

  // ================= PASS & PLAY LOCAL COMPETITION =================

  private openPassAndPlaySetup(): void {
    if (!this.passAndPlay) return;
    const grid = document.getElementById('duel-env-selector-grid');
    if (grid) {
      grid.innerHTML = '';
      Object.values(ENVIRONMENTS).forEach(env => {
        const card = document.createElement('div');
        card.className = `env-card ${env.id === this.selectedDuelEnvId ? 'active' : ''}`;
        card.innerHTML = `<div class="env-card-title">${env.name}</div><div class="env-card-tagline">${env.tagline}</div>`;
        card.addEventListener('click', () => {
          grid.querySelectorAll('.env-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          this.selectedDuelEnvId = env.id;
        });
        grid.appendChild(card);
      });
    }

    this.stateMgr.setState('DUEL_SETUP');
  }

  private startDuelPlayer1(): void {
    if (!this.passAndPlay) return;
    const p1Input = document.getElementById('input-duel-p1') as HTMLInputElement | null;
    const p2Input = document.getElementById('input-duel-p2') as HTMLInputElement | null;
    const p1 = p1Input ? p1Input.value.trim() : 'PILOT 1';
    const p2 = p2Input ? p2Input.value.trim() : 'PILOT 2';

    this.passAndPlay.initDuel(p1, p2, this.selectedDuelEnvId, 2500);
    this.passAndPlay.startPlayer1Turn();

    this.handlers.onStartRace({
      environmentId: this.passAndPlay.getEnvironmentId(),
      stageLength: this.passAndPlay.getTargetDistance(),
      seed: this.passAndPlay.getTrackSeed(),
      isGhost: false,
    });
  }

  public showDuelHandoff(p1Summary: ScoreSummary): void {
    if (!this.passAndPlay) return;
    const p1Bench = document.getElementById('lbl-duel-p1-benchmark');
    if (p1Bench) p1Bench.textContent = `${p1Summary.finalScore.toLocaleString()} PTS`;

    const p2Name = document.getElementById('lbl-duel-p2-name');
    if (p2Name) p2Name.textContent = this.passAndPlay.getPlayer2Name();

    this.stateMgr.setState('DUEL_HANDOFF');
  }

  private startDuelPlayer2(): void {
    if (!this.passAndPlay) return;
    this.passAndPlay.startPlayer2Turn();

    const p1Result = this.passAndPlay.getPlayer1Result();

    this.handlers.onStartRace({
      environmentId: this.passAndPlay.getEnvironmentId(),
      stageLength: this.passAndPlay.getTargetDistance(),
      seed: this.passAndPlay.getTrackSeed(),
      isGhost: true,
      customGhost: p1Result?.ghostData,
    });
  }

  public showDuelResults(): void {
    if (!this.passAndPlay) return;
    const res1 = this.passAndPlay.getPlayer1Result();
    const res2 = this.passAndPlay.getPlayer2Result();
    if (!res1 || !res2) return;

    const evalRes = this.passAndPlay.evaluateDuelWinner();

    const badge = document.getElementById('duel-winner-badge');
    if (badge) {
      if (evalRes.winner === 'TIE') {
        badge.textContent = '⚖️ EVEN SPLIT (TIE RACE)!';
      } else {
        badge.textContent = `🏆 ${evalRes.winnerName} VICTORIOUS!`;
      }
    }

    const sub = document.getElementById('duel-winner-subtitle');
    if (sub) {
      sub.textContent = evalRes.winner === 'TIE'
        ? 'Identical flight scores across the seeded skyway!'
        : `Margin of victory: +${evalRes.scoreDiff.toLocaleString()} PTS`;
    }

    // Populate Column 1
    const p1Name = document.getElementById('lbl-duel-col-p1-name');
    const p1Score = document.getElementById('lbl-duel-col-p1-score');
    const p1Dist = document.getElementById('lbl-duel-col-p1-dist');
    const p1Speed = document.getElementById('lbl-duel-col-p1-speed');
    const p1Stunts = document.getElementById('lbl-duel-col-p1-stunts');
    const p1Landings = document.getElementById('lbl-duel-col-p1-landings');

    if (p1Name) p1Name.textContent = res1.playerName;
    if (p1Score) p1Score.textContent = res1.summary.finalScore.toLocaleString();
    if (p1Dist) p1Dist.textContent = `${res1.summary.distanceMeters} M`;
    if (p1Speed) p1Speed.textContent = `${res1.summary.maxSpeedKmH} KM/H`;
    if (p1Stunts) p1Stunts.textContent = `${res1.summary.stuntsExecuted}`;
    if (p1Landings) p1Landings.textContent = `${res1.summary.cleanLandings}`;

    // Populate Column 2
    const p2Name = document.getElementById('lbl-duel-col-p2-name');
    const p2Score = document.getElementById('lbl-duel-col-p2-score');
    const p2Dist = document.getElementById('lbl-duel-col-p2-dist');
    const p2Speed = document.getElementById('lbl-duel-col-p2-speed');
    const p2Stunts = document.getElementById('lbl-duel-col-p2-stunts');
    const p2Landings = document.getElementById('lbl-duel-col-p2-landings');

    if (p2Name) p2Name.textContent = res2.playerName;
    if (p2Score) p2Score.textContent = res2.summary.finalScore.toLocaleString();
    if (p2Dist) p2Dist.textContent = `${res2.summary.distanceMeters} M`;
    if (p2Speed) p2Speed.textContent = `${res2.summary.maxSpeedKmH} KM/H`;
    if (p2Stunts) p2Stunts.textContent = `${res2.summary.stuntsExecuted}`;
    if (p2Landings) p2Landings.textContent = `${res2.summary.cleanLandings}`;

    this.stateMgr.setState('DUEL_RESULTS');
  }

  // ================= DAILY CHALLENGE =================

  private openDailyChallenge(): void {
    this.dailyChallengeInfo = DailyChallengeService.getDailyChallenge();

    const dateEl = document.getElementById('lbl-daily-date');
    const titleEl = document.getElementById('lbl-daily-title');
    const descEl = document.getElementById('lbl-daily-desc');
    const envEl = document.getElementById('lbl-daily-env');
    const distEl = document.getElementById('lbl-daily-dist');

    if (dateEl) dateEl.textContent = `MISSION DATE: ${this.dailyChallengeInfo.dateStr} (UTC)`;
    if (titleEl) titleEl.textContent = this.dailyChallengeInfo.title;
    if (descEl) descEl.textContent = this.dailyChallengeInfo.description;
    if (envEl) envEl.textContent = this.dailyChallengeInfo.environmentName.toUpperCase();
    if (distEl) distEl.textContent = `${this.dailyChallengeInfo.targetDistance.toLocaleString()} M`;

    this.stateMgr.setState('DAILY_CHALLENGE');
  }

  private setupDailyChallengeTicker(): void {
    setInterval(() => {
      const now = new Date();
      const midnight = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0));
      const diff = Math.max(0, midnight.getTime() - now.getTime());
      const timerEl = document.getElementById('lbl-daily-timer');
      if (timerEl) {
        timerEl.textContent = `RESETS IN ${DailyChallengeService.formatCountdown(diff)}`;
      }
    }, 1000);
  }

  private launchDailyChallenge(): void {
    const daily = this.dailyChallengeInfo;
    if (!daily) return;
    this.handlers.onStartRace({
      environmentId: daily.environmentId,
      stageLength: daily.targetDistance,
      seed: daily.seed,
      isGhost: true,
    });
  }

  // ================= FRIEND CHALLENGE =================

  private checkUrlForFriendChallenge(): void {
    const code = FriendChallengeService.getChallengeFromUrl();
    if (code) {
      setTimeout(() => {
        const input = document.getElementById('input-friend-code') as HTMLInputElement | null;
        if (input) input.value = code;
        this.parseFriendChallengeCode();
        this.stateMgr.setState('FRIEND_CHALLENGE');
      }, 800);
    }
  }

  private parseFriendChallengeCode(): void {
    const input = document.getElementById('input-friend-code') as HTMLInputElement | null;
    const code = input ? input.value.trim() : '';
    const decoded = FriendChallengeService.decodeChallenge(code);

    const preview = document.getElementById('friend-challenge-preview');
    if (!decoded) {
      alert('Invalid or corrupted Friend Challenge Code.');
      preview?.classList.add('hidden');
      this.pendingFriendChallenge = null;
      return;
    }

    this.pendingFriendChallenge = decoded;
    const creatorEl = document.getElementById('lbl-friend-creator');
    const envEl = document.getElementById('lbl-friend-env');
    const distEl = document.getElementById('lbl-friend-dist');
    const scoreEl = document.getElementById('lbl-friend-score');

    if (creatorEl) creatorEl.textContent = decoded.creatorName;
    if (envEl) envEl.textContent = decoded.environmentId.replace('_', ' ').toUpperCase();
    if (distEl) distEl.textContent = `${decoded.targetDistance.toLocaleString()} M`;
    if (scoreEl) scoreEl.textContent = `${decoded.targetScore.toLocaleString()} PTS`;

    preview?.classList.remove('hidden');
  }

  private launchFriendChallenge(): void {
    if (!this.pendingFriendChallenge) return;
    const ch = this.pendingFriendChallenge;
    this.handlers.onStartRace({
      environmentId: ch.environmentId,
      stageLength: ch.targetDistance,
      seed: ch.seed,
      isGhost: true,
    });
  }

  // ================= ONLINE LEADERBOARDS =================

  private openLeaderboard(): void {
    const callsignInput = document.getElementById('input-records-callsign') as HTMLInputElement | null;
    if (callsignInput) {
      callsignInput.value = this.onlineLeaderboard ? this.onlineLeaderboard.getPlayerName() : 'PILOT';
    }
    this.fetchAndRenderLeaderboard();
    this.stateMgr.setState('LEADERBOARD');
  }

  private async fetchAndRenderLeaderboard(): Promise<void> {
    const list = document.getElementById('records-list');
    if (!list) return;

    if (!this.onlineLeaderboard) {
      list.innerHTML = '<div class="text-center p-1rem text-muted">Offline Mode Active. Cloud leaderboards disabled.</div>';
      return;
    }

    list.innerHTML = '<div class="loader-label text-center p-1rem">CONNECTING TO GLOBAL TELEMETRY...</div>';

    const res = await this.onlineLeaderboard.fetchLeaderboard({
      challengeType: this.activeLeaderboardTab === 'daily' ? 'daily' : 'all_time',
      environmentId: this.activeEnvFilter === 'all' ? undefined : this.activeEnvFilter,
      challengeDate: this.activeLeaderboardTab === 'daily' ? this.dailyChallengeInfo?.dateStr : undefined,
      limit: 25,
    });

    list.innerHTML = '';

    const note = document.getElementById('lbl-records-offline-note');
    if (note) {
      note.textContent = res.isOfflineFallback
        ? '⚡ Offline Mode / Local Cache Active: Showing verified local records.'
        : '🌐 Global Cloud Connected: Live rankings synchronized with master database.';
    }

    if (res.entries.length === 0) {
      list.innerHTML = '<div class="text-center p-1rem text-muted">No telemetry entries found for this category. Be the first to set a record!</div>';
      return;
    }

    res.entries.forEach((e: LeaderboardEntry) => {
      const row = document.createElement('div');
      row.className = 'record-row';
      const isMe = this.onlineLeaderboard ? e.playerId === this.onlineLeaderboard.getOrCreatePlayerId() : false;
      if (isMe) row.classList.add('personal-record-row');

      row.innerHTML = `
        <span class="record-rank">#${e.rank || '-'}</span>
        <span class="record-name">${e.playerName} ${isMe ? '★' : ''}</span>
        <span class="record-score">${e.score.toLocaleString()} PTS</span>
        <span class="record-meta">${e.distanceMeters} M • ${e.maxSpeedKmH} KM/H</span>
        <span class="record-env">${e.environmentId.replace('_', ' ').toUpperCase()}</span>
      `;
      list.appendChild(row);
    });
  }

  // ================= RESULTS SCREEN ACTIONS =================

  public launchCurrentLevel(levelIndexOverride?: number): void {
    const levelIdx = levelIndexOverride !== undefined ? levelIndexOverride : this.progression.getData().careerProgress;
    const mission = this.careerMgr.startLevel(levelIdx);

    const objGoal = mission.objectives.length > 0 ? mission.objectives[0].label : mission.subtitle;
    this.setHudObjective(`LVL ${levelIdx + 1}: ${mission.title.toUpperCase()} • ${objGoal.toUpperCase()}`);

    this.handlers.onStartRace({
      environmentId: mission.environmentId,
      stageLength: mission.stageLength,
      isCareer: true,
      seed: 100000 + levelIdx * 777,
      isGhost: true,
    });
  }

  public setHudObjective(text: string): void {
    const pill = document.getElementById('hud-objective-pill');
    const label = document.getElementById('hud-objective-text');
    if (label) label.textContent = text;
    if (pill) pill.classList.remove('hidden');
  }

  public updateMenuBadges(): void {
    const levelIdx = this.progression.getData().careerProgress;
    const mission = this.careerMgr.getLevel(levelIdx);
    const levelText = document.getElementById('menu-level-text');
    if (levelText) {
      levelText.textContent = `LEVEL ${levelIdx + 1} • ${mission.title.toUpperCase()}`;
    }

    const bestScore = this.scoreMgr.getPersonalBest();
    const recordText = document.getElementById('menu-record-text');
    if (recordText) {
      recordText.textContent = `BEST: ${bestScore > 0 ? bestScore.toLocaleString() + ' PTS' : '0 PTS'}`;
    }
  }

  public populateResults(summary: ScoreSummary, creditsEarned: number, missionResult?: any): void {
    this.lastSummary = summary;
    this.adManager?.onRunCompleted();

    const currentLevelIdx = this.progression.getData().careerProgress;
    const playedLevelIdx = missionResult?.passed ? Math.max(0, currentLevelIdx - 1) : currentLevelIdx;
    const currentMission = this.careerMgr.getLevel(playedLevelIdx);

    // Update level badge
    const levelBadge = document.getElementById('results-level-badge');
    if (levelBadge) {
      levelBadge.textContent = `LEVEL ${playedLevelIdx + 1} • ${currentMission.title.toUpperCase()}`;
    }

    // Update medal badge
    const medalBadge = document.getElementById('results-medal-badge');
    if (medalBadge) {
      if (missionResult?.passed && missionResult.medal) {
        medalBadge.className = `medal-badge ${missionResult.medal}`;
        const medalIcons: Record<string, string> = { gold: '🥇 GOLD MEDAL', silver: '🥈 SILVER MEDAL', bronze: '🥉 BRONZE MEDAL' };
        medalBadge.textContent = medalIcons[missionResult.medal] || 'MISSION COMPLETE';
      } else if (missionResult && !missionResult.passed) {
        medalBadge.className = 'medal-badge failed';
        medalBadge.textContent = 'OBJECTIVE NOT MET';
      } else {
        medalBadge.className = 'medal-badge gold';
        medalBadge.textContent = 'RUN FINISHED';
      }
    }

    // Animated score count-up
    const scoreEl = document.getElementById('results-score');
    if (scoreEl) {
      const targetScore = summary.finalScore;
      const duration = 800;
      const startTime = performance.now();
      const animateScore = (now: number) => {
        const progress = Math.min(1, (now - startTime) / duration);
        const current = Math.floor(targetScore * (1 - Math.pow(1 - progress, 3)));
        scoreEl.textContent = current.toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(animateScore);
        } else {
          scoreEl.textContent = targetScore.toLocaleString();
        }
      };
      requestAnimationFrame(animateScore);
    }

    const distEl = document.getElementById('results-dist');
    const stuntsEl = document.getElementById('results-stunts');
    const landingsEl = document.getElementById('results-landings');
    const pickupsEl = document.getElementById('results-pickups');
    const maxspeedEl = document.getElementById('results-maxspeed');
    const maxcomboEl = document.getElementById('results-maxcombo');
    const elRecordAlert = document.getElementById('results-record-alert');
    const elCreditsReward = document.getElementById('results-credits-reward');

    if (distEl) distEl.textContent = `${summary.distanceMeters.toLocaleString()} M`;
    if (stuntsEl) stuntsEl.textContent = `${summary.stuntsExecuted}`;
    if (landingsEl) landingsEl.textContent = `${summary.cleanLandings}`;
    if (pickupsEl) pickupsEl.textContent = `${summary.energyPickups}`;
    if (maxspeedEl) maxspeedEl.textContent = `${Math.round(summary.maxSpeedKmH)} KM/H`;
    if (maxcomboEl) maxcomboEl.textContent = `${summary.maxCombo.toFixed(1)}x`;

    if (elCreditsReward) {
      elCreditsReward.textContent = `+${creditsEarned.toLocaleString()} AeroCredits Earned`;
    }

    if (elRecordAlert) {
      if (summary.isNewRecord) {
        elRecordAlert.classList.remove('hidden');
      } else {
        elRecordAlert.classList.add('hidden');
      }
    }

    // Configure NEXT LEVEL button
    const nextBtn = document.getElementById('btn-results-next');
    if (nextBtn) {
      if (missionResult && !missionResult.passed) {
        nextBtn.style.display = 'none';
      } else {
        nextBtn.style.display = 'flex';
      }
    }

    this.updateMenuBadges();
  }

  private async submitResultsToLeaderboard(): Promise<void> {
    if (!this.lastSummary || !this.onlineLeaderboard) return;
    const submitBtn = document.getElementById('btn-results-submit');
    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'true');
      submitBtn.innerHTML = '<span class="btn-icon">⏳</span><span>TRANSMITTING...</span>';
    }

    const pilotName = this.onlineLeaderboard.getPlayerName();
    const envId = this.selectedQuickEnvId;

    const res = await this.onlineLeaderboard.submitScore({
      playerName: pilotName,
      score: this.lastSummary.finalScore,
      distanceMeters: this.lastSummary.distanceMeters,
      maxSpeedKmH: this.lastSummary.maxSpeedKmH,
      stuntsExecuted: this.lastSummary.stuntsExecuted,
      environmentId: envId,
      challengeType: 'all_time',
    });

    if (submitBtn) {
      submitBtn.innerHTML = '<span class="btn-icon">✓</span><span>TRANSMITTED</span>';
    }
    alert(res.message);
  }

  private downloadScoreCard(): void {
    if (!this.lastSummary) return;
    const pilotName = this.onlineLeaderboard ? this.onlineLeaderboard.getPlayerName() : 'PILOT';
    const meta = {
      pilotName,
      environmentName: this.selectedQuickEnvId.replace('_', ' ').toUpperCase(),
      environmentId: this.selectedQuickEnvId,
      seed: Math.floor(100000 + Math.random() * 899999),
    };
    ScoreCardGenerator.downloadCard(this.lastSummary, meta);
  }

  private shareResults(): void {
    if (!this.lastSummary) return;
    const pilotName = this.onlineLeaderboard ? this.onlineLeaderboard.getPlayerName() : 'PILOT';
    const meta = {
      pilotName,
      environmentName: this.selectedQuickEnvId.replace('_', ' ').toUpperCase(),
      environmentId: this.selectedQuickEnvId,
      seed: Math.floor(100000 + Math.random() * 899999),
    };

    const challengeCode = FriendChallengeService.encodeChallenge({
      creatorName: meta.pilotName,
      environmentId: meta.environmentId,
      seed: meta.seed,
      targetDistance: this.lastSummary.distanceMeters,
      targetScore: this.lastSummary.finalScore,
      stuntsTarget: this.lastSummary.stuntsExecuted,
    });
    const shareUrl = FriendChallengeService.getShareUrl(challengeCode);

    ScoreCardGenerator.shareScore(this.lastSummary, meta, shareUrl, (msg) => {
      alert(msg);
    });
  }

  private watchRewardedAd(): void {
    if (!this.adManager) return;
    const adBtn = document.getElementById('btn-results-ad');
    if (adBtn) adBtn.setAttribute('disabled', 'true');

    this.adManager.showRewardedAd(
      (rewardCredits) => {
        this.progression.addCredits(rewardCredits);
        this.updateCreditsDisplay();
        alert(`Sponsor Transmission Verified! +${rewardCredits} AeroCredits credited to your balance.`);
        if (adBtn) adBtn.innerHTML = '<span class="btn-icon">✓</span><span>CREDITED</span>';
      },
      (reason) => {
        alert(reason);
        if (adBtn) adBtn.removeAttribute('disabled');
      }
    );
  }

  // ================= GENERAL UI UTILITIES =================

  private handleStateTransition(next: GameStateType, _prev: GameStateType): void {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(s => s.classList.remove('active'));

    const map: Record<string, string> = {
      LOADING: 'screen-loading',
      MENU: 'screen-menu',
      PLAY_SELECT: 'screen-play-select',
      CAREER: 'screen-career',
      QUICK_RUN: 'screen-quick',
      STUNT_SCHOOL: 'screen-stunt-school',
      MULTIPLAYER: 'screen-multiplayer',
      DUEL_SETUP: 'screen-duel-setup',
      DUEL_HANDOFF: 'screen-duel-handoff',
      DUEL_RESULTS: 'screen-duel-results',
      DAILY_CHALLENGE: 'screen-daily-challenge',
      FRIEND_CHALLENGE: 'screen-friend-challenge',
      GARAGE: 'screen-garage',
      LEADERBOARD: 'screen-records',
      ACHIEVEMENTS: 'screen-achievements',
      SETTINGS: 'screen-settings',
      HOW_TO_PLAY: 'screen-how',
      CREDITS: 'screen-credits',
      PRIVACY: 'screen-privacy',
      PAUSED: 'screen-paused',
      RESULTS: 'screen-results',
      ERROR: 'screen-error',
    };

    const targetId = map[next];
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) el.classList.add('active');
    }

    const isRaceActive = (next === 'PLAYING' || next === 'COUNTDOWN' || next === 'CRASHED');
    const hideGlobalBar = isRaceActive || (next === 'PAUSED' || next === 'RESULTS');

    if (hideGlobalBar) {
      this.globalBar?.classList.add('hidden');
    } else {
      this.globalBar?.classList.remove('hidden');
    }

    if (isRaceActive) {
      this.hudContainer?.classList.remove('hidden');
      if (next === 'PLAYING' && this.raceStartTime === 0) {
        this.raceStartTime = Date.now();
      }

      // Configure responsive, context-aware tutorial banner
      if (this.hudTutorial) {
        const isTouch = typeof window !== 'undefined' && (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
        const tipEl = this.hudTutorial.querySelector('.tutorial-tip');
        if (tipEl) {
          tipEl.innerHTML = isTouch
            ? '💡 <strong>CONTROLS:</strong> TAP ◀ ▶ TO STEER • AUTO-SPEED ON • BRAKE & BOOST'
            : '💡 <strong>CONTROLS:</strong> [W/↑] SPEED • [A/D] STEER • [SPACE] BOOST • [SHIFT] DRIFT';
        }
        this.hudTutorial.classList.remove('hidden');
        if (this.tutorialTimeout) clearTimeout(this.tutorialTimeout);
        this.tutorialTimeout = window.setTimeout(() => {
          this.hudTutorial?.classList.add('hidden');
        }, 4500);
      }
    } else {
      this.hudContainer?.classList.add('hidden');
      if (this.tutorialTimeout) {
        clearTimeout(this.tutorialTimeout);
        this.tutorialTimeout = null;
      }
    }

    if (next === 'MENU') {
      this.updateMenuBadges();
    }

    if (next === 'CRASHED') {
      this.hudCrashAlert?.classList.remove('hidden');
    } else {
      this.hudCrashAlert?.classList.add('hidden');
    }
  }

  public showCountdown(step: number | string): void {
    if (!this.hudCountdown || !this.hudCountdownNumber) return;
    this.hudCountdown.classList.remove('hidden');
    this.hudCountdownNumber.textContent = `${step}`;
  }

  public hideCountdown(): void {
    this.hudCountdown?.classList.add('hidden');
  }

  public updateHud(
    score: number,
    speedKmH: number,
    energy: number,
    maxEnergy: number,
    distanceM: number,
    isAirborne: boolean,
    ghostDeltaM?: number
  ): void {
    if (this.hudScore) this.hudScore.textContent = Math.floor(score).toLocaleString();
    if (this.hudDistance) this.hudDistance.textContent = `${Math.floor(distanceM)} M`;
    if (this.hudSpeed) this.hudSpeed.textContent = `${Math.round(speedKmH)}`;

    if (this.hudSpeedArc) {
      const maxSpd = 350;
      const pct = Math.min(1.0, speedKmH / maxSpd);
      const dash = 157;
      const offset = dash - dash * pct;
      this.hudSpeedArc.style.strokeDashoffset = `${offset}`;
    }

    if (this.hudEnergyBar && this.hudEnergyPercent) {
      const pct = Math.min(100, Math.max(0, Math.round((energy / maxEnergy) * 100)));
      this.hudEnergyBar.style.width = `${pct}%`;
      this.hudEnergyPercent.textContent = `${pct}%`;
    }

    if (this.hudFlightIndicator) {
      if (isAirborne) {
        this.hudFlightIndicator.classList.remove('hidden');
      } else {
        this.hudFlightIndicator.classList.add('hidden');
      }
    }

    if (this.hudGhostDelta && ghostDeltaM !== undefined) {
      this.hudGhostDelta.classList.remove('hidden');
      const sign = ghostDeltaM >= 0 ? '+' : '';
      this.hudGhostDelta.textContent = `${sign}${ghostDeltaM.toFixed(1)} M vs GHOST`;
    } else if (this.hudGhostDelta) {
      this.hudGhostDelta.classList.add('hidden');
    }

    if (this.hudTimer && this.raceStartTime > 0) {
      const elapsed = Math.floor((Date.now() - this.raceStartTime) / 1000);
      const mins = Math.floor(elapsed / 60).toString().padStart(2, '0');
      const secs = (elapsed % 60).toString().padStart(2, '0');
      this.hudTimer.textContent = `${mins}:${secs}`;
    }
  }

  public showTrickBanner(text: string): void {
    if (!this.hudTrickBanner) return;
    this.hudTrickBanner.textContent = text;
    this.hudTrickBanner.classList.add('show');

    if (this.trickTimeout !== null) {
      clearTimeout(this.trickTimeout);
    }
    this.trickTimeout = window.setTimeout(() => {
      this.hudTrickBanner?.classList.remove('show');
      this.trickTimeout = null;
    }, 1800);
  }

  public showAchievementToast(ach: AchievementDef): void {
    if (!this.toastEl || !this.toastTitle || !this.toastDesc || !this.toastReward) return;
    this.toastTitle.textContent = ach.title;
    this.toastDesc.textContent = ach.desc;
    this.toastReward.textContent = `+${ach.rewardAC} AC`;

    this.toastEl.classList.remove('hidden');
    if (this.toastTimeout !== null) clearTimeout(this.toastTimeout);
    this.toastTimeout = window.setTimeout(() => {
      this.toastEl?.classList.add('hidden');
      this.toastTimeout = null;
    }, 4000);
  }

  public resetRaceTimer(): void {
    this.raceStartTime = 0;
    if (this.hudTimer) this.hudTimer.textContent = '00:00';
  }

  private openCareer(): void {
    this.populateCareerMissions();
    this.stateMgr.setState('CAREER');
  }

  private populateCareerMissions(): void {
    const list = document.getElementById('career-missions-list');
    if (!list) return;
    list.innerHTML = '';

    const highestUnlocked = this.progression.getData().careerProgress;

    CAREER_MISSIONS.forEach((m, idx) => {
      const isLocked = idx > highestUnlocked;
      const completed = this.progression.getData().completedMissions[m.id];
      const medal = completed?.medal;

      const card = document.createElement('div');
      card.className = `mission-card ${isLocked ? 'locked' : ''}`;
      card.innerHTML = `
        <div class="mission-num">STAGE ${idx + 1}</div>
        <div class="mission-info">
          <div class="mission-title">${m.title}</div>
          <div class="mission-desc">${m.subtitle}</div>
          <div class="mission-meta">ZONE: ${m.environmentId.replace('_', ' ').toUpperCase()} • ${m.stageLength}M</div>
        </div>
        <div class="mission-medal">
          ${medal === 'gold' ? '🥇 GOLD' : medal === 'silver' ? '🥈 SILVER' : medal === 'bronze' ? '🥉 BRONZE' : isLocked ? '🔒' : '⚪ OPEN'}
        </div>
        <button class="btn-primary btn-small" ${isLocked ? 'disabled' : ''}>
          ${isLocked ? 'LOCKED' : medal ? 'REPLAY' : 'LAUNCH'}
        </button>
      `;

      if (!isLocked) {
        card.querySelector('button')?.addEventListener('click', () => {
          this.careerMgr.startMission(m.id);
          const objGoal = m.objectives.length > 0 ? m.objectives[0].label : m.subtitle;
          this.setHudObjective(`STAGE ${idx + 1}: ${m.title.toUpperCase()} • ${objGoal.toUpperCase()}`);
          this.handlers.onStartRace({
            environmentId: m.environmentId,
            stageLength: m.stageLength,
            isCareer: true,
            seed: 100000 + idx * 777,
            isGhost: true,
          });
        });
      }

      list.appendChild(card);
    });
  }

  private openQuickRun(): void {
    const grid = document.getElementById('env-selector-grid');
    if (grid) {
      grid.innerHTML = '';
      Object.values(ENVIRONMENTS).forEach(env => {
        const card = document.createElement('div');
        card.className = `env-card ${env.id === this.selectedQuickEnvId ? 'active' : ''}`;
        card.innerHTML = `
          <div class="env-card-title">${env.name}</div>
          <div class="env-card-tagline">${env.tagline}</div>
        `;
        card.addEventListener('click', () => {
          document.querySelectorAll('.env-card').forEach(c => c.classList.remove('active'));
          card.classList.add('active');
          this.selectedQuickEnvId = env.id;
        });
        grid.appendChild(card);
      });
    }
    this.stateMgr.setState('QUICK_RUN');
  }

  private renderGarageTabContent(): void {
    const container = document.getElementById('garage-tab-content');
    if (!container) return;
    container.innerHTML = '';

    const data = this.progression.getData();

    if (this.activeGarageTab === 'upgrades') {
      const wrap = document.createElement('div');
      wrap.className = 'upgrades-container';

      const comps: Array<{ id: keyof VehicleUpgrades; label: string; desc: string }> = [
        { id: 'engine', label: 'TURBINE MOTOR', desc: 'Increases top speed (up to 345 km/h) and forward torque.' },
        { id: 'handling', label: 'ACTIVE AERO & GRIP', desc: 'Sharper steering recovery and stable high-speed drift control.' },
        { id: 'thrusters', label: 'VERTICAL FLIGHT LIFT', desc: 'Stronger vertical thrust and flight climb rate.' },
        { id: 'kers', label: 'KINETIC KERS TANK', desc: 'Expands hyper-energy capacity from 100 to 140 and faster recharge.' },
      ];

      comps.forEach(c => {
        const lvl = data.upgrades[c.id];
        const cost = this.progression.getUpgradeCost(c.id);
        const row = document.createElement('div');
        row.className = 'upgrade-row';
        row.innerHTML = `
          <div>
            <div class="upgrade-name">${c.label} (LVL ${lvl}/5)</div>
            <div class="setting-sub">${c.desc}</div>
          </div>
          <div class="upgrade-dots">
            ${[1, 2, 3, 4, 5].map(i => `<div class="upgrade-dot ${i <= lvl ? 'filled' : ''}"></div>`).join('')}
          </div>
          <button class="btn-primary btn-small" ${lvl >= 5 ? 'disabled' : ''}>
            ${lvl >= 5 ? 'MAX LEVEL' : `UPGRADE ⚡ ${cost} AC`}
          </button>
        `;

        if (lvl < 5) {
          row.querySelector('button')?.addEventListener('click', () => {
            const res = this.progression.upgradeComponent(c.id);
            if (!res.success) {
              alert(res.message);
            } else {
              const currentLvl = this.progression.getData().upgrades[c.id];
              if (currentLvl >= 5) {
                this.achieveMgr.checkAchievement('tuned_perfection');
              }
            }
          });
        }
        wrap.appendChild(row);
      });
      container.appendChild(wrap);

    } else {
      const grid = document.createElement('div');
      grid.className = 'garage-items-grid';

      const catalog = this.activeGarageTab === 'paints' ? PAINT_CATALOG
        : this.activeGarageTab === 'wheels' ? WHEEL_CATALOG
        : this.activeGarageTab === 'underglow' ? UNDERGLOW_CATALOG
        : THRUSTER_CATALOG;

      const category = this.activeGarageTab === 'paints' ? 'paint'
        : this.activeGarageTab === 'wheels' ? 'wheels'
        : this.activeGarageTab === 'underglow' ? 'underglow'
        : 'thruster';

      const equippedId = data.cosmetics[category];
      const unlockedList = category === 'paint' ? data.unlockedPaints
        : category === 'wheels' ? data.unlockedWheels
        : category === 'underglow' ? data.unlockedUnderglows
        : data.unlockedThrusters;

      catalog.forEach(item => {
        const isEquipped = item.id === equippedId;
        const isOwned = unlockedList.includes(item.id);
        const card = document.createElement('div');
        card.className = `shop-item-card ${isEquipped ? 'equipped' : ''}`;
        card.innerHTML = `
          <div class="shop-item-swatch" style="background: ${item.colorHex ? '#' + item.colorHex.toString(16).padStart(6, '0') : '#00f0ff'};"></div>
          <div class="shop-item-name">${item.name}</div>
          <div class="shop-item-status ${isEquipped ? 'status-equipped' : isOwned ? 'status-owned' : 'status-cost'}">
            ${isEquipped ? 'EQUIPPED' : isOwned ? 'OWNED' : `⚡ ${item.cost} AC`}
          </div>
        `;

        card.addEventListener('click', () => {
          const res = this.progression.buyCosmetic(category, item);
          if (!res.success) {
            alert(res.message);
          } else {
            if (item.id !== 'midnight_obsidian' && item.id !== 'aero_alloy') {
              this.achieveMgr.checkAchievement('stylist');
            }
          }
        });

        grid.appendChild(card);
      });
      container.appendChild(grid);
    }
  }

  private openAchievements(): void {
    const grid = document.getElementById('achievements-list');
    if (!grid) return;
    grid.innerHTML = '';

    const all = this.achieveMgr.getAll();
    all.forEach(item => {
      const card = document.createElement('div');
      card.className = `achieve-card ${item.unlocked ? 'unlocked' : ''}`;
      card.innerHTML = `
        <div class="achieve-icon">${item.unlocked ? item.def.icon : '🔒'}</div>
        <div>
          <div class="achieve-title">${item.def.title}</div>
          <div class="achieve-desc">${item.def.desc}</div>
        </div>
        <div class="achieve-reward">⚡ ${item.def.rewardAC} AC</div>
      `;
      grid.appendChild(card);
    });
    this.stateMgr.setState('ACHIEVEMENTS');
  }

  private openSettings(returnState: GameStateType = 'MENU'): void {
    this.settingsReturnState = returnState;
    const settings = this.progression.getData().settings;

    const qualityBtns = document.querySelectorAll('#group-quality .group-btn');
    qualityBtns.forEach(btn => {
      const q = btn.getAttribute('data-quality');
      if (q === settings.quality) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const volSlider = document.getElementById('slider-volume') as HTMLInputElement | null;
    if (volSlider) volSlider.value = `${Math.round(settings.masterVolume * 100)}`;

    const musicSlider = document.getElementById('slider-music') as HTMLInputElement | null;
    if (musicSlider) musicSlider.value = `${Math.round(settings.musicVolume * 100)}`;

    const sfxSlider = document.getElementById('slider-sfx') as HTMLInputElement | null;
    if (sfxSlider) sfxSlider.value = `${Math.round(settings.sfxVolume * 100)}`;

    const motionCheck = document.getElementById('check-motion') as HTMLInputElement | null;
    if (motionCheck) motionCheck.checked = settings.reducedMotion;

    const vibCheck = document.getElementById('check-vibration') as HTMLInputElement | null;
    if (vibCheck) vibCheck.checked = settings.vibration;

    this.stateMgr.setState('SETTINGS');
  }
}
