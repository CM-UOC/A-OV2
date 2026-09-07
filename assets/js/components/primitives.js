/* Small shared building blocks. */
(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components;

  C.pageHead = function (o) {
    return el('header', { class: 'page-head' }, [
      o.eyebrow ? el('p', { class: 'eyebrow', text: o.eyebrow }) : null,
      el('h1', { text: o.title }),
      o.lede ? el('p', { text: o.lede }) : null
    ]);
  };

  C.stageVars = function (stageId) {
    return '--stage-color: var(--st-' + stageId + '); --stage-ink: var(--st-' + stageId + '-ink);';
  };

  C.certChip = function (id) {
    var c = AD.data.certaintyById[id];
    if (!c) return null;
    return el('span', {
      class: 'chip chip--cert cert-' + id,
      title: 'Chronological certainty — ' + c.note
    }, [el('span', { class: 'chip__dot' }), c.label]);
  };

  C.sourceChip = function (source) {
    if (source === 'comparative') {
      return el('span', {
        class: 'chip chip--source chip--comparative',
        title: '1 Enoch — canonical in the Ethiopian Orthodox Tewahedo Church, non-canonical in Jewish, Catholic, Orthodox, and Protestant traditions.'
      }, '1 Enoch · comparative');
    }
    return el('span', { class: 'chip chip--source', title: 'Received as scripture across Jewish and/or Christian canons.' }, 'Canonical');
  };

  C.refList = function (refs) {
    return el('div', { class: 'ref-list' }, (refs || []).map(function (r) {
      var isEnoch = r.book === '1 Enoch';
      return el('span', {
        class: 'ref' + (isEnoch ? ' ref--enoch' : ''),
        title: r.note ? r.ref + ' — ' + r.note : r.ref
      }, r.ref);
    }));
  };

  C.quote = function (q) {
    if (!q) return null;
    return el('blockquote', { class: 'quote' }, [
      el('p', { html: '&ldquo;' + q.text + '&rdquo;' }),
      el('cite', { class: 'quote__attr', text: q.ref + ' · ' + q.translation })
    ]);
  };

  C.callout = function (title, paras) {
    return el('aside', { class: 'callout' }, [
      el('p', { class: 'callout__title', text: title })
    ].concat(paras.map(function (p) { return el('p', { html: C.md(p) }); })));
  };

  /* Minimal inline emphasis: **bold** only. Input is authored content, not user input. */
  C.md = function (s) {
    return String(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  };

  C.frameworkName = function (id) {
    var f = AD.data.frameworkById[id];
    return f ? f.name : id;
  };
})(window.AD);
