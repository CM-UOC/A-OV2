/* Stage 0 — The beginning of all things (Genesis 1–12) */
(function (AD) {
  'use strict';
  AD.data.events = AD.data.events || [];
  AD.data.events.push(

  { id: 'creation', stage: 'origins', order: 1, source: 'canonical',
    title: 'The heavens and the earth are made',
    summary: 'An ordered creation in seven days, culminating in rest. Everything the prophetic books later say about unmaking and remaking the world assumes this opening.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 1:1–2:3' },
      { book: 'Psalms', ref: 'Psalm 33:6–9' },
      { book: 'Psalms', ref: 'Psalm 104:5–9' },
      { book: 'John', ref: 'John 1:1–5' },
      { book: 'Colossians', ref: 'Colossians 1:15–17' },
      { book: 'Hebrews', ref: 'Hebrews 11:3' },
      { book: 'Revelation', ref: 'Revelation 4:11' }
    ],
    quote: { text: 'In the beginning God created the heaven and the earth.', ref: 'Genesis 1:1', translation: 'KJV' },
    context: 'The opening of the Pentateuch, widely assigned by critical scholarship to the Priestly stratum. Its structure is deliberate: three days of forming, three of filling, and a seventh of rest. Comparative work reads it alongside other ancient Near Eastern cosmogonies such as Enūma Eliš, noting both shared imagery (a watery deep, division of waters) and pointed differences (no conflict between deities, humanity made in the divine image rather than to relieve the gods of labour).',
    symbols: ['light and darkness', 'the deep (təhôm)', 'the firmament', 'seven days', 'sabbath rest'],
    themes: ['creation', 'kingdom'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'criticism', text: 'Read as a liturgical and theological ordering of reality rather than a chronicle; the seven-day frame is generally understood as literary architecture, and its relationship to natural history is disputed among readers of every tradition.' },
      { framework: 'idealism', text: 'The creation account supplies the pattern that Revelation reverses and completes; the last two chapters of the Bible are read as answering the first two, image for image.' }
    ],
    related: ['new-heavens-new-earth', 'no-more-sea', 'garden-tree-life'],
    enoch: [ { ref: '1 Enoch 2:1–5:3', relation: 'parallel',
      text: 'Enoch argues from the reliable order of creation — the luminaries, seasons, and seas that never transgress their command — as a witness against human disorder. The same appeal to created order underwrites Genesis 1 and Jeremiah 33:20–26, though 1 Enoch develops it into a full moral argument.' } ]
  },

  { id: 'garden-tree-life', stage: 'origins', order: 2, source: 'canonical',
    title: 'The garden, the tree of life, and the river',
    summary: 'A planted garden with a river that divides into four, a tree of life, and a tree of the knowledge of good and evil, with a single prohibition attached.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 2:8–17' },
      { book: 'Genesis', ref: 'Genesis 2:10–14', note: 'the river and its four heads' },
      { book: 'Ezekiel', ref: 'Ezekiel 28:13–14', note: 'Eden as a mountain sanctuary' },
      { book: 'Ezekiel', ref: 'Ezekiel 47:1–12', note: 'water from the temple, trees for healing' },
      { book: 'Revelation', ref: 'Revelation 2:7' },
      { book: 'Revelation', ref: 'Revelation 22:1–2' }
    ],
    context: 'Eden is described with sanctuary vocabulary — gold and precious stone, cherubim, a mountain, an east-facing entrance — and Ezekiel 28 treats it explicitly as a holy mountain. Many scholars therefore read the garden as the first temple, which is why the last vision of Revelation can present a city that needs no temple and still be describing Eden restored.',
    symbols: ['tree of life', 'four-headed river', 'cherubim', 'garden as sanctuary'],
    themes: ['creation', 'temple', 'restoration'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'idealism', text: 'The garden functions typologically: what is lost in Genesis 3 is the thing promised to "him that overcometh" in Revelation 2:7, and the promise is read as present spiritual life rather than a future location.' },
      { framework: 'futurism', text: 'The tree and river of Revelation 22 are read as belonging to a literal renewed earth, with Ezekiel 47 describing a future temple whose waters heal the Dead Sea.' }
    ],
    related: ['expulsion', 'river-tree-healing', 'new-jerusalem'],
    enoch: [ { ref: '1 Enoch 24:1–25:7', relation: 'parallel',
      text: 'Enoch is shown a fragrant tree on a mountain, reserved for the righteous and transplanted to the sanctuary after the judgement. The motif of a guarded tree of life released to the righteous at the end is shared with Genesis 2–3 and Revelation 22, though the itinerary and mountain geography are distinctive to 1 Enoch.' } ]
  },

  { id: 'transgression', stage: 'origins', order: 3, source: 'canonical',
    title: 'The serpent, the transgression, and the curse',
    summary: 'The command is broken after the serpent’s persuasion. Ground, serpent, and human labour are cursed, and enmity is declared between the serpent and the woman’s offspring.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 3:1–19' },
      { book: 'Genesis', ref: 'Genesis 3:15', note: 'the enmity saying' },
      { book: 'Romans', ref: 'Romans 5:12–19' },
      { book: 'Romans', ref: 'Romans 8:20–22' },
      { book: '2 Corinthians', ref: '2 Corinthians 11:3' },
      { book: 'Revelation', ref: 'Revelation 12:9' },
      { book: 'Revelation', ref: 'Revelation 20:2' }
    ],
    quote: { text: 'And I will put enmity between thee and the woman, and between thy seed and her seed; it shall bruise thy head, and thou shalt bruise his heel.', ref: 'Genesis 3:15', translation: 'KJV' },
    context: 'Genesis 3 does not identify the serpent with Satan; that identification is made much later, and Revelation 12:9 and 20:2 make it explicit by calling the dragon "that old serpent". Christian tradition since Irenaeus has called Genesis 3:15 the protoevangelium, the first announcement of the gospel — a reading the Hebrew text permits but does not require.',
    symbols: ['serpent', 'bruised heel', 'cursed ground', 'nakedness and covering'],
    themes: ['deception', 'judgement', 'creation'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'criticism', text: 'Read within Genesis, the passage explains observable realities — snakes, painful childbirth, hard agricultural labour, mortality — without naming a redeemer; the messianic reading is a later development, visible in the Septuagint and in early Christian exegesis.' },
      { framework: 'idealism', text: 'The enmity is understood as the permanent structure of the conflict between the people of God and the deceiving power, which Revelation 12 then narrates in visionary form.' },
      { framework: 'futurism', text: 'The head-bruising is read as fulfilled decisively at the cross and consummated when Satan is finally destroyed (Revelation 20:10), so the verse frames the whole biblical storyline.' }
    ],
    related: ['dragon-satan', 'creation-set-free', 'no-more-curse'],
    enoch: [ { ref: '1 Enoch 69:6', relation: 'shared-tradition',
      text: 'A Watcher named Gadreel is said to have led Eve astray. This is one of several Second Temple attempts to connect the garden narrative with the tradition of rebellious angels; Genesis itself makes no such connection, and the two accounts should not be merged.' } ]
  },

  { id: 'expulsion', stage: 'origins', order: 4, source: 'canonical',
    title: 'Expulsion, and the way to the tree guarded',
    summary: 'Humanity is sent out of the garden and cherubim with a flaming sword guard the way to the tree of life — the image the Bible’s last chapter deliberately cancels.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 3:22–24' },
      { book: 'Revelation', ref: 'Revelation 22:14' },
      { book: 'Revelation', ref: 'Revelation 21:25', note: 'gates never shut' },
      { book: 'Hebrews', ref: 'Hebrews 11:13–16' }
    ],
    context: 'The exile eastward from Eden begins a pattern that shapes the whole Hebrew Bible: expulsion, wandering, and the hope of return. Exile and restoration become the master image of prophetic hope, which is why the end of Revelation is described as a homecoming rather than an escape.',
    symbols: ['flaming sword', 'cherubim as guards', 'exile eastward'],
    themes: ['judgement', 'restoration'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'idealism', text: 'Access to the tree "by the gates" in Revelation 22:14 is read as present participation in the life of God through Christ, not a future geography.' },
      { framework: 'premillennialism', text: 'The restored access is placed on a renewed earth after the resurrection, completing a literal reversal of the Genesis exile.' }
    ],
    related: ['garden-tree-life', 'river-tree-healing'],
    enoch: []
  },

  { id: 'violence-fills-earth', stage: 'origins', order: 5, source: 'canonical',
    title: 'Violence fills the earth',
    summary: 'From the first murder to Lamech’s boast, Genesis traces an escalation that ends with the verdict that the earth is filled with violence — a diagnosis the Gospels reuse for the last days.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 4:1–16' },
      { book: 'Genesis', ref: 'Genesis 4:23–24', note: 'Lamech’s song' },
      { book: 'Genesis', ref: 'Genesis 6:5, 11–13' },
      { book: 'Matthew', ref: 'Matthew 24:12', note: 'lawlessness multiplied, love grown cold' },
      { book: 'Matthew', ref: 'Matthew 24:37–39' }
    ],
    context: 'Genesis 4–6 is a genealogy interleaved with a moral trajectory. The Hebrew term ḥāmās ("violence", Genesis 6:11) names social wrongdoing, and it is this, rather than any single act, that triggers the flood narrative. Jesus’ comparison of the last days to "the days of Noah" turns on ordinary life continuing unaware, not on exceptional wickedness.',
    symbols: ['blood crying from the ground', 'the mark of Cain', 'the sword'],
    themes: ['judgement', 'deception'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'criticism', text: 'The primeval history is read as an aetiology of the human condition and of Israel’s neighbours, composed to set up the call of Abraham in Genesis 12.' },
      { framework: 'futurism', text: 'Matthew 24:37–39 is read as describing a specific future generation whose ordinary preoccupations are interrupted by the return of Christ.' }
    ],
    related: ['days-of-noah', 'lawlessness-increases'],
    enoch: [ { ref: '1 Enoch 7:2–6; 9:1–10', relation: 'shared-tradition',
      text: 'In 1 Enoch the pre-flood violence is attributed largely to the giants and to the forbidden teaching of the Watchers, and the earth itself brings the complaint before God. Genesis 6:5, 11–13 attributes the corruption to humanity, with no mention of angelic teaching. The two accounts explain the same crisis differently.' } ]
  },

  { id: 'enoch-walked', stage: 'origins', order: 6, source: 'canonical',
    title: 'Enoch walked with God, and was not',
    summary: 'Four verses in a genealogy — a man who does not die but is taken. From this narrative gap grew an entire body of Second Temple literature.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 5:21–24' },
      { book: 'Hebrews', ref: 'Hebrews 11:5' },
      { book: 'Jude', ref: 'Jude 14–15', note: 'quotes 1 Enoch 1:9' },
      { book: '1 Enoch', ref: '1 Enoch 12:1–2; 70–71' }
    ],
    quote: { text: 'And Enoch walked with God: and he was not; for God took him.', ref: 'Genesis 5:24', translation: 'KJV' },
    context: 'Genesis says nothing about what Enoch saw or wrote. The Enochic literature — the Book of the Watchers, the Astronomical Book, the Book of Parables, the Animal Apocalypse, the Epistle — is written in his name and fills that silence. This is the hinge between the canonical narrative and the comparative source used throughout this site.',
    symbols: ['ascent', 'the seventh from Adam', 'the scribe of righteousness'],
    themes: ['watchers', 'judgement'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'criticism', text: 'The brevity and the number seven (Enoch is seventh in the line from Adam) made this figure attractive for pseudepigraphic attribution; comparison is often drawn with Mesopotamian traditions of an antediluvian sage.' },
      { framework: 'patristic', text: 'Some early Christian writers, including Tertullian, valued the Enochic writings; others, and the eventual consensus in most churches, did not treat them as scripture. The Ethiopian Orthodox Tewahedo Church retains 1 Enoch in its canon.' }
    ],
    related: ['jude-quotes-enoch', 'sons-of-god'],
    enoch: [ { ref: '1 Enoch 12:1–2; 14:8–25; 70–71', relation: 'parallel',
      text: 'The Enochic corpus develops the removal of Genesis 5:24 into a heavenly journey, a throne vision, and — in the Book of Parables — an identification of Enoch himself with the Son of Man figure (71:14), a passage whose interpretation is debated among specialists.' } ]
  },

  { id: 'sons-of-god', stage: 'origins', order: 7, source: 'canonical',
    title: 'The sons of God and the Nephilim',
    summary: 'Four dense verses about "sons of God" taking wives and giants in the earth. In 1 Enoch this becomes a full mythology of rebellious Watchers; the New Testament alludes to the tradition without retelling it.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 6:1–4' },
      { book: 'Numbers', ref: 'Numbers 13:33', note: 'Nephilim recalled by the spies' },
      { book: '2 Peter', ref: '2 Peter 2:4–5' },
      { book: 'Jude', ref: 'Jude 6' },
      { book: '1 Enoch', ref: '1 Enoch 6–16' }
    ],
    quote: { text: 'There were giants in the earth in those days.', ref: 'Genesis 6:4', translation: 'KJV' },
    context: 'Genesis 6:1–4 is among the most disputed passages in the Hebrew Bible. The main readings are: (a) heavenly beings mating with human women — the reading assumed by 1 Enoch, Jubilees, and most Second Temple sources; (b) the line of Seth intermarrying with the line of Cain, a reading common from the fourth century onwards; (c) dynastic rulers claiming divine status. 2 Peter and Jude describe angels who "kept not their first estate" and are held in chains for judgement, language that matches the Watchers tradition closely.',
    symbols: ['Nephilim', 'the bound angels', 'chains of darkness'],
    themes: ['watchers', 'judgement'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'criticism', text: 'Most historical-critical scholars read the passage as a fragment of older mythology, retained to explain the Nephilim and to motivate the flood. The Enochic reading is generally regarded as the earliest attested interpretation, not as a later invention.' },
      { framework: 'patristic', text: 'The Sethite reading gained ground in part because the angelic reading was associated with 1 Enoch, whose authority was contested. Both readings persist in Christian tradition.' }
    ],
    related: ['watchers-bound', 'judgement-of-angels'],
    enoch: [ { ref: '1 Enoch 6:1–8; 7:1–6; 8:1–3; 10:4–14', relation: 'parallel',
      text: 'The Watchers descend under Shemihazah, swear a mutual oath on Mount Hermon, father the giants, and teach metallurgy, weaponry, cosmetics, sorcery, and astrology through Asael and others. Asael is bound in darkness until the great day of judgement. Jude 6 and 2 Peter 2:4 use language strikingly close to this, but neither names the Watchers or repeats the narrative.' } ]
  },

  { id: 'flood', stage: 'origins', order: 8, source: 'canonical',
    title: 'The flood, and the covenant with Noah',
    summary: 'A world is undone by water and re-founded by covenant. The New Testament treats it as the pattern for a coming judgement — by fire rather than water, and equally unexpected.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 6:9–9:17' },
      { book: 'Isaiah', ref: 'Isaiah 54:9', note: 'the waters of Noah as a pledge' },
      { book: 'Matthew', ref: 'Matthew 24:37–39' },
      { book: 'Luke', ref: 'Luke 17:26–27' },
      { book: '1 Peter', ref: '1 Peter 3:20–21' },
      { book: '2 Peter', ref: '2 Peter 2:5' },
      { book: '2 Peter', ref: '2 Peter 3:5–7' }
    ],
    quote: { text: 'The world that then was, being overflowed with water, perished: But the heavens and the earth, which are now, by the same word are kept in store, reserved unto fire against the day of judgment.', ref: '2 Peter 3:6–7', translation: 'KJV, abridged' },
    context: 'The flood narrative shows classic signs of composite authorship (two sets of numbers for the animals and the duration), and it ends with a covenant addressed to all flesh, not to one people. 2 Peter builds an explicit argument from it: those who deny that God intervenes in history have forgotten a case in which he did.',
    symbols: ['the ark', 'the bow in the cloud', 'the dove', 'waters of chaos returning'],
    themes: ['judgement', 'covenant', 'creation'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'preterism', text: 'The flood is treated as a completed act of judgement supplying the imagery — not the timetable — for judgements within history, including the first-century catastrophe in Judaea.' },
      { framework: 'futurism', text: '2 Peter 3:7, 10–12 is read as describing a literal future dissolution of the present heavens and earth preceding the new creation.' },
      { framework: 'idealism', text: 'The pairing of water and fire is read as a theological statement about God’s relation to a corrupted order rather than a description of physical mechanism.' }
    ],
    related: ['days-of-noah', 'elements-melt', 'seedtime-harvest'],
    enoch: [ { ref: '1 Enoch 10:1–3; 65–67; 83:3–5', relation: 'parallel',
      text: 'The Enochic tradition makes the flood the direct judgement on the Watchers’ corruption and gives Noah his own revelation. The Book of Dream Visions (83–84) has Enoch foresee the deluge. Genesis links the flood to human violence and does not present it as a punishment of angels.' } ]
  },

  { id: 'seedtime-harvest', stage: 'origins', order: 9, source: 'canonical',
    title: 'While the earth remains',
    summary: 'After the flood, a promise of regularity: seasons and cycles will not cease. The stability of creation becomes an argument in the prophets for the reliability of God’s other promises.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 8:20–22' },
      { book: 'Genesis', ref: 'Genesis 9:8–17' },
      { book: 'Jeremiah', ref: 'Jeremiah 33:19–26' },
      { book: 'Jeremiah', ref: 'Jeremiah 31:35–37' }
    ],
    context: 'Jeremiah twice argues that God’s covenant with David and with Israel is as fixed as the covenant with day and night. This makes the later prophetic language of sun and moon failing (Isaiah 13:10; Joel 2:31) rhetorically forceful: it borrows the one thing that was promised never to fail.',
    symbols: ['seedtime and harvest', 'ordinances of heaven', 'day and night'],
    themes: ['covenant', 'creation', 'imminence'],
    certainty: 'sequenced',
    interpretations: [
      { framework: 'idealism', text: 'Read together with Genesis 8:22, cosmic-collapse language in the prophets is understood as figurative, since the created order is explicitly promised continuity.' },
      { framework: 'futurism', text: 'The promise is read as holding "while the earth remains", i.e. until the end, at which point the described disturbances do occur literally.' }
    ],
    related: ['sun-darkened', 'elements-melt'],
    enoch: [ { ref: '1 Enoch 2:1–5:3; 80:2–8', relation: 'parallel',
      text: 'The Astronomical Book contains both halves of this idea: the luminaries normally keep perfect order, and in the days of the sinners that order is disturbed — rain withheld, the moon altered, the stars straying. The pairing is closer to Enoch than to any single biblical text.' } ]
  },

  { id: 'babel', stage: 'origins', order: 10, source: 'canonical',
    title: 'Babel, and the scattering of the nations',
    summary: 'A city and tower built for a name; language confused and humanity dispersed. The name that begins here — Babel, Babylon — returns as the Bible’s standing symbol for imperial self-exaltation.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 11:1–9' },
      { book: 'Zephaniah', ref: 'Zephaniah 3:9', note: 'a pure language restored' },
      { book: 'Acts', ref: 'Acts 2:5–11' },
      { book: 'Revelation', ref: 'Revelation 7:9' },
      { book: 'Revelation', ref: 'Revelation 17:5' },
      { book: 'Revelation', ref: 'Revelation 21:24–26' }
    ],
    context: 'Genesis 11:9 puns on the name Babel and the Hebrew verb bālal, "to confuse". Babylon later becomes the historical agent of Judah’s exile and, by the first century, a coded name for Rome — used that way in 1 Peter 5:13 and, in the judgement of most commentators, in Revelation 17–18.',
    symbols: ['tower', 'brick and bitumen', 'confusion of tongues', 'the city seeking a name'],
    themes: ['nations', 'judgement', 'kingdom'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'preterism', text: 'Revelation’s Babylon is identified with first-century Rome (or, in some preterist readings, with apostate Jerusalem), making the fall of Babylon a first-century event.' },
      { framework: 'historicism', text: 'Babylon has been identified with successive historical powers by interpreters in different centuries — a track record that historicists treat as cumulative and critics treat as a weakness of the method.' },
      { framework: 'idealism', text: 'Babylon is read as the permanent type of any society organised around self-exaltation, so the fall is not tied to one empire.' }
    ],
    related: ['babylon-falls', 'nations-stream', 'great-multitude'],
    enoch: [ { ref: '1 Enoch 89:59–90:19', relation: 'shared-tradition',
      text: 'The Animal Apocalypse narrates Israel’s history under the rule of seventy "shepherds" representing angelic overseers of the nations — a different way of accounting for the same problem of Gentile domination that Genesis 11 raises and Revelation resolves.' } ]
  },

  { id: 'abraham-promise', stage: 'origins', order: 11, source: 'canonical',
    title: 'The promise to Abraham',
    summary: 'Land, descendants, and blessing for all the families of the earth. Genesis narrows from the nations to one family precisely in order to reach the nations again.',
    refs: [
      { book: 'Genesis', ref: 'Genesis 12:1–3' },
      { book: 'Genesis', ref: 'Genesis 15:1–21' },
      { book: 'Genesis', ref: 'Genesis 17:1–8' },
      { book: 'Genesis', ref: 'Genesis 22:15–18' },
      { book: 'Romans', ref: 'Romans 4:13', note: 'heir of the world' },
      { book: 'Galatians', ref: 'Galatians 3:8, 16, 29' },
      { book: 'Hebrews', ref: 'Hebrews 11:8–16', note: 'a city with foundations' }
    ],
    context: 'The Abrahamic promise is the pivot from primeval history to Israel’s story, and it is the text where the New Testament writers most often ground the inclusion of the nations. Hebrews 11:10, 16 reads Abraham’s expectation as a city prepared by God — the same image Revelation 21 uses.',
    symbols: ['stars as descendants', 'the smoking furnace and burning lamp', 'the promised city'],
    themes: ['covenant', 'nations', 'kingdom'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'futurism', text: 'Dispensational readings maintain a distinct and unfulfilled national future for Israel grounded in the land promise of Genesis 15:18–21.' },
      { framework: 'amillennialism', text: 'The promise is read as fulfilled in Christ and extended to all who belong to him (Galatians 3:29), with the land promise finding its scope enlarged to the renewed creation (Romans 4:13).' },
      { framework: 'postmillennialism', text: 'The blessing of "all families of the earth" is taken as a programme for history: the promise implies a genuinely worldwide reception of the gospel before the end.' }
    ],
    related: ['all-israel-saved', 'new-jerusalem', 'nations-stream'],
    enoch: []
  }

  );
})(window.AD);
