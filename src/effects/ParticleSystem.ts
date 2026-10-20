// AERORUSH: SKYBOUND - High-Performance Pooled Particle System
import * as THREE from 'three';

interface Particle {
  pos: THREE.Vector3;
  vel: THREE.Vector3;
  color: THREE.Color;
  size: number;
  life: number;
  maxLife: number;
}

export class ParticleSystem {
  public root: THREE.Group;
  private maxParticles: number;

  // GPU Buffer for Points
  private positions: Float32Array;
  private colors: Float32Array;
  private sizes: Float32Array;
  private geometry: THREE.BufferGeometry;
  private pointsMesh: THREE.Points;

  // CPU particle pool
  private pool: Particle[] = [];
  private activeCount: number = 0;

  // Speed lines geometry
  private speedLinesMesh: THREE.LineSegments | null = null;

  constructor(maxParticles: number = 1000) {
    this.root = new THREE.Group();
    this.maxParticles = maxParticles;

    this.positions = new Float32Array(maxParticles * 3);
    this.colors = new Float32Array(maxParticles * 3);
    this.sizes = new Float32Array(maxParticles);

    // Initialize pool
    for (let i = 0; i < maxParticles; i++) {
      this.pool.push({
        pos: new THREE.Vector3(),
        vel: new THREE.Vector3(),
        color: new THREE.Color(),
        size: 1.0,
        life: 0,
        maxLife: 1.0,
      });
    }

    this.geometry = new THREE.BufferGeometry();
    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3));
    this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3));
    this.geometry.setAttribute('size', new THREE.BufferAttribute(this.sizes, 1));

    // Custom circular sprite texture generated procedurally via Canvas (no external CDN!)
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.3, 'rgba(0,240,255,0.8)');
      grad.addColorStop(0.7, 'rgba(0,180,255,0.2)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTex = new THREE.CanvasTexture(canvas);

    const mat = new THREE.PointsMaterial({
      size: 0.8,
      map: particleTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      depthWrite: false,
    });

    this.pointsMesh = new THREE.Points(this.geometry, mat);
    this.root.add(this.pointsMesh);

    this.setupSpeedLines();
  }

  private setupSpeedLines(): void {
    const lineCount = 60;
    const linePositions = new Float32Array(lineCount * 6); // 2 vertices per line

    for (let i = 0; i < lineCount; i++) {
      const x = (Math.random() - 0.5) * 30;
      const y = Math.random() * 12 + 0.5;
      const z = Math.random() * 80;
      const len = 4 + Math.random() * 6;

      const idx = i * 6;
      linePositions[idx] = x;
      linePositions[idx + 1] = y;
      linePositions[idx + 2] = z;

      linePositions[idx + 3] = x;
      linePositions[idx + 4] = y;
      linePositions[idx + 5] = z + len;
    }

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });

    this.speedLinesMesh = new THREE.LineSegments(lineGeo, lineMat);
    this.root.add(this.speedLinesMesh);
  }

  public spawn(
    x: number,
    y: number,
    z: number,
    vx: number,
    vy: number,
    vz: number,
    colorHex: number,
    size: number,
    life: number
  ): void {
    if (this.activeCount >= this.maxParticles) return;

    const p = this.pool[this.activeCount];
    p.pos.set(x, y, z);
    p.vel.set(vx, vy, vz);
    p.color.setHex(colorHex);
    p.size = size;
    p.life = life;
    p.maxLife = life;

    this.activeCount++;
  }

  public emitThrusterPlume(posL: THREE.Vector3, posR: THREE.Vector3, isBoosting: boolean): void {
    const count = isBoosting ? 4 : 2;
    const baseColor = isBoosting ? 0xff5500 : 0x00f0ff;
    const speed = isBoosting ? -18 : -10;

    for (let i = 0; i < count; i++) {
      // Left Thruster
      this.spawn(
        posL.x + (Math.random() - 0.5) * 0.15,
        posL.y + (Math.random() - 0.5) * 0.15,
        posL.z + (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        speed + (Math.random() - 0.5) * 4,
        baseColor,
        isBoosting ? 1.4 : 0.8,
        0.28
      );

      // Right Thruster
      this.spawn(
        posR.x + (Math.random() - 0.5) * 0.15,
        posR.y + (Math.random() - 0.5) * 0.15,
        posR.z + (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        speed + (Math.random() - 0.5) * 4,
        baseColor,
        isBoosting ? 1.4 : 0.8,
        0.28
      );
    }
  }

  public emitDriftSmoke(x: number, y: number, z: number): void {
    for (let i = 0; i < 2; i++) {
      this.spawn(
        x + (Math.random() - 0.5) * 1.6,
        y + 0.15,
        z + (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 3,
        Math.random() * 2 + 1,
        (Math.random() - 0.5) * 3,
        0x5588aa,
        1.2,
        0.45
      );
    }
  }

  public emitLandingImpact(pos: THREE.Vector3, isClean: boolean): void {
    const count = isClean ? 35 : 55;
    const color = isClean ? 0x00f0ff : 0xff5500;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const speed = Math.random() * 14 + 6;
      this.spawn(
        pos.x,
        pos.y + 0.1,
        pos.z,
        Math.cos(angle) * speed,
        Math.random() * 6 + 2,
        Math.sin(angle) * speed,
        color,
        1.5,
        0.45
      );
    }
  }

  public emitPickupExplosion(pos: THREE.Vector3): void {
    for (let i = 0; i < 25; i++) {
      const angle = Math.random() * Math.PI * 2;
      const vElev = (Math.random() - 0.5) * 10;
      const speed = Math.random() * 8 + 4;
      this.spawn(
        pos.x,
        pos.y,
        pos.z,
        Math.cos(angle) * speed,
        vElev,
        Math.sin(angle) * speed,
        0x00f0ff,
        1.8,
        0.5
      );
    }
  }

  public emitGatePass(pos: THREE.Vector3): void {
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 6.0;
      this.spawn(
        pos.x + Math.cos(angle) * radius,
        pos.y + Math.sin(angle) * radius,
        pos.z,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        Math.random() * 8 + 4,
        0xff0077,
        1.6,
        0.4
      );
    }
  }

  public update(dt: number, carPos: THREE.Vector3, forwardSpeed: number): void {
    const posAttr = this.geometry.attributes.position as THREE.BufferAttribute;
    const colAttr = this.geometry.attributes.color as THREE.BufferAttribute;
    const sizeAttr = this.geometry.attributes.size as THREE.BufferAttribute;

    let writeIdx = 0;

    for (let i = 0; i < this.activeCount; i++) {
      const p = this.pool[i];
      p.life -= dt;

      if (p.life > 0) {
        // Integrate physics
        p.pos.addScaledVector(p.vel, dt);

        const lifeRatio = p.life / p.maxLife;

        // Write to GPU arrays
        this.positions[writeIdx * 3] = p.pos.x;
        this.positions[writeIdx * 3 + 1] = p.pos.y;
        this.positions[writeIdx * 3 + 2] = p.pos.z;

        this.colors[writeIdx * 3] = p.color.r * lifeRatio;
        this.colors[writeIdx * 3 + 1] = p.color.g * lifeRatio;
        this.colors[writeIdx * 3 + 2] = p.color.b * lifeRatio;

        this.sizes[writeIdx] = p.size * (0.4 + 0.6 * lifeRatio);

        // Compact active pool
        if (writeIdx !== i) {
          const temp = this.pool[writeIdx];
          this.pool[writeIdx] = p;
          this.pool[i] = temp;
        }

        writeIdx++;
      }
    }

    this.activeCount = writeIdx;

    // Clear unused buffer elements by zeroing sizes
    for (let i = writeIdx; i < Math.min(this.maxParticles, writeIdx + 30); i++) {
      this.sizes[i] = 0;
    }

    posAttr.needsUpdate = true;
    colAttr.needsUpdate = true;
    sizeAttr.needsUpdate = true;
    this.geometry.setDrawRange(0, this.activeCount);

    // Update Speed Lines Tunnel
    if (this.speedLinesMesh) {
      const speedNorm = Math.max(0, Math.min(1, (forwardSpeed - 50) / 50));
      (this.speedLinesMesh.material as THREE.LineBasicMaterial).opacity = speedNorm * 0.45;

      // Follow car longitudinally
      this.speedLinesMesh.position.z = carPos.z - 20;
    }
  }

  public setMaxParticles(limit: number): void {
    this.maxParticles = Math.min(limit, this.pool.length);
  }
}
