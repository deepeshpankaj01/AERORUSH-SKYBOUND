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
    this.clientId = config?.clientId || import.meta.env.VITE_ADSENSE_CLIENT_ID || '';
    this.cooldownMs = config?.interstitialCooldownMs ?? 180000; // 3 minutes
    this.runFrequency = config?.interstitialRunFrequency ?? 3;  // 1 ad per 3 completed runs
    this.isDevMode = config?.isDevMode ?? import.meta.env.DEV;

    this.initAdSense();
  }

  private initAdSense(): void {
    if (typeof window === 'undefined') return;

    if (!this.clientId) {
      if (this.isDevMode) {
        console.log('[AdManager] Running in ad-free / offline mode (No VITE_ADSENSE_CLIENT_ID provided).');
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

    if (!this.isInitialized) {
      // Dev mode or offline/adblocked: finish immediately
      this.isAdShowing = false;
      onDismissed();
      return;
    }

    const w = window as any;
    if (w.adBreak) {
      w.adBreak({
        type: 'next',
        name: 'race_complete_interstitial',
        beforeAd: () => {
          if (this.isDevMode) console.log('[AdManager] Interstitial starting.');
        },
        afterAd: () => {
          this.isAdShowing = false;
          onDismissed();
        },
        adBreakDone: () => {
          this.isAdShowing = false;
          onDismissed();
        },
      });
    } else {
      // Mock / fallback
      if (this.isDevMode) console.log('[AdManager] Mock interstitial displayed.');
      setTimeout(() => {
        this.isAdShowing = false;
        onDismissed();
      }, 500);
    }
  }

  /**
   * Show Rewarded Ad with strict validation callback
   * NEVER grants reward if skipped, failed, blocked, or closed prematurely
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

    const w = window as any;
    if (w.adBreak && this.isInitialized) {
      w.adBreak({
        type: 'reward',
        name: 'sponsor_aero_credits',
        beforeAd: () => {
          if (this.isDevMode) console.log('[AdManager] Rewarded ad started.');
        },
        afterAd: () => {
          this.isAdShowing = false;
          if (rewardGranted) {
            onRewardVerified(rewardAmount);
          } else {
            onAdFailedOrSkipped('Transmission closed before reward completion.');
          }
        },
        beforeReward: (showAdFn: () => void) => {
          showAdFn();
        },
        adDismissed: () => {
          this.isAdShowing = false;
          onAdFailedOrSkipped('Transmission skipped.');
        },
        adViewed: () => {
          // Explicit view completion verified by ad network
          rewardGranted = true;
        },
        adBreakDone: () => {
          this.isAdShowing = false;
        },
      });
    } else {
      // Simulated dev / preview mode for local testing
      if (this.isDevMode) {
        console.log('[AdManager] Dev mode: Simulating 2-second rewarded transmission.');
        setTimeout(() => {
          this.isAdShowing = false;
          onRewardVerified(rewardAmount);
        }, 1500);
      } else {
        this.isAdShowing = false;
        onAdFailedOrSkipped('Sponsor network unavailable at this time.');
      }
    }
  }
}
