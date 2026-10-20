// AERORUSH: SKYBOUND - Real-Time Multiplayer Client & State Machine
// Handles WebSocket connection, room coordination, opponent interpolation, and 3D rival mesh.

import * as THREE from 'three';
import { CarModel } from '../entities/CarModel';

export interface OpponentState {
  playerId: string;
  name: string;
  targetPos: THREE.Vector3;
  targetRot: THREE.Euler;
  currentPos: THREE.Vector3;
  currentRot: THREE.Euler;
  speed: number;
  isBoosting: boolean;
  isAirborne: boolean;
  currentStunt: string | null;
  lastUpdate: number;
}

export interface MultiplayerRoomInfo {
  code: string;
  isHost: boolean;
  environmentId: string;
  seed: number;
  stageLength: number;
  players: Array<{ id: string; name: string; isReady: boolean; isHost: boolean; carPaint?: string }>;
}

export type MultiplayerStatus = 'OFFLINE' | 'CONNECTING' | 'CONNECTED' | 'IN_ROOM' | 'STARTING' | 'RACING';

export class MultiplayerClient {
  private ws: WebSocket | null = null;
  private serverUrl: string;
  private status: MultiplayerStatus = 'OFFLINE';
  private playerId: string = '';
  private currentRoom: MultiplayerRoomInfo | null = null;

  // Opponent Hypercar Rendering
  public opponentCar: CarModel;
  public opponentMeshRoot: THREE.Group;
  private opponentState: OpponentState | null = null;
  private nameplateMesh: THREE.Sprite | null = null;

  // Telemetry throttling (15 updates per second = ~66ms)
  private lastTelemetrySent: number = 0;
  private telemetryIntervalMs: number = 66;

  // Event Callbacks
  public onStatusChange?: (status: MultiplayerStatus, msg?: string) => void;
  public onRoomUpdated?: (room: MultiplayerRoomInfo) => void;
  public onRaceCountdown?: (seconds: number) => void;
  public onRaceStart?: () => void;
  public onOpponentFinished?: (data: { name: string; finalScore: number; distanceM: number }) => void;
  public onOpponentDisconnected?: (reason: string) => void;
  public onError?: (msg: string) => void;

  constructor() {
    this.serverUrl = import.meta.env.VITE_MULTIPLAYER_SERVER_URL || 'ws://localhost:8080';
    this.opponentCar = new CarModel();
    this.opponentMeshRoot = new THREE.Group();
    this.opponentMeshRoot.add(this.opponentCar.root);
    this.opponentMeshRoot.visible = false;

    // Apply distinct rival styling: Titanium or Crimson with Orange glow
    this.opponentCar.setPaint('crimson_red');
    this.opponentCar.setUnderglowColor(0xff0055);
    this.opponentCar.setThrusterColor(0xffaa00);

    // Create 3D floating callsign nameplate above rival car
    this.createNameplate('RIVAL PILOT');
  }

  private createNameplate(text: string): void {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = 'rgba(10, 16, 26, 0.85)';
      ctx.strokeStyle = '#ff0055';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(10, 10, 236, 44, 8);
      ctx.fill();
      ctx.stroke();

      ctx.font = 'bold 22px "Rajdhani", sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 128, 32);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    if (this.nameplateMesh) {
      this.opponentMeshRoot.remove(this.nameplateMesh);
    }
    this.nameplateMesh = new THREE.Sprite(spriteMat);
    this.nameplateMesh.scale.set(3.5, 0.9, 1);
    this.nameplateMesh.position.set(0, 1.8, 0);
    this.opponentMeshRoot.add(this.nameplateMesh);
  }

  public updateNameplate(text: string): void {
    this.createNameplate(text);
  }

  public getStatus(): MultiplayerStatus {
    return this.status;
  }

  public getCurrentRoom(): MultiplayerRoomInfo | null {
    return this.currentRoom;
  }

  public connect(onConnected?: () => void, onError?: (err: string) => void): void {
    if (this.ws && (this.ws.readyState === WebSocket.OPEN || this.ws.readyState === WebSocket.CONNECTING)) {
      if (onConnected) onConnected();
      return;
    }

    this.status = 'CONNECTING';
    if (this.onStatusChange) this.onStatusChange('CONNECTING');

    try {
      this.ws = new WebSocket(this.serverUrl);

      const connectionTimeout = setTimeout(() => {
        if (this.status === 'CONNECTING') {
          this.disconnect();
          const err = 'Connection to multiplayer server timed out.';
          if (onError) onError(err);
          if (this.onError) this.onError(err);
        }
      }, 5000);

      this.ws.onopen = () => {
        clearTimeout(connectionTimeout);
        this.status = 'CONNECTED';
        if (this.onStatusChange) this.onStatusChange('CONNECTED');
        if (onConnected) onConnected();
      };

      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          this.handlePacket(data);
        } catch (_) {}
      };

      this.ws.onerror = () => {
        clearTimeout(connectionTimeout);
        const err = `Could not reach multiplayer relay at ${this.serverUrl}.`;
        this.status = 'OFFLINE';
        if (this.onStatusChange) this.onStatusChange('OFFLINE', err);
        if (onError) onError(err);
      };

      this.ws.onclose = () => {
        clearTimeout(connectionTimeout);
        this.status = 'OFFLINE';
        this.currentRoom = null;
        this.opponentMeshRoot.visible = false;
        if (this.onStatusChange) this.onStatusChange('OFFLINE');
      };
    } catch (e: any) {
      this.status = 'OFFLINE';
      if (onError) onError(e?.message || 'WebSocket connection error');
    }
  }

  public disconnect(): void {
    if (this.ws) {
      try {
        this.ws.close();
      } catch (_) {}
      this.ws = null;
    }
    this.status = 'OFFLINE';
    this.currentRoom = null;
    this.opponentMeshRoot.visible = false;
    this.opponentState = null;
    if (this.onStatusChange) this.onStatusChange('OFFLINE');
  }

  public createRoom(params: {
    playerName: string;
    environmentId: string;
    seed: number;
    stageLength: number;
    carPaint?: string;
  }): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      if (this.onError) this.onError('Not connected to multiplayer relay.');
      return;
    }

    this.ws.send(JSON.stringify({
      type: 'CREATE_ROOM',
      playerName: params.playerName,
      environmentId: params.environmentId,
      seed: params.seed,
      stageLength: params.stageLength,
      carPaint: params.carPaint,
    }));
  }

  public joinRoom(roomCode: string, playerName: string, carPaint?: string): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
      if (this.onError) this.onError('Not connected to multiplayer relay.');
      return;
    }

    this.ws.send(JSON.stringify({
      type: 'JOIN_ROOM',
      roomCode: roomCode.trim().toUpperCase(),
      playerName,
      carPaint,
    }));
  }

  public toggleReady(isReady: boolean): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    this.ws.send(JSON.stringify({
      type: 'SET_READY',
      ready: isReady,
    }));
  }

  public leaveRoom(): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({ type: 'LEAVE_ROOM' }));
    }
    this.currentRoom = null;
    this.opponentMeshRoot.visible = false;
    this.opponentState = null;
    this.status = 'CONNECTED';
    if (this.onStatusChange) this.onStatusChange('CONNECTED');
  }

  public sendTelemetry(
    pos: THREE.Vector3,
    rot: THREE.Euler,
    speed: number,
    isBoosting: boolean,
    isAirborne: boolean,
    currentStunt?: string
  ): void {
    if (this.status !== 'RACING' || !this.ws || this.ws.readyState !== WebSocket.OPEN) return;

    const now = performance.now();
    if (now - this.lastTelemetrySent < this.telemetryIntervalMs) return;
    this.lastTelemetrySent = now;

    this.ws.send(JSON.stringify({
      type: 'SYNC_TELEMETRY',
      x: Number(pos.x.toFixed(2)),
      y: Number(pos.y.toFixed(2)),
      z: Number(pos.z.toFixed(2)),
      rotX: Number(rot.x.toFixed(3)),
      rotY: Number(rot.y.toFixed(3)),
      rotZ: Number(rot.z.toFixed(3)),
      speed: Number(speed.toFixed(1)),
      isBoosting,
      isAirborne,
      currentStunt,
    }));
  }

  public sendFinish(score: number, distance: number, elapsedTime: number): void {
    if (!this.ws || this.ws.readyState !== WebSocket.OPEN) return;
    this.ws.send(JSON.stringify({
      type: 'PLAYER_FINISH',
      score,
      distance,
      elapsedTime,
    }));
  }

  /**
   * Update opponent mesh position & rotation with smooth interpolation (lerping)
   */
  public update(dt: number): void {
    if (!this.opponentState || !this.opponentMeshRoot.visible) return;

    // Smooth lerp position (higher factor = tighter tracking)
    const lerpFactor = Math.min(1.0, dt * 15);
    this.opponentState.currentPos.lerp(this.opponentState.targetPos, lerpFactor);

    // Smooth lerp rotation angles
    this.opponentState.currentRot.x += (this.opponentState.targetRot.x - this.opponentState.currentRot.x) * lerpFactor;
    this.opponentState.currentRot.y += (this.opponentState.targetRot.y - this.opponentState.currentRot.y) * lerpFactor;
    this.opponentState.currentRot.z += (this.opponentState.targetRot.z - this.opponentState.currentRot.z) * lerpFactor;

    this.opponentCar.root.position.copy(this.opponentState.currentPos);
    this.opponentCar.root.rotation.copy(this.opponentState.currentRot);

    this.opponentCar.updateVisuals(
      this.opponentState.speed,
      0,
      this.opponentState.isBoosting,
      this.opponentState.isAirborne,
      dt
    );
  }

  public getOpponentDistance(): number | null {
    if (!this.opponentState || !this.opponentMeshRoot.visible) return null;
    return this.opponentState.currentPos.z;
  }

  private handlePacket(data: any): void {
    switch (data.type) {
      case 'CONNECTED':
        this.playerId = data.playerId;
        break;

      case 'ROOM_CREATED':
      case 'ROOM_JOINED':
        this.status = 'IN_ROOM';
        this.currentRoom = {
          code: data.roomCode,
          isHost: data.type === 'ROOM_CREATED',
          environmentId: data.environmentId,
          seed: data.seed,
          stageLength: data.stageLength,
          players: data.players,
        };
        if (this.onStatusChange) this.onStatusChange('IN_ROOM');
        if (this.onRoomUpdated) this.onRoomUpdated(this.currentRoom);
        break;

      case 'ROOM_UPDATED':
        if (this.currentRoom) {
          this.currentRoom.players = data.players;
          if (this.onRoomUpdated) this.onRoomUpdated(this.currentRoom);
        }
        break;

      case 'RACE_COUNTDOWN':
        this.status = 'STARTING';
        if (this.onStatusChange) this.onStatusChange('STARTING');
        if (this.onRaceCountdown) this.onRaceCountdown(data.countdownSeconds);
        break;

      case 'RACE_START':
        this.status = 'RACING';
        this.opponentMeshRoot.visible = true;
        this.initOpponentState();
        if (this.onStatusChange) this.onStatusChange('RACING');
        if (this.onRaceStart) this.onRaceStart();
        break;

      case 'OPPONENT_TELEMETRY':
        if (!this.opponentState) {
          this.initOpponentState();
        }
        if (this.opponentState) {
          this.opponentState.targetPos.set(data.x, data.y, data.z);
          this.opponentState.targetRot.set(data.rotX, data.rotY, data.rotZ);
          this.opponentState.speed = data.speed;
          this.opponentState.isBoosting = data.isBoosting;
          this.opponentState.isAirborne = data.isAirborne;
          this.opponentState.currentStunt = data.currentStunt;
          this.opponentState.lastUpdate = performance.now();
        }
        break;

      case 'OPPONENT_FINISHED':
        if (this.onOpponentFinished) {
          this.onOpponentFinished({
            name: data.name,
            finalScore: data.finalScore,
            distanceM: data.distanceM,
          });
        }
        break;

      case 'OPPONENT_DISCONNECTED':
        this.opponentMeshRoot.visible = false;
        if (this.onOpponentDisconnected) this.onOpponentDisconnected(data.message);
        break;

      case 'ERROR':
        if (this.onError) this.onError(data.message);
        break;
    }
  }

  private initOpponentState(): void {
    const otherPlayer = this.currentRoom?.players.find(p => p.id !== this.playerId);
    const opponentName = otherPlayer ? otherPlayer.name : 'RIVAL';

    this.updateNameplate(opponentName);

    this.opponentState = {
      playerId: otherPlayer ? otherPlayer.id : 'rival',
      name: opponentName,
      targetPos: new THREE.Vector3(2.5, 0, 0),
      targetRot: new THREE.Euler(0, 0, 0),
      currentPos: new THREE.Vector3(2.5, 0, 0),
      currentRot: new THREE.Euler(0, 0, 0),
      speed: 0,
      isBoosting: false,
      isAirborne: false,
      currentStunt: null,
      lastUpdate: performance.now(),
    };
    this.opponentCar.root.position.copy(this.opponentState.currentPos);
  }
}
