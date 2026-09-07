(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data;

  AD.views.map = function () {
    var inspector = el('aside', { class: 'map-inspector', 'aria-live': 'polite' });
    var frame = C.passageMap(function (id, edges) { renderInspector(id, edges); });

    function renderInspector(id, edges) {
      AD.util.clear(inspector);
      if (!id) {
        inspector.appendChild(el('h3', { text: 'Select a passage' }));
        inspector.appendChild(el('p', { class: 'lane__step-note', text: 'Choose any box to see what it quotes, alludes to, or shares a tradition with. Use Tab and Enter to navigate by keyboard.' }));
        inspector.appendChild(el('hr', { class: 'rule' }));
        inspector.appendChild(el('p', { class: 'fgroup__label', text: 'Edge types' }));
        D.mapEdgeKinds.forEach(function (k) {
          inspector.appendChild(el('p', { style: 'margin-bottom: var(--sp-3)' }, [
            el('span', { class: 'chip', text: k.label }),
            el('span', { class: 'lane__step-note', text: k.note })
          ]));
        });
        return;
      }
      var node = C.mapNodeById(id);
      inspector.appendChild(el('h3', { text: node.label }));
      inspector.appendChild(el('p', {}, [el('span', { class: 'ref' + (node.comparative ? ' ref--enoch' : '') }, node.ref)]));
      inspector.appendChild(el('p', { class: 'lane__step-note', style: 'margin-top: var(--sp-2)', text: edges.length + ' ' + AD.util.pluralize(edges.length, 'connection') }));
      inspector.appendChild(el('ul', {}, edges.map(function (e) {
        var other = C.mapNodeById(e.from === id ? e.to : e.from);
        var dir = e.from === id ? 'to' : 'from';
        return el('li', {}, [
          el('span', { class: 'res__kind', text: kindLabel(e.kind) + ' · ' + dir }),
          el('p', { style: 'font-weight:600' }, [other.label, ' ', el('span', { class: 'ref' + (other.comparative ? ' ref--enoch' : '') }, other.ref)]),
          el('p', { class: 'lane__step-note', text: e.note })
        ]);
      })));
    }

    renderInspector(null, []);

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Reference',
        title: 'How the passages connect',
        lede: 'Fifty-eight documented relationships between the Hebrew Bible, 1 Enoch, and the New Testament. Columns run left to right in rough order of composition, so an edge crossing rightward indicates the direction of literary influence — where influence can be established at all.'
      }),
      C.callout('What an edge does and does not claim', [
        'A **quotation** edge means the later text quotes the earlier, usually naming it. An **allusion** edge means distinctive shared wording that most commentators treat as deliberate. A **shared tradition** edge claims no dependence in either direction — only a common stock of images.',
        'The 1 Enoch column sits in the middle because most of the corpus predates the New Testament. The Book of Parables is the exception, and its date is genuinely unsettled, so nothing here should be read as establishing that the New Testament borrowed from it.'
      ]),
      el('div', { class: 'map-wrap', style: 'margin-top: var(--sp-6)' }, [frame, inspector])
    ]);
  };

  function kindLabel(k) {
    for (var i = 0; i < D.mapEdgeKinds.length; i++) if (D.mapEdgeKinds[i].id === k) return D.mapEdgeKinds[i].label;
    return k;
  }
})(window.AD);
