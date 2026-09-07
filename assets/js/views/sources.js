(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data;

  AD.views.sources = function () {
    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Reference',
        title: 'Sources',
        lede: 'Standard academic commentaries, critical editions, and multi-view volumes. Where a position is described on this site, it is described from works its own advocates wrote.'
      }),
      C.callout('On what is cited here', [
        'Nothing on this site depends on a source that is not listed. Where a claim is contested among specialists — the date of Revelation, the date of the Book of Parables, the identity of Daniel’s fourth kingdom — the contest is reported rather than resolved.',
        'Scripture quotations are drawn from public-domain translations and are identified individually.'
      ]),
      el('div', { style: 'margin-top: var(--sp-6)' }, D.sources.map(function (g) {
        return el('section', { style: 'margin-bottom: var(--sp-6)' }, [
          el('p', { class: 'fgroup__label', text: g.group }),
          el('div', {}, g.items.map(function (i) {
            return el('div', { class: 'src' }, [
              el('p', {}, [
                el('b', { text: i.a }), ', ',
                el('cite', { text: i.t }),
                i.p ? ' (' + i.p + (i.y ? ', ' + i.y : '') + ').' : (i.y ? ' (' + i.y + ').' : '')
              ]),
              i.n ? el('p', { class: 'src__note', text: i.n }) : null
            ]);
          }))
        ]);
      }))
    ]);
  };
})(window.AD);
