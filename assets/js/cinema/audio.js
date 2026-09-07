/* Sound design, synthesized in the browser — no audio files.

   Three layers per scene: a drone on the tonic, a slow pad that moves through a
   chord progression, and a sparse bell motif that walks the scene's mode. Each
   scene has its own root, mode, progression and tempo, so the music changes with
   the chronology instead of holding one chord. Everything runs through a small
   feedback-delay reverb for space, and a stereo panner tied to the camera.

   Silent until the listener asks for it. */
(function (AD) {
  'use strict';

  var ctx = null, master = null, wet = null, started = false, on = false;
  var drone = [], pad = null, panner = null;
  var timer = null, nextNote = 0, step = 0, chordIdx = 0;
  var scene = null, target = null, blend = 0;

  /* equal temperament from A4 */
  function hz(semi) { return 440 * Math.pow(2, semi / 12); }

  var MODE = {
    aeolian:   [0, 2, 3, 5, 7, 8, 10],
    dorian:    [0, 2, 3, 5, 7, 9, 10],
    ionian:    [0, 2, 4, 5, 7, 9, 11],
    lydian:    [0, 2, 4, 6, 7, 9, 11],
    mixolydian:[0, 2, 4, 5, 7, 9, 10],
    phrygian:  [0, 1, 3, 5, 7, 8, 10],
    phrygdom:  [0, 1, 4, 5, 7, 8, 10],
    wholetone: [0, 2, 4, 6, 8, 10, 12]
  };

  /* root is a semitone offset from A3 (-12). progression and motif are scale
     degrees; the motif reads as a melody rather than a random walk. */
  var VOICE = {
    prologue:    { root: -19, mode: 'aeolian',    prog: [0, 3, 5, 4],  motif: [0, 4, 7, 4, 2, 0],        bpm: 34, sparse: 0.55, oct: 2 },
    origins:     { root: -21, mode: 'ionian',     prog: [1, 4, 0, 3],  motif: [0, 2, 4, 7, 4, 2],        bpm: 40, sparse: 0.35, oct: 2 },
    foundations: { root: -19, mode: 'dorian',     prog: [0, 6, 3, 4],  motif: [0, 3, 5, 3, 0, -3],       bpm: 32, sparse: 0.60, oct: 2 },
    signs:       { root: -14, mode: 'mixolydian', prog: [0, 3, 5, 1],  motif: [4, 2, 0, 2, 4, 5],        bpm: 46, sparse: 0.30, oct: 2 },
    tribulation: { root: -17, mode: 'phrygian',   prog: [0, 1, 0, 5],  motif: [0, 1, 3, 1, 0, -2],       bpm: 52, sparse: 0.25, oct: 1 },
    adversaries: { root: -17, mode: 'phrygdom',   prog: [0, 4, 1, 0],  motif: [0, 1, 4, 3, 1, 0],        bpm: 30, sparse: 0.65, oct: 1 },
    cosmos:      { root: -21, mode: 'wholetone',  prog: [0, 2, 4, 2],  motif: [0, 2, 4, 6, 4, 2],        bpm: 26, sparse: 0.70, oct: 3 },
    parousia:    { root: -16, mode: 'lydian',     prog: [0, 4, 1, 5],  motif: [0, 2, 4, 6, 7, 9],        bpm: 44, sparse: 0.20, oct: 3 },
    judgement:   { root: -12, mode: 'aeolian',    prog: [0, 5, 3, 6],  motif: [7, 4, 2, 0, 2, 4],        bpm: 36, sparse: 0.45, oct: 2 },
    restoration: { root: -14, mode: 'ionian',     prog: [0, 3, 5, 4],  motif: [0, 2, 4, 7, 9, 7],        bpm: 48, sparse: 0.22, oct: 3 },
    coda:        { root: -19, mode: 'aeolian',    prog: [0, 3, 5, 4],  motif: [7, 4, 0, 4, 2, 0],        bpm: 30, sparse: 0.60, oct: 2 }
  };

  function degree(v, d) {
    var m = MODE[v.mode], n = m.length;
    var oct = Math.floor(d / n), i = ((d % n) + n) % n;
    return v.root + m[i] + oct * 12;
  }

  /* --- graph ---------------------------------------------------------- */
  function build() {
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();

    master = ctx.createGain();
    master.gain.value = 0;
    master.connect(ctx.destination);

    /* a small feedback-delay reverb: three prime-ish delays through a lowpass */
    wet = ctx.createGain(); wet.gain.value = 0.34;
    var damp = ctx.createBiquadFilter();
    damp.type = 'lowpass'; damp.frequency.value = 2200;
    [0.137, 0.211, 0.313].forEach(function (d) {
      var dl = ctx.createDelay(1.0); dl.delayTime.value = d;
      var fb = ctx.createGain(); fb.gain.value = 0.62;
      wet.connect(dl); dl.connect(fb); fb.connect(damp); damp.connect(dl);
      dl.connect(master);
    });
    wet.connect(master);

    panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (panner) { panner.connect(master); panner.connect(wet); }

    /* drone: two detuned oscillators plus a sub */
    [[1, 'sine', 0.42], [2.003, 'sine', 0.16], [0.5, 'triangle', 0.20]].forEach(function (v) {
      var o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      o.type = v[1]; o.frequency.value = 110 * v[0];
      f.type = 'lowpass'; f.frequency.value = 900;
      g.gain.value = v[2];
      o.connect(f); f.connect(g); g.connect(master); g.connect(wet);
      o.start();
      drone.push({ osc: o, gain: g, filt: f, mult: v[0] });
    });

    /* pad: four voices holding a chord, retuned on each change */
    pad = [];
    for (var i = 0; i < 4; i++) {
      var o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
      o.type = i === 3 ? 'triangle' : 'sine';
      o.frequency.value = 220;
      f.type = 'lowpass'; f.frequency.value = 1400;
      g.gain.value = 0;
      o.connect(f); f.connect(g); g.connect(master); g.connect(wet);
      o.start();
      pad.push({ osc: o, gain: g, filt: f });
    }

    /* air */
    var len = ctx.sampleRate * 3;
    var buf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = buf.getChannelData(0);
    for (var k = 0; k < len; k++) d[k] = (Math.random() * 2 - 1) * 0.4;
    var src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    var lp = ctx.createBiquadFilter(); lp.type = 'bandpass'; lp.frequency.value = 520; lp.Q.value = 0.5;
    var ng = ctx.createGain(); ng.gain.value = 0.035;
    src.connect(lp); lp.connect(ng); ng.connect(master);
    src.start();
    AD.audio._noise = ng;

    started = true;
    return true;
  }

  /* --- bell voice ------------------------------------------------------ */
  function pluck(freq, when, gain, panPos) {
    var o = ctx.createOscillator(), o2 = ctx.createOscillator();
    var g = ctx.createGain(), g2 = ctx.createGain();
    o.type = 'sine'; o.frequency.value = freq;
    o2.type = 'sine'; o2.frequency.value = freq * 2.01;
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(gain, when + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, when + 2.6);
    g2.gain.setValueAtTime(0.0001, when);
    g2.gain.exponentialRampToValueAtTime(gain * 0.28, when + 0.008);
    g2.gain.exponentialRampToValueAtTime(0.0001, when + 1.1);
    o.connect(g); o2.connect(g2);
    var dest = panner || master;
    if (panner) panner.pan.setTargetAtTime(panPos, when, 0.3);
    g.connect(dest); g2.connect(dest);
    if (!panner) { g.connect(wet); g2.connect(wet); }
    o.start(when); o2.start(when);
    o.stop(when + 2.8); o2.stop(when + 1.4);
  }

  /* --- scheduler -------------------------------------------------------- */
  function schedule() {
    if (!on || !scene) return;
    var v = VOICE[scene] || VOICE.prologue;
    var beat = 60 / v.bpm;
    var horizon = ctx.currentTime + 0.6;
    while (nextNote < horizon) {
      var when = Math.max(nextNote, ctx.currentTime + 0.02);

      /* chord change every four beats */
      if (step % 4 === 0) {
        chordIdx = (chordIdx + 1) % v.prog.length;
        setChord(v, v.prog[chordIdx], when);
      }

      /* the motif, with rests so it breathes */
      if (Math.random() > v.sparse) {
        var d = v.motif[step % v.motif.length] + v.prog[chordIdx];
        var f = hz(degree(v, d) + v.oct * 12);
        pluck(f, when, 0.055 + Math.random() * 0.035, (Math.random() - 0.5) * 0.7);
        if (Math.random() > 0.72) {
          pluck(hz(degree(v, d + 2) + v.oct * 12), when + beat * 0.5, 0.028, (Math.random() - 0.5) * 0.9);
        }
      }

      nextNote += beat;
      step++;
    }
  }

  function setChord(v, rootDeg, when) {
    if (!pad) return;
    /* quartal-ish voicing: root, third, fifth, ninth of the mode */
    var degs = [0, 2, 4, 6];
    for (var i = 0; i < pad.length; i++) {
      var f = hz(degree(v, rootDeg + degs[i]) + 12);
      pad[i].osc.frequency.setTargetAtTime(f, when, 0.9);
      pad[i].gain.gain.setTargetAtTime(0.030 - i * 0.005, when, 1.2);
    }
    for (var k = 0; k < drone.length; k++) {
      drone[k].osc.frequency.setTargetAtTime(hz(degree(v, rootDeg) - 12) * drone[k].mult, when, 1.6);
    }
  }

  AD.audio = {
    available: function () { return !!(window.AudioContext || window.webkitAudioContext); },
    isOn: function () { return on; },

    toggle: function () {
      if (!started && !build()) return false;
      if (ctx.state === 'suspended' && ctx.resume) ctx.resume();
      on = !on;
      var t = ctx.currentTime;
      master.gain.cancelScheduledValues(t);
      master.gain.setValueAtTime(master.gain.value, t);
      master.gain.linearRampToValueAtTime(on ? 0.20 : 0, t + (on ? 2.2 : 0.9));
      if (on) {
        nextNote = ctx.currentTime + 0.25;
        step = 0; chordIdx = -1;
        if (timer) clearInterval(timer);
        timer = setInterval(schedule, 120);
        schedule();
      } else if (timer) { clearInterval(timer); timer = null; }
      return on;
    },

    /* follow the journey */
    setScene: function (id, brightness, pan) {
      if (!started) { scene = id; return; }
      if (id !== scene) {
        scene = id;
        step = 0;
        chordIdx = -1;
      }
      if (!on) return;
      var t = ctx.currentTime;
      var cut = 620 + brightness * 2400;
      drone.forEach(function (d) { d.filt.frequency.setTargetAtTime(cut, t, 1.5); });
      pad.forEach(function (p) { p.filt.frequency.setTargetAtTime(cut * 1.6, t, 1.5); });
      if (AD.audio._noise) AD.audio._noise.gain.setTargetAtTime(0.018 + brightness * 0.05, t, 1.5);
      if (panner) panner.pan.setTargetAtTime(Math.max(-0.8, Math.min(0.8, pan || 0)), t, 0.8);
    },

    chime: function (up) {
      if (!started || !on) return;
      var v = VOICE[scene] || VOICE.prologue;
      var t = ctx.currentTime + 0.01;
      pluck(hz(degree(v, up ? 4 : 2) + 24), t, 0.05, 0);
      pluck(hz(degree(v, up ? 7 : 4) + 24), t + 0.09, 0.032, 0.2);
    },

    /* an accessible description of what is playing */
    describe: function () {
      var v = VOICE[scene] || VOICE.prologue;
      if (!on) return 'Ambient sound is off.';
      return 'Ambient sound: a low drone and a slow ' + v.mode + ' chord progression, ' +
        'with a sparse bell motif, at about ' + v.bpm + ' beats per minute. No speech.';
    }
  };
})(window.AD);
