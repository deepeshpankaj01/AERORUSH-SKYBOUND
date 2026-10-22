// AERORUSH: SKYBOUND - Main Engine Bootstrap & Phase 3 Production Ready Game Loop
import * as THREE from 'three';
import { GAME_CONFIG, QUALITY_PROFILES, QualityProfile } from './config/GameConfig';
import { GameStateManager } from './core/GameState';
import { SoundManager } from './audio/SoundManager';
import { InputManager } from './input/InputManager';
import { CarModel } from './entities/CarModel';
import { VehiclePhysics } from './physics/VehiclePhysics';
import { TrackManager } from './world/TrackManager';
import { ParticleSystem } from './effects/ParticleSystem';
import { ScoreManager } from './scoring/ScoreManager';
import { ChaseCamera } from './camera/ChaseCamera';
import { GarageScene } from './garage/GarageScene';
import { UIManager } from './ui/UIManager';
import { ProgressionManager, UNDERGLOW_CATALOG, THRUSTER_CATALOG } from './progression/ProgressionManager';
import { CareerManager, CAREER_MISSIONS } from './progression/CareerManager';
import { AchievementManager } from './progression/AchievementManager';
import { GhostSystem } from './replay/GhostSystem';
import { ENVIRONMENTS, EnvironmentTheme } from './world/EnvironmentConfig';

import { OnlineLeaderboardService } from './services/OnlineLeaderboard';
import { AdManager } from './monetization/AdManager';
import { PassAndPlayManager } from './competition/PassAndPlay';
import { MultiplayerClient } from './services/MultiplayerClient';

class AeroRushApp {
  // Three.js Core
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private chaseCamera!: ChaseCamera;

  // Subsystems
  private stateMgr!: GameStateManager;
  private soundMgr!: SoundManager;
  private inputMgr!: InputManager;
  private carModel!: CarModel;
  private physics!: VehiclePhysics;
  private trackMgr!: TrackManager;
  private particles!: ParticleSystem;
  private scoreMgr!: ScoreManager;
  private garageScene!: GarageScene;
  private uiMgr!: UIManager;
  private progression!: ProgressionManager;
  private careerMgr!: CareerManager;
  private achieveMgr!: AchievementManager;
  private ghostSystem!: GhostSystem;

  // Phase 3 Online, Multiplayer & Monetization Services
  private onlineLeaderboard!: OnlineLeaderboardService;
  private adManager!: AdManager;
  private passAndPlay!: PassAndPlayManager;
  private mpClient!: MultiplayerClient;

  // Lighting
  private hemiLight!: THREE.HemisphereLight;
  private dirLight!: THREE.DirectionalLight;
  private headLightL!: THREE.SpotLight;
  private headLightR!: THREE.SpotLight;

  // Race Config & Timers
  private activeEnvironment: EnvironmentTheme = ENVIRONMENTS.neon_dusk;
  private activeTargetDistance: number = 3000;
  private isCareerMode: boolean = false;
  private raceElapsedTime: number = 0;
  private countdownTimer: number = 0;
  private countdownStep: number = 3;
  private crashRecoveryTimer: number = 0;

  private quality: QualityProfile = QUALITY_PROFILES.medium;
  private lastTime: number = 0;
  private animFrameId: number | null = null;
  private isTabVisible: boolean = true;

  // Scratch memory to prevent GC spikes
  private carWorldPos: THREE.Vector3 = new THREE.Vector3();
  private carBoundingBox: THREE.Box3 = new THREE.Box3();
  private thrusterLPos: THREE.Vector3 = new THREE.Vector3();
  private thrusterRPos: THREE.Vector3 = new THREE.Vector3();

  constructor() {
    this.boot();
  }

  private boot(): void {
    const canvas = document.getElementById('webgl-canvas') as HTMLCanvasElement;
    if (!canvas) {
      console.error('WebGL canvas element not found.');
      return;
    }

    // 1. Initialize WebGL Renderer with robust error boundary
    try {
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl') || (canvas as any).getContext('experimental-webgl');
      if (!gl) {
        throw new Error('WebGL is not supported by your browser or graphics hardware.');
      }

      this.renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        powerPreference: 'high-performance',
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(this.quality.pixelRatio);
      this.renderer.shadowMap.enabled = this.quality.shadows;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;
    } catch (err: any) {
      console.error('WebGL Initialization failed:', err);
      const loaderEl = document.getElementById('screen-loading');
      if (loaderEl) loaderEl.classList.remove('active');
      const errEl = document.getElementById('screen-error');
      const msgEl = document.getElementById('error-message');
      if (msgEl) {
        msgEl.textContent = `WebGL 3D graphics could not be initialized: ${err?.message || 'Context unavailable'}. Please verify hardware acceleration is enabled in your browser settings.`;
      }
      if (errEl) errEl.classList.add('active');
      return;
    }

    // 2. Initialize Scene & Environment
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(this.activeEnvironment.skyColor);
    this.scene.fog = new THREE.FogExp2(this.activeEnvironment.fogColor, this.activeEnvironment.fogDensity);

    // 3. Initialize Lighting
    this.setupLighting();

    // 4. Initialize Core Modules
    this.stateMgr = new GameStateManager();
    this.soundMgr = new SoundManager();
    this.inputMgr = new InputManager();
    this.scoreMgr = new ScoreManager();
    this.chaseCamera = new ChaseCamera(60, window.innerWidth / window.innerHeight);
    this.progression = new ProgressionManager();
    this.careerMgr = new CareerManager();
    this.achieveMgr = new AchievementManager(this.progression);
    this.ghostSystem = new GhostSystem();

    // Phase 3 Subsystems
    this.onlineLeaderboard = new OnlineLeaderboardService();
    this.adManager = new AdManager();
    this.passAndPlay = new PassAndPlayManager();
    this.mpClient = new MultiplayerClient();

    // 5. Entities & World
    this.carModel = new CarModel();
    this.scene.add(this.carModel.root);

    this.scene.add(this.ghostSystem.ghostMesh);
    this.scene.add(this.mpClient.opponentMeshRoot);

    this.physics = new VehiclePhysics();
    this.trackMgr = new TrackManager();
    this.scene.add(this.trackMgr.root);

    this.particles = new ParticleSystem(this.quality.maxParticles);
    this.scene.add(this.particles.root);

    this.garageScene = new GarageScene(this.carModel);
    this.scene.add(this.garageScene.root);
    this.garageScene.deactivate();

    // Apply saved upgrades & cosmetics
    this.applyCosmeticsAndUpgrades();

    // 6. Connect Physics Stunt Callbacks & Vibration
    this.physics.onStuntCallback = (event) => {
      switch (event.type) {
        case 'BARREL_ROLL':
          this.scoreMgr.addStuntPoints(event.points, event.label);
          this.soundMgr.playStuntSuccess();
          this.chaseCamera.triggerImpactShake(0.3, 0.2);
          this.achieveMgr.checkAchievement('aero_acrobat');
          this.vibrate([40, 30, 40]);
          break;
        case 'AERIAL_FLIP':
          this.scoreMgr.addStuntPoints(event.points, event.label);
          this.soundMgr.playStuntSuccess();
          this.chaseCamera.triggerImpactShake(0.3, 0.2);
          this.achieveMgr.checkAchievement('somersault');
          this.vibrate([40, 30, 40]);
          break;
        case 'CLEAN_LANDING':
          this.scoreMgr.addCleanLandingPoints(event.points);
          this.soundMgr.playCleanLanding();
          this.carModel.root.getWorldPosition(this.carWorldPos);
          this.particles.emitLandingImpact(this.carWorldPos, true);
          this.chaseCamera.triggerImpactShake(0.4, 0.25);
          if (this.physics.cleanLandingsCount >= 3) {
            this.achieveMgr.checkAchievement('smooth_operator');
          }
          this.vibrate(60);
          break;
        case 'ROUGH_LANDING':
          this.soundMgr.playCleanLanding();
          this.carModel.root.getWorldPosition(this.carWorldPos);
          this.particles.emitLandingImpact(this.carWorldPos, false);
          this.chaseCamera.triggerImpactShake(0.6, 0.3);
          this.vibrate(100);
          break;
        case 'CRASH':
          this.handleCrash();
          break;
      }
    };

    this.physics.onCollisionCallback = (severity) => {
      this.soundMgr.playCrash();
      this.chaseCamera.triggerImpactShake(0.5, 0.25);
      this.scoreMgr.onCrashOrCollision();
      this.vibrate(120);
      if (severity === 'barrier') {
        this.carModel.root.getWorldPosition(this.carWorldPos);
        this.particles.emitLandingImpact(this.carWorldPos, false);
      }
    };

    // 7. Input Pause
    this.inputMgr.onPauseToggle(() => {
      if (this.stateMgr.is('PLAYING')) {
        this.pauseGame();
      } else if (this.stateMgr.is('PAUSED')) {
        this.resumeGame();
      }
    });

    // 8. Initialize UI Manager
    this.uiMgr = new UIManager(
      this.stateMgr,
      this.scoreMgr,
      this.progression,
      this.careerMgr,
      this.achieveMgr,
      {
        onStartRace: (options) => this.startRace(options),
        onRestartRace: () => this.restartRace(),
        onResume: () => this.resumeGame(),
        onPause: () => this.pauseGame(),
        onAbortToMenu: () => this.abortToMenu(),
        onOpenGarage: () => this.openGarage(),
        onCloseGarage: () => this.closeGarage(),
        onQualityChange: (profile) => this.applyQuality(profile),
        onMasterVolumeChange: (val) => this.soundMgr.setMasterVolume(val),
        onMusicVolumeChange: (val) => this.soundMgr.setMusicVolume(val),
        onSfxVolumeChange: (val) => this.soundMgr.setSfxVolume(val),
        onReducedMotionToggle: (enabled) => { this.chaseCamera.reducedMotion = enabled; },
        onVibrationToggle: (enabled) => { this.progression.updateSettings({ vibration: enabled }); },
        onResetData: () => {
          this.progression.resetLocalData();
          this.applyCosmeticsAndUpgrades();
        },
        onCosmeticsChanged: () => {
          this.applyCosmeticsAndUpgrades();
        },
      },
      {
        onlineLeaderboard: this.onlineLeaderboard,
        adManager: this.adManager,
        passAndPlay: this.passAndPlay,
        mpClient: this.mpClient,
      }
    );

    // Apply saved sound & quality settings
    const saved = this.progression.getData().settings;
    this.soundMgr.setMasterVolume(saved.masterVolume);
    this.soundMgr.setMusicVolume(saved.musicVolume);
    this.soundMgr.setSfxVolume(saved.sfxVolume);
    this.chaseCamera.reducedMotion = saved.reducedMotion;
    this.applyQuality(QUALITY_PROFILES[saved.quality]);

    // 9. Window Resizing, Visibility & Service Worker
    window.addEventListener('resize', () => this.handleResize());
    document.addEventListener('visibilitychange', () => this.handleVisibilityChange());
    this.registerServiceWorker();

    // 10. Finish Loading
    const loaderBar = document.getElementById('loader-bar');
    if (loaderBar) loaderBar.style.width = '100%';

    setTimeout(() => {
      this.stateMgr.setState('MENU');
    }, 600);

    // 11. Start Loop
    this.lastTime = performance.now();
    this.loop();
  }

  private setupLighting(): void {
    const env = this.activeEnvironment;

    this.hemiLight = new THREE.HemisphereLight(env.ambientColor, 0x05070c, env.ambientIntensity);
    this.scene.add(this.hemiLight);

    this.dirLight = new THREE.DirectionalLight(env.sunColor, env.sunIntensity);
    this.dirLight.position.set(...env.sunPosition);
    this.dirLight.castShadow = this.quality.shadows;
    this.dirLight.shadow.mapSize.width = this.quality.shadowMapSize;
    this.dirLight.shadow.mapSize.height = this.quality.shadowMapSize;
    this.dirLight.shadow.camera.near = 1;
    this.dirLight.shadow.camera.far = 140;
    this.dirLight.shadow.camera.left = -25;
    this.dirLight.shadow.camera.right = 25;
    this.dirLight.shadow.camera.top = 25;
    this.dirLight.shadow.camera.bottom = -25;
    this.scene.add(this.dirLight);

    this.headLightL = new THREE.SpotLight(0x00f0ff, 4.0, 45, Math.PI / 6, 0.4, 1.5);
    this.headLightR = new THREE.SpotLight(0x00f0ff, 4.0, 45, Math.PI / 6, 0.4, 1.5);
    this.scene.add(this.headLightL, this.headLightR);
    this.scene.add(this.headLightL.target, this.headLightR.target);
  }

  private applyCosmeticsAndUpgrades(): void {
    const data = this.progression.getData();

    // 1. Cosmetics
    this.carModel.setPaint(data.cosmetics.paint);
    this.carModel.setWheelStyle(data.cosmetics.wheels);

    const glowDef = UNDERGLOW_CATALOG.find(u => u.id === data.cosmetics.underglow);
    if (glowDef && glowDef.colorHex) {
      this.carModel.setUnderglowColor(glowDef.colorHex);
    }

    const thrusterDef = THRUSTER_CATALOG.find(t => t.id === data.cosmetics.thruster);
    if (thrusterDef && thrusterDef.colorHex) {
      this.carModel.setThrusterColor(thrusterDef.colorHex);
    }

    // 2. Upgrades
    const modifiers = this.progression.getAppliedHandlingModifiers();
    this.physics.applyUpgrades(modifiers);
  }

  private setEnvironment(envId: string): void {
    const env = ENVIRONMENTS[envId] || ENVIRONMENTS.neon_dusk;
    this.activeEnvironment = env;

    this.scene.background = new THREE.Color(env.skyColor);
    this.scene.fog = new THREE.FogExp2(env.fogColor, env.fogDensity);

    this.hemiLight.color.setHex(env.ambientColor);
    this.hemiLight.intensity = env.ambientIntensity;

    this.dirLight.color.setHex(env.sunColor);
    this.dirLight.intensity = env.sunIntensity;
    this.dirLight.position.set(...env.sunPosition);

    this.trackMgr.setEnvironment(env);
  }

  private startRace(options?: {
    environmentId?: string;
    stageLength?: number;
    isCareer?: boolean;
    isGhost?: boolean;
    seed?: number;
    customGhost?: any;
  }): void {
    this.soundMgr.resumeContext();
    this.soundMgr.startCyberMusic();

    const envId = options?.environmentId || this.activeEnvironment.id;
    this.setEnvironment(envId);

    this.activeTargetDistance = options?.stageLength || 3000;
    this.isCareerMode = !!options?.isCareer;

    this.applyCosmeticsAndUpgrades();

    this.physics.reset();
    this.trackMgr.reset(options?.seed);
    this.scoreMgr.reset();
    this.uiMgr.resetRaceTimer();
    this.raceElapsedTime = 0;

    // Load Ghost if requested
    if (options?.customGhost) {
      this.ghostSystem.loadCustomGhost(options.customGhost);
    } else if (options?.isGhost) {
      this.ghostSystem.loadGhost(envId);
    } else {
      this.ghostSystem.hideGhost();
    }
    this.ghostSystem.startRecording();

    // Reset car transform
    this.carModel.root.position.copy(this.physics.position);
    this.carModel.root.rotation.copy(this.physics.rotation);

    this.achieveMgr.checkAchievement('first_spark');

    // Countdown
    this.stateMgr.setState('COUNTDOWN');
    this.countdownStep = 3;
    this.countdownTimer = 0;
    this.uiMgr.showCountdown(this.countdownStep);
  }

  private restartRace(): void {
    this.startRace({
      environmentId: this.activeEnvironment.id,
      stageLength: this.activeTargetDistance,
      isCareer: this.isCareerMode,
      isGhost: true,
    });
  }

  private pauseGame(): void {
    if (!this.stateMgr.is('PLAYING')) return;
    this.stateMgr.setState('PAUSED');
    this.soundMgr.stopCyberMusic();
    this.soundMgr.updateEngine(0, false, false, false);
  }

  private resumeGame(): void {
    if (!this.stateMgr.is('PAUSED')) return;
    this.stateMgr.setState('PLAYING');
    this.soundMgr.startCyberMusic();
    this.lastTime = performance.now();
  }

  private abortToMenu(): void {
    this.soundMgr.stopCyberMusic();
    this.soundMgr.updateEngine(0, false, false, false);
    this.ghostSystem.hideGhost();
    this.mpClient.opponentMeshRoot.visible = false;
    this.mpClient.leaveRoom();
    this.passAndPlay.reset();
    this.stateMgr.setState('MENU');
    this.scene.add(this.carModel.root);
    this.carModel.root.position.set(0, 0, 0);
    this.carModel.root.rotation.set(0, 0, 0);
  }

  private openGarage(): void {
    this.soundMgr.resumeContext();
    this.stateMgr.setState('GARAGE');
    this.applyCosmeticsAndUpgrades();
    this.garageScene.activate();
  }

  private closeGarage(): void {
    this.garageScene.deactivate();
    this.scene.add(this.carModel.root);
    this.applyCosmeticsAndUpgrades();
    this.stateMgr.setState('MENU');
  }

  private applyQuality(profile: QualityProfile): void {
    this.quality = profile;
    this.renderer.setPixelRatio(profile.pixelRatio);
    this.renderer.shadowMap.enabled = profile.shadows;
    this.particles.setMaxParticles(profile.maxParticles);
  }

  private handleCrash(): void {
    this.stateMgr.setState('CRASHED');
    this.soundMgr.playCrash();
    this.chaseCamera.triggerImpactShake(0.9, 0.5);
    this.carModel.root.getWorldPosition(this.carWorldPos);
    this.particles.emitLandingImpact(this.carWorldPos, false);
    this.vibrate(200);
    this.crashRecoveryTimer = 1.6;
  }

  private vibrate(pattern: number | number[]): void {
    if (this.progression.getData().settings.vibration && typeof navigator !== 'undefined' && navigator.vibrate) {
      try {
        navigator.vibrate(pattern);
      } catch (_) {}
    }
  }

  private registerServiceWorker(): void {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      const register = () => {
        navigator.serviceWorker.register('./sw.js').then((reg) => {
          console.log('AERORUSH PWA Service Worker active:', reg.scope);
        }).catch((err) => {
          console.warn('Service Worker registration skipped or blocked:', err);
        });
      };

      if (document.readyState === 'complete') {
        register();
      } else {
        window.addEventListener('load', register);
      }
    }
  }

  private handleResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;

    this.renderer.setSize(width, height);
    this.chaseCamera.setAspect(aspect);
    this.garageScene.setAspect(aspect);
  }

  private handleVisibilityChange(): void {
    this.isTabVisible = !document.hidden;
    if (!this.isTabVisible) {
      if (this.stateMgr.is('PLAYING')) {
        this.pauseGame();
      }
    } else {
      this.lastTime = performance.now();
    }
  }

  private loop = (): void => {
    this.animFrameId = requestAnimationFrame(this.loop);

    const now = performance.now();
    let dt = (now - this.lastTime) / 1000;
    this.lastTime = now;

    dt = Math.min(dt, 0.05);
    if (!this.isTabVisible) return;

    const state = this.stateMgr.getState();

    // 1. Garage Viewport
    if (state === 'GARAGE') {
      this.garageScene.update(dt);
      this.renderer.render(this.scene, this.garageScene.camera);
      return;
    }

    // 2. Countdown Handling
    if (state === 'COUNTDOWN') {
      this.countdownTimer += dt;
      if (this.countdownTimer >= 0.85) {
        this.countdownTimer = 0;
        this.countdownStep--;
        if (this.countdownStep > 0) {
          this.uiMgr.showCountdown(this.countdownStep);
          this.soundMgr.playGatePass();
        } else if (this.countdownStep === 0) {
          this.uiMgr.showCountdown('GO!');
          this.soundMgr.playStuntSuccess();
        } else {
          this.uiMgr.hideCountdown();
          this.stateMgr.setState('PLAYING');
        }
      }
    }

    // 3. Crashed State Recovery
    if (state === 'CRASHED') {
      this.crashRecoveryTimer -= dt;
      this.physics.update(dt, this.inputMgr.getState());
      this.carModel.root.position.copy(this.physics.position);
      if (this.crashRecoveryTimer <= 0) {
        this.physics.recoverFromCrash();
        this.stateMgr.setState('PLAYING');
      }
    }

    // 4. Active Gameplay
    if (state === 'PLAYING') {
      const input = this.inputMgr.getState();
      this.raceElapsedTime += dt;

      // Update Physics
      this.physics.update(dt, input);

      // Record Ghost frame
      this.ghostSystem.recordFrame(this.raceElapsedTime, this.physics.position, this.physics.rotation, this.physics.forwardSpeed);
      this.ghostSystem.updatePlayback(dt);

      // Synchronize Car Transform
      this.carModel.root.position.copy(this.physics.position);
      this.carModel.root.rotation.copy(this.physics.rotation);

      // Update Visuals
      this.carModel.updateVisuals(
        this.physics.forwardSpeed,
        this.physics.steerAngle,
        this.physics.isBoosting,
        this.physics.isAirborne,
        dt
      );

      // Headlight Spotlights
      this.carModel.root.getWorldPosition(this.carWorldPos);
      this.headLightL.position.set(this.carWorldPos.x - 0.7, this.carWorldPos.y + 0.4, this.carWorldPos.z + 0.5);
      this.headLightR.position.set(this.carWorldPos.x + 0.7, this.carWorldPos.y + 0.4, this.carWorldPos.z + 0.5);
      this.headLightL.target.position.set(this.carWorldPos.x - 0.7, this.carWorldPos.y, this.carWorldPos.z + 25);
      this.headLightR.target.position.set(this.carWorldPos.x + 0.7, this.carWorldPos.y, this.carWorldPos.z + 25);

      // Track & Weather
      this.trackMgr.update(this.physics.position.z, dt);

      // Collisions
      this.carBoundingBox.setFromObject(this.carModel.root);

      this.trackMgr.checkCollisions(
        this.physics.position,
        this.carBoundingBox,
        // On Pickup
        (pos) => {
          this.soundMgr.playPickup();
          this.physics.addEnergyBonus(GAME_CONFIG.energy.pickupRechargeBonus);
          this.scoreMgr.addPickupPoints();
          this.particles.emitPickupExplosion(pos);
          if (this.scoreMgr.energyPickupsCount >= 10) {
            this.achieveMgr.checkAchievement('overdrive');
          }
        },
        // On Gate
        (pos) => {
          this.soundMgr.playGatePass();
          this.physics.gatesClearedCount++;
          this.scoreMgr.addGatePoints();
          this.particles.emitGatePass(pos);
          this.chaseCamera.triggerImpactShake(0.35, 0.2);
          if (this.physics.gatesClearedCount >= 5) {
            this.achieveMgr.checkAchievement('ring_master');
          }
        },
        // On Ramp
        (ramp) => {
          if (!this.physics.isAirborne) {
            this.soundMgr.playRampLaunch();
            this.physics.launchOffRamp(ramp.height);
            this.chaseCamera.triggerImpactShake(0.3, 0.2);
          }
        },
        // On Obstacle
        () => {
          this.physics.triggerCrash();
          this.handleCrash();
        }
      );

      // Particles
      if (this.physics.isBoosting || this.physics.isThrusting) {
        this.carModel.getThrusterPositionLeft(this.thrusterLPos);
        this.carModel.getThrusterPositionRight(this.thrusterRPos);
        this.particles.emitThrusterPlume(this.thrusterLPos, this.thrusterRPos, this.physics.isBoosting);
      }

      if (this.physics.isDrifting) {
        this.particles.emitDriftSmoke(this.carWorldPos.x, this.carWorldPos.y, this.carWorldPos.z + 1.2);
        if (this.physics.driftDuration >= 3.0) {
          this.achieveMgr.checkAchievement('drift_prodigy');
        }
      }

      this.particles.update(dt, this.carWorldPos, this.physics.forwardSpeed);

      // Scoring
      const speedKmH = this.physics.getSpeedKmH();
      this.scoreMgr.update(dt, this.physics.position.z, speedKmH, this.physics.isDrifting);

      if (speedKmH >= 350) {
        this.achieveMgr.checkAchievement('mach_break');
      }

      if (this.scoreMgr.distanceMeters >= 5000) {
        this.achieveMgr.checkAchievement('skyway_commuter');
      }

      // Audio update
      const speedNorm = Math.min(1.0, this.physics.forwardSpeed / GAME_CONFIG.vehicle.baseTopSpeed);
      this.soundMgr.updateEngine(
        speedNorm,
        input.accelerate,
        this.physics.isBoosting || this.physics.isThrusting,
        this.physics.isDrifting
      );

      // Real-time Multiplayer sync
      if (this.mpClient.getStatus() === 'RACING') {
        this.mpClient.sendTelemetry(
          this.physics.position,
          this.physics.rotation,
          this.physics.forwardSpeed,
          this.physics.isBoosting || this.physics.isThrusting,
          this.physics.isAirborne
        );
        this.mpClient.update(dt);
      }

      // Ghost or Rival delta distance
      let deltaDistance: number | undefined;
      const mpRivalZ = this.mpClient.getOpponentDistance();
      if (mpRivalZ !== null && this.mpClient.getStatus() === 'RACING') {
        deltaDistance = this.physics.position.z - mpRivalZ;
      } else if (this.ghostSystem.ghostMesh.visible) {
        deltaDistance = this.physics.position.z - this.ghostSystem.ghostMesh.position.z;
      }

      // HUD update
      this.uiMgr.updateHud(
        this.scoreMgr.currentScore,
        speedKmH,
        this.physics.energy,
        this.physics.maxEnergy,
        this.scoreMgr.distanceMeters,
        this.physics.isAirborne,
        deltaDistance
      );

      // Milestone or Target Distance Completion
      if (this.scoreMgr.distanceMeters >= this.activeTargetDistance) {
        this.completeRun();
      }
    }

    // 5. Update Chase Camera
    const speedRatio = Math.min(1.0, this.physics.forwardSpeed / GAME_CONFIG.vehicle.boostTopSpeed);
    this.chaseCamera.update(
      this.carModel.root.position,
      speedRatio,
      this.physics.isBoosting,
      this.physics.steerAngle,
      this.physics.isAirborne,
      dt
    );

    // 6. Render Scene
    this.renderer.render(this.scene, this.chaseCamera.camera);
  };

  private completeRun(): void {
    this.soundMgr.updateEngine(0, false, false, false);
    const ghostRec = this.ghostSystem.stopRecording(this.activeEnvironment.id, this.scoreMgr.currentScore, this.scoreMgr.distanceMeters);

    const summary = this.scoreMgr.finalizeSummary();

    // Broadcast finish in multiplayer if active
    if (this.mpClient.getStatus() === 'RACING') {
      this.mpClient.sendFinish(summary.finalScore, summary.distanceMeters, this.raceElapsedTime);
    }

    // Pass and Play duel evaluation
    if (this.passAndPlay.getPhase() === 'PLAYER1_RACING') {
      this.passAndPlay.completePlayer1Turn(summary, ghostRec || undefined);
      this.uiMgr.showDuelHandoff(summary);
      return;
    } else if (this.passAndPlay.getPhase() === 'PLAYER2_RACING') {
      this.passAndPlay.completePlayer2Turn(summary, ghostRec || undefined);
      this.uiMgr.showDuelResults();
      return;
    }

    this.stateMgr.setState('RESULTS');

    // Base credits calculation (1 AC per 10m + stunts + clean landings)
    let creditsEarned = Math.floor(summary.distanceMeters / 10) +
      summary.stuntsExecuted * 50 +
      summary.cleanLandings * 40 +
      summary.energyPickups * 15;

    // Career Mission Evaluation
    if (this.isCareerMode) {
      const missionResult = this.careerMgr.evaluateMission({
        score: summary.finalScore,
        distanceM: summary.distanceMeters,
        stuntsCount: summary.stuntsExecuted,
        cleanLandings: summary.cleanLandings,
        gatesCleared: this.physics.gatesClearedCount,
        driftSeconds: this.physics.totalDriftSeconds,
        maxSpeedKmH: summary.maxSpeedKmH,
        crashesCount: this.physics.crashesCount,
      });

      if (missionResult && missionResult.passed && missionResult.medal) {
        this.soundMgr.playMissionComplete();
        creditsEarned += missionResult.creditsEarned;
        this.progression.recordMissionComplete(missionResult.mission.id, missionResult.medal, summary.finalScore);

        // Check Apex Champion achievement (Gold on all career missions)
        const completedMissions = this.progression.getData().completedMissions;
        const allGold = CAREER_MISSIONS.length > 0 && CAREER_MISSIONS.every(m => completedMissions[m.id]?.medal === 'gold');
        if (allGold) {
          this.achieveMgr.checkAchievement('apex_champion');
        }

        // Advance career unlock
        const currentActiveMission = this.careerMgr.getActiveMission();
        if (currentActiveMission) {
          const currentIdx = CAREER_MISSIONS.findIndex(m => m.id === currentActiveMission.id);
          this.progression.advanceCareerProgress(currentIdx + 1);
        }

        // Show dialogue feedback from character
        setTimeout(() => {
          this.uiMgr.showDialogue(
            missionResult.mission.briefing.character,
            missionResult.mission.briefing.role,
            missionResult.feedbackMessage,
            () => {}
          );
        }, 600);
      }
    }

    this.progression.addCredits(creditsEarned);
    this.uiMgr.populateResults(summary, creditsEarned);
  }

  public dispose(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
    this.inputMgr.dispose();
    this.soundMgr.cleanup();
    this.renderer.dispose();
  }
}

// Bootstrap on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  new AeroRushApp();
});
