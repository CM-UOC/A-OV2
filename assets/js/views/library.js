(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data, I = AD.i18n;

  var ROLE = {
    hero:         { es: 'Apertura de capítulo', en: 'Chapter opening', de: 'Kapitelauftakt', fr: 'Ouverture de chapitre' },
    interpretive: { es: 'Imagen interpretativa', en: 'Interpretive image', de: 'Deutungsbild', fr: 'Image interprétative' },
    background:   { es: 'Escena narrativa', en: 'Narrative scene', de: 'Erzählszene', fr: 'Scène narrative' }
  };

  function evChip(id) {
    var e = D.evidenceById[id];
    if (!e) return null;
    return el('span', { class: 'ev ev--' + e.tone, title: e.def }, [el('span', { class: 'ev__dot' }), e.short]);
  }

  function figure(a, eager) {
    var refs = (a.refs || []).concat(a.enoch || []);
    var caption = el('figcaption', { class: 'lib__cap glass glass--subtle', 'data-safe': a.safeText }, [
      el('p', { class: 'lib__role' }, [
        I.text(ROLE[a.role] || ROLE.background),
        el('span', { class: 'lib__id', text: a.id })
      ]),
      el('h3', { class: 'lib__title', text: a.title }),
      a.desc ? el('p', { class: 'lib__desc', text: a.desc }) : null,
      el('div', { class: 'lib__meta' }, [evChip(a.evidence)].concat(
        refs.map(function (r) {
          var pid = findPassage(r);
          return el('button', {
            class: 'ref lib__ref', type: 'button',
            title: pid ? I.t('q.readPassage') : r,
            onclick: function () { AD.components.passage.open(pid || r); }
          }, I.ref(r));
        })
      )),
      a.warning ? el('p', { class: 'lib__warn', text: a.warning }) : null
    ]);

    return el('figure', { class: 'lib__fig', 'data-role': a.role, 'data-safe': a.safeText || 'left-upper' }, [
      el('div', { class: 'lib__frame' }, [
        el('img', {
          src: D.libraryBase + a.file + '.jpg', alt: a.alt,
          loading: eager ? 'eager' : 'lazy', decoding: 'async',
          style: 'object-position:' + (a.focal || '50% 50%')
        })
      ]),
      caption
    ]);
  }

  function findPassage(ref) {
    var keys = Object.keys(D.passages);
    for (var i = 0; i < keys.length; i++) {
      var p = D.passages[keys[i]];
      if (p.ref === ref || p.ref.indexOf(ref.split('–')[0]) === 0) return keys[i];
    }
    return null;
  }

  AD.views.library = function () {
    var acts = [];
    D.library.forEach(function (a) {
      if (!acts.length || acts[acts.length - 1].act !== a.act) acts.push({ act: a.act, items: [] });
      acts[acts.length - 1].items.push(a);
    });

    var n = 0;
    var body = acts.map(function (g) {
      var name = D.libraryActNames[g.act];
      return el('section', { class: 'lib__act' }, [
        el('header', { class: 'lib__acthead' }, [
          el('span', { class: 'lib__actnum', text: g.act }),
          el('h2', { text: name ? I.text(name) : g.act }),
          el('span', { class: 'lib__count', text: g.items.length })
        ])
      ].concat(g.items.map(function (a) { return figure(a, n++ < 2); })));
    });

    return el('div', { class: 'lib' }, [
      C.pageHead({
        eyebrow: { es: 'Biblioteca visual', en: 'Visual library', de: 'Bildarchiv', fr: 'Bibliothèque visuelle' }[I.get()],
        title: { es: 'El principio, en imágenes', en: 'The beginning, in images',
                 de: 'Der Anfang, in Bildern', fr: 'Le commencement, en images' }[I.get()],
        lede: { es: '28 imágenes generadas para este proyecto, ordenadas por acto y capítulo. Cada una indica su función narrativa, su nivel de evidencia y los pasajes con los que se relaciona.',
                en: '28 images made for this project, ordered by act and chapter. Each states its narrative function, its evidence level and the passages it relates to.',
                de: '28 für dieses Projekt erzeugte Bilder, nach Akt und Kapitel geordnet. Jedes nennt seine erzählerische Funktion, seine Belegstufe und die zugehörigen Stellen.',
                fr: '28 images réalisées pour ce projet, classées par acte et chapitre. Chacune indique sa fonction narrative, son niveau de preuve et les passages associés.' }[I.get()]
      }),
      C.callout({ es: 'Cómo leer estas imágenes', en: 'How to read these images',
                  de: 'Wie diese Bilder zu lesen sind', fr: 'Comment lire ces images' }[I.get()],
        [I.text(D.libraryNote),
         { es: 'Resolución pendiente: los originales miden 1672 × 941 px y **no alcanzan** el mínimo de producción de 2560 × 1440 que pedía el encargo. Se conservan sin ampliar.',
           en: 'Resolution pending: the originals are 1672 × 941 px and **fall short of** the 2560 × 1440 production minimum the brief asked for. They are kept without upscaling.',
           de: 'Auflösung offen: die Originale messen 1672 × 941 px und **erreichen nicht** das geforderte Produktionsminimum von 2560 × 1440. Sie bleiben unskaliert.',
           fr: 'Résolution en attente : les originaux font 1672 × 941 px et **n’atteignent pas** le minimum de production de 2560 × 1440 demandé. Ils sont conservés sans agrandissement.' }[I.get()]]),
      el('div', {}, body)
    ]);
  };
})(window.AD);
