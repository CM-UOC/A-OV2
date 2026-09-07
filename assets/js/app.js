/* Shell: overture, HUD, scrubber, routing, and boot. */
(function (AD) {
  'use strict';
  var el = AD.util.el, s = AD.util.svg, C = AD.components, store = AD.store, D = AD.data;

  var ticks = [], railFill = null, soundBtn = null, themeBtn = null;

  function icon(paths) {
    return s('svg', {
      viewBox: '0 0 16 16', 'aria-hidden': 'true', fill: 'none',
      stroke: 'currentColor', 'stroke-width': '1.4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round'
    }, paths.map(function (d) { return s('path', { d: d }); }));
  }
  function searchIcon() {
    return s('svg', { viewBox: '0 0 16 16', 'aria-hidden': 'true', fill: 'none', stroke: 'currentColor', 'stroke-width': '1.4' }, [
      s('circle', { cx: '7', cy: '7', r: '4.4' }), s('path', { d: 'M10.4 10.4 L14.4 14.4' })
    ]);
  }
  var SOUND_ON = ['M3 6.5h2.5L9 4v8L5.5 9.5H3z', 'M11.4 5.6a3.4 3.4 0 0 1 0 4.8', 'M13.3 3.7a6 6 0 0 1 0 8.6'];
  var SOUND_OFF = ['M3 6.5h2.5L9 4v8L5.5 9.5H3z', 'M11.5 6.2 14.5 9.8', 'M14.5 6.2 11.5 9.8'];

  function themeLabel() {
    return store.theme === 'system' ? 'Auto' : (store.theme === 'dark' ? 'Dark' : 'Light');
  }

  function buildHud() {
    var mark = el('a', {
      class: 'hud__mark', href: '#/',
      onclick: function () { window.scrollTo({ top: 0, behavior: AD.util.reducedMotion() ? 'auto' : 'smooth' }); }
    }, [
      el('b', { text: 'The Appointed Time' }),
      el('span', { text: 'Genesis 1 — Revelation 22' })
    ]);

    var searchBtn = el('button', {
      class: 'ghost', type: 'button', 'aria-label': 'Search everything',
      onclick: function () { C.search.open(); }
    }, [searchIcon(), el('span', { class: 'ghost__label', text: 'Search' })]);

    var indexBtn = el('button', {
      class: 'ghost', type: 'button', 'aria-label': 'Open the index of all entries',
      onclick: function () { AD.panel.open('index'); }
    }, [icon(['M2.5 4h11', 'M2.5 8h11', 'M2.5 12h7']), el('span', { class: 'ghost__label', text: 'Index' })]);

    var studyBtn = el('button', {
      class: 'ghost', type: 'button', 'aria-label': 'Study mode — the full corpus',
      onclick: function () { AD.panel.open('study'); }
    }, [icon(['M8 2.5 2.5 5.5 8 8.5 13.5 5.5z', 'M2.5 10.5 8 13.5 13.5 10.5']),
        el('span', { class: 'ghost__label', text: 'Study' })]);

    var atlasBtn = el('button', {
      class: 'ghost', type: 'button', 'aria-label': 'Map of places',
      onclick: function () { AD.panel.open('atlas'); }
    }, [icon(['M2 4.2 6 2.6 10 4.6 14 3v8.4l-4 1.6-4-2-4 1.6z', 'M6 2.6v8.6', 'M10 4.6v8.6']),
        el('span', { class: 'ghost__label', text: 'Atlas' })]);

    themeBtn = el('button', {
      class: 'ghost', type: 'button',
      'aria-label': 'Reading surface theme: ' + themeLabel() + '. Activate to change.',
      onclick: function () {
        store.cycleTheme();
        AD.util.clear(themeBtn);
        themeBtn.appendChild(el('span', { class: 'ghost__label', text: themeLabel() }));
        themeBtn.setAttribute('aria-label', 'Reading surface theme: ' + themeLabel() + '. Activate to change.');
      }
    }, [el('span', { class: 'ghost__label', text: themeLabel() })]);

    var tools = [searchBtn, indexBtn, atlasBtn, studyBtn, themeBtn];

    if (AD.audio.available()) {
      soundBtn = el('button', {
        class: 'ghost', type: 'button', 'aria-pressed': 'false',
        'aria-label': 'Ambient sound, currently off. Activate to turn on.',
        onclick: function () {
          var on = AD.audio.toggle();
          soundBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
          soundBtn.setAttribute('aria-label', 'Ambient sound, currently ' + (on ? 'on' : 'off') + '. Activate to turn ' + (on ? 'off' : 'on') + '.');
          AD.util.clear(soundBtn);
          soundBtn.appendChild(icon(on ? SOUND_ON : SOUND_OFF));
          soundBtn.appendChild(el('span', { class: 'ghost__label', text: on ? 'Sound' : 'Muted' }));
          var note = document.getElementById('audioNote');
          if (note) { note.textContent = AD.audio.describe(); note.hidden = !on; }
        }
      }, [icon(SOUND_OFF), el('span', { class: 'ghost__label', text: 'Muted' })]);
      tools.splice(4, 0, soundBtn);
    }

    return el('div', { class: 'hud' }, [mark, el('div', { class: 'hud__tools' }, tools)]);
  }

  function buildScrub() {
    ticks = D.scenes.map(function (sc, i) {
      var b = el('button', {
        class: 'scrub__tick', type: 'button',
        'aria-label': 'Go to ' + sc.name,
        onclick: function () { AD.journey.goto(i); }
      }, [
        el('span', { text: sc.numeral ? 'Stage ' + sc.numeral : sc.name }),
        el('i', { 'aria-hidden': 'true' })
      ]);
      return b;
    });
    return el('nav', { class: 'scrub', 'aria-label': 'Timeline' }, ticks);
  }

  AD.hud = {
    progress: function (i, frac, global) {
      for (var k = 0; k < ticks.length; k++) {
        if (k === i) ticks[k].setAttribute('aria-current', 'true');
        else ticks[k].removeAttribute('aria-current');
      }
      if (railFill) railFill.style.width = (Math.min(Math.max(global, 0), 1) * 100).toFixed(2) + '%';
    }
  };

  function overture() {
    var node = el('div', { class: 'overture', id: 'overture', 'aria-hidden': 'true' }, [
      el('div', {}, [
        el('p', { class: 'overture__mark', text: 'The Appointed Time' }),
        el('p', { class: 'overture__sub', text: 'An interactive chronology · Genesis 1 — Revelation 22' })
      ])
    ]);
    var done = false;
    function dismiss() {
      if (done) return;
      done = true;
      node.classList.add('is-done');
      window.removeEventListener('scroll', dismiss);
      window.removeEventListener('pointerdown', dismiss);
      window.removeEventListener('keydown', dismiss);
      setTimeout(function () { if (node.parentNode) node.parentNode.removeChild(node); }, 1300);
    }
    window.addEventListener('scroll', dismiss, { passive: true });
    window.addEventListener('pointerdown', dismiss);
    window.addEventListener('keydown', dismiss);
    setTimeout(dismiss, 3200);
    return node;
  }

  function boot() {
    store.applyTheme(store.theme);

    var app = document.getElementById('app');
    railFill = el('i');
    app.appendChild(el('div', { class: 'railbar', 'aria-hidden': 'true' }, [railFill]));
    app.appendChild(buildHud());
    app.appendChild(buildScrub());

    app.appendChild(el('p', {
      class: 'audio-note', id: 'audioNote', hidden: true, role: 'status', 'aria-live': 'polite'
    }, 'Ambient sound is off.'));

    var main = el('main', { id: 'main', tabindex: '-1' });
    app.appendChild(main);
    AD.journey.mount(main);

    if (!AD.util.reducedMotion()) document.body.appendChild(overture());

    window.addEventListener('hashchange', function () {
      if (AD._silentHash) { AD._silentHash = false; return; }
      AD.router.apply();
    });

    document.addEventListener('keydown', function (e) {
      if (C.search.isOpen()) return;
      var tag = (e.target.tagName || '').toLowerCase();
      var typing = tag === 'input' || tag === 'textarea' || e.target.isContentEditable;
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) {
        e.preventDefault(); C.search.open();
      } else if (e.key === 'Escape' && AD.panel.isOpen()) {
        AD.panel.close();
      }
    });

    AD.router.apply();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window.AD);
