/* The journey: one render loop drives the environment, the camera, the captions,
   the hotspots, the HUD tint and the music. Adaptive quality keeps it smooth. */
(function (AD) {
  'use strict';
  var el = AD.util.el, D = AD.data;

  var scenes = D.scenes;
  var nodes = [], caps = [], spots = [], metrics = [];
  var plates = null, over = null, fg = null, root = null;
  var last = 0, raf = null, reduced = false, paused = false;
  var quality, scale = 1, frameAcc = 0, frameN = 0, lastTune = 0;

  function smooth(a, b, x) {
    var t = Math.min(Math.max((x - a) / (b - a), 0), 1);
    return t * t * (3 - 2 * t);
  }
  function rgbStr(c) {
    return Math.round(Math.min(c[0], 1) * 255) + ',' + Math.round(Math.min(c[1], 1) * 255) + ',' + Math.round(Math.min(c[2], 1) * 255);
  }

  function pickQuality() {
    var coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    var small = window.innerWidth < 820;
    if (coarse || small) return { rays: 0.55, haze: 0.55, particles: 0.5 };
    return { rays: 1, haze: 1, particles: 1 };
  }

  function sceneNode(scene, i) {
    var stageEvents = scene.stage
      ? D.events.filter(function (e) { return e.stage === scene.stage; })
          .sort(function (a, b) { return a.order - b.order; })
      : [];

    var beads = null;
    if (stageEvents.length) {
      beads = el('div', { class: 'beads', role: 'list', 'aria-label': 'Entries in ' + scene.name },
        stageEvents.slice(0, 6).map(function (e, n) {
          return el('button', {
            class: 'bead' + (e.source === 'comparative' ? ' bead--enoch' : ''),
            type: 'button', role: 'listitem',
            onclick: function () { AD.panel.open('event:' + e.id); }
          }, [
            el('span', { class: 'bead__n', text: scene.numeral + '.' + (n + 1) + (e.source === 'comparative' ? ' · 1 ENOCH' : '') }),
            el('span', { class: 'bead__t', text: e.title }),
            el('span', { class: 'bead__r', text: e.refs[0] ? e.refs[0].ref : '' })
          ]);
        }).concat([
          el('button', {
            class: 'bead bead--more', type: 'button', role: 'listitem',
            onclick: function () { AD.panel.open('index', { stage: scene.stage }); }
          }, [
            el('span', { class: 'bead__n', text: 'ALL' }),
            el('span', { class: 'bead__t', text: stageEvents.length + ' entries' }),
            el('span', { class: 'bead__r', text: 'open the index' })
          ])
        ]));
    }

    var caption = el('div', { class: 'scene__caption', style: '--in: 1' }, [
      el('p', { class: 'scene__kicker', text: scene.kicker }),
      scene.numeral ? el('p', { class: 'scene__numeral', text: 'Stage ' + scene.numeral }) : null,
      el('h2', { class: 'scene__name', text: scene.name }),
      el('p', { class: 'scene__line', text: scene.line }),
      scene.quote ? el('blockquote', { class: 'scene__quote' }, [
        el('p', { html: '&ldquo;' + scene.quote.text + '&rdquo;' }),
        el('cite', { text: scene.quote.ref + ' · ' + scene.quote.translation })
      ]) : null,
      beads,
      el('p', { class: 'scene__place' }, [
        el('span', { text: scene.place }),
        el('span', { class: 'scene__recon', title: 'Every environment on this site is generated at runtime. It is an artistic reconstruction, not a photograph and not a historical claim.' }, 'artistic reconstruction')
      ]),
      i === 0 ? el('p', { class: 'scene__cue' }, [el('i'), 'Scroll to travel']) : null
    ]);
    caps.push(caption);

    var hs = AD.hotspots.build(scene);
    spots.push(hs);

    return el('section', {
      class: 'scene', id: 'scene-' + scene.id, 'data-scene': scene.id, 'aria-label': scene.name
    }, [
      el('div', { class: 'scene__inner' }, [AD.glyph(scene.glyph), caption, hs])
    ]);
  }

  function measure() {
    metrics = nodes.map(function (n) { return { top: n.offsetTop, h: n.offsetHeight || 1 }; });
  }

  function frame(now) {
    raf = requestAnimationFrame(frame);
    if (paused) { last = now; return; }
    var dt = last ? Math.min((now - last) / 1000, 0.1) : 0.016;

    /* adaptive resolution: keep the loop inside budget */
    if (last) { frameAcc += now - last; frameN++; }
    last = now;
    if (now - lastTune > 1400 && frameN > 20) {
      var avg = frameAcc / frameN;
      frameAcc = 0; frameN = 0; lastTune = now;
      if (avg > 26 && scale > 0.42) { scale = Math.max(0.42, scale - 0.12); if (sky) sky.resize(scale); }
      else if (avg < 13 && scale < quality.scale) { scale = Math.min(quality.scale, scale + 0.08); if (sky) sky.resize(scale); }
    }

    var vh = window.innerHeight;
    var center = (window.pageYOffset || document.documentElement.scrollTop || 0) + vh * 0.5;

    var i = 0;
    for (var k = 0; k < metrics.length; k++) { if (center >= metrics[k].top) i = k; else break; }
    var m = metrics[i] || { top: 0, h: 1 };
    var frac = Math.min(Math.max((center - m.top) / m.h, 0), 1);
    var j = Math.min(i + 1, scenes.length - 1);
    var t = smooth(0.58, 0.99, frac);

    var A = scenes[i], B = scenes[j];
    if (plates) plates.set(A.id, B.id, t, frac);

    var accentRGB = mixAccent(A, B, t);
    root.style.setProperty('--scene-accent', 'rgb(' + accentRGB + ')');

    if (over) {
      var sunElev = lerp(A.sun.elev, B.sun.elev, t);
      var sunAz = lerp(A.sun.azim, B.sun.azim, t);
      var vh2 = window.innerHeight, vw2 = window.innerWidth;
      over.draw({
        time: now, dt: Math.min(dt, 0.05), accent: accentRGB,
        sunX: vw2 * (0.5 + sunAz / 90),
        sunY: vh2 * (0.62 - sunElev / 120),
        rays: quality.rays * (1 - lerp(A.sun.eclipse, B.sun.eclipse, t) * 0.6) * (sunElev > -8 ? 1 : 0.25),
        haze: quality.haze * (0.5 + 0.5 * lerp(A.clouds.coverage, B.clouds.coverage, t)),
        parallax: (frac - 0.5) * 2
      });
    }

    var w = window.innerWidth;
    for (var s = Math.max(0, i - 1); s <= Math.min(scenes.length - 1, i + 1); s++) {
      var mm = metrics[s];
      var f = Math.min(Math.max((center - mm.top) / mm.h, 0), 1);
      var vis = smooth(0.03, 0.26, f) * (1 - smooth(0.68, 0.96, f));
      caps[s].style.setProperty('--in', vis.toFixed(3));
      caps[s].style.pointerEvents = vis > 0.2 ? 'auto' : 'none';
      if (f > 0.02 && f < 0.99) nodes[s].classList.add('is-near');
      if (spots[s]) AD.hotspots.place2(spots[s], w, vh, f, smooth(0.18, 0.42, f) * (1 - smooth(0.66, 0.92, f)));
    }

    AD.hud.progress(i, frac, (i + frac) / (scenes.length - 1));
    AD.audio.setScene(A.id, Math.min(Math.max((lerp(A.sun.elev, B.sun.elev, t) + 10) / 60, 0), 1), (frac - 0.5) * 0.6);
  }

  function lerp(a, b, t) { return a + (b - a) * t; }
  function mixAccent(a, b, t) {
    var A = a.grade._tint, B = b.grade._tint;
    return Math.round(lerp(A[0], B[0], t) * 255) + ',' +
           Math.round(lerp(A[1], B[1], t) * 255) + ',' +
           Math.round(lerp(A[2], B[2], t) * 255);
  }
  function drawStatic() {
    if (plates) plates.set(scenes[1].id, scenes[1].id, 0, 0.4);
  }

  AD.journey = {
    mount: function (mountPoint) {
      root = document.documentElement;
      reduced = AD.util.reducedMotion();
      quality = pickQuality();
      scale = quality.scale;

      var wrap = el('div', { class: 'journey' }, scenes.map(sceneNode));
      nodes = [];
      for (var i = 0; i < wrap.children.length; i++) nodes.push(wrap.children[i]);
      mountPoint.appendChild(wrap);

      plates = AD.plates.create(document.getElementById('plates'), (window.AD_PLATE_BASE || 'plates/'));
      over = AD.overlay.create(document.getElementById('fg'));

      measure();
      window.addEventListener('resize', AD.util.debounce(function () {
        measure();
        if (over) over.resize();
        if (reduced) drawStatic();
      }, 180));

      document.addEventListener('visibilitychange', function () {
        AD.journey.setPaused(document.hidden);
      });

      if (reduced) {
        caps.forEach(function (c) { c.style.setProperty('--in', '1'); });
        nodes.forEach(function (n) { n.classList.add('is-near'); });
        drawStatic();
        AD.hud.progress(0, 0, 0);
      } else {
        raf = requestAnimationFrame(frame);
      }
    },

    setPaused: function (p) { paused = !!p; },

    goto: function (index) {
      var n = nodes[index];
      if (!n) return;
      window.scrollTo({
        top: n.offsetTop + n.offsetHeight * 0.36,
        behavior: AD.util.reducedMotion() ? 'auto' : 'smooth'
      });
    },
    gotoScene: function (id) {
      for (var i = 0; i < scenes.length; i++) if (scenes[i].id === id) return AD.journey.goto(i);
    },
    gotoStage: function (stageId) {
      for (var i = 0; i < scenes.length; i++) if (scenes[i].stage === stageId) return AD.journey.goto(i);
    },
    count: function () { return scenes.length; }
  };
})(window.AD);
