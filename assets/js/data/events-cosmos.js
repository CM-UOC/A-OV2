/* Stage V — Cosmic and earthly disturbances */
(function (AD) {
  'use strict';
  AD.data.events.push(

  { id: 'sun-darkened', stage: 'cosmos', order: 1, source: 'canonical',
    title: 'Sun darkened, moon like blood, stars falling',
    summary: 'The most recognisable image in biblical eschatology, and the one whose literary history is most often overlooked: the prophets use it for the fall of empires long before it is used of the end.',
    refs: [
      { book: 'Isaiah', ref: 'Isaiah 13:9–13', note: 'of Babylon' },
      { book: 'Isaiah', ref: 'Isaiah 34:4', note: 'of Edom; the heavens rolled up' },
      { book: 'Ezekiel', ref: 'Ezekiel 32:7–8', note: 'of Egypt' },
      { book: 'Joel', ref: 'Joel 2:10, 30–31; 3:15' },
      { book: 'Matthew', ref: 'Matthew 24:29' },
      { book: 'Mark', ref: 'Mark 13:24–25' },
      { book: 'Acts', ref: 'Acts 2:19–20' },
      { book: 'Revelation', ref: 'Revelation 6:12–14' }
    ],
    quote: { text: 'Immediately after the tribulation of those days shall the sun be darkened, and the moon shall not give her light, and the stars shall fall from heaven, and the powers of the heavens shall be shaken.', ref: 'Matthew 24:29', translation: 'KJV' },
    context: 'Isaiah applies this language to Babylon, Ezekiel to Egypt, and Joel to a locust plague and its aftermath — none of which involved the literal extinction of the sun. This is decisive context: the imagery belongs to a recognised prophetic idiom for the collapse of a political and cosmic order. Whether the New Testament uses it in the same figurative way, or intends literal astronomical events, is the central question here.',
    symbols: ['darkened sun', 'blood moon', 'falling stars', 'the sky rolled like a scroll'],
    themes: ['creation', 'day-of-lord', 'judgement'],
    certainty: 'contested',
    interpretations: [
      { framework: 'preterism', text: 'Reads the language as the prophets used it — figurative for the fall of a power — and applies Matthew 24:29 to the end of the Jerusalem temple order.' },
      { framework: 'futurism', text: 'Reads literal cosmic disturbance immediately before the return, noting that Matthew 24:29 says "immediately after the tribulation of those days".' },
      { framework: 'idealism', text: 'Reads it as the standard vocabulary for the shaking of every order that appears permanent.' },
      { framework: 'historicism', text: 'Has connected specific historical phenomena — notably the "Dark Day" of 1780 and the 1833 Leonid meteor storm — with these verses. Such identifications are contested and are recorded here as interpretation, not as fact.' }
    ],
    related: ['joel-spirit', 'powers-shaken', 'son-of-man-comes', 'seedtime-harvest'],
    enoch: [ { ref: '1 Enoch 80:2–8', relation: 'parallel',
      text: 'In the days of the sinners the moon alters its order, the stars stray, and the harvests fail. 1 Enoch treats cosmic disorder as a moral consequence in a more systematic way than any biblical text, because it has already devoted ten chapters to the ordinary order of the luminaries.' } ]
  },

  { id: 'powers-shaken', stage: 'cosmos', order: 2, source: 'canonical',
    title: 'The powers of the heavens shaken',
    summary: 'More than weather: the framework of the world is described as trembling, and Hebrews reads the shaking as a sifting that leaves what cannot be shaken.',
    refs: [
      { book: 'Matthew', ref: 'Matthew 24:29' },
      { book: 'Haggai', ref: 'Haggai 2:6–7, 21–22' },
      { book: 'Hebrews', ref: 'Hebrews 12:26–29' },
      { book: 'Isaiah', ref: 'Isaiah 24:18–23' },
      { book: 'Isaiah', ref: 'Isaiah 34:4' }
    ],
    quote: { text: 'Yet once more I shake not the earth only, but also heaven.', ref: 'Hebrews 12:26', translation: 'KJV, quoting Haggai 2:6' },
    context: 'Hebrews quotes Haggai and draws an explicit conclusion: the shaking is a removal of what is made, so that the unshakable kingdom remains. This is one of the few places where the New Testament interprets cosmic-disturbance language directly, and it interprets it in terms of permanence and transience rather than astronomy.',
    symbols: ['the shaken heavens', 'the unshakable kingdom', 'consuming fire'],
    themes: ['creation', 'kingdom', 'judgement'],
    certainty: 'sequenced',
    interpretations: [
      { framework: 'idealism', text: 'Takes Hebrews 12:27 as the interpretive key: the shaking is about what endures, not about physical mechanics.' },
      { framework: 'futurism', text: 'Reads a literal cosmic upheaval accompanying the return, with Hebrews stating its outcome rather than replacing its content.' },
      { framework: 'preterism', text: 'Connects the shaking with the passing of the old covenant order in the first century, since Hebrews addresses readers facing that transition.' }
    ],
    related: ['sun-darkened', 'elements-melt', 'new-heavens-new-earth'],
    enoch: [] },

  { id: 'distress-of-nations', stage: 'cosmos', order: 3, source: 'canonical',
    title: 'Distress of nations, and hearts failing for fear',
    summary: 'Luke describes the human response to the cosmic signs — perplexity, the roaring of sea and waves, people fainting from dread of what is coming on the world.',
    refs: [
      { book: 'Luke', ref: 'Luke 21:25–26' },
      { book: 'Isaiah', ref: 'Isaiah 24:17–20' },
      { book: 'Psalms', ref: 'Psalm 46:1–3', note: 'the counter-image: no fear though the earth gives way' },
      { book: 'Luke', ref: 'Luke 21:28', note: '"lift up your heads"' }
    ],
    context: 'Luke pairs the description of terror with an instruction that reverses it: when these things begin, straighten up and lift your heads. The passage is structured so that the same events produce opposite responses depending on what the observer expects. The roaring sea evokes the chaos-waters of Genesis 1:2 and Psalm 46.',
    symbols: ['roaring sea and waves', 'hearts failing', 'heads lifted'],
    themes: ['day-of-lord', 'suffering'],
    certainty: 'sequenced',
    interpretations: [
      { framework: 'preterism', text: 'Reads it of the terror in Judaea during the Roman war, with "the world" meaning the inhabited Roman world.' },
      { framework: 'futurism', text: 'Reads global human dread immediately before the return.' },
      { framework: 'idealism', text: 'Reads it as the contrast between fear and hope that characterises the whole age.' }
    ],
    related: ['sun-darkened', 'son-of-man-comes', 'no-more-sea'],
    enoch: [] },

  { id: 'great-earthquake', stage: 'cosmos', order: 4, source: 'canonical',
    title: 'A great earthquake; islands and mountains moved',
    summary: 'Repeatedly in Revelation the created order convulses, cities fall, and every island flees — and the reaction described is not repentance but concealment.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 6:12–17' },
      { book: 'Revelation', ref: 'Revelation 11:13, 19' },
      { book: 'Revelation', ref: 'Revelation 16:18–21' },
      { book: 'Isaiah', ref: 'Isaiah 2:19–21', note: 'hiding in caves from the terror of the LORD' },
      { book: 'Zechariah', ref: 'Zechariah 14:4–5', note: 'the mountain split; the earthquake in Uzziah’s day' }
    ],
    context: 'Revelation 6:15–17 lists seven classes of people — kings, magnates, generals, the rich, the powerful, slave and free — hiding together, which reverses every social distinction at once. The question they ask, "who is able to stand?", is answered in the following chapter by the sealing and the multitude.',
    symbols: ['caves and rocks', 'islands fleeing', 'hundredweight hailstones', 'the city split in three'],
    themes: ['judgement', 'creation'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'idealism', text: 'Reads the upheaval as the collapse of every false security before God, portrayed in seismic imagery.' },
      { framework: 'futurism', text: 'Reads literal seismic and meteorological catastrophe in the final period.' },
      { framework: 'preterism', text: 'Reads the imagery as prophetic idiom for the overthrow of the first-century order.' }
    ],
    related: ['seven-bowls', 'sun-darkened', 'babylon-falls'],
    enoch: [] },

  { id: 'elements-melt', stage: 'cosmos', order: 5, source: 'canonical',
    title: 'The elements dissolved with fire',
    summary: '2 Peter describes the present heavens and earth as reserved for fire, dissolved on the day of the Lord — and draws a moral rather than a predictive conclusion from it.',
    refs: [
      { book: '2 Peter', ref: '2 Peter 3:7, 10–13' },
      { book: 'Isaiah', ref: 'Isaiah 34:4' },
      { book: 'Psalms', ref: 'Psalm 102:25–27' },
      { book: 'Hebrews', ref: 'Hebrews 1:10–12' },
      { book: 'Malachi', ref: 'Malachi 4:1' }
    ],
    quote: { text: 'The day of the Lord will come as a thief in the night; in the which the heavens shall pass away with a great noise, and the elements shall melt with fervent heat.', ref: '2 Peter 3:10', translation: 'KJV' },
    context: 'The Greek word rendered "elements" (stoicheia) can mean the physical constituents of the world, the heavenly bodies, or elemental spiritual powers. The final verb in 3:10 is textually uncertain: important manuscripts read "will be found" rather than "will be burned up", which would make the day one of exposure rather than incineration. Verse 11 draws the conclusion: "what sort of people ought you to be?"',
    symbols: ['fervent heat', 'the dissolving elements', 'the earth laid bare'],
    themes: ['judgement', 'creation'],
    certainty: 'contested',
    interpretations: [
      { framework: 'futurism', text: 'Reads a literal destruction of the present cosmos, followed by the creation of a new one.' },
      { framework: 'amillennialism', text: 'Often reads a purging renewal rather than annihilation, connecting it with Romans 8:21, where creation is liberated rather than replaced.' },
      { framework: 'preterism', text: 'Reads the passage of "heaven and earth" as covenantal language for the end of the old order, on the analogy of Isaiah 51:15–16.' }
    ],
    related: ['new-heavens-new-earth', 'flood', 'day-as-thief', 'creation-set-free'],
    enoch: [ { ref: '1 Enoch 1:6–7; 102:1–3', relation: 'parallel',
      text: 'Enoch describes mountains melting like wax and the earth torn apart at the divine appearing. Fire and dissolution at the theophany are shared imagery across the tradition; 1 Enoch 1 is also the passage Jude quotes.' } ]
  }

  );
})(window.AD);
