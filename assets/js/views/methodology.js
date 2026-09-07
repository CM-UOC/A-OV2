(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data;

  AD.views.methodology = function () {
    var m = D.methodology;
    return el('div', {}, [
      C.pageHead({ eyebrow: 'Reference', title: m.title, lede: m.lede }),
      el('div', { class: 'prose' }, m.sections.map(function (s) {
        return el('section', {}, [el('h2', { text: s.h })].concat(
          s.p.map(function (p) { return el('p', { html: C.md(p) }); })
        ));
      })),
      el('hr', { class: 'rule rule--gold' }),
      el('h2', { style: 'font-family: var(--f-display); font-size: var(--t-lg); margin-bottom: var(--sp-4)', text: 'The certainty scale in full' }),
      el('div', { class: 'grid grid--2' }, D.certainty.map(function (c) {
        return el('article', { class: 'panel', style: 'border-left: 3px solid var(--cert-' + c.id + ')' }, [
          el('h3', {}, [el('span', { class: 'chip chip--cert cert-' + c.id }, [el('span', { class: 'chip__dot' }), c.label])]),
          el('p', { style: 'margin-top: var(--sp-2)', text: c.note })
        ]);
      })),
      el('hr', { class: 'rule' }),
      el('h2', { style: 'font-family: var(--f-display); font-size: var(--t-lg); margin-bottom: var(--sp-4)', text: 'Stages, and the pigments that colour them' }),
      el('div', { class: 'table-wrap' }, [
        el('table', { class: 'cmp' }, [
          el('thead', {}, [el('tr', {}, [
            el('th', { scope: 'col', text: 'Stage' }),
            el('th', { scope: 'col', text: 'Pigment' }),
            el('th', { scope: 'col', text: 'What it covers' })
          ])]),
          el('tbody', {}, D.stages.map(function (s) {
            return el('tr', {}, [
              el('th', { scope: 'row' }, [
                el('span', { class: 'legend__swatch', style: 'display:inline-block; background: var(--st-' + s.id + '); margin-right:.4rem' }),
                s.num + ' · ' + s.name
              ]),
              el('td', { text: s.pigment }),
              el('td', { text: s.blurb })
            ]);
          }))
        ])
      ])
    ]);
  };
})(window.AD);
