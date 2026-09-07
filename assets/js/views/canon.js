(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data;

  AD.views.canon = function () {
    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Reference',
        title: 'Canon, apocrypha, pseudepigrapha',
        lede: 'What these words mean, why the boundaries differ between communities, and how 1 Enoch came to be scripture in one church and not in the others.'
      }),
      head('The terms'),
      el('div', { class: 'grid grid--2' }, D.canonTerms.map(function (t) {
        return el('article', { class: 'panel panel--quiet' }, [
          el('h3', { text: t.term }),
          el('p', { text: t.def })
        ]);
      })),
      el('hr', { class: 'rule rule--gold' }),
      head('Canons compared'),
      el('div', { class: 'table-wrap' }, [
        el('table', { class: 'cmp' }, [
          el('thead', {}, [el('tr', {}, [
            el('th', { scope: 'col', text: 'Tradition' }),
            el('th', { scope: 'col', text: 'Extent' }),
            el('th', { scope: 'col', text: '1 Enoch' }),
            el('th', { scope: 'col', text: 'Notes' })
          ])]),
          el('tbody', {}, D.canonTraditions.map(function (t) {
            return el('tr', {}, [
              el('th', { scope: 'row', text: t.name }),
              el('td', { text: t.extent }),
              el('td', {}, [el('span', {
                class: 'chip' + (t.enoch.indexOf('Canonical') === 0 ? ' chip--comparative' : ''), text: t.enoch
              })]),
              el('td', { text: t.note })
            ]);
          }))
        ])
      ]),
      el('hr', { class: 'rule' }),
      head('How the text of 1 Enoch survives'),
      el('div', { class: 'grid grid--2' }, D.enochTransmission.map(function (t) {
        return el('article', { class: 'panel' }, [
          el('h3', { text: t.label }),
          el('p', { text: t.detail })
        ]);
      })),
      el('hr', { class: 'rule' }),
      head('Reception'),
      el('div', { class: 'table-wrap' }, [
        el('table', { class: 'cmp' }, [
          el('thead', {}, [el('tr', {}, [
            el('th', { scope: 'col', text: 'Who' }),
            el('th', { scope: 'col', text: 'When' }),
            el('th', { scope: 'col', text: 'Position' })
          ])]),
          el('tbody', {}, D.enochReception.map(function (r) {
            return el('tr', {}, [
              el('th', { scope: 'row', text: r.who }),
              el('td', { text: r.when }),
              el('td', { text: r.what })
            ]);
          }))
        ])
      ]),
      el('hr', { class: 'rule' }),
      C.callout('Three things worth keeping separate', D.canonNotes)
    ]);
  };

  function head(t) {
    return el('h2', { style: 'font-family: var(--f-display); font-size: var(--t-lg); margin-bottom: var(--sp-4)', text: t });
  }
})(window.AD);
