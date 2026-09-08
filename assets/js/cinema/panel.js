/* The reading drawer. Every reference view opens here, over the journey,
   so the scene behind never unmounts and nothing ever cuts to a new page. */
(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components;

  var scrim = null, drawer = null, body = null, titleEl = null;
  var openKey = null, lastFocus = null;

  var PANELS = {
    about:       { title: 'About', view: function () { return AD.views.introduction(); } },
    index:       { title: 'All entries', view: function (p) { return AD.views.index(p); } },
    mirror:      { title: 'Beginning & End', view: function () { return AD.views.mirror(); } },
    sequences:   { title: 'Contested order', view: function () { return AD.views.sequences(); } },
    frameworks:  { title: 'Frameworks', view: function () { return AD.views.frameworks(); } },
    enoch:       { title: '1 Enoch', view: function () { return AD.views.enoch(); } },
    canon:       { title: 'Canon & apocrypha', view: function () { return AD.views.canon(); } },
    books:       { title: 'Canon survey', view: function (p) { return AD.views.books(p); } },
    map:         { title: 'Passage map', view: function () { return AD.views.map(); } },
    glossary:    { title: 'Glossary', view: function (p) { return AD.views.glossary(p); } },
    methodology: { title: 'Methodology', view: function () { return AD.views.methodology(); } },
    sources:     { title: 'Sources', view: function () { return AD.views.sources(); } },
    atlas:       { title: 'Places', view: function () { return AD.views.atlas(); } },
    questions:   { title: 'Questions', wide: true, view: function (p) { return AD.views.questions(p); } },
    library:     { title: 'Visual library', wide: true, view: function () { return AD.views.library(); } },
    study:       { title: 'Study mode', wide: true, view: function (p) { return AD.views.study(p); } },
    menu:        { title: 'Deeper reading', view: function () { return menuView(); } }
  };

  AD.panelIndex = [
    { key: 'study', name: 'Study mode', note: 'The whole corpus in one place — every section, without leaving the journey' },
    { key: 'questions', name: 'Difficult questions', note: 'What the text says, what it leaves open, and every position graded by evidence' },
    { key: 'library', name: 'Visual library', note: '28 images by act and chapter, each with its evidence level and passages' },
    { key: 'index', name: 'All entries', note: '101 entries, filterable by book, theme, tradition, certainty, and source' },
    { key: 'atlas', name: 'Places', note: 'A schematic map of the locations named in the texts, linked to their scenes' },
    { key: 'mirror', name: 'Beginning & End', note: 'Genesis motifs paired with their counterparts in the new creation' },
    { key: 'sequences', name: 'Contested order', note: 'Five interpretive reconstructions, side by side' },
    { key: 'frameworks', name: 'Frameworks', note: 'Seven Christian frameworks and three interpretive lenses' },
    { key: 'enoch', name: '1 Enoch', note: 'The comparative source, its booklets, and the limits of parallel' },
    { key: 'canon', name: 'Canon & apocrypha', note: 'Why the boundaries differ between communities' },
    { key: 'books', name: 'Canon survey', note: 'All sixty-six books assessed, including those with nothing relevant' },
    { key: 'map', name: 'Passage map', note: 'Quotations and allusions between the Hebrew Bible, 1 Enoch, and the New Testament' },
    { key: 'glossary', name: 'Glossary', note: '50 terms and symbols' },
    { key: 'about', name: 'About this site', note: 'What apocalyptic literature is, and the limits this site keeps' },
    { key: 'methodology', name: 'Methodology', note: 'Selection, organisation, and the certainty scale' },
    { key: 'sources', name: 'Sources', note: 'Commentaries, critical editions, and multi-view volumes' }
  ];

  function menuView() {
    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Deeper reading',
        title: 'Everything behind the journey',
        lede: 'The scenes carry the short form. These panels carry the evidence, the disagreements, and the sources.'
      }),
      el('div', { class: 'menu-grid' }, AD.panelIndex.map(function (p) {
        return el('button', {
          class: 'menu-item', type: 'button',
          onclick: function () { AD.panel.open(p.key); }
        }, [el('b', { text: p.name }), el('span', { text: p.note })]);
      }))
    ]);
  }

  function build() {
    scrim = el('div', { class: 'drawer-scrim', onclick: function () { AD.panel.close(); } });
    titleEl = el('p', { class: 'drawer__title' });
    body = el('div', { class: 'drawer__body', id: 'drawer-body' });
    drawer = el('aside', {
      class: 'drawer', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Reading panel',
      onkeydown: function (e) { if (e.key === 'Escape') { e.stopPropagation(); AD.panel.close(); } }
    }, [
      el('header', { class: 'drawer__head' }, [
        titleEl,
        el('button', {
          class: 'close-btn', type: 'button', id: 'drawerClose',
          onclick: function () { AD.panel.close(); }
        }, 'Close  ✕')
      ]),
      body
    ]);
    document.body.appendChild(scrim);
    document.body.appendChild(drawer);
  }

  function lock(on) {
    document.documentElement.classList.toggle('is-locked', on);
    document.body.classList.toggle('is-locked', on);
  }

  AD.panel = {
    isOpen: function () { return !!openKey; },
    current: function () { return openKey; },

    open: function (key, params, skipHash) {
      if (!drawer) build();
      var isEvent = key.indexOf('event:') === 0;
      var def = isEvent ? null : PANELS[key];
      if (!isEvent && !def) return;

      if (!openKey) lastFocus = document.activeElement;
      openKey = key;

      AD.util.clear(body);
      if (isEvent) {
        var id = key.slice(6);
        var ev = C.findEvent(id);
        if (!ev) { openKey = null; return; }
        titleEl.textContent = AD.data.stageById[ev.stage].name;
        body.appendChild(eventPanel(ev));
      } else {
        titleEl.textContent = def.title;
        body.appendChild(def.view(params || {}));
      }
      drawer.classList.toggle('drawer--wide', !!(def && def.wide));
      body.scrollTop = 0;

      scrim.classList.add('is-open');
      drawer.classList.add('is-open');
      AD.util.nextFrame(function () {
        if (openKey) { drawer.style.translate = '0 0'; scrim.style.opacity = '1'; }
      });
      lock(true);
      if (AD.journey && AD.journey.setPaused) AD.journey.setPaused(true);
      if (AD.audio && AD.audio.isOn && AD.audio.isOn()) AD.audio.chime(isEvent ? 528 : 396);
      var closeBtn = document.getElementById('drawerClose');
      if (closeBtn) closeBtn.focus();
      if (!skipHash) {
        var hash = '#/p/' + key.replace('event:', 'entry/');
        if (location.hash !== hash) { AD._silentHash = true; location.hash = hash; }
      }
    },

    close: function (skipHash) {
      if (!openKey) return;
      openKey = null;
      scrim.classList.remove('is-open');
      drawer.classList.remove('is-open');
      drawer.style.translate = '';
      scrim.style.opacity = '';
      lock(false);
      if (AD.journey && AD.journey.setPaused) AD.journey.setPaused(false);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
      if (!skipHash && location.hash.indexOf('#/p/') === 0) {
        AD._silentHash = true;
        location.hash = '#/';
      }
    }
  };

  function eventPanel(e) {
    var stage = AD.data.stageById[e.stage];
    AD.store.state.open[e.id] = true;
    var idx = AD.data.events.filter(function (x) { return x.stage === e.stage; }).indexOf(e);
    var card = C.eventCard(e, idx < 0 ? 0 : idx);
    card.classList.add('is-in');
    card.classList.remove('is-reveal');

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Stage ' + stage.num + ' · ' + stage.name,
        title: e.title,
        lede: e.summary
      }),
      el('div', { style: 'padding-left: 0' }, [card]),
      el('p', { class: 'lane__step-note', style: 'margin-top: var(--sp-5)' }, [
        'Open the ',
        el('button', {
          class: 'tag-btn', type: 'button',
          onclick: function () { AD.panel.open('index', { stage: e.stage }); }
        }, 'full index for this stage'),
        ' to see the other entries.'
      ])
    ]);
  }
})(window.AD);
