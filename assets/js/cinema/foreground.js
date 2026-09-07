/* Foreground layer — procedurally generated scenery silhouettes and particle
   fields, drawn to a single 2D canvas. Adjacent scenes cross-fade, and both
   layers parallax against the sky at different rates. */
(function (AD) {
  'use strict';

  function rng(seed) {
    var a = seed >>> 0;
    return function () {
      a += 0x6D2B79F5;
      var t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function seedOf(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  var N = 160; /* profile resolution */

  /* Each generator returns a profile: heights (0 = bottom of viewport,
     1 = top) sampled evenly across the width. */
  var SCENERY = {
    none: function () { return null; },

    waters: function (r) {
      return {
        layers: [profile(function (x) {
          return 0.145 + 0.006 * Math.sin(x * 22 + r() * 6) + 0.004 * Math.sin(x * 47);
        }, 0.9)],
        shimmer: true
      };
    },

    dunes: function (r) {
      var p1 = r() * 6, p2 = r() * 6;
      return { layers: [
        profile(function (x) { return 0.20 + 0.075 * Math.sin(x * 3.1 + p1) + 0.035 * Math.sin(x * 7.3 + p2); }, 0.55),
        profile(function (x) { return 0.12 + 0.055 * Math.sin(x * 2.2 + p2 + 1.7) + 0.02 * Math.sin(x * 5.9); }, 0.95)
      ] };
    },

    hills: function (r) {
      var p1 = r() * 6;
      return { layers: [
        profile(function (x) { return 0.23 + 0.06 * Math.sin(x * 2.4 + p1) + 0.03 * Math.sin(x * 5.1 + 2); }, 0.5),
        profile(function (x) { return 0.14 + 0.05 * Math.sin(x * 1.7 + p1 + 2.4); }, 0.92)
      ] };
    },

    mountains: function (r) {
      var ridge = fractalRidge(r, 0.42, 0.30);
      var back = fractalRidge(r, 0.30, 0.20);
      return { layers: [
        profile(function (x) { return sample(back, x); }, 0.45),
        profile(function (x) { return sample(ridge, x); }, 0.9)
      ] };
    },

    ruins: function (r) {
      var blocks = [];
      var x = 0;
      while (x < 1) {
        var w = 0.03 + r() * 0.06;
        var h = r() < 0.28 ? 0.10 + r() * 0.26 : 0.03 + r() * 0.05;
        blocks.push([x, Math.min(x + w, 1), h]);
        x += w + r() * 0.02;
      }
      return { layers: [
        profile(function (px) { return blockAt(blocks, px, 0.055); }, 0.92)
      ] };
    },

    colonnade: function () {
      var gap = 1 / 9;
      return { layers: [
        profile(function (x) {
          var f = (x % gap) / gap;
          return (f > 0.30 && f < 0.70) ? 0.40 : 0.085;
        }, 0.9)
      ] };
    },

    clouds: function (r) {
      var bands = [];
      for (var i = 0; i < 7; i++) {
        bands.push({ y: 0.30 + r() * 0.42, x: r(), w: 0.22 + r() * 0.35, h: 0.018 + r() * 0.03, a: 0.10 + r() * 0.18 });
      }
      return { bands: bands, layers: [] };
    },

    throne: function () {
      return { layers: [
        profile(function (x) {
          var c = Math.abs(x - 0.5);
          if (c < 0.13) return 0.30;
          if (c < 0.20) return 0.22;
          if (c < 0.30) return 0.15;
          return 0.09;
        }, 0.9)
      ], lightline: 0.32 };
    },

    city: function (r) {
      var towers = [];
      var x = 0;
      while (x < 1) {
        var w = 0.035 + r() * 0.05;
        var d = Math.abs(x + w / 2 - 0.5);
        var h = 0.13 + (0.34 - d * 0.5) * (0.5 + r() * 0.7);
        towers.push([x, Math.min(x + w, 1), Math.max(0.10, h)]);
        x += w + 0.006 + r() * 0.012;
      }
      return {
        layers: [profile(function (px) { return blockAt(towers, px, 0.10); }, 0.92)],
        shimmer: true, gates: true
      };
    }
  };

  function profile(fn, opacity) {
    var pts = new Float32Array(N + 1);
    for (var i = 0; i <= N; i++) pts[i] = fn(i / N);
    return { pts: pts, o: opacity };
  }
  function blockAt(blocks, x, base) {
    for (var i = 0; i < blocks.length; i++) {
      if (x >= blocks[i][0] && x <= blocks[i][1]) return blocks[i][2];
    }
    return base;
  }
  function fractalRidge(r, peak, base) {
    var a = [base, peak * (0.7 + r() * 0.5), base];
    for (var step = 0; step < 5; step++) {
      var next = [a[0]];
      for (var i = 1; i < a.length; i++) {
        var mid = (a[i - 1] + a[i]) / 2 + (r() - 0.5) * peak * 0.5 / (step + 1);
        next.push(Math.max(base * 0.6, mid), a[i]);
      }
      a = next;
    }
    return a;
  }
  function sample(arr, x) {
    var f = x * (arr.length - 1);
    var i = Math.floor(f), t = f - i;
    return arr[i] + (arr[Math.min(i + 1, arr.length - 1)] - arr[i]) * t;
  }

  /* ------------------------------------------------------------------ */
  /* particles                                                           */

  var KINDS = {
    stars:   { n: 46, size: [0.6, 1.7], vy: [-0.004, 0.004], vx: [-0.006, 0.006], life: [16, 30], glow: 0.9, twinkle: true },
    motes:   { n: 60, size: [0.7, 2.2], vy: [-0.14, -0.03], vx: [-0.05, 0.05], life: [10, 20], glow: 0.55 },
    dust:    { n: 70, size: [0.6, 1.8], vy: [-0.05, 0.05], vx: [0.10, 0.34], life: [8, 16], glow: 0.35 },
    ash:     { n: 80, size: [0.9, 2.6], vy: [0.09, 0.30], vx: [-0.10, 0.14], life: [9, 18], glow: 0.25, flutter: true },
    embers:  { n: 55, size: [0.8, 2.2], vy: [-0.30, -0.09], vx: [-0.06, 0.06], life: [7, 14], glow: 1.0, flutter: true },
    lowfog:  { n: 16, size: [40, 130], vy: [-0.01, 0.01], vx: [0.03, 0.12], life: [16, 30], glow: 0.10, soft: true, bottom: true },
    falling: { n: 26, size: [0.8, 1.9], vy: [0.7, 1.8], vx: [-0.5, -0.15], life: [3, 7], glow: 1.0, streak: true },
    rising:  { n: 62, size: [0.8, 2.4], vy: [-0.34, -0.12], vx: [-0.04, 0.04], life: [8, 16], glow: 1.0 },
    pollen:  { n: 58, size: [0.9, 2.4], vy: [-0.10, 0.02], vx: [-0.07, 0.10], life: [10, 20], glow: 0.75, flutter: true }
  };

  function Foreground(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext && canvas.getContext('2d');
    this.ok = !!this.ctx;
    this.parts = [];
    this.scenery = {};
    this.w = 0; this.h = 0;
    if (!this.ok) return;
    var self = this;
    AD.data.scenes.forEach(function (s) {
      var gen = SCENERY[s.scenery] || SCENERY.none;
      self.scenery[s.id] = gen(rng(seedOf(s.id)));
    });
    this.resize();
  }

  Foreground.prototype.resize = function () {
    if (!this.ok) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.w = window.innerWidth; this.h = window.innerHeight;
    this.canvas.width = Math.floor(this.w * dpr);
    this.canvas.height = Math.floor(this.h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  Foreground.prototype.spawn = function (kindName, reset) {
    var k = KINDS[kindName] || KINDS.motes;
    var r = Math.random;
    return {
      k: k, kind: kindName,
      x: r() * this.w,
      y: k.bottom ? this.h * (0.72 + r() * 0.3) : (reset ? (k.vy[0] < 0 ? this.h * (0.6 + r() * 0.5) : -20) : r() * this.h),
      s: k.size[0] + r() * (k.size[1] - k.size[0]),
      vx: (k.vx[0] + r() * (k.vx[1] - k.vx[0])) * 60,
      vy: (k.vy[0] + r() * (k.vy[1] - k.vy[0])) * 60,
      life: k.life[0] + r() * (k.life[1] - k.life[0]),
      age: reset ? 0 : r() * 6,
      ph: r() * Math.PI * 2,
      a: 0.35 + r() * 0.65
    };
  };

  /* Keep the pool sized to the incoming scene: particles age out and respawn
     in the new kind, so the field itself dissolves between scenes. */
  Foreground.prototype.tune = function (kindA, kindB, t) {
    var a = (KINDS[kindA] || KINDS.motes).n, b = (KINDS[kindB] || KINDS.motes).n;
    var want = Math.round(a + (b - a) * t);
    var target = t < 0.5 ? kindA : kindB;
    while (this.parts.length < want) this.parts.push(this.spawn(target, true));
    while (this.parts.length > want) this.parts.pop();
    this.nextKind = target;
  };

  Foreground.prototype.draw = function (opt) {
    if (!this.ok) return;
    var ctx = this.ctx, w = this.w, h = this.h;
    ctx.clearRect(0, 0, w, h);

    /* --- scenery, cross-faded and parallaxed ------------------------- */
    var silhouette = opt.silhouette;
    this.paintScenery(opt.sceneA, 1 - opt.t, opt.parallax, silhouette, opt.accent);
    this.paintScenery(opt.sceneB, opt.t, opt.parallax, silhouette, opt.accent);

    /* --- particles ---------------------------------------------------- */
    var dt = Math.min(opt.dt, 0.05);
    for (var i = 0; i < this.parts.length; i++) {
      var p = this.parts[i];
      p.age += dt;
      if (p.age > p.life || p.y < -60 || p.y > h + 60 || p.x < -80 || p.x > w + 80) {
        this.parts[i] = p = this.spawn(this.nextKind || p.kind, true);
      }
      var flut = p.k.flutter ? Math.sin(opt.time * 0.0011 + p.ph) * 14 : 0;
      p.x += (p.vx + flut) * dt;
      p.y += p.vy * dt;

      var fade = Math.min(p.age / 1.4, 1) * Math.min((p.life - p.age) / 1.6, 1);
      var alpha = Math.max(0, p.a * fade * p.k.glow);
      if (p.k.twinkle) alpha *= 0.5 + 0.5 * Math.sin(opt.time * 0.002 + p.ph);
      if (alpha <= 0.002) continue;

      var py = p.y + opt.parallax * 26;
      if (p.k.soft) {
        var g = ctx.createRadialGradient(p.x, py, 0, p.x, py, p.s);
        g.addColorStop(0, 'rgba(' + opt.fogRGB + ',' + (alpha * 0.55).toFixed(3) + ')');
        g.addColorStop(1, 'rgba(' + opt.fogRGB + ',0)');
        ctx.fillStyle = g;
        ctx.fillRect(p.x - p.s, py - p.s, p.s * 2, p.s * 2);
      } else if (p.k.streak) {
        ctx.strokeStyle = 'rgba(' + opt.accentRGB + ',' + alpha.toFixed(3) + ')';
        ctx.lineWidth = p.s * 0.8;
        ctx.beginPath();
        ctx.moveTo(p.x, py);
        ctx.lineTo(p.x - p.vx * 0.22, py - p.vy * 0.22);
        ctx.stroke();
      } else {
        ctx.fillStyle = 'rgba(' + opt.accentRGB + ',' + alpha.toFixed(3) + ')';
        ctx.beginPath();
        ctx.arc(p.x, py, p.s, 0, 6.2832);
        ctx.fill();
      }
    }
  };

  Foreground.prototype.paintScenery = function (sceneId, alpha, parallax, silhouette, accentRGB) {
    if (alpha <= 0.004) return;
    var sc = this.scenery[sceneId];
    if (!sc) return;
    var ctx = this.ctx, w = this.w, h = this.h;
    var shift = parallax * 60;

    if (sc.bands) {
      for (var b = 0; b < sc.bands.length; b++) {
        var d = sc.bands[b];
        var cy = h * (1 - d.y) + shift * 0.5;
        var g = ctx.createRadialGradient(w * d.x, cy, 0, w * d.x, cy, w * d.w);
        g.addColorStop(0, 'rgba(' + accentRGB + ',' + (d.a * alpha).toFixed(3) + ')');
        g.addColorStop(1, 'rgba(' + accentRGB + ',0)');
        ctx.fillStyle = g;
        ctx.save();
        ctx.translate(w * d.x, cy);
        ctx.scale(1, d.h / d.w);
        ctx.beginPath(); ctx.arc(0, 0, w * d.w, 0, 6.2832); ctx.fill();
        ctx.restore();
      }
    }

    if (sc.lightline) {
      var ly = h * (1 - sc.lightline) + shift * 0.6;
      var lg = ctx.createLinearGradient(0, ly - 26, 0, ly + 26);
      lg.addColorStop(0, 'rgba(' + accentRGB + ',0)');
      lg.addColorStop(0.5, 'rgba(255,255,255,' + (0.5 * alpha).toFixed(3) + ')');
      lg.addColorStop(1, 'rgba(' + accentRGB + ',0)');
      ctx.fillStyle = lg;
      ctx.fillRect(0, ly - 26, w, 52);
    }

    for (var i = 0; i < sc.layers.length; i++) {
      var layer = sc.layers[i];
      var depth = 0.35 + 0.65 * (i / Math.max(sc.layers.length - 1, 1));
      ctx.fillStyle = 'rgba(' + silhouette + ',' + (layer.o * alpha).toFixed(3) + ')';
      ctx.beginPath();
      ctx.moveTo(0, h + 2);
      for (var j = 0; j <= N; j++) {
        var x = (j / N) * w;
        var y = h - layer.pts[j] * h + shift * depth;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h + 2);
      ctx.closePath();
      ctx.fill();
    }

    if (sc.shimmer) {
      var top = h - (sc.layers[sc.layers.length - 1].pts[0]) * h + shift;
      var sg = ctx.createLinearGradient(0, top, 0, h);
      sg.addColorStop(0, 'rgba(' + accentRGB + ',' + (0.14 * alpha).toFixed(3) + ')');
      sg.addColorStop(1, 'rgba(' + accentRGB + ',0)');
      ctx.fillStyle = sg;
      ctx.fillRect(0, top, w, h - top);
    }
  };

  AD.foreground = { create: function (c) { return new Foreground(c); } };
})(window.AD);
