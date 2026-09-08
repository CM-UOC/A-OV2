/* Sonido celeste, sintetizado en el navegador. Sin archivos de audio.

   La versión anterior sonaba áspera por causas concretas, todas corregidas:
     · un detune de 2,002× que producía un batido inquieto → parciales armónicos exactos
     · acordes con séptima y novena por defecto → tríadas consonantes y quintas abiertas
     · una reverb de tres retardos con realimentación 0,70 → convolución con una cola
       de 5,5 s generada, mucho más suave y sin peine metálico
     · una campana con parcial 2,01× inarmónico → octava y quinta justas
     · ataques de 12 ms → 4 s, para que nada entre de golpe

   El control visible sólo ofrece encender, apagar y elegir banda sonora. */
(function (AD) {
  'use strict';

  var ctx = null, master = null, verb = null, dry = null, wet = null;
  var started = false, on = false;
  var voices = [], sub = null, air = null;
  var timer = null, nextAt = 0, step = 0, chordIdx = -1, scene = null;

  var TRACKS = [
    { id: 'choir',  name: { es: 'Coro',    en: 'Choir',   de: 'Chor',    fr: 'Chœur' },
      wet: 0.62, gain: 1.00, air: 0.5, bell: 0.55, partials: [1, 2, 3, 4, 5, 6], tilt: 0.72 },
    { id: 'waters', name: { es: 'Aguas',   en: 'Waters',  de: 'Wasser',  fr: 'Eaux' },
      wet: 0.70, gain: 0.94, air: 1.5, bell: 0.30, partials: [1, 2, 3, 4], tilt: 0.55 },
    { id: 'return', name: { es: 'Regreso', en: 'Homecoming', de: 'Heimkehr', fr: 'Retour' },
      wet: 0.56, gain: 1.06, air: 0.7, bell: 0.75, partials: [1, 2, 3, 4, 5, 6, 8], tilt: 0.88 }
  ];
  var track = TRACKS[0];

  /* Modos consonantes. Ninguno con segunda menor sobre la tónica. */
  var MODE = {
    ionian:     [0, 2, 4, 5, 7, 9, 11],
    aeolian:    [0, 2, 3, 5, 7, 8, 10],
    dorian:     [0, 2, 3, 5, 7, 9, 10],
    lydian:     [0, 2, 4, 6, 7, 9, 11],
    mixolydian: [0, 2, 4, 5, 7, 9, 10]
  };

  /* Progresiones por grados, todas por cuartas o terceras: reposo, no tensión. */
  var VOICE = {
    prologue:    { root: -22, mode: 'aeolian',    prog: [0, 5, 3, 4], bpm: 26, rest: 0.80 },
    origins:     { root: -24, mode: 'ionian',     prog: [0, 3, 4, 0], bpm: 30, rest: 0.62 },
    foundations: { root: -22, mode: 'dorian',     prog: [0, 3, 6, 4], bpm: 24, rest: 0.82 },
    signs:       { root: -17, mode: 'mixolydian', prog: [0, 3, 4, 3], bpm: 30, rest: 0.70 },
    tribulation: { root: -20, mode: 'aeolian',    prog: [0, 5, 3, 5], bpm: 26, rest: 0.78 },
    adversaries: { root: -20, mode: 'aeolian',    prog: [0, 4, 5, 4], bpm: 22, rest: 0.86 },
    cosmos:      { root: -24, mode: 'lydian',     prog: [0, 4, 3, 4], bpm: 20, rest: 0.88 },
    parousia:    { root: -19, mode: 'lydian',     prog: [0, 4, 3, 0], bpm: 32, rest: 0.52 },
    judgement:   { root: -15, mode: 'aeolian',    prog: [0, 5, 3, 4], bpm: 24, rest: 0.76 },
    restoration: { root: -17, mode: 'ionian',     prog: [0, 3, 4, 0], bpm: 34, rest: 0.50 },
    coda:        { root: -22, mode: 'aeolian',    prog: [0, 5, 3, 4], bpm: 22, rest: 0.82 }
  };

  function hz(s) { return 440 * Math.pow(2, s / 12); }
  function degree(v, d) {
    var m = MODE[v.mode], n = m.length;
    var oct = Math.floor(d / n), i = ((d % n) + n) % n;
    return v.root + m[i] + oct * 12;
  }

  /* Cola de reverb generada: ruido con decaimiento exponencial y un filtro
     suave, que es lo que da la sensación de nave o de espacio abierto. */
  function impulse(seconds, decay) {
    var n = Math.floor(ctx.sampleRate * seconds);
    var buf = ctx.createBuffer(2, n, ctx.sampleRate);
    for (var c = 0; c < 2; c++) {
      var d = buf.getChannelData(c), last = 0;
      for (var i = 0; i < n; i++) {
        var t = i / n;
        var white = Math.random() * 2 - 1;
        last = last * 0.72 + white * 0.28;           /* paso bajo: quita la aspereza */
        d[i] = last * Math.pow(1 - t, decay) * (1 - t * 0.15);
      }
    }
    return buf;
  }

  function build() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();

    master = ctx.createGain(); master.gain.value = 0;
    var soft = ctx.createBiquadFilter();
    soft.type = 'lowpass'; soft.frequency.value = 3200; soft.Q.value = 0.4;
    master.connect(soft); soft.connect(ctx.destination);

    verb = ctx.createConvolver();
    verb.buffer = impulse(5.5, 2.6);
    wet = ctx.createGain(); wet.gain.value = track.wet;
    dry = ctx.createGain(); dry.gain.value = 0.72;
    verb.connect(wet); wet.connect(master); dry.connect(master);

    /* Pad coral: parciales armónicos exactos con un vibrato lentísimo.
       Sin detunes fraccionarios: son los que producían el batido. */
    var lfo = ctx.createOscillator(), lfoGain = ctx.createGain();
    lfo.frequency.value = 0.13; lfoGain.gain.value = 1.6;
    lfo.connect(lfoGain); lfo.start();

    for (var i = 0; i < 4; i++) {
      var o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      o.type = 'sine'; o.frequency.value = 220;
      f.type = 'lowpass'; f.frequency.value = 1400; f.Q.value = 0.3;
      g.gain.value = 0;
      lfoGain.connect(o.detune);
      o.connect(f); f.connect(g); g.connect(dry); g.connect(verb);
      o.start();
      voices.push({ osc: o, gain: g, filt: f, parts: [] });
    }

    sub = ctx.createGain(); sub.gain.value = 0;
    var so = ctx.createOscillator(); so.type = 'sine'; so.frequency.value = 55;
    so.connect(sub); sub.connect(dry); sub.connect(verb); so.start();
    AD.audio._subOsc = so;

    /* Aire: ruido muy filtrado, apenas audible, para que no suene estéril */
    var len = ctx.sampleRate * 4;
    var nb = ctx.createBuffer(1, len, ctx.sampleRate);
    var nd = nb.getChannelData(0), lastn = 0;
    for (var k = 0; k < len; k++) { lastn = lastn * 0.94 + (Math.random() * 2 - 1) * 0.06; nd[k] = lastn; }
    var src = ctx.createBufferSource(); src.buffer = nb; src.loop = true;
    var nf = ctx.createBiquadFilter(); nf.type = 'lowpass'; nf.frequency.value = 700;
    air = ctx.createGain(); air.gain.value = 0.012;
    src.connect(nf); nf.connect(air); air.connect(verb);
    src.start();

    started = true;
    return true;
  }

  /* Campana armónica: fundamental, octava y quinta. Nada inarmónico. */
  function chime(freq, when, gain) {
    [[1, gain], [2, gain * 0.34], [3, gain * 0.14]].forEach(function (p) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'sine'; o.frequency.value = freq * p[0];
      g.gain.setValueAtTime(0.0001, when);
      g.gain.exponentialRampToValueAtTime(Math.max(p[1], 0.0002), when + 0.9);
      g.gain.exponentialRampToValueAtTime(0.0001, when + 7.5);
      o.connect(g); g.connect(dry); g.connect(verb);
      o.start(when); o.stop(when + 8);
    });
  }

  function setChord(v, rootDeg, when) {
    /* tríada abierta: fundamental, quinta, tercera una octava arriba, y la
       fundamental doblada. Consonante y sin roces. */
    var degs = [0, 4, 2 + 7, 0 + 7];
    for (var i = 0; i < voices.length; i++) {
      var f = hz(degree(v, rootDeg + degs[i]) + 12);
      voices[i].osc.frequency.setTargetAtTime(f, when, 2.2);
      voices[i].gain.gain.setTargetAtTime(0.040 * [1, 0.8, 0.62, 0.5][i], when, 3.4);
    }
    if (AD.audio._subOsc) AD.audio._subOsc.frequency.setTargetAtTime(hz(degree(v, rootDeg) - 12), when, 3.0);
    sub.gain.setTargetAtTime(0.055, when, 3.0);
  }

  function schedule() {
    if (!on || !scene) return;
    var v = VOICE[scene] || VOICE.prologue;
    var beat = 60 / v.bpm;
    while (nextAt < ctx.currentTime + 1.2) {
      var when = Math.max(nextAt, ctx.currentTime + 0.05);
      if (step % 8 === 0) {
        chordIdx = (chordIdx + 1) % v.prog.length;
        setChord(v, v.prog[chordIdx], when);
      }
      if (track.bell > 0 && Math.random() > v.rest) {
        var d = v.prog[chordIdx] + [0, 2, 4, 7][Math.floor(Math.random() * 4)];
        chime(hz(degree(v, d) + 24), when, 0.020 * track.bell);
      }
      nextAt += beat * 2;
      step++;
    }
  }

  AD.audio = {
    available: function () { return !!(window.AudioContext || window.webkitAudioContext); },
    isOn: function () { return on; },
    tracks: function () { return TRACKS; },
    currentTrack: function () { return track.id; },

    toggle: function () {
      if (!started && !build()) return false;
      if (ctx.state === 'suspended' && ctx.resume) ctx.resume();
      on = !on;
      var t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      /* entrada de 6 s: nada aparece de golpe */
      master.gain.linearRampToValueAtTime(on ? 0.13 * track.gain : 0, t + (on ? 6.0 : 2.2));
      if (on) {
        nextAt = ctx.currentTime + 0.4; step = 0; chordIdx = -1;
        if (timer) clearInterval(timer);
        timer = setInterval(schedule, 220);
        schedule();
      } else if (timer) { clearInterval(timer); timer = null; }
      return on;
    },

    setTrack: function (id) {
      var t2 = TRACKS.filter(function (x) { return x.id === id; })[0];
      if (!t2) return;
      track = t2;
      if (!started || !on) return;
      var now = ctx.currentTime;
      master.gain.setTargetAtTime(0.13 * track.gain, now, 2.0);
      wet.gain.setTargetAtTime(track.wet, now, 2.0);
      air.gain.setTargetAtTime(0.012 * track.air, now, 2.0);
      voices.forEach(function (v) { v.filt.frequency.setTargetAtTime(900 + track.tilt * 1600, now, 2.0); });
    },

    setScene: function (id, brightness, pan) {
      if (id !== scene) { scene = id; step = 0; chordIdx = -1; }
      if (!started || !on) return;
      var t = ctx.currentTime;
      var cut = (760 + brightness * 1500) * (0.6 + track.tilt * 0.6);
      voices.forEach(function (v) { v.filt.frequency.setTargetAtTime(cut, t, 3.0); });
      if (air) air.gain.setTargetAtTime((0.008 + brightness * 0.018) * track.air, t, 3.0);
    },

    chime: function () {
      if (!started || !on) return;
      var v = VOICE[scene] || VOICE.prologue;
      chime(hz(degree(v, 4) + 24), ctx.currentTime + 0.02, 0.016);
    },

    describe: function () {
      var v = VOICE[scene] || VOICE.prologue;
      var n = track.name[AD.i18n ? AD.i18n.get() : 'en'] || track.id;
      return { es: 'Sonido ambiente (' + n + '): un pad coral sostenido sobre una nota grave, con acordes consonantes que cambian muy despacio y alguna campana lejana. Sin voz.',
               en: 'Ambient sound (' + n + '): a sustained choral pad over a low drone, with consonant chords changing very slowly and an occasional distant bell. No speech.',
               de: 'Klangbild (' + n + '): ein getragener Chorteppich über einem tiefen Ton, mit sehr langsam wechselnden konsonanten Akkorden und gelegentlicher ferner Glocke. Keine Sprache.',
               fr: 'Ambiance sonore (' + n + ') : une nappe chorale tenue sur une basse, avec des accords consonants très lents et une cloche lointaine occasionnelle. Sans parole.'
             }[AD.i18n ? AD.i18n.get() : 'en'];
    }
  };
})(window.AD);
