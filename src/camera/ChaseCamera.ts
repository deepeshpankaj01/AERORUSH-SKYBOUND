// AERORUSH: SKYBOUND - Dynamic Third-Person Chase Camera
import * as THREE from 'three';

export class ChaseCamera {
  public camera: THREE.PerspectiveCamera;
  private currentPos: THREE.Vector3 = new THREE.Vector3(0, 4, -10);
  private currentLookAt: THREE.Vector3 = new THREE.Vector3(0, 1.2, 10);

  // Camera Shake
  private shakeIntensity: number = 0;
  private shakeTimer: number = 0;
  public reducedMotion: boolean = false;

  constructor(fov: number = 60, aspect: number = 16 / 9, near: number = 0.2, far: number = 600) {
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.copy(this.currentPos);
  }

  public update(
    carPos: THREE.Vector3,
    carSpeedNorm: number,
    isBoosting: boolean,
    steerAngle: number,
    isAirborne: boolean,
    dt: number
  ): void {
    // 1. Dynamic FOV: Base 60° expands to 75° during high-speed and boost
    const targetFov = 60 + carSpeedNorm * 10 + (isBoosting ? 6 : 0);
    this.camera.fov = THREE.MathUtils.lerp(this.camera.fov, targetFov, 6 * dt);
    this.camera.updateProjectionMatrix();

    // 2. Camera Chase Offset
    const heightOffset = isAirborne ? 3.6 : 2.8;
    const distanceOffset = isBoosting ? -7.8 : -7.0;
    const lateralShift = -steerAngle * 1.5;

    const desiredPos = new THREE.Vector3(
      carPos.x * 0.75 + lateralShift,
      carPos.y + heightOffset,
      carPos.z + distanceOffset
    );

    const desiredLookAt = new THREE.Vector3(
      carPos.x * 0.4,
      carPos.y + 1.2,
      carPos.z + 12.0
    );

    // Smooth lerp (tight response to keep car visible and grounded)
    const posLerpFactor = 1.0 - Math.exp(-12 * dt);
    const lookLerpFactor = 1.0 - Math.exp(-15 * dt);

    this.currentPos.lerp(desiredPos, posLerpFactor);
    this.currentLookAt.lerp(desiredLookAt, lookLerpFactor);

    // 3. Screen Shake
    if (!this.reducedMotion && this.shakeTimer > 0) {
      this.shakeTimer -= dt;
      const decay = Math.max(0, this.shakeTimer);
      const shakeX = (Math.random() - 0.5) * this.shakeIntensity * decay;
      const shakeY = (Math.random() - 0.5) * this.shakeIntensity * decay;

      this.camera.position.set(
        this.currentPos.x + shakeX,
        this.currentPos.y + shakeY,
        this.currentPos.z
      );
    } else {
      this.camera.position.copy(this.currentPos);
    }

    this.camera.lookAt(this.currentLookAt);
  }

  public triggerImpactShake(intensity: number = 0.5, duration: number = 0.25): void {
    if (this.reducedMotion) return;
    this.shakeIntensity = intensity;
    this.shakeTimer = duration;
  }

  public setAspect(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }
}
