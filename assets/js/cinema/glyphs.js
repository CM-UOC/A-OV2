/* Animated symbol glyphs — line art drawn in SVG, stroked on as each scene
   arrives. One glyph per scene; the mark is the scene's own symbol, not decoration. */
(function (AD) {
  'use strict';
  var s = AD.util.svg;

  function p(d, delay) {
    return s('path', { d: d, class: 'glyph__p', style: 'animation-delay:' + delay + 'ms' });
  }
  function c(cx, cy, r, delay) {
    return s('circle', { cx: cx, cy: cy, r: r, class: 'glyph__p', style: 'animation-delay:' + delay + 'ms' });
  }

  var G = {
    seed: function () {
      return [c(60, 60, 3.5, 0), c(60, 60, 16, 160), c(60, 60, 30, 320), c(60, 60, 46, 480)];
    },
    tree: function () {
      return [
        p('M60 104 L60 52', 0),
        p('M60 74 L40 58 M60 74 L80 58 M60 62 L46 48 M60 62 L74 48', 180),
        c(60, 40, 22, 340),
        p('M40 104 Q60 96 80 104', 520)
      ];
    },
    scroll: function () {
      return [
        p('M32 34 h56 a8 8 0 0 1 0 16 h-56 a8 8 0 0 1 0 -16 z', 0),
        p('M32 70 h56 a8 8 0 0 1 0 16 h-56 a8 8 0 0 1 0 -16 z', 160),
        p('M34 50 v20 M86 50 v20', 320),
        p('M44 58 h32 M44 64 h24', 460)
      ];
    },
    road: function () {
      return [
        p('M20 104 L54 40 M100 104 L66 40', 0),
        p('M60 46 h0.01', 200),
        p('M42 86 h36 M48 70 h24 M52 58 h16', 300),
        c(60, 30, 8, 480)
      ];
    },
    stones: function () {
      return [
        p('M28 96 h64 v12 h-64 z', 0),
        p('M34 80 h34 v16 h-34 z', 160),
        p('M72 80 h20 v16 h-20 z', 260),
        p('M40 62 h26 v18 h-26 z', 360),
        p('M74 56 l14 -6 v18 h-14 z', 480)
      ];
    },
    colonnade: function () {
      return [
        p('M24 40 h72 v8 h-72 z', 0),
        p('M32 48 v52 M60 48 v52 M88 48 v52', 200),
        p('M26 100 h12 M54 100 h12 M82 100 h12', 380),
        p('M24 32 h72', 500)
      ];
    },
    eclipse: function () {
      return [
        c(60, 58, 26, 0),
        p('M60 20 v-10 M60 106 v10 M22 58 h-10 M98 58 h10 M33 31 l-7 -7 M87 31 l7 -7 M33 85 l-7 7 M87 85 l7 7', 220),
        c(60, 58, 40, 420)
      ];
    },
    radiance: function () {
      return [
        c(60, 56, 14, 0),
        p('M60 24 v-12 M60 88 v12 M28 56 h-12 M92 56 h12 M37 33 l-8 -8 M83 33 l8 -8 M37 79 l-8 8 M83 79 l8 8', 180),
        p('M26 92 q14 -12 30 -4 q12 -10 24 2 q10 -4 14 6', 400)
      ];
    },
    throne: function () {
      return [
        p('M40 96 h40 M34 104 h52', 0),
        p('M44 96 v-30 h32 v30', 160),
        p('M44 66 q16 -14 32 0', 320),
        p('M50 42 h20 M46 34 h28', 440),
        c(60, 20, 6, 560)
      ];
    },
    city: function () {
      return [
        p('M22 104 h76', 0),
        p('M30 104 V64 h16 v40 M54 104 V48 h14 v56 M76 104 V70 h14 v34', 160),
        p('M36 104 v-14 h4 v14 M60 104 v-18 h4 v18 M82 104 v-12 h4 v12', 360),
        p('M18 96 q20 8 42 0 q22 -8 42 0', 500)
      ];
    }
  };

  AD.glyph = function (id) {
    var build = G[id] || G.seed;
    return s('svg', {
      class: 'glyph', viewBox: '0 0 120 120', 'aria-hidden': 'true',
      fill: 'none', stroke: 'currentColor', 'stroke-width': '1.3',
      'stroke-linecap': 'round', 'stroke-linejoin': 'round'
    }, build());
  };
})(window.AD);
