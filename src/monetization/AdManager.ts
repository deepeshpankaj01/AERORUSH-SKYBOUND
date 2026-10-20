// AERORUSH: SKYBOUND - Monetization & HTML5 Games Ads Adapter
// Provider-agnostic adapter supporting Google AdSense H5 Games Ads, frequency capping, and rewarded ad verification.

export interface AdManagerConfig {
  clientId?: string;
  interstitialCooldownMs?: number; // Minimum ms between interstitials
  interstitialRunFrequency?: number; // Show at most once every N completed runs
  isDevMode?: boolean;
}

export type AdType = 'interstitial' | 'rewarded';

export class AdManager {
  private clientId: string;
  private cooldownMs: number;
  private runFrequency: number;
  private isDevMode: boolean;

  private lastAdTimestamp: number = 0;
  private completedRunsCount: number = 0;
  private isAdShowing: boolean = false;
  private isInitialized: boolean = false;

  constructor(config?: AdManagerConfig) {
    const rawId = config?.clientId ?? (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_ADSENSE_CLIENT_ID : '');
    this.clientId = (rawId || '').trim();
    this.cooldownMs = config?.interstitialCooldownMs ?? 180000; // 3 minutes
    this.runFrequency = config?.interstitialRunFrequency ?? 3;  // 1 ad per 3 completed runs
    this.isDevMode = config?.isDevMode ?? (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.DEV === true : false);

    this.initAdSense();
  }

  /**
   * Validate that the publisher ID matches the official Google AdSense pattern: ca-pub-XXXXXXXXXXXXXXXX
   */
  public static isValidPublisherId(id: string): boolean {
    return /^ca-pub-\d+$/i.test(id.trim());
  }

  public isReady(): boolean {
    return this.isInitialized;
  }

  private initAdSense(): void {
    if (typeof window === 'undefined') return;

    if (!this.clientId || !AdManager.isValidPublisherId(this.clientId)) {
      if (this.isDevMode) {
        console.log('[AdManager] Running in ad-free / offline mode (No valid VITE_ADSENSE_CLIENT_ID ca-pub-XXXX provided).');
      }
      return;
    }

    // Check if adsbygoogle script already loaded
    const existing = document.querySelector('script[src*="adsbygoogle.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(this.clientId)}`;
      script.crossOrigin = 'anonymous';
      script.onload = () => {
        this.isInitialized = true;
        if (this.isDevMode) console.log('[AdManager] AdSense H5 SDK initialized.');
      };
      script.onerror = () => {
        console.warn('[AdManager] Ad blocker active or offline. Ads safely disabled.');
      };
      document.head.appendChild(script);
    } else {
      this.isInitialized = true;
    }
  }

  /**
   * Called whenever a race run completes to advance frequency counter
   */
  public onRunCompleted(): void {
    this.completedRunsCount++;
  }

  /**
   * Check if interstitial is eligible based on frequency cap and cooldown
   */
  public canShowInterstitial(): boolean {
    if (this.isAdShowing) return false;
    if (this.completedRunsCount < this.runFrequency) return false;
    const now = Date.now();
    if (now - this.lastAdTimestamp < this.cooldownMs) return false;
    return true;
  }

  /**
   * Show Interstitial ad between runs
   */
  public showInterstitial(onDismissed: () => void): void {
    if (!this.canShowInterstitial()) {
      // Not eligible: proceed immediately without delay
      onDismissed();
      return;
    }

    this.isAdShowing = true;
    this.lastAdTimestamp = Date.now();
    this.completedRunsCount = 0;

    let dismissedHandled = false;
    const handleDismiss = () => {
      if (dismissedHandled) return;
      dismissedHandled = true;
      this.isAdShowing = false;
      onDismissed();
    };

    if (!this.isInitialized) {
      // Offline, adblocked, or no valid publisher ID: finish immediately
      handleDismiss();
      return;
    }

    const w = window as any;
    if (w.adBreak) {
      try {
        w.adBreak({
          type: 'next',
          name: 'race_complete_interstitial',
          beforeAd: () => {
            if (this.isDevMode) console.log('[AdManager] Interstitial starting.');
          },
          afterAd: () => {
            handleDismiss();
          },
          adBreakDone: () => {
            handleDismiss();
          },
        });
      } catch {
        handleDismiss();
      }
    } else {
      // Fallback
      if (this.isDevMode) console.log('[AdManager] Mock interstitial in dev.');
      setTimeout(() => {
        handleDismiss();
      }, 500);
    }
  }

  /**
   * Show Rewarded Ad with strict validation callback.
   * - In production builds, simulated rewards are strictly disabled.
   * - Callbacks (reward verified vs failed/skipped) are guaranteed to fire at most once.
   * - Credits are granted only after confirmed full view by the provider.
   */
  public showRewardedAd(
    onRewardVerified: (credits: number) => void,
    onAdFailedOrSkipped: (reason: string) => void
  ): void {
    if (this.isAdShowing) {
      onAdFailedOrSkipped('An ad transmission is already in progress.');
      return;
    }

    // Check offline or missing provider
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      onAdFailedOrSkipped('Device is offline. Ad rewards require network connectivity.');
      return;
    }

    this.isAdShowing = true;
    const rewardAmount = 500;
    let rewardGranted = false;
    let outcomeHandled = false;

    const dispatchReward = () => {
      if (outcomeHandled) return;
      outcomeHandled = true;
      this.isAdShowing = false;
      onRewardVerified(rewardAmount);
    };

    const dispatchFailure = (reason: string) => {
      if (outcomeHandled) return;
      outcomeHandled = true;
      this.isAdShowing = false;
      onAdFailedOrSkipped(reason);
    };

    const w = window as any;
    if (w.adBreak && this.isInitialized) {
      try {
        w.adBreak({
          type: 'reward',
          name: 'sponsor_aero_credits',
          beforeAd: () => {
            if (this.isDevMode) console.log('[AdManager] Rewarded ad transmission started.');
          },
          afterAd: () => {
            if (rewardGranted) {
              dispatchReward();
            } else {
              dispatchFailure('Transmission closed before reward completion.');
            }
          },
          beforeReward: (showAdFn: () => void) => {
            showAdFn();
          },
          adDismissed: () => {
            dispatchFailure('Transmission skipped.');
          },
          adViewed: () => {
            // Explicit view completion verified by ad network provider
            rewardGranted = true;
          },
          adBreakDone: () => {
            if (rewardGranted) {
              dispatchReward();
            } else {
              dispatchFailure('Transmission ended without verified view.');
            }
          },
        });
      } catch (err) {
        dispatchFailure('Ad provider runtime error.');
      }
    } else {
      // In production builds: strictly disable simulation.
      if (this.isDevMode) {
        console.warn('[AdManager] DEV ONLY SIMULATION: Simulating rewarded transmission for local testing. This is completely disabled in production.');
        setTimeout(() => {
          dispatchReward();
        }, 1500);
      } else {
        dispatchFailure('Sponsor network unavailable at this time.');
      }
    }
  }
}
