/* World-anchored hotspots. Each is defined by an azimuth and elevation in the
   scene's world, projected through the live camera every frame, so they move
   with the shot instead of sitting on the page. Keyboard reachable. */
(function (AD) {
  'use strict';
  var el = AD.util.el;

  function dirFor(baseYaw, az, elv) {
    var a = (baseYaw + az) * Math.PI / 180, e = elv * Math.PI / 180;
    return [Math.sin(a) * Math.cos(e), Math.sin(e), Math.cos(a) * Math.cos(e)];
  }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }

  AD.hotspots = {
    build: function (scene) {
      if (!scene.hotspots || !scene.hotspots.length) return null;
      var layer = el('div', { class: 'hotspots', 'aria-label': 'Points in this scene' });
      layer._items = scene.hotspots.map(function (h) {
        var card = el('div', { class: 'hs__card', role: 'note' }, [
          el('p', { class: 'hs__title', text: h.title }),
          el('p', { class: 'hs__ref', text: h.ref }),
          el('p', { class: 'hs__note', text: h.note }),
          h.event ? el('span', { class: 'hs__more', text: 'Open the full entry →' }) : null
        ]);
        var btn = el('button', {
          class: 'hs', type: 'button',
          'aria-label': h.title + ', ' + h.ref + '. ' + h.note + (h.event ? ' Opens the full entry.' : ''),
          onclick: function () { if (h.event) AD.panel.open('event:' + h.event); }
        }, [el('span', { class: 'hs__dot', 'aria-hidden': 'true' }), card]);
        layer.appendChild(btn);
        return { def: h, node: btn };
      });
      return layer;
    },

    /* project into screen space for the current camera */
    place: function (layer, scene, st, w, h, vis) {
      if (!layer || !layer._items) return;
      var items = layer._items;
      for (var i = 0; i < items.length; i++) {
        var d = dirFor(scene.camera.yaw, items[i].def.az, items[i].def.el);
        var f = dot(d, st.camFwd);
        var node = items[i].node;
        if (f <= 0.08) { node.style.opacity = '0'; node.style.pointerEvents = 'none'; continue; }
        var k = st.focal / f;
        var ux = k * dot(d, st.camRight), uy = k * dot(d, st.camUp);
        var x = 0.5 * w + ux * h, y = 0.5 * h - uy * h;
        var edge = Math.min(x / w, 1 - x / w, y / h, 1 - y / h);
        var a = vis * Math.min(Math.max(edge * 8, 0), 1);
        node.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
        node.style.opacity = a.toFixed(3);
        node.style.pointerEvents = a > 0.35 ? 'auto' : 'none';
      }
    }
  };
})(window.AD);
