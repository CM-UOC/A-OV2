(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data, I = AD.i18n;

  function evidenceChip(id) {
    var e = D.evidenceById[id];
    if (!e) return null;
    return el('span', { class: 'ev ev--' + e.tone, title: e.def }, [
      el('span', { class: 'ev__dot' }), e.short
    ]);
  }

  function block(labelKey, text, cls) {
    if (!text) return null;
    return el('div', { class: 'qblock ' + (cls || '') }, [
      el('p', { class: 'qblock__label', text: I.t(labelKey) }),
      el('p', { text: text })
    ]);
  }

  AD.views.questions = function (params) {
    var list = el('div', { class: 'q-list' });

    function paint(openId) {
      AD.util.clear(list);
      D.questions.forEach(function (q) {
        list.appendChild(card(q, q.id === openId));
      });
    }

    function card(q, open) {
      var body = el('div', { class: 'q__body', hidden: !open }, buildBody(q));
      var btn = el('button', {
        class: 'q__head', type: 'button', 'aria-expanded': open ? 'true' : 'false',
        onclick: function () {
          var now = body.hidden;
          body.hidden = !now;
          btn.setAttribute('aria-expanded', now ? 'true' : 'false');
          art.setAttribute('data-open', now ? 'true' : 'false');
        }
      }, [
        el('div', {}, [
          el('span', { class: 'q__act', text: 'ACTO ' + q.act }),
          el('h3', { class: 'q__title', text: I.text(q.title) }),
          el('p', { class: 'q__q', text: I.text(q.question) })
        ]),
        el('span', { class: 'q__caret', 'aria-hidden': 'true', text: open ? '—' : '+' })
      ]);
      var art = el('article', { class: 'q glass', id: 'q-' + q.id, 'data-open': open ? 'true' : 'false' }, [btn, body]);
      return art;
    }

    function buildBody(q) {
      var out = [];

      /* pasajes legibles dentro del sitio */
      if (q.passages && q.passages.length) {
        out.push(el('div', { class: 'q__passages' }, q.passages.map(function (pid) {
          var p = D.passages[pid];
          if (!p) return null;
          return el('button', {
            class: 'passage-btn', type: 'button',
            onclick: function () { AD.components.passage.open(pid); }
          }, [
            el('span', { class: 'passage-btn__ref', text: I.ref(p.ref) }),
            el('span', { class: 'passage-btn__cue', text: I.t('q.readPassage') })
          ]);
        })));
      }

      out.push(el('div', { class: 'split' }, [
        el('div', { class: 'slab slab--text' }, [
          el('p', { class: 'slab__label' }, [I.t('q.textSays')]),
          el('p', { text: I.text(q.textSays) })
        ]),
        el('div', { class: 'slab slab--interp' }, [
          el('p', { class: 'slab__label' }, [I.t('q.textOmits')]),
          el('p', { text: I.text(q.textOmits) })
        ])
      ]));

      out.push(block('q.context', I.text(q.context)));
      out.push(block('q.metaphor', I.text(q.metaphor), 'qblock--deduce'));
      out.push(block('q.purpose', I.text(q.purpose), 'qblock--purpose'));

      out.push(el('p', { class: 'qblock__label', style: 'margin-top: var(--sp-5)', text: I.t('q.positions') }));
      out.push(el('div', { class: 'pos-list' }, q.positions.map(function (p) {
        return el('article', { class: 'pos' }, [
          el('div', { class: 'pos__head' }, [
            el('span', { class: 'pos__key', text: p.key }),
            el('h4', { text: I.text(p.name) }),
            evidenceChip(p.evidence)
          ]),
          el('p', { class: 'pos__sum', text: I.text(p.summary) }),
          el('div', { class: 'pos__cols' }, [
            el('div', {}, [
              el('p', { class: 'pos__lab pos__lab--for', text: I.t('q.arguments') }),
              el('p', { text: I.text(p.args) })
            ]),
            el('div', {}, [
              el('p', { class: 'pos__lab pos__lab--against', text: I.t('q.objections') }),
              el('p', { text: I.text(p.objs) })
            ])
          ])
        ]);
      })));

      out.push(el('div', { class: 'qblock qblock--open' }, [
        el('p', { class: 'qblock__label', text: I.t('q.undetermined') }),
        el('p', { text: I.text(q.undetermined) })
      ]));

      if (q.sources && q.sources.length) {
        out.push(el('div', { class: 'qblock' }, [
          el('p', { class: 'qblock__label', text: I.t('q.sources') }),
          el('ul', { class: 'q__sources' }, q.sources.map(function (s) { return el('li', { text: s }); }))
        ]));
      }
      return out;
    }

    paint(params && params.q);
    if (params && params.q) {
      setTimeout(function () {
        var n = document.getElementById('q-' + params.q);
        if (n && n.scrollIntoView) n.scrollIntoView({ block: 'start', behavior: AD.util.reducedMotion() ? 'auto' : 'smooth' });
      }, 60);
    }

    return el('div', {}, [
      C.pageHead({
        eyebrow: I.t('nav.questions'),
        title: { es: 'Preguntas que el relato deja abiertas', en: 'Questions the narrative leaves open',
                 de: 'Fragen, die der Text offenlässt', fr: 'Questions que le récit laisse ouvertes' }[I.get()],
        lede: { es: 'Cada ficha separa lo que el texto dice de lo que no explica, añade qué puede deducirse cuando el lenguaje es figurado y para qué está ahí el episodio, y clasifica cada postura por su nivel de evidencia.',
                en: 'Each entry separates what the text says from what it does not explain, adds what can be deduced when the language is figurative and why the episode is there, and classifies every position by its level of evidence.',
                de: 'Jeder Eintrag trennt, was der Text sagt, von dem, was er nicht erklärt, ergänzt, was sich bei bildlicher Rede ableiten lässt und wozu die Episode dasteht, und ordnet jede Deutung einer Belegstufe zu.',
                fr: 'Chaque fiche sépare ce que le texte dit de ce qu’il n’explique pas, ajoute ce qui peut se déduire quand la langue est figurée et à quoi sert l’épisode, et classe chaque position selon son niveau de preuve.' }[I.get()]
      }),
      list
    ]);
  };
})(window.AD);
