// Script to generate valid standalone PNG app icons for AERORUSH PWA using Node built-in zlib
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPng(width, height, drawFn) {
  // RGBA buffer with filter byte per scanline
  const stride = width * 4;
  const rawData = Buffer.alloc((stride + 1) * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (stride + 1);
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * 4;
      const [r, g, b, a] = drawFn(x, y, width, height);
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  // Helper to create PNG chunks
  function makeChunk(type, data) {
    const len = data.length;
    const buf = Buffer.alloc(12 + len);
    buf.writeUInt32BE(len, 0);
    buf.write(type, 4, 4, 'ascii');
    data.copy(buf, 8);

    // CRC32 calculation
    const crcBuf = Buffer.concat([Buffer.from(type, 'ascii'), data]);
    const crc = crc32(crcBuf);
    buf.writeUInt32BE(crc, 8 + len);
    return buf;
  }

  // CRC32 table
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    crcTable[n] = c >>> 0;
  }

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // 8-bit depth
  ihdrData[9] = 6; // RGBA color type
  ihdrData[10] = 0; // Compression (deflate)
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace (none)

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Icon styling: Dark cyber background, cyan & orange racing glow
function iconShader(x, y, w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const dx = (x - cx) / (w / 2);
  const dy = (y - cy) / (h / 2);
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Background gradient: #04070c to #0c1626
  let r = Math.floor(4 + (1 - dist) * 12);
  let g = Math.floor(7 + (1 - dist) * 16);
  let b = Math.floor(12 + (1 - dist) * 28);
  let a = 255;

  // Outer border
  if (Math.abs(dx) > 0.92 || Math.abs(dy) > 0.92) {
    if (Math.abs(dx) < 0.97 && Math.abs(dy) < 0.97) {
      r = 0; g = 240; b = 255;
    }
  }

  // Center Hypercar Diamond Silhouette
  const adx = Math.abs(dx);
  const ady = Math.abs(dy);
  if (adx * 1.6 + ady * 1.2 < 0.75) {
    // Car hull
    r = 20; g = 28; b = 42;
    // Cockpit neon canopy
    if (adx < 0.14 && Math.abs(dy - 0.05) < 0.28) {
      r = 0; g = 240; b = 255;
    }
    // Front apex
    if (dy < -0.35 && adx < 0.08) {
      r = 0; g = 240; b = 255;
    }
    // Rear lightbar
    if (dy > 0.32 && dy < 0.4) {
      r = 255; g = 20; b = 60;
    }
  }

  return [Math.max(0, Math.min(255, r)), Math.max(0, Math.min(255, g)), Math.max(0, Math.min(255, b)), a];
}

const pubDir = path.resolve('public');
if (!fs.existsSync(pubDir)) {
  fs.mkdirSync(pubDir, { recursive: true });
}

fs.writeFileSync(path.join(pubDir, 'icon-192.png'), createPng(192, 192, iconShader));
fs.writeFileSync(path.join(pubDir, 'icon-512.png'), createPng(512, 512, iconShader));
console.log('Successfully generated icon-192.png and icon-512.png in public/');
