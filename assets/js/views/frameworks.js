(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data, store = AD.store;

  AD.views.frameworks = function () {
    var tableWrap = el('div', { class: 'table-wrap' });
    var trayList = el('div', { class: 'ref-list' });

    function sync() {
      AD.util.clear(tableWrap);
      tableWrap.appendChild(buildTable(store.state.compare));
      AD.util.clear(trayList);
      D.frameworks.forEach(function (f) {
        trayList.appendChild(el('button', {
          class: 'opt', type: 'button',
          'aria-pressed': store.state.compare.indexOf(f.id) >= 0 ? 'true' : 'false',
          onclick: function () { store.toggleCompare(f.id); sync(); }
        }, f.name));
      });
    }

    var cards = el('div', { class: 'grid grid--2', style: 'margin-top: var(--sp-5)' },
      D.frameworks.map(function (f) {
        return el('article', { class: 'fw-card', style: '--fw-color: ' + f.color }, [
          el('p', { class: 'fw-card__kind', text: f.kind === 'millennial' ? 'Millennial position' : (f.kind === 'lens' ? 'Interpretive lens' : 'Reading of Revelation') }),
          el('h3', { text: f.name }),
          el('p', { class: 'fw-card__thesis', text: f.thesis }),
          section('Key texts', el('div', { class: 'ref-list' }, f.keyTexts.map(function (t) {
            return el('span', { class: 'ref' }, t);
          }))),
          section('Principal arguments', list(f.arguments)),
          section('Limitations', list(f.limitations)),
          section('Disputed assumptions', list(f.disputed)),
          el('div', { class: 'fw-card__foot' }, [
            el('p', { class: 'lane__step-note', text: 'Representative: ' + f.proponents.join('; ') }),
            el('button', {
              class: 'icon-btn', type: 'button',
              onclick: function () { store.toggleCompare(f.id); sync(); }
            }, 'Compare')
          ])
        ]);
      }));

    sync();

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Interpretation',
        title: 'Seven frameworks, three lenses',
        lede: 'Four are ways of reading Revelation — preterism, historicism, futurism, idealism. Three are positions on the millennium. They combine: a reader is normally one of each. Three further lenses are included because they shape how the texts are read without being eschatological positions.'
      }),
      C.callout('These are interpretations, not the text', [
        'Every position here is a framework applied to the biblical material, developed over centuries of reading. Each entry states the position’s own case first, then its limitations and the assumptions its critics dispute.'
      ]),
      cards,
      el('hr', { class: 'rule rule--gold' }),
      el('h2', { style: 'font-family: var(--f-display); font-size: var(--t-lg); margin-bottom: var(--sp-3)', text: 'Comparison tool' }),
      el('p', { class: 'prose', style: 'margin-bottom: var(--sp-4)', text: 'Choose up to three. Selecting a fourth replaces the oldest.' }),
      tableWrap,
      el('div', { class: 'compare-tray' }, [
        el('span', { class: 'compare-tray__label', text: 'Compare:' }), trayList
      ])
    ]);
  };

  function section(label, body) {
    return el('div', { class: 'fw-card__sec' }, [el('h4', { text: label }), body]);
  }
  function list(items) {
    return el('ul', {}, items.map(function (i) { return el('li', { text: i }); }));
  }

  function buildTable(ids) {
    var picked = ids.map(function (id) { return D.frameworkById[id]; }).filter(Boolean);
    if (!picked.length) {
      return el('p', { class: 'empty', text: 'Select at least one framework below to compare.' });
    }
    var rows = [
      ['Core thesis', function (f) { return f.thesis; }],
      ['Key texts', function (f) { return f.keyTexts.join(' · '); }],
      ['Principal arguments', function (f) { return f.arguments; }],
      ['Limitations', function (f) { return f.limitations; }],
      ['Disputed assumptions', function (f) { return f.disputed; }],
      ['Representative figures', function (f) { return f.proponents.join('; '); }]
    ];
    return el('table', { class: 'cmp' }, [
      el('thead', {}, [el('tr', {}, [el('th', { scope: 'col', text: '' })].concat(picked.map(function (f) {
        return el('th', { scope: 'col', style: 'color: ' + f.color, text: f.name });
      })))]),
      el('tbody', {}, rows.map(function (r) {
        return el('tr', {}, [el('th', { scope: 'row', text: r[0] })].concat(picked.map(function (f) {
          var v = r[1](f);
          return el('td', {}, Array.isArray(v)
            ? el('ul', { style: 'margin:0; padding-left: 1rem' }, v.map(function (x) { return el('li', { text: x }); }))
            : v);
        })));
      }))
    ]);
  }
})(window.AD);
