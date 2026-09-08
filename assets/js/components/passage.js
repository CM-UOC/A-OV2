/* Lector de pasajes: texto completo dentro del sitio, sin salir de la página. */
(function (AD) {
  'use strict';
  var el = AD.util.el, D = AD.data, I = AD.i18n;
  var layer = null, lastFocus = null;

  function close() {
    if (!layer) return;
    layer.classList.remove('is-open');
    var l = layer; layer = null;
    setTimeout(function () { if (l.parentNode) l.parentNode.removeChild(l); }, 260);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function open(pid) {
    var p = D.passages[pid];
    lastFocus = document.activeElement;
    if (layer) close();
    var body;
    if (p) {
      body = [
        el('p', { class: 'pv__ref', text: I.ref(p.ref) }),
        el('div', { class: 'pv__text' }, p.text.split('\n').map(function (line) {
          var m = line.match(/^(\d+)\s+([\s\S]*)$/);
          return el('p', { class: 'pv__v' }, m
            ? [el('span', { class: 'pv__n', text: m[1] }), m[2]]
            : [line]);
        })),
        el('p', { class: 'pv__tr', text: I.t('p.translation') + ' · ' + p.tr })
      ];
    } else {
      body = [
        el('p', { class: 'pv__ref', text: I.ref(pid) }),
        el('p', { class: 'pv__missing', text: I.t('p.notEmbedded') }),
        el('p', { class: 'pv__ref', text: I.ref(pid) })
      ];
    }
    var closeBtn = el('button', { class: 'pv__close', type: 'button', onclick: close,
      'aria-label': I.t('nav.close') }, '✕');
    layer = el('div', {
      class: 'pv', role: 'dialog', 'aria-modal': 'true', 'aria-label': p ? p.ref : pid,
      onkeydown: function (e) { if (e.key === 'Escape') { e.stopPropagation(); close(); } }
    }, [
      el('div', { class: 'pv__scrim', onclick: close }),
      el('div', { class: 'pv__panel glass glass--strong' }, [closeBtn].concat(body))
    ]);
    document.body.appendChild(layer);
    AD.util.nextFrame(function () { if (layer) layer.classList.add('is-open'); });
    closeBtn.focus();
  }

  AD.components.passage = { open: open, close: close };
})(window.AD);
