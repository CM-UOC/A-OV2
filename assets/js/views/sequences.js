(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data;

  AD.views.sequences = function () {
    var lanes = el('div', { class: 'lanes' }, D.sequences.map(function (s) {
      return el('section', { class: 'lane', style: '--lane-color: ' + s.color }, [
        el('header', { class: 'lane__head' }, [
          el('h3', { text: s.name }),
          el('p', { text: s.note })
        ]),
        el('ol', { class: 'lane__steps' }, s.steps.map(function (st) {
          return el('li', {}, [
            el('p', { class: 'lane__step-title', text: st.title }),
            el('p', { class: 'lane__step-note', text: st.note }),
            (st.events && st.events.length) ? el('div', { class: 'related', style: 'margin-top: .35rem' },
              st.events.map(function (id) {
                var e = C.findEvent(id);
                if (!e) return null;
                return el('button', { type: 'button', onclick: function () { C.focusEvent(id); } }, e.title);
              })) : null
          ]);
        }))
      ]);
    }));

    var div = el('div', { class: 'grid grid--2', style: 'margin-top: var(--sp-6)' },
      D.divergences.map(function (d) {
        return el('article', { class: 'divergence' }, [
          el('h4', { text: d.q }),
          el('p', { text: d.a })
        ]);
      }));

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Contested order',
        title: 'Five reconstructions, side by side',
        lede: 'Where the sequence of events is disputed, showing one timeline would be a claim, not a summary. These five columns are read in parallel: each is a coherent account held by serious interpreters, and they disagree at identifiable points.'
      }),
      C.callout('None of these is presented as correct', [
        'Each column states a position as its adherents would recognise it. The differences are not usually about which texts are authoritative but about how they relate — above all, whether Revelation 20 continues Revelation 19 or restarts the age from the first coming.'
      ]),
      el('div', { style: 'margin-top: var(--sp-6)' }, [lanes]),
      el('hr', { class: 'rule rule--gold' }),
      el('h2', { style: 'font-family: var(--f-display); font-size: var(--t-lg)', text: 'Where exactly they diverge' }),
      div
    ]);
  };
})(window.AD);
