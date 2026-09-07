/* Stage I — Earlier prophetic foundations */
(function (AD) {
  'use strict';
  AD.data.events.push(

  { id: 'day-of-lord', stage: 'foundations', order: 1, source: 'canonical',
    title: 'The Day of the LORD is announced',
    summary: 'The prophets take a phrase their audience expected to mean vindication and turn it against them: the Day is darkness before it is light, and it falls first on the covenant people.',
    refs: [
      { book: 'Amos', ref: 'Amos 5:18–20' },
      { book: 'Isaiah', ref: 'Isaiah 2:12–21' },
      { book: 'Isaiah', ref: 'Isaiah 13:6–13', note: 'oracle against Babylon' },
      { book: 'Joel', ref: 'Joel 1:15; 2:1–2, 11' },
      { book: 'Obadiah', ref: 'Obadiah 15' },
      { book: 'Zephaniah', ref: 'Zephaniah 1:14–18' },
      { book: 'Malachi', ref: 'Malachi 4:1', note: 'Malachi 3:19 in Hebrew numbering' }
    ],
    quote: { text: 'Woe unto you that desire the day of the LORD! … the day of the LORD is darkness, and not light.', ref: 'Amos 5:18, 20', translation: 'KJV, abridged' },
    context: 'Amos, in the eighth century BCE, is the earliest datable use of the phrase, and he uses it to reverse a popular expectation. Later prophets apply "the Day" to specific historical judgements — on Babylon (Isaiah 13), Edom (Isaiah 34), Judah (Zephaniah 1) — using cosmic language for each. The New Testament then takes the phrase up as "the day of the Lord" for the return of Christ (1 Thessalonians 5:2; 2 Peter 3:10).',
    symbols: ['darkness at noon', 'the warrior LORD', 'trumpet and alarm'],
    themes: ['day-of-lord', 'judgement'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'preterism', text: 'Emphasises that the prophets themselves applied Day-of-the-LORD language to datable political catastrophes, and reads the New Testament’s use the same way for AD 70.' },
      { framework: 'futurism', text: 'Treats the historical judgements as partial instances of a single final Day still to come, with the fullest descriptions reserved for that event.' },
      { framework: 'idealism', text: 'Reads the Day as a recurring pattern of divine confrontation with evil, brought to a climax at the end but never confined to one date.' }
    ],
    related: ['sun-darkened', 'day-as-thief', 'elements-melt'],
    enoch: [ { ref: '1 Enoch 1:3–9', relation: 'quotation',
      text: 'The opening theophany — God coming forth with ten thousand holy ones to execute judgement — is quoted almost verbatim in Jude 14–15. It is the clearest case in the New Testament of direct dependence on 1 Enoch.' } ]
  },

  { id: 'davidic-throne', stage: 'foundations', order: 2, source: 'canonical',
    title: 'An everlasting throne promised to David',
    summary: 'A dynasty is promised permanence. When the dynasty falls, the promise is not withdrawn but projected forward onto a coming son of David.',
    refs: [
      { book: '2 Samuel', ref: '2 Samuel 7:12–16' },
      { book: 'Psalms', ref: 'Psalm 89:3–4, 28–37' },
      { book: 'Isaiah', ref: 'Isaiah 9:6–7' },
      { book: 'Isaiah', ref: 'Isaiah 11:1–10' },
      { book: 'Jeremiah', ref: 'Jeremiah 23:5–6' },
      { book: 'Jeremiah', ref: 'Jeremiah 33:14–17' },
      { book: 'Ezekiel', ref: 'Ezekiel 34:23–24; 37:24–25' },
      { book: 'Luke', ref: 'Luke 1:32–33' }
    ],
    quote: { text: 'Of the increase of his government and peace there shall be no end, upon the throne of David, and upon his kingdom, to order it, and to establish it with judgment and with justice from henceforth even for ever.', ref: 'Isaiah 9:7', translation: 'KJV' },
    context: 'The Davidic oracle of 2 Samuel 7 is the seed of messianic expectation. After 586 BCE the throne is empty, and Psalm 89 registers the resulting crisis openly (89:38–45). Isaiah 11 adds the images that later eschatology reuses constantly: a shoot from a felled stump, a ruler who judges by righteousness rather than appearance, and a pacified creation.',
    symbols: ['the shoot from Jesse’s stump', 'the branch', 'the shepherd-king', 'the rod of his mouth'],
    themes: ['messiah', 'covenant', 'kingdom'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'premillennialism', text: 'Isaiah 11:6–9 is read as describing conditions in a future earthly reign of Christ, whether the millennium (premillennial) or the new earth.' },
      { framework: 'amillennialism', text: 'The throne is understood as occupied now, in heaven, since the resurrection and ascension (Acts 2:30–36), with Isaiah 11 describing the consummated new creation.' },
      { framework: 'jewish', text: 'In Jewish tradition the Davidic messiah remains awaited; the messianic age is characterised by ingathering, rebuilt temple, and universal peace, and its arrival is not identified with any past figure.' }
    ],
    related: ['son-of-man-daniel', 'rider-white-horse', 'wolf-and-lamb'],
    enoch: []
  },

  { id: 'suffering-servant', stage: 'foundations', order: 3, source: 'canonical',
    title: 'The servant who is wounded for others',
    summary: 'A figure who suffers, is rejected, dies among the wicked, and is afterwards vindicated and given a portion with the great.',
    refs: [
      { book: 'Isaiah', ref: 'Isaiah 52:13–53:12' },
      { book: 'Isaiah', ref: 'Isaiah 42:1–9; 49:1–7; 50:4–9', note: 'the other servant songs' },
      { book: 'Acts', ref: 'Acts 8:32–35' },
      { book: '1 Peter', ref: '1 Peter 2:22–25' }
    ],
    context: 'The four "servant songs" of Isaiah 40–55 come from the exilic period. Within Isaiah, the servant is identified with Israel in several places (41:8; 49:3) while elsewhere having a mission to Israel (49:5–6) — a tension that has generated two long-standing readings, corporate and individual. Christian interpretation from the New Testament onward applies Isaiah 53 to Jesus; Jewish interpretation has more often read the servant as the people of Israel.',
    symbols: ['the lamb led to slaughter', 'the man of sorrows', 'the arm of the LORD'],
    themes: ['messiah', 'suffering'],
    certainty: 'sequenced',
    interpretations: [
      { framework: 'criticism', text: 'Debate continues over whether the songs originally described an individual prophet, the exilic community, or an idealised figure; the corporate reading is well attested within the book itself.' },
      { framework: 'jewish', text: 'A major strand of Jewish interpretation identifies the servant with Israel suffering among the nations, a reading found in medieval commentators such as Rashi.' },
      { framework: 'futurism', text: 'Christian frameworks generally agree that Isaiah 53 is fulfilled in the crucifixion; they differ chiefly over what remains outstanding in Isaiah 54–66.' }
    ],
    related: ['davidic-throne', 'pierced-one'],
    enoch: [] },

  { id: 'new-covenant', stage: 'foundations', order: 4, source: 'canonical',
    title: 'A covenant written on the heart',
    summary: 'Jeremiah and Ezekiel promise an inward transformation — law written internally, a new heart, God’s own Spirit given — as the basis of a restored relationship.',
    refs: [
      { book: 'Jeremiah', ref: 'Jeremiah 31:31–34' },
      { book: 'Ezekiel', ref: 'Ezekiel 36:24–28' },
      { book: 'Ezekiel', ref: 'Ezekiel 11:19–20' },
      { book: 'Luke', ref: 'Luke 22:20' },
      { book: '2 Corinthians', ref: '2 Corinthians 3:3–6' },
      { book: 'Hebrews', ref: 'Hebrews 8:8–12; 10:16–17' }
    ],
    quote: { text: 'I will put my law in their inward parts, and write it in their hearts; and will be their God, and they shall be my people.', ref: 'Jeremiah 31:33', translation: 'KJV' },
    context: 'Written around the fall of Jerusalem, these promises answer the failure of the Sinai covenant with an act of divine renewal rather than a renewed demand. Hebrews quotes Jeremiah 31 at length — the longest Old Testament quotation in the New Testament — to argue that the new covenant is already inaugurated.',
    symbols: ['heart of flesh for heart of stone', 'clean water sprinkled', 'the indwelling Spirit'],
    themes: ['covenant', 'restoration'],
    certainty: 'sequenced',
    interpretations: [
      { framework: 'amillennialism', text: 'The new covenant is inaugurated at the cross and Pentecost and is being realised now in the church, awaiting consummation.' },
      { framework: 'futurism', text: 'Classic dispensational readings distinguished a future national application to Israel from the present church-age benefits; later revisions of the system moderate this distinction.' },
      { framework: 'postmillennialism', text: 'The promise that "all shall know me" is read as pointing to a future era of widespread, genuine faith within history.' }
    ],
    related: ['joel-spirit', 'all-israel-saved', 'dry-bones'],
    enoch: [] },

  { id: 'dry-bones', stage: 'foundations', order: 5, source: 'canonical',
    title: 'The valley of dry bones',
    summary: 'A field of bones is reassembled and given breath. Ezekiel states the meaning himself: this is the restoration of a people who believe they are finished.',
    refs: [
      { book: 'Ezekiel', ref: 'Ezekiel 37:1–14' },
      { book: 'Ezekiel', ref: 'Ezekiel 37:15–28', note: 'two sticks made one; David as prince' },
      { book: 'Isaiah', ref: 'Isaiah 26:19' },
      { book: 'Daniel', ref: 'Daniel 12:2' }
    ],
    quote: { text: 'Behold, O my people, I will open your graves, and cause you to come up out of your graves, and bring you into the land of Israel.', ref: 'Ezekiel 37:12', translation: 'KJV' },
    context: 'Ezekiel 37:11 gives the vision its own interpretation: "these bones are the whole house of Israel". The primary sense is national restoration from exile, expressed through resurrection imagery. Whether the imagery also implies belief in individual resurrection is debated; Isaiah 26:19 and Daniel 12:2 are the passages where that belief becomes explicit.',
    symbols: ['bones and sinews', 'the four winds', 'opened graves'],
    themes: ['resurrection', 'restoration'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'criticism', text: 'Read as a metaphor for return from exile; the emergence of an explicit doctrine of bodily resurrection in Israel is usually located later, in Daniel 12 and Second Temple literature.' },
      { framework: 'futurism', text: 'Frequently read as a two-stage national restoration of Israel — regathering, then spiritual renewal — with Ezekiel 38–39 following.' },
      { framework: 'amillennialism', text: 'Read as fulfilled in the restoration of God’s people culminating in Christ, with the general resurrection as its final expression.' }
    ],
    related: ['daniel-resurrection', 'gog-magog', 'general-resurrection'],
    enoch: [] },

  { id: 'four-kingdoms', stage: 'foundations', order: 6, source: 'canonical',
    title: 'Four kingdoms and a stone cut without hands',
    summary: 'A statue of four metals is shattered by a stone that becomes a mountain filling the earth — a kingdom that outlasts every empire.',
    refs: [
      { book: 'Daniel', ref: 'Daniel 2:31–45' },
      { book: 'Daniel', ref: 'Daniel 7:1–8, 17', note: 'the same schema as four beasts' },
      { book: 'Daniel', ref: 'Daniel 8:20–22', note: 'Media-Persia and Greece named' }
    ],
    quote: { text: 'And in the days of these kings shall the God of heaven set up a kingdom, which shall never be destroyed.', ref: 'Daniel 2:44', translation: 'KJV' },
    context: 'The four-kingdom schema was a known way of periodising history in the Hellenistic Near East. Daniel 8:20–22 identifies two of the kingdoms explicitly as Media-Persia and Greece. The identification of the fourth is the fault line: critical scholarship and many historic interpreters read Babylon–Media–Persia–Greece, with the visions oriented to the persecution under Antiochus IV (167–164 BCE); a long traditional reading takes Babylon–Media/Persia–Greece–Rome.',
    symbols: ['head of gold', 'feet of iron and clay', 'the uncut stone', 'the mountain filling the earth'],
    themes: ['kingdom', 'nations'],
    certainty: 'contested',
    interpretations: [
      { framework: 'criticism', text: 'Dates the visions to the Maccabean crisis and reads the fourth kingdom as the Greek successor states, treating the detailed history in Daniel 11 as written after the events it describes (vaticinium ex eventu) up to 11:39.' },
      { framework: 'historicism', text: 'Reads the fourth kingdom as Rome and the divided feet as the states of Europe, with the stone-kingdom growing through history.' },
      { framework: 'futurism', text: 'Reads the fourth kingdom as Rome with a future revived form, and the stone as the return of Christ ending Gentile rule.' },
      { framework: 'preterism', text: 'Reads the stone-kingdom as established at the first coming of Christ, striking the fourth kingdom in the first century.' }
    ],
    related: ['son-of-man-daniel', 'little-horn', 'beast-from-sea'],
    enoch: [ { ref: '1 Enoch 85–90', relation: 'parallel',
      text: 'The Animal Apocalypse periodises the same history through a sequence of animals and seventy shepherds, ending in judgement and a new house. Both texts periodise history and end with divine intervention, but the schemes are independent.' } ]
  },

  { id: 'son-of-man-daniel', stage: 'foundations', order: 7, source: 'canonical',
    title: 'One like a son of man before the Ancient of Days',
    summary: 'After the beasts, a human figure comes with the clouds to the throne and receives dominion that will not pass away. This is the single most quoted image in New Testament eschatology.',
    refs: [
      { book: 'Daniel', ref: 'Daniel 7:9–14' },
      { book: 'Daniel', ref: 'Daniel 7:18, 22, 27', note: 'the kingdom given to the saints of the Most High' },
      { book: 'Matthew', ref: 'Matthew 24:30; 26:64' },
      { book: 'Mark', ref: 'Mark 13:26; 14:62' },
      { book: 'Revelation', ref: 'Revelation 1:7, 13; 14:14' }
    ],
    quote: { text: 'I saw in the night visions, and, behold, one like the Son of man came with the clouds of heaven, and came to the Ancient of days … and there was given him dominion, and glory, and a kingdom.', ref: 'Daniel 7:13–14', translation: 'KJV, abridged' },
    context: 'The figure is described by comparison — "one like a son of man", i.e. one in human form, over against the beasts that came up from the sea. In Daniel 7:18 and 27 the kingdom is given to "the saints of the Most High", which has led many interpreters to read the figure corporately or as Israel’s heavenly representative. In the Gospels, Jesus uses "the Son of Man" as his characteristic self-designation and cites Daniel 7:13 at his trial.',
    symbols: ['the clouds of heaven', 'thrones set', 'the fiery stream', 'books opened'],
    themes: ['messiah', 'judgement', 'kingdom'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'criticism', text: 'Debate continues over whether the figure is an angelic being (often identified with Michael, cf. Daniel 12:1), a symbol of the faithful community, or a messianic individual. The Book of Parables and the Gospels both take an individual reading, independently or otherwise.' },
      { framework: 'preterism', text: 'Reads the coming "with the clouds" as movement toward the throne — an enthronement, not a descent to earth — and applies Gospel uses of it to Christ’s vindication and the judgement on Jerusalem in AD 70.' },
      { framework: 'futurism', text: 'Reads the Gospel citations as describing the visible return of Christ to earth, with Daniel 7 supplying the scene of his investiture.' }
    ],
    related: ['son-of-man-comes', 'enoch-son-of-man', 'great-white-throne'],
    enoch: [ { ref: '1 Enoch 46:1–6; 48:2–10; 62:1–16; 69:26–29', relation: 'parallel',
      text: 'The Book of Parables develops a "Son of Man" who is pre-existent, named before creation, seated on the throne of glory, and judges the kings and the mighty. This is the closest pre-Christian analogue to the Gospels’ usage. Its date is debated — most specialists now place it in the late first century BCE or the first century CE — so the direction of any influence cannot be assumed.' } ]
  },

  { id: 'seventy-weeks', stage: 'foundations', order: 8, source: 'canonical',
    title: 'The seventy weeks',
    summary: 'Daniel prays about Jeremiah’s seventy years and is answered with seventy weeks — a period ending in atonement, an anointed one cut off, and a desolating abomination.',
    refs: [
      { book: 'Daniel', ref: 'Daniel 9:24–27' },
      { book: 'Jeremiah', ref: 'Jeremiah 25:11–12; 29:10', note: 'the seventy years' },
      { book: 'Matthew', ref: 'Matthew 24:15' },
      { book: 'Mark', ref: 'Mark 13:14' }
    ],
    context: 'Seventy weeks — literally "seventy sevens" — is the most disputed chronological text in the Bible. The disputes are technical: which decree starts the count (Daniel 9:25 is grammatically ambiguous and the versification differs between traditions), whether the "weeks" are years, who the two anointed figures are, and whether the final week follows immediately or is separated from the sixty-nine. This site does not adjudicate the calculation and does not use it to date anything.',
    symbols: ['seventy sevens', 'the anointed one cut off', 'the covenant of one week'],
    themes: ['messiah', 'temple', 'imminence'],
    certainty: 'contested',
    interpretations: [
      { framework: 'criticism', text: 'Reads the sequence as ending with Antiochus IV: the anointed one cut off is the murdered high priest Onias III (171 BCE) and the desolation is the altar set up in the temple in 167 BCE.' },
      { framework: 'preterism', text: 'Reads the seventieth week as running through the ministry and death of Jesus, with the desolation fulfilled in the Roman destruction of the temple in AD 70.' },
      { framework: 'futurism', text: 'Reads a gap between the sixty-ninth and seventieth weeks, placing the final seven-year period in the future — the framework from which the modern seven-year tribulation scheme derives.' },
      { framework: 'historicism', text: 'Applies the year-day principle to the weeks and reads them as spanning from a Persian decree to the first century, with the wider prophetic periods extending through church history.' }
    ],
    related: ['abomination-desolation', 'man-of-lawlessness', 'jerusalem-destroyed'],
    enoch: [ { ref: '1 Enoch 93:1–10; 91:11–17', relation: 'parallel',
      text: 'The Apocalypse of Weeks divides all history into ten "weeks", with the writer’s own time in the seventh and judgement following. Periodising history into sevens is a shared Second Temple habit; the two schemes count different things and neither depends on the other.' } ]
  },

  { id: 'daniel-resurrection', stage: 'foundations', order: 9, source: 'canonical',
    title: 'Many who sleep in the dust shall awake',
    summary: 'The clearest statement of a two-outcome resurrection in the Hebrew Bible, set after a time of unequalled distress and the deliverance of those written in the book.',
    refs: [
      { book: 'Daniel', ref: 'Daniel 12:1–4' },
      { book: 'Daniel', ref: 'Daniel 12:13' },
      { book: 'Isaiah', ref: 'Isaiah 26:19' },
      { book: 'John', ref: 'John 5:28–29' },
      { book: 'Matthew', ref: 'Matthew 13:43', note: 'the righteous shine, cf. Daniel 12:3' }
    ],
    quote: { text: 'And many of them that sleep in the dust of the earth shall awake, some to everlasting life, and some to shame and everlasting contempt.', ref: 'Daniel 12:2', translation: 'KJV' },
    context: 'Daniel 12 links four things that later apocalyptic keeps together: unprecedented distress, the deliverance of a named remnant, resurrection to two destinies, and the shining of the wise. John 5:28–29 reproduces the two-outcome structure almost exactly. Whether "many" means "all" or a subset is discussed by commentators; Hebrew rabbîm can carry an inclusive sense.',
    symbols: ['sleep and awakening', 'the book of names', 'shining like the firmament'],
    themes: ['resurrection', 'judgement', 'suffering'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'criticism', text: 'Widely regarded as the latest and clearest resurrection text in the Hebrew Bible, arising from the crisis of the 160s BCE, in which faithful Jews were dying precisely because of their faithfulness.' },
      { framework: 'amillennialism', text: 'Read with John 5:28–29 as a single general resurrection of the righteous and unrighteous at the return of Christ.' },
      { framework: 'premillennialism', text: 'Read as the resurrection of the righteous at Christ’s return, with the resurrection of the rest after the millennium (Revelation 20:5).' }
    ],
    related: ['great-tribulation', 'general-resurrection', 'great-white-throne'],
    enoch: [ { ref: '1 Enoch 51:1–5; 61:5; 104:2', relation: 'parallel',
      text: 'Enoch has the earth and Sheol "give back" what they have received, and promises the righteous that they will shine like the lights of heaven — very close in wording to Daniel 12:3. The relationship between the two texts is debated; shared idiom is the safest description.' } ]
  },

  { id: 'isaiah-apocalypse', stage: 'foundations', order: 10, source: 'canonical',
    title: 'Isaiah’s "little apocalypse"',
    summary: 'Four chapters in which the whole earth is emptied and judged, a feast is set on the mountain for all peoples, death is swallowed up, and the dead are promised life.',
    refs: [
      { book: 'Isaiah', ref: 'Isaiah 24:1–23' },
      { book: 'Isaiah', ref: 'Isaiah 25:6–8' },
      { book: 'Isaiah', ref: 'Isaiah 26:19–21' },
      { book: 'Isaiah', ref: 'Isaiah 27:1', note: 'Leviathan the fleeing serpent' },
      { book: '1 Corinthians', ref: '1 Corinthians 15:54', note: 'quotes Isaiah 25:8' },
      { book: 'Revelation', ref: 'Revelation 21:4', note: 'echoes Isaiah 25:8' }
    ],
    quote: { text: 'He will swallow up death in victory; and the Lord GOD will wipe away tears from off all faces.', ref: 'Isaiah 25:8', translation: 'KJV' },
    context: 'Isaiah 24–27 is often called a proto-apocalypse: judgement is universal rather than aimed at a named nation, the host of heaven is punished alongside the kings of the earth (24:21–22), and death itself is treated as an enemy to be destroyed. Its date is disputed, with most critical scholars placing it later than the eighth-century core of Isaiah.',
    symbols: ['the emptied earth', 'the banquet on the mountain', 'Leviathan', 'prisoners in the pit'],
    themes: ['judgement', 'resurrection', 'restoration', 'watchers'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'idealism', text: 'Read as a poetic vision of God’s final dealing with evil, not a sequence; the imagery is deliberately unlocated in time and place.' },
      { framework: 'futurism', text: 'Read as describing the tribulation and the kingdom that follows, with 24:21–22 taken as the imprisonment of spiritual powers.' },
      { framework: 'amillennialism', text: 'Isaiah 25:8 is read as fulfilled at the resurrection, following Paul’s own citation in 1 Corinthians 15:54.' }
    ],
    related: ['death-destroyed', 'no-more-death', 'judgement-of-angels'],
    enoch: [ { ref: '1 Enoch 10:11–14; 18:11–16; 21:1–6', relation: 'parallel',
      text: 'Isaiah 24:21–22 — the host of heaven shut in prison and visited after many days — is the biblical text closest to the Enochic account of imprisoned spiritual beings awaiting judgement.' } ]
  },

  { id: 'gog-magog', stage: 'foundations', order: 11, source: 'canonical',
    title: 'Gog of the land of Magog',
    summary: 'A northern coalition attacks a restored and unwalled people and is destroyed by direct divine action — an invasion narrative Revelation reuses at the far end of its timeline.',
    refs: [
      { book: 'Ezekiel', ref: 'Ezekiel 38:1–23' },
      { book: 'Ezekiel', ref: 'Ezekiel 39:1–29' },
      { book: 'Revelation', ref: 'Revelation 20:7–10' },
      { book: 'Revelation', ref: 'Revelation 19:17–18', note: 'the birds summoned, cf. Ezekiel 39:17–20' }
    ],
    context: 'Gog is not a nation but a figure "of the land of Magog", leading peoples named from the edges of Ezekiel’s known world. The oracle is placed after the restoration chapters and before the temple vision of Ezekiel 40–48. Revelation 20:8 uses "Gog and Magog" as a pair of names for the nations gathered after the thousand years, which is a use of the motif rather than a claim about the same event.',
    symbols: ['the far north', 'hooks in the jaws', 'the sacrificial feast of birds', 'seven months of burial'],
    themes: ['nations', 'judgement', 'restoration'],
    certainty: 'contested',
    interpretations: [
      { framework: 'futurism', text: 'Commonly read as a distinct future invasion of a regathered Israel; interpreters differ over whether it precedes the tribulation, opens it, or belongs to the end of the millennium. Attempts to identify the named peoples with modern states are contested and are not endorsed here.' },
      { framework: 'amillennialism', text: 'Read as the same reality Revelation 20:8 describes: a final, symbolic massing of hostility against God’s people, defeated without a battle.' },
      { framework: 'criticism', text: 'Read as a late addition to Ezekiel addressing the question of security after the return, using deliberately archaic and mythic geography rather than contemporary politics.' }
    ],
    related: ['satan-released', 'armageddon', 'dry-bones'],
    enoch: [] },

  { id: 'joel-spirit', stage: 'foundations', order: 12, source: 'canonical',
    title: 'The Spirit poured out, and signs above',
    summary: 'Joel promises prophecy distributed across every class and age, framed by wonders in heaven and earth before the great and terrible Day — the text Peter cites at Pentecost.',
    refs: [
      { book: 'Joel', ref: 'Joel 2:28–32', note: 'Joel 3:1–5 in Hebrew numbering' },
      { book: 'Joel', ref: 'Joel 3:1–16' },
      { book: 'Acts', ref: 'Acts 2:16–21' },
      { book: 'Romans', ref: 'Romans 10:13', note: 'quotes Joel 2:32' },
      { book: 'Revelation', ref: 'Revelation 6:12', note: 'sun black, moon as blood' }
    ],
    quote: { text: 'And it shall come to pass afterward, that I will pour out my spirit upon all flesh; and your sons and your daughters shall prophesy.', ref: 'Joel 2:28', translation: 'KJV' },
    context: 'Peter’s citation in Acts 2 is decisive for New Testament eschatology: he says "this is that", identifying the outpouring with an event in his own day, and he retains the cosmic signs in the quotation. This is the strongest evidence that the New Testament regards the last days as already begun — the "already and not yet" structure that runs through the rest of this site.',
    symbols: ['poured-out Spirit', 'blood, fire, pillars of smoke', 'the darkened sun'],
    themes: ['day-of-lord', 'imminence', 'restoration'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'preterism', text: 'Takes Peter at his word and reads the whole citation, cosmic signs included, as fulfilled in the events of the first century, with the sign-language understood figuratively.' },
      { framework: 'futurism', text: 'Reads Pentecost as an initial or partial fulfilment, with the cosmic signs reserved for the period immediately before the return of Christ.' },
      { framework: 'amillennialism', text: 'Reads the passage as inaugurated at Pentecost and consummated at the end, with the "last days" spanning the entire period between.' }
    ],
    related: ['sun-darkened', 'new-covenant', 'gospel-to-nations'],
    enoch: [] },

  { id: 'pierced-one', stage: 'foundations', order: 13, source: 'canonical',
    title: 'They shall look on the one they pierced',
    summary: 'Zechariah’s closing chapters bring together a besieged Jerusalem, a struck shepherd, a pierced figure mourned by the city, a cleansing fountain, and the LORD standing on the Mount of Olives.',
    refs: [
      { book: 'Zechariah', ref: 'Zechariah 12:10' },
      { book: 'Zechariah', ref: 'Zechariah 13:1, 7–9' },
      { book: 'Zechariah', ref: 'Zechariah 14:1–9' },
      { book: 'Zechariah', ref: 'Zechariah 14:16–19', note: 'the nations keep the Feast of Booths' },
      { book: 'John', ref: 'John 19:37' },
      { book: 'Matthew', ref: 'Matthew 24:30' },
      { book: 'Revelation', ref: 'Revelation 1:7' }
    ],
    quote: { text: 'And his feet shall stand in that day upon the mount of Olives, which is before Jerusalem on the east.', ref: 'Zechariah 14:4', translation: 'KJV' },
    context: 'Zechariah 9–14 is usually treated as a distinct collection from chapters 1–8 and is among the most heavily quoted prophetic material in the passion narratives. Revelation 1:7 fuses Zechariah 12:10 with Daniel 7:13 in a single sentence — a good example of how the New Testament combines sources rather than citing them singly.',
    symbols: ['the pierced one', 'the struck shepherd', 'the split mountain', 'living waters flowing east and west'],
    themes: ['messiah', 'day-of-lord', 'nations', 'temple'],
    certainty: 'contested',
    interpretations: [
      { framework: 'futurism', text: 'Reads Zechariah 14 as a literal future descent to the Mount of Olives, a topographical change, and an ongoing kingdom in which nations come to Jerusalem.' },
      { framework: 'preterism', text: 'Reads the mourning of Zechariah 12:10 as fulfilled in the first century, and the descriptions in chapter 14 as prophetic idiom for that decisive intervention.' },
      { framework: 'idealism', text: 'Reads the geography symbolically: the mountain split and living water flowing outward are images of deliverance and of life reaching the whole world.' }
    ],
    related: ['son-of-man-comes', 'every-eye-sees', 'nations-stream'],
    enoch: [] },

  { id: 'malachi-messenger', stage: 'foundations', order: 14, source: 'canonical',
    title: 'The messenger, the refiner’s fire, and Elijah',
    summary: 'The Hebrew Bible’s final page promises a messenger to prepare the way, a purifying judgement beginning at the temple, and the return of Elijah before the Day.',
    refs: [
      { book: 'Malachi', ref: 'Malachi 3:1–5' },
      { book: 'Malachi', ref: 'Malachi 4:1–6', note: 'Malachi 3:19–24 in Hebrew numbering' },
      { book: 'Matthew', ref: 'Matthew 11:13–14; 17:10–13' },
      { book: 'Mark', ref: 'Mark 9:11–13' },
      { book: 'Luke', ref: 'Luke 1:16–17' },
      { book: 'Revelation', ref: 'Revelation 11:5–6', note: 'witnesses with Elijah-like powers' }
    ],
    quote: { text: 'Behold, I will send you Elijah the prophet before the coming of the great and dreadful day of the LORD.', ref: 'Malachi 4:5', translation: 'KJV' },
    context: 'In the Christian ordering of the Old Testament, Malachi’s Elijah promise is the last word before the Gospels — an arrangement that shapes how the New Testament opening reads. In the Hebrew ordering, Malachi is not last. The Gospels apply the promise to John the Baptist, while noting that John himself denied being Elijah (John 1:21), a tension the texts leave standing.',
    symbols: ['refiner’s fire and fuller’s soap', 'the sun of righteousness', 'hearts turned'],
    themes: ['messiah', 'day-of-lord', 'imminence'],
    certainty: 'contested',
    interpretations: [
      { framework: 'preterism', text: 'The Elijah promise is fully discharged in John the Baptist, on the authority of Matthew 11:14.' },
      { framework: 'futurism', text: 'John fulfils the promise typologically, with a further Elijah-like ministry before the end — sometimes connected with the two witnesses of Revelation 11.' },
      { framework: 'jewish', text: 'Jewish tradition continues to expect Elijah before the messianic age; the expectation is expressed liturgically at Passover and at circumcision.' }
    ],
    related: ['two-witnesses', 'elijah-question'],
    enoch: [] },

  { id: 'royal-psalms', stage: 'foundations', order: 15, source: 'canonical',
    title: 'The enthroned king and the coming judge',
    summary: 'The Psalms supply two images the New Testament uses constantly: a king installed on Zion who rules the nations, and a Lord seated at God’s right hand until his enemies are subdued.',
    refs: [
      { book: 'Psalms', ref: 'Psalm 2:1–12' },
      { book: 'Psalms', ref: 'Psalm 110:1–7' },
      { book: 'Psalms', ref: 'Psalm 96:11–13; 98:7–9', note: 'the LORD comes to judge the earth' },
      { book: 'Acts', ref: 'Acts 2:34–36' },
      { book: '1 Corinthians', ref: '1 Corinthians 15:25–27' },
      { book: 'Revelation', ref: 'Revelation 2:26–27; 12:5; 19:15', note: 'the rod of iron, from Psalm 2:9' }
    ],
    quote: { text: 'The LORD said unto my Lord, Sit thou at my right hand, until I make thine enemies thy footstool.', ref: 'Psalm 110:1', translation: 'KJV' },
    context: 'Psalm 110 is the most frequently cited Old Testament verse in the New Testament. Paul’s argument in 1 Corinthians 15:25–28 is built on it: Christ reigns now, "until" the last enemy is destroyed — a sequence that every millennial position must accommodate, and which each does differently.',
    symbols: ['the rod of iron', 'the footstool', 'Melchizedek', 'the nations raging'],
    themes: ['kingdom', 'messiah', 'judgement'],
    certainty: 'sequenced',
    interpretations: [
      { framework: 'amillennialism', text: 'The present session at God’s right hand is itself the reign of Christ; Revelation 20’s thousand years describes this same period from a heavenly viewpoint.' },
      { framework: 'premillennialism', text: 'The "until" of Psalm 110:1 points to a future earthly phase of the reign after the return, in which the subjugation becomes visible.' },
      { framework: 'postmillennialism', text: 'The subduing of enemies is understood as progressing within history through the spread of the gospel before the return.' }
    ],
    related: ['death-destroyed', 'rider-white-horse', 'first-resurrection'],
    enoch: [] }

  );
})(window.AD);
