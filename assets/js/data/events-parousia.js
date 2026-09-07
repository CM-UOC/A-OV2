/* Stage VI — The coming of the Messiah */
(function (AD) {
  'use strict';
  AD.data.events.push(

  { id: 'son-of-man-comes', stage: 'parousia', order: 1, source: 'canonical',
    title: 'The Son of Man comes on the clouds',
    summary: 'The centre of New Testament expectation: a public, unmistakable arrival, with angels sent out to gather the chosen from the four winds.',
    refs: [
      { book: 'Matthew', ref: 'Matthew 24:27, 30–31' },
      { book: 'Mark', ref: 'Mark 13:26–27' },
      { book: 'Luke', ref: 'Luke 21:27–28' },
      { book: 'Daniel', ref: 'Daniel 7:13–14' },
      { book: 'Deuteronomy', ref: 'Deuteronomy 30:4', note: 'gathering from the ends of heaven' },
      { book: 'Zechariah', ref: 'Zechariah 2:6', note: 'scattered to the four winds' }
    ],
    quote: { text: 'And he shall send his angels with a great sound of a trumpet, and they shall gather together his elect from the four winds, from one end of heaven to the other.', ref: 'Matthew 24:31', translation: 'KJV' },
    context: 'The wording is assembled from Daniel 7:13 (coming with clouds) and Deuteronomy 30:4 with Zechariah 2:6 (gathering from the winds) — an exile-and-return image applied to the end. "The sign of the Son of Man" in Matthew 24:30 is grammatically ambiguous: it may mean a sign consisting of the Son of Man, or a separate sign belonging to him.',
    symbols: ['clouds', 'the trumpet', 'the four winds', 'lightning across the sky'],
    themes: ['messiah', 'day-of-lord', 'kingdom'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'preterism', text: 'Reads the "coming" as movement to the throne in Daniel 7 — enthronement and vindication — expressed through the fall of the temple, with the gathering as the worldwide mission.' },
      { framework: 'futurism', text: 'Reads the visible, bodily return of Christ to earth, with a literal gathering of the elect.' },
      { framework: 'amillennialism', text: 'Reads a single visible return at which the resurrection and judgement occur together, with no separate later phase.' }
    ],
    related: ['son-of-man-daniel', 'caught-up', 'every-eye-sees', 'sun-darkened'],
    enoch: [ { ref: '1 Enoch 62:1–16', relation: 'parallel',
      text: 'The Son of Man is seated on the throne of glory, the kings and mighty see him and are terrified, and the righteous are gathered to eat with him. The scene is remarkably close to the Gospel descriptions; the date of the Parables makes the direction of influence uncertain, and most specialists treat both as drawing on Daniel 7.' } ]
  },

  { id: 'every-eye-sees', stage: 'parousia', order: 2, source: 'canonical',
    title: 'Every eye shall see him',
    summary: 'The return is described as public and universally visible — the express counter to any claim of a secret or private arrival.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 1:7' },
      { book: 'Acts', ref: 'Acts 1:9–11' },
      { book: 'Zechariah', ref: 'Zechariah 12:10' },
      { book: 'Matthew', ref: 'Matthew 24:23–27' },
      { book: 'Daniel', ref: 'Daniel 7:13' }
    ],
    quote: { text: 'Behold, he cometh with clouds; and every eye shall see him, and they also which pierced him.', ref: 'Revelation 1:7', translation: 'KJV' },
    context: 'Revelation 1:7 fuses Daniel 7:13 with Zechariah 12:10 in a single sentence. Acts 1:11 promises a return "in like manner" to the ascension — a phrase that has carried weight in debates about the visibility and location of the parousia.',
    symbols: ['clouds', 'the pierced one seen', 'the mourning tribes'],
    themes: ['messiah', 'nations'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'futurism', text: 'Cited as excluding an invisible or spiritual-only return; within dispensationalism it is normally applied to the public return rather than to the earlier removal of the church.' },
      { framework: 'preterism', text: 'Reads "those who pierced him" as the generation responsible, which locates the reference in the first century; the "tribes of the land" is offered as an alternative rendering.' },
      { framework: 'idealism', text: 'Reads the verse as a statement of the certainty and universality of Christ’s vindication rather than of its mechanics.' }
    ],
    related: ['pierced-one', 'son-of-man-comes', 'caught-up'],
    enoch: [] },

  { id: 'caught-up', stage: 'parousia', order: 3, source: 'canonical',
    title: 'Caught up to meet the Lord',
    summary: 'Paul’s answer to a bereaved congregation: the dead in Christ rise first, and the living are caught up with them — the passage from which the word "rapture" derives.',
    refs: [
      { book: '1 Thessalonians', ref: '1 Thessalonians 4:13–18' },
      { book: '1 Corinthians', ref: '1 Corinthians 15:51–53' },
      { book: '2 Thessalonians', ref: '2 Thessalonians 2:1' },
      { book: 'John', ref: 'John 14:1–3' },
      { book: 'Matthew', ref: 'Matthew 24:31' }
    ],
    quote: { text: 'The Lord himself shall descend from heaven with a shout … and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air.', ref: '1 Thessalonians 4:16–17', translation: 'KJV, abridged' },
    context: 'The Latin rapiemur ("we shall be caught up") in the Vulgate gives us the English "rapture". The Greek word for the meeting, apantēsis, is used elsewhere for a delegation going out of a city to receive a dignitary and escort him in — a nuance many commentators consider decisive for the direction of travel. Paul’s stated purpose is pastoral comfort (4:18), not a timetable.',
    symbols: ['the shout and the archangel’s voice', 'the trumpet of God', 'meeting in the air'],
    themes: ['resurrection', 'messiah'],
    certainty: 'contested',
    interpretations: [
      { framework: 'futurism', text: 'Pretribulational dispensationalism reads a removal of the church before the tribulation, distinct from the later public return. This scheme became widespread in the nineteenth century through J. N. Darby and the Scofield Reference Bible.' },
      { framework: 'premillennialism', text: 'Historic (posttribulational) premillennialism reads one event: believers meet the returning Lord and accompany him, matching the apantēsis imagery and Matthew 24:31.' },
      { framework: 'amillennialism', text: 'Reads the passage as describing the general resurrection and gathering at the single return, with no separate removal.' },
      { framework: 'preterism', text: 'Partial preterists retain a future bodily return here, distinguishing it from the first-century judgement described in the Gospels.' }
    ],
    related: ['last-trumpet', 'general-resurrection', 'days-of-noah', 'son-of-man-comes'],
    enoch: [] },

  { id: 'last-trumpet', stage: 'parousia', order: 4, source: 'canonical',
    title: 'At the last trumpet',
    summary: 'A trumpet sounds, the dead are raised imperishable, and the living are changed — in a moment, in the blink of an eye.',
    refs: [
      { book: '1 Corinthians', ref: '1 Corinthians 15:51–57' },
      { book: '1 Thessalonians', ref: '1 Thessalonians 4:16' },
      { book: 'Matthew', ref: 'Matthew 24:31' },
      { book: 'Isaiah', ref: 'Isaiah 27:13', note: 'a great trumpet gathers the exiles' },
      { book: 'Revelation', ref: 'Revelation 11:15', note: 'the seventh and last trumpet' }
    ],
    quote: { text: 'We shall not all sleep, but we shall all be changed, In a moment, in the twinkling of an eye, at the last trump.', ref: '1 Corinthians 15:51–52', translation: 'KJV' },
    context: 'The trumpet belongs to Israel’s festal and military vocabulary — assembly, alarm, and the ingathering of exiles (Isaiah 27:13). Paul calls it "the last", which posttribulational readings connect with the seventh trumpet of Revelation 11:15; pretribulational readings distinguish the two as different trumpets in different contexts.',
    symbols: ['the last trumpet', 'the twinkling of an eye', 'perishable clothed with imperishable'],
    themes: ['resurrection', 'messiah'],
    certainty: 'contested',
    interpretations: [
      { framework: 'premillennialism', text: 'Historic premillennialists identify Paul’s "last trumpet" with the seventh trumpet, placing the resurrection at the end of the tribulation.' },
      { framework: 'futurism', text: 'Pretribulational readings hold that the trumpets of Revelation are angelic judgements distinct from the trumpet of God in 1 Thessalonians 4:16.' },
      { framework: 'amillennialism', text: 'Reads the trumpet as marking the single end-point at which resurrection, transformation, and judgement coincide.' }
    ],
    related: ['caught-up', 'general-resurrection', 'seven-trumpets'],
    enoch: [] },

  { id: 'day-as-thief', stage: 'parousia', order: 5, source: 'canonical',
    title: 'The day comes like a thief',
    summary: 'A single image repeated by Jesus, Paul, Peter, and Revelation: unannounced arrival — with the consistent conclusion that watchfulness, not calculation, is the appropriate response.',
    refs: [
      { book: '1 Thessalonians', ref: '1 Thessalonians 5:1–11' },
      { book: '2 Peter', ref: '2 Peter 3:10' },
      { book: 'Matthew', ref: 'Matthew 24:42–44' },
      { book: 'Revelation', ref: 'Revelation 3:3; 16:15' },
      { book: 'Luke', ref: 'Luke 12:39–40' }
    ],
    context: 'Paul says the Thessalonians have "no need" to be written to about times and seasons — and then writes about them, in order to say that the question is the wrong one. The thief image is always paired with an ethical instruction: stay awake, be sober, put on faith and love.',
    symbols: ['the thief at night', 'labour pains on a pregnant woman', 'sobriety and armour'],
    themes: ['imminence'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'idealism', text: 'Reads the image as excluding, in principle, any scheme that would make the day predictable.' },
      { framework: 'futurism', text: 'Notes 1 Thessalonians 5:4 — "you are not in darkness, that that day should overtake you as a thief" — as indicating a difference of situation, not of information.' },
      { framework: 'preterism', text: 'Applies the warning to the first-century crisis, for which the Judaean church is elsewhere said to have been forewarned.' }
    ],
    related: ['unknown-day', 'scoffers', 'elements-melt'],
    enoch: [] },

  { id: 'revealed-in-fire', stage: 'parousia', order: 6, source: 'canonical',
    title: 'Revealed from heaven with his angels',
    summary: 'Paul describes the return as a public reversal for a persecuted congregation: relief for the afflicted, and judgement rendered in flaming fire.',
    refs: [
      { book: '2 Thessalonians', ref: '2 Thessalonians 1:6–10' },
      { book: 'Isaiah', ref: 'Isaiah 66:15–16' },
      { book: 'Jude', ref: 'Jude 14–15' },
      { book: 'Matthew', ref: 'Matthew 16:27' }
    ],
    context: 'The theophany language — coming with holy ones, in fire, to execute judgement — is the oldest layer of this imagery, running from Deuteronomy 33:2 and Isaiah 66 through 1 Enoch 1:9 to Jude and 2 Thessalonians. Paul’s pastoral point is that the congregation’s present suffering is neither invisible nor final.',
    symbols: ['flaming fire', 'the angels of his power', 'glory and relief'],
    themes: ['judgement', 'suffering', 'messiah'],
    certainty: 'sequenced',
    interpretations: [
      { framework: 'futurism', text: 'Read as the public return in judgement, following the tribulation.' },
      { framework: 'preterism', text: 'Read by full preterists of the first-century judgement; partial preterists take this passage as still future.' },
      { framework: 'amillennialism', text: 'Read as the single return at which relief and judgement occur simultaneously.' }
    ],
    related: ['rider-white-horse', 'jude-quotes-enoch', 'day-of-lord'],
    enoch: [ { ref: '1 Enoch 1:9', relation: 'quotation',
      text: 'Jude 14–15 quotes this verse and attributes it to "Enoch, the seventh from Adam". 2 Thessalonians 1:7–10 uses the same theophany pattern without quoting. This is the strongest documented link between the New Testament and 1 Enoch.' } ]
  },

  { id: 'rider-white-horse', stage: 'parousia', order: 7, source: 'canonical',
    title: 'The rider called Faithful and True',
    summary: 'Heaven opens and a rider comes out, robe already dipped in blood before any battle, striking the nations with the sword that proceeds from his mouth.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 19:11–21' },
      { book: 'Isaiah', ref: 'Isaiah 11:4', note: 'he strikes with the rod of his mouth' },
      { book: 'Isaiah', ref: 'Isaiah 63:1–6', note: 'garments stained from the winepress' },
      { book: 'Psalms', ref: 'Psalm 2:9' },
      { book: 'Revelation', ref: 'Revelation 1:16', note: 'the sword from his mouth' }
    ],
    quote: { text: 'And I saw heaven opened, and behold a white horse; and he that sat upon him was called Faithful and True, and in righteousness he doth judge and make war.', ref: 'Revelation 19:11', translation: 'KJV' },
    context: 'The details resist a straightforwardly military reading: the weapon is a word from his mouth, the robe is bloodstained before the encounter, and the outcome is stated rather than fought. The armies of heaven follow in white linen, unarmed. Many commentators therefore read the scene as a judicial sentence in battle imagery.',
    symbols: ['the sword from the mouth', 'the blood-dipped robe', 'the winepress', 'the name no one knows'],
    themes: ['messiah', 'judgement', 'kingdom'],
    certainty: 'contested',
    interpretations: [
      { framework: 'futurism', text: 'Reads a literal return in glory ending a literal final campaign, followed immediately by the millennium of Revelation 20.' },
      { framework: 'idealism', text: 'Reads the victory of the word of God over all opposition, symbolically portrayed; the sword from the mouth is the decisive detail.' },
      { framework: 'preterism', text: 'Reads the judgement of the first-century persecuting power, portrayed in the idiom of divine warfare.' },
      { framework: 'amillennialism', text: 'Identifies this with the single return, with Revelation 20 then recapitulating the age from a different vantage rather than continuing the sequence.' }
    ],
    related: ['armageddon', 'royal-psalms', 'first-resurrection', 'marriage-supper'],
    enoch: [] }

  );
})(window.AD);
