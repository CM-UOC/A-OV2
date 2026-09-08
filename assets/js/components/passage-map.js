/* Mapa de conexiones — diagrama radial de cuerdas.
   Los 56 pasajes se reparten en tres arcos (Biblia hebrea · Segundo Templo y
   deuterocanónicos · Nuevo Testamento) y las 65 relaciones cruzan el centro
   como cuerdas curvas. Al elegir un nodo, sus cuerdas se dibujan con un trazo
   animado y el resto se atenúa. Operable con teclado. */
(function (AD) {
  'use strict';
  var s = AD.util.svg, el = AD.util.el, C = AD.components, D = AD.data;

  /* El lienzo es mayor que el anillo a propósito: las etiquetas salen hacia
     fuera desde R+10 y el SVG recorta en su borde. Con R = 300 y SIZE = 940
     quedan 170 unidades de margen en cada lado, suficiente para el rótulo
     más largo sin que nada se corte por abajo. */
  var SIZE = 940, CX = SIZE / 2, CY = SIZE / 2, R = 300, GAP = 0.10;

  C.passageMap = function (onSelect) {
    var groups = [
      { id: 'hb', label: 'Biblia hebrea' },
      { id: 'st', label: 'Segundo Templo · deuterocanónicos' },
      { id: 'nt', label: 'Nuevo Testamento' }
    ];
    var byCol = { hb: [], st: [], nt: [] };
    D.mapNodes.forEach(function (n) { byCol[n.col].push(n); });

    var total = D.mapNodes.length;
    var span = (Math.PI * 2) - GAP * groups.length;
    var pos = {}, arcs = [], angle = -Math.PI / 2 + GAP / 2;

    groups.forEach(function (g) {
      var list = byCol[g.id];
      var share = span * (list.length / total);
      var a0 = angle, a1 = angle + share;
      arcs.push({ g: g, a0: a0, a1: a1 });
      list.forEach(function (n, i) {
        var a = a0 + (share * (i + 0.5)) / list.length;
        pos[n.id] = { a: a, x: CX + Math.cos(a) * R, y: CY + Math.sin(a) * R, col: g.id };
      });
      angle = a1 + GAP;
    });

    /* cuerdas: curva cuadrática hacia el centro, más recta cuanto más lejos */
    var chordLayer = s('g', { class: 'chords' });
    var chords = [];
    D.mapEdges.forEach(function (e) {
      var A = pos[e.from], B = pos[e.to];
      if (!A || !B) return;
      var d = Math.abs(A.a - B.a);
      if (d > Math.PI) d = Math.PI * 2 - d;
      var pull = 0.14 + 0.62 * (1 - d / Math.PI);
      var mx = CX + (A.x + B.x) / 2 * 0 + ((A.x + B.x) / 2 - CX) * pull;
      var my = CY + ((A.y + B.y) / 2 - CY) * pull;
      var path = s('path', {
        class: 'chord chord--' + (e.kind === 'shared-imagery' ? 'shared' : e.kind),
        d: 'M' + A.x.toFixed(1) + ' ' + A.y.toFixed(1) +
           ' Q' + mx.toFixed(1) + ' ' + my.toFixed(1) + ' ' + B.x.toFixed(1) + ' ' + B.y.toFixed(1)
      }, [s('title', { text: e.note })]);
      chords.push({ node: path, edge: e });
      chordLayer.appendChild(path);
    });

    /* arcos de grupo */
    var ringLayer = s('g', { class: 'rings' });
    arcs.forEach(function (a) {
      var rr = R + 26;
      var x0 = CX + Math.cos(a.a0) * rr, y0 = CY + Math.sin(a.a0) * rr;
      var x1 = CX + Math.cos(a.a1) * rr, y1 = CY + Math.sin(a.a1) * rr;
      var large = (a.a1 - a.a0) > Math.PI ? 1 : 0;
      ringLayer.appendChild(s('path', {
        class: 'ring ring--' + a.g.id,
        d: 'M' + x0 + ' ' + y0 + ' A' + rr + ' ' + rr + ' 0 ' + large + ' 1 ' + x1 + ' ' + y1
      }));
      var am = (a.a0 + a.a1) / 2, lr = R + 46;
      var deg = am * 180 / Math.PI;
      var flip = (deg > 90 || deg < -90);
      ringLayer.appendChild(s('text', {
        class: 'ring__label',
        x: CX + Math.cos(am) * lr, y: CY + Math.sin(am) * lr,
        'text-anchor': 'middle',
        transform: 'rotate(' + (deg + (flip ? 180 : 0)) + ' ' +
                   (CX + Math.cos(am) * lr) + ' ' + (CY + Math.sin(am) * lr) + ')',
        text: a.g.label
      }));
    });

    /* nodos */
    var nodeLayer = s('g', { class: 'chord-nodes' });
    var nodeEls = {};
    D.mapNodes.forEach(function (n) {
      var p = pos[n.id];
      var deg = p.a * 180 / Math.PI;
      var flip = (deg > 90 || deg < -90);
      var lx = CX + Math.cos(p.a) * (R + 10), ly = CY + Math.sin(p.a) * (R + 10);
      var g = s('g', {
        class: 'cnode' + (n.comparative ? ' is-comparative' : '') + (n.deutero ? ' is-deutero' : ''),
        tabindex: '0', role: 'button',
        'aria-label': n.label + ', ' + n.ref,
        onclick: function () { select(n.id); },
        onfocus: function () { select(n.id); },
        onmouseenter: function () { select(n.id); },
        onkeydown: function (ev) {
          if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); select(n.id); }
          if (ev.key === 'Escape') select(null);
        }
      }, [
        s('circle', { class: 'cnode__hit', cx: p.x, cy: p.y, r: 11 }),
        s('circle', { class: 'cnode__dot', cx: p.x, cy: p.y, r: 3.6 }),
        s('text', {
          class: 'cnode__label', x: lx, y: ly,
          'text-anchor': flip ? 'end' : 'start',
          'dominant-baseline': 'middle',
          transform: 'rotate(' + (deg + (flip ? 180 : 0)) + ' ' + lx + ' ' + ly + ')',
          text: n.label
        })
      ]);
      nodeEls[n.id] = g;
      nodeLayer.appendChild(g);
    });

    function connected(a, b) {
      return D.mapEdges.some(function (e) {
        return (e.from === a && e.to === b) || (e.to === a && e.from === b);
      });
    }
    function edgesFor(id) {
      return D.mapEdges.filter(function (e) { return e.from === id || e.to === id; });
    }

    var activeId = null;
    function select(id) {
      if (id === activeId) return;
      activeId = id;
      D.mapNodes.forEach(function (n) {
        var g = nodeEls[n.id];
        g.classList.toggle('is-active', id === n.id);
        g.classList.toggle('is-linked', !!id && id !== n.id && connected(id, n.id));
        g.classList.toggle('is-dim', !!id && id !== n.id && !connected(id, n.id));
      });
      chords.forEach(function (c) {
        var lit = !!id && (c.edge.from === id || c.edge.to === id);
        c.node.classList.toggle('is-lit', lit);
        c.node.classList.toggle('is-dim', !!id && !lit);
      });
      if (onSelect) onSelect(id, id ? edgesFor(id) : []);
    }

    var svg = s('svg', {
      viewBox: '0 0 ' + SIZE + ' ' + SIZE, class: 'chord-svg', role: 'img',
      'aria-label': 'Diagrama radial de citas y alusiones entre la Biblia hebrea, la literatura del Segundo Templo y el Nuevo Testamento'
    }, [chordLayer, ringLayer, nodeLayer]);

    var wrap = el('div', { class: 'map-frame glass glass--subtle' }, [svg]);
    wrap.select = select;
    return wrap;
  };

  C.mapNodeById = function (id) {
    for (var i = 0; i < D.mapNodes.length; i++) if (D.mapNodes[i].id === id) return D.mapNodes[i];
    return null;
  };
})(window.AD);
