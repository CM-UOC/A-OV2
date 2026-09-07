/* 1 Enoch — comparative source.
   Entries are flagged source:'comparative' and are excluded by default from
   canonical-only views. Also carries the prose for the dedicated Enoch section. */
(function (AD) {
  'use strict';

  AD.data.events.push(

  { id: 'watchers-descend', stage: 'origins', order: 12, source: 'comparative',
    title: 'The Watchers descend (1 Enoch)',
    summary: 'Two hundred heavenly beings bind themselves by oath on Mount Hermon, take human wives, father the giants, and teach forbidden knowledge. The narrative expands Genesis 6:1–4 into a full account of the origin of evil.',
    refs: [
      { book: '1 Enoch', ref: '1 Enoch 6:1–6' },
      { book: '1 Enoch', ref: '1 Enoch 7:1–6' },
      { book: '1 Enoch', ref: '1 Enoch 8:1–4', note: 'metallurgy, weapons, cosmetics, sorcery, astrology' },
      { book: '1 Enoch', ref: '1 Enoch 9:1–11', note: 'the archangels bring the complaint' },
      { book: 'Genesis', ref: 'Genesis 6:1–4', note: 'the biblical text being expanded' }
    ],
    context: 'The Book of the Watchers (1 Enoch 1–36) is generally dated to the third century BCE, making it among the oldest surviving Jewish apocalyptic texts; Aramaic fragments were found at Qumran (4Q201–202). Two leaders are named, Shemihazah, who leads the oath and the sexual transgression, and Asael, associated with forbidden teaching — a doubling most scholars take as evidence of combined sources.',
    symbols: ['the oath on Hermon', 'forbidden teaching', 'the giants'],
    themes: ['watchers', 'judgement', 'deception'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'criticism', text: 'Read as an aetiology of evil that locates its origin outside human choice — a notable contrast with Genesis 3, and one reason the text mattered in Second Temple debates about the source of sin.' },
      { framework: 'patristic', text: 'Several early Christian writers knew this narrative and some accepted it. It was not received as scripture in the traditions that shaped the Jewish and most Christian canons.' }
    ],
    related: ['sons-of-god', 'watchers-bound', 'giants-spirits'],
    enoch: [] },

  { id: 'giants-spirits', stage: 'origins', order: 13, source: 'comparative',
    title: 'The spirits of the giants (1 Enoch)',
    summary: 'When the giants die, their spirits remain on earth as evil spirits that afflict humanity. This is the earliest surviving explanation of the origin of demons in Jewish literature.',
    refs: [
      { book: '1 Enoch', ref: '1 Enoch 15:8–12' },
      { book: '1 Enoch', ref: '1 Enoch 16:1' },
      { book: 'Matthew', ref: 'Matthew 12:43–45', note: 'a spirit seeking rest in waterless places' },
      { book: 'Mark', ref: 'Mark 5:1–13' }
    ],
    context: 'The New Testament assumes the existence of unclean spirits without explaining their origin. 1 Enoch 15 supplies an explanation that circulated widely in the period. The similarity of some details — spirits without bodies seeking rest — has been noted by scholars, but no New Testament text endorses or repeats the Enochic account.',
    symbols: ['disembodied spirits', 'the restless spirit'],
    themes: ['watchers', 'deception'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'criticism', text: 'Widely cited as the background against which first-century demonology developed, while noting that the Gospels neither affirm nor deny the aetiology.' }
    ],
    related: ['watchers-descend', 'watchers-bound'],
    enoch: [] },

  { id: 'watchers-bound', stage: 'adversaries', order: 8, source: 'comparative',
    title: 'The Watchers bound until the day of judgement (1 Enoch)',
    summary: 'Asael is bound and cast into darkness; Shemihazah and the others are imprisoned for seventy generations until the final assize. Jude and 2 Peter use language remarkably close to this.',
    refs: [
      { book: '1 Enoch', ref: '1 Enoch 10:4–6, 11–14' },
      { book: '1 Enoch', ref: '1 Enoch 12:4–6; 13:1–2' },
      { book: '1 Enoch', ref: '1 Enoch 18:11–16; 21:1–10' },
      { book: 'Jude', ref: 'Jude 6' },
      { book: '2 Peter', ref: '2 Peter 2:4' },
      { book: 'Isaiah', ref: 'Isaiah 24:21–22' },
      { book: 'Revelation', ref: 'Revelation 20:1–3', note: 'a comparable binding, of a different figure' }
    ],
    context: 'The structure is consistent: bound now, in darkness, awaiting a judgement fixed for a future day. Jude 6 describes angels "kept in everlasting chains under darkness unto the judgment of the great day", and 2 Peter 2:4 says God did not spare angels but cast them into Tartarus. Both are close enough to the Enochic material that most commentators regard some dependence or shared tradition as likely — particularly in Jude, which quotes 1 Enoch explicitly.',
    symbols: ['chains and darkness', 'the pit', 'seventy generations'],
    themes: ['watchers', 'judgement'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'criticism', text: 'Treated as strong evidence that the Watchers tradition was current and authoritative enough in the first century to be alluded to without explanation.' },
      { framework: 'idealism', text: 'Christian readers who do not treat 1 Enoch as scripture may still read Jude 6 as affirming that rebellious powers are restrained and will be judged, without endorsing the fuller narrative.' }
    ],
    related: ['judgement-of-angels', 'sons-of-god', 'satan-bound'],
    enoch: [] },

  { id: 'enoch-son-of-man', stage: 'foundations', order: 16, source: 'comparative',
    title: 'The Son of Man in the Book of Parables (1 Enoch)',
    summary: 'A figure called the Righteous One, the Elect One, and the Son of Man is named before creation, hidden with God, seated on the throne of glory, and given judgement over the kings and the mighty.',
    refs: [
      { book: '1 Enoch', ref: '1 Enoch 46:1–6' },
      { book: '1 Enoch', ref: '1 Enoch 48:2–10' },
      { book: '1 Enoch', ref: '1 Enoch 62:1–16' },
      { book: '1 Enoch', ref: '1 Enoch 69:26–29' },
      { book: '1 Enoch', ref: '1 Enoch 71:14', note: 'Enoch appears to be identified with the figure' },
      { book: 'Daniel', ref: 'Daniel 7:13–14', note: 'the common source' },
      { book: 'Matthew', ref: 'Matthew 25:31; 26:64' }
    ],
    context: 'The Book of Parables (1 Enoch 37–71) is the section with the closest resemblance to New Testament Christology. Its date is the central scholarly question: no fragments of it were found at Qumran, unlike the other Enochic booklets, and most specialists now place it in the late first century BCE or the first century CE. That uncertainty is exactly why literary parallels here cannot establish dependence in either direction.',
    symbols: ['the throne of glory', 'named before creation', 'the light of the nations'],
    themes: ['messiah', 'judgement', 'kingdom'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'criticism', text: 'Positions range from the Parables being pre-Christian and part of the background to the Gospels, to their being contemporaneous with or later than the New Testament. The absence at Qumran is suggestive but not decisive, since the collection there is not comprehensive.' },
      { framework: 'idealism', text: 'The overlap is generally explained by shared dependence on Daniel 7 and on wisdom traditions rather than by borrowing between the texts.' }
    ],
    related: ['son-of-man-daniel', 'son-of-man-comes', 'sheep-goats'],
    enoch: [] },

  { id: 'enoch-weeks', stage: 'foundations', order: 17, source: 'comparative',
    title: 'The Apocalypse of Weeks and the Animal Apocalypse (1 Enoch)',
    summary: 'Two schemes that divide all history into fixed periods ending in judgement and renewal — a way of writing history that Daniel also uses and that shaped later apocalyptic.',
    refs: [
      { book: '1 Enoch', ref: '1 Enoch 93:1–10; 91:11–17', note: 'the Apocalypse of Weeks' },
      { book: '1 Enoch', ref: '1 Enoch 85–90', note: 'the Animal Apocalypse' },
      { book: '1 Enoch', ref: '1 Enoch 90:20–27', note: 'the throne set and the judgement' },
      { book: '1 Enoch', ref: '1 Enoch 90:28–36', note: 'the new house' },
      { book: 'Daniel', ref: 'Daniel 2; 7; 9:24–27', note: 'comparable periodisation' }
    ],
    context: 'The Animal Apocalypse retells Israel’s history with people as animals and angels as men, and is datable with unusual precision to the Maccabean revolt because of the detail at which it stops. The Apocalypse of Weeks divides history into ten weeks with the author in the seventh. Both are usually cited as evidence that periodised history was a shared apocalyptic convention rather than a borrowing from Daniel.',
    symbols: ['ten weeks', 'the white bull', 'the seventy shepherds', 'the new house'],
    themes: ['judgement', 'kingdom', 'restoration'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'criticism', text: 'Both texts are dated to the second century BCE, roughly contemporary with Daniel’s visions, and are used to reconstruct how apocalyptic writers understood their own moment in history.' }
    ],
    related: ['four-kingdoms', 'seventy-weeks', 'new-jerusalem'],
    enoch: [] },

  { id: 'jude-quotes-enoch', stage: 'parousia', order: 8, source: 'comparative',
    title: 'Jude quotes 1 Enoch by name',
    summary: 'The clearest documented link between the New Testament and 1 Enoch: Jude cites a prophecy of "Enoch, the seventh from Adam" that corresponds to 1 Enoch 1:9.',
    refs: [
      { book: 'Jude', ref: 'Jude 14–15' },
      { book: '1 Enoch', ref: '1 Enoch 1:9' },
      { book: 'Jude', ref: 'Jude 6', note: 'the Watchers allusion' },
      { book: 'Jude', ref: 'Jude 9', note: 'a dispute over Moses’ body, from another non-canonical source' },
      { book: 'Deuteronomy', ref: 'Deuteronomy 33:2', note: 'the older theophany formula behind both' }
    ],
    quote: { text: 'Behold, the Lord cometh with ten thousands of his saints, To execute judgment upon all.', ref: 'Jude 14–15', translation: 'KJV, abridged' },
    context: 'Jude introduces the quotation with "prophesied", which has been discussed since antiquity. Two points are usually made: citing a work does not by itself confer canonical status — Paul quotes Greek poets in Acts 17:28 and Titus 1:12 — and the quotation shows that Enochic literature was known and respected in some early Christian circles. Tertullian argued for 1 Enoch’s authority partly on this basis; Jerome and Augustine did not accept it.',
    symbols: ['the Lord with his holy myriads', 'the executed judgement'],
    themes: ['judgement', 'day-of-lord'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'criticism', text: 'Regarded as direct literary dependence — the strongest such case in the New Testament — and as evidence for the currency of the Enochic corpus in the first century.' },
      { framework: 'patristic', text: 'Early Christian opinion divided. The eventual majority position treated 1 Enoch as edifying at most; the Ethiopian Orthodox Tewahedo Church retained it as scripture.' }
    ],
    related: ['enoch-walked', 'revealed-in-fire', 'day-of-lord'],
    enoch: [] },

  { id: 'luminaries-disorder', stage: 'cosmos', order: 6, source: 'comparative',
    title: 'The luminaries and their disorder (1 Enoch)',
    summary: 'The Astronomical Book sets out a 364-day solar calendar in detail, then warns that in the days of the sinners the heavenly order itself will be disturbed.',
    refs: [
      { book: '1 Enoch', ref: '1 Enoch 72–79', note: 'the courses of sun, moon, and stars' },
      { book: '1 Enoch', ref: '1 Enoch 80:2–8' },
      { book: '1 Enoch', ref: '1 Enoch 82:4–7', note: 'those who err about the calendar' },
      { book: 'Genesis', ref: 'Genesis 1:14–18' },
      { book: 'Matthew', ref: 'Matthew 24:29', note: 'comparable disorder language' }
    ],
    context: 'The Astronomical Book (1 Enoch 72–82) is among the oldest parts of the corpus and is attested at Qumran in a longer Aramaic form. Its 364-day solar calendar differs from the lunar reckoning used in the Jerusalem temple, and calendar disagreement was a live sectarian issue in the period — one reason this material mattered to its first readers far beyond astronomy.',
    symbols: ['the gates of the sun', 'the 364-day year', 'straying stars'],
    themes: ['creation', 'judgement'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'criticism', text: 'Read as evidence of calendrical controversy in Second Temple Judaism, and as the background to the moralised cosmology found in later apocalyptic.' },
      { framework: 'idealism', text: 'Its logic — moral disorder mirrored by cosmic disorder — is the same logic that biblical cosmic-collapse language uses, though the Bible never sets out the mechanism.' }
    ],
    related: ['sun-darkened', 'seedtime-harvest', 'creation'],
    enoch: [] },

  { id: 'enoch-resurrection', stage: 'judgement', order: 11, source: 'comparative',
    title: 'The earth gives back its dead (1 Enoch)',
    summary: 'Sheol and destruction return what was entrusted to them, the Elect One sits in judgement, and the righteous are described as shining like the lights of heaven.',
    refs: [
      { book: '1 Enoch', ref: '1 Enoch 51:1–5' },
      { book: '1 Enoch', ref: '1 Enoch 61:5' },
      { book: '1 Enoch', ref: '1 Enoch 22:1–14', note: 'compartments of the dead awaiting judgement' },
      { book: '1 Enoch', ref: '1 Enoch 104:2' },
      { book: 'Daniel', ref: 'Daniel 12:2–3' },
      { book: 'Revelation', ref: 'Revelation 20:13' }
    ],
    context: '1 Enoch 22 is one of the earliest texts to describe the dead held in separate places according to their conduct, and 1 Enoch 51 and 104 join resurrection, judgement, and the shining of the righteous in a combination very close to Daniel 12:2–3. Revelation 20:13 uses the same "giving back" idiom. These are among the parallels most often discussed in scholarship on the development of resurrection belief.',
    symbols: ['Sheol’s compartments', 'the dead given back', 'shining like lights'],
    themes: ['resurrection', 'judgement'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'criticism', text: 'Used to trace the development from an undifferentiated Sheol to differentiated post-mortem outcomes and bodily resurrection in the Second Temple period.' },
      { framework: 'idealism', text: 'The shared imagery is normally attributed to a common stock of apocalyptic language rather than to direct borrowing in either direction.' }
    ],
    related: ['daniel-resurrection', 'general-resurrection', 'great-white-throne', 'second-death'],
    enoch: [] },

  { id: 'enoch-new-earth', stage: 'restoration', order: 13, source: 'comparative',
    title: 'The transformed heaven and earth (1 Enoch)',
    summary: 'Heaven itself is changed into an eternal light, the earth is transformed and blessed, and the chosen are made to dwell on it.',
    refs: [
      { book: '1 Enoch', ref: '1 Enoch 45:4–5' },
      { book: '1 Enoch', ref: '1 Enoch 51:4–5' },
      { book: '1 Enoch', ref: '1 Enoch 91:16' },
      { book: '1 Enoch', ref: '1 Enoch 90:28–38', note: 'the new house and the transformed flock' },
      { book: 'Isaiah', ref: 'Isaiah 65:17' },
      { book: 'Revelation', ref: 'Revelation 21:1–5' }
    ],
    context: 'Enoch’s conclusion is a transformed earth on which the righteous dwell, not an escape from it — the same shape as Isaiah 65 and Revelation 21, reached independently. The Animal Apocalypse adds a striking final image: all the animals are transformed and become white bulls again, returning the whole of humanity to the condition of Adam and Noah at the start of the vision.',
    symbols: ['the transformed heaven', 'the new house', 'the white bull'],
    themes: ['restoration', 'creation', 'kingdom'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'criticism', text: 'Cited as evidence that the hope of a renewed earth, rather than a purely heavenly destiny, was widespread in Second Temple Judaism.' },
      { framework: 'idealism', text: 'The convergence with Isaiah 65 and Revelation 21 is best explained by common dependence on the prophetic tradition of restoration.' }
    ],
    related: ['new-heavens-new-earth', 'new-jerusalem', 'creation'],
    enoch: [] }

  );

  /* ------------------------------------------------------------------ */
  /* Comparative section content                                         */

  AD.data.enochBooklets = [
    { id: 'watchers', name: 'The Book of the Watchers', ref: '1 Enoch 1–36', date: 'Third century BCE',
      note: 'Theophany, the descent of the Watchers, Enoch’s intercession and heavenly journeys, the places of the dead, and the tree of life. Aramaic fragments at Qumran (4Q201–202).' },
    { id: 'parables', name: 'The Book of Parables (Similitudes)', ref: '1 Enoch 37–71', date: 'Late first century BCE to first century CE (debated)',
      note: 'The Son of Man / Elect One, the throne of glory, judgement of the kings and the mighty, resurrection. Not attested at Qumran, which is central to the dating debate.' },
    { id: 'astronomical', name: 'The Astronomical Book', ref: '1 Enoch 72–82', date: 'Third century BCE or earlier',
      note: 'The courses of sun, moon, and stars; a 364-day solar calendar; disorder of the luminaries in the days of the sinners. Attested at Qumran in a longer form (4Q208–211).' },
    { id: 'dreams', name: 'The Book of Dream Visions', ref: '1 Enoch 83–90', date: 'c. 165–160 BCE',
      note: 'Two visions, the second being the Animal Apocalypse: Israel’s history told through animals, ending in judgement, a new house, and the transformation of all the animals.' },
    { id: 'epistle', name: 'The Epistle of Enoch', ref: '1 Enoch 91–105', date: 'Second to first century BCE',
      note: 'The Apocalypse of Weeks, woes against the oppressive rich, exhortation to the righteous, and assurance of post-mortem vindication.' },
    { id: 'appendices', name: 'Noah material and conclusion', ref: '1 Enoch 106–108', date: 'Uncertain',
      note: 'The birth of Noah, and a final exhortation sometimes called "another book of Enoch".' }
  ];

  AD.data.enochThemes = [
    { id: 'th-watchers', title: 'The Watchers and the origin of evil',
      enochRefs: ['1 Enoch 6–16'], bibleRefs: ['Genesis 6:1–4', 'Jude 6', '2 Peter 2:4'],
      similar: 'Both traditions know of heavenly beings who transgressed and are held for judgement. Jude and 2 Peter use imprisonment language very close to 1 Enoch 10.',
      different: 'Genesis gives four verses and no explanation; 1 Enoch gives a full narrative in which evil enters human life through angelic teaching and mixing. Genesis 3 locates the origin of transgression in human choice, and the New Testament follows Genesis 3 rather than 1 Enoch on this question (Romans 5:12).',
      caution: 'Shared motifs show a common tradition circulating in the period. They do not show that the biblical writers accepted the Enochic account, and no New Testament text retells it.' },
    { id: 'th-sonofman', title: 'The Son of Man',
      enochRefs: ['1 Enoch 46', '1 Enoch 48', '1 Enoch 62', '1 Enoch 69:26–29'], bibleRefs: ['Daniel 7:13–14', 'Matthew 25:31', 'Matthew 26:64', 'Revelation 1:13'],
      similar: 'A heavenly figure in human form, associated with a throne, with judgement, and with the vindication of the righteous. Both develop Daniel 7.',
      different: 'In the Parables the figure is explicitly pre-existent and is finally identified with Enoch himself (71:14). The Gospels’ Son of Man suffers and dies, which has no counterpart in 1 Enoch.',
      caution: 'The date of the Parables is unsettled and no Qumran fragments of them exist. Parallels here cannot establish dependence in either direction, and responsible scholarship treats both as developing Daniel 7.' },
    { id: 'th-judgement', title: 'Divine judgement and theophany',
      enochRefs: ['1 Enoch 1:3–9', '1 Enoch 47', '1 Enoch 62–63'], bibleRefs: ['Jude 14–15', 'Deuteronomy 33:2', 'Revelation 20:11–15', '2 Thessalonians 1:7–10'],
      similar: 'God comes with myriads of holy ones to judge; books are opened; the powerful plead too late.',
      different: '1 Enoch dwells at length on the judgement of the kings and the mighty as a class. Revelation broadens the scene to "small and great" alike.',
      caution: 'Jude 14–15 is a direct quotation of 1 Enoch 1:9 — the one case where dependence is documented rather than inferred.' },
    { id: 'th-resurrection', title: 'Resurrection and the state of the dead',
      enochRefs: ['1 Enoch 22', '1 Enoch 51:1–5', '1 Enoch 104:2'], bibleRefs: ['Daniel 12:2–3', 'John 5:28–29', 'Revelation 20:13', '1 Corinthians 15:42–44'],
      similar: 'The dead are held and then returned; outcomes are differentiated; the righteous are described as shining.',
      different: 'Paul argues at length for the nature of the resurrection body, a question 1 Enoch does not address. 1 Enoch 22 maps the intermediate state in more detail than any biblical text.',
      caution: 'The development of resurrection belief in this period is well documented; a shared idiom such as "shining like the lights of heaven" indicates a common vocabulary, not a citation.' },
    { id: 'th-spirits', title: 'The judgement of rebellious spiritual beings',
      enochRefs: ['1 Enoch 10:4–14', '1 Enoch 15:8–12', '1 Enoch 21'], bibleRefs: ['Jude 6', '2 Peter 2:4', '1 Corinthians 6:3', 'Isaiah 24:21–22', 'Revelation 20:1–3'],
      similar: 'Spiritual powers are bound now, in darkness or an abyss, and judged at a fixed future day.',
      different: '1 Enoch identifies the bound beings as the Watchers and derives demons from their offspring. The New Testament assumes unclean spirits without giving an origin, and centres its account of opposition on Satan.',
      caution: 'This is the densest cluster of conceptual overlap outside the Jude quotation, and it is where careful scholarship is most needed: Jude 6 can be read as endorsing the tradition, or as using a shared idiom for a claim Jude states in his own terms.' },
    { id: 'th-cosmos', title: 'Cosmic order and transformation',
      enochRefs: ['1 Enoch 2–5', '1 Enoch 72–82', '1 Enoch 45:4–5', '1 Enoch 91:16'], bibleRefs: ['Genesis 1:14–18', 'Jeremiah 33:20–26', 'Isaiah 65:17', 'Matthew 24:29', 'Revelation 21:1'],
      similar: 'Created order is a moral witness; its disturbance signals judgement; the end is a transformed heaven and earth on which the righteous dwell.',
      different: '1 Enoch supplies an elaborate astronomical system and a calendar; no biblical text does. The Bible uses cosmic-collapse language without explaining a mechanism.',
      caution: 'The Astronomical Book’s calendar was a sectarian marker in its own time. Reading it as an ancient scientific claim mistakes its genre and its purpose.' }
  ];

  AD.data.enochCautions = [
    'Literary parallel is not literary dependence. Two texts may share imagery because both draw on a common stock — Daniel, the prophets, and wider Second Temple convention.',
    'Direction of influence cannot be assumed from similarity alone. For the Book of Parables in particular, the date is contested enough that neither direction can be asserted.',
    'Quotation is not endorsement of canon. Jude quotes 1 Enoch; Paul quotes Epimenides and Aratus. Citation shows currency and usefulness, not scriptural status.',
    'Canon status varies by community and should always be stated. 1 Enoch is scripture in the Ethiopian Orthodox Tewahedo Church and is not in the Jewish, Catholic, Orthodox, or Protestant canons.',
    'The Enochic corpus is a library, not a book. Its parts differ in date, genre, and outlook by as much as three centuries, and should be cited by booklet rather than as a single work.'
  ];
})(window.AD);
