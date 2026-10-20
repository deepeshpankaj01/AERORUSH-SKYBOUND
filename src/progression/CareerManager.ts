// AERORUSH: SKYBOUND - Career Campaign, Missions, Character Briefings & Medal System

export interface MissionObjective {
  type: 'score' | 'distance' | 'stunts' | 'cleanLandings' | 'gates' | 'driftTime' | 'maxSpeed' | 'zeroCrash';
  target: number;
  label: string;
}

export interface CharacterBriefing {
  character: 'Mira' | 'Eon Vale';
  role: string;
  avatar: string; // Fictional stylized avatar descriptor
  message: string;
  postReactionSuccess: string;
  postReactionFail: string;
}

export interface CareerMission {
  id: string;
  title: string;
  subtitle: string;
  environmentId: 'neon_dusk' | 'canyon_express' | 'monsoon_highway' | 'orbital_skyway';
  stageLength: number; // meters
  briefing: CharacterBriefing;
  objectives: MissionObjective[];
  medalThresholds: {
    bronzeScore: number;
    silverScore: number;
    goldScore: number;
  };
  rewards: {
    bronzeAC: number;
    silverAC: number;
    goldAC: number;
  };
}

export const CAREER_MISSIONS: CareerMission[] = [
  {
    id: 'm1_ignition',
    title: 'Mission 01: Systems Ignition',
    subtitle: 'Calibrate the VANTA XR telemetry on the Neon Dusk expressway.',
    environmentId: 'neon_dusk',
    stageLength: 1200,
    briefing: {
      character: 'Mira',
      role: 'Chief Aerodynamics Engineer',
      avatar: 'mira',
      message: "Pilot, welcome to the cockpit. The VANTA XR dual turbines are primed. Accelerate smoothly, maintain lane control, and reach the 1,000-meter marker.",
      postReactionSuccess: "Telemetry verified! Motor curves and steering response are rock solid. Ready for the canyon run.",
      postReactionFail: "Watch your line on the track barriers. Keep the throttle engaged and try again.",
    },
    objectives: [
      { type: 'distance', target: 1000, label: 'Reach 1,000m' },
      { type: 'maxSpeed', target: 180, label: 'Hit 180 km/h' },
    ],
    medalThresholds: {
      bronzeScore: 1800,
      silverScore: 3200,
      goldScore: 5000,
    },
    rewards: {
      bronzeAC: 400,
      silverAC: 700,
      goldAC: 1200,
    },
  },

  {
    id: 'm2_canyon_thrust',
    title: 'Mission 02: Canyon Velocity',
    subtitle: 'Harness high-altitude desert thermals and test hyper-boost.',
    environmentId: 'canyon_express',
    stageLength: 1800,
    briefing: {
      character: 'Eon Vale',
      role: 'Skybound League Founder',
      avatar: 'eon',
      message: "The Canyon Expressway has long straights and thin air. Hold [SPACE] to boost, collect energy cells, and show me what this machine can really do.",
      postReactionSuccess: "Spectacular velocity! The press is going to love these numbers. You've earned your race wings.",
      postReactionFail: "You ran out of boost before the straight ended. Collect those blue energy cells!",
    },
    objectives: [
      { type: 'distance', target: 1500, label: 'Reach 1,500m' },
      { type: 'score', target: 4500, label: 'Earn 4,500 pts' },
    ],
    medalThresholds: {
      bronzeScore: 4500,
      silverScore: 7000,
      goldScore: 10000,
    },
    rewards: {
      bronzeAC: 500,
      silverAC: 900,
      goldAC: 1500,
    },
  },

  {
    id: 'm3_monsoon_drift',
    title: 'Mission 03: Storm Slider',
    subtitle: 'Master friction management on a rain-drenched monsoon highway.',
    environmentId: 'monsoon_highway',
    stageLength: 2000,
    briefing: {
      character: 'Mira',
      role: 'Chief Aerodynamics Engineer',
      avatar: 'mira',
      message: "Heavy rain cuts tire traction by 25%. Tap [SHIFT] to enter high-speed drifts around corners. Chain your drift points to keep the combo multiplier alive.",
      postReactionSuccess: "Incredible drift balance! You carved through that water spray like an arrow.",
      postReactionFail: "The wet asphalt bit back. Counter-steer earlier when initiating drift slides.",
    },
    objectives: [
      { type: 'driftTime', target: 4.0, label: 'Drift for 4.0s total' },
      { type: 'distance', target: 1600, label: 'Reach 1,600m' },
    ],
    medalThresholds: {
      bronzeScore: 6000,
      silverScore: 9500,
      goldScore: 14000,
    },
    rewards: {
      bronzeAC: 600,
      silverAC: 1100,
      goldAC: 1800,
    },
  },

  {
    id: 'm4_canyon_jumper',
    title: 'Mission 04: Canyon Jumper',
    subtitle: 'Launch off highway ramps and execute flawless clean landings.',
    environmentId: 'canyon_express',
    stageLength: 2400,
    briefing: {
      character: 'Eon Vale',
      role: 'Skybound League Founder',
      avatar: 'eon',
      message: "Ramps ahead! Hit them at full speed to launch into the sky. Keep your car level before touching down for the Clean Landing bonus.",
      postReactionSuccess: "Butter-smooth touchdown! That suspension telemetry is pure art.",
      postReactionFail: "Rough touchdown! Align your pitch and roll before the wheels hit the tarmac.",
    },
    objectives: [
      { type: 'stunts', target: 1, label: 'Complete 1 Ramp Launch' },
      { type: 'cleanLandings', target: 1, label: 'Perform 1 Clean Landing' },
      { type: 'distance', target: 2000, label: 'Reach 2,000m' },
    ],
    medalThresholds: {
      bronzeScore: 8000,
      silverScore: 12500,
      goldScore: 18000,
    },
    rewards: {
      bronzeAC: 700,
      silverAC: 1300,
      goldAC: 2000,
    },
  },

  {
    id: 'm5_monsoon_acrobat',
    title: 'Mission 05: Aerial Acrobat',
    subtitle: 'Perform 360° Barrel Rolls and fly through mid-air stunt rings.',
    environmentId: 'monsoon_highway',
    stageLength: 2600,
    briefing: {
      character: 'Mira',
      role: 'Chief Aerodynamics Engineer',
      avatar: 'mira',
      message: "Once airborne, press [Q] or [E] (or tap Roll) to execute a full 360° barrel roll. Hit [F] for vertical thruster lift to sail right through the stunt gates!",
      postReactionSuccess: "Flawless roll execution! You made an 1,800-horsepower hypercar dance in mid-air.",
      postReactionFail: "Don't hesitate on the thrusters. Use [F] in the air to gain altitude for the stunt rings.",
    },
    objectives: [
      { type: 'stunts', target: 2, label: 'Complete 2 Barrel Rolls' },
      { type: 'gates', target: 2, label: 'Clear 2 Stunt Gates' },
    ],
    medalThresholds: {
      bronzeScore: 10000,
      silverScore: 16000,
      goldScore: 23000,
    },
    rewards: {
      bronzeAC: 800,
      silverAC: 1500,
      goldAC: 2400,
    },
  },

  {
    id: 'm6_orbital_apex',
    title: 'Mission 06: Orbital Apex Championship',
    subtitle: 'The ultimate test on the low-gravity Orbital Skyway.',
    environmentId: 'orbital_skyway',
    stageLength: 3200,
    briefing: {
      character: 'Eon Vale',
      role: 'Skybound League Founder',
      avatar: 'eon',
      message: "This is it, pilot. The Orbital Skyway. 3,000 meters above the stratosphere. Zero room for error. Score 15,000+ points and claim the championship trophy!",
      postReactionSuccess: "LEGENDARY RUN! You've mastered the skies and the highway. You are the Apex Champion of AERORUSH: SKYBOUND!",
      postReactionFail: "The void was unforgiving. Upgrade your thrusters and handling in the Garage, then reclaim the track.",
    },
    objectives: [
      { type: 'distance', target: 3000, label: 'Cover 3,000m' },
      { type: 'score', target: 15000, label: 'Score 15,000 pts' },
      { type: 'zeroCrash', target: 0, label: 'Zero Overload Crashes' },
    ],
    medalThresholds: {
      bronzeScore: 15000,
      silverScore: 22000,
      goldScore: 30000,
    },
    rewards: {
      bronzeAC: 1200,
      silverAC: 2200,
      goldAC: 3500,
    },
  },
];

export interface MissionResult {
  mission: CareerMission;
  passed: boolean;
  medal: 'bronze' | 'silver' | 'gold' | null;
  score: number;
  creditsEarned: number;
  objectivesStatus: { label: string; completed: boolean }[];
  feedbackMessage: string;
}

export class CareerManager {
  private activeMission: CareerMission | null = null;

  public startMission(missionId: string): CareerMission | null {
    const mission = CAREER_MISSIONS.find(m => m.id === missionId);
    this.activeMission = mission || null;
    return this.activeMission;
  }

  public getActiveMission(): CareerMission | null {
    return this.activeMission;
  }

  public clearActiveMission(): void {
    this.activeMission = null;
  }

  public evaluateMission(stats: {
    score: number;
    distanceM: number;
    stuntsCount: number;
    cleanLandings: number;
    gatesCleared: number;
    driftSeconds: number;
    maxSpeedKmH: number;
    crashesCount: number;
  }): MissionResult | null {
    if (!this.activeMission) return null;
    const m = this.activeMission;

    // Check all objectives
    const objectivesStatus = m.objectives.map(obj => {
      let completed = false;
      switch (obj.type) {
        case 'distance':
          completed = stats.distanceM >= obj.target;
          break;
        case 'score':
          completed = stats.score >= obj.target;
          break;
        case 'stunts':
          completed = stats.stuntsCount >= obj.target;
          break;
        case 'cleanLandings':
          completed = stats.cleanLandings >= obj.target;
          break;
        case 'gates':
          completed = stats.gatesCleared >= obj.target;
          break;
        case 'driftTime':
          completed = stats.driftSeconds >= obj.target;
          break;
        case 'maxSpeed':
          completed = stats.maxSpeedKmH >= obj.target;
          break;
        case 'zeroCrash':
          completed = stats.crashesCount === 0;
          break;
      }
      return { label: obj.label, completed };
    });

    const allObjectivesMet = objectivesStatus.every(o => o.completed);

    let medal: 'bronze' | 'silver' | 'gold' | null = null;
    let creditsEarned = 0;

    if (allObjectivesMet || stats.score >= m.medalThresholds.bronzeScore) {
      if (stats.score >= m.medalThresholds.goldScore && allObjectivesMet) {
        medal = 'gold';
        creditsEarned = m.rewards.goldAC;
      } else if (stats.score >= m.medalThresholds.silverScore) {
        medal = 'silver';
        creditsEarned = m.rewards.silverAC;
      } else {
        medal = 'bronze';
        creditsEarned = m.rewards.bronzeAC;
      }
    }

    const passed = medal !== null;
    const feedbackMessage = passed
      ? m.briefing.postReactionSuccess
      : m.briefing.postReactionFail;

    return {
      mission: m,
      passed,
      medal,
      score: stats.score,
      creditsEarned,
      objectivesStatus,
      feedbackMessage,
    };
  }
}
