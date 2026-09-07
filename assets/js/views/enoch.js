(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data;

  AD.views.enoch = function () {
    var entries = D.events.filter(function (e) { return e.source === 'comparative'; });

    var booklets = el('div', { class: 'grid grid--2' }, D.enochBooklets.map(function (b) {
      return el('article', { class: 'panel', style: 'border-style: dashed; border-color: var(--st-origins)' }, [
        el('p', { class: 'eyebrow', style: 'color: var(--st-origins-ink)', text: b.ref }),
        el('h3', { style: 'font-family: var(--f-display); font-size: 1.15rem; margin: var(--sp-2) 0', text: b.name }),
        el('p', { class: 'lane__step-note', text: b.date }),
        el('p', { style: 'margin-top: var(--sp-2)', text: b.note })
      ]);
    }));

    var themes = el('div', {}, D.enochThemes.map(function (t) {
      return el('article', { class: 'panel', style: 'margin-bottom: var(--sp-4)' }, [
        el('h3', { style: 'font-family: var(--f-display); font-size: 1.2rem; margin-bottom: var(--sp-3)', text: t.title }),
        el('div', { class: 'ref-list', style: 'margin-bottom: var(--sp-3)' },
          t.enochRefs.map(function (r) { return el('span', { class: 'ref ref--enoch' }, r); })
            .concat(t.bibleRefs.map(function (r) { return el('span', { class: 'ref' }, r); }))),
        el('div', { class: 'split' }, [
          el('div', { class: 'slab slab--text' }, [
            el('p', { class: 'slab__label' }, ['What is similar']),
            el('p', { text: t.similar })
          ]),
          el('div', { class: 'slab slab--interp' }, [
            el('p', { class: 'slab__label' }, ['What differs']),
            el('p', { text: t.different })
          ])
        ]),
        el('div', { class: 'enoch-note', style: 'margin-top: var(--sp-3)' }, [
          el('p', { class: 'enoch-note__head' }, ['Interpretive caution']),
          el('p', { text: t.caution })
        ])
      ]);
    }));

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Comparative source',
        title: 'The Book of 1 Enoch',
        lede: 'A collection of Jewish apocalyptic writings composed between roughly the third century BCE and the first century CE, attributed to the Enoch of Genesis 5:24. It is presented here as a comparative source, never merged with the biblical material.'
      }),
      C.callout('Canonical status', [
        '1 Enoch is **canonical in the Ethiopian Orthodox Tewahedo Church**, where it is known as Henok, and where the only complete text — in Ge’ez — has been preserved.',
        'It is **not canonical** in Jewish tradition, nor in the Catholic, Eastern Orthodox, or Protestant canons, where it is classified as apocryphal or pseudepigraphal depending on the tradition’s terminology.',
        'It is quoted by name in Jude 14–15. That citation shows the work was known and valued in some early Christian circles; it does not by itself confer canonical status, any more than Paul’s quotation of Greek poets confers it on them.'
      ]),
      el('hr', { class: 'rule' }),
      head('The corpus is a library, not a book'),
      el('p', { class: 'prose', style: 'margin-bottom: var(--sp-4)', text: 'Its parts differ in date, genre, and outlook by as much as three centuries, and should be cited by booklet rather than as a single work.' }),
      booklets,
      el('hr', { class: 'rule rule--gold' }),
      head('Themes compared with the biblical texts'),
      themes,
      el('hr', { class: 'rule' }),
      head('Rules this site follows on parallels'),
      el('ul', { class: 'prose' }, D.enochCautions.map(function (c) { return el('li', { text: c }); })),
      el('hr', { class: 'rule' }),
      head('1 Enoch entries in the chronology'),
      el('p', { class: 'prose', style: 'margin-bottom: var(--sp-4)', text: 'These ' + entries.length + ' entries appear in the main chronology, marked as comparative and filterable in or out.' }),
      el('div', { class: 'event-list' }, entries.map(function (e, i) {
        return el('div', { style: C.stageVars(e.stage) }, [C.eventCard(e, i)]);
      }))
    ]);
  };

  function head(t) {
    return el('h2', { style: 'font-family: var(--f-display); font-size: var(--t-lg); margin-bottom: var(--sp-3)', text: t });
  }
})(window.AD);
