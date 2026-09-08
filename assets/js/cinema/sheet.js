/* Hoja de exploración: un solo botón abre todo el sitio.
   Sustituye a la fila de botones. Aparece centrada, con revelado escalonado,
   navegable con teclado y cerrable con Escape. */
(function (AD) {
  'use strict';
  var el = AD.util.el, I = AD.i18n;
  var node = null, lastFocus = null;

  var GROUPS = [
    { title: { es: 'El recorrido', en: 'The journey', de: 'Der Weg', fr: 'Le parcours' },
      items: [
        { scene: true, key: 'top',   name: { es: 'Volver al principio', en: 'Back to the beginning', de: 'Zurück zum Anfang', fr: 'Revenir au début' },
          note: { es: 'Génesis 1', en: 'Genesis 1', de: '1. Mose 1', fr: 'Genèse 1' } },
        { scene: true, key: 'stages', name: { es: 'Ir a una etapa', en: 'Jump to a stage', de: 'Zu einer Stufe springen', fr: 'Aller à une étape' },
          note: { es: '11 escenas', en: '11 scenes', de: '11 Szenen', fr: '11 scènes' } }
      ] },
    { title: { es: 'Estudio', en: 'Study', de: 'Studium', fr: 'Étude' },
      items: [
        { key: 'questions', name: { es: 'Preguntas difíciles', en: 'Difficult questions', de: 'Schwierige Fragen', fr: 'Questions difficiles' },
          note: { es: 'Lo que el texto deja abierto, con niveles de evidencia', en: 'What the text leaves open, graded by evidence',
                  de: 'Was der Text offenlässt, nach Belegstufen', fr: 'Ce que le texte laisse ouvert, par niveau de preuve' } },
        { key: 'library', name: { es: 'Biblioteca visual', en: 'Visual library', de: 'Bildarchiv', fr: 'Bibliothèque visuelle' },
          note: { es: '28 imágenes por acto y capítulo', en: '28 images by act and chapter', de: '28 Bilder nach Akt und Kapitel', fr: '28 images par acte et chapitre' } },
        { key: 'index', name: { es: 'Todas las fichas', en: 'All entries', de: 'Alle Einträge', fr: 'Toutes les fiches' },
          note: { es: '101 fichas con filtros', en: '101 entries with filters', de: '101 Einträge mit Filtern', fr: '101 fiches avec filtres' } },
        { key: 'study', name: { es: 'Modo estudio', en: 'Study mode', de: 'Studienmodus', fr: 'Mode étude' },
          note: { es: 'Todo el corpus en un solo lugar', en: 'The whole corpus in one place', de: 'Das ganze Korpus an einem Ort', fr: 'Tout le corpus en un lieu' } }
      ] },
    { title: { es: 'Referencia', en: 'Reference', de: 'Nachschlagen', fr: 'Référence' },
      items: [
        { key: 'map', name: { es: 'Mapa de conexiones', en: 'Passage map', de: 'Stellenkarte', fr: 'Carte des passages' },
          note: { es: '56 pasajes, 65 relaciones', en: '56 passages, 65 relations', de: '56 Stellen, 65 Bezüge', fr: '56 passages, 65 relations' } },
        { key: 'atlas', name: { es: 'Atlas de lugares', en: 'Atlas of places', de: 'Ortsatlas', fr: 'Atlas des lieux' },
          note: { es: '20 lugares del mundo antiguo', en: '20 places of the ancient world', de: '20 Orte der Alten Welt', fr: '20 lieux du monde ancien' } },
        { key: 'enoch', name: { es: '1 Enoc', en: '1 Enoch', de: '1. Henoch', fr: '1 Hénoch' },
          note: { es: 'Fuente comparativa, separada', en: 'A comparative source, kept separate', de: 'Vergleichsquelle, getrennt gehalten', fr: 'Source comparative, tenue à part' } },
        { key: 'frameworks', name: { es: 'Marcos interpretativos', en: 'Frameworks', de: 'Deutungsrahmen', fr: 'Cadres d’interprétation' },
          note: { es: 'Siete marcos y tres lentes', en: 'Seven frameworks, three lenses', de: 'Sieben Rahmen, drei Linsen', fr: 'Sept cadres, trois lentilles' } },
        { key: 'glossary', name: { es: 'Glosario', en: 'Glossary', de: 'Glossar', fr: 'Glossaire' },
          note: { es: '50 términos', en: '50 terms', de: '50 Begriffe', fr: '50 termes' } },
        { key: 'sources', name: { es: 'Fuentes', en: 'Sources', de: 'Quellen', fr: 'Sources' },
          note: { es: 'Bibliografía y licencias', en: 'Bibliography and licences', de: 'Bibliographie und Lizenzen', fr: 'Bibliographie et licences' } }
      ] }
  ];

  function close() {
    if (!node) return;
    node.classList.remove('is-open');
    var n = node; node = null;
    var btn = AD.hudRefs && AD.hudRefs.explore;
    if (btn) btn.setAttribute('aria-expanded', 'false');
    setTimeout(function () { if (n.parentNode) n.parentNode.removeChild(n); }, 300);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function stageList() {
    return AD.data.scenes.filter(function (s) { return s.stage; }).map(function (s, i) {
      var T = AD.data.sceneText[s.id];
      return el('button', {
        class: 'sheet__stage', type: 'button',
        onclick: function () { close(); AD.journey.gotoScene(s.id); }
      }, [
        el('span', { class: 'sheet__num', text: s.numeral }),
        el('span', { text: I.text(T.name) })
      ]);
    });
  }

  function open() {
    if (node) { close(); return; }
    lastFocus = document.activeElement;
    var btn = AD.hudRefs && AD.hudRefs.explore;
    if (btn) btn.setAttribute('aria-expanded', 'true');

    var cols = GROUPS.map(function (g, gi) {
      return el('section', { class: 'sheet__group', style: '--gi:' + gi }, [
        el('p', { class: 'sheet__gtitle', text: I.text(g.title) })
      ].concat(g.items.map(function (it, ii) {
        if (it.key === 'stages') {
          return el('div', { class: 'sheet__stages', style: '--ii:' + ii }, stageList());
        }
        return el('button', {
          class: 'sheet__item', type: 'button', style: '--ii:' + ii,
          onclick: function () {
            close();
            if (it.key === 'top') window.scrollTo({ top: 0, behavior: AD.util.reducedMotion() ? 'auto' : 'smooth' });
            else AD.panel.open(it.key);
          }
        }, [
          el('span', { class: 'sheet__name', text: I.text(it.name) }),
          el('span', { class: 'sheet__note', text: I.text(it.note) })
        ]);
      })));
    });

    node = el('div', {
      class: 'sheet', role: 'dialog', 'aria-modal': 'true', 'aria-label': AD.labels.explore(),
      onkeydown: function (e) { if (e.key === 'Escape') { e.stopPropagation(); close(); } }
    }, [
      el('div', { class: 'sheet__scrim', onclick: close }),
      el('div', { class: 'sheet__panel glass glass--strong' }, [
        el('button', { class: 'sheet__close', type: 'button', 'aria-label': I.t('nav.close'), onclick: close }, '✕'),
        el('div', { class: 'sheet__cols' }, cols)
      ])
    ]);
    document.body.appendChild(node);
    AD.util.nextFrame(function () { if (node) node.classList.add('is-open'); });
    var first = node.querySelector('.sheet__item');
    if (first) first.focus();
  }

  AD.sheet = { open: open, close: close, isOpen: function () { return !!node; } };
})(window.AD);
