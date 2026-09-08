/* Ajustes: idioma, tema, sonido y banda sonora en un solo desplegable.
   El sonido sólo tiene encendido/apagado y elección de banda: el volumen
   es del dispositivo, y no hay play, pause ni progreso. */
(function (AD) {
  'use strict';
  var el = AD.util.el, I = AD.i18n;
  var pop = null, anchor = null;

  function close() {
    if (!pop) return;
    pop.classList.remove('is-open');
    var p = pop; pop = null;
    if (anchor) anchor.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', onOutside, true);
    setTimeout(function () { if (p.parentNode) p.parentNode.removeChild(p); }, 240);
  }
  function onOutside(e) {
    if (pop && !pop.contains(e.target) && e.target !== anchor && !anchor.contains(e.target)) close();
  }

  function row(labelKey, controls) {
    return el('div', { class: 'prefs__row' }, [
      el('p', { class: 'prefs__label', text: typeof labelKey === 'string' ? I.t(labelKey) : labelKey }),
      el('div', { class: 'seg' }, controls)
    ]);
  }

  function open(btn) {
    anchor = btn;
    btn.setAttribute('aria-expanded', 'true');

    /* idioma */
    var langBtns = {};
    var langRow = AD.data.locales.map(function (L) {
      var b = el('button', {
        type: 'button', lang: L.html, 'aria-label': L.name,
        'aria-current': I.get() === L.id ? 'true' : 'false',
        onclick: function () {
          I.set(L.id);
          Object.keys(langBtns).forEach(function (k) { langBtns[k].setAttribute('aria-current', k === L.id ? 'true' : 'false'); });
        }
      }, L.flagWord);
      langBtns[L.id] = b;
      return b;
    });

    /* tema */
    var themeBtns = {};
    var themeRow = ['system', 'light', 'dark'].map(function (m) {
      var b = el('button', {
        type: 'button', 'aria-current': AD.store.theme === m ? 'true' : 'false',
        onclick: function () {
          AD.store.applyTheme(m);
          Object.keys(themeBtns).forEach(function (k) { themeBtns[k].setAttribute('aria-current', k === m ? 'true' : 'false'); });
        }
      }, I.t(m === 'system' ? 'theme.auto' : 'theme.' + m));
      themeBtns[m] = b;
      return b;
    });

    var rows = [row('nav.language', langRow), row('nav.theme', themeRow)];

    /* sonido: sólo on/off y banda sonora */
    if (AD.audio.available()) {
      var onBtn, offBtn;
      function syncSound(state) {
        onBtn.setAttribute('aria-current', state ? 'true' : 'false');
        offBtn.setAttribute('aria-current', state ? 'false' : 'true');
        var note = document.getElementById('audioNote');
        if (note) { note.textContent = AD.audio.describe(); note.hidden = !state; }
      }
      offBtn = el('button', { type: 'button', onclick: function () { if (AD.audio.isOn()) syncSound(AD.audio.toggle()); } }, I.t('sound.off'));
      onBtn = el('button', { type: 'button', onclick: function () { if (!AD.audio.isOn()) syncSound(AD.audio.toggle()); } }, I.t('sound.on'));
      syncSound(AD.audio.isOn());
      rows.push(row('sound.on', [offBtn, onBtn]));

      var tBtns = {};
      rows.push(row('sound.track', AD.audio.tracks().map(function (T) {
        var b = el('button', {
          type: 'button', 'aria-current': AD.audio.currentTrack() === T.id ? 'true' : 'false',
          onclick: function () {
            AD.audio.setTrack(T.id);
            Object.keys(tBtns).forEach(function (k) { tBtns[k].setAttribute('aria-current', k === T.id ? 'true' : 'false'); });
            var note = document.getElementById('audioNote');
            if (note && AD.audio.isOn()) note.textContent = AD.audio.describe();
          }
        }, T.name[I.get()] || T.id);
        tBtns[T.id] = b;
        return b;
      })));
    }

    pop = el('div', {
      class: 'prefs glass glass--strong', role: 'dialog', 'aria-label': AD.labels.settings(),
      onkeydown: function (e) { if (e.key === 'Escape') { e.stopPropagation(); close(); anchor.focus(); } }
    }, rows);

    document.body.appendChild(pop);
    var r = btn.getBoundingClientRect();
    pop.style.top = Math.round(r.bottom + 10) + 'px';
    pop.style.right = Math.max(12, Math.round(window.innerWidth - r.right)) + 'px';
    AD.util.nextFrame(function () { if (pop) pop.classList.add('is-open'); });
    setTimeout(function () { document.addEventListener('click', onOutside, true); }, 0);
    var f = pop.querySelector('button');
    if (f) f.focus();
  }

  AD.prefs = {
    toggle: function (btn) { if (pop) close(); else open(btn); },
    close: close,
    isOpen: function () { return !!pop; }
  };
})(window.AD);
