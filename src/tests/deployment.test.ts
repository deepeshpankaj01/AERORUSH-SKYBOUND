// AERORUSH: SKYBOUND - Cloudflare Pages Deployment & Offline PWA Integrity Tests
import { describe, it, expect } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';

describe('Cloudflare Pages Deployment Configuration', () => {
  const rootDir = process.cwd();

  it('verifies public/_redirects has valid SPA fallback for Cloudflare Pages', () => {
    const filePath = path.join(rootDir, 'public', '_redirects');
    expect(fs.existsSync(filePath)).toBe(true);

    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('/*');
    expect(content).toContain('/index.html');
    expect(content).toContain('200');
  });

  it('verifies public/_headers contains security and cache control rules', () => {
    const filePath = path.join(rootDir, 'public', '_headers');
    expect(fs.existsSync(filePath)).toBe(true);

    const content = fs.readFileSync(filePath, 'utf-8');
    expect(content).toContain('X-Content-Type-Options: nosniff');
    expect(content).toContain('X-Frame-Options: SAMEORIGIN');
    expect(content).toContain('Referrer-Policy: strict-origin-when-cross-origin');
    expect(content).toContain('/assets/*');
    expect(content).toContain('max-age=31536000');
    expect(content).toContain('/sw.js');
    expect(content).toContain('no-cache, no-store, must-revalidate');
  });

  it('verifies public/manifest.webmanifest is valid JSON and has mandatory PWA fields', () => {
    const filePath = path.join(rootDir, 'public', 'manifest.webmanifest');
    expect(fs.existsSync(filePath)).toBe(true);

    const raw = fs.readFileSync(filePath, 'utf-8');
    const manifest = JSON.parse(raw);

    expect(manifest.name).toBe('AERORUSH: SKYBOUND');
    expect(manifest.short_name).toBe('AERORUSH');
    expect(manifest.start_url).toBe('./index.html');
    expect(manifest.display).toBe('standalone');
    expect(manifest.orientation).toBe('landscape-primary');
    expect(Array.isArray(manifest.icons)).toBe(true);
    expect(manifest.icons.length).toBeGreaterThanOrEqual(2);
  });

  it('verifies index.html has no external blocking CDN script or stylesheet dependencies', () => {
    const filePath = path.join(rootDir, 'index.html');
    expect(fs.existsSync(filePath)).toBe(true);

    const html = fs.readFileSync(filePath, 'utf-8');
    // Ensure no external blocking CDN script or stylesheet tags
    expect(html).not.toMatch(/<script[^>]+src=["']https?:\/\//i);
    expect(html).not.toMatch(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']https?:\/\//i);
  });

  it('verifies sw.js correctly defines cache-first offline strategy and navigation fallback', () => {
    const filePath = path.join(rootDir, 'public', 'sw.js');
    expect(fs.existsSync(filePath)).toBe(true);

    const swCode = fs.readFileSync(filePath, 'utf-8');
    expect(swCode).toContain('CACHE_NAME');
    expect(swCode).toContain('PRECACHE_ASSETS');
    expect(swCode).toContain('caches.match');
    expect(swCode).toContain('navigate');
  });

  it('verifies dist output has all deployment files after production build', () => {
    const distDir = path.join(rootDir, 'dist');
    expect(fs.existsSync(distDir)).toBe(true);

    expect(fs.existsSync(path.join(distDir, 'index.html'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'sw.js'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'sw-assets.js'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'manifest.webmanifest'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, '_redirects'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, '_headers'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'icon-192.png'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'icon-512.png'))).toBe(true);
    expect(fs.existsSync(path.join(distDir, 'assets'))).toBe(true);
  });
});
