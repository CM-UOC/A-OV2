/* Study Mode — the whole corpus in one place, without leaving the journey. */
(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components;

  var SECTIONS = [
    { key: 'questions', label: 'Questions' },
    { key: 'index', label: 'All entries' },
    { key: 'mirror', label: 'Beginning & End' },
    { key: 'sequences', label: 'Contested order' },
    { key: 'frameworks', label: 'Frameworks' },
    { key: 'enoch', label: '1 Enoch' },
    { key: 'canon', label: 'Canon & apocrypha' },
    { key: 'books', label: 'Canon survey' },
    { key: 'atlas', label: 'Places' },
    { key: 'map', label: 'Passage map' },
    { key: 'glossary', label: 'Glossary' },
    { key: 'about', label: 'About' },
    { key: 'methodology', label: 'Methodology' },
    { key: 'sources', label: 'Sources' }
  ];

  var VIEWS = {
    questions: function (p) { return AD.views.questions(p); },
    index: function (p) { return AD.views.index(p); },
    mirror: function () { return AD.views.mirror(); },
    sequences: function () { return AD.views.sequences(); },
    frameworks: function () { return AD.views.frameworks(); },
    enoch: function () { return AD.views.enoch(); },
    canon: function () { return AD.views.canon(); },
    books: function (p) { return AD.views.books(p); },
    atlas: function () { return AD.views.atlas(); },
    map: function () { return AD.views.map(); },
    glossary: function (p) { return AD.views.glossary(p); },
    about: function () { return AD.views.introduction(); },
    methodology: function () { return AD.views.methodology(); },
    sources: function () { return AD.views.sources(); }
  };

  AD.views.study = function (params) {
    var current = (params && params.section) || 'index';
    var body = el('div', { class: 'study__body' });
    var buttons = {};

    function paint(key, p) {
      current = key;
      SECTIONS.forEach(function (s) {
        if (buttons[s.key]) {
          if (s.key === key) buttons[s.key].setAttribute('aria-current', 'true');
          else buttons[s.key].removeAttribute('aria-current');
        }
      });
      AD.util.clear(body);
      body.appendChild((VIEWS[key] || VIEWS.index)(p || {}));
      var drawerBody = document.querySelector('.drawer__body');
      if (drawerBody) drawerBody.scrollTop = 0;
    }

    var nav = el('nav', { class: 'study__nav', 'aria-label': 'Study sections' },
      SECTIONS.map(function (s) {
        var b = el('button', { type: 'button', onclick: function () { paint(s.key); } }, s.label);
        buttons[s.key] = b;
        return b;
      }));

    paint(current, params);
    return el('div', { class: 'study' }, [nav, body]);
  };
})(window.AD);
