/* Shell: overture, HUD, scrubber, routing, and boot. */
(function (AD) {
  'use strict';
  var el = AD.util.el, s = AD.util.svg, C = AD.components, store = AD.store, D = AD.data;

  var ticks = [], railFill = null;

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

  function themeLabel() {
    return store.theme === 'system' ? 'Auto' : (store.theme === 'dark' ? 'Dark' : 'Light');
  }

  function buildHud() {
    var mark = el('a', {
      class: 'hud__mark', href: '#/',
      onclick: function () { window.scrollTo({ top: 0, behavior: AD.util.reducedMotion() ? 'auto' : 'smooth' }); }
    }, [
      el('b', { text: AD.i18n.t('site.title') }),
      el('span', { text: AD.i18n.t('site.tagline') })
    ]);

    var searchBtn = el('button', {
      class: 'ctl', type: 'button', 'aria-label': AD.i18n.t('nav.search'),
      onclick: function () { C.search.open(); }
    }, [searchIcon(), el('span', { class: 'ctl__label', text: AD.i18n.t('nav.search') })]);

    var exploreBtn = el('button', {
      class: 'ctl ctl--primary', type: 'button', 'aria-haspopup': 'dialog',
      onclick: function () { AD.sheet.open(); }
    }, [
      icon(['M2.5 4.5h11', 'M2.5 9h11', 'M2.5 13.5h7']),
      el('span', { class: 'ctl__label', text: exploreLabel() })
    ]);

    var settingsBtn = el('button', {
      class: 'ctl ctl--icon', type: 'button', 'aria-label': settingsLabel(), 'aria-expanded': 'false',
      onclick: function (e) { e.stopPropagation(); AD.prefs.toggle(settingsBtn); }
    }, [icon(['M8 5.6a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z',
              'M13 8a5 5 0 0 0-.1-.9l1.2-.9-1.2-2-1.4.5a5 5 0 0 0-1.5-.9L9.7 2H6.3l-.3 1.8a5 5 0 0 0-1.5.9L3.1 4.2l-1.2 2 1.2.9A5 5 0 0 0 3 8a5 5 0 0 0 .1.9l-1.2.9 1.2 2 1.4-.5a5 5 0 0 0 1.5.9L6.3 14h3.4l.3-1.8a5 5 0 0 0 1.5-.9l1.4.5 1.2-2-1.2-.9A5 5 0 0 0 13 8z'])]);

    AD.hudRefs = { mark: mark, search: searchBtn, explore: exploreBtn, settings: settingsBtn };

    return el('div', { class: 'hud' }, [
      mark,
      el('div', { class: 'hud__tools glass glass--subtle' }, [searchBtn, exploreBtn, settingsBtn])
    ]);
  }

  function exploreLabel() {
    return { es: 'Explorar', en: 'Explore', de: 'Entdecken', fr: 'Explorer' }[AD.i18n.get()] || 'Explore';
  }
  function settingsLabel() {
    return { es: 'Ajustes', en: 'Settings', de: 'Einstellungen', fr: 'Réglages' }[AD.i18n.get()] || 'Settings';
  }
  AD.labels = { explore: exploreLabel, settings: settingsLabel };

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

    AD.i18n.onChange(function () {
      if (AD.hudRefs) {
        AD.hudRefs.mark.querySelector('b').textContent = AD.i18n.t('site.title');
        AD.hudRefs.mark.querySelector('span').textContent = AD.i18n.t('site.tagline');
        AD.hudRefs.search.querySelector('.ctl__label').textContent = AD.i18n.t('nav.search');
        AD.hudRefs.search.setAttribute('aria-label', AD.i18n.t('nav.search'));
        AD.hudRefs.explore.querySelector('.ctl__label').textContent = exploreLabel();
        AD.hudRefs.settings.setAttribute('aria-label', settingsLabel());
      }
      var open = AD.panel.isOpen() ? AD.panel.current() : null;
      AD.journey.relabel();
      if (open) { AD.panel.close(true); AD.panel.open(open, null, true); }
    });

    AD.router.apply();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})(window.AD);
