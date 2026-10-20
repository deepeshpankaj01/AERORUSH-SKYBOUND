// AERORUSH: SKYBOUND - Refined Procedural Hypercar "VANTA XR" 3D Model
import * as THREE from 'three';

export interface LiveryPalette {
  bodyColor: number;
  accentColor: number;
  emissiveColor: number;
  roughness: number;
  metalness: number;
}

export const LIVERIES: Record<string, LiveryPalette> = {
  titanium: {
    bodyColor: 0x121720,
    accentColor: 0x00f0ff,
    emissiveColor: 0x00d0ee,
    roughness: 0.22,
    metalness: 0.8,
  },
  cyan: {
    bodyColor: 0x0a0e14,
    accentColor: 0x00f0ff,
    emissiveColor: 0x00f0ff,
    roughness: 0.22,
    metalness: 0.75,
  },
  silver: {
    bodyColor: 0xdce4ec,
    accentColor: 0x00f0ff,
    emissiveColor: 0x00d8ff,
    roughness: 0.15,
    metalness: 0.9,
  },
  crimson: {
    bodyColor: 0xa80d22,
    accentColor: 0xff3355,
    emissiveColor: 0xff1133,
    roughness: 0.2,
    metalness: 0.7,
  },
  electric: {
    bodyColor: 0x0066cc,
    accentColor: 0x00f0ff,
    emissiveColor: 0x00f0ff,
    roughness: 0.18,
    metalness: 0.85,
  },
  white: {
    bodyColor: 0xf4f7fb,
    accentColor: 0x00f0ff,
    emissiveColor: 0x00e6ff,
    roughness: 0.16,
    metalness: 0.75,
  },
  solar: {
    bodyColor: 0x180b05,
    accentColor: 0xff5500,
    emissiveColor: 0xff4400,
    roughness: 0.25,
    metalness: 0.7,
  },
  violet: {
    bodyColor: 0x14061a,
    accentColor: 0xb026ff,
    emissiveColor: 0x9900ff,
    roughness: 0.2,
    metalness: 0.8,
  },
  stealth: {
    bodyColor: 0x061208,
    accentColor: 0x00ff88,
    emissiveColor: 0x00ff66,
    roughness: 0.3,
    metalness: 0.85,
  },
};

export class CarModel {
  public root: THREE.Group;
  public chassisGroup: THREE.Group;

  // Wheel meshes for rotation & steering
  public wheelFL: THREE.Group;
  public wheelFR: THREE.Group;
  public wheelRL: THREE.Group;
  public wheelRR: THREE.Group;
  private wheels: THREE.Mesh[] = [];
  private rims: THREE.Mesh[] = [];

  // Thrusters & Lights
  private thrusterCoreLeft: THREE.Mesh | null = null;
  private thrusterCoreRight: THREE.Mesh | null = null;
  private underglowMesh: THREE.Mesh | null = null;
  private bodyMaterials: THREE.MeshStandardMaterial[] = [];
  private accentMaterials: THREE.MeshStandardMaterial[] = [];
  private customThrusterColor: number = 0x00f0ff;

  constructor() {
    this.root = new THREE.Group();
    this.chassisGroup = new THREE.Group();
    this.root.add(this.chassisGroup);

    this.wheelFL = new THREE.Group();
    this.wheelFR = new THREE.Group();
    this.wheelRL = new THREE.Group();
    this.wheelRR = new THREE.Group();

    this.buildVantaXR();
  }

  private buildVantaXR(): void {
    // Primary Materials
    const bodyMat = new THREE.MeshStandardMaterial({
      color: LIVERIES.titanium.bodyColor,
      roughness: LIVERIES.titanium.roughness,
      metalness: LIVERIES.titanium.metalness,
    });
    this.bodyMaterials.push(bodyMat);

    const accentMat = new THREE.MeshStandardMaterial({
      color: LIVERIES.titanium.accentColor,
      emissive: LIVERIES.titanium.emissiveColor,
      emissiveIntensity: 1.2,
      roughness: 0.3,
      metalness: 0.5,
    });
    this.accentMaterials.push(accentMat);

    const carbonMat = new THREE.MeshStandardMaterial({
      color: 0x11141a,
      roughness: 0.5,
      metalness: 0.3,
    });

    const glassMat = new THREE.MeshStandardMaterial({
      color: 0x081522,
      roughness: 0.08,
      metalness: 0.95,
      transparent: true,
      opacity: 0.85,
    });

    const lightCyanMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 2.8,
      roughness: 0.1,
    });
    this.accentMaterials.push(lightCyanMat);

    const tailLightMat = new THREE.MeshStandardMaterial({
      color: 0xff0033,
      emissive: 0xff0033,
      emissiveIntensity: 2.5,
      roughness: 0.1,
    });

    // 1. Lower Monocoque / Under-Tray
    const trayGeo = new THREE.BoxGeometry(2.0, 0.16, 4.6);
    const trayMesh = new THREE.Mesh(trayGeo, carbonMat);
    trayMesh.position.set(0, 0.15, 0);
    trayMesh.castShadow = true;
    trayMesh.receiveShadow = true;
    this.chassisGroup.add(trayMesh);

    // 2. Main Body Shell (Sculpted low-slung hypercar profile)
    const mainHullGeo = new THREE.BoxGeometry(1.86, 0.42, 3.4);
    const mainHullMesh = new THREE.Mesh(mainHullGeo, bodyMat);
    mainHullMesh.position.set(0, 0.4, 0.1);
    mainHullMesh.castShadow = true;
    this.chassisGroup.add(mainHullMesh);

    // 3. Aerodynamic Nose & Hood (sloping down aggressively forward)
    const noseGeo = new THREE.CylinderGeometry(0.5, 0.93, 1.4, 4);
    noseGeo.rotateY(Math.PI / 4);
    const noseMesh = new THREE.Mesh(noseGeo, bodyMat);
    noseMesh.rotation.x = Math.PI / 2;
    noseMesh.position.set(0, 0.35, -2.1);
    noseMesh.scale.set(1.9, 1.0, 0.45);
    noseMesh.castShadow = true;
    this.chassisGroup.add(noseMesh);

    // Front Aerodynamic Splitter
    const splitterGeo = new THREE.BoxGeometry(2.08, 0.06, 0.8);
    const splitterMesh = new THREE.Mesh(splitterGeo, carbonMat);
    splitterMesh.position.set(0, 0.1, -2.25);
    splitterMesh.castShadow = true;
    this.chassisGroup.add(splitterMesh);

    // Front Splitter Winglets (Canards)
    const canardL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.22, 0.4), carbonMat);
    canardL.position.set(-1.03, 0.2, -2.2);
    const canardR = canardL.clone();
    canardR.position.x = 1.03;
    this.chassisGroup.add(canardL, canardR);

    // 4. Cockpit Canopy (Jet-fighter inspired teardrop aerodynamic glass)
    const canopyGeo = new THREE.SphereGeometry(0.72, 16, 12);
    canopyGeo.scale(1.15, 0.58, 1.9);
    const canopyMesh = new THREE.Mesh(canopyGeo, glassMat);
    canopyMesh.position.set(0, 0.68, -0.15);
    canopyMesh.castShadow = true;
    this.chassisGroup.add(canopyMesh);

    // Roof Air Scoop / Sensor Blade
    const roofScoopGeo = new THREE.BoxGeometry(0.22, 0.14, 1.2);
    const roofScoop = new THREE.Mesh(roofScoopGeo, carbonMat);
    roofScoop.position.set(0, 0.98, -0.1);
    roofScoop.castShadow = true;
    this.chassisGroup.add(roofScoop);

    // 5. Sculpted Wheel Arches & Fenders
    const fenderGeo = new THREE.BoxGeometry(0.3, 0.35, 1.0);
    // Front Left Fender
    const fenderFL = new THREE.Mesh(fenderGeo, bodyMat);
    fenderFL.position.set(-0.95, 0.45, -1.4);
    fenderFL.castShadow = true;
    // Front Right Fender
    const fenderFR = fenderFL.clone();
    fenderFR.position.x = 0.95;
    // Rear Left Fender (wider hip muscle)
    const fenderRL = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.42, 1.2), bodyMat);
    fenderRL.position.set(-0.98, 0.48, 1.3);
    fenderRL.castShadow = true;
    // Rear Right Fender
    const fenderRR = fenderRL.clone();
    fenderRR.position.x = 0.98;

    this.chassisGroup.add(fenderFL, fenderFR, fenderRL, fenderRR);

    // 6. Side Air Pods / Radiator Ducts
    const sidePodGeo = new THREE.BoxGeometry(0.24, 0.3, 1.5);
    const sidePodL = new THREE.Mesh(sidePodGeo, bodyMat);
    sidePodL.position.set(-0.96, 0.38, -0.05);
    const sidePodR = sidePodL.clone();
    sidePodR.position.x = 0.96;
    this.chassisGroup.add(sidePodL, sidePodR);

    // Cyber Accent Racing Lines (glowing side strakes)
    const strakeGeo = new THREE.BoxGeometry(0.04, 0.05, 1.8);
    const strakeL = new THREE.Mesh(strakeGeo, accentMat);
    strakeL.position.set(-1.08, 0.36, -0.05);
    const strakeR = strakeL.clone();
    strakeR.position.x = 1.08;
    this.chassisGroup.add(strakeL, strakeR);

    // 7. Cyberpunk Angular Headlights
    const headlightGeo = new THREE.BoxGeometry(0.35, 0.06, 0.15);
    const headL = new THREE.Mesh(headlightGeo, lightCyanMat);
    headL.position.set(-0.68, 0.38, -2.35);
    headL.rotation.y = -0.25;
    const headR = new THREE.Mesh(headlightGeo, lightCyanMat);
    headR.position.set(0.68, 0.38, -2.35);
    headR.rotation.y = 0.25;
    this.chassisGroup.add(headL, headR);

    // Front Emblem Light
    const emblem = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.04), lightCyanMat);
    emblem.position.set(0, 0.42, -2.48);
    this.chassisGroup.add(emblem);

    // 8. Rear Diffuser & Tail Section
    const diffuserGeo = new THREE.BoxGeometry(1.9, 0.2, 0.8);
    const diffuser = new THREE.Mesh(diffuserGeo, carbonMat);
    diffuser.position.set(0, 0.2, 2.1);
    diffuser.rotation.x = 0.18;
    diffuser.castShadow = true;
    this.chassisGroup.add(diffuser);

    // Diffuser Fins
    for (let i = -3; i <= 3; i++) {
      const fin = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.24, 0.6), carbonMat);
      fin.position.set(i * 0.26, 0.18, 2.15);
      this.chassisGroup.add(fin);
    }

    // Active Aero Rear Wing
    const wingGeo = new THREE.BoxGeometry(2.1, 0.06, 0.45);
    const wing = new THREE.Mesh(wingGeo, carbonMat);
    wing.position.set(0, 0.82, 2.05);
    wing.rotation.x = -0.08;
    wing.castShadow = true;
    this.chassisGroup.add(wing);

    // Wing Struts (Carbon pedestals)
    const strutL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.32, 0.2), carbonMat);
    strutL.position.set(-0.55, 0.65, 1.95);
    const strutR = strutL.clone();
    strutR.position.x = 0.55;
    this.chassisGroup.add(strutL, strutR);

    // Rear Cyber Lightbar (Continuous high-mount LED blade)
    const tailBarGeo = new THREE.BoxGeometry(1.7, 0.05, 0.06);
    const tailBar = new THREE.Mesh(tailBarGeo, tailLightMat);
    tailBar.position.set(0, 0.58, 2.16);
    this.chassisGroup.add(tailBar);

    // 9. Twin Aerospace Thruster Assemblies
    const thrusterBellGeo = new THREE.CylinderGeometry(0.18, 0.25, 0.5, 14, 1, true);
    thrusterBellGeo.rotateX(Math.PI / 2);

    const thrusterBellMat = new THREE.MeshStandardMaterial({
      color: 0x1a202c,
      metalness: 0.9,
      roughness: 0.25,
      side: THREE.DoubleSide,
    });

    const bellLeft = new THREE.Mesh(thrusterBellGeo, thrusterBellMat);
    bellLeft.position.set(-0.35, 0.38, 2.15);
    const bellRight = new THREE.Mesh(thrusterBellGeo, thrusterBellMat);
    bellRight.position.set(0.35, 0.38, 2.15);
    this.chassisGroup.add(bellLeft, bellRight);

    // Thruster Glowing Core (ignites when boosting/flying)
    const coreGeo = new THREE.CircleGeometry(0.16, 12);
    coreGeo.rotateY(Math.PI);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });

    this.thrusterCoreLeft = new THREE.Mesh(coreGeo, coreMat.clone());
    this.thrusterCoreLeft.position.set(-0.35, 0.38, 2.3);
    this.thrusterCoreRight = new THREE.Mesh(coreGeo, coreMat.clone());
    this.thrusterCoreRight.position.set(0.35, 0.38, 2.3);
    this.chassisGroup.add(this.thrusterCoreLeft, this.thrusterCoreRight);

    // 10. Underbody Neon Illumination Plane
    const underglowGeo = new THREE.PlaneGeometry(1.6, 3.8);
    const underglowMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.25,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.underglowMesh = new THREE.Mesh(underglowGeo, underglowMat);
    this.underglowMesh.rotation.x = Math.PI / 2;
    this.underglowMesh.position.set(0, 0.04, 0);
    this.chassisGroup.add(this.underglowMesh);

    // 11. Build 4 Detailed Wheels
    this.wheelFL = this.createWheelGroup(-0.98, 0.32, -1.4);
    this.wheelFR = this.createWheelGroup(0.98, 0.32, -1.4);
    this.wheelRL = this.createWheelGroup(-1.0, 0.34, 1.35);
    this.wheelRR = this.createWheelGroup(1.0, 0.34, 1.35);

    this.root.add(this.wheelFL, this.wheelFR, this.wheelRL, this.wheelRR);
  }

  private createWheelGroup(x: number, y: number, z: number): THREE.Group {
    const group = new THREE.Group();
    group.position.set(x, y, z);

    // Wheel pivot mesh for spinning
    const spinMesh = new THREE.Group();

    // Tire
    const tireGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.28, 18);
    tireGeo.rotateZ(Math.PI / 2);
    const tireMat = new THREE.MeshStandardMaterial({
      color: 0x121418,
      roughness: 0.85,
      metalness: 0.1,
    });
    const tire = new THREE.Mesh(tireGeo, tireMat);
    tire.castShadow = true;
    spinMesh.add(tire);

    // Alloy Rim
    const rimGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.29, 12);
    rimGeo.rotateZ(Math.PI / 2);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0x8a9ba8,
      roughness: 0.2,
      metalness: 0.9,
    });
    const rim = new THREE.Mesh(rimGeo, rimMat);
    spinMesh.add(rim);
    this.rims.push(rim);

    // Glowing Rim Accent Ring
    const ringGeo = new THREE.RingGeometry(0.18, 0.21, 14);
    ringGeo.rotateY(Math.PI / 2);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.x = x > 0 ? 0.15 : -0.15;
    spinMesh.add(ring);

    // Store mesh reference for rolling
    this.wheels.push(tire);

    group.add(spinMesh);
    return group;
  }

  public updateVisuals(
    speed: number,
    steerAngle: number,
    isBoosting: boolean,
    isAirborne: boolean,
    dt: number
  ): void {
    // 1. Wheel steering (front wheels pivot)
    this.wheelFL.rotation.y = steerAngle;
    this.wheelFR.rotation.y = steerAngle;

    // 2. Wheel rolling rotation based on distance travelled
    const wheelRadius = 0.35;
    const rollDelta = (speed * dt) / wheelRadius;

    // Spin child mesh of each wheel
    [this.wheelFL, this.wheelFR, this.wheelRL, this.wheelRR].forEach(wg => {
      const spin = wg.children[0];
      if (spin) {
        spin.rotation.x += rollDelta;
      }
    });

    // 3. Thruster core glow modulation
    const boostActive = isBoosting || (isAirborne && speed > 20);
    const targetCoreOpacity = boostActive ? 1.0 : 0.25;
    const targetCoreColor = isBoosting ? 0xff5500 : this.customThrusterColor;

    if (this.thrusterCoreLeft && this.thrusterCoreRight) {
      const matL = this.thrusterCoreLeft.material as THREE.MeshBasicMaterial;
      const matR = this.thrusterCoreRight.material as THREE.MeshBasicMaterial;
      matL.opacity = THREE.MathUtils.lerp(matL.opacity, targetCoreOpacity, 0.2);
      matR.opacity = THREE.MathUtils.lerp(matR.opacity, targetCoreOpacity, 0.2);
      matL.color.setHex(targetCoreColor);
      matR.color.setHex(targetCoreColor);
    }

    // 4. Subtle chassis suspension roll when steering/drifting
    const targetRoll = -steerAngle * 0.18;
    this.chassisGroup.rotation.z = THREE.MathUtils.lerp(this.chassisGroup.rotation.z, targetRoll, 0.15);
  }

  public setLivery(liveryName: string): void {
    const palette = LIVERIES[liveryName] || LIVERIES.titanium;
    this.bodyMaterials.forEach(m => {
      m.color.setHex(palette.bodyColor);
      m.roughness = palette.roughness;
      m.metalness = palette.metalness;
    });
    this.accentMaterials.forEach(m => {
      m.color.setHex(palette.accentColor);
      m.emissive.setHex(palette.emissiveColor);
    });
    if (this.underglowMesh) {
      (this.underglowMesh.material as THREE.MeshBasicMaterial).color.setHex(palette.accentColor);
    }
  }

  public setPaint(paintId: string): void {
    this.setLivery(paintId);
  }

  public setUnderglowColor(colorHex: number): void {
    if (this.underglowMesh) {
      (this.underglowMesh.material as THREE.MeshBasicMaterial).color.setHex(colorHex);
    }
  }

  public setThrusterColor(colorHex: number): void {
    this.customThrusterColor = colorHex;
  }

  public setWheelStyle(style: string): void {
    const color = style === 'turbine' ? 0xb0c4de : style === 'spoke' ? 0xd0d8e0 : 0x8a9ba8;
    const metalness = style === 'turbine' ? 0.95 : 0.85;
    this.rims.forEach(rim => {
      (rim.material as THREE.MeshStandardMaterial).color.setHex(color);
      (rim.material as THREE.MeshStandardMaterial).metalness = metalness;
    });
  }

  public getThrusterPositionLeft(target: THREE.Vector3): void {
    if (this.thrusterCoreLeft) {
      this.thrusterCoreLeft.getWorldPosition(target);
    } else {
      this.root.getWorldPosition(target);
      target.add(new THREE.Vector3(-0.35, 0.4, 2.3));
    }
  }

  public getThrusterPositionRight(target: THREE.Vector3): void {
    if (this.thrusterCoreRight) {
      this.thrusterCoreRight.getWorldPosition(target);
    } else {
      this.root.getWorldPosition(target);
      target.add(new THREE.Vector3(0.35, 0.4, 2.3));
    }
  }
}
