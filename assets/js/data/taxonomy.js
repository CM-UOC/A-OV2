/* Stages, themes, certainty scale, canonical book index. */
(function (AD) {
  'use strict';

  AD.data.events = AD.data.events || [];

  AD.data.stages = [
    { id: 'origins', num: '0', name: 'The beginning of all things',
      pigment: 'Carbon and bistre ink',
      blurb: 'Genesis 1–12. Not prophecy about the end, but the account the prophetic and apocalyptic writers keep returning to. Creation, the garden, the transgression, the flood, the scattering of the nations, and the promise to Abraham supply the vocabulary — light, water, tree, city, covenant — that the last chapters of the Bible deliberately reuse.' },
    { id: 'foundations', num: 'I', name: 'Earlier prophetic foundations',
      pigment: 'Iron gall',
      blurb: 'The Hebrew prophets announce a decisive divine intervention: the Day of the LORD, an anointed deliverer, a covenant written on the heart, and — in Daniel and parts of Isaiah — visions of an end to the present order. These texts are the reservoir every later apocalypse draws on.' },
    { id: 'signs', num: 'II', name: 'Signs and conditions preceding the end',
      pigment: 'Verdigris',
      blurb: 'In the Gospels and the letters, conditions are described that precede the end without dating it: upheaval, deception, proclamation, apostasy, and above all the insistence that the moment is unknown. The New Testament pairs every list of signs with a warning against calculation.' },
    { id: 'tribulation', num: 'III', name: 'Tribulation, persecution, and judgement',
      pigment: 'Red ochre',
      blurb: 'Distress for the faithful and judgement on the powers: the desolating sacrilege, the siege of Jerusalem, the seals, trumpets, and bowls, the two witnesses, and the fall of the city called Babylon. Whether these describe a first-century crisis, the whole church age, or a future period is the central interpretive dispute of the site.' },
    { id: 'adversaries', num: 'IV', name: 'Deceptive and adversarial figures',
      pigment: 'Tyrian purple',
      blurb: 'Daniel’s little horn, Paul’s man of lawlessness, John’s antichrists, and Revelation’s dragon, beast, and false prophet. The texts describe roles and patterns rather than named individuals; the site does not identify any living person, state, or institution with them.' },
    { id: 'cosmos', num: 'V', name: 'Cosmic and earthly disturbances',
      pigment: 'Lapis lazuli',
      blurb: 'Sun darkened, moon like blood, stars falling, the powers of the heavens shaken, the earth reeling. This is stock prophetic language for the collapse of an order — used in the Hebrew Bible for the fall of Babylon and Edom long before it is used of the end.' },
    { id: 'parousia', num: 'VI', name: 'The coming of the Messiah',
      pigment: 'Gold leaf',
      blurb: 'The parousia: the Son of Man coming with the clouds, visible, public, and unmistakable, gathering his people. The New Testament describes this as one event seen from many angles; traditions differ over whether it has stages.' },
    { id: 'judgement', num: 'VII', name: 'Resurrection and final judgement',
      pigment: 'Madder lake',
      blurb: 'The dead are raised, the books are opened, and every life is assessed. Daniel 12 and 1 Corinthians 15 are the load-bearing texts; Revelation 20 adds a first resurrection and a thousand years whose placement divides the millennial positions.' },
    { id: 'restoration', num: 'VIII', name: 'Restoration, new creation, eternal kingdom',
      pigment: 'Malachite',
      blurb: 'New heavens and a new earth, the city coming down, the river and the tree of life, death abolished, God dwelling with humanity. The ending is written as a deliberate answer to Genesis 1–3 — the same images, released from the curse.' }
  ];

  AD.data.stageById = {};
  AD.data.stages.forEach(function (s, i) { s.index = i; AD.data.stageById[s.id] = s; });

  AD.data.certainty = [
    { id: 'anchored', label: 'Anchored', short: 'anchored',
      note: 'The text itself places this event relative to others (e.g. "immediately after the tribulation of those days"). Traditions still differ over meaning, but not over position within the passage.' },
    { id: 'sequenced', label: 'Sequenced', short: 'sequenced',
      note: 'Position is inferred from a wider argument rather than stated, but the inference is broadly shared across traditions.' },
    { id: 'contested', label: 'Contested', short: 'contested',
      note: 'Major traditions place this event at materially different points, or dispute whether it is a distinct event at all.' },
    { id: 'symbolic', label: 'Non-sequential', short: 'symbolic',
      note: 'The text presents this in visionary terms that may not describe a sequence at all. Reading it as a chronology is already an interpretive decision.' }
  ];
  AD.data.certaintyById = {};
  AD.data.certainty.forEach(function (c) { AD.data.certaintyById[c.id] = c; });

  AD.data.themes = [
    { id: 'creation', label: 'Creation and cosmos', description: 'The making, unmaking, and remaking of heaven and earth.' },
    { id: 'covenant', label: 'Covenant and promise', description: 'Binding commitments — Noahic, Abrahamic, Davidic, new — and their consummation.' },
    { id: 'day-of-lord', label: 'The Day of the LORD', description: 'A decisive divine intervention in judgement and deliverance.' },
    { id: 'messiah', label: 'Messiah and Son of Man', description: 'The anointed deliverer and the heavenly figure of Daniel 7.' },
    { id: 'judgement', label: 'Judgement', description: 'Assessment of nations, individuals, and spiritual powers.' },
    { id: 'resurrection', label: 'Resurrection', description: 'The raising of the dead, bodily and corporate.' },
    { id: 'temple', label: 'Temple and holy city', description: 'Sanctuary, Jerusalem, desecration, and the city that needs no temple.' },
    { id: 'deception', label: 'Deception and opposition', description: 'False prophecy, counterfeit signs, and adversarial powers.' },
    { id: 'suffering', label: 'Persecution and endurance', description: 'The testing of the faithful and the call to endure.' },
    { id: 'nations', label: 'The nations', description: 'Gentiles as opponents, as pilgrims, and as the object of mission.' },
    { id: 'watchers', label: 'Rebellious spiritual beings', description: 'Fallen angels, the Watchers tradition, and the judgement of spirits.' },
    { id: 'kingdom', label: 'Kingdom and reign', description: 'Rule given, contested, and finally handed over to God.' },
    { id: 'restoration', label: 'Restoration and renewal', description: 'Return, healing, and the reversal of the curse.' },
    { id: 'imminence', label: 'Timing and imminence', description: 'Nearness, delay, watchfulness, and the refusal to date the end.' }
  ];
  AD.data.themeById = {};
  AD.data.themes.forEach(function (t) { AD.data.themeById[t.id] = t; });

  /* Canonical order for grouping the "biblical book" filter. */
  AD.data.bookOrder = [
    'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
    'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel', '1 Kings', '2 Kings',
    '1 Chronicles', '2 Chronicles', 'Ezra', 'Nehemiah', 'Esther',
    'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Songs',
    'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',
    'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum',
    'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
    'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans',
    '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians',
    'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy',
    'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter',
    '1 John', '2 John', '3 John', 'Jude', 'Revelation',
    '1 Enoch'
  ];

  AD.data.testamentOf = function (book) {
    if (book === '1 Enoch') return 'comparative';
    return AD.data.bookOrder.indexOf(book) >= AD.data.bookOrder.indexOf('Matthew') ? 'nt' : 'ot';
  };

  AD.data.testaments = [
    { id: 'ot', label: 'Hebrew Bible / Old Testament' },
    { id: 'nt', label: 'New Testament' },
    { id: 'comparative', label: '1 Enoch (comparative)' }
  ];
})(window.AD);
