/* Global search overlay (⌘K or /). Indexes every record type. */
(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, U = AD.util;

  var overlay = null, results = null, input = null, index = null, sel = 0, current = [];

  function buildIndex() {
    if (index) return index;
    index = [];
    AD.data.events.forEach(function (e) {
      index.push({
        kind: e.source === 'comparative' ? '1 Enoch' : 'Event',
        title: e.title,
        sub: (e.refs[0] ? e.refs[0].ref : '') + ' · ' + AD.data.stageById[e.stage].name,
        text: AD.store.eventText(e),
        go: function () { AD.panel.open('event:' + e.id); }
      });
    });
    AD.data.frameworks.forEach(function (f) {
      index.push({
        kind: 'Framework', title: f.name, sub: f.tagline,
        text: [f.name, f.tagline, f.thesis, f.arguments.join(' '), f.limitations.join(' ')].join(' '),
        go: function () { AD.panel.open('frameworks'); }
      });
    });
    AD.data.glossary.forEach(function (g) {
      index.push({
        kind: 'Glossary', title: g.term, sub: (g.refs || []).join(', '),
        text: g.term + ' ' + g.def + ' ' + (g.refs || []).join(' '),
        go: function () { AD.panel.open('glossary', { t: U.slug(g.term) }); }
      });
    });
    AD.data.bookSurvey.forEach(function (b) {
      index.push({
        kind: 'Book', title: b.book, sub: b.group + ' · ' + b.relevance,
        text: b.book + ' ' + b.note + ' ' + b.refs.join(' '),
        go: function () { AD.panel.open('books', { b: U.slug(b.book) }); }
      });
    });
    AD.data.mirror.forEach(function (m) {
      index.push({
        kind: 'Beginning & End', title: m.motif, sub: m.a.title + ' → ' + m.b.title,
        text: [m.motif, m.a.title, m.a.text, m.b.title, m.b.text, m.a.refs.join(' '), m.b.refs.join(' ')].join(' '),
        go: function () { AD.panel.open('mirror'); }
      });
    });
    AD.data.scenes.forEach(function (sc) {
      if (!sc.stage) return;
      index.push({
        kind: 'Scene', title: sc.name, sub: 'Stage ' + sc.numeral + ' · ' + sc.kicker,
        text: [sc.name, sc.line, sc.kicker, sc.quote ? sc.quote.text : ''].join(' '),
        go: function () { AD.panel.close(); AD.journey.gotoScene(sc.id); }
      });
    });
    AD.data.sequences.forEach(function (s) {
      index.push({
        kind: 'Sequence', title: s.name, sub: s.note,
        text: [s.name, s.note].concat(s.steps.map(function (t) { return t.title + ' ' + t.note; })).join(' '),
        go: function () { AD.panel.open('sequences'); }
      });
    });
    index.forEach(function (r) { r._f = U.fold(r.text); });
    return index;
  }

  function render(q) {
    AD.util.clear(results);
    sel = 0;
    if (!q) {
      current = [];
      results.appendChild(el('p', { class: 'res__sub', style: 'padding: 1rem;' },
        'Search events, references, frameworks, glossary terms, and books of the Bible.'));
      return;
    }
    var f = U.fold(q);
    current = buildIndex().filter(function (r) { return r._f.indexOf(f) >= 0; }).slice(0, 40);
    if (!current.length) {
      results.appendChild(el('p', { class: 'res__sub', style: 'padding: 1rem;' }, 'No matches for “' + q + '”.'));
      return;
    }
    current.forEach(function (r, i) {
      var b = el('button', {
        class: 'res' + (i === 0 ? ' is-sel' : ''), type: 'button',
        onclick: function () { close(); r.go(); }
      }, [
        el('span', { class: 'res__kind', text: r.kind }),
        el('p', { class: 'res__title', text: r.title }),
        el('p', { class: 'res__sub', text: r.sub })
      ]);
      results.appendChild(b);
    });
  }

  function move(d) {
    var nodes = results.querySelectorAll('.res');
    if (!nodes.length) return;
    nodes[sel].classList.remove('is-sel');
    sel = (sel + d + nodes.length) % nodes.length;
    nodes[sel].classList.add('is-sel');
    nodes[sel].scrollIntoView({ block: 'nearest' });
  }

  function open() {
    if (overlay) return;
    var lastFocus = document.activeElement;
    results = el('div', { class: 'overlay__results', 'aria-label': 'Search results', 'aria-live': 'polite' });
    input = el('input', {
      type: 'text', placeholder: 'Search…', 'aria-label': 'Search the whole site',
      oninput: function (e) { render(e.target.value); }
    });
    overlay = el('div', {
      class: 'overlay', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Search'
    }, [
      el('div', { class: 'overlay__scrim', onclick: close }),
      el('div', { class: 'overlay__panel' }, [
        el('div', { class: 'overlay__input' }, [input]),
        results,
        el('div', { class: 'overlay__foot' }, [
          el('span', {}, [el('kbd', {}, '↑'), el('kbd', {}, '↓'), ' navigate']),
          el('span', {}, [el('kbd', {}, '↵'), ' open']),
          el('span', {}, [el('kbd', {}, 'Esc'), ' close'])
        ])
      ])
    ]);
    overlay._lastFocus = lastFocus;
    document.body.appendChild(overlay);
    render('');
    input.focus();
    document.addEventListener('keydown', keys, true);
  }

  function keys(e) {
    if (!overlay) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); }
    else if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    else if (e.key === 'Enter') {
      var node = results.querySelectorAll('.res')[sel];
      if (node) { e.preventDefault(); node.click(); }
    } else if (e.key === 'Tab') {
      e.preventDefault(); input.focus();
    }
  }

  function close() {
    if (!overlay) return;
    document.removeEventListener('keydown', keys, true);
    var last = overlay._lastFocus;
    overlay.parentNode.removeChild(overlay);
    overlay = null;
    if (last && last.focus) last.focus();
  }

  C.search = { open: open, close: close, isOpen: function () { return !!overlay; } };
})(window.AD);
