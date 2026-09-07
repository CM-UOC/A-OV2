/* Filter bar: search, six filter axes, counts, legend. */
(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, store = AD.store, D = AD.data;

  function searchIcon() {
    var s = AD.util.svg;
    return s('svg', { viewBox: '0 0 16 16', 'aria-hidden': 'true', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.5' }, [
      s('circle', { cx: '7', cy: '7', r: '4.5' }),
      s('path', { d: 'M10.5 10.5 L14.5 14.5' })
    ]);
  }

  C.filterBar = function (onChange) {
    var syncFns = [];

    var count = el('p', { class: 'filters__count', 'aria-live': 'polite', 'aria-atomic': 'true' });

    var input = el('input', {
      type: 'search', id: 'timeline-search', placeholder: 'Search events, references, symbols…',
      'aria-label': 'Search the chronology', value: store.state.query,
      oninput: AD.util.debounce(function (ev) {
        store.state.query = ev.target.value;
        change();
      }, 160)
    });

    var panel = el('div', { class: 'filters__panel', id: 'filter-panel', hidden: true });

    var toggle = el('button', {
      class: 'icon-btn', type: 'button', 'aria-expanded': 'false', 'aria-controls': 'filter-panel',
      onclick: function () {
        var open = panel.hidden;
        panel.hidden = !open;
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      }
    }, 'Filters');

    var clear = el('button', {
      class: 'icon-btn', type: 'button',
      onclick: function () { store.clearFilters(); input.value = ''; change(); }
    }, 'Reset');

    var groups = [
      { key: 'source', label: 'Source', opts: [
        { id: 'canonical', label: 'Canonical' },
        { id: 'comparative', label: '1 Enoch (comparative)' }
      ] },
      { key: 'testament', label: 'Testament', opts: D.testaments.map(function (t) { return { id: t.id, label: t.label }; }) },
      { key: 'certainty', label: 'Chronological certainty', opts: D.certainty.map(function (c) { return { id: c.id, label: c.label, title: c.note }; }) },
      { key: 'theme', label: 'Prophetic theme', opts: D.themes.map(function (t) { return { id: t.id, label: t.label, title: t.description }; }) },
      { key: 'framework', label: 'Interpretive tradition', opts: D.frameworks.map(function (f) { return { id: f.id, label: f.name, title: f.tagline }; }) },
      { key: 'book', label: 'Biblical book', opts: booksInUse() }
    ];

    groups.forEach(function (g) {
      var opts = el('div', { class: 'fgroup__opts' });
      g.opts.forEach(function (o) {
        var n = el('span', { class: 'opt__n' });
        var b = el('button', {
          class: 'opt', type: 'button', title: o.title || '',
          'aria-pressed': store.state.filters[g.key].indexOf(o.id) >= 0 ? 'true' : 'false',
          onclick: function () { store.toggleFilter(g.key, o.id); change(); }
        }, [o.label, n]);
        opts.appendChild(b);
        syncFns.push(function () {
          b.setAttribute('aria-pressed', store.state.filters[g.key].indexOf(o.id) >= 0 ? 'true' : 'false');
          n.textContent = store.optionCount(g.key, o.id);
        });
      });
      panel.appendChild(el('div', { class: 'fgroup' }, [
        el('p', { class: 'fgroup__label', text: g.label }),
        opts
      ]));
    });

    var legend = el('div', { class: 'legend' }, D.stages.map(function (s) {
      return el('span', { class: 'legend__item' }, [
        el('span', { class: 'legend__swatch', style: 'background: var(--st-' + s.id + ')' }),
        s.num + ' · ' + s.name + ' (' + s.pigment + ')'
      ]);
    }).concat([
      el('span', { class: 'legend__item' }, [
        el('span', { class: 'legend__swatch', style: 'background: transparent; border: 1px dashed var(--st-origins)' }),
        'Dashed border · 1 Enoch, comparative'
      ])
    ]));

    var node = el('section', { class: 'filters', 'aria-label': 'Filter the chronology' }, [
      el('div', { class: 'filters__bar' }, [
        count,
        el('div', { class: 'search-inline' }, [searchIcon(), input]),
        toggle, clear
      ]),
      panel,
      legend
    ]);

    function change() { sync(); if (onChange) onChange(); }

    function sync() {
      var n = store.filteredEvents().length;
      var active = store.activeFilterCount();
      count.textContent = n + ' of ' + D.events.length + ' ' + AD.util.pluralize(n, 'entry', 'entries') +
        (active ? ' · ' + active + ' ' + AD.util.pluralize(active, 'filter') + ' active' : '');
      syncFns.forEach(function (f) { f(); });
      toggle.textContent = 'Filters' + (active ? ' (' + active + ')' : '');
    }

    sync();
    node.sync = sync;
    return node;
  };

  function booksInUse() {
    var seen = {};
    D.events.forEach(function (e) { e.refs.forEach(function (r) { seen[r.book] = true; }); });
    return D.bookOrder.filter(function (b) { return seen[b]; }).map(function (b) { return { id: b, label: b }; });
  }
})(window.AD);
