/* Passage map: three columns (Hebrew Bible, 1 Enoch, New Testament) with
   quotation / allusion / shared-tradition edges. Keyboard operable. */
(function (AD) {
  'use strict';
  var s = AD.util.svg, el = AD.util.el, C = AD.components, D = AD.data;

  var COL_X = { hb: 8, st: 345, nt: 682 }, BOX_W = 210, BOX_H = 34, ROW = 40, W = 900;

  C.passageMap = function (onSelect) {
    var byCol = { hb: [], st: [], nt: [] };
    D.mapNodes.forEach(function (n) { byCol[n.col].push(n); });
    var maxRows = Math.max(byCol.hb.length, byCol.st.length, byCol.nt.length);
    var H = maxRows * ROW + 70;

    var pos = {};
    Object.keys(byCol).forEach(function (col) {
      var list = byCol[col];
      var start = (H - 40 - list.length * ROW) / 2 + 46;
      list.forEach(function (n, i) {
        pos[n.id] = { x: COL_X[col], y: start + i * ROW, col: col };
      });
    });

    var edgeLayer = s('g', { class: 'edges' });
    var nodeLayer = s('g', { class: 'nodes' });
    var edgeEls = [];

    D.mapEdges.forEach(function (e, i) {
      var a = pos[e.from], b = pos[e.to];
      var x1 = a.x + BOX_W, y1 = a.y + BOX_H / 2;
      var x2 = b.x, y2 = b.y + BOX_H / 2;
      var d;
      if (a.col === b.col) {
        var bulge = a.x + BOX_W + 46;
        d = 'M' + x1 + ' ' + y1 + ' C' + bulge + ' ' + y1 + ',' + bulge + ' ' + y2 + ',' + x1 + ' ' + y2;
        x2 = x1;
      } else {
        var mid = (x1 + x2) / 2;
        d = 'M' + x1 + ' ' + y1 + ' C' + mid + ' ' + y1 + ',' + mid + ' ' + y2 + ',' + x2 + ' ' + y2;
      }
      var p = s('path', {
        class: 'map-edge is-' + (e.kind === 'shared-imagery' ? 'shared' : e.kind),
        d: d, 'data-from': e.from, 'data-to': e.to
      }, [s('title', { text: e.note })]);
      edgeEls.push({ node: p, edge: e });
      edgeLayer.appendChild(p);
    });

    var nodeEls = {};
    D.mapNodes.forEach(function (n) {
      var p = pos[n.id];
      var g = s('g', {
        class: 'map-node', tabindex: '0', role: 'button',
        'aria-label': n.label + ', ' + n.ref + '. Show connections.',
        transform: 'translate(' + p.x + ',' + p.y + ')',
        onclick: function () { select(n.id); },
        onkeydown: function (ev) {
          if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); select(n.id); }
          if (ev.key === 'Escape') { select(null); }
        },
        onfocus: function () { select(n.id); }
      }, [
        s('rect', { width: BOX_W, height: BOX_H, 'stroke-dasharray': n.comparative ? '3 3' : null }),
        s('text', { x: 9, y: 14, text: n.label }),
        s('text', { class: 'map-ref', x: 9, y: 27, text: n.ref })
      ]);
      nodeEls[n.id] = g;
      nodeLayer.appendChild(g);
    });

    var svg = s('svg', {
      viewBox: '0 0 ' + W + ' ' + H, role: 'img',
      'aria-label': 'Map of quotations and allusions between the Hebrew Bible, 1 Enoch, and the New Testament'
    }, [
      s('text', { class: 'map-col-label', x: COL_X.hb, y: 22, text: 'Hebrew Bible' }),
      s('text', { class: 'map-col-label', x: COL_X.st, y: 22, text: '1 Enoch — comparative' }),
      s('text', { class: 'map-col-label', x: COL_X.nt, y: 22, text: 'New Testament' }),
      edgeLayer, nodeLayer
    ]);

    function select(id) {
      D.mapNodes.forEach(function (n) {
        nodeEls[n.id].classList.remove('is-active');
        nodeEls[n.id].classList.toggle('is-dim', !!id && n.id !== id && !connected(id, n.id));
      });
      edgeEls.forEach(function (x) {
        var lit = !!id && (x.edge.from === id || x.edge.to === id);
        x.node.classList.toggle('is-lit', lit);
        x.node.classList.toggle('is-dim', !!id && !lit);
      });
      if (id) nodeEls[id].classList.add('is-active');
      if (onSelect) onSelect(id, id ? edgesFor(id) : []);
    }

    function connected(a, b) {
      return D.mapEdges.some(function (e) {
        return (e.from === a && e.to === b) || (e.to === a && e.from === b);
      });
    }
    function edgesFor(id) {
      return D.mapEdges.filter(function (e) { return e.from === id || e.to === id; });
    }

    var wrap = el('div', { class: 'map-frame' }, [svg]);
    wrap.select = select;
    return wrap;
  };

  C.mapNodeById = function (id) {
    for (var i = 0; i < D.mapNodes.length; i++) if (D.mapNodes[i].id === id) return D.mapNodes[i];
    return null;
  };
})(window.AD);
