// AERORUSH: SKYBOUND - Compact Offline Ghost Replay & Shared-Device Challenge System
import * as THREE from 'three';

export interface GhostFrame {
  t: number;   // Timestamp (seconds)
  x: number;   // Position X
  y: number;   // Position Y
  z: number;   // Position Z
  rx: number;  // Rotation X
  ry: number;  // Rotation Y
  rz: number;  // Rotation Z
  s: number;   // Speed
}

export interface GhostRecording {
  version: number;
  environmentId: string;
  totalTime: number;
  totalScore: number;
  totalDistance: number;
  date: string;
  playerName: string;
  frames: GhostFrame[];
}

export class GhostSystem {
  private recording: boolean = false;
  private currentFrames: GhostFrame[] = [];
  private lastSampleTime: number = 0;
  private sampleInterval: number = 0.1; // 10 Hz recording
  private maxFrames: number = 1200; // 2 minutes max

  // Ghost 3D Mesh
  public ghostMesh: THREE.Group;
  private ghostBody: THREE.Mesh;
  private ghostActive: boolean = false;
  private playbackTime: number = 0;
  private loadedRecording: GhostRecording | null = null;

  // Shared-Device Two-Player Mode State
  public isSharedDeviceMode: boolean = false;
  public activePlayerTurn: 1 | 2 = 1;
  public player1Score: number = 0;
  public player1Time: number = 0;
  public player2Score: number = 0;
  public player2Time: number = 0;

  constructor() {
    this.ghostMesh = new THREE.Group();
    this.ghostMesh.visible = false;

    // Build Holographic Translucent Ghost Wireframe Mesh
    const hullGeo = new THREE.BoxGeometry(1.86, 0.45, 4.4);
    const ghostMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    this.ghostBody = new THREE.Mesh(hullGeo, ghostMat);
    this.ghostBody.position.y = 0.35;
    this.ghostMesh.add(this.ghostBody);

    // Ghost overhead marker / beacon
    const beaconGeo = new THREE.ConeGeometry(0.3, 0.6, 4);
    beaconGeo.rotateX(Math.PI);
    const beacon = new THREE.Mesh(beaconGeo, new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true }));
    beacon.position.set(0, 2.2, 0);
    this.ghostMesh.add(beacon);
  }

  public startRecording(): void {
    this.recording = true;
    this.currentFrames = [];
    this.lastSampleTime = 0;
  }

  public recordFrame(
    timeSec: number,
    pos: THREE.Vector3,
    rot: THREE.Euler,
    speed: number
  ): void {
    if (!this.recording) return;
    if (this.currentFrames.length >= this.maxFrames) return;

    if (this.currentFrames.length === 0 || timeSec - this.lastSampleTime >= this.sampleInterval) {
      this.currentFrames.push({
        t: parseFloat(timeSec.toFixed(2)),
        x: parseFloat(pos.x.toFixed(2)),
        y: parseFloat(pos.y.toFixed(2)),
        z: parseFloat(pos.z.toFixed(2)),
        rx: parseFloat(rot.x.toFixed(2)),
        ry: parseFloat(rot.y.toFixed(2)),
        rz: parseFloat(rot.z.toFixed(2)),
        s: parseFloat(speed.toFixed(1)),
      });
      this.lastSampleTime = timeSec;
    }
  }

  private lastCreatedRecording: GhostRecording | null = null;

  public getLastRecording(): GhostRecording | null {
    return this.lastCreatedRecording;
  }

  public loadCustomGhost(rec: GhostRecording): void {
    if (rec && rec.frames && rec.frames.length > 0) {
      this.loadedRecording = rec;
      this.ghostActive = true;
      this.ghostMesh.visible = true;
      this.playbackTime = 0;
    }
  }

  public stopRecording(
    environmentId: string,
    score: number,
    distance: number,
    playerName: string = 'Personal Best'
  ): GhostRecording | null {
    this.recording = false;
    if (this.currentFrames.length < 2) return null;

    const rec: GhostRecording = {
      version: 1,
      environmentId,
      totalTime: this.currentFrames[this.currentFrames.length - 1].t,
      totalScore: score,
      totalDistance: distance,
      date: new Date().toLocaleDateString(),
      playerName,
      frames: this.currentFrames,
    };

    this.lastCreatedRecording = rec;
    this.saveBestGhost(environmentId, rec);
    return rec;
  }

  public loadGhost(environmentId: string): boolean {
    const rec = this.getBestGhost(environmentId);
    if (rec && rec.frames.length > 0) {
      this.loadedRecording = rec;
      this.ghostActive = true;
      this.ghostMesh.visible = true;
      this.playbackTime = 0;
      return true;
    }
    this.ghostActive = false;
    this.ghostMesh.visible = false;
    return false;
  }

  public updatePlayback(dt: number): void {
    if (!this.ghostActive || !this.loadedRecording) return;
    this.playbackTime += dt;

    const frames = this.loadedRecording.frames;
    if (frames.length === 0) return;

    // Find surrounding keyframes for linear interpolation
    let frameA = frames[0];
    let frameB = frames[frames.length - 1];

    for (let i = 0; i < frames.length - 1; i++) {
      if (this.playbackTime >= frames[i].t && this.playbackTime <= frames[i + 1].t) {
        frameA = frames[i];
        frameB = frames[i + 1];
        break;
      }
    }

    if (this.playbackTime > frameB.t) {
      this.ghostMesh.visible = false;
      return;
    }

    const span = Math.max(0.001, frameB.t - frameA.t);
    const alpha = Math.max(0, Math.min(1, (this.playbackTime - frameA.t) / span));

    this.ghostMesh.position.set(
      THREE.MathUtils.lerp(frameA.x, frameB.x, alpha),
      THREE.MathUtils.lerp(frameA.y, frameB.y, alpha),
      THREE.MathUtils.lerp(frameA.z, frameB.z, alpha)
    );

    this.ghostMesh.rotation.set(
      THREE.MathUtils.lerp(frameA.rx, frameB.rx, alpha),
      THREE.MathUtils.lerp(frameA.ry, frameB.ry, alpha),
      THREE.MathUtils.lerp(frameA.rz, frameB.rz, alpha)
    );
  }

  public hideGhost(): void {
    this.ghostActive = false;
    this.ghostMesh.visible = false;
  }

  public saveBestGhost(envId: string, rec: GhostRecording): void {
    try {
      if (typeof localStorage !== 'undefined') {
        const key = `aerorush_ghost_${envId}`;
        const existing = this.getBestGhost(envId);
        if (!existing || rec.totalScore > existing.totalScore) {
          localStorage.setItem(key, JSON.stringify(rec));
        }
      }
    } catch (e) {
      console.warn('Could not save ghost to storage:', e);
    }
  }

  public getBestGhost(envId: string): GhostRecording | null {
    try {
      if (typeof localStorage !== 'undefined') {
        const key = `aerorush_ghost_${envId}`;
        const raw = localStorage.getItem(key);
        if (raw) {
          return JSON.parse(raw) as GhostRecording;
        }
      }
    } catch (e) {
      console.warn('Could not load ghost from storage:', e);
    }
    return null;
  }
}
