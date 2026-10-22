import puppeteer from 'puppeteer-core';

async function checkLive() {
  console.log('--- TESTING LIVE CLOUDFLARE PAGES DEPLOYMENT ---');
  console.log('Target: https://aerorush-skybound.pages.dev/');

  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  // Retry loop in case Cloudflare Pages build is still in progress
  let attempts = 0;
  const maxAttempts = 12;
  let success = false;

  while (attempts < maxAttempts && !success) {
    attempts++;
    console.log(`[Attempt ${attempts}/${maxAttempts}] Loading live site...`);
    try {
      await page.goto('https://aerorush-skybound.pages.dev/', { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2000));

      const title = await page.title();
      const hasHeroPlay = await page.evaluate(() => !!document.getElementById('btn-main-play'));
      const levelText = await page.evaluate(() => document.getElementById('menu-level-text')?.textContent);

      console.log(`Live site title: "${title}", hero play button present: ${hasHeroPlay}, levelText: "${levelText}"`);

      if (hasHeroPlay && levelText && levelText.includes('LEVEL 1')) {
        console.log('✓ Latest production deployment is LIVE on Cloudflare Pages!');

        // Test Direct Play Flow
        console.log('Testing Live Direct Play flow: Clicking #btn-main-play...');
        await page.click('#btn-main-play');
        await new Promise(r => setTimeout(r, 400));

        // Verify NO dialog overlay
        const isDialogVisible = await page.evaluate(() => {
          const dialog = document.getElementById('dialog-overlay');
          return dialog && !dialog.classList.contains('hidden') && dialog.style.display !== 'none';
        });
        if (isDialogVisible) throw new Error('Briefing dialog overlay appeared on live site!');
        console.log('✓ Verified: No dialogue briefing overlay on live site.');

        // Verify Countdown and HUD
        const countdownActive = await page.evaluate(() => {
          const cd = document.getElementById('hud-countdown');
          return cd && !cd.classList.contains('hidden');
        });
        console.log('Live Countdown active:', countdownActive);

        const objText = await page.evaluate(() => document.getElementById('hud-objective-text')?.textContent);
        console.log('Live In-Race Objective Pill:', objText);

        if (!objText || !objText.includes('LVL 1')) {
          throw new Error(`Invalid HUD objective text: ${objText}`);
        }
        console.log('✓ Live HUD Objective Pill verified.');

        success = true;
        break;
      } else {
        console.log('Cloudflare deployment update still deploying, waiting 8 seconds...');
        await new Promise(r => setTimeout(r, 8000));
      }
    } catch (e) {
      console.log(`Attempt ${attempts} error:`, e.message);
      await new Promise(r => setTimeout(r, 8000));
    }
  }

  await browser.close();

  if (!success) {
    console.error('❌ Live check did not detect new deployment within wait window.');
    process.exit(1);
  }

  console.log('\n======================================================');
  console.log('🎉 LIVE CLOUDFLARE DEPLOYMENT 100% VERIFIED HEALTHY!');
  console.log('======================================================\n');
  process.exit(0);
}

checkLive().catch(err => {
  console.error('\n❌ LIVE CHECK FAILED:', err);
  process.exit(1);
});
