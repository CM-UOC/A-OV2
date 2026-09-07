const fs = require('fs'), zlib = require('zlib'), path = require('path');
const R = require('./plate.js');
const { sky, marchClouds, water, ground, ridges, norm, dot, clamp, sat, mix, smoothstep, PI } = R;

const SCENES = {
  prologue:    { sunElev: -6.5, sunAz: 4,   sunI: 20, cov: 0.46, cdens: 1.0, cb: 900,  ct: 2900, cscale: 0.00042, erode: 0.14, sigma: 0.046, ambK: 0.32,
                 camH: 40, yaw: 0,  pitch: 2.6, fov: 56, W: 1, wrough: 0.048, wfog: 0.00006, ridge: null,
                 grade: { lift: [0.010,0.012,0.024], gain: [0.95,0.97,1.12], sat: 0.86, warm: [1.00,0.88,0.68], cool: [0.44,0.58,1.00], exp: 2.4 } },
  origins:     { sunElev: 1.6, sunAz: 2,   sunI: 26, cov: 0.52, cdens: 1.6, cb: 700,  ct: 3200, cscale: 0.00038, erode: 0.14, sigma: 0.052, ambK: 0.30,
                 camH: 26, yaw: -4, pitch: 2.2, fov: 58, W: 1, wrough: 0.052, wfog: 0.00005, ridge: null,
                 grade: { lift: [0.014,0.010,0.008], gain: [0.96,0.95,0.96], sat: 0.80, warm: [1.00,0.88,0.66], cool: [0.46,0.58,0.92], exp: 3.0 } },
  foundations: { sunElev: 22,   sunAz: -34, sunI: 13, cov: 0.50, cdens: 1.5, cb: 700,  ct: 2000, cscale: 0.00030, erode: 0.14, sigma: 0.044, ambK: 0.34, moon: 1,
                 camH: 3000, yaw: 4, pitch: -1.4, fov: 54, W: 0, ridge: null,
                 grade: { lift: [0.012,0.016,0.034], gain: [0.84,0.92,1.24], sat: 0.74, warm: [0.92,0.94,1.00], cool: [0.40,0.52,1.00], exp: 4.2 } },
  signs:       { sunElev: 4.2,  sunAz: 30,  sunI: 30, cov: 0.58, cdens: 1.5, cb: 620,  ct: 2800, cscale: 0.00040, erode: 0.14, sigma: 0.050, ambK: 0.32,
                 camH: 34, yaw: -8, pitch: 2.0, fov: 54, W: 1, wrough: 0.048, wfog: 0.00007, ridge: null,
                 grade: { lift: [0.008,0.018,0.018], gain: [0.90,1.04,1.04], sat: 0.88, warm: [1.00,0.94,0.72], cool: [0.44,0.68,0.80], exp: 3.0 } },
  tribulation: { sunElev: 1.4,  sunAz: -20, sunI: 30, cov: 0.86, cdens: 2.4, cb: 380,  ct: 2400, cscale: 0.00046, erode: 0.14, sigma: 0.062, ambK: 0.22,
                 camH: 46, yaw: 7, pitch: 1.6, fov: 50, W: 1, wrough: 0.048, wfog: 0.00009, ridge: null,
                 grade: { lift: [0.028,0.010,0.006], gain: [1.16,0.82,0.64], sat: 0.94, warm: [1.00,0.62,0.30], cool: [0.50,0.44,0.60], exp: 3.0 } },
  adversaries: { sunElev: -2.2, sunAz: 14,  sunI: 26, cov: 0.72, cdens: 1.8, cb: 420,  ct: 2200, cscale: 0.00042, erode: 0.14, sigma: 0.054, ambK: 0.26,
                 camH: 30, yaw: -3, pitch: 1.8, fov: 48, W: 1, wrough: 0.048, wfog: 0.00008, ridge: null,
                 grade: { lift: [0.022,0.010,0.030], gain: [0.98,0.80,1.12], sat: 0.84, warm: [1.00,0.74,0.90], cool: [0.52,0.44,0.96], exp: 2.9 } },
  cosmos:      { sunElev: 30,   sunAz: 18,  sunI: 16, cov: 0.44, cdens: 1.6, cb: 1300, ct: 2900, cscale: 0.00032, erode: 0.14, sigma: 0.046, ambK: 0.30, eclipse: 1,
                 camH: 4200, yaw: 5, pitch: -1.2, fov: 58, W: 0, ridge: null,
                 grade: { lift: [0.010,0.014,0.038], gain: [0.86,0.96,1.26], sat: 0.88, warm: [0.90,0.94,1.00], cool: [0.38,0.52,1.00], exp: 4.0 } },
  parousia:    { sunElev: 10,   sunAz: 0,   sunI: 34, cov: 0.62, cdens: 1.8, cb: 700,  ct: 2100, cscale: 0.00034, erode: 0.14, sigma: 0.052, ambK: 0.34,
                 camH: 3100, yaw: -2, pitch: -2.2, fov: 62, W: 0, ridge: null,
                 grade: { lift: [0.030,0.022,0.008], gain: [1.16,1.04,0.78], sat: 0.94, warm: [1.00,0.86,0.50], cool: [0.48,0.58,0.86], exp: 3.0 } },
  judgement:   { sunElev: 48,   sunAz: -6,  sunI: 28, cov: 0.46, cdens: 1.0, cb: 1100, ct: 3800, cscale: 0.00040, erode: 0.14, sigma: 0.046, ambK: 0.32,
                 camH: 30, yaw: 2, pitch: 2.0, fov: 52, W: 1, wrough: 0.048, wfog: 0.00009, ridge: null,
                 grade: { lift: [0.026,0.010,0.018], gain: [1.06,0.90,0.98], sat: 0.84, warm: [1.00,0.80,0.84], cool: [0.46,0.52,0.88], exp: 2.8 } },
  restoration: { sunElev: 6.5,  sunAz: -12, sunI: 30, cov: 0.50, cdens: 1.1, cb: 700,  ct: 3200, cscale: 0.00042, erode: 0.14, sigma: 0.048, ambK: 0.32,
                 camH: 160, yaw: -6, pitch: 1.4, fov: 54, W: 1, wrough: 0.048, wfog: 0.00016, ridge: null,
                 grade: { lift: [0.014,0.026,0.012], gain: [1.06,1.10,0.84], sat: 0.94, warm: [1.00,0.90,0.56], cool: [0.46,0.64,0.78], exp: 3.0 } },
  coda:        { sunElev: -5.5, sunAz: -6,  sunI: 18, cov: 0.40, cdens: 0.9, cb: 900,  ct: 2800, cscale: 0.00040, erode: 0.14, sigma: 0.044, ambK: 0.32,
                 camH: 34, yaw: 3, pitch: 2.4, fov: 54, W: 1, wrough: 0.048, wfog: 0.00012, ridge: null,
                 grade: { lift: [0.012,0.014,0.024], gain: [0.96,0.98,1.10], sat: 0.84, warm: [1.00,0.86,0.62], cool: [0.44,0.56,0.94], exp: 2.6 } }
};

function aces(x) { return sat((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14)); }

function render(id, W, H, steps, ss) {
  const S = Object.assign({ maxSpan: 60000, ambK: 0.55, steps: steps, erode: 0.3, sigma: 0.03,
    eclipse: 0, moon: 0, ground: 0, ridge: null, rlayers: 0, rheight: 0, rhaze: 0.5, W: 0 }, SCENES[id]);
  const se = S.sunElev * PI / 180, sa = S.sunAz * PI / 180;
  const sd = [Math.sin(sa) * Math.cos(se), Math.sin(se), Math.cos(sa) * Math.cos(se)];
  const yaw = S.yaw * PI / 180, pitch = S.pitch * PI / 180;
  const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
  const fwd = [sy * cp, sp, cy * cp], right = [cy, 0, -sy], up = [-sy * sp, cp, -cy * sp];
  const focal = 1 / Math.tan(S.fov * PI / 360);
  const ro = [0, S.camH, 0];

  const hdr = new Float32Array(W * H * 3);
  const sunLum = new Float32Array(W * H);
  let sunSX = -1, sunSY = -1;
  {
    const f = dot(sd, fwd);
    if (f > 0.05) {
      const k = focal / f;
      sunSX = 0.5 * W + k * dot(sd, right) * H;
      sunSY = 0.5 * H - k * dot(sd, up) * H;
    }
  }

  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      let cr = 0, cg = 0, cb = 0;
      for (let s = 0; s < ss; s++) {
        const jx = ss === 1 ? 0.5 : (s % 2) * 0.5 + 0.25;
        const jy = ss === 1 ? 0.5 : Math.floor(s / 2) * 0.5 + 0.25;
        const ux = (i + jx - 0.5 * W) / H, uy = (0.5 * H - (j + jy)) / H;
        const rd = norm([fwd[0] * focal + right[0] * ux + up[0] * uy,
                         fwd[1] * focal + right[1] * ux + up[1] * uy,
                         fwd[2] * focal + right[2] * ux + up[2] * uy]);
        let col = sky(rd, sd, S);

        /* stars before clouds */
        if (S.sunElev < 6) {
          const amt = sat(1 - (S.sunElev + 4) / 10);
          const sx2 = Math.atan2(rd[2], rd[0]) * 300, sy2 = Math.asin(clamp(rd[1], -1, 1)) * 300;
          const hh = R.n2(Math.floor(sx2) * 1.7, Math.floor(sy2) * 2.3);
          if (hh > 0.9965 && rd[1] > 0) {
            const dx = (sx2 - Math.floor(sx2)) - 0.5, dy = (sy2 - Math.floor(sy2)) - 0.5;
            const g = Math.max(1 - Math.hypot(dx, dy) * 3.2, 0);
            const v = Math.pow(g, 2.4) * amt * (0.4 + hh) * 1.3;
            col = [col[0] + v * 0.85, col[1] + v * 0.9, col[2] + v];
          }
        }

        /* sun or eclipse */
        const mu = dot(rd, sd), ang = Math.acos(clamp(mu, -1, 1));
        const discR = S.moon ? 0.020 : 0.0093;
        if (S.eclipse) {
          const corona = Math.pow(Math.max(1 - ang / 0.085, 0), 2.2);
          const shadow = 1 - smoothstep(discR * 0.72, discR * 0.86, ang);
          const v = corona * 0.85 * (1 - shadow);
          col = [col[0] + v, col[1] + v * 1.02, col[2] + v * 1.15];
          const ring = Math.pow(Math.max(1 - Math.abs(ang - discR * 0.9) / 0.006, 0), 2) * 3.5;
          col = [col[0] + ring, col[1] + ring * 0.95, col[2] + ring * 0.85];
        } else {
          const disc = 1 - smoothstep(discR * 0.85, discR, ang);
          const dc = S.moon ? [0.88, 0.92, 1.0] : [1.0, 0.95, 0.86];
          const v = disc * S.sunI * 0.06;
          col = [col[0] + dc[0] * v, col[1] + dc[1] * v, col[2] + dc[2] * v];
        }

        const jitter = (Math.sin(i * 12.9898 + j * 78.233 + s * 37.719) * 43758.5453) % 1;
        const cl = marchClouds(ro, rd, sd, S, jitter < 0 ? jitter + 1 : jitter);
        col = [col[0] * cl[3] + cl[0], col[1] * cl[3] + cl[1], col[2] * cl[3] + cl[2]];

        const skyH = sky(norm([rd[0], Math.max(rd[1], 0) + 0.004, rd[2]]), sd, S);
        const skyHc = [skyH[0] * cl[3] + cl[0] * 0.5, skyH[1] * cl[3] + cl[1] * 0.5, skyH[2] * cl[3] + cl[2] * 0.5];

        const rg = ridges(rd, sd, skyHc, S);
        if (rg) col = rg;
        if (S.W) { const w = water(ro, rd, sd, skyHc, S); if (w) col = w; }
        else { const g = ground(ro, rd, sd, skyHc, S); if (g) col = g; }

        cr += col[0]; cg += col[1]; cb += col[2];
      }
      const o = (j * W + i) * 3;
      hdr[o] = cr / ss; hdr[o + 1] = cg / ss; hdr[o + 2] = cb / ss;
      const lum = 0.2126 * hdr[o] + 0.7152 * hdr[o + 1] + 0.0722 * hdr[o + 2];
      sunLum[j * W + i] = Math.max(lum - 0.16, 0);
    }
  }
  return { hdr, sunLum, sunSX, sunSY, S, W, H };
}

/* ---------- post ---------- */
function godRays(f) {
  const { hdr, sunLum, sunSX, sunSY, W, H } = f;
  if (sunSX < -W || sunSX > 2 * W) return;
  const N = 42, decay = 0.955, weight = 0.42, density = 0.82;
  const out = new Float32Array(W * H);
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      let dx = (sunSX - i) * density / N, dy = (sunSY - j) * density / N;
      let x = i, y = j, illum = 1, acc = 0;
      for (let k = 0; k < N; k++) {
        x += dx; y += dy;
        const xi = x | 0, yi = y | 0;
        if (xi < 0 || yi < 0 || xi >= W || yi >= H) break;
        acc += sunLum[yi * W + xi] * illum * weight;
        illum *= decay;
      }
      out[j * W + i] = acc / N * 5.5;
    }
  }
  const S = f.S;
  const tintR = S.eclipse ? 0.62 : 1.0, tintG = S.eclipse ? 0.72 : 0.90, tintB = S.eclipse ? 1.0 : 0.70;
  for (let p = 0, q = 0; p < W * H; p++, q += 3) {
    const v = out[p];
    hdr[q] += v * tintR; hdr[q + 1] += v * tintG; hdr[q + 2] += v * tintB;
  }
}

function bloom(f, amount) {
  const { hdr, W, H } = f;
  const dw = W >> 2, dh = H >> 2;
  const small = new Float32Array(dw * dh * 3);
  for (let j = 0; j < dh; j++) for (let i = 0; i < dw; i++) {
    let r = 0, g = 0, b = 0;
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
      const o = (((j * 4 + y) * W) + (i * 4 + x)) * 3;
      r += hdr[o]; g += hdr[o + 1]; b += hdr[o + 2];
    }
    const o2 = (j * dw + i) * 3;
    r /= 16; g /= 16; b /= 16;
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const k = Math.max(lum - 0.30, 0) / Math.max(lum, 1e-4);
    small[o2] = r * k; small[o2 + 1] = g * k; small[o2 + 2] = b * k;
  }
  const ker = [0.06, 0.12, 0.20, 0.24, 0.20, 0.12, 0.06];
  const tmp = new Float32Array(small.length);
  for (let pass = 0; pass < 2; pass++) {
    const src = pass ? tmp : small, dst = pass ? small : tmp;
    for (let j = 0; j < dh; j++) for (let i = 0; i < dw; i++) {
      let r = 0, g = 0, b = 0;
      for (let k = -3; k <= 3; k++) {
        const xi = pass ? i : clamp(i + k, 0, dw - 1), yj = pass ? clamp(j + k, 0, dh - 1) : j;
        const o = ((yj * dw) + xi) * 3, w = ker[k + 3];
        r += src[o] * w; g += src[o + 1] * w; b += src[o + 2] * w;
      }
      const o2 = (j * dw + i) * 3;
      dst[o2] = r; dst[o2 + 1] = g; dst[o2 + 2] = b;
    }
  }
  for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
    const si = ((j >> 2) * dw + (i >> 2)) * 3, o = (j * W + i) * 3;
    hdr[o] += small[si] * amount; hdr[o + 1] += small[si + 1] * amount; hdr[o + 2] += small[si + 2] * amount;
  }
}

function denoise(f, radius) {
  const { hdr, W, H } = f;
  const tmp = new Float32Array(hdr.length);
  const r = radius;
  const w = []; let wsum = 0;
  for (let k = -r; k <= r; k++) { const v = Math.exp(-(k * k) / (2 * (r * 0.62) * (r * 0.62))); w.push(v); wsum += v; }
  for (let pass = 0; pass < 2; pass++) {
    const src = pass ? tmp : hdr, dst = pass ? hdr : tmp;
    for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) {
      let a = 0, b = 0, c = 0;
      for (let k = -r; k <= r; k++) {
        const xi = pass ? i : clamp(i + k, 0, W - 1), yj = pass ? clamp(j + k, 0, H - 1) : j;
        const o = (yj * W + xi) * 3, ww = w[k + r];
        a += src[o] * ww; b += src[o + 1] * ww; c += src[o + 2] * ww;
      }
      const o2 = (j * W + i) * 3;
      dst[o2] = a / wsum; dst[o2 + 1] = b / wsum; dst[o2 + 2] = c / wsum;
    }
  }
}

function grade(f) {
  const { hdr, W, H, S } = f;
  const G = S.grade;
  const px = Buffer.alloc(W * H * 3);
  for (let j = 0; j < H; j++) {
    for (let i = 0; i < W; i++) {
      const o = (j * W + i) * 3;
      let c = [hdr[o] * G.gain[0] + G.lift[0], hdr[o + 1] * G.gain[1] + G.lift[1], hdr[o + 2] * G.gain[2] + G.lift[2]];
      c = [aces(c[0] * G.exp), aces(c[1] * G.exp), aces(c[2] * G.exp)];
      const lum = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
      c = [mix(lum, c[0], G.sat), mix(lum, c[1], G.sat), mix(lum, c[2], G.sat)];
      /* split tone: warm highlights, cool shadows */
      const hi = smoothstep(0.45, 1.0, lum), lo = 1 - smoothstep(0.0, 0.45, lum);
      c = [
        mix(c[0], c[0] * G.warm[0], hi * 0.30) * mix(1, G.cool[0], lo * 0.22),
        mix(c[1], c[1] * G.warm[1], hi * 0.30) * mix(1, G.cool[1], lo * 0.22),
        mix(c[2], c[2] * G.warm[2], hi * 0.30) * mix(1, G.cool[2], lo * 0.22)
      ];
      /* vignette */
      const qx = (i / W - 0.5) * (W / H) * 0.82, qy = (j / H - 0.5);
      const vig = mix(0.40, 1.0, 1 - smoothstep(0.30, 1.10, Math.hypot(qx, qy)));
      c = [c[0] * vig, c[1] * vig, c[2] * vig];
      /* grain */
      const gr = (R.n2(i * 3.1, j * 3.7) - 0.5) * 0.022;
      px[o] = clamp((c[0] + gr) * 255, 0, 255) | 0;
      px[o + 1] = clamp((c[1] + gr) * 255, 0, 255) | 0;
      px[o + 2] = clamp((c[2] + gr) * 255, 0, 255) | 0;
    }
  }
  return px;
}

function png(w, h, rgb) {
  const raw = Buffer.alloc((w * 3 + 1) * h);
  for (let j = 0; j < h; j++) { raw[j * (w * 3 + 1)] = 0; rgb.copy(raw, j * (w * 3 + 1) + 1, j * w * 3, (j + 1) * w * 3); }
  const idat = zlib.deflateSync(raw, { level: 6 });
  const tbl = (() => { const t = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  const crc = b => { let c = 0xFFFFFFFF; for (const x of b) c = tbl[(c ^ x) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; };
  const chunk = (ty, d) => { const l = Buffer.alloc(4); l.writeUInt32BE(d.length); const td = Buffer.concat([Buffer.from(ty), d]); const c = Buffer.alloc(4); c.writeUInt32BE(crc(td)); return Buffer.concat([l, td, c]); };
  const ih = Buffer.alloc(13); ih.writeUInt32BE(w, 0); ih.writeUInt32BE(h, 4); ih[8] = 8; ih[9] = 2;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ih), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

module.exports = { SCENES, render, godRays, bloom, grade, png };

if (require.main === module) {
  const ids = (process.env.ONLY || Object.keys(SCENES).join(',')).split(',');
  const W = +(process.env.W || 640), H = +(process.env.H || 360);
  const steps = +(process.env.STEPS || 64), ss = +(process.env.SS || 1);
  const outDir = process.env.OUT || '/Users/cm/Downloads/AD/plates';
  fs.mkdirSync(outDir, { recursive: true });
  ids.forEach(id => {
    const t0 = Date.now();
    const f = render(id, W, H, steps, ss);
    denoise(f, +(process.env.DENOISE || 2));
    godRays(f);
    bloom(f, +(process.env.BLOOM || 0.32));
    const px = grade(f);
    fs.writeFileSync(path.join(outDir, id + '.png'), png(W, H, px));
    console.log(id.padEnd(12), W + 'x' + H, ((Date.now() - t0) / 1000).toFixed(1) + 's');
  });
}
