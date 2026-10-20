// AERORUSH: SKYBOUND - Progression, Upgrades, Economy & Local Save System
import { GAME_CONFIG } from '../config/GameConfig';

export interface VehicleUpgrades {
  engine: number;    // Level 1-5 (Top Speed & Acceleration)
  handling: number;  // Level 1-5 (Drift stability & steering grip)
  thrusters: number; // Level 1-5 (Vertical lift force & climb speed)
  kers: number;      // Level 1-5 (Recharge rate & tank capacity)
}

export interface VehicleCosmetics {
  paint: string;
  wheels: string;
  underglow: string;
  thruster: string;
}

export interface PlayerSaveData {
  version: string;
  credits: number;
  upgrades: VehicleUpgrades;
  cosmetics: VehicleCosmetics;
  unlockedPaints: string[];
  unlockedWheels: string[];
  unlockedUnderglows: string[];
  unlockedThrusters: string[];
  completedMissions: Record<string, { medal: 'bronze' | 'silver' | 'gold'; highScore: number }>;
  unlockedAchievements: string[];
  careerProgress: number; // Highest unlocked mission index
  settings: {
    quality: 'low' | 'medium' | 'high';
    masterVolume: number;
    musicVolume: number;
    sfxVolume: number;
    reducedMotion: boolean;
    vibration: boolean;
    touchLayout: 'standard' | 'compact';
  };
}

export interface CosmeticItemDef {
  id: string;
  name: string;
  cost: number;
  desc: string;
  colorHex?: number;
}

export const PAINT_CATALOG: CosmeticItemDef[] = [
  { id: 'titanium', name: 'Titanium Graphite', cost: 0, desc: 'Factory matte graphite composite.', colorHex: 0x12161f },
  { id: 'silver', name: 'Pearl Silver', cost: 800, desc: 'Multi-coat metallic platinum pearl.', colorHex: 0xd8e2ec },
  { id: 'crimson', name: 'Crimson Red', cost: 1200, desc: 'High-gloss racing crimson finish.', colorHex: 0xcc1128 },
  { id: 'electric', name: 'Electric Blue', cost: 1500, desc: 'Hyper-saturated metallic electric cyan.', colorHex: 0x00c4ff },
  { id: 'white', name: 'Pearl White', cost: 2000, desc: 'Ultra-pure iridescent pearl enamel.', colorHex: 0xf5f8fc },
  { id: 'solar', name: 'Solar Blaze', cost: 1200, desc: 'Blazing metallic copper-orange.', colorHex: 0xff5500 },
  { id: 'violet', name: 'Neon Violet', cost: 1600, desc: 'Deep ultraviolet nebula sheen.', colorHex: 0xa820ff },
  { id: 'stealth', name: 'Stealth Emerald', cost: 2200, desc: 'Military stealth metallic emerald.', colorHex: 0x00e676 },
];

export const WHEEL_CATALOG: CosmeticItemDef[] = [
  { id: 'aero', name: 'Aero Blade GT', cost: 0, desc: 'Low-drag aerodynamic disc alloys.' },
  { id: 'spoke', name: 'Cyber Spoke R', cost: 1000, desc: 'Lightweight forged carbon multi-spoke.' },
  { id: 'turbine', name: 'Turbine Vortex', cost: 1800, desc: 'Active directional cooling fins.' },
];

export const UNDERGLOW_CATALOG: CosmeticItemDef[] = [
  { id: 'cyan', name: 'Pulse Cyan', cost: 0, desc: 'Signature electric cyan neon.', colorHex: 0x00f0ff },
  { id: 'orange', name: 'Solar Flame', cost: 600, desc: 'High-intensity amber glow.', colorHex: 0xff6600 },
  { id: 'magenta', name: 'Neon Magenta', cost: 800, desc: 'Cyberpunk ultraviolet neon.', colorHex: 0xff0088 },
  { id: 'emerald', name: 'Bio Emerald', cost: 1000, desc: 'Vibrant green neon flood.', colorHex: 0x00ff66 },
  { id: 'ice', name: 'Arctic Ice', cost: 1200, desc: 'Pure cryogenic blue-white glow.', colorHex: 0x88e0ff },
];

export const THRUSTER_CATALOG: CosmeticItemDef[] = [
  { id: 'cyan', name: 'Hyper Cyan', cost: 0, desc: 'Classic electric propulsion flame.', colorHex: 0x00f0ff },
  { id: 'solar', name: 'Solar Core', cost: 700, desc: 'Thermal rocket orange exhaust.', colorHex: 0xff5500 },
  { id: 'violet', name: 'Plasma Violet', cost: 900, desc: 'Sub-atomic ion violet plume.', colorHex: 0xaa22ff },
  { id: 'emerald', name: 'Antimatter Green', cost: 1100, desc: 'High-energy exotic particle flame.', colorHex: 0x00ff77 },
];

export const UPGRADE_PRICES = [0, 500, 1200, 2400, 4500]; // Cost to upgrade to Level 2, 3, 4, 5

const SAVE_KEY = 'aerorush_save_v2';
const CURRENT_VERSION = '2.0.0';

export class ProgressionManager {
  private data: PlayerSaveData;
  private onDataChangedCallbacks: Array<(data: PlayerSaveData) => void> = [];

  constructor() {
    this.data = this.loadOrDefault();
  }

  private getDefaultData(): PlayerSaveData {
    return {
      version: CURRENT_VERSION,
      credits: 1200, // Generous starting balance to enjoy immediate tuning
      upgrades: {
        engine: 1,
        handling: 1,
        thrusters: 1,
        kers: 1,
      },
      cosmetics: {
        paint: 'titanium',
        wheels: 'aero',
        underglow: 'cyan',
        thruster: 'cyan',
      },
      unlockedPaints: ['titanium', 'silver'],
      unlockedWheels: ['aero'],
      unlockedUnderglows: ['cyan'],
      unlockedThrusters: ['cyan'],
      completedMissions: {},
      unlockedAchievements: [],
      careerProgress: 0,
      settings: {
        quality: 'medium',
        masterVolume: 0.8,
        musicVolume: 0.6,
        sfxVolume: 0.9,
        reducedMotion: false,
        vibration: true,
        touchLayout: 'standard',
      },
    };
  }

  private loadOrDefault(): PlayerSaveData {
    try {
      if (typeof localStorage !== 'undefined') {
        const raw = localStorage.getItem(SAVE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && typeof parsed.credits === 'number') {
            return this.validateAndMigrate(parsed);
          }
        }
      }
    } catch (e) {
      console.warn('Could not read save data from storage, using defaults:', e);
    }
    return this.getDefaultData();
  }

  private validateAndMigrate(loaded: Partial<PlayerSaveData>): PlayerSaveData {
    const def = this.getDefaultData();
    return {
      version: CURRENT_VERSION,
      credits: Math.max(0, loaded.credits ?? def.credits),
      upgrades: {
        engine: Math.min(5, Math.max(1, loaded.upgrades?.engine ?? 1)),
        handling: Math.min(5, Math.max(1, loaded.upgrades?.handling ?? 1)),
        thrusters: Math.min(5, Math.max(1, loaded.upgrades?.thrusters ?? 1)),
        kers: Math.min(5, Math.max(1, loaded.upgrades?.kers ?? 1)),
      },
      cosmetics: {
        paint: loaded.cosmetics?.paint || 'titanium',
        wheels: loaded.cosmetics?.wheels || 'aero',
        underglow: loaded.cosmetics?.underglow || 'cyan',
        thruster: loaded.cosmetics?.thruster || 'cyan',
      },
      unlockedPaints: loaded.unlockedPaints || def.unlockedPaints,
      unlockedWheels: loaded.unlockedWheels || def.unlockedWheels,
      unlockedUnderglows: loaded.unlockedUnderglows || def.unlockedUnderglows,
      unlockedThrusters: loaded.unlockedThrusters || def.unlockedThrusters,
      completedMissions: loaded.completedMissions || {},
      unlockedAchievements: loaded.unlockedAchievements || [],
      careerProgress: loaded.careerProgress ?? 0,
      settings: {
        quality: loaded.settings?.quality || 'medium',
        masterVolume: loaded.settings?.masterVolume ?? 0.8,
        musicVolume: loaded.settings?.musicVolume ?? 0.6,
        sfxVolume: loaded.settings?.sfxVolume ?? 0.9,
        reducedMotion: !!loaded.settings?.reducedMotion,
        vibration: loaded.settings?.vibration !== false,
        touchLayout: loaded.settings?.touchLayout || 'standard',
      },
    };
  }

  public save(): void {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(SAVE_KEY, JSON.stringify(this.data));
      }
    } catch (e) {
      console.warn('Failed to save progression data to localStorage:', e);
    }
    this.notify();
  }

  public getData(): Readonly<PlayerSaveData> {
    return this.data;
  }

  public addCredits(amount: number): number {
    this.data.credits += Math.max(0, Math.floor(amount));
    this.save();
    return this.data.credits;
  }

  public canAfford(cost: number): boolean {
    return this.data.credits >= cost;
  }

  public spendCredits(amount: number): boolean {
    if (this.canAfford(amount)) {
      this.data.credits -= amount;
      this.save();
      return true;
    }
    return false;
  }

  public upgradeComponent(type: keyof VehicleUpgrades): { success: boolean; message: string } {
    const currentLvl = this.data.upgrades[type];
    if (currentLvl >= 5) {
      return { success: false, message: 'Component already at maximum level 5!' };
    }
    const cost = UPGRADE_PRICES[currentLvl];
    if (!this.spendCredits(cost)) {
      return { success: false, message: `Insufficient AeroCredits. Requires ${cost.toLocaleString()} AC.` };
    }
    this.data.upgrades[type] = currentLvl + 1;
    this.save();
    return { success: true, message: `Upgraded to Level ${currentLvl + 1}!` };
  }

  public getUpgradeCost(type: keyof VehicleUpgrades): number | null {
    const current = this.data.upgrades[type];
    return current < 5 ? UPGRADE_PRICES[current] : null;
  }

  public buyCosmetic(
    category: 'paint' | 'wheels' | 'underglow' | 'thruster',
    item: CosmeticItemDef
  ): { success: boolean; message: string } {
    const listKey = category === 'paint' ? 'unlockedPaints'
      : category === 'wheels' ? 'unlockedWheels'
      : category === 'underglow' ? 'unlockedUnderglows'
      : 'unlockedThrusters';

    const list = this.data[listKey];
    if (list.includes(item.id)) {
      this.data.cosmetics[category] = item.id;
      this.save();
      return { success: true, message: `${item.name} equipped!` };
    }

    if (!this.spendCredits(item.cost)) {
      return { success: false, message: `Insufficient AeroCredits. Requires ${item.cost.toLocaleString()} AC.` };
    }

    list.push(item.id);
    this.data.cosmetics[category] = item.id;
    this.save();
    return { success: true, message: `Purchased and equipped ${item.name}!` };
  }

  public equipCosmetic(category: 'paint' | 'wheels' | 'underglow' | 'thruster', id: string): boolean {
    const listKey = category === 'paint' ? 'unlockedPaints'
      : category === 'wheels' ? 'unlockedWheels'
      : category === 'underglow' ? 'unlockedUnderglows'
      : 'unlockedThrusters';

    if (this.data[listKey].includes(id)) {
      this.data.cosmetics[category] = id;
      this.save();
      return true;
    }
    return false;
  }

  public recordMissionComplete(missionId: string, medal: 'bronze' | 'silver' | 'gold', score: number): void {
    const existing = this.data.completedMissions[missionId];
    const medalOrder = { bronze: 1, silver: 2, gold: 3 };

    if (!existing || medalOrder[medal] > medalOrder[existing.medal] || score > existing.highScore) {
      this.data.completedMissions[missionId] = {
        medal: existing && medalOrder[existing.medal] > medalOrder[medal] ? existing.medal : medal,
        highScore: Math.max(score, existing?.highScore || 0),
      };
      this.save();
    }
  }

  public unlockAchievement(id: string): boolean {
    if (!this.data.unlockedAchievements.includes(id)) {
      this.data.unlockedAchievements.push(id);
      this.save();
      return true;
    }
    return false;
  }

  public advanceCareerProgress(nextIndex: number): void {
    if (nextIndex > this.data.careerProgress) {
      this.data.careerProgress = nextIndex;
      this.save();
    }
  }

  public updateSettings(partial: Partial<PlayerSaveData['settings']>): void {
    this.data.settings = { ...this.data.settings, ...partial };
    this.save();
  }

  public resetLocalData(): void {
    this.data = this.getDefaultData();
    this.save();
  }

  public onDataChanged(cb: (data: PlayerSaveData) => void): () => void {
    this.onDataChangedCallbacks.push(cb);
    return () => {
      this.onDataChangedCallbacks = this.onDataChangedCallbacks.filter(c => c !== cb);
    };
  }

  private notify(): void {
    for (let i = 0; i < this.onDataChangedCallbacks.length; i++) {
      try {
        this.onDataChangedCallbacks[i](this.data);
      } catch (err) {
        console.error('Error in progression callback:', err);
      }
    }
  }

  public getAppliedHandlingModifiers(): {
    topSpeed: number;
    acceleration: number;
    steerSpeed: number;
    driftGrip: number;
    thrusterLift: number;
    rechargeRate: number;
    maxEnergy: number;
  } {
    const u = this.data.upgrades;
    const base = GAME_CONFIG.vehicle;
    const nrg = GAME_CONFIG.energy;
    const flt = GAME_CONFIG.flight;

    return {
      topSpeed: base.baseTopSpeed + (u.engine - 1) * 3.5, // 82 to 96 m/s (~345 km/h)
      acceleration: base.acceleration + (u.engine - 1) * 4.0,
      steerSpeed: base.steerSpeed + (u.handling - 1) * 0.25,
      driftGrip: base.driftLateralFriction - (u.handling - 1) * 0.005, // More controlled drift
      thrusterLift: flt.thrusterLiftAccel + (u.thrusters - 1) * 5.0,
      rechargeRate: nrg.passiveRechargeRate + (u.kers - 1) * 2.5,
      maxEnergy: nrg.max + (u.kers - 1) * 10, // 100 to 140 energy
    };
  }
}
