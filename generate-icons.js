#!/usr/bin/env node
// generate-icons.js — create PWA / iOS home-screen icons with zero dependencies.
// Draws a white medical cross on a deep-teal square. iOS auto-rounds the corners.
// Run once (or whenever you want to regenerate): node generate-icons.js
'use strict';

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const BG = [13, 92, 99];      // #0d5c63 deep teal
const FG = [255, 255, 255];   // white cross

// ── Minimal PNG encoder (truecolour + alpha, 8-bit) ──────────────────────────
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

function makePng(size) {
  const t = size * 0.20;            // cross arm thickness
  const half = size * 0.30;         // cross arm reach from centre
  const cx = size / 2, cy = size / 2;
  const lo = cx - t / 2, hi = cx + t / 2;

  // Raw RGBA scanlines, each prefixed with a 0 filter byte.
  const raw = Buffer.alloc((size * 4 + 1) * size);
  let p = 0;
  for (let y = 0; y < size; y++) {
    raw[p++] = 0; // filter: none
    for (let x = 0; x < size; x++) {
      const inVert = x >= lo && x <= hi && y >= cy - half && y <= cy + half;
      const inHorz = y >= lo && y <= hi && x >= cx - half && x <= cx + half;
      const c = (inVert || inHorz) ? FG : BG;
      raw[p++] = c[0]; raw[p++] = c[1]; raw[p++] = c[2]; raw[p++] = 255;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8;   // bit depth
  ihdr[9] = 6;   // colour type: truecolour + alpha
  ihdr[10] = 0;  // compression
  ihdr[11] = 0;  // filter
  ihdr[12] = 0;  // interlace

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG signature
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

const ROOT = __dirname;
const outputs = [
  ['icons/icon-192.png', 192],
  ['icons/icon-512.png', 512],
  ['apple-touch-icon.png', 180],
];

fs.mkdirSync(path.join(ROOT, 'icons'), { recursive: true });
for (const [rel, size] of outputs) {
  const png = makePng(size);
  fs.writeFileSync(path.join(ROOT, rel), png);
  console.log(`Wrote ${rel} (${size}x${size}, ${png.length} bytes)`);
}
