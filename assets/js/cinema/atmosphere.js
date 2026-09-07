/* Atmosphere renderer.

   A single full-screen fragment shader that raymarches a real environment:
   analytic Rayleigh/Mie sky, volumetric clouds with a light march, ridged
   terrain with aerial perspective, an animated water plane with sun glitter,
   volumetric shafts, and a filmic grade. Every parameter is interpolated
   between scenes, and the camera is a real 3-D camera moved by scroll.

   Nothing is loaded: there are no image, video or texture assets. */
(function (AD) {
  'use strict';

  var VERT = 'attribute vec2 aPos; void main(){ gl_Position = vec4(aPos, 0.0, 1.0); }';

  var FRAG = [
    '#ifdef GL_FRAGMENT_PRECISION_HIGH',
    'precision highp float;',
    '#else',
    'precision mediump float;',
    '#endif',

    'uniform vec2  uRes;',
    'uniform float uTime;',
    'uniform vec3  uCamPos;',
    'uniform vec3  uCamRight, uCamUp, uCamFwd;',
    'uniform float uFocal;',
    'uniform vec3  uSunDir;',
    'uniform float uSunI, uEclipse, uMoon;',
    'uniform vec4  uCloud;',
    'uniform float uCloudSpeed;',
    'uniform vec4  uTerrA;',
    'uniform vec4  uTerrB;',
    'uniform float uTerrMix;',
    'uniform vec3  uWater;',
    'uniform vec3  uLift, uGain, uTint;',
    'uniform float uSat, uStars, uSteps, uLightSteps, uGrain;',

    'const float PI = 3.14159265;',
    'const vec3  betaR = vec3(5.8e-3, 13.5e-3, 33.1e-3);',
    'const float betaM = 4.2e-3;',

    'float h1(float n){ return fract(sin(n) * 43758.5453123); }',
    'float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }',

    'float n2(vec2 p){',
    '  vec2 i = floor(p), f = fract(p);',
    '  vec2 u = f * f * (3.0 - 2.0 * f);',
    '  return mix(mix(h2(i), h2(i + vec2(1.0, 0.0)), u.x), mix(h2(i + vec2(0.0, 1.0)), h2(i + vec2(1.0, 1.0)), u.x), u.y);',
    '}',

    'float n3(vec3 p){',
    '  vec3 i = floor(p), f = fract(p);',
    '  f = f * f * (3.0 - 2.0 * f);',
    '  float n = i.x + i.y * 157.0 + i.z * 113.0;',
    '  return mix(mix(mix(h1(n), h1(n + 1.0), f.x), mix(h1(n + 157.0), h1(n + 158.0), f.x), f.y),',
    '             mix(mix(h1(n + 113.0), h1(n + 114.0), f.x), mix(h1(n + 270.0), h1(n + 271.0), f.x), f.y), f.z);',
    '}',

    'float fbm3(vec3 p){',
    '  float v = 0.0, a = 0.5;',
    '  for (int i = 0; i < 4; i++) { v += a * n3(p); p = p * 2.03 + vec3(3.7, 1.9, 5.1); a *= 0.5; }',
    '  return v;',
    '}',
    'float fbm2(vec2 p){',
    '  float v = 0.0, a = 0.5;',
    '  for (int i = 0; i < 5; i++) { v += a * n2(p); p = p * 2.05 + 11.3; a *= 0.5; }',
    '  return v;',
    '}',

    'float phaseR(float mu){ return 3.0 / (16.0 * PI) * (1.0 + mu * mu); }',
    'float phaseM(float mu, float g){',
    '  float g2 = g * g;',
    '  return 3.0 / (8.0 * PI) * ((1.0 - g2) * (1.0 + mu * mu)) /',
    '         ((2.0 + g2) * pow(max(1.0 + g2 - 2.0 * g * mu, 1e-4), 1.5));',
    '}',
    'float od(float c){',
    '  float th = degrees(acos(clamp(c, -1.0, 1.0)));',
    '  return 1.0 / (max(c, 0.0) + 0.15 * pow(max(93.885 - th, 0.001), -1.253));',
    '}',

    'vec3 skyCol(vec3 rd, vec3 sd){',
    '  float mu = dot(rd, sd);',
    '  float sR = od(rd.y) * 8.4, sM = od(rd.y) * 1.25;',
    '  float uR = od(sd.y) * 8.4, uM = od(sd.y) * 1.25;',
    '  vec3 ext = exp(-(betaR * (sR + uR) + betaM * (sM + uM)));',
    '  vec3 ins = (betaR * phaseR(mu) * 8.4 + vec3(betaM * phaseM(mu, 0.76) * 1.25)) * ext;',
    '  vec3 col = ins * uSunI;',
    '  float night = smoothstep(0.06, -0.16, sd.y);',
    '  col += vec3(0.008, 0.013, 0.030) * night * (0.35 + 0.65 * smoothstep(-0.1, 0.6, rd.y));',
    '  return col;',
    '}',

    'vec3 stars(vec3 rd){',
    '  if (uStars < 0.01 || rd.y < -0.02) return vec3(0.0);',
    '  vec2 sp = vec2(atan(rd.z, rd.x) * 62.0, asin(clamp(rd.y, -1.0, 1.0)) * 62.0);',
    '  vec2 c = floor(sp);',
    '  float hh = h2(c);',
    '  float on = step(0.9955, hh);',
    '  float d = length(fract(sp) - 0.5);',
    '  float pt = max(1.0 - d * 3.4, 0.0);',
    '  float tw = 0.55 + 0.45 * sin(uTime * 0.0014 * (1.0 + hh * 7.0) + hh * 51.0);',
    '  vec3 tint = mix(vec3(0.75, 0.82, 1.0), vec3(1.0, 0.92, 0.80), h2(c + 7.3));',
    '  return tint * on * pow(pt, 2.2) * tw * uStars * smoothstep(-0.02, 0.18, rd.y) * (0.45 + 0.9 * hh);',
    '}',

    'float cloudDensity(vec3 p){',
    '  float base = uCloud.z, top = uCloud.w;',
    '  float hgt = clamp((p.y - base) / max(top - base, 1e-3), 0.0, 1.0);',
    '  float shape = smoothstep(0.0, 0.22, hgt) * smoothstep(1.0, 0.58, hgt);',
    '  vec3 q = p * 0.0011;',
    '  q.xz += uTime * 0.00002 * uCloudSpeed * vec2(1.0, 0.35);',
    '  float f = fbm3(q);',
    '  f += 0.28 * fbm3(q * 3.7 + 4.1) - 0.14;',
    '  float d = (f - (1.0 - uCloud.x)) * shape;',
    '  return clamp(d * uCloud.y * 4.2, 0.0, 1.0);',
    '}',

    'float lightMarch(vec3 p, vec3 sd){',
    '  float t = 0.0, dens = 0.0;',
    '  float stepL = (uCloud.w - uCloud.z) / max(uLightSteps, 1.0) * 0.55;',
    '  for (int i = 0; i < 6; i++){',
    '    if (float(i) >= uLightSteps) break;',
    '    t += stepL;',
    '    dens += cloudDensity(p + sd * t);',
    '  }',
    '  return exp(-dens * stepL * 0.011);',
    '}',

    'vec4 marchClouds(vec3 ro, vec3 rd, vec3 sd){',
    '  if (rd.y < -0.02) return vec4(0.0, 0.0, 0.0, 1.0);',
    '  float base = uCloud.z, top = uCloud.w;',
    '  float t0 = (base - ro.y) / max(rd.y, 1e-3);',
    '  float t1 = (top  - ro.y) / max(rd.y, 1e-3);',
    '  t0 = max(t0, 0.0);',
    '  if (t1 <= t0) return vec4(0.0, 0.0, 0.0, 1.0);',
    '  t1 = min(t1, t0 + 26000.0);',
    '  float stepT = (t1 - t0) / uSteps;',
    '  float mu = dot(rd, sd);',
    '  float ph = mix(phaseM(mu, 0.62), phaseM(mu, -0.18), 0.35) * 5.6 + 0.22;',
    '  vec3 sunLight = uSunI * vec3(1.0, 0.94, 0.86) * 0.0060;',
    '  vec3 ambTop = skyCol(vec3(0.0, 1.0, 0.0), sd) * 1.3;',
    '  vec3 ambBot = skyCol(normalize(vec3(rd.x, 0.06, rd.z)), sd) * 0.5;',
    '  float T = 1.0;',
    '  vec3 acc = vec3(0.0);',
    '  float t = t0 + stepT * h2(gl_FragCoord.xy) * 0.9;',
    '  for (int i = 0; i < 40; i++){',
    '    if (float(i) >= uSteps || T < 0.02) break;',
    '    vec3 p = ro + rd * t;',
    '    float d = cloudDensity(p);',
    '    if (d > 0.001){',
    '      float lt = lightMarch(p, sd);',
    '      float hgt = clamp((p.y - base) / max(top - base, 1e-3), 0.0, 1.0);',
    '      vec3 amb = mix(ambBot, ambTop, hgt) * 0.22;',
    '      vec3 lum = sunLight * lt * ph + amb * (0.35 + 0.65 * hgt);',
    '      float dt = d * stepT * 0.0019;',
    '      acc += lum * dt * T;',
    '      T *= exp(-dt);',
    '    }',
    '    t += stepT;',
    '  }',
    '  return vec4(acc, T);',
    '}',

    'float ridge(float x){ return 1.0 - abs(2.0 * n2(vec2(x, 0.0)) - 1.0); }',

    'float profile(float type, float az, float layer){',
    '  float f = az * (1.6 + layer * 1.2) + layer * 21.7;',
    '  if (type < 0.5) return 0.0;',
    '  if (type < 1.5) return fbm2(vec2(f, 3.1)) * 0.9 + 0.15;',
    '  if (type < 2.5) return fbm2(vec2(f * 0.7, 8.4)) * 0.8 + 0.25;',
    '  if (type < 3.5) {',
    '    float b = floor(f * 7.0) * 0.1428;',
    '    float t = h2(vec2(b, layer));',
    '    float br = t > 0.55 ? 0.55 + t * 0.75 : 0.12 + t * 0.22;',
    '    return max(br * (0.55 + 0.45 * n2(vec2(f * 0.7, layer))), 0.13);',
    '  }',
    '  if (type < 4.5) {',
    '    float c = fract(f * 1.9);',
    '    return 0.22 + ((c > 0.34 && c < 0.66) ? 0.72 : 0.0);',
    '  }',
    '  if (type < 5.5) return pow(ridge(f * 0.8), 1.6) * 1.7 + 0.12;',
    '  if (type < 6.5) {',
    '    float b = floor(f * 5.0) * 0.2;',
    '    float t = h2(vec2(b, layer * 3.0));',
    '    float twr = t > 0.60 ? 0.62 + t * 0.95 : 0.26 + t * 0.30;',
    '    return twr * (1.0 - 0.30 * abs(az) / PI);',
    '  }',
    '  return fbm2(vec2(f * 0.5, 2.0)) * 0.5 + 0.35;',
    '}',

    'vec3 ridges(vec3 rd, vec3 sd, vec3 skyc, out float hit){',
    '  hit = 0.0;',
    '  vec3 col = vec3(0.0);',
    '  float layers = max(uTerrA.z, uTerrB.z);',
    '  float az = atan(rd.x, rd.z);',
    '  for (int i = 0; i < 4; i++){',
    '    float li = float(i);',
    '    if (li >= layers) break;',
    '    float pa = profile(uTerrA.x, az, li) * uTerrA.y;',
    '    float pb = profile(uTerrB.x, az, li) * uTerrB.y;',
    '    float p = mix(pa, pb, uTerrMix);',
    '    float drop = 0.020 + li * 0.016;',
    '    float ridgeY = -drop + p * (1.0 - li * 0.16);',
    '    if (rd.y < ridgeY && rd.y > -0.0015){',
    '      hit = 1.0;',
    '      float near = li / max(layers - 1.0, 1.0);',
    '      float haze = mix(uTerrA.w, uTerrB.w, uTerrMix);',
    '      float below = max(ridgeY - rd.y, 0.0);',
    '      float aer = clamp(mix(0.88, 0.22, near) * haze * exp(-below * 9.0), 0.0, 1.0);',
    '      vec3 rock = mix(vec3(0.045, 0.038, 0.034), vec3(0.20, 0.172, 0.14), near);',
    '      float sunAz = atan(sd.x, sd.z);',
    '      float rim = pow(max(1.0 - abs(mod(az - sunAz + PI, 2.0 * PI) - PI) / 1.15, 0.0), 3.0);',
    '      float slope = smoothstep(ridgeY - 0.012, ridgeY, rd.y);',
    '      float key = clamp(max(sd.y + 0.18, 0.0) * uSunI * 0.055, 0.0, 1.6);',
    '      vec3 lit = rock * (0.30 + key) + skyc * 0.34 + vec3(1.0, 0.86, 0.66) * rim * slope * 0.8 * key;',
    '      col = mix(lit, skyc, aer);',
    '    }',
    '  }',
    '  return col;',
    '}',

    'vec3 albedoFor(float type){',
    '  if (type < 0.5) return vec3(0.10, 0.10, 0.11);',
    '  if (type < 1.5) return vec3(0.46, 0.36, 0.24);',
    '  if (type < 2.5) return vec3(0.26, 0.27, 0.19);',
    '  if (type < 3.5) return vec3(0.34, 0.30, 0.25);',
    '  if (type < 4.5) return vec3(0.40, 0.37, 0.32);',
    '  if (type < 5.5) return vec3(0.22, 0.21, 0.20);',
    '  if (type < 6.5) return vec3(0.34, 0.33, 0.29);',
    '  return vec3(0.72, 0.74, 0.80);',
    '}',

    'vec3 groundPlane(vec3 ro, vec3 rd, vec3 sd, vec3 skyc, out float hit){',
    '  hit = 0.0;',
    '  if (rd.y > -0.0015) return vec3(0.0);',
    '  float t = -ro.y / rd.y;',
    '  if (t <= 0.0 || t > 4000.0) return vec3(0.0);',
    '  hit = 1.0;',
    '  vec3 p = ro + rd * t;',
    '  float detail = 1.0 / (1.0 + t * 0.0018);',
    '  float typ = uTerrMix < 0.5 ? uTerrA.x : uTerrB.x;',
    '  vec3 alb = albedoFor(typ);',
    '  float sc = 0.055, e = 0.35;',
    '  float f0 = fbm2(p.xz * sc);',
    '  float fx = fbm2((p.xz + vec2(e, 0.0)) * sc);',
    '  float fz = fbm2((p.xz + vec2(0.0, e)) * sc);',
    '  float amp = 0.9 * detail;',
    '  vec3 n = normalize(vec3(-(fx - f0) / e * amp, 1.0, -(fz - f0) / e * amp));',
    '  float E = uSunI * max(dot(n, sd), 0.0) * 0.055;',
    '  vec3 amb = skyc * 1.8 * (0.5 + 0.5 * n.y);',
    '  float patch = fbm2(p.xz * sc * 0.11);',
    '  vec3 alb2 = alb * vec3(0.78 + 0.5 * patch, 0.82 + 0.4 * patch, 0.86 + 0.3 * patch);',
    '  vec3 col = alb2 * (vec3(E, E * 0.94, E * 0.86) + amb) * (0.62 + 0.38 * f0);',
    '  float fog = 1.0 - exp(-t * 0.0016);',
    '  return mix(col, skyc, clamp(fog, 0.0, 1.0));',
    '}',

    'vec3 water(vec3 ro, vec3 rd, vec3 sd, vec3 skyc, out float hit){',
    '  hit = 0.0;',
    '  if (uWater.x < 0.5 || rd.y > -0.004) return vec3(0.0);',
    '  float t = (uWater.z - ro.y) / rd.y;',
    '  if (t <= 0.0) return vec3(0.0);',
    '  hit = 1.0;',
    '  vec3 p = ro + rd * t;',
    '  float fade = 1.0 / (1.0 + t * t * 0.0000009);',
    '  float amp = uWater.y * fade;',
    '  vec2 w = p.xz * 0.03;',
    '  float tt = uTime * 0.00055;',
    '  float e = 0.06;',
    '  float f0 = fbm2(w + vec2(tt, tt * 0.6));',
    '  float fx = fbm2(w + vec2(e, 0.0) + vec2(tt, tt * 0.6));',
    '  float fz = fbm2(w + vec2(0.0, e) + vec2(tt, tt * 0.6));',
    '  vec3 n = normalize(vec3(-(fx - f0) / e * amp, 1.0, -(fz - f0) / e * amp));',
    '  vec3 refl = reflect(rd, n);',
    '  refl.y = abs(refl.y) + 0.006;',
    '  vec3 rc = skyCol(refl, sd);',
    '  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(-rd, n), 0.0), 5.0);',
    '  vec3 deep = mix(vec3(0.010, 0.020, 0.032), skyc, 0.58);',
    '  vec3 col = mix(deep, rc, clamp(fres * 1.25, 0.0, 1.0));',
    '  vec3 hv = normalize(sd - rd);',
    '  float spec = pow(max(dot(n, hv), 0.0), mix(900.0, 90.0, clamp(uWater.y * 6.0, 0.0, 1.0)));',
    '  col += vec3(1.0, 0.93, 0.80) * spec * uSunI * 0.05 * max(sd.y + 0.12, 0.0);',
    '  float glint = pow(max(dot(refl, sd), 0.0), 24.0);',
    '  col += vec3(1.0, 0.90, 0.74) * glint * 0.35 * fade * max(sd.y + 0.08, 0.0);',
    '  float fog = 1.0 - exp(-t * 0.0012);',
    '  return mix(col, skyc, clamp(fog, 0.0, 1.0));',
    '}',

    'vec3 aces(vec3 x){',
    '  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);',
    '}',

    'void main(){',
    '  vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;',
    '  vec3 rd = normalize(uCamFwd * uFocal + uCamRight * uv.x + uCamUp * uv.y);',
    '  vec3 ro = uCamPos;',
    '  vec3 sd = uSunDir;',

    '  vec3 col = skyCol(rd, sd) + stars(rd);',

    '  float mu = dot(rd, sd);',
    '  float ang = acos(clamp(mu, -1.0, 1.0));',
    '  float discR = mix(0.0092, 0.021, uMoon);',
    '  float disc = 1.0 - smoothstep(discR * 0.86, discR, ang);',
    '  float bloom = pow(max(1.0 - ang / 0.42, 0.0), 3.4);',
    '  vec3 discCol = mix(vec3(1.0, 0.94, 0.82), vec3(0.86, 0.90, 1.0), uMoon);',
    '  if (uEclipse > 0.5){',
    '    float corona = pow(max(1.0 - ang / 0.10, 0.0), 2.4);',
    '    float shadow = 1.0 - smoothstep(discR * 0.70, discR * 0.82, ang);',
    '    col += discCol * corona * 0.22 * (1.0 - shadow);',
    '    col += vec3(0.55, 0.70, 1.0) * pow(max(1.0 - ang / 0.55, 0.0), 5.0) * 0.02;',
    '  } else {',
    '    col += discCol * disc * uSunI * 0.030;',
    '    col += discCol * bloom * uSunI * 0.0030;',
    '  }',

    '  vec4 cl = marchClouds(ro, rd, sd);',
    '  col = col * cl.w + cl.xyz;',

    '  float shaft = pow(max(mu, 0.0), 14.0) * (1.0 - cl.w) * 0.55 + pow(max(mu, 0.0), 5.0) * cl.w * 0.10;',
    '  col += discCol * shaft * uSunI * 0.006 * (1.0 - uEclipse * 0.85);',

    '  vec3 skyH = skyCol(normalize(vec3(rd.x, max(rd.y, 0.0) + 0.004, rd.z)), sd) * cl.w + cl.xyz * 0.45;',
    '  float rh = 0.0;',
    '  vec3 rc2 = ridges(rd, sd, skyH, rh);',
    '  col = mix(col, rc2, rh);',
    '  float wh = 0.0;',
    '  vec3 wc = water(ro, rd, sd, skyH, wh);',
    '  if (wh > 0.5) { col = wc; }',
    '  else if (uTerrA.x > 0.5 || uTerrB.x > 0.5) {',
    '    float gh = 0.0;',
    '    vec3 gc = groundPlane(ro, rd, sd, skyH, gh);',
    '    if (gh > 0.5) col = gc;',
    '  }',

    '  col = col * uGain + uLift;',
    '  float lum = dot(col, vec3(0.2126, 0.7152, 0.0722));',
    '  col = mix(vec3(lum), col, uSat);',
    '  col = mix(col, col * uTint * 1.35, 0.16);',
    '  col = aces(col * 6.0);',

    '  vec2 q = (gl_FragCoord.xy / uRes - 0.5) * vec2(uRes.x / uRes.y * 0.80, 1.0);',
    '  col *= mix(0.44, 1.0, 1.0 - smoothstep(0.34, 1.18, length(q)));',
    '  float lm = dot(col, vec3(0.299, 0.587, 0.114));',
    '  col += uTint * pow(max(lm - 0.86, 0.0), 2.0) * 0.30;',
    '  col += (h2(gl_FragCoord.xy + fract(uTime * 0.001) * 91.7) - 0.5) * uGrain;',
    '  gl_FragColor = vec4(max(col, 0.0), 1.0);',
    '}'
  ].join('\n');

  function compile(gl, type, src) {
    var sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      if (window.console) console.warn('atmosphere shader:', gl.getShaderInfoLog(sh));
      return null;
    }
    return sh;
  }

  var UNIFORMS = ['uRes', 'uTime', 'uCamPos', 'uCamRight', 'uCamUp', 'uCamFwd', 'uFocal',
    'uSunDir', 'uSunI', 'uEclipse', 'uMoon', 'uCloud', 'uCloudSpeed', 'uTerrA', 'uTerrB',
    'uTerrMix', 'uWater', 'uLift', 'uGain', 'uTint', 'uSat', 'uStars', 'uSteps',
    'uLightSteps', 'uGrain'];

  function Renderer(canvas) {
    this.canvas = canvas;
    this.ok = false;
    this.scale = 1;
    var gl = null;
    try {
      gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false, powerPreference: 'high-performance' })
        || canvas.getContext('experimental-webgl');
    } catch (e) { gl = null; }
    if (!gl) return;

    var vs = compile(gl, gl.VERTEX_SHADER, VERT);
    var fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;
    var prog = gl.createProgram();
    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      if (window.console) console.warn('atmosphere link:', gl.getProgramInfoLog(prog));
      return;
    }
    gl.useProgram(prog);

    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    this.gl = gl;
    this.u = {};
    var self = this;
    UNIFORMS.forEach(function (n) { self.u[n] = gl.getUniformLocation(prog, n); });
    this.ok = true;
  }

  Renderer.prototype.resize = function (scale) {
    if (!this.ok) return;
    this.scale = scale;
    var dpr = Math.min(window.devicePixelRatio || 1, 2) * scale;
    var w = Math.max(2, Math.floor(window.innerWidth * dpr));
    var h = Math.max(2, Math.floor(window.innerHeight * dpr));
    if (this.canvas.width === w && this.canvas.height === h) return;
    this.canvas.width = w; this.canvas.height = h;
    this.gl.viewport(0, 0, w, h);
  };

  Renderer.prototype.draw = function (s, time) {
    if (!this.ok) return;
    var gl = this.gl, u = this.u;
    gl.uniform2f(u.uRes, this.canvas.width, this.canvas.height);
    gl.uniform1f(u.uTime, time);
    gl.uniform3fv(u.uCamPos, s.camPos);
    gl.uniform3fv(u.uCamRight, s.camRight);
    gl.uniform3fv(u.uCamUp, s.camUp);
    gl.uniform3fv(u.uCamFwd, s.camFwd);
    gl.uniform1f(u.uFocal, s.focal);
    gl.uniform3fv(u.uSunDir, s.sunDir);
    gl.uniform1f(u.uSunI, s.sunI);
    gl.uniform1f(u.uEclipse, s.eclipse);
    gl.uniform1f(u.uMoon, s.moon);
    gl.uniform4fv(u.uCloud, s.cloud);
    gl.uniform1f(u.uCloudSpeed, s.cloudSpeed);
    gl.uniform4fv(u.uTerrA, s.terrA);
    gl.uniform4fv(u.uTerrB, s.terrB);
    gl.uniform1f(u.uTerrMix, s.terrMix);
    gl.uniform3fv(u.uWater, s.water);
    gl.uniform3fv(u.uLift, s.lift);
    gl.uniform3fv(u.uGain, s.gain);
    gl.uniform3fv(u.uTint, s.tint);
    gl.uniform1f(u.uSat, s.sat);
    gl.uniform1f(u.uStars, s.starAmount);
    gl.uniform1f(u.uSteps, s.steps);
    gl.uniform1f(u.uLightSteps, s.lightSteps);
    gl.uniform1f(u.uGrain, s.grain);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };

  /* ------------------------------------------------------------------ */
  /* scene interpolation and camera                                      */

  var TERR = { none: 0, dunes: 1, hills: 2, ruins: 3, colonnade: 4, mountains: 5, city: 6, cloudsea: 7 };

  function lerp(a, b, t) { return a + (b - a) * t; }
  function lerp3(a, b, t) { return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)]; }
  function rad(d) { return d * Math.PI / 180; }

  AD.atmos = {
    create: function (c) { return new Renderer(c); },
    TERR: TERR,

    /* Build the uniform bundle for a position between two scenes.
       `local` is progress inside scene A (0..1) and drives the camera move. */
    state: function (a, b, t, local, quality) {
      var sunElev = lerp(a.sun.elev, b.sun.elev, t);
      var sunAzim = lerp(a.sun.azim, b.sun.azim, t);
      var se = rad(sunElev), sa = rad(sunAzim);
      var sunDir = [Math.sin(sa) * Math.cos(se), Math.sin(se), Math.cos(sa) * Math.cos(se)];

      var ca = a.camera, cb = b.camera;
      var ease = local * local * (3 - 2 * local);
      var yaw = rad(lerp(ca.yaw + ca.dYaw * ease, cb.yaw + cb.dYaw * ease, t));
      var pitch = rad(lerp(ca.pitch + ca.dPitch * ease, cb.pitch + cb.dPitch * ease, t));
      var h = lerp(ca.h + ca.dH * ease, cb.h + cb.dH * ease, t);
      var fov = lerp(ca.fov, cb.fov, t);

      var cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      var fwd = [sy * cp, sp, cy * cp];
      var right = [cy, 0, -sy];
      var up = [-sy * sp, cp, -cy * sp];

      return {
        camPos: [0, h, 0], camFwd: fwd, camRight: right, camUp: up,
        focal: 1 / Math.tan(rad(fov) / 2),
        sunDir: sunDir,
        sunI: lerp(a.sun.intensity, b.sun.intensity, t),
        eclipse: lerp(a.sun.eclipse, b.sun.eclipse, t),
        moon: lerp(a.sun.moon ? 1 : 0, b.sun.moon ? 1 : 0, t),
        cloud: [lerp(a.clouds.coverage, b.clouds.coverage, t),
                lerp(a.clouds.density, b.clouds.density, t),
                lerp(a.clouds.base, b.clouds.base, t),
                lerp(a.clouds.top, b.clouds.top, t)],
        cloudSpeed: lerp(a.clouds.speed, b.clouds.speed, t),
        terrA: [TERR[a.terrain.type], a.terrain.height, a.terrain.layers, a.terrain.haze],
        terrB: [TERR[b.terrain.type], b.terrain.height, b.terrain.layers, b.terrain.haze],
        terrMix: t,
        water: [(a.water.on || b.water.on) ? 1 : 0,
                lerp(a.water.on ? a.water.rough : 0, b.water.on ? b.water.rough : 0, t),
                lerp(a.water.level, b.water.level, t)],
        lift: lerp3(a.grade.lift, b.grade.lift, t),
        gain: lerp3(a.grade.gain, b.grade.gain, t),
        tint: lerp3(a.grade._tint, b.grade._tint, t),
        sat: lerp(a.grade.sat, b.grade.sat, t),
        starAmount: Math.max(0, Math.min(1, 1 - (sunElev + 4) / 8)),
        steps: quality.steps, lightSteps: quality.lightSteps, grain: quality.grain,
        accent: lerp3(a.grade._tint, b.grade._tint, t),
        sunElev: sunElev
      };
    },

    lerp: lerp
  };
})(window.AD);
