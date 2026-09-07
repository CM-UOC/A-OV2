/* Stage VIII — Restoration, new creation, eternal kingdom */
(function (AD) {
  'use strict';
  AD.data.events.push(

  { id: 'marriage-supper', stage: 'restoration', order: 1, source: 'canonical',
    title: 'The marriage supper of the Lamb',
    summary: 'Before the city is described, a wedding is announced. The bride is clothed in fine linen, which the text glosses as the righteous deeds of the saints.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 19:6–9' },
      { book: 'Revelation', ref: 'Revelation 21:2, 9' },
      { book: 'Matthew', ref: 'Matthew 22:1–14' },
      { book: 'Matthew', ref: 'Matthew 25:1–13' },
      { book: 'Isaiah', ref: 'Isaiah 25:6', note: 'the feast of rich food for all peoples' },
      { book: 'Ephesians', ref: 'Ephesians 5:31–32' },
      { book: 'Hosea', ref: 'Hosea 2:19–20' }
    ],
    quote: { text: 'Blessed are they which are called unto the marriage supper of the Lamb.', ref: 'Revelation 19:9', translation: 'KJV' },
    context: 'Marriage is the prophets’ standing image for the covenant, used by Hosea, Isaiah, Jeremiah, and Ezekiel, often in the negative. Revelation ends the sequence positively and identifies the bride with the city itself (21:9–10), collapsing the two images into one.',
    symbols: ['the bride and her linen', 'the wedding invitation', 'the banquet'],
    themes: ['covenant', 'restoration', 'kingdom'],
    certainty: 'sequenced',
    interpretations: [
      { framework: 'futurism', text: 'Often placed as a distinct event in heaven during the tribulation, before the return in Revelation 19:11.' },
      { framework: 'amillennialism', text: 'Read as the consummation of the union between Christ and his people at the return, coinciding with the new creation.' },
      { framework: 'idealism', text: 'Read as the definitive image of restored relationship, deliberately placed just before the judgement scenes.' }
    ],
    related: ['new-jerusalem', 'rider-white-horse', 'nations-stream'],
    enoch: [] },

  { id: 'new-heavens-new-earth', stage: 'restoration', order: 2, source: 'canonical',
    title: 'New heavens and a new earth',
    summary: 'Isaiah announces a creation so complete that the former things are not remembered; 2 Peter and Revelation take up the phrase as the settled term for the outcome.',
    refs: [
      { book: 'Isaiah', ref: 'Isaiah 65:17–25' },
      { book: 'Isaiah', ref: 'Isaiah 66:22–23' },
      { book: '2 Peter', ref: '2 Peter 3:13' },
      { book: 'Revelation', ref: 'Revelation 21:1' },
      { book: 'Romans', ref: 'Romans 8:19–23' },
      { book: 'Matthew', ref: 'Matthew 19:28', note: 'the renewal of all things (palingenesia)' }
    ],
    quote: { text: 'For, behold, I create new heavens and a new earth: and the former shall not be remembered, nor come into mind.', ref: 'Isaiah 65:17', translation: 'KJV' },
    context: 'Isaiah 65:20 describes the new creation in terms that still include death in old age, which has generated two readings: that Isaiah pictures a renewed earthly society rather than a final state, or that the language is poetic hyperbole for longevity. Premillennial readers often take Isaiah 65:20 as evidence for an intermediate kingdom; others read the whole passage as figurative. The Greek word kainos in Revelation 21:1 means new in quality, which supports renewal over replacement, though it does not settle the question.',
    symbols: ['the former things forgotten', 'building and planting', 'the child and the elder'],
    themes: ['creation', 'restoration', 'kingdom'],
    certainty: 'contested',
    interpretations: [
      { framework: 'premillennialism', text: 'Isaiah 65:17–25 is read as describing the millennial kingdom, which explains the presence of death and ordinary labour within it.' },
      { framework: 'amillennialism', text: 'Read as the final state described in the idiom of restored ordinary life, with 65:20 as hyperbole for the absence of premature death.' },
      { framework: 'postmillennialism', text: 'Read as a condition substantially realised within history through the gospel’s advance, then consummated.' },
      { framework: 'preterism', text: 'Some preterists read "new heavens and new earth" as covenantal language for the new order inaugurated in the first century, comparing Isaiah 51:15–16.' }
    ],
    related: ['creation', 'elements-melt', 'wolf-and-lamb', 'no-more-sea'],
    enoch: [ { ref: '1 Enoch 45:4–5; 51:4–5; 91:16', relation: 'parallel',
      text: 'Enoch has heaven itself pass away and be renewed, the earth transformed and blessed, and the chosen made to dwell upon it. The expectation of a transformed rather than abandoned earth is shared with Isaiah 65 and Revelation 21; the Enochic formulation is independent.' } ]
  },

  { id: 'no-more-sea', stage: 'restoration', order: 3, source: 'canonical',
    title: 'And there was no more sea',
    summary: 'A single clause that means little as geography and a great deal as symbol: in the vision’s vocabulary, the sea is where chaos and the beast come from.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 21:1' },
      { book: 'Revelation', ref: 'Revelation 13:1', note: 'the beast rises from the sea' },
      { book: 'Genesis', ref: 'Genesis 1:2, 6–10' },
      { book: 'Daniel', ref: 'Daniel 7:2–3', note: 'the four beasts come up from the great sea' },
      { book: 'Isaiah', ref: 'Isaiah 57:20', note: 'the wicked like a troubled sea' },
      { book: 'Job', ref: 'Job 38:8–11', note: 'the sea given boundaries' }
    ],
    context: 'Throughout the biblical imagination the sea is the realm of disorder held in check by God, and in Revelation it is specifically where the beast originates. Reading 21:1 as the removal of a hostile symbol rather than of a body of water fits the book’s own usage; most commentators take it this way.',
    symbols: ['the chaos-waters', 'the beast from the sea', 'the bounded deep'],
    themes: ['creation', 'restoration'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'idealism', text: 'The removal of the sea signifies the removal of the source of chaos and of the beast, not a change of hydrology.' },
      { framework: 'futurism', text: 'Some readings take it literally as a feature of the renewed earth; most futurist commentators nonetheless read the clause symbolically.' }
    ],
    related: ['creation', 'beast-from-sea', 'distress-of-nations'],
    enoch: [] },

  { id: 'new-jerusalem', stage: 'restoration', order: 4, source: 'canonical',
    title: 'The city coming down out of heaven',
    summary: 'The holy city descends, prepared as a bride. Its measurements are a perfect cube, its gates never close, and it has no temple — because God and the Lamb are its temple.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 21:2–27' },
      { book: 'Ezekiel', ref: 'Ezekiel 40–48', note: 'the visionary temple and city' },
      { book: 'Isaiah', ref: 'Isaiah 54:11–12', note: 'foundations of precious stones' },
      { book: 'Isaiah', ref: 'Isaiah 60:1–3, 11, 19–20' },
      { book: '1 Kings', ref: '1 Kings 6:20', note: 'the holy of holies as a cube' },
      { book: 'Hebrews', ref: 'Hebrews 11:10, 16; 12:22' },
      { book: 'Galatians', ref: 'Galatians 4:26' }
    ],
    context: 'The city’s dimensions — length, breadth, and height equal — reproduce the shape of the holy of holies, which is why many commentators read the whole city as a sanctuary: the entire dwelling place has become the most holy place. It comes down; it is not ascended to. Its light source is the glory of God, which fulfils Isaiah 60:19–20 directly.',
    symbols: ['the cubic city', 'twelve gates and twelve foundations', 'gates never shut', 'no temple within'],
    themes: ['temple', 'restoration', 'kingdom', 'nations'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'idealism', text: 'The city is the people of God — identified as the bride in 21:9–10 — described architecturally; its measurements are theological rather than civic.' },
      { framework: 'futurism', text: 'Read as a real dwelling place on or above the new earth, with the measurements taken at face value.' },
      { framework: 'amillennialism', text: 'Read as the final state of the church with Christ, in which Ezekiel’s temple vision finds its answer in a city that needs no temple.' }
    ],
    related: ['garden-tree-life', 'abraham-promise', 'nations-stream', 'marriage-supper'],
    enoch: [ { ref: '1 Enoch 90:28–36', relation: 'parallel',
      text: 'In the Animal Apocalypse the old house is folded up and removed, and a new and greater house is set up, into which all the sheep and the beasts of the field are gathered. The pattern of a replaced sanctuary into which the nations are received parallels Revelation 21 without shared vocabulary.' } ]
  },

  { id: 'no-more-death', stage: 'restoration', order: 5, source: 'canonical',
    title: 'God dwells with them; no more death or tears',
    summary: 'The vision’s central announcement is not architectural but relational — the dwelling of God is with humanity — followed by four negations: no death, mourning, crying, or pain.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 21:3–4' },
      { book: 'Isaiah', ref: 'Isaiah 25:8' },
      { book: 'Ezekiel', ref: 'Ezekiel 37:26–28', note: 'my dwelling place shall be with them' },
      { book: 'Leviticus', ref: 'Leviticus 26:11–12', note: 'the covenant formula' },
      { book: '1 Corinthians', ref: '1 Corinthians 15:54' }
    ],
    quote: { text: 'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain.', ref: 'Revelation 21:4', translation: 'KJV' },
    context: 'The wording of 21:3 is the ancient covenant formula — "they shall be my people, and I will be their God" — used from Leviticus onward, now stated without qualification. The Greek word for "dwell" (skēnoō) recalls the tabernacle and is the same verb used in John 1:14 of the incarnation.',
    symbols: ['the tabernacle of God with humanity', 'tears wiped away', 'the former things passed away'],
    themes: ['restoration', 'covenant', 'resurrection'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'amillennialism', text: 'Read as the final state following the general resurrection and judgement.' },
      { framework: 'premillennialism', text: 'Read as the eternal state following the millennium and the great white throne.' },
      { framework: 'idealism', text: 'Emphasises that the promise is stated as presence rather than as place — the relational claim precedes every description of the city.' }
    ],
    related: ['isaiah-apocalypse', 'death-destroyed', 'god-all-in-all'],
    enoch: [] },

  { id: 'no-more-curse', stage: 'restoration', order: 6, source: 'canonical',
    title: 'No more curse',
    summary: 'The single clause that closes the arc opened in Genesis 3: the curse pronounced on the ground is lifted, and the servants of God see his face.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 22:3–5' },
      { book: 'Genesis', ref: 'Genesis 3:17–19' },
      { book: 'Zechariah', ref: 'Zechariah 14:11', note: 'no more utter destruction' },
      { book: 'Exodus', ref: 'Exodus 33:20', note: 'no one may see God’s face and live' },
      { book: 'Matthew', ref: 'Matthew 5:8' }
    ],
    context: 'Revelation 22:4 — "they shall see his face" — reverses the limit stated in Exodus 33:20, and the removal of the curse reverses Genesis 3:17. Together with the tree of life in 22:2 and the absence of the sea in 21:1, this makes the last two chapters a systematic answer to the first three.',
    symbols: ['the lifted curse', 'the face of God seen', 'the name on the forehead'],
    themes: ['restoration', 'creation'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'idealism', text: 'The reversal of the curse is the point of the entire book: the vision is structured as a return to and beyond the beginning.' },
      { framework: 'futurism', text: 'Read as the literal condition of the new earth after the final judgement.' }
    ],
    related: ['transgression', 'creation-set-free', 'river-tree-healing'],
    enoch: [] },

  { id: 'river-tree-healing', stage: 'restoration', order: 7, source: 'canonical',
    title: 'The river of life and the healing of the nations',
    summary: 'A river runs down the middle of the city street, with the tree of life on either side bearing twelve crops — and leaves for the healing of the nations.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 22:1–2' },
      { book: 'Ezekiel', ref: 'Ezekiel 47:1–12' },
      { book: 'Genesis', ref: 'Genesis 2:9–10' },
      { book: 'Zechariah', ref: 'Zechariah 14:8', note: 'living waters flowing from Jerusalem' },
      { book: 'Psalms', ref: 'Psalm 46:4', note: 'a river whose streams make glad the city of God' },
      { book: 'John', ref: 'John 7:37–39' }
    ],
    quote: { text: 'And the leaves of the tree were for the healing of the nations.', ref: 'Revelation 22:2', translation: 'KJV' },
    context: 'Ezekiel 47 supplies the model: water flowing from the sanctuary, deepening as it goes, with trees on both banks whose leaves are for healing. Revelation moves the source from the temple to the throne of God and of the Lamb, consistent with a city that has no temple. That the leaves heal the nations, in a scene after the final judgement, is a detail commentators discuss at length.',
    symbols: ['the river from the throne', 'twelve fruits', 'leaves for healing'],
    themes: ['restoration', 'nations', 'temple'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'futurism', text: 'Ezekiel 47 is read as describing a future temple in a millennial kingdom, with Revelation 22 describing the eternal state.' },
      { framework: 'idealism', text: 'Both passages are read as images of life proceeding from God’s presence into the whole world.' },
      { framework: 'amillennialism', text: 'Ezekiel’s temple vision is read as fulfilled in Christ and his people, with Revelation 22 as its consummation.' }
    ],
    related: ['garden-tree-life', 'new-jerusalem', 'no-more-curse'],
    enoch: [ { ref: '1 Enoch 25:4–6', relation: 'parallel',
      text: 'The fragrant tree is given to the righteous after the judgement, transplanted to the holy place, and its fruit gives long life. The pattern — a tree withheld, then granted at the end — is shared with Revelation 2:7 and 22:2.' } ]
  },

  { id: 'creation-set-free', stage: 'restoration', order: 8, source: 'canonical',
    title: 'Creation set free from its bondage',
    summary: 'Paul extends the hope beyond humanity: creation itself was subjected to futility, groans like a woman in labour, and waits for the revealing of the children of God.',
    refs: [
      { book: 'Romans', ref: 'Romans 8:18–25' },
      { book: 'Genesis', ref: 'Genesis 3:17–19' },
      { book: 'Isaiah', ref: 'Isaiah 55:12–13' },
      { book: 'Colossians', ref: 'Colossians 1:20' },
      { book: 'Acts', ref: 'Acts 3:21', note: 'the restoration of all things' }
    ],
    quote: { text: 'The creature itself also shall be delivered from the bondage of corruption into the glorious liberty of the children of God.', ref: 'Romans 8:21', translation: 'KJV' },
    context: 'Romans 8:19–22 is the clearest New Testament statement that redemption includes the non-human world. Paul uses the birth-pang image again, this time of creation. The passage is central to arguments that the biblical hope is for a renewed earth rather than an escape from it, and it has become important in theological work on ecology.',
    symbols: ['the groaning creation', 'futility and liberation', 'labour pains'],
    themes: ['creation', 'restoration', 'resurrection'],
    certainty: 'sequenced',
    interpretations: [
      { framework: 'amillennialism', text: 'Read together with 2 Peter 3:13 as renewal rather than annihilation of the present order.' },
      { framework: 'postmillennialism', text: 'Read as an outcome anticipated in part through the transformation of human society within history.' },
      { framework: 'futurism', text: 'Read as awaiting the return of Christ, after which the transformation occurs.' }
    ],
    related: ['transgression', 'elements-melt', 'new-heavens-new-earth'],
    enoch: [] },

  { id: 'nations-stream', stage: 'restoration', order: 9, source: 'canonical',
    title: 'The nations stream to the mountain',
    summary: 'Isaiah and Micah share a vision, nearly word for word: peoples going up to be taught, disputes arbitrated, and weapons remade into farm tools.',
    refs: [
      { book: 'Isaiah', ref: 'Isaiah 2:2–4' },
      { book: 'Micah', ref: 'Micah 4:1–4' },
      { book: 'Isaiah', ref: 'Isaiah 60:1–5' },
      { book: 'Zechariah', ref: 'Zechariah 8:20–23; 14:16' },
      { book: 'Revelation', ref: 'Revelation 21:24–26' },
      { book: 'Joel', ref: 'Joel 3:10', note: 'the image deliberately reversed' }
    ],
    quote: { text: 'And they shall beat their swords into plowshares, and their spears into pruninghooks: nation shall not lift up sword against nation, neither shall they learn war any more.', ref: 'Isaiah 2:4', translation: 'KJV' },
    context: 'The same oracle appears in two prophetic books, which is unusual and suggests a shared source. Micah adds a line Isaiah lacks: each under their own vine and fig tree, with no one to make them afraid — the social and economic counterpart to the disarmament. Joel 3:10 inverts the saying for a call to arms, showing the tradition was well enough known to be played against.',
    symbols: ['the exalted mountain', 'plowshares and pruning hooks', 'vine and fig tree'],
    themes: ['nations', 'restoration', 'kingdom'],
    certainty: 'contested',
    interpretations: [
      { framework: 'postmillennialism', text: 'Read as describing conditions attainable within history as the gospel’s influence spreads — a passage often cited in support of the position.' },
      { framework: 'premillennialism', text: 'Read as describing the millennial reign, with Jerusalem as its centre.' },
      { framework: 'amillennialism', text: 'Read as fulfilled in the gathering of the nations into the church now, and consummated in the new creation.' }
    ],
    related: ['wolf-and-lamb', 'new-jerusalem', 'gospel-to-nations', 'babel'],
    enoch: [] },

  { id: 'wolf-and-lamb', stage: 'restoration', order: 10, source: 'canonical',
    title: 'The wolf shall dwell with the lamb',
    summary: 'Predation ends and a child is safe among animals that were dangerous — the earth full of the knowledge of the LORD as the waters cover the sea.',
    refs: [
      { book: 'Isaiah', ref: 'Isaiah 11:6–9' },
      { book: 'Isaiah', ref: 'Isaiah 65:25' },
      { book: 'Hosea', ref: 'Hosea 2:18', note: 'a covenant with the animals' },
      { book: 'Ezekiel', ref: 'Ezekiel 34:25' },
      { book: 'Habakkuk', ref: 'Habakkuk 2:14', note: 'the same "as the waters cover the sea"' }
    ],
    quote: { text: 'The wolf also shall dwell with the lamb, and the leopard shall lie down with the kid.', ref: 'Isaiah 11:6', translation: 'KJV' },
    context: 'The passage follows directly from the description of the righteous ruler in Isaiah 11:1–5, which makes the peace a consequence of just rule rather than an independent state of nature. The stated reason is knowledge: "for the earth shall be full of the knowledge of the LORD".',
    symbols: ['wolf and lamb', 'the child and the asp', 'the holy mountain'],
    themes: ['restoration', 'creation', 'kingdom'],
    certainty: 'contested',
    interpretations: [
      { framework: 'premillennialism', text: 'Read as literal conditions during the millennial reign on earth.' },
      { framework: 'amillennialism', text: 'Read as poetic depiction of the peace of the new creation, and in part of reconciled human relations now.' },
      { framework: 'idealism', text: 'Read as an image of the reversal of predation and fear as such, without a fixed location in a sequence.' }
    ],
    related: ['davidic-throne', 'new-heavens-new-earth', 'nations-stream'],
    enoch: [] },

  { id: 'kingdom-to-saints', stage: 'restoration', order: 11, source: 'canonical',
    title: 'The kingdom given to the holy ones',
    summary: 'Daniel’s vision ends not with a ruler alone but with a people: the kingdom under the whole heaven is given to the holy ones of the Most High, and it is everlasting.',
    refs: [
      { book: 'Daniel', ref: 'Daniel 7:18, 22, 27' },
      { book: 'Revelation', ref: 'Revelation 22:5' },
      { book: 'Matthew', ref: 'Matthew 5:5' },
      { book: '2 Timothy', ref: '2 Timothy 2:12' },
      { book: 'Luke', ref: 'Luke 12:32' },
      { book: 'Revelation', ref: 'Revelation 5:10' }
    ],
    context: 'Daniel 7 gives the dominion twice: to the one like a son of man (7:14) and to the holy ones (7:27). Most interpreters read these as two aspects of one grant rather than two separate kingdoms. Revelation ends the same way, with the servants of God reigning for ever.',
    symbols: ['the everlasting dominion', 'reigning for ever', 'the inherited earth'],
    themes: ['kingdom', 'restoration'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'amillennialism', text: 'Read as the present and future reign of God’s people with Christ, culminating in the new creation.' },
      { framework: 'premillennialism', text: 'Read as realised visibly in the millennial reign and continued eternally.' },
      { framework: 'postmillennialism', text: 'Read as progressively realised in history before its final form.' }
    ],
    related: ['son-of-man-daniel', 'first-resurrection', 'god-all-in-all'],
    enoch: [ { ref: '1 Enoch 108:11–15', relation: 'parallel',
      text: 'The closing chapter promises that the righteous, who loved God and did not love gold or silver, will be brought into shining light and seated on thrones of honour. The transfer of rule to the vindicated righteous is a shared expectation with Daniel 7:27.' } ]
  },

  { id: 'god-all-in-all', stage: 'restoration', order: 12, source: 'canonical',
    title: 'That God may be all in all',
    summary: 'Paul’s last word on the sequence, and the site’s: not a new administration but an unmediated presence — the point at which the story stops being about events.',
    refs: [
      { book: '1 Corinthians', ref: '1 Corinthians 15:28' },
      { book: 'Revelation', ref: 'Revelation 21:3, 22–23' },
      { book: 'Ezekiel', ref: 'Ezekiel 37:27' },
      { book: 'Zechariah', ref: 'Zechariah 14:9', note: 'the LORD shall be one, and his name one' },
      { book: 'Habakkuk', ref: 'Habakkuk 2:14' }
    ],
    quote: { text: 'And when all things shall be subdued unto him, then shall the Son also himself be subject unto him that put all things under him, that God may be all in all.', ref: '1 Corinthians 15:28', translation: 'KJV' },
    context: 'The phrase panta en pasin — "all in all" — has been read as the goal of the whole biblical narrative. Its interpretation has varied: as the removal of every mediating structure, as the universal acknowledgement of God, and in some traditions as the ground for hope of a wider restoration. The verse’s subordination language was extensively discussed in the fourth-century trinitarian debates.',
    symbols: ['all things subjected', 'God all in all', 'one LORD, one name'],
    themes: ['kingdom', 'restoration', 'creation'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'amillennialism', text: 'Read as the state following the general resurrection and judgement, described in Revelation 21–22.' },
      { framework: 'premillennialism', text: 'Read as following the millennium and the final judgement.' },
      { framework: 'patristic', text: 'The verse was central to fourth-century debates over the relation of the Son to the Father; the reading adopted at Nicaea and after understands the subjection as the Son’s mediatorial role reaching its goal, not a difference of nature.' }
    ],
    related: ['death-destroyed', 'no-more-death', 'new-jerusalem'],
    enoch: [] }

  );
})(window.AD);
