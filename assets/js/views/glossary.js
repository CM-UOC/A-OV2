(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data, U = AD.util;

  AD.views.glossary = function (params) {
    var terms = D.glossary.slice().sort(function (a, b) { return a.term.localeCompare(b.term); });
    var letters = {};
    terms.forEach(function (t) { letters[t.term[0].toUpperCase()] = true; });

    var alpha = el('nav', { class: 'alpha-index', 'aria-label': 'Jump to letter' },
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(function (L) {
        return letters[L]
          ? el('a', { href: '#letter-' + L, text: L })
          : el('span', { 'aria-hidden': 'true', text: L });
      }));

    var seenLetter = {};
    var list = el('div', {}, terms.map(function (t) {
      var L = t.term[0].toUpperCase();
      var anchor = null;
      if (!seenLetter[L]) { seenLetter[L] = true; anchor = el('span', { id: 'letter-' + L }); }
      return el('article', { class: 'term', id: 'term-' + U.slug(t.term) }, [
        anchor,
        el('h3', {}, [t.term, t.aka ? el('span', { class: 'term__aka', text: t.aka }) : null]),
        el('p', { text: t.def }),
        (t.refs && t.refs.length) ? C.refList(t.refs.map(function (r) { return { ref: r, book: r.split(/\s\d/)[0] }; })) : null,
        (t.see && t.see.length) ? el('p', { class: 'lane__step-note', style: 'margin-top:.4rem', text: 'See also: ' + t.see.join(', ') }) : null
      ]);
    }));

    if (params && params.t) {
      setTimeout(function () {
        var n = document.getElementById('term-' + params.t);
        if (n && n.scrollIntoView) n.scrollIntoView({ behavior: U.reducedMotion() ? 'auto' : 'smooth', block: 'center' });
      }, 60);
    }

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Reference',
        title: 'Terms and symbols',
        lede: D.glossary.length + ' entries covering the vocabulary of apocalyptic literature, the technical terms of the interpretive frameworks, and the recurring symbols of the texts.'
      }),
      alpha, list
    ]);
  };
})(window.AD);
