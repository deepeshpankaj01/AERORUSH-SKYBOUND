// AERORUSH: SKYBOUND - Reusable Segmented Skyway with Multi-Environment Themes & Weather
import * as THREE from 'three';
import { GAME_CONFIG } from '../config/GameConfig';
import { EnvironmentTheme, ENVIRONMENTS } from './EnvironmentConfig';

export interface RampEntity {
  mesh: THREE.Group;
  box: THREE.Box3;
  zStart: number;
  zEnd: number;
  height: number;
}

export interface PickupEntity {
  mesh: THREE.Group;
  pos: THREE.Vector3;
  active: boolean;
  radius: number;
}

export interface StuntGateEntity {
  mesh: THREE.Group;
  pos: THREE.Vector3;
  passed: boolean;
  radius: number;
}

export interface ObstacleEntity {
  mesh: THREE.Group;
  box: THREE.Box3;
  active: boolean;
}

export class TrackSegment {
  public group: THREE.Group;
  public zStart: number = 0;
  public zEnd: number = 0;
  public ramps: RampEntity[] = [];
  public pickups: PickupEntity[] = [];
  public stuntGates: StuntGateEntity[] = [];
  public obstacles: ObstacleEntity[] = [];

  constructor(group: THREE.Group) {
    this.group = group;
  }
}

export class TrackManager {
  public root: THREE.Group;
  public currentTheme: EnvironmentTheme = ENVIRONMENTS.neon_dusk;
  public trackSeed: number = 442001;

  private segments: TrackSegment[] = [];
  private segmentLength: number = GAME_CONFIG.world.segmentLength;
  private activeSegmentCount: number = GAME_CONFIG.world.activeSegments;

  // Shared Materials for mesh reuse
  private roadMaterial: THREE.MeshStandardMaterial;
  private markingMaterial: THREE.MeshBasicMaterial;
  private barrierMaterial: THREE.MeshStandardMaterial;
  private barrierGlowMaterial: THREE.MeshBasicMaterial;
  private rampMaterial: THREE.MeshStandardMaterial;
  private rampGlowMaterial: THREE.MeshBasicMaterial;
  private pickupMaterial: THREE.MeshStandardMaterial;
  private gateMaterial: THREE.MeshBasicMaterial;
  private obstacleMaterial: THREE.MeshStandardMaterial;

  // Environment & Scenery
  private skylineGroup: THREE.Group;
  private weatherGroup: THREE.Group;

  // Rain Particle System for Monsoon
  private rainGeometry: THREE.BufferGeometry | null = null;
  private rainPositions: Float32Array | null = null;
  private rainPoints: THREE.Points | null = null;
  private rainCount: number = 1200;

  // Lightning effect for Monsoon
  public lightningIntensity: number = 0;
  private lightningTimer: number = 0;

  constructor() {
    this.root = new THREE.Group();
    this.skylineGroup = new THREE.Group();
    this.weatherGroup = new THREE.Group();
    this.root.add(this.skylineGroup, this.weatherGroup);

    // Initialize Shared Materials
    this.roadMaterial = new THREE.MeshStandardMaterial({
      color: this.currentTheme.roadColor,
      roughness: 0.65,
      metalness: 0.25,
    });

    this.markingMaterial = new THREE.MeshBasicMaterial({
      color: this.currentTheme.roadMarkingsColor,
    });

    this.barrierMaterial = new THREE.MeshStandardMaterial({
      color: this.currentTheme.barrierColor,
      roughness: 0.5,
      metalness: 0.6,
    });

    this.barrierGlowMaterial = new THREE.MeshBasicMaterial({
      color: this.currentTheme.barrierGlowColor,
    });

    this.rampMaterial = new THREE.MeshStandardMaterial({
      color: this.currentTheme.rampColor,
      roughness: 0.3,
      metalness: 0.7,
    });

    this.rampGlowMaterial = new THREE.MeshBasicMaterial({
      color: this.currentTheme.rampGlowColor,
    });

    this.pickupMaterial = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.2,
      roughness: 0.1,
      metalness: 0.8,
    });

    this.gateMaterial = new THREE.MeshBasicMaterial({
      color: GAME_CONFIG.world.colors.stuntRing,
    });

    this.obstacleMaterial = new THREE.MeshStandardMaterial({
      color: this.currentTheme.obstacleColor,
      emissive: this.currentTheme.obstacleEmissive,
      emissiveIntensity: 1.6,
      roughness: 0.2,
      metalness: 0.8,
    });

    this.setupWeather();
    this.buildSkyline();
    this.initializeSegments();
  }

  private setupWeather(): void {
    // Rain Particles
    this.rainPositions = new Float32Array(this.rainCount * 3);
    for (let i = 0; i < this.rainCount; i++) {
      this.rainPositions[i * 3] = (Math.random() - 0.5) * 50;
      this.rainPositions[i * 3 + 1] = Math.random() * 30 + 0.5;
      this.rainPositions[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }

    this.rainGeometry = new THREE.BufferGeometry();
    this.rainGeometry.setAttribute('position', new THREE.BufferAttribute(this.rainPositions, 3));

    const rainMat = new THREE.PointsMaterial({
      color: 0x88ccff,
      size: 0.28,
      transparent: true,
      opacity: 0.65,
    });

    this.rainPoints = new THREE.Points(this.rainGeometry, rainMat);
    this.rainPoints.visible = false;
    this.weatherGroup.add(this.rainPoints);
  }

  public setEnvironment(theme: EnvironmentTheme): void {
    this.currentTheme = theme;

    // Update Materials
    this.roadMaterial.color.setHex(theme.roadColor);
    this.roadMaterial.roughness = theme.hasRain ? 0.2 : 0.65; // Wet reflection
    this.roadMaterial.metalness = theme.hasRain ? 0.5 : 0.25;

    this.markingMaterial.color.setHex(theme.roadMarkingsColor);
    this.barrierMaterial.color.setHex(theme.barrierColor);
    this.barrierGlowMaterial.color.setHex(theme.barrierGlowColor);
    this.rampMaterial.color.setHex(theme.rampColor);
    this.rampGlowMaterial.color.setHex(theme.rampGlowColor);
    this.obstacleMaterial.color.setHex(theme.obstacleColor);
    this.obstacleMaterial.emissive.setHex(theme.obstacleEmissive);

    // Weather visibility
    if (this.rainPoints) {
      this.rainPoints.visible = theme.hasRain;
    }

    // Rebuild Skyline
    this.buildSkyline();
  }

  private buildSkyline(): void {
    while (this.skylineGroup.children.length > 0) {
      this.skylineGroup.remove(this.skylineGroup.children[0]);
    }

    const style = this.currentTheme.skylineStyle;

    if (style === 'canyon') {
      // Sandstone Canyon Mesas & Rock Formations
      const mesaMat = new THREE.MeshStandardMaterial({
        color: 0x3d1c10,
        roughness: 0.9,
        metalness: 0.1,
      });

      for (let i = 0; i < 45; i++) {
        const side = i % 2 === 0 ? -1 : 1;
        const xDist = side * (Math.random() * 90 + 40);
        const zPos = (i / 45) * 800 - 100;
        const width = Math.random() * 40 + 25;
        const height = Math.random() * 70 + 35;
        const depth = Math.random() * 50 + 30;

        const mesa = new THREE.Mesh(new THREE.CylinderGeometry(width * 0.7, width, height, 6), mesaMat);
        mesa.position.set(xDist, height / 2 - 10, zPos);
        this.skylineGroup.add(mesa);
      }
    } else if (style === 'orbital') {
      // Space Station Solar Wings & Floating Hubs
      const spaceMat = new THREE.MeshStandardMaterial({
        color: 0x0c1424,
        roughness: 0.3,
        metalness: 0.8,
      });
      const solarMat = new THREE.MeshBasicMaterial({
        color: 0x2244ff,
        wireframe: true,
      });

      for (let i = 0; i < 35; i++) {
        const side = i % 2 === 0 ? -1 : 1;
        const xDist = side * (Math.random() * 100 + 45);
        const zPos = (i / 35) * 800 - 100;
        const station = new THREE.Group();
        station.position.set(xDist, Math.random() * 60 + 20, zPos);

        const hub = new THREE.Mesh(new THREE.SphereGeometry(10, 12, 12), spaceMat);
        const solarL = new THREE.Mesh(new THREE.BoxGeometry(24, 0.4, 8), solarMat);
        solarL.position.x = -16;
        const solarR = solarL.clone();
        solarR.position.x = 16;

        station.add(hub, solarL, solarR);
        this.skylineGroup.add(station);
      }
    } else {
      // Cyber / Metropolis Skyline
      const buildingCount = style === 'monsoon' ? 60 : 75;
      const bldgMat = new THREE.MeshStandardMaterial({
        color: style === 'monsoon' ? 0x060c18 : 0x0a101c,
        roughness: 0.7,
        metalness: 0.5,
      });
      const windowMat = new THREE.MeshBasicMaterial({
        color: style === 'monsoon' ? 0x38bdf8 : this.currentTheme.roadMarkingsColor,
        transparent: true,
        opacity: 0.6,
      });

      for (let i = 0; i < buildingCount; i++) {
        const side = i % 2 === 0 ? -1 : 1;
        const xDist = side * (Math.random() * 85 + 35);
        const zPos = (i / buildingCount) * 800 - 100;
        const width = Math.random() * 18 + 12;
        const height = Math.random() * 95 + 40;
        const depth = Math.random() * 18 + 12;

        const tower = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), bldgMat);
        tower.scale.set(width, height, depth);
        tower.position.set(xDist, height / 2 - 20, zPos);
        this.skylineGroup.add(tower);

        if (Math.random() > 0.4) {
          const spire = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 1.2, 16, 6), windowMat);
          spire.position.set(xDist, height - 12, zPos);
          this.skylineGroup.add(spire);
        }
      }
    }
  }

  private initializeSegments(): void {
    for (let i = 0; i < this.activeSegmentCount; i++) {
      const segGroup = new THREE.Group();
      this.root.add(segGroup);
      const segment = new TrackSegment(segGroup);
      this.segments.push(segment);

      this.populateSegment(segment, i * this.segmentLength);
    }
  }

  private populateSegment(segment: TrackSegment, zStart: number): void {
    segment.zStart = zStart;
    segment.zEnd = zStart + this.segmentLength;
    segment.group.position.set(0, 0, zStart);

    while (segment.group.children.length > 0) {
      segment.group.remove(segment.group.children[0]);
    }
    segment.ramps = [];
    segment.pickups = [];
    segment.stuntGates = [];
    segment.obstacles = [];

    const roadW = GAME_CONFIG.world.roadWidth;
    const len = this.segmentLength;

    // 1. Road Deck
    const roadGeo = new THREE.BoxGeometry(roadW, 0.8, len);
    const roadMesh = new THREE.Mesh(roadGeo, this.roadMaterial);
    roadMesh.position.set(0, 0, len / 2);
    roadMesh.receiveShadow = true;
    segment.group.add(roadMesh);

    // 2. Road Markings (Lane lines)
    const laneCount = 4;
    const laneW = roadW / laneCount;
    for (let l = 1; l < laneCount; l++) {
      const x = -roadW / 2 + l * laneW;
      const dashCount = 8;
      const dashLen = 5;
      const gap = (len - dashCount * dashLen) / dashCount;

      for (let d = 0; d < dashCount; d++) {
        const markingGeo = new THREE.PlaneGeometry(0.25, dashLen);
        const marking = new THREE.Mesh(markingGeo, this.markingMaterial);
        marking.rotation.x = -Math.PI / 2;
        marking.position.set(x, 0.41, d * (dashLen + gap) + dashLen / 2);
        segment.group.add(marking);
      }
    }

    // 3. Side Highway Barriers & Edge Glow
    const barrierGeo = new THREE.BoxGeometry(0.6, 1.4, len);
    const glowGeo = new THREE.BoxGeometry(0.2, 0.15, len);

    // Left Barrier
    const leftBarrier = new THREE.Mesh(barrierGeo, this.barrierMaterial);
    leftBarrier.position.set(-roadW / 2 + 0.3, 0.7, len / 2);
    const leftGlow = new THREE.Mesh(glowGeo, this.barrierGlowMaterial);
    leftGlow.position.set(-roadW / 2 + 0.3, 1.45, len / 2);

    // Right Barrier
    const rightBarrier = new THREE.Mesh(barrierGeo, this.barrierMaterial);
    rightBarrier.position.set(roadW / 2 - 0.3, 0.7, len / 2);
    const rightGlow = new THREE.Mesh(glowGeo, this.barrierGlowMaterial);
    rightGlow.position.set(roadW / 2 - 0.3, 1.45, len / 2);

    segment.group.add(leftBarrier, leftGlow, rightBarrier, rightGlow);

    // 4. Highway Support Arch / Gantry
    const gantry = this.createGantry(roadW, len / 2);
    segment.group.add(gantry);

    // 5. Dynamic Content (Ramps, Pickups, Obstacles, Stunt Gates)
    if (zStart > 100) {
      const segIndex = Math.floor(zStart / this.segmentLength);
      // Deterministic PRNG offset using trackSeed
      const seedHash = ((segIndex + 17) * 9301 + (this.trackSeed % 49297)) % 233280;
      const isRampSegment = (seedHash % 3) !== 0; // ~66% segments have ramps/gates or obstacles

      if (isRampSegment && (seedHash % 2 === 1)) {
        const laneOffset = (((seedHash % 3)) - 1) * 6; // -6, 0, or 6
        const ramp = this.createRamp(laneOffset, len * 0.4, zStart);
        segment.ramps.push(ramp);
        segment.group.add(ramp.mesh);

        // Place a Stunt Gate in the air after the ramp
        const gate = this.createStuntGate(laneOffset, len * 0.75, 7.5, zStart);
        segment.stuntGates.push(gate);
        segment.group.add(gate.mesh);
      } else {
        // Place an Obstacle and Pickups
        const obsLane = (((seedHash % 3)) - 1) * 6;
        const obstacle = this.createObstacle(obsLane, len * 0.5, zStart);
        segment.obstacles.push(obstacle);
        segment.group.add(obstacle.mesh);
      }

      // Spawn 3 Energy Pickups along a lane
      const pickupLane = ((((seedHash + 1) % 3)) - 1) * 6;
      for (let p = 0; p < 3; p++) {
        const pickupZ = len * 0.25 + p * 12;
        const pickup = this.createPickup(pickupLane, pickupZ, 1.1, zStart);
        segment.pickups.push(pickup);
        segment.group.add(pickup.mesh);
      }
    }
  }

  private createGantry(roadW: number, localZ: number): THREE.Group {
    const group = new THREE.Group();
    group.position.set(0, 0, localZ);

    const legGeo = new THREE.BoxGeometry(0.8, 12, 0.8);
    const legL = new THREE.Mesh(legGeo, this.barrierMaterial);
    legL.position.set(-roadW / 2 - 0.4, 6, 0);
    const legR = legL.clone();
    legR.position.x = roadW / 2 + 0.4;

    const beamGeo = new THREE.BoxGeometry(roadW + 2, 0.8, 0.8);
    const beam = new THREE.Mesh(beamGeo, this.barrierMaterial);
    beam.position.set(0, 11.6, 0);

    const lineGeo = new THREE.BoxGeometry(roadW, 0.15, 0.85);
    const line = new THREE.Mesh(lineGeo, this.markingMaterial);
    line.position.set(0, 11.6, 0);

    group.add(legL, legR, beam, line);
    return group;
  }

  private createRamp(x: number, localZ: number, zStart: number): RampEntity {
    const group = new THREE.Group();
    group.position.set(x, 0.4, localZ);

    const rampLength = 12;
    const rampWidth = 4.2;
    const rampHeight = 3.0;

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0, rampHeight);
    shape.lineTo(rampLength, 0);
    shape.closePath();

    const geom = new THREE.ExtrudeGeometry(shape, { depth: rampWidth, bevelEnabled: false });
    geom.center();
    const mesh = new THREE.Mesh(geom, this.rampMaterial);
    mesh.rotation.y = -Math.PI / 2;
    group.add(mesh);

    // Glowing arrows on ramp
    const arrowGeo = new THREE.BoxGeometry(rampWidth * 0.7, 0.1, 0.5);
    for (let i = 0; i < 3; i++) {
      const arrow = new THREE.Mesh(arrowGeo, this.rampGlowMaterial);
      arrow.position.set(0, (i + 1) * 0.75, (i - 1) * 3);
      arrow.rotation.x = 0.25;
      group.add(arrow);
    }

    const worldZ = zStart + localZ;
    const box = new THREE.Box3(
      new THREE.Vector3(x - rampWidth / 2, 0, worldZ - rampLength / 2),
      new THREE.Vector3(x + rampWidth / 2, rampHeight, worldZ + rampLength / 2)
    );

    return {
      mesh: group,
      box,
      zStart: worldZ - rampLength / 2,
      zEnd: worldZ + rampLength / 2,
      height: rampHeight,
    };
  }

  private createPickup(x: number, localZ: number, y: number, zStart: number): PickupEntity {
    const group = new THREE.Group();
    group.position.set(x, y, localZ);

    const geo = new THREE.OctahedronGeometry(0.75);
    const mesh = new THREE.Mesh(geo, this.pickupMaterial);
    group.add(mesh);

    const ringGeo = new THREE.RingGeometry(0.9, 1.05, 16);
    const ringMesh = new THREE.Mesh(ringGeo, this.barrierGlowMaterial);
    ringMesh.rotation.x = Math.PI / 2;
    group.add(ringMesh);

    return {
      mesh: group,
      pos: new THREE.Vector3(x, y, zStart + localZ),
      active: true,
      radius: 1.4,
    };
  }

  private createStuntGate(x: number, localZ: number, y: number, zStart: number): StuntGateEntity {
    const group = new THREE.Group();
    group.position.set(x, y, localZ);

    const torusGeo = new THREE.TorusGeometry(3.6, 0.3, 8, 24);
    const ring = new THREE.Mesh(torusGeo, this.gateMaterial);
    group.add(ring);

    return {
      mesh: group,
      pos: new THREE.Vector3(x, y, zStart + localZ),
      passed: false,
      radius: 3.6,
    };
  }

  private createObstacle(x: number, localZ: number, zStart: number): ObstacleEntity {
    const group = new THREE.Group();
    group.position.set(x, 0.4, localZ);

    const obsWidth = 3.6;
    const obsHeight = 1.8;
    const obsGeo = new THREE.BoxGeometry(obsWidth, obsHeight, 1.0);
    const obsMesh = new THREE.Mesh(obsGeo, this.obstacleMaterial);
    obsMesh.position.y = obsHeight / 2;
    group.add(obsMesh);

    const strobeGeo = new THREE.SphereGeometry(0.3, 8, 8);
    const strobe = new THREE.Mesh(strobeGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));
    strobe.position.y = obsHeight + 0.3;
    group.add(strobe);

    const worldZ = zStart + localZ;
    const box = new THREE.Box3(
      new THREE.Vector3(x - obsWidth / 2, 0, worldZ - 0.8),
      new THREE.Vector3(x + obsWidth / 2, obsHeight, worldZ + 0.8)
    );

    return {
      mesh: group,
      box,
      active: true,
    };
  }

  public update(playerZ: number, dt: number): void {
    // 1. Recycle segments
    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      if (playerZ - seg.zEnd > 50) {
        let maxZ = 0;
        for (let j = 0; j < this.segments.length; j++) {
          if (this.segments[j].zEnd > maxZ) {
            maxZ = this.segments[j].zEnd;
          }
        }
        this.populateSegment(seg, maxZ);
      }
    }

    // 2. Animate Pickups and Stunt Rings
    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      for (let p = 0; p < seg.pickups.length; p++) {
        const pickup = seg.pickups[p];
        if (pickup.active) {
          pickup.mesh.rotation.y += 2.5 * dt;
          pickup.mesh.position.y = 1.1 + Math.sin(Date.now() * 0.004 + p) * 0.25;
        }
      }
      for (let g = 0; g < seg.stuntGates.length; g++) {
        seg.stuntGates[g].mesh.rotation.z += 0.8 * dt;
      }
    }

    // 3. Update Weather (Rain Animation & Lightning)
    if (this.currentTheme.hasRain && this.rainPositions && this.rainGeometry) {
      for (let i = 0; i < this.rainCount; i++) {
        this.rainPositions[i * 3 + 1] -= 45 * dt; // Fall downward
        if (this.rainPositions[i * 3 + 1] < 0) {
          this.rainPositions[i * 3 + 1] = 25 + Math.random() * 5;
        }
      }
      (this.rainGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
      this.weatherGroup.position.z = playerZ;

      // Occasional lightning flash
      this.lightningTimer += dt;
      if (this.lightningTimer > 7.0 + Math.random() * 5.0) {
        this.lightningTimer = 0;
        this.lightningIntensity = 1.0;
      }
      if (this.lightningIntensity > 0) {
        this.lightningIntensity = Math.max(0, this.lightningIntensity - 6.0 * dt);
      }
    }

    // 4. Keep skyline aligned with player distance
    this.skylineGroup.position.z = playerZ - 200;
  }

  public checkCollisions(
    carPos: THREE.Vector3,
    carBounds: THREE.Box3,
    onPickup: (pos: THREE.Vector3) => void,
    onGate: (pos: THREE.Vector3) => void,
    onRamp: (ramp: RampEntity) => void,
    onObstacle: () => void
  ): void {
    for (let i = 0; i < this.segments.length; i++) {
      const seg = this.segments[i];
      if (carPos.z < seg.zStart - 20 || carPos.z > seg.zEnd + 20) continue;

      // Ramps
      for (let r = 0; r < seg.ramps.length; r++) {
        const ramp = seg.ramps[r];
        if (carPos.z >= ramp.zStart && carPos.z <= ramp.zEnd) {
          if (Math.abs(carPos.x - ramp.mesh.position.x) < 2.2 && carPos.y <= 1.5) {
            onRamp(ramp);
          }
        }
      }

      // Pickups
      for (let p = 0; p < seg.pickups.length; p++) {
        const pickup = seg.pickups[p];
        if (pickup.active) {
          const dist = carPos.distanceTo(pickup.pos);
          if (dist < pickup.radius + 1.2) {
            pickup.active = false;
            pickup.mesh.visible = false;
            onPickup(pickup.pos);
          }
        }
      }

      // Stunt Gates
      for (let g = 0; g < seg.stuntGates.length; g++) {
        const gate = seg.stuntGates[g];
        if (!gate.passed && Math.abs(carPos.z - gate.pos.z) < 2.5) {
          const dx = carPos.x - gate.pos.x;
          const dy = carPos.y - gate.pos.y;
          const radialDist = Math.sqrt(dx * dx + dy * dy);
          if (radialDist < gate.radius) {
            gate.passed = true;
            onGate(gate.pos);
          }
        }
      }

      // Obstacles
      for (let o = 0; o < seg.obstacles.length; o++) {
        const obs = seg.obstacles[o];
        if (obs.active && obs.box.intersectsBox(carBounds)) {
          obs.active = false;
          obs.mesh.visible = false;
          onObstacle();
        }
      }
    }
  }

  public reset(seed?: number): void {
    if (seed !== undefined) {
      this.trackSeed = seed;
    }
    for (let i = 0; i < this.segments.length; i++) {
      this.populateSegment(this.segments[i], i * this.segmentLength);
    }
  }
}
