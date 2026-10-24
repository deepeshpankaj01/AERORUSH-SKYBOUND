import puppeteer from 'puppeteer-core';
import { preview } from 'vite';
import fs from 'fs';
import os from 'os';
import path from 'path';

function findChromePath() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) return process.env.CHROME_PATH;
  if (process.env.PUPPETEER_EXECUTABLE_PATH && fs.existsSync(process.env.PUPPETEER_EXECUTABLE_PATH)) return process.env.PUPPETEER_EXECUTABLE_PATH;
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  for (const p of candidates) {
    if (p && fs.existsSync(p)) return p;
  }
  throw new Error('Chrome not found');
}

async function capture() {
  const outputDir = path.resolve('public', 'screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const server = await preview({ preview: { port: 4181 } });
  const browser = await puppeteer.launch({
    executablePath: findChromePath(),
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--use-gl=angle', '--use-angle=swiftshader']
  });

  const page = await browser.newPage();

  // 1. Desktop Menu
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto('http://localhost:4181', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outputDir, 'shot-desktop-menu.png') });
  console.log('✓ Desktop menu captured');

  // 2. Mobile Portrait Gameplay (iPhone 14 - 390x844)
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.click('#btn-main-play');
  await new Promise(r => setTimeout(r, 200));
  await page.evaluate(() => {
    if (window.__aeroRushApp) window.__aeroRushApp.skipCountdownForTesting();
  });
  await new Promise(r => setTimeout(r, 1000));
  await page.screenshot({ path: path.join(outputDir, 'shot-mobile-portrait-race.png') });
  console.log('✓ Mobile portrait race captured');

  // 3. Mobile Landscape Gameplay (844x390)
  await page.setViewport({ width: 844, height: 390, isMobile: true, hasTouch: true });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(outputDir, 'shot-mobile-landscape-race.png') });
  console.log('✓ Mobile landscape race captured');

  await browser.close();
  server.httpServer.close();
  console.log('Screenshots completed successfully!');
}

capture().catch(err => {
  console.error('Screenshot error:', err);
  process.exit(1);
});
