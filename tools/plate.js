/* Offline plate renderer.
   Free of realtime limits: 64-128 march steps, 6-8 light steps, multiple
   scattering, bloom, god rays and a film grade. Produces the background plates. */
const fs = require('fs'), zlib = require('zlib');

/* ---------- noise LUTs (fast, tiling) ---------- */
const N3 = 64, N2 = 256;
function mulberry(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; var t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const r3 = mulberry(1337), r2 = mulberry(90210);
const L3 = new Float32Array(N3 * N3 * N3); for (let i = 0; i < L3.length; i++) L3[i] = r3();
const L2 = new Float32Array(N2 * N2); for (let i = 0; i < L2.length; i++) L2[i] = r2();

const wrap = (i, n) => ((i % n) + n) % n;
function n3(x, y, z) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  let fx = x - xi, fy = y - yi, fz = z - zi;
  fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy); fz = fz * fz * (3 - 2 * fz);
  const x0 = wrap(xi, N3), x1 = wrap(xi + 1, N3);
  const y0 = wrap(yi, N3) * N3, y1 = wrap(yi + 1, N3) * N3;
  const z0 = wrap(zi, N3) * N3 * N3, z1 = wrap(zi + 1, N3) * N3 * N3;
  const c000 = L3[z0 + y0 + x0], c100 = L3[z0 + y0 + x1], c010 = L3[z0 + y1 + x0], c110 = L3[z0 + y1 + x1];
  const c001 = L3[z1 + y0 + x0], c101 = L3[z1 + y0 + x1], c011 = L3[z1 + y1 + x0], c111 = L3[z1 + y1 + x1];
  const a = c000 + (c100 - c000) * fx, b = c010 + (c110 - c010) * fx;
  const c = c001 + (c101 - c001) * fx, d = c011 + (c111 - c011) * fx;
  return (a + (b - a) * fy) + ((c + (d - c) * fy) - (a + (b - a) * fy)) * fz;
}
function n2(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  let fx = x - xi, fy = y - yi;
  fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
  const x0 = wrap(xi, N2), x1 = wrap(xi + 1, N2);
  const y0 = wrap(yi, N2) * N2, y1 = wrap(yi + 1, N2) * N2;
  const a = L2[y0 + x0] + (L2[y0 + x1] - L2[y0 + x0]) * fx;
  const b = L2[y1 + x0] + (L2[y1 + x1] - L2[y1 + x0]) * fx;
  return a + (b - a) * fy;
}
function fbm3(x, y, z, oct) { let v = 0, a = 0.5, s = 1; for (let i = 0; i < oct; i++) { v += a * n3(x * s, y * s, z * s); s *= 2.02; a *= 0.5; } return v; }
function billow(x, y, z, oct) { let v = 0, a = 0.5, s = 1; for (let i = 0; i < oct; i++) { v += a * (1 - Math.abs(2 * n3(x * s, y * s, z * s) - 1)); s *= 2.03; a *= 0.5; } return v; }
function fbm2(x, y, oct) { let v = 0, a = 0.5, s = 1; for (let i = 0; i < oct; i++) { v += a * n2(x * s, y * s); s *= 2.05; a *= 0.5; } return v; }

/* ---------- helpers ---------- */
const PI = Math.PI;
const clamp = (x, a, b) => x < a ? a : x > b ? b : x;
const sat = x => clamp(x, 0, 1);
const mix = (a, b, t) => a + (b - a) * t;
const remap = (v, a, b, c, d) => c + (sat((v - a) / (b - a))) * (d - c);
const smoothstep = (e0, e1, x) => { const t = sat((x - e0) / (e1 - e0)); return t * t * (3 - 2 * t); };
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = a => { const l = Math.hypot(a[0], a[1], a[2]) || 1; return [a[0] / l, a[1] / l, a[2] / l]; };

/* ---------- atmosphere ---------- */
const betaR = [5.8e-3, 13.5e-3, 33.1e-3], betaM = 4.2e-3;
const phaseR = mu => 3 / (16 * PI) * (1 + mu * mu);
function phaseHG(mu, g) { const g2 = g * g; return (1 - g2) / (4 * PI * Math.pow(1 + g2 - 2 * g * mu, 1.5)); }
function od(c) { const th = Math.acos(clamp(c, -1, 1)) * 180 / PI; return 1 / (Math.max(c, 0) + 0.15 * Math.pow(Math.max(93.885 - th, 0.001), -1.253)); }

function sky(rd, sd, S) {
  const mu = dot(rd, sd);
  const sR = od(rd[1]) * 8.4, sM = od(rd[1]) * 1.25;
  const uR = od(sd[1]) * 8.4, uM = od(sd[1]) * 1.25;
  const pr = phaseR(mu), pm = phaseHG(mu, 0.76) * 4 * PI * 0.25;
  const out = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    const ext = Math.exp(-(betaR[i] * (sR + uR) + betaM * (sM + uM)));
    out[i] = (betaR[i] * pr * 8.4 + betaM * pm * 1.25) * ext * S.sunI;
  }
  const night = smoothstep(0.06, -0.20, sd[1]);
  const up = 0.35 + 0.65 * smoothstep(-0.1, 0.6, rd[1]);
  out[0] += 0.0055 * night * up; out[1] += 0.0085 * night * up; out[2] += 0.020 * night * up;
  return out;
}

/* ---------- clouds ---------- */
function density(p, S) {
  const h = (p[1] - S.cb) / (S.ct - S.cb);
  if (h < 0 || h > 1) return 0;
  /* cumulus profile: wide base, eroded top */
  const shape = sat(remap(h, 0.0, 0.14, 0, 1)) * sat(remap(h, 0.62, 1.0, 1, 0));
  const s = S.cscale;
  const wx = p[0] * s, wy = p[1] * s * 1.6, wz = p[2] * s;
  const base = fbm3(wx, wy, wz, 3) * 0.62 + billow(wx * 2.1, wy * 2.1, wz * 2.1, 2) * 0.38;
  let d = remap(base, 1 - S.cov, 1.0, 0, 1) * shape;
  if (d <= 0) return 0;
  const det = fbm3(wx * 7.5 + 11, wy * 7.5, wz * 7.5 + 4, 3);
  d = sat(d - det * S.erode * (0.25 + 0.75 * h));
  d = d * d * (3 - 2 * d);
  return d * S.cdens;
}

function lightTransmittance(p, sd, S) {
  let t = 0, sum = 0;
  const step = (S.ct - S.cb) / 6 * 0.9;
  for (let i = 0; i < 6; i++) {
    t += step * (0.55 + i * 0.35);
    sum += density([p[0] + sd[0] * t, p[1] + sd[1] * t, p[2] + sd[2] * t], S) * step;
  }
  /* multiple scattering: three octaves of decreasing extinction */
  let T = 0;
  for (let o = 0; o < 3; o++) T += Math.pow(0.5, o) * Math.exp(-sum * S.sigma * Math.pow(0.42, o));
  return T / 2.0;
}

function marchClouds(ro, rd, sd, S, jitter) {
  if (Math.abs(rd[1]) < 0.0025) return [0, 0, 0, 1];
  let ta = (S.cb - ro[1]) / rd[1], tb = (S.ct - ro[1]) / rd[1];
  let t0 = Math.min(ta, tb), t1 = Math.max(ta, tb);
  if (t1 <= 0) return [0, 0, 0, 1];
  t0 = Math.max(t0, 0);
  t1 = Math.min(t1, t0 + S.maxSpan);
  if (t1 <= t0) return [0, 0, 0, 1];
  const steps = S.steps;
  const dt = (t1 - t0) / steps;
  const mu = dot(rd, sd);
  const ph = mix(phaseHG(mu, 0.72), phaseHG(mu, -0.22), 0.30) * 4 * PI;
  const sunCol = [S.sunI * 0.0042, S.sunI * 0.0039, S.sunI * 0.0034];
  const ambT = sky([0, 1, 0], sd, S), ambB = sky(norm([rd[0], 0.05, rd[2]]), sd, S);
  let T = 1, acc = [0, 0, 0], t = t0 + dt * jitter;
  for (let i = 0; i < steps; i++, t += dt) {
    if (T < 0.008) break;
    const p = [ro[0] + rd[0] * t, ro[1] + rd[1] * t, ro[2] + rd[2] * t];
    const d = density(p, S);
    if (d > 0.0015) {
      const h = sat((p[1] - S.cb) / (S.ct - S.cb));
      const lt = lightTransmittance(p, sd, S);
      const powder = 1 - Math.exp(-d * dt * S.sigma * 5.0);
      const amb = [mix(ambB[0], ambT[0], h), mix(ambB[1], ambT[1], h), mix(ambB[2], ambT[2], h)];
      const ao = 0.30 + 0.70 * h;
      const ext = d * dt * S.sigma;
      const Ti = Math.exp(-ext);
      const integ = (1 - Ti);
      for (let c = 0; c < 3; c++) {
        const L = sunCol[c] * lt * ph * powder + amb[c] * S.ambK * ao;
        acc[c] += L * integ * T;
      }
      T *= Ti;
    }
  }
  return [acc[0], acc[1], acc[2], T];
}

/* ---------- water & ground ---------- */
function water(ro, rd, sd, skyH, S) {
  if (rd[1] > -0.0015) return null;
  const t = -ro[1] / rd[1];
  if (t <= 0 || t > 60000) return null;
  const p = [ro[0] + rd[0] * t, 0, ro[2] + rd[2] * t];
  const fade = 1 / (1 + t * t * 1e-7);
  const sc = 0.02, e = 0.5;
  const amp = S.wrough * fade;
  const q = (a, b) => fbm2(a * sc, b * sc, 4) * 0.68 + fbm2(a * sc * 5.3 + 17, b * sc * 5.3, 3) * 0.32;
  const f0 = q(p[0], p[2]);
  const fx = q(p[0] + e, p[2]);
  const fz = q(p[0], p[2] + e);
  const n = norm([-(fx - f0) / e * amp * 26, 1, -(fz - f0) / e * amp * 26]);
  const d = dot(rd, n);
  const refl = norm([rd[0] - 2 * d * n[0], Math.abs(rd[1] - 2 * d * n[1]) + 0.004, rd[2] - 2 * d * n[2]]);
  const rc = sky(refl, sd, S);
  const fres = 0.02 + 0.98 * Math.pow(1 - Math.max(-d, 0), 5);
  const deep = [mix(0.0035, skyH[0], 0.14), mix(0.0070, skyH[1], 0.16), mix(0.0150, skyH[2], 0.22)];
  const col = [mix(deep[0], rc[0], sat(fres * 1.5)), mix(deep[1], rc[1], sat(fres * 1.5)), mix(deep[2], rc[2], sat(fres * 1.5))];
  const hv = norm([sd[0] - rd[0], sd[1] - rd[1], sd[2] - rd[2]]);
  const spec = Math.pow(Math.max(dot(n, hv), 0), 220);
  const glint = Math.pow(Math.max(dot(refl, sd), 0), 40);
  const k = Math.max(sd[1] + 0.10, 0);
  col[0] += spec * S.sunI * 0.06 * k + glint * 0.55 * fade * k;
  col[1] += spec * S.sunI * 0.055 * k + glint * 0.48 * fade * k;
  col[2] += spec * S.sunI * 0.046 * k + glint * 0.36 * fade * k;
  const fog = 1 - Math.exp(-t * S.wfog);
  return [mix(col[0], skyH[0], fog), mix(col[1], skyH[1], fog), mix(col[2], skyH[2], fog)];
}

function ground(ro, rd, sd, skyH, S) {
  if (!S.ground || rd[1] > -0.0015) return null;
  const t = -ro[1] / rd[1];
  if (t <= 0 || t > 90000) return null;
  const p = [ro[0] + rd[0] * t, 0, ro[2] + rd[2] * t];
  const sc = S.gscale, e = 1.2;
  const f0 = fbm2(p[0] * sc, p[2] * sc, 5);
  const fx = fbm2((p[0] + e) * sc, p[2] * sc, 5);
  const fz = fbm2(p[0] * sc, (p[2] + e) * sc, 5);
  const amp = S.gbump / (1 + t * 0.0004);
  const n = norm([-(fx - f0) / e * amp, 1, -(fz - f0) / e * amp]);
  const E = S.sunI * Math.max(dot(n, sd), 0) * 0.05;
  const A = [skyH[0] * 2.2 * (0.5 + 0.5 * n[1]), skyH[1] * 2.2 * (0.5 + 0.5 * n[1]), skyH[2] * 2.2 * (0.5 + 0.5 * n[1])];
  const patch = fbm2(p[0] * sc * 0.09, p[2] * sc * 0.09, 3);
  const alb = S.albedo;
  const shade = 0.55 + 0.45 * f0;
  const col = [
    alb[0] * (0.75 + 0.55 * patch) * (E + A[0]) * shade,
    alb[1] * (0.80 + 0.45 * patch) * (E * 0.95 + A[1]) * shade,
    alb[2] * (0.86 + 0.35 * patch) * (E * 0.87 + A[2]) * shade
  ];
  const fog = 1 - Math.exp(-t * S.gfog);
  return [mix(col[0], skyH[0], fog), mix(col[1], skyH[1], fog), mix(col[2], skyH[2], fog)];
}

/* ---------- ridge silhouettes (distant landforms) ---------- */
function ridgeProfile(S, az, layer) {
  const f = az * (0.9 + layer * 0.55) + layer * 31.4;
  switch (S.ridge) {
    case 'dunes': return fbm2(f * 1.4, 3.1, 4) * 0.9 + 0.15;
    case 'hills': return fbm2(f * 0.9, 8.4, 4) * 0.85 + 0.22;
    case 'mountains': { const r = 1 - Math.abs(2 * fbm2(f * 0.8, 2.2, 4) - 1); return Math.pow(r, 1.5) * 1.9 + 0.10; }
    case 'ruins': { const b = Math.floor(f * 9) * 0.111, t = n2(b * 37, layer * 11); return Math.max((t > 0.55 ? 0.6 + t * 0.8 : 0.10 + t * 0.2) * (0.6 + 0.4 * n2(f, layer)), 0.10); }
    case 'colonnade': { const c = (f * 2.6) % 1; return 0.20 + ((c > 0.34 && c < 0.64) ? 0.85 : 0); }
    case 'city': { const b = Math.floor(f * 6) * 0.1666, t = n2(b * 53, layer * 17); return (t > 0.58 ? 0.55 + t * 1.0 : 0.22 + t * 0.28) * (1 - 0.25 * Math.abs(az) / PI); }
    default: return 0;
  }
}
function ridges(rd, sd, skyH, S) {
  if (!S.ridge || rd[1] < -0.0015) return null;
  const az = Math.atan2(rd[0], rd[2]);
  let out = null;
  for (let i = 0; i < S.rlayers; i++) {
    const p = ridgeProfile(S, az, i) * S.rheight;
    const ridgeY = -0.012 - i * 0.011 + p * (1 - i * 0.15);
    if (rd[1] < ridgeY) {
      const near = i / Math.max(S.rlayers - 1, 1);
      const below = Math.max(ridgeY - rd[1], 0);
      const aer = sat(mix(0.90, 0.30, near) * S.rhaze * Math.exp(-below * 22));
      const key = sat(Math.max(sd[1] + 0.14, 0) * S.sunI * 0.05);
      const rock = [mix(0.028, 0.10, near), mix(0.024, 0.086, near), mix(0.022, 0.072, near)];
      const sunAz = Math.atan2(sd[0], sd[2]);
      let dif = ((az - sunAz + PI) % (2 * PI) + 2 * PI) % (2 * PI) - PI;
      const rim = Math.pow(Math.max(1 - Math.abs(dif) / 0.9, 0), 3) * smoothstep(ridgeY - 0.008, ridgeY, rd[1]);
      const lit = [
        rock[0] * (0.25 + key) + skyH[0] * 0.30 + rim * key * 1.1,
        rock[1] * (0.25 + key) + skyH[1] * 0.30 + rim * key * 0.94,
        rock[2] * (0.25 + key) + skyH[2] * 0.30 + rim * key * 0.72
      ];
      out = [mix(lit[0], skyH[0], aer), mix(lit[1], skyH[1], aer), mix(lit[2], skyH[2], aer)];
    }
  }
  return out;
}

module.exports = { sky, marchClouds, water, ground, ridges, density, norm, dot, clamp, sat, mix, smoothstep, fbm2, n2, PI };
