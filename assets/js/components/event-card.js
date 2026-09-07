/* Expandable event card. */
(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, store = AD.store;
  var seq = 0;

  C.eventCard = function (e, index) {
    var stage = AD.data.stageById[e.stage];
    var bodyId = 'ev-body-' + (++seq);
    var isOpen = !!store.state.open[e.id];

    var body = el('div', {
      class: 'event__body', id: bodyId, hidden: !isOpen
    }, buildBody(e));

    var btn = el('button', {
      class: 'event__btn', type: 'button',
      'aria-expanded': isOpen ? 'true' : 'false',
      'aria-controls': bodyId,
      onclick: function () {
        var open = !store.state.open[e.id];
        store.state.open[e.id] = open;
        body.hidden = !open;
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        card.setAttribute('data-open', open ? 'true' : 'false');
        caret.textContent = open ? '—' : '+';
      }
    }, [
      el('div', {}, [
        el('span', { class: 'event__idx', text: stage.num + '.' + (index + 1) + '  ' + stage.name.toUpperCase() }),
        el('h3', { class: 'event__title', text: e.title }),
        el('p', { class: 'event__summary', text: e.summary }),
        el('div', { class: 'event__meta' }, [
          C.certChip(e.certainty),
          e.source === 'comparative' ? C.sourceChip(e.source) : null,
          el('span', { class: 'chip', title: 'Primary references' },
            (e.refs[0] ? e.refs[0].ref : '') + (e.refs.length > 1 ? ' +' + (e.refs.length - 1) : '')),
          (e.enoch && e.enoch.length && e.source !== 'comparative')
            ? el('span', { class: 'chip chip--comparative', title: 'Has a parallel in 1 Enoch' }, '1 Enoch parallel')
            : null
        ])
      ]),
      caretHolder()
    ]);

    var caret;
    function caretHolder() {
      caret = el('span', { class: 'event__caret', 'aria-hidden': 'true', text: isOpen ? '—' : '+' });
      return caret;
    }

    var card = el('article', {
      class: 'event is-reveal', id: 'event-' + e.id,
      'data-open': isOpen ? 'true' : 'false',
      'data-stage': e.stage,
      style: C.stageVars(e.stage)
    }, [btn, body]);

    return card;
  };

  function buildBody(e) {
    var out = [];

    if (e.quote) out.push(C.quote(e.quote));

    var textSlab = el('div', { class: 'slab slab--text' }, [
      el('p', { class: 'slab__label' }, ['What the text says']),
      el('p', { text: e.context }),
      el('div', { class: 'field' }, [
        el('p', { class: 'field__label', text: 'References' }),
        C.refList(e.refs)
      ])
    ]);

    var interpItems = (e.interpretations || []).map(function (i) {
      return el('li', {}, [
        el('b', { text: C.frameworkName(i.framework) + ' — ' }),
        i.text
      ]);
    });
    var interpSlab = el('div', { class: 'slab slab--interp' }, [
      el('p', { class: 'slab__label' }, ['How it has been read']),
      interpItems.length
        ? el('ul', {}, interpItems)
        : el('p', { text: 'No significant interpretive divergence is recorded for this entry.' })
    ]);

    out.push(el('div', { class: 'split' }, [textSlab, interpSlab]));

    if (e.symbols && e.symbols.length) {
      out.push(el('div', { class: 'field' }, [
        el('p', { class: 'field__label', text: 'Associated symbols' }),
        el('div', { class: 'ref-list' }, e.symbols.map(function (s) {
          return el('span', { class: 'chip' }, s);
        }))
      ]));
    }

    if (e.themes && e.themes.length) {
      out.push(el('div', { class: 'field' }, [
        el('p', { class: 'field__label', text: 'Themes' }),
        el('div', { class: 'ref-list' }, e.themes.map(function (t) {
          var th = AD.data.themeById[t];
          return el('button', {
            class: 'tag-btn', type: 'button', title: th ? th.description : '',
            onclick: function () {
              AD.store.state.filters.theme = [t];
              AD.store.state.stageOnly = null;
              AD.panel.open('index');
            }
          }, th ? th.label : t);
        }))
      ]));
    }

    var cert = AD.data.certaintyById[e.certainty];
    out.push(el('div', { class: 'field' }, [
      el('p', { class: 'field__label', text: 'Chronological certainty — ' + cert.label }),
      el('p', { text: cert.note })
    ]));

    (e.enoch || []).forEach(function (n) {
      out.push(el('div', { class: 'enoch-note' }, [
        el('p', { class: 'enoch-note__head' }, [
          'Parallel in 1 Enoch',
          el('span', { class: 'ref ref--enoch' }, n.ref),
          el('span', { class: 'chip' }, relationLabel(n.relation))
        ]),
        el('p', { text: n.text })
      ]));
    });

    if (e.related && e.related.length) {
      out.push(el('div', { class: 'field' }, [
        el('p', { class: 'field__label', text: 'Related entries' }),
        el('div', { class: 'related' }, e.related.map(function (id) {
          var r = findEvent(id);
          if (!r) return null;
          return el('button', {
            type: 'button',
            onclick: function () { C.focusEvent(id); }
          }, r.title);
        }))
      ]));
    }

    return out;
  }

  function relationLabel(rel) {
    return ({
      quotation: 'Direct quotation',
      parallel: 'Close parallel',
      'shared-tradition': 'Shared tradition',
      contrast: 'Contrast'
    })[rel] || rel;
  }

  function findEvent(id) {
    for (var i = 0; i < AD.data.events.length; i++) if (AD.data.events[i].id === id) return AD.data.events[i];
    return null;
  }
  C.findEvent = findEvent;

  /* Scroll to an event, opening it and clearing filters if it is hidden. */
  C.focusEvent = function (id) {
    if (!findEvent(id)) return;
    AD.panel.open('event:' + id);
  };

  C.scrollToEvent = scrollToEvent;
  function scrollToEvent(id) {
    var node = document.getElementById('event-' + id);
    if (!node) return;
    var btn = node.querySelector('.event__btn');
    var body = node.querySelector('.event__body');
    if (body && body.hidden) { btn.click(); }
    if (node.scrollIntoView) node.scrollIntoView({ behavior: AD.util.reducedMotion() ? 'auto' : 'smooth', block: 'center' });
    node.classList.add('is-flash');
    setTimeout(function () { node.classList.remove('is-flash'); }, 1800);
    if (btn) btn.focus({ preventScroll: true });
  }
})(window.AD);
