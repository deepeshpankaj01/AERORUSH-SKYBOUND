// AERORUSH: SKYBOUND - 3D Garage Showcase Scene & Vehicle Customizer
import * as THREE from 'three';
import { CarModel } from '../entities/CarModel';

export class GarageScene {
  public root: THREE.Group;
  public camera: THREE.PerspectiveCamera;
  public car: CarModel;

  private turntable: THREE.Group;
  private turntablePlatform: THREE.Mesh;
  private rotationAngle: number = 0;
  private isAutoRotating: boolean = true;
  private isPointerDown: boolean = false;
  private prevPointerX: number = 0;
  private prevPointerY: number = 0;
  private cameraDistance: number = 7.5;
  private cameraPitch: number = 0.35; // radians

  constructor(carModel: CarModel) {
    this.root = new THREE.Group();
    this.car = carModel;

    this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    this.turntable = new THREE.Group();
    this.root.add(this.turntable);

    // Build Circular High-Tech Turntable
    const platformGeo = new THREE.CylinderGeometry(4.5, 4.8, 0.3, 36);
    const platformMat = new THREE.MeshStandardMaterial({
      color: 0x0c121c,
      roughness: 0.2,
      metalness: 0.8,
    });
    this.turntablePlatform = new THREE.Mesh(platformGeo, platformMat);
    this.turntablePlatform.position.y = -0.15;
    this.turntablePlatform.receiveShadow = true;
    this.turntable.add(this.turntablePlatform);

    // Outer Glowing Ring on Turntable
    const ringGeo = new THREE.RingGeometry(4.2, 4.38, 36);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.01;
    this.turntable.add(ring);

    // Grid Floor
    const grid = new THREE.GridHelper(20, 20, 0x00f0ff, 0x142030);
    grid.position.y = -0.16;
    this.root.add(grid);

    // Garage Dedicated Lighting
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 5);
    const rimLight = new THREE.DirectionalLight(0x00f0ff, 3.0);
    rimLight.position.set(-6, 4, -5);
    const ambientLight = new THREE.AmbientLight(0x182438, 1.2);

    this.root.add(keyLight, rimLight, ambientLight);

    this.setupInteractivity();
    this.updateCamera();
  }

  public activate(): void {
    this.root.visible = true;
    this.turntable.add(this.car.root);
    this.car.root.position.set(0, 0, 0);
    this.car.root.rotation.set(0, 0, 0);
    this.isAutoRotating = true;
  }

  public deactivate(): void {
    this.root.visible = false;
    this.turntable.remove(this.car.root);
  }

  private setupInteractivity(): void {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    canvas.addEventListener('pointerdown', (e) => {
      if (!this.root.visible) return;
      this.isPointerDown = true;
      this.isAutoRotating = false;
      this.prevPointerX = e.clientX;
      this.prevPointerY = e.clientY;
    });

    window.addEventListener('pointermove', (e) => {
      if (!this.root.visible || !this.isPointerDown) return;
      const dx = e.clientX - this.prevPointerX;
      const dy = e.clientY - this.prevPointerY;
      this.prevPointerX = e.clientX;
      this.prevPointerY = e.clientY;

      this.rotationAngle += dx * 0.008;
      this.cameraPitch = Math.max(0.1, Math.min(0.8, this.cameraPitch - dy * 0.005));
      this.updateCamera();
    });

    window.addEventListener('pointerup', () => {
      this.isPointerDown = false;
    });

    canvas.addEventListener('wheel', (e) => {
      if (!this.root.visible) return;
      this.cameraDistance = Math.max(4.5, Math.min(12, this.cameraDistance + e.deltaY * 0.005));
      this.updateCamera();
    }, { passive: true });
  }

  private updateCamera(): void {
    const x = Math.sin(this.rotationAngle) * this.cameraDistance * Math.cos(this.cameraPitch);
    const z = Math.cos(this.rotationAngle) * this.cameraDistance * Math.cos(this.cameraPitch);
    const y = Math.sin(this.cameraPitch) * this.cameraDistance + 0.8;

    this.camera.position.set(x, y, z);
    this.camera.lookAt(0, 0.6, 0);
  }

  public update(dt: number): void {
    if (!this.root.visible) return;

    if (this.isAutoRotating) {
      this.rotationAngle += 0.4 * dt;
      this.updateCamera();
    }
  }

  public setAspect(aspect: number): void {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }
}
