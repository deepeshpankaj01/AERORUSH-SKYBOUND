// AERORUSH: SKYBOUND - State Machine & Event Dispatcher

export type GameStateType =
  | 'LOADING'
  | 'MENU'
  | 'PLAY_SELECT'
  | 'CAREER'
  | 'QUICK_RUN'
  | 'STUNT_SCHOOL'
  | 'MULTIPLAYER'
  | 'DUEL_SETUP'
  | 'DUEL_HANDOFF'
  | 'DUEL_RESULTS'
  | 'DAILY_CHALLENGE'
  | 'FRIEND_CHALLENGE'
  | 'GARAGE'
  | 'LEADERBOARD'
  | 'ACHIEVEMENTS'
  | 'SETTINGS'
  | 'HOW_TO_PLAY'
  | 'CREDITS'
  | 'PRIVACY'
  | 'COUNTDOWN'
  | 'PLAYING'
  | 'PAUSED'
  | 'CRASHED'
  | 'COMPLETED'
  | 'RESULTS';

export type StateChangeCallback = (newState: GameStateType, oldState: GameStateType) => void;

export class GameStateManager {
  private currentState: GameStateType = 'LOADING';
  private listeners: StateChangeCallback[] = [];

  public getState(): GameStateType {
    return this.currentState;
  }

  public is(state: GameStateType): boolean {
    return this.currentState === state;
  }

  public setState(nextState: GameStateType): void {
    if (this.currentState === nextState) return;
    const previous = this.currentState;
    this.currentState = nextState;

    for (let i = 0; i < this.listeners.length; i++) {
      try {
        this.listeners[i](nextState, previous);
      } catch (err) {
        console.error('Error in state change listener:', err);
      }
    }
  }

  public onStateChange(callback: StateChangeCallback): () => void {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }
}
