/* Backdrop layer: pre-rendered plates, cross-faded and moved.

   Each scene is a still rendered offline at high quality; motion comes from a
   slow scroll-driven push-in and drift (a camera move, not a slideshow), a
   second plate cross-fading in, and animated light and haze over the top. */
(function (AD) {
  'use strict';
  var el = AD.util.el;

  function Plates(host, base) {
    this.host = host;
    this.layers = {};
    var self = this;
    AD.data.scenes.forEach(function (s, i) {
      var data = window.AD_PLATE_DATA && window.AD_PLATE_DATA[s.id];
      var img = el('img', {
        src: data || (base + s.id + '.jpg'), alt: '',
        loading: i < 3 ? 'eager' : 'lazy', decoding: 'async'
      });
      var layer = el('div', { class: 'plate', 'data-scene': s.id, 'aria-hidden': 'true' }, [img]);
      host.appendChild(layer);
      self.layers[s.id] = { node: layer, img: img, loaded: false };
      img.addEventListener('load', function () {
        self.layers[s.id].loaded = true;
        layer.classList.add('is-loaded');
      });
      img.addEventListener('error', function () { layer.classList.add('is-failed'); });
    });
  }

  /* a: current scene, b: next, t: blend, local: progress inside a (drives the move) */
  Plates.prototype.set = function (aId, bId, t, local) {
    var keys = Object.keys(this.layers);
    for (var i = 0; i < keys.length; i++) {
      var L = this.layers[keys[i]];
      var o = 0;
      if (keys[i] === aId) o = 1 - t;
      else if (keys[i] === bId) o = t;
      if (o <= 0.001) {
        if (L.node.style.opacity !== '0') { L.node.style.opacity = '0'; L.node.style.visibility = 'hidden'; }
        continue;
      }
      L.node.style.visibility = 'visible';
      L.node.style.opacity = o.toFixed(3);
      /* the push-in: 1.06 → 1.14 across a scene, with a little drift */
      var p = keys[i] === aId ? local : local * 0.35;
      var sc = 1.035 + p * 0.055;
      var dx = (p - 0.5) * 1.1, dy = (p - 0.5) * -1.7;
      L.img.style.transform = 'scale(' + sc.toFixed(4) + ') translate3d(' + dx.toFixed(2) + '%,' + dy.toFixed(2) + '%,0)';
    }
  };

  Plates.prototype.ready = function () {
    var k = Object.keys(this.layers);
    for (var i = 0; i < k.length; i++) if (this.layers[k[i]].loaded) return true;
    return false;
  };

  AD.plates = { create: function (host, base) { return new Plates(host, base); } };
})(window.AD);
