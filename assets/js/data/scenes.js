/* Scene definitions for the rendered journey.
   Each scene is a place with a sun, an atmosphere, ground, and a camera move.
   Nothing here is a photograph: every environment is an artistic reconstruction,
   generated at runtime and labelled as such in the interface. */
(function (AD) {
  'use strict';

  function rgb(hex) {
    return [parseInt(hex.slice(1, 3), 16) / 255,
            parseInt(hex.slice(3, 5), 16) / 255,
            parseInt(hex.slice(5, 7), 16) / 255];
  }

  AD.data.scenes = [
    {
      id: 'prologue', stage: null, numeral: '', kicker: 'Genesis 1 — Revelation 22',
      name: 'The Appointed Time', glyph: 'seed',
      line: 'A journey through what the texts say about the beginning of all things, and the end of the present age.',
      place: 'Before the first light', particles: 'stars',
      sun: { elev: -9, azim: 0, intensity: 14 },
      clouds: { coverage: 0.26, density: 0.5, base: 900, top: 2600, speed: 0.6 },
      terrain: { type: 'none', height: 0, layers: 0 },
      water: { on: true, rough: 0.06, level: 0 },
      grade: { lift: [0.010, 0.012, 0.022], gain: [0.92, 0.96, 1.10], sat: 0.85, tint: '#eee0cb' },
      light: { x: 0.63, y: 0.53, rays: 0.28, haze: 0.35 },
      camera: { h: 90, yaw: 0, pitch: 1.5, fov: 52, dYaw: 5, dPitch: 2.5, dH: 18 },
      drone: 55, hotspots: []
    },
    {
      id: 'origins', stage: 'origins', numeral: '0', kicker: 'Carbon and bistre ink',
      name: 'The beginning of all things', glyph: 'tree',
      line: 'Light divided from darkness. A garden, a river, and a tree that is guarded.',
      quote: { text: 'In the beginning God created the heaven and the earth.', ref: 'Genesis 1:1', translation: 'KJV' },
      place: 'Over the face of the deep', particles: 'motes',
      sun: { elev: -1.5, azim: 4, intensity: 21 },
      clouds: { coverage: 0.40, density: 0.9, base: 780, top: 2500, speed: 1.0 },
      terrain: { type: 'none', height: 0, layers: 0 },
      water: { on: true, rough: 0.10, level: 0 },
      grade: { lift: [0.020, 0.014, 0.010], gain: [1.10, 0.98, 0.86], sat: 1.05, tint: '#ffcc4b' },
      light: { x: 0.68, y: 0.46, rays: 1.00, haze: 0.55 },
      camera: { h: 62, yaw: -6, pitch: 0.5, fov: 55, dYaw: 9, dPitch: 3.0, dH: 26 },
      drone: 62,
      hotspots: [
        { az: -14, el: 5.5, title: 'Let there be light', ref: 'Genesis 1:3', note: 'Light precedes the sun and moon, which are appointed on the fourth day.', event: 'creation' },
        { az: 12, el: -2.0, title: 'The face of the deep', ref: 'Genesis 1:2', note: 'The sea is the realm of disorder, bounded rather than abolished — until Revelation 21:1.', event: 'no-more-sea' },
        { az: 26, el: 3.0, title: 'The tree of life', ref: 'Genesis 2:9', note: 'Guarded at the beginning; open at the end, with leaves for the healing of the nations.', event: 'garden-tree-life' }
      ]
    },
    {
      id: 'foundations', stage: 'foundations', numeral: 'I', kicker: 'Iron gall',
      name: 'Earlier prophetic foundations', glyph: 'scroll',
      line: 'The prophets name a day that has not yet come.',
      quote: { text: 'The day of the LORD is darkness, and not light.', ref: 'Amos 5:20', translation: 'KJV' },
      place: 'The wilderness, by night', particles: 'stars',
      sun: { elev: 32, azim: -34, intensity: 2.6, moon: true },
      clouds: { coverage: 0.20, density: 0.6, base: 1100, top: 2900, speed: 0.5 },
      terrain: { type: 'dunes', height: 0.055, layers: 3, haze: 0.35 },
      water: { on: false, rough: 0, level: 0 },
      grade: { lift: [0.012, 0.016, 0.030], gain: [0.80, 0.88, 1.16], sat: 0.80, tint: '#a6d0f6' },
      light: { x: 0.80, y: 0.28, rays: 0.22, haze: 0.30 },
      camera: { h: 110, yaw: 4, pitch: -1.0, fov: 48, dYaw: -8, dPitch: 2.2, dH: 14 },
      drone: 49,
      hotspots: [
        { az: -20, el: 8.0, title: 'One like a son of man', ref: 'Daniel 7:13–14', note: 'A human figure comes with the clouds and receives a dominion that does not pass away.', event: 'son-of-man-daniel' },
        { az: 16, el: -3.5, title: 'The Day of the LORD', ref: 'Amos 5:18–20', note: 'Amos reverses a popular expectation: the Day falls first on the covenant people.', event: 'day-of-lord' },
        { az: 30, el: 1.5, title: 'Many who sleep shall awake', ref: 'Daniel 12:2', note: 'The clearest statement of a two-outcome resurrection in the Hebrew Bible.', event: 'daniel-resurrection' }
      ]
    },
    {
      id: 'signs', stage: 'signs', numeral: 'II', kicker: 'Verdigris',
      name: 'Signs and conditions', glyph: 'road',
      line: 'Wars, rumours, deceptions — and the end is not yet.',
      quote: { text: 'All these things must come to pass, but the end is not yet.', ref: 'Matthew 24:6', translation: 'KJV' },
      place: 'The hill country, at first light', particles: 'dust',
      sun: { elev: 9, azim: 26, intensity: 19 },
      clouds: { coverage: 0.48, density: 0.8, base: 950, top: 2700, speed: 1.3 },
      terrain: { type: 'hills', height: 0.075, layers: 4, haze: 0.55 },
      water: { on: false, rough: 0, level: 0 },
      grade: { lift: [0.008, 0.020, 0.020], gain: [0.86, 1.06, 1.02], sat: 0.95, tint: '#eeeac2' },
      light: { x: 0.63, y: 0.50, rays: 0.70, haze: 0.75 },
      camera: { h: 150, yaw: -10, pitch: 0.4, fov: 50, dYaw: 12, dPitch: -1.6, dH: -22 },
      drone: 73,
      hotspots: [
        { az: -18, el: 4.0, title: 'The beginning of birth pains', ref: 'Matthew 24:6–8', note: 'Signs describe a situation. They are explicitly not the end.', event: 'birth-pangs' },
        { az: 22, el: -2.5, title: 'No one knows the day', ref: 'Matthew 24:36', note: 'The reason this site calculates nothing.', event: 'unknown-day' },
        { az: 6, el: 9.0, title: 'Proclaimed to all nations', ref: 'Matthew 24:14', note: 'The only stated precondition in the discourse — and it is a task, not an omen.', event: 'gospel-to-nations' }
      ]
    },
    {
      id: 'tribulation', stage: 'tribulation', numeral: 'III', kicker: 'Red ochre',
      name: 'Tribulation and judgement', glyph: 'stones',
      line: 'Not one stone left upon another.',
      quote: { text: 'Then shall be great tribulation.', ref: 'Matthew 24:21', translation: 'KJV' },
      place: 'A city in ruin, under smoke', particles: 'ash',
      sun: { elev: 4, azim: -18, intensity: 17 },
      clouds: { coverage: 0.66, density: 1.5, base: 620, top: 2200, speed: 2.1 },
      terrain: { type: 'ruins', height: 0.062, layers: 3, haze: 0.75 },
      water: { on: false, rough: 0, level: 0 },
      grade: { lift: [0.030, 0.012, 0.008], gain: [1.18, 0.82, 0.66], sat: 1.0, tint: '#ff755a' },
      light: { x: 0.70, y: 0.22, rays: 0.55, haze: 0.85 },
      camera: { h: 74, yaw: 8, pitch: -0.8, fov: 46, dYaw: -11, dPitch: 2.6, dH: 30 },
      drone: 58,
      hotspots: [
        { az: -16, el: -1.5, title: 'The desolating sacrilege', ref: 'Mark 13:14', note: 'A phrase from Daniel, marked in the text itself as coded: "let the reader understand".', event: 'abomination-desolation' },
        { az: 20, el: 2.0, title: 'The souls under the altar', ref: 'Revelation 6:9–11', note: 'The fifth seal is not an event but a question: how long?', event: 'martyrs-under-altar' },
        { az: 34, el: -3.0, title: 'Babylon fallen', ref: 'Revelation 18:2', note: 'A city personified; most commentators identify the first-century referent as Rome.', event: 'babylon-falls' }
      ]
    },
    {
      id: 'adversaries', stage: 'adversaries', numeral: 'IV', kicker: 'Tyrian purple',
      name: 'Deceptive and adversarial figures', glyph: 'colonnade',
      line: 'Powers that ask to be worshipped. The texts describe roles, never names.',
      quote: { text: 'Even now are there many antichrists.', ref: '1 John 2:18', translation: 'KJV' },
      place: 'A colonnade at dusk', particles: 'lowfog',
      sun: { elev: -3.5, azim: 12, intensity: 15 },
      clouds: { coverage: 0.56, density: 1.1, base: 560, top: 1900, speed: 0.8 },
      terrain: { type: 'colonnade', height: 0.085, layers: 3, haze: 0.65 },
      water: { on: false, rough: 0, level: 0 },
      grade: { lift: [0.024, 0.010, 0.030], gain: [1.02, 0.78, 1.08], sat: 0.92, tint: '#fa91cc' },
      light: { x: 0.62, y: 0.34, rays: 0.75, haze: 0.80 },
      camera: { h: 46, yaw: -4, pitch: 0.8, fov: 44, dYaw: 7, dPitch: -1.4, dH: -10 },
      drone: 46,
      hotspots: [
        { az: -12, el: 2.5, title: 'The man of lawlessness', ref: '2 Thessalonians 2:3–8', note: 'Paul says he had explained the restrainer in person. We cannot recover his meaning.', event: 'man-of-lawlessness' },
        { az: 18, el: -1.0, title: 'The beast from the sea', ref: 'Revelation 13:1–10', note: 'Daniel’s four beasts folded into one: a summation of imperial power, not a fifth empire.', event: 'beast-from-sea' },
        { az: 30, el: 4.0, title: 'The number of the beast', ref: 'Revelation 13:18', note: 'A puzzle the text invites you to work. No modern identification is made here.', event: 'mark-and-number' }
      ]
    },
    {
      id: 'cosmos', stage: 'cosmos', numeral: 'V', kicker: 'Lapis lazuli',
      name: 'Cosmic disturbances', glyph: 'eclipse',
      line: 'The sun darkened, the moon like blood — prophetic idiom for an order collapsing.',
      quote: { text: 'The powers of the heavens shall be shaken.', ref: 'Matthew 24:29', translation: 'KJV' },
      place: 'High country, under eclipse', particles: 'falling',
      sun: { elev: 38, azim: 20, intensity: 6, eclipse: 1 },
      clouds: { coverage: 0.30, density: 0.7, base: 1500, top: 3600, speed: 0.9 },
      terrain: { type: 'mountains', height: 0.115, layers: 4, haze: 0.45 },
      water: { on: false, rough: 0, level: 0 },
      grade: { lift: [0.010, 0.014, 0.034], gain: [0.78, 0.90, 1.22], sat: 0.90, tint: '#aaccf6' },
      light: { x: 0.74, y: 0.17, rays: 0.30, haze: 0.35 },
      camera: { h: 240, yaw: 6, pitch: 3.0, fov: 54, dYaw: -9, dPitch: -3.5, dH: 26 },
      drone: 41,
      hotspots: [
        { az: -22, el: 12.0, title: 'Sun darkened, moon as blood', ref: 'Joel 2:31', note: 'Isaiah used the same language of Babylon, Ezekiel of Egypt. Whether it is literal here is disputed.', event: 'sun-darkened' },
        { az: 14, el: -2.0, title: 'The powers shaken', ref: 'Hebrews 12:26–29', note: 'Hebrews reads the shaking as the removal of what is made, so that what cannot be shaken remains.', event: 'powers-shaken' }
      ]
    },
    {
      id: 'parousia', stage: 'parousia', numeral: 'VI', kicker: 'Gold leaf',
      name: 'The coming of the Messiah', glyph: 'radiance',
      line: 'Public, visible, unmistakable — and the hour is not disclosed.',
      quote: { text: 'Behold, he cometh with clouds; and every eye shall see him.', ref: 'Revelation 1:7', translation: 'KJV' },
      place: 'Above the cloud line', particles: 'rising',
      sun: { elev: 13, azim: 0, intensity: 30 },
      clouds: { coverage: 0.60, density: 1.3, base: 900, top: 3000, speed: 1.1 },
      terrain: { type: 'cloudsea', height: 0.045, layers: 3, haze: 0.85 },
      water: { on: false, rough: 0, level: 0 },
      grade: { lift: [0.030, 0.022, 0.008], gain: [1.20, 1.04, 0.72], sat: 1.02, tint: '#ffca71' },
      light: { x: 0.80, y: 0.20, rays: 1.00, haze: 0.50 },
      camera: { h: 300, yaw: -3, pitch: 2.0, fov: 58, dYaw: 5, dPitch: 1.4, dH: 44 },
      drone: 65,
      hotspots: [
        { az: 0, el: 8.0, title: 'Coming with the clouds', ref: 'Daniel 7:13; Matthew 24:30', note: 'The most quoted image in New Testament eschatology.', event: 'son-of-man-comes' },
        { az: -20, el: -1.0, title: 'Caught up to meet him', ref: '1 Thessalonians 4:16–17', note: 'Written as consolation for the bereaved. Whether it is a separate event is disputed.', event: 'caught-up' },
        { az: 24, el: 3.5, title: 'Faithful and True', ref: 'Revelation 19:11', note: 'The weapon is a word from his mouth; the robe is stained before the encounter.', event: 'rider-white-horse' }
      ]
    },
    {
      id: 'judgement', stage: 'judgement', numeral: 'VII', kicker: 'Madder lake',
      name: 'Resurrection and final judgement', glyph: 'throne',
      line: 'The dead are raised. The books are opened. Nothing is unaccounted for.',
      quote: { text: 'And I saw the dead, small and great, stand before God.', ref: 'Revelation 20:12', translation: 'KJV' },
      place: 'Still water, high light', particles: 'embers',
      sun: { elev: 58, azim: -8, intensity: 24 },
      clouds: { coverage: 0.36, density: 0.8, base: 1200, top: 3100, speed: 0.7 },
      terrain: { type: 'none', height: 0, layers: 0 },
      water: { on: true, rough: 0.035, level: 0 },
      grade: { lift: [0.026, 0.010, 0.018], gain: [1.10, 0.86, 0.96], sat: 0.88, tint: '#e9e5e6' },
      light: { x: 0.42, y: 0.12, rays: 0.45, haze: 0.40 },
      camera: { h: 55, yaw: 2, pitch: 1.0, fov: 50, dYaw: -4, dPitch: -1.8, dH: 16 },
      drone: 52,
      hotspots: [
        { az: -16, el: 3.0, title: 'The great white throne', ref: 'Revelation 20:11–15', note: 'Two records: books of deeds, and the book of life. "Small and great" is a merism.', event: 'great-white-throne' },
        { az: 18, el: -2.0, title: 'The last enemy', ref: '1 Corinthians 15:26', note: 'Paul’s only explicit "then… then" sequence, and every millennial position appeals to it.', event: 'death-destroyed' }
      ]
    },
    {
      id: 'restoration', stage: 'restoration', numeral: 'VIII', kicker: 'Malachite',
      name: 'Restoration and new creation', glyph: 'city',
      line: 'A city, a river, a tree — and no more curse.',
      quote: { text: 'There shall be no more death, neither sorrow, nor crying.', ref: 'Revelation 21:4', translation: 'KJV' },
      place: 'The city, in golden light', particles: 'pollen',
      sun: { elev: 8, azim: -14, intensity: 26 },
      clouds: { coverage: 0.44, density: 0.85, base: 980, top: 2700, speed: 0.8 },
      terrain: { type: 'city', height: 0.09, layers: 3, haze: 0.5 },
      water: { on: true, rough: 0.05, level: 0 },
      grade: { lift: [0.014, 0.026, 0.012], gain: [1.06, 1.12, 0.80], sat: 1.0, tint: '#ffc552' },
      light: { x: 0.10, y: 0.30, rays: 0.85, haze: 0.60 },
      camera: { h: 120, yaw: -8, pitch: -0.5, fov: 52, dYaw: 10, dPitch: 2.4, dH: 22 },
      drone: 78,
      hotspots: [
        { az: -14, el: 1.0, title: 'The city coming down', ref: 'Revelation 21:2–27', note: 'A perfect cube — the shape of the holy of holies. It descends; it is not ascended to.', event: 'new-jerusalem' },
        { az: 16, el: -2.5, title: 'The river and the tree', ref: 'Revelation 22:1–2', note: 'Ezekiel 47 supplies the model; the source moves from the temple to the throne.', event: 'river-tree-healing' },
        { az: 30, el: 4.0, title: 'No more curse', ref: 'Revelation 22:3', note: 'The clause that closes the arc opened in Genesis 3:17.', event: 'no-more-curse' }
      ]
    },
    {
      id: 'coda', stage: null, numeral: '', kicker: 'Where the reading begins',
      name: 'All in all', glyph: 'seed',
      line: 'Everything you have seen is artistic reconstruction. Everything the texts say is in the study layer, with the interpretations kept separate.',
      quote: { text: 'That God may be all in all.', ref: '1 Corinthians 15:28', translation: 'KJV' },
      place: 'Under the stars again', particles: 'motes',
      sun: { elev: -7, azim: -6, intensity: 12 },
      clouds: { coverage: 0.24, density: 0.5, base: 1000, top: 2600, speed: 0.5 },
      terrain: { type: 'none', height: 0, layers: 0 },
      water: { on: true, rough: 0.05, level: 0 },
      grade: { lift: [0.012, 0.014, 0.022], gain: [0.94, 0.98, 1.06], sat: 0.86, tint: '#bde8ef' },
      light: { x: 0.55, y: 0.54, rays: 0.20, haze: 0.30 },
      camera: { h: 85, yaw: 3, pitch: 2.0, fov: 52, dYaw: -5, dPitch: 1.0, dH: 12 },
      drone: 55, hotspots: []
    }
  ];

  AD.data.scenes.forEach(function (s, i) {
    s.index = i;
    s.grade._tint = rgb(s.grade.tint);
    s.accent = s.grade.tint;
    if (s.sun.eclipse === undefined) s.sun.eclipse = 0;
    if (s.sun.moon === undefined) s.sun.moon = false;
    if (!s.terrain.haze) s.terrain.haze = 0.5;
  });

  AD.data.sceneById = {};
  AD.data.scenes.forEach(function (s) { AD.data.sceneById[s.id] = s; });
})(window.AD);
