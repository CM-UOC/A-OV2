(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data;

  AD.views.introduction = function () {
    var intro = D.intro;
    var canonical = D.events.filter(function (e) { return e.source === 'canonical'; }).length;
    var comparative = D.events.length - canonical;
    var refs = 0;
    D.events.forEach(function (e) { refs += e.refs.length; });

    var hero = el('section', { class: 'hero' }, [
      el('p', { class: 'eyebrow hero__eyebrow', text: intro.eyebrow }),
      el('h1', { text: intro.title }),
      el('p', { class: 'hero__lede', text: intro.lede }),
      el('p', { class: 'hero__arc' }, [el('i'), intro.arc]),
      el('div', { class: 'stat-row' }, [
        stat(canonical, 'canonical entries'),
        stat(comparative, '1 Enoch entries'),
        stat(refs, 'scripture references'),
        stat(7, 'frameworks compared'),
        stat(67, 'books surveyed')
      ])
    ]);

    var body = el('div', { class: 'prose' }, intro.sections.map(function (sec) {
      return el('section', {}, [
        el('h2', { text: sec.h })
      ].concat(sec.p.map(function (p) { return el('p', { html: C.md(p) }); })));
    }));

    var caution = C.callout('A note on limits', [
      'This site does not calculate a date for the end of the world, and does not identify any living person, government, religion, technology, or event as the fulfilment of a prophecy. Where a tradition has historically made such identifications, that is recorded as a fact about the tradition.',
      'Contested interpretations are labelled as contested. Where scholars disagree, the disagreement is reported rather than resolved.'
    ]);

    var howto = el('section', {}, [
      el('h2', { class: 'prose', style: 'font-family: var(--f-display); font-size: var(--t-lg); margin-bottom: var(--sp-4)', text: 'How to use this site' }),
      el('div', { class: 'grid grid--2' }, intro.howto.map(function (h) {
        return el('article', { class: 'panel panel--quiet' }, [
          el('h3', { text: h.k }),
          el('p', { text: h.v })
        ]);
      }))
    ]);

    return el('div', {}, [
      hero, body,
      el('hr', { class: 'rule rule--gold' }),
      caution,
      el('hr', { class: 'rule' }),
      howto
    ]);
  };

  function stat(n, label) {
    return el('div', {}, [
      el('p', { class: 'stat__n', text: String(n) }),
      el('p', { class: 'stat__l', text: label })
    ]);
  }
})(window.AD);
