// AERORUSH: SKYBOUND - Unified Input Management Layer (Keyboard + Touch)

export interface InputState {
  steerLeft: boolean;
  steerRight: boolean;
  accelerate: boolean;
  brake: boolean;
  boost: boolean;
  drift: boolean;
  thruster: boolean;
  rollLeft: boolean;
  rollRight: boolean;
  pausePressed: boolean;
}

export class InputManager {
  private state: InputState = {
    steerLeft: false,
    steerRight: false,
    accelerate: false,
    brake: false,
    boost: false,
    drift: false,
    thruster: false,
    rollLeft: false,
    rollRight: false,
    pausePressed: false,
  };

  private isTouchMode: boolean = false;
  private pauseCallbacks: Array<() => void> = [];
  private boundKeyDown: (e: KeyboardEvent) => void;
  private boundKeyUp: (e: KeyboardEvent) => void;
  private boundBlur: () => void;

  constructor() {
    this.boundKeyDown = this.handleKeyDown.bind(this);
    this.boundKeyUp = this.handleKeyUp.bind(this);
    this.boundBlur = this.handleBlur.bind(this);

    window.addEventListener('keydown', this.boundKeyDown, { passive: false });
    window.addEventListener('keyup', this.boundKeyUp, { passive: false });
    window.addEventListener('blur', this.boundBlur);

    this.setupTouchListeners();
  }

  public getState(): Readonly<InputState> {
    const acc = this.isTouchMode && !this.state.brake ? true : this.state.accelerate;
    return {
      ...this.state,
      accelerate: acc,
    };
  }

  public onPauseToggle(cb: () => void): () => void {
    this.pauseCallbacks.push(cb);
    return () => {
      this.pauseCallbacks = this.pauseCallbacks.filter(c => c !== cb);
    };
  }

  private handleKeyDown(e: KeyboardEvent): void {
    this.isTouchMode = false;
    // Prevent default scroll on arrow keys and space
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
      e.preventDefault();
    }

    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.state.accelerate = true;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.state.brake = true;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.state.steerLeft = true;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.state.steerRight = true;
        break;
      case 'Space':
        this.state.boost = true;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.state.drift = true;
        break;
      case 'KeyF':
        this.state.thruster = true;
        break;
      case 'KeyQ':
        this.state.rollLeft = true;
        break;
      case 'KeyE':
        this.state.rollRight = true;
        break;
      case 'Escape':
      case 'KeyP':
        if (!e.repeat) {
          this.triggerPause();
        }
        break;
    }
  }

  private handleKeyUp(e: KeyboardEvent): void {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.state.accelerate = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.state.brake = false;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.state.steerLeft = false;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.state.steerRight = false;
        break;
      case 'Space':
        this.state.boost = false;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.state.drift = false;
        break;
      case 'KeyF':
        this.state.thruster = false;
        break;
      case 'KeyQ':
        this.state.rollLeft = false;
        break;
      case 'KeyE':
        this.state.rollRight = false;
        break;
    }
  }

  private handleBlur(): void {
    // Reset all inputs when window loses focus to prevent sticking
    this.reset();
  }

  public reset(): void {
    this.state.steerLeft = false;
    this.state.steerRight = false;
    this.state.accelerate = false;
    this.state.brake = false;
    this.state.boost = false;
    this.state.drift = false;
    this.state.thruster = false;
    this.state.rollLeft = false;
    this.state.rollRight = false;
    this.state.pausePressed = false;
  }

  public triggerPause(): void {
    for (let i = 0; i < this.pauseCallbacks.length; i++) {
      this.pauseCallbacks[i]();
    }
  }

  private setupTouchListeners(): void {
    const attachPointerHandler = (elementId: string, onActive: (active: boolean) => void) => {
      const el = document.getElementById(elementId);
      if (!el) return;

      const setDown = (e: PointerEvent) => {
        e.preventDefault();
        this.isTouchMode = true;
        el.classList.add('active');
        onActive(true);
        if (el.setPointerCapture) {
          try { el.setPointerCapture(e.pointerId); } catch (_) {}
        }
      };

      const setUp = (e: PointerEvent) => {
        e.preventDefault();
        el.classList.remove('active');
        onActive(false);
        if (el.releasePointerCapture) {
          try { el.releasePointerCapture(e.pointerId); } catch (_) {}
        }
      };

      const setCancel = () => {
        el.classList.remove('active');
        onActive(false);
      };

      el.addEventListener('pointerdown', setDown);
      el.addEventListener('pointerup', setUp);
      el.addEventListener('pointercancel', setCancel);
      el.addEventListener('pointerleave', setCancel);
    };

    // Bind touch UI buttons
    attachPointerHandler('touch-steer-left', (active) => { this.state.steerLeft = active; });
    attachPointerHandler('touch-steer-right', (active) => { this.state.steerRight = active; });
    attachPointerHandler('touch-brake', (active) => { this.state.brake = active; });
    attachPointerHandler('touch-boost', (active) => { this.state.boost = active; });
    attachPointerHandler('touch-stunt', (active) => {
      this.state.rollRight = active;
      this.state.drift = active;
    });
    attachPointerHandler('touch-drift', (active) => { this.state.drift = active; });
    attachPointerHandler('touch-thrust', (active) => { this.state.thruster = active; });
    attachPointerHandler('touch-roll', (active) => {
      // Toggle roll right on touch tap
      this.state.rollRight = active;
    });
  }

  public dispose(): void {
    window.removeEventListener('keydown', this.boundKeyDown);
    window.removeEventListener('keyup', this.boundKeyUp);
    window.removeEventListener('blur', this.boundBlur);
  }
}
