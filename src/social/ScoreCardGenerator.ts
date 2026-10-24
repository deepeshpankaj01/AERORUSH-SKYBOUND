// AERORUSH: SKYBOUND - Social Viral Score Card Exporter & Share API
// Renders high-resolution 1200x630 graphic scorecards with hypercar telemetry.

import { ScoreSummary } from '../scoring/ScoreManager';

export interface ScoreCardMeta {
  pilotName: string;
  environmentName: string;
  environmentId: string;
  seed: number;
}

export class ScoreCardGenerator {
  /**
   * Generates a high-res 1200x630 HTML5 Canvas containing the stylized race telemetry card
   */
  public static generateCanvas(summary: ScoreSummary, meta: ScoreCardMeta): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    if (!ctx) return canvas;

    // 1. Deep Space Cyberpunk Gradient Background
    const bgGrad = ctx.createLinearGradient(0, 0, 1200, 630);
    bgGrad.addColorStop(0, '#04070d');
    bgGrad.addColorStop(0.5, '#080e1a');
    bgGrad.addColorStop(1, '#020306');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1200, 630);

    // 2. Futuristic Grid & Speed Line Accents
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= 1200; x += 60) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 630);
      ctx.stroke();
    }
    for (let y = 0; y <= 630; y += 45) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1200, y);
      ctx.stroke();
    }

    // Diagonal glow streaks
    const streakGrad = ctx.createLinearGradient(0, 0, 1200, 300);
    streakGrad.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
    streakGrad.addColorStop(0.5, 'rgba(255, 0, 85, 0.15)');
    streakGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = streakGrad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(800, 0);
    ctx.lineTo(400, 630);
    ctx.lineTo(0, 630);
    ctx.closePath();
    ctx.fill();

    // 3. Glowing Outer Border & Corner Accents
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 3;
    ctx.strokeRect(30, 30, 1140, 570);

    ctx.fillStyle = '#00f0ff';
    // Corner notches
    ctx.fillRect(25, 25, 30, 6);
    ctx.fillRect(25, 25, 6, 30);
    ctx.fillRect(1145, 25, 30, 6);
    ctx.fillRect(1169, 25, 6, 30);
    ctx.fillRect(25, 599, 30, 6);
    ctx.fillRect(25, 575, 6, 30);
    ctx.fillRect(1145, 599, 30, 6);
    ctx.fillRect(1169, 575, 6, 30);

    // 4. Header: Game Title & Subtitle
    ctx.font = '900 38px "Rajdhani", "Segoe UI", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('AERORUSH: ', 70, 95);
    const titleWidth = ctx.measureText('AERORUSH: ').width;
    ctx.fillStyle = '#00f0ff';
    ctx.fillText('SKYBOUND', 70 + titleWidth, 95);

    ctx.font = '600 15px "Rajdhani", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.letterSpacing = '3px';
    ctx.fillText('EXPERIMENTAL 3D ELECTRIC HYPERCAR TELEMETRY', 70, 125);

    // Pilot & Environment Badge (Top Right)
    ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(820, 60, 310, 70, 8);
    ctx.fill();
    ctx.stroke();

    ctx.font = '700 13px sans-serif';
    ctx.fillStyle = '#00f0ff';
    ctx.fillText('CALLSIGN', 840, 85);
    ctx.font = '900 20px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(meta.pilotName.toUpperCase(), 840, 112);

    // 5. Stylized Hypercar Wireframe Graphic
    this.drawCarSilhouette(ctx, 800, 310);

    // 6. Final Score Section (Giant Glowing Metric)
    ctx.font = '700 18px sans-serif';
    ctx.fillStyle = '#00f0ff';
    ctx.fillText('FINAL FLIGHT SCORE', 70, 205);

    ctx.font = '900 84px "Rajdhani", sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 25;
    ctx.fillText(summary.finalScore.toLocaleString(), 70, 285);
    ctx.shadowBlur = 0; // reset shadow

    // 7. Stat Cards Grid (2x3 stats)
    const stats = [
      { label: 'DISTANCE TRAVELED', value: `${summary.distanceMeters.toLocaleString()} M`, icon: '📍' },
      { label: 'TOP VELOCITY', value: `${summary.maxSpeedKmH} KM/H`, icon: '⚡' },
      { label: 'STUNTS EXECUTED', value: `${summary.stuntsExecuted}`, icon: '🌀' },
      { label: 'CLEAN LANDINGS', value: `${summary.cleanLandings}`, icon: '🎯' },
      { label: 'ENERGY CELLS', value: `${summary.energyPickups}`, icon: '🔋' },
      { label: 'PEAK COMBO MULT', value: `${summary.maxCombo.toFixed(1)}x`, icon: '🔥' },
    ];

    const startX = 70;
    const startY = 325;
    const colWidth = 220;
    const rowHeight = 70;

    stats.forEach((st, i) => {
      const col = i % 3;
      const row = Math.floor(i / 3);
      const x = startX + col * (colWidth + 20);
      const y = startY + row * (rowHeight + 15);

      // Stat card background
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(x, y, colWidth, rowHeight, 6);
      ctx.fill();
      ctx.stroke();

      // Label
      ctx.font = '700 11px sans-serif';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
      ctx.fillText(`${st.icon} ${st.label}`, x + 15, y + 25);

      // Value
      ctx.font = '900 24px "Rajdhani", sans-serif';
      ctx.fillStyle = '#00f0ff';
      ctx.fillText(st.value, x + 15, y + 55);
    });

    // 8. Footer Bar: Environment & Seed on left, Credit & Date on right
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.beginPath();
    ctx.moveTo(70, 520);
    ctx.lineTo(1130, 520);
    ctx.stroke();

    // Environment info
    ctx.font = '700 13px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`ZONE: ${meta.environmentName.toUpperCase()}  •  TRACK SEED: #${meta.seed}`, 70, 555);

    ctx.font = '500 12px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fillText(`DATE: ${new Date().toLocaleDateString()}  •  VANTA XR v2.0`, 70, 578);

    // Branding watermark
    ctx.font = '800 15px "Rajdhani", sans-serif';
    ctx.fillStyle = '#00f0ff';
    ctx.textAlign = 'right';
    ctx.fillText('AERORUSH: SKYBOUND', 1130, 555);

    ctx.font = '500 12px sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
    ctx.fillText('OFFLINE PWA 3D HYPERCAR ENGINE', 1130, 578);
    ctx.textAlign = 'left';

    return canvas;
  }

  /**
   * Draw stylized aerodynamic hypercar wireframe on canvas
   */
  private static drawCarSilhouette(ctx: CanvasRenderingContext2D, cx: number, cy: number): void {
    ctx.save();
    ctx.translate(cx, cy);

    // Glowing hypercar underglow
    const glow = ctx.createRadialGradient(0, 40, 20, 0, 40, 160);
    glow.addColorStop(0, 'rgba(0, 240, 255, 0.45)');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(0, 40, 160, 0, Math.PI * 2);
    ctx.fill();

    // Car Body Contour
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    // Nose
    ctx.moveTo(170, 30);
    // Hood & windshield
    ctx.lineTo(90, 15);
    ctx.lineTo(20, -35);
    // Roof canopy
    ctx.lineTo(-60, -35);
    // Fastback rear & spoiler
    ctx.lineTo(-130, 5);
    ctx.lineTo(-160, -10);
    ctx.lineTo(-165, 25);
    // Rear diffuser
    ctx.lineTo(-145, 45);
    // Rear wheel arch
    ctx.lineTo(-115, 45);
    ctx.arc(-85, 45, 30, Math.PI, 0, false);
    // Rocker panel
    ctx.lineTo(65, 45);
    // Front wheel arch
    ctx.arc(95, 45, 30, Math.PI, 0, false);
    // Front splitter
    ctx.lineTo(165, 45);
    ctx.closePath();
    ctx.stroke();

    // Canopy glass
    ctx.fillStyle = 'rgba(0, 240, 255, 0.2)';
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(15, -30);
    ctx.lineTo(-55, -30);
    ctx.lineTo(-75, 10);
    ctx.lineTo(35, 10);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Wheels
    ctx.fillStyle = '#111822';
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 2;
    // Rear wheel
    ctx.beginPath();
    ctx.arc(-85, 45, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Front wheel
    ctx.beginPath();
    ctx.arc(95, 45, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Twin Thruster Plumes
    const thrusterGrad = ctx.createLinearGradient(-165, 15, -240, 15);
    thrusterGrad.addColorStop(0, '#00f0ff');
    thrusterGrad.addColorStop(0.5, '#ff0055');
    thrusterGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = thrusterGrad;
    ctx.beginPath();
    ctx.moveTo(-165, 10);
    ctx.lineTo(-240, 15);
    ctx.lineTo(-165, 20);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }

  /**
   * Download card as PNG
   */
  public static downloadCard(summary: ScoreSummary, meta: ScoreCardMeta): void {
    const canvas = this.generateCanvas(summary, meta);
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `AERORUSH_${meta.pilotName}_${summary.finalScore}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Share via Web Share API or copy text fallback
   */
  public static async shareScore(
    summary: ScoreSummary,
    meta: ScoreCardMeta,
    shareUrl: string,
    onSuccess: (msg: string) => void
  ): Promise<void> {
    const text = `🚀 I just scored ${summary.finalScore.toLocaleString()} pts in AERORUSH: SKYBOUND (${meta.environmentName})! Can you beat my telemetry?`;

    // Attempt navigator.share with generated image blob if supported
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        const canvas = this.generateCanvas(summary, meta);
        const blob = await new Promise<Blob | null>(res => canvas.toBlob(res, 'image/png'));
        if (blob && navigator.canShare && navigator.canShare({ files: [new File([blob], 'aerorush-score.png', { type: 'image/png' })] })) {
          const file = new File([blob], 'aerorush-score.png', { type: 'image/png' });
          await navigator.share({
            title: 'AERORUSH: SKYBOUND Telemetry',
            text,
            url: shareUrl,
            files: [file],
          });
          onSuccess('Flight record shared successfully!');
          return;
        } else {
          await navigator.share({
            title: 'AERORUSH: SKYBOUND Telemetry',
            text,
            url: shareUrl,
          });
          onSuccess('Flight record shared successfully!');
          return;
        }
      } catch (err: any) {
        if (err.name === 'AbortError') return; // User cancelled share
      }
    }

    // Fallback: Copy to clipboard
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`${text}\nPlay & beat my record: ${shareUrl}`);
        onSuccess('Telemetry & Challenge Link copied to clipboard!');
        return;
      } catch (_) {}
    }

    onSuccess(`Challenge Code: #${meta.seed} - ${summary.finalScore} PTS`);
  }
}
