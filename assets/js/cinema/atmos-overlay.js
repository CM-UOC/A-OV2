/* Motion over the plates: drifting haze, light shafts and embers, drawn to a
   canvas so the stills feel like moving footage rather than photographs. */
(function (AD) {
  'use strict';

  function Overlay(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext && canvas.getContext('2d');
    this.ok = !!this.ctx;
    this.puffs = [];
    this.w = 0; this.h = 0;
    if (this.ok) this.resize();
  }

  Overlay.prototype.resize = function () {
    if (!this.ok) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    this.w = window.innerWidth; this.h = window.innerHeight;
    this.canvas.width = Math.floor(this.w * dpr);
    this.canvas.height = Math.floor(this.h * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.puffs = [];
    var n = Math.round(this.w / 150);
    for (var i = 0; i < n; i++) {
      this.puffs.push({
        x: Math.random() * this.w, y: this.h * (0.12 + Math.random() * 0.62),
        r: 120 + Math.random() * 320, v: 3 + Math.random() * 9,
        a: 0.020 + Math.random() * 0.045, ph: Math.random() * 6.28
      });
    }
  };

  /* opt: { time, dt, accent [r,g,b], sunX, sunY, rays, haze, parallax } */
  Overlay.prototype.draw = function (opt) {
    if (!this.ok) return;
    var ctx = this.ctx, w = this.w, h = this.h;
    ctx.clearRect(0, 0, w, h);
    var acc = opt.accent;

    /* volumetric shafts from the sun, slowly breathing */
    if (opt.rays > 0.01 && opt.sunX > -w && opt.sunX < 2 * w) {
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      var beams = 7;
      for (var b = 0; b < beams; b++) {
        var ph = opt.time * 0.00007 + b * 1.7;
        var spread = 0.30 + 0.16 * Math.sin(ph);
        var ang = -Math.PI / 2 + (b - (beams - 1) / 2) * spread * 0.34;
        var len = h * 2.0;
        var wid = (h * 0.055) * (0.6 + 0.6 * Math.abs(Math.sin(ph * 1.7)));
        var ex = opt.sunX + Math.cos(ang) * len, ey = opt.sunY - Math.sin(ang) * len;
        var g = ctx.createLinearGradient(opt.sunX, opt.sunY, ex, ey);
        var al = opt.rays * (0.045 + 0.035 * Math.sin(ph * 2.1));
        g.addColorStop(0, 'rgba(' + acc + ',' + al.toFixed(3) + ')');
        g.addColorStop(1, 'rgba(' + acc + ',0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.moveTo(opt.sunX, opt.sunY);
        ctx.lineTo(ex - Math.sin(ang) * wid, ey - Math.cos(ang) * wid);
        ctx.lineTo(ex + Math.sin(ang) * wid, ey + Math.cos(ang) * wid);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

    /* haze rolling across the frame */
    if (opt.haze > 0.01) {
      ctx.save();
      for (var i = 0; i < this.puffs.length; i++) {
        var p = this.puffs[i];
        p.x += p.v * opt.dt;
        if (p.x - p.r > w) p.x = -p.r;
        var y = p.y + Math.sin(opt.time * 0.00013 + p.ph) * 14 + opt.parallax * 18;
        var gr = ctx.createRadialGradient(p.x, y, 0, p.x, y, p.r);
        var a = p.a * opt.haze;
        gr.addColorStop(0, 'rgba(' + acc + ',' + a.toFixed(3) + ')');
        gr.addColorStop(0.55, 'rgba(' + acc + ',' + (a * 0.35).toFixed(3) + ')');
        gr.addColorStop(1, 'rgba(' + acc + ',0)');
        ctx.fillStyle = gr;
        ctx.beginPath(); ctx.arc(p.x, y, p.r, 0, 6.2832); ctx.fill();
      }
      ctx.restore();
    }
  };

  AD.overlay = { create: function (c) { return new Overlay(c); } };
})(window.AD);
