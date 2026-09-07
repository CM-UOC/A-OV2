/* Interpretive frameworks. Presented neutrally: thesis, arguments, limitations,
   disputed assumptions, and representative historical proponents. */
(function (AD) {
  'use strict';

  AD.data.frameworks = [
    { id: 'preterism', name: 'Preterism', kind: 'reading', color: 'var(--st-tribulation)',
      tagline: 'Fulfilled, largely or entirely, in the first century',
      thesis: 'The prophecies of the Olivet Discourse and much of Revelation describe events of the first century — above all the Roman destruction of Jerusalem and the temple in AD 70 — expressed in the figurative idiom of Hebrew prophecy.',
      keyTexts: ['Matthew 24:34', 'Luke 21:20–24', 'Revelation 1:1, 3', 'Revelation 22:6–7, 10'],
      arguments: [
        'Takes the New Testament’s own time indicators at face value: "this generation shall not pass" (Matthew 24:34) and the repeated "shortly", "at hand", "the time is at hand" in Revelation.',
        'Notes that Revelation 22:10 tells John not to seal the book — the opposite of the instruction to Daniel (Daniel 12:4), which is read as indicating imminence for the first readers.',
        'Shows that the prophets themselves used cosmic-collapse language for datable political events (Isaiah 13:10 of Babylon; Ezekiel 32:7 of Egypt), so the same language in the Gospels need not be literal.',
        'Explains why the destruction of the temple — a catastrophe for first-century Judaism and Christianity — is prominent in the Gospels.'
      ],
      limitations: [
        'Requires an early date for Revelation (before AD 70); the majority of scholars, following Irenaeus, date it to the reign of Domitian, c. AD 95.',
        'Struggles to account for the universality of some descriptions — every eye seeing him (Revelation 1:7), the resurrection of the dead, the new creation.',
        'Full preterism, which holds that the resurrection and second coming are entirely past, is rejected as heterodox by all major churches, including by partial preterists.'
      ],
      disputed: [
        'That "this generation" means Jesus’ contemporaries rather than a type of person or a future generation.',
        'That Revelation was written before AD 70.',
        'That covenant-transition language can bear the weight placed on it in reading "heaven and earth" passages.'
      ],
      proponents: ['Moses Stuart (1780–1852)', 'J. Stuart Russell (1816–1895)', 'R. C. Sproul (partial)', 'Kenneth Gentry (partial)'] },

    { id: 'historicism', name: 'Historicism', kind: 'reading', color: 'var(--st-foundations)',
      tagline: 'A continuous map of church history',
      thesis: 'Revelation and Daniel outline the whole course of history from the apostolic age to the end, so that the seals, trumpets, and bowls correspond to successive periods, empires, and movements.',
      keyTexts: ['Daniel 2:31–45', 'Daniel 7:1–28', 'Revelation 6–19', 'Numbers 14:34', 'Ezekiel 4:6'],
      arguments: [
        'Daniel 2 and 7 do present a genuine sequence of successive kingdoms, so a sequential reading of Revelation is not arbitrary in principle.',
        'Applies a year-day principle drawn from Numbers 14:34 and Ezekiel 4:6 to prophetic time periods.',
        'Was the dominant Protestant reading from the Reformation to the nineteenth century, and is embedded in a great deal of older commentary and hymnody.'
      ],
      limitations: [
        'Interpreters in different centuries have produced sharply different maps, each finding its own era near the end — the standard and most serious objection.',
        'Tends to centre European and Western church history in a book addressed to seven congregations in Asia Minor.',
        'The year-day principle is drawn from two passages that are not prophetic-apocalyptic in genre.'
      ],
      disputed: [
        'That the year-day principle applies to Daniel and Revelation at all.',
        'That a first-century book of pastoral encouragement would be structured as a chronicle of later European history.'
      ],
      proponents: ['Joachim of Fiore (c. 1135–1202)', 'Joseph Mede (1586–1638)', 'Isaac Newton (1642–1727)', 'the Adventist tradition'] },

    { id: 'futurism', name: 'Futurism', kind: 'reading', color: 'var(--st-cosmos)',
      tagline: 'Still ahead, and largely sequential',
      thesis: 'From Revelation 4 onward the book describes a still-future period: a tribulation, a final adversary, the return of Christ, and the events that follow, in broadly the order given.',
      keyTexts: ['Revelation 4:1', 'Daniel 9:27', 'Matthew 24:21–31', '2 Thessalonians 2:1–12'],
      arguments: [
        'Takes the descriptions at their apparent scale: a distress unequalled in history, a universally visible return, a general resurrection.',
        'Notes that no first-century event plausibly matches the whole of what is described.',
        'Preserves the New Testament’s forward-looking expectation as genuinely future rather than reinterpreted.'
      ],
      limitations: [
        'Must explain the imminence language of the first century, and the addressees for whom a description of far-future events would have limited pastoral use.',
        'Its dispensational form depends on a gap of unspecified length between Daniel’s sixty-ninth and seventieth weeks, which the text does not state.',
        'Has repeatedly been used to identify contemporary figures and events with prophetic descriptions — identifications that have not held up, and that this site does not make.'
      ],
      disputed: [
        'That Revelation 4:1 marks a chronological transition to a future period.',
        'That the seven-year tribulation scheme follows from Daniel 9:27.',
        'That a rebuilt physical temple is required.'
      ],
      proponents: ['Francisco Ribera (1537–1591)', 'J. N. Darby (1800–1882)', 'C. I. Scofield (1843–1921)', 'John Walvoord (1910–2002)'] },

    { id: 'idealism', name: 'Idealism', kind: 'reading', color: 'var(--st-adversaries)',
      tagline: 'Timeless patterns, not a timetable',
      thesis: 'Apocalyptic visions portray the enduring conflict between God and evil in symbolic form. They depict what is always true of the age between the advents, and are consummated at the end without mapping onto a sequence of datable events.',
      keyTexts: ['Revelation 1:1', 'Revelation 12:1–17', 'Revelation 17:9', 'Ephesians 6:12'],
      arguments: [
        'Revelation 1:1 says the message was "signified" — communicated in signs — which suggests symbol is the primary mode rather than the exception.',
        'The book’s own numbers are patently symbolic (7, 12, 144,000, 1,000), and it interprets some of its own images (1:20; 17:9, 18).',
        'Explains why the book has spoken to persecuted communities in every century without requiring a new chronological map each time.'
      ],
      limitations: [
        'Can flatten the genuine expectation of a final, actual consummation if pressed too far.',
        'Offers less purchase on the specific historical situation of the first readers, which the letters to the seven churches clearly assume.',
        'Risks making the visions endlessly adaptable and therefore unfalsifiable.'
      ],
      disputed: [
        'That symbolic reading excludes reference to particular historical events.',
        'Where the line falls between symbol and referent.'
      ],
      proponents: ['William Milligan (1821–1893)', 'Traditions influenced by Origen and Augustine', 'Modified or "eclectic" forms in much recent commentary'] },

    { id: 'premillennialism', name: 'Premillennialism', kind: 'millennial', color: 'var(--st-parousia)',
      tagline: 'Christ returns before the thousand years',
      thesis: 'Christ returns before a future period of his reign on earth described in Revelation 20:1–6, after which come the final rebellion, the last judgement, and the new creation.',
      keyTexts: ['Revelation 19:11–20:6', '1 Corinthians 15:23–26', 'Isaiah 11:6–9', 'Isaiah 65:20'],
      arguments: [
        'Follows the plain sequence of Revelation 19–20: return, binding, reign, release, judgement.',
        'Reads "they came to life" in Revelation 20:4 as bodily resurrection, the same sense the verb carries in 20:5.',
        'Is attested early: Papias, Justin Martyr, and Irenaeus expected an earthly reign (the position then called chiliasm).',
        'Accounts for Old Testament passages that describe a transformed but still ordinary world (Isaiah 65:20) as an interim state.'
      ],
      limitations: [
        'Depends on one passage; no other text specifies a thousand years or an interim reign.',
        'Must explain the presence of mortal, rebellious populations after a resurrection and a return in glory.',
        'Its dispensational form introduces a separate removal of the church that historic premillennialism does not require.'
      ],
      disputed: [
        'Whether Revelation 20 follows chapter 19 chronologically or recapitulates the age.',
        'Whether Old Testament kingdom prophecies require an interim earthly fulfilment.',
        'Whether Israel and the church remain permanently distinct (dispensational) or not (historic).'
      ],
      proponents: ['Justin Martyr (c. 100–165)', 'Irenaeus (c. 130–202)', 'George Eldon Ladd (1911–1982), historic', 'John Walvoord (1910–2002), dispensational'] },

    { id: 'amillennialism', name: 'Amillennialism', kind: 'millennial', color: 'var(--st-signs)',
      tagline: 'The thousand years are now',
      thesis: 'The thousand years symbolise the entire period between Christ’s first and second comings. Christ reigns now, the faithful dead reign with him, and his return brings the general resurrection, the last judgement, and the new creation together.',
      keyTexts: ['Revelation 20:1–6', 'John 5:28–29', 'Matthew 13:24–30', '2 Peter 3:10–13', 'Colossians 1:13'],
      arguments: [
        'Revelation repeatedly recapitulates rather than advancing chronologically, so chapter 20 need not follow chapter 19 in time.',
        'The New Testament describes one resurrection "hour" for the good and the evil (John 5:28–29) and one return.',
        'Revelation’s numbers are symbolic throughout; 1,000 is 10³, a figure of completeness.',
        'The binding of Satan has a stated and limited purpose — deception of the nations — which fits the New Testament’s account of the present age.'
      ],
      limitations: [
        'Must read "they came to life" in 20:4 differently from the same verb in 20:5, which requires argument.',
        'Was not the dominant view in the earliest centuries.',
        'Has to account for Old Testament kingdom prophecies without an interim earthly stage.'
      ],
      disputed: [
        'Whether recapitulation governs Revelation 20.',
        'What "the first resurrection" refers to.',
        'Whether the present age can be described as a reign in the sense Revelation 20 intends.'
      ],
      proponents: ['Augustine (354–430)', 'Louis Berkhof (1873–1957)', 'Anthony Hoekema (1913–1988)', 'Kim Riddlebarger'] },

    { id: 'postmillennialism', name: 'Postmillennialism', kind: 'millennial', color: 'var(--st-restoration)',
      tagline: 'Christ returns after an age of gospel success',
      thesis: 'The gospel will succeed on a large scale within history, producing an extended era of righteousness and peace, at the end of which Christ returns for the resurrection and judgement.',
      keyTexts: ['Matthew 13:31–33', 'Matthew 28:18–20', 'Psalm 72:8–11', 'Isaiah 2:2–4', '1 Corinthians 15:24–25'],
      arguments: [
        'Takes seriously the growth parables — mustard seed, leaven — in which the kingdom expands until it permeates the whole.',
        'Reads the Great Commission as a mandate expected to succeed, not merely to be attempted.',
        'Fits Old Testament passages describing worldwide peace and the nations’ instruction as realised within history.',
        'Reads 1 Corinthians 15:25 as a reign that visibly subdues enemies before the end.'
      ],
      limitations: [
        'Must account for New Testament passages predicting apostasy, deception, and pressure before the end.',
        'Suffered a sharp loss of plausibility in the twentieth century, and is often criticised as historically over-optimistic.',
        'Can be difficult to distinguish, in practice, from a doctrine of secular progress.'
      ],
      disputed: [
        'Whether the growth parables describe extent of influence or manner of growth.',
        'Whether the "golden age" is a distinct era or a description of the whole church age improving.'
      ],
      proponents: ['Jonathan Edwards (1703–1758)', 'Charles Hodge (1797–1878)', 'B. B. Warfield (1851–1921)', 'Loraine Boettner (1901–1990)'] },

    { id: 'criticism', name: 'Historical-critical scholarship', kind: 'lens', color: 'var(--st-origins)',
      tagline: 'A lens, not a theological position',
      thesis: 'Reads each text in its own historical setting, asking about date, authorship, sources, genre, and the situation addressed, without presupposing a unified predictive scheme across books written centuries apart.',
      keyTexts: ['Daniel 7–12', '1 Enoch 1–36', 'Revelation 1–3', 'Mark 13'],
      arguments: [
        'Explains the concentration of Daniel’s detail on the 160s BCE, and the genre conventions of apocalyptic, including pseudonymity and reviewed history.',
        'Situates Revelation among the seven cities of Asia Minor and the pressures of the imperial cult.',
        'Provides comparative material — 1 Enoch, Jubilees, 4 Ezra, 2 Baruch, the Qumran scrolls — that shows what was conventional in the genre.'
      ],
      limitations: [
        'Is a set of historical methods, not a theology; it does not by itself settle questions of meaning or authority.',
        'Its conclusions on dating and authorship are themselves debated, and some are rejected by scholars working from confessional commitments.'
      ],
      disputed: [
        'The dating of Daniel, of the Book of Parables, and of Revelation.',
        'The extent to which genre conventions govern how a text was meant to be read.'
      ],
      proponents: ['Hermann Gunkel (1862–1932)', 'John J. Collins', 'George Nickelsburg (1934–2024)', 'Christopher Rowland'] },

    { id: 'jewish', name: 'Jewish interpretive tradition', kind: 'lens', color: 'var(--st-judgement)',
      tagline: 'Included where it bears on shared texts',
      thesis: 'Jewish readings of the Hebrew Bible’s prophetic material — including messianic expectation, the days of the Messiah, the world to come, and the resurrection — form the tradition within which these texts were first read, and continue as a living interpretation.',
      keyTexts: ['Isaiah 11', 'Isaiah 53', 'Daniel 7', 'Malachi 4:5', 'Ezekiel 37'],
      arguments: [
        'Represents the continuous reading tradition of the community whose scriptures these are.',
        'Preserves readings — the servant as Israel, the awaited Elijah, the ingathering — that predate or run parallel to Christian interpretation.'
      ],
      limitations: [
        'Jewish tradition is internally diverse across rabbinic, medieval, and modern periods, and is not a single position.',
        'It is included here only where it bears directly on texts also used in Christian eschatology, and is not surveyed comprehensively.'
      ],
      disputed: [
        'Whether particular passages are messianic at all, and in what sense.'
      ],
      proponents: ['Rashi (1040–1105)', 'Maimonides (1138–1204)', 'Ongoing rabbinic and academic scholarship'] },

    { id: 'patristic', name: 'Early church reception', kind: 'lens', color: 'var(--muted)',
      tagline: 'How the first centuries read these texts',
      thesis: 'The writings of the first five centuries show which readings were current, which were contested, and how the canon and its interpretation took shape — including on the status of 1 Enoch.',
      keyTexts: ['Revelation 20', 'Genesis 6:1–4', 'Jude 14–15', 'Daniel 9'],
      arguments: [
        'Documents an early expectation of an earthly reign (Papias, Justin, Irenaeus) and its later displacement.',
        'Records the divergence over 1 Enoch: valued by Tertullian, not received by Jerome or Augustine, retained in the Ethiopian canon.'
      ],
      limitations: [
        'Early writers disagreed with one another; "the fathers taught" is rarely a single position.',
        'Reception history describes what was believed, which is evidence about interpretation rather than a settlement of it.'
      ],
      disputed: [
        'How much weight reception history should carry in deciding a reading.'
      ],
      proponents: ['Justin Martyr', 'Irenaeus', 'Tertullian', 'Origen', 'Jerome', 'Augustine'] }
  ];

  AD.data.frameworkById = {};
  AD.data.frameworks.forEach(function (f) { AD.data.frameworkById[f.id] = f; });
})(window.AD);
