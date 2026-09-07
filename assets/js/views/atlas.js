(function (AD) {
  'use strict';
  var el = AD.util.el, s = AD.util.svg, C = AD.components, D = AD.data;

  var W = 900, H = 460, PAD = 46;

  AD.views.atlas = function () {
    var B = D.atlasBounds;
    function px(p) {
      return {
        x: PAD + (p.lon - B.lon0) / (B.lon1 - B.lon0) * (W - PAD * 2),
        y: PAD + (B.lat1 - p.lat) / (B.lat1 - B.lat0) * (H - PAD * 2)
      };
    }

    var info = el('aside', { class: 'map-inspector', 'aria-live': 'polite' });
    var nodes = {};

    function show(place) {
      AD.util.clear(info);
      if (!place) {
        info.appendChild(el('h3', { text: 'Select a place' }));
        info.appendChild(el('p', { class: 'lane__step-note', text: 'Points are positioned by approximate modern coordinates. Several ancient sites are disputed or unlocated, and the map draws no coastline — it is a diagram, not a chart.' }));
        return;
      }
      info.appendChild(el('h3', { text: place.name }));
      info.appendChild(el('p', { class: 'lane__step-note', text: place.era + ' · ' + place.lat.toFixed(2) + '°N ' + place.lon.toFixed(2) + '°E' }));
      info.appendChild(el('p', { style: 'margin: var(--sp-3) 0', text: place.note }));
      info.appendChild(C.refList(place.refs.map(function (r) { return { ref: r, book: r.split(/\s\d/)[0] }; })));
      var acts = el('div', { class: 'related', style: 'margin-top: var(--sp-4)' });
      (place.events || []).forEach(function (id) {
        var e = C.findEvent(id);
        if (!e) return;
        acts.appendChild(el('button', { type: 'button', onclick: function () { AD.panel.open('event:' + id); } }, e.title));
      });
      if (place.scene) {
        acts.appendChild(el('button', {
          type: 'button',
          onclick: function () { AD.panel.close(); AD.journey.gotoScene(place.scene); }
        }, 'Go to the scene ↗'));
      }
      info.appendChild(acts);
    }

    var grid = [];
    for (var lon = 10; lon <= 50; lon += 5) {
      var a = px({ lon: lon, lat: B.lat0 }), b = px({ lon: lon, lat: B.lat1 });
      grid.push(s('line', { x1: a.x, y1: a.y, x2: b.x, y2: b.y, class: 'atlas-grid' }));
      grid.push(s('text', { x: a.x, y: H - 14, class: 'map-col-label', 'text-anchor': 'middle', text: lon + '°E' }));
    }
    for (var lat = 25; lat <= 40; lat += 5) {
      var c = px({ lon: B.lon0, lat: lat }), d = px({ lon: B.lon1, lat: lat });
      grid.push(s('line', { x1: c.x, y1: c.y, x2: d.x, y2: d.y, class: 'atlas-grid' }));
      grid.push(s('text', { x: 10, y: c.y + 3, class: 'map-col-label', text: lat + '°N' }));
    }

    var marks = D.atlas.map(function (p) {
      var q = px(p);
      var g = s('g', {
        class: 'atlas-node' + (p.comparative ? ' is-comparative' : ''),
        tabindex: '0', role: 'button',
        'aria-label': p.name + '. ' + p.note,
        transform: 'translate(' + q.x.toFixed(1) + ',' + q.y.toFixed(1) + ')',
        onclick: function () { select(p); },
        onfocus: function () { select(p); },
        onmouseenter: function () { select(p); },
        onkeydown: function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); select(p); } }
      }, [
        s('circle', { r: 12, class: 'atlas-hit' }),
        s('circle', { r: 3.4, class: 'atlas-dot' }),
        s('text', { x: 9, y: 3.5, class: 'atlas-label', text: p.name })
      ]);
      nodes[p.id] = g;
      return g;
    });

    function select(p) {
      D.atlas.forEach(function (x) { nodes[x.id].classList.toggle('is-active', x.id === p.id); });
      show(p);
    }
    show(null);

    var svg = s('svg', {
      viewBox: '0 0 ' + W + ' ' + H, role: 'img',
      'aria-label': 'Schematic map of places named in the texts, positioned by approximate coordinates'
    }, [s('g', {}, grid), s('g', {}, marks)]);

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Reference',
        title: 'Places in the texts',
        lede: 'Twenty locations named in the passages this site covers, from Ararat to Patmos, each linked to its scene and its entries.'
      }),
      C.callout('What this map is', [
        'A **diagram, not a chart**: it draws a graticule and points, with no coastline and no relief. Positions use approximate modern coordinates.',
        'Several identifications are disputed by archaeologists and historians — Ur and the mountains of Ararat among them — and Mount Hermon appears here only because 1 Enoch places the Watchers there, which is a comparative source rather than a biblical one.'
      ]),
      el('div', { class: 'map-wrap', style: 'margin-top: var(--sp-6)' }, [
        el('div', { class: 'map-frame' }, [svg]), info
      ])
    ]);
  };
})(window.AD);
