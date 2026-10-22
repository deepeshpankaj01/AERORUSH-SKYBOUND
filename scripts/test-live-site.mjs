import puppeteer from 'puppeteer-core';
import fs from 'fs';
import os from 'os';

function findChromePath() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }
  if (process.env.PUPPETEER_EXECUTABLE_PATH && fs.existsSync(process.env.PUPPETEER_EXECUTABLE_PATH)) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  const platform = os.platform();
  const candidates = [];

  if (platform === 'win32') {
    candidates.push(
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
      `${process.env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`,
      'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
      'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
    );
  } else if (platform === 'darwin') {
    candidates.push(
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge'
    );
  } else {
    candidates.push(
      '/usr/bin/google-chrome',
      '/usr/bin/google-chrome-stable',
      '/usr/bin/chromium',
      '/usr/bin/chromium-browser',
      '/snap/bin/chromium'
    );
  }

  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  throw new Error('Could not find a valid Chrome/Chromium executable. Please set CHROME_PATH or PUPPETEER_EXECUTABLE_PATH.');
}

async function checkLive() {
  console.log('--- TESTING LIVE CLOUDFLARE PAGES DEPLOYMENT ---');
  console.log('Target: https://aerorush-skybound.pages.dev/');

  const chromePath = findChromePath();
  const browser = await puppeteer.launch({
    executablePath: chromePath,
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
      const networkStatus = await page.evaluate(() => document.getElementById('network-status-text')?.textContent);

      console.log(`Live site title: "${title}", hero play button present: ${hasHeroPlay}, status: "${networkStatus}", levelText: "${levelText}"`);

      if (hasHeroPlay && levelText && levelText.includes('LEVEL 1') && networkStatus && networkStatus.includes('LOCAL SAVE')) {
        console.log('✓ Latest production deployment with honest local save status is LIVE on Cloudflare Pages!');

        // Test Direct Play Flow
        console.log('Testing Live Direct Play flow: Clicking #btn-main-play...');
        await page.click('#btn-main-play');
        await new Promise(r => setTimeout(r, 400));

        // Verify dialogue overlay and continue/skip buttons are completely removed
        const hasLegacyDialogue = await page.evaluate(() => {
          return !!document.getElementById('dialog-overlay') ||
                 !!document.getElementById('btn-dialog-continue') ||
                 !!document.getElementById('btn-dialog-skip');
        });
        if (hasLegacyDialogue) throw new Error('Legacy briefing dialog elements still present on live site!');
        console.log('✓ Verified: Legacy dialogue modal and Continue/Skip buttons completely absent from live site.');

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
