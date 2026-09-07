(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data, U = AD.util;

  AD.views.books = function (params) {
    var active = '';
    var listWrap = el('div', {});
    var counts = {};
    D.bookSurvey.forEach(function (b) { counts[b.relevance] = (counts[b.relevance] || 0) + 1; });

    var filterBtns = [{ id: '', label: 'All', n: D.bookSurvey.length }].concat(
      D.bookRelevance.map(function (r) { return { id: r.id, label: r.label, n: counts[r.id] || 0, title: r.note }; })
    );

    var bar = el('div', { class: 'fgroup__opts', style: 'margin-bottom: var(--sp-5)' },
      filterBtns.map(function (f) {
        var b = el('button', {
          class: 'opt', type: 'button', title: f.title || '',
          'aria-pressed': active === f.id ? 'true' : 'false',
          onclick: function () {
            active = f.id;
            bar.querySelectorAll('.opt').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
            b.setAttribute('aria-pressed', 'true');
            paint();
          }
        }, [f.label, el('span', { class: 'opt__n', text: String(f.n) })]);
        return b;
      }));

    function paint() {
      U.clear(listWrap);
      var groups = [];
      D.bookSurvey.forEach(function (b) {
        if (active && b.relevance !== active) return;
        if (!groups.length || groups[groups.length - 1].name !== b.group) {
          groups.push({ name: b.group, items: [] });
        }
        groups[groups.length - 1].items.push(b);
      });
      if (!groups.length) { listWrap.appendChild(el('p', { class: 'empty', text: 'No books in this category.' })); return; }
      groups.forEach(function (g) {
        listWrap.appendChild(el('section', { style: 'margin-bottom: var(--sp-6)' }, [
          el('p', { class: 'fgroup__label', text: g.name }),
          el('div', { class: 'grid grid--2' }, g.items.map(card))
        ]));
      });
    }

    function card(b) {
      var tone = ({
        core: 'var(--st-parousia)', contributing: 'var(--st-signs)',
        background: 'var(--st-foundations)', none: 'var(--muted)'
      })[b.relevance];
      var rel = D.bookRelevance.filter(function (r) { return r.id === b.relevance; })[0];
      return el('article', {
        class: 'panel', id: 'book-' + U.slug(b.book),
        style: 'border-left: 3px solid ' + tone + (b.comparative ? '; border-style: dashed' : '')
      }, [
        el('div', { style: 'display:flex; align-items:baseline; justify-content:space-between; gap:.75rem; flex-wrap:wrap' }, [
          el('h3', { style: 'font-family: var(--f-display); font-size: 1.2rem', text: b.book }),
          el('span', { class: 'chip', style: 'color:' + tone + '; border-color: currentColor; background: transparent', title: rel ? rel.note : '', text: rel ? rel.label : b.relevance })
        ]),
        el('p', { style: 'margin: var(--sp-2) 0', text: b.note }),
        b.refs.length ? C.refList(b.refs.map(function (r) { return { ref: r, book: b.book }; })) : null
      ]);
    }

    paint();

    if (params && params.b) {
      setTimeout(function () {
        var n = document.getElementById('book-' + params.b);
        if (n && n.scrollIntoView) n.scrollIntoView({ behavior: U.reducedMotion() ? 'auto' : 'smooth', block: 'center' });
      }, 60);
    }

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Reference',
        title: 'Every book, assessed',
        lede: 'All sixty-six books of the Protestant canon, plus 1 Enoch as a comparative source, surveyed for material about the beginning of all things and the end of the present age. Books with nothing relevant are listed as such rather than omitted, so the survey is complete and honest about its coverage.'
      }),
      bar, listWrap
    ]);
  };
})(window.AD);
