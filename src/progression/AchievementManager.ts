// AERORUSH: SKYBOUND - Offline Achievements System & Reward Triggers
import { ProgressionManager } from './ProgressionManager';

export interface AchievementDef {
  id: string;
  title: string;
  desc: string;
  icon: string;
  rewardAC: number;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: 'first_spark',
    title: 'First Spark',
    desc: 'Launch your first run in AERORUSH: SKYBOUND.',
    icon: '⚡',
    rewardAC: 200,
  },
  {
    id: 'mach_break',
    title: 'Mach Break',
    desc: 'Reach a top speed exceeding 350 km/h.',
    icon: '🚀',
    rewardAC: 400,
  },
  {
    id: 'aero_acrobat',
    title: 'Aero Acrobat',
    desc: 'Execute a full 360° Barrel Roll while airborne.',
    icon: '🌪️',
    rewardAC: 500,
  },
  {
    id: 'somersault',
    title: 'Somersault',
    desc: 'Execute a complete Aerial Flip.',
    icon: '🔄',
    rewardAC: 500,
  },
  {
    id: 'smooth_operator',
    title: 'Smooth Operator',
    desc: 'Perform 3 Clean Landings in a single run.',
    icon: '✨',
    rewardAC: 600,
  },
  {
    id: 'drift_prodigy',
    title: 'Drift Prodigy',
    desc: 'Sustain a continuous drift slide for over 3 seconds.',
    icon: '💨',
    rewardAC: 400,
  },
  {
    id: 'skyway_commuter',
    title: 'Skyway Commuter',
    desc: 'Travel over 5,000 meters in a single race session.',
    icon: '🛣️',
    rewardAC: 800,
  },
  {
    id: 'overdrive',
    title: 'Overdrive',
    desc: 'Collect 10 Energy Cells in one run.',
    icon: '🔋',
    rewardAC: 500,
  },
  {
    id: 'ring_master',
    title: 'Ring Master',
    desc: 'Soar through 5 Stunt Gates.',
    icon: '🎯',
    rewardAC: 700,
  },
  {
    id: 'tuned_perfection',
    title: 'Tuned to Perfection',
    desc: 'Fully upgrade any vehicle component to Level 5.',
    icon: '🔧',
    rewardAC: 1000,
  },
  {
    id: 'stylist',
    title: 'Hypercar Stylist',
    desc: 'Unlock and equip a custom paint or wheel style.',
    icon: '🎨',
    rewardAC: 300,
  },
  {
    id: 'apex_champion',
    title: 'Apex Champion',
    desc: 'Achieve Gold medals across all Career missions.',
    icon: '👑',
    rewardAC: 2500,
  },
];

export class AchievementManager {
  private progression: ProgressionManager;
  public onAchievementUnlocked: ((ach: AchievementDef) => void) | null = null;

  constructor(progression: ProgressionManager) {
    this.progression = progression;
  }

  public checkAchievement(id: string): void {
    const ach = ACHIEVEMENTS.find(a => a.id === id);
    if (!ach) return;

    const data = this.progression.getData();
    if (!data.unlockedAchievements.includes(id)) {
      this.progression.unlockAchievement(id);
      this.progression.addCredits(ach.rewardAC);

      if (this.onAchievementUnlocked) {
        this.onAchievementUnlocked(ach);
      }
    }
  }

  public isUnlocked(id: string): boolean {
    return this.progression.getData().unlockedAchievements.includes(id);
  }

  public getAll(): { def: AchievementDef; unlocked: boolean }[] {
    const unlocked = this.progression.getData().unlockedAchievements;
    return ACHIEVEMENTS.map(a => ({
      def: a,
      unlocked: unlocked.includes(a.id),
    }));
  }
}
