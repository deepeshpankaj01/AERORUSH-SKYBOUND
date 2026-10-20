// AERORUSH: SKYBOUND - Web Audio API Procedural Synthesizer & Audio Engine

export class SoundManager {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private musicGain: GainNode | null = null;

  // Engine synth nodes
  private engineOsc1: OscillatorNode | null = null;
  private engineOsc2: OscillatorNode | null = null;
  private engineFilter: BiquadFilterNode | null = null;
  private engineGain: GainNode | null = null;

  // Boost noise / thruster synth
  private boostNoiseNode: AudioBufferSourceNode | null = null;
  private boostGain: GainNode | null = null;
  private boostFilter: BiquadFilterNode | null = null;

  // Drift skid synth
  private driftNoiseNode: AudioBufferSourceNode | null = null;
  private driftGain: GainNode | null = null;
  private driftFilter: BiquadFilterNode | null = null;

  // Noise buffers cache
  private noiseBuffer: AudioBuffer | null = null;

  // Music synth interval
  private musicInterval: number | null = null;
  private isMusicPlaying: boolean = false;
  private musicStep: number = 0;

  private isMuted: boolean = false;
  private masterVol: number = 0.8;
  private sfxEnabled: boolean = true;
  private isInitialized: boolean = false;

  constructor() {
    // Will initialize on first user interaction
  }

  public init(): void {
    if (this.isInitialized) return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();

      // Master output
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.masterVol, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      // SFX bus
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
      this.sfxGain.connect(this.masterGain);

      // Music bus
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.setValueAtTime(0.28, this.ctx.currentTime);
      this.musicGain.connect(this.masterGain);

      this.createNoiseBuffer();
      this.setupEngineSynth();
      this.setupBoostSynth();
      this.setupDriftSynth();

      this.isInitialized = true;
    } catch (err) {
      console.warn('Web Audio API not supported or blocked:', err);
    }
  }

  public resumeContext(): void {
    if (!this.ctx) {
      this.init();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private createNoiseBuffer(): void {
    if (!this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 2; // 2 seconds looping buffer
    this.noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }
  }

  private setupEngineSynth(): void {
    if (!this.ctx || !this.sfxGain) return;

    this.engineOsc1 = this.ctx.createOscillator();
    this.engineOsc2 = this.ctx.createOscillator();
    this.engineFilter = this.ctx.createBiquadFilter();
    this.engineGain = this.ctx.createGain();

    this.engineOsc1.type = 'sawtooth';
    this.engineOsc2.type = 'triangle';

    this.engineOsc1.frequency.setValueAtTime(45, this.ctx.currentTime);
    this.engineOsc2.frequency.setValueAtTime(90, this.ctx.currentTime);

    this.engineFilter.type = 'lowpass';
    this.engineFilter.frequency.setValueAtTime(250, this.ctx.currentTime);
    this.engineFilter.Q.setValueAtTime(2.5, this.ctx.currentTime);

    this.engineGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.engineOsc1.connect(this.engineFilter);
    this.engineOsc2.connect(this.engineFilter);
    this.engineFilter.connect(this.engineGain);
    this.engineGain.connect(this.sfxGain);

    this.engineOsc1.start();
    this.engineOsc2.start();
  }

  private setupBoostSynth(): void {
    if (!this.ctx || !this.noiseBuffer || !this.sfxGain) return;

    this.boostNoiseNode = this.ctx.createBufferSource();
    this.boostNoiseNode.buffer = this.noiseBuffer;
    this.boostNoiseNode.loop = true;

    this.boostFilter = this.ctx.createBiquadFilter();
    this.boostFilter.type = 'bandpass';
    this.boostFilter.frequency.setValueAtTime(320, this.ctx.currentTime);
    this.boostFilter.Q.setValueAtTime(1.8, this.ctx.currentTime);

    this.boostGain = this.ctx.createGain();
    this.boostGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.boostNoiseNode.connect(this.boostFilter);
    this.boostFilter.connect(this.boostGain);
    this.boostGain.connect(this.sfxGain);

    this.boostNoiseNode.start();
  }

  private setupDriftSynth(): void {
    if (!this.ctx || !this.noiseBuffer || !this.sfxGain) return;

    this.driftNoiseNode = this.ctx.createBufferSource();
    this.driftNoiseNode.buffer = this.noiseBuffer;
    this.driftNoiseNode.loop = true;

    this.driftFilter = this.ctx.createBiquadFilter();
    this.driftFilter.type = 'bandpass';
    this.driftFilter.frequency.setValueAtTime(1400, this.ctx.currentTime);
    this.driftFilter.Q.setValueAtTime(3.5, this.ctx.currentTime);

    this.driftGain = this.ctx.createGain();
    this.driftGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.driftNoiseNode.connect(this.driftFilter);
    this.driftFilter.connect(this.driftGain);
    this.driftGain.connect(this.sfxGain);

    this.driftNoiseNode.start();
  }

  public updateEngine(speedNormalized: number, isAccelerating: boolean, isBoosting: boolean, isDrifting: boolean): void {
    if (!this.ctx || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;

    // Engine Pitch & Volume
    if (this.engineOsc1 && this.engineOsc2 && this.engineFilter && this.engineGain) {
      const targetFreq1 = 45 + speedNormalized * 220 + (isAccelerating ? 25 : 0) + (isBoosting ? 60 : 0);
      const targetFreq2 = targetFreq1 * 2.02; // Slight detune for electric turbine growl
      const targetCutoff = 200 + speedNormalized * 1800;
      const targetGain = 0.08 + speedNormalized * 0.22;

      this.engineOsc1.frequency.setTargetAtTime(targetFreq1, t, 0.08);
      this.engineOsc2.frequency.setTargetAtTime(targetFreq2, t, 0.08);
      this.engineFilter.frequency.setTargetAtTime(targetCutoff, t, 0.08);
      this.engineGain.gain.setTargetAtTime(targetGain, t, 0.05);
    }

    // Boost Thruster Sound
    if (this.boostGain && this.boostFilter) {
      const targetBoostGain = isBoosting ? 0.35 : 0;
      const targetBoostCutoff = isBoosting ? 580 : 320;
      this.boostGain.gain.setTargetAtTime(targetBoostGain, t, 0.06);
      this.boostFilter.frequency.setTargetAtTime(targetBoostCutoff, t, 0.06);
    }

    // Drift Screech Sound
    if (this.driftGain) {
      const targetDriftGain = isDrifting && speedNormalized > 0.2 ? 0.22 : 0;
      this.driftGain.gain.setTargetAtTime(targetDriftGain, t, 0.08);
    }
  }

  public playPickup(): void {
    if (!this.ctx || !this.sfxGain || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;

    // Dual ascending resonant sine blip
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, t); // D5
    osc1.frequency.exponentialRampToValueAtTime(1174.66, t + 0.14); // D6
    osc2.frequency.setValueAtTime(880, t); // A5
    osc2.frequency.exponentialRampToValueAtTime(1760, t + 0.14); // A6

    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 0.25);
    osc2.stop(t + 0.25);
  }

  public playStuntSuccess(): void {
    if (!this.ctx || !this.sfxGain || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;

    // Futuristic 3-chord fanfare
    const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    freqs.forEach((freq, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t + idx * 0.06);

      gain.gain.setValueAtTime(0, t);
      gain.gain.setValueAtTime(0.2, t + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.06 + 0.35);

      osc.connect(gain);
      gain.connect(this.sfxGain);

      osc.start(t + idx * 0.06);
      osc.stop(t + idx * 0.06 + 0.36);
    });
  }

  public playRampLaunch(): void {
    if (!this.ctx || !this.sfxGain || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, t);
    osc.frequency.exponentialRampToValueAtTime(440, t + 0.28);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(200, t);
    filter.frequency.exponentialRampToValueAtTime(1800, t + 0.28);

    gain.gain.setValueAtTime(0.3, t);
    gain.gain.exponentialRampToValueAtTime(0.01, t + 0.35);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.36);
  }

  public playCleanLanding(): void {
    if (!this.ctx || !this.sfxGain || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;

    // Low punch kick
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, t);
    osc.frequency.exponentialRampToValueAtTime(35, t + 0.18);

    gain.gain.setValueAtTime(0.4, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.25);
  }

  public playCrash(): void {
    if (!this.ctx || !this.sfxGain || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;

    if (this.noiseBuffer) {
      const noise = this.ctx.createBufferSource();
      noise.buffer = this.noiseBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, t);
      filter.frequency.exponentialRampToValueAtTime(100, t + 0.45);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.6, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.5);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.sfxGain);

      noise.start(t);
      noise.stop(t + 0.5);
    }
  }

  public playGatePass(): void {
    if (!this.ctx || !this.sfxGain || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, t);
    osc.frequency.setValueAtTime(1320, t + 0.08);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.25);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(t);
    osc.stop(t + 0.25);
  }

  public startCyberMusic(): void {
    if (this.isMusicPlaying) return;
    this.isMusicPlaying = true;

    // Cyber bass synthesizer sequence (F minor cyberpunk groove)
    const notes = [
      87.31, 87.31, 0, 87.31,
      103.83, 87.31, 0, 116.54,
      87.31, 87.31, 0, 77.78,
      87.31, 0, 130.81, 103.83
    ]; // F2, G#2, A#2, D#2, C3

    const stepDuration = 140; // ms per 16th note (~107 BPM)
    this.musicStep = 0;

    this.musicInterval = window.setInterval(() => {
      if (!this.ctx || !this.musicGain || !this.sfxEnabled) return;
      const freq = notes[this.musicStep % notes.length];
      this.musicStep++;

      if (freq > 0) {
        const t = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, t);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(500, t);
        filter.frequency.exponentialRampToValueAtTime(150, t + 0.12);
        filter.Q.setValueAtTime(3, t);

        gain.gain.setValueAtTime(0.12, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.13);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.musicGain);

        osc.start(t);
        osc.stop(t + 0.14);
      }
    }, stepDuration);
  }

  public stopCyberMusic(): void {
    if (this.musicInterval !== null) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
    this.isMusicPlaying = false;
  }

  public playNearMiss(): void {
    if (!this.ctx || !this.sfxGain || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(150, t + 0.18);
    gain.gain.setValueAtTime(0.25, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(t);
    osc.stop(t + 0.22);
  }

  public playMissionComplete(): void {
    if (!this.ctx || !this.sfxGain || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;
    const freqs = [392.0, 523.25, 659.25, 783.99, 1046.5]; // G4, C5, E5, G5, C6
    freqs.forEach((f, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, t + idx * 0.08);
      gain.gain.setValueAtTime(0, t);
      gain.gain.setValueAtTime(0.25, t + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.08 + 0.5);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t + idx * 0.08);
      osc.stop(t + idx * 0.08 + 0.52);
    });
  }

  public playAchievement(): void {
    if (!this.ctx || !this.sfxGain || !this.sfxEnabled) return;
    const t = this.ctx.currentTime;
    const notes = [587.33, 739.99, 880.0, 1174.66]; // D5, F#5, A5, D6
    notes.forEach((f, idx) => {
      if (!this.ctx || !this.sfxGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, t + idx * 0.07);
      gain.gain.setValueAtTime(0.2, t + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, t + idx * 0.07 + 0.4);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t + idx * 0.07);
      osc.stop(t + idx * 0.07 + 0.42);
    });
  }

  public setMasterVolume(val: number): void {
    this.masterVol = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.masterVol, this.ctx.currentTime, 0.05);
    }
  }

  public setMusicVolume(val: number): void {
    const vol = Math.max(0, Math.min(1, val)) * 0.35;
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.setTargetAtTime(vol, this.ctx.currentTime, 0.05);
    }
  }

  public setSfxVolume(val: number): void {
    const vol = Math.max(0, Math.min(1, val));
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.setTargetAtTime(vol, this.ctx.currentTime, 0.05);
    }
  }

  public setSfxEnabled(enabled: boolean): void {
    this.sfxEnabled = enabled;
  }

  public mute(muted: boolean): void {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.isMuted ? 0 : this.masterVol, this.ctx.currentTime, 0.05);
    }
  }

  public cleanup(): void {
    this.stopCyberMusic();
    if (this.ctx) {
      this.ctx.close();
      this.ctx = null;
    }
    this.isInitialized = false;
  }
}
