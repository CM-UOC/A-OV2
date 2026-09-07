/* Stage IV — Deceptive and adversarial figures */
(function (AD) {
  'use strict';
  AD.data.events.push(

  { id: 'little-horn', stage: 'adversaries', order: 1, source: 'canonical',
    title: 'Daniel’s little horn',
    summary: 'A small horn that grows, speaks arrogantly, wars against the holy ones, and attempts to change the sacred calendar and law — for a time, times, and half a time.',
    refs: [
      { book: 'Daniel', ref: 'Daniel 7:8, 20–27' },
      { book: 'Daniel', ref: 'Daniel 8:9–14, 23–25' },
      { book: 'Daniel', ref: 'Daniel 11:31–39' },
      { book: '2 Thessalonians', ref: '2 Thessalonians 2:4', note: 'the language is reused' },
      { book: 'Revelation', ref: 'Revelation 13:5–7', note: 'the beast speaks great things for forty-two months' }
    ],
    context: 'Daniel 8:23–25 places its horn within the Greek succession, and Daniel 11:21–39 tracks the career of a king whom historians identify with Antiochus IV Epiphanes in close detail. Whether Daniel 7’s little horn is the same figure, a Roman successor, or a pattern realised repeatedly, is a genuine and long-standing division among interpreters.',
    symbols: ['the boastful horn', 'the taken-away daily sacrifice', 'times and law changed'],
    themes: ['deception', 'temple', 'kingdom'],
    certainty: 'contested',
    interpretations: [
      { framework: 'criticism', text: 'Identifies the horn with Antiochus IV, whose suppression of temple worship in 167 BCE matches Daniel 8:11–12 and 11:31 point for point.' },
      { framework: 'futurism', text: 'Identifies the horn of Daniel 7 with a future ruler arising from a revived fourth kingdom, equated with the beast of Revelation 13.' },
      { framework: 'historicism', text: 'Identifies it with an institution developing within Christendom over centuries rather than a single ruler.' },
      { framework: 'preterism', text: 'Identifies it with a first-century power, most often Rome or a specific emperor.' }
    ],
    related: ['abomination-desolation', 'man-of-lawlessness', 'beast-from-sea'],
    enoch: [] },

  { id: 'man-of-lawlessness', stage: 'adversaries', order: 2, source: 'canonical',
    title: 'The man of lawlessness, and what restrains him',
    summary: 'Paul’s most detailed picture of the final adversary: revealed only after a restraint is removed, taking his seat in the temple of God, undone by the breath of the Lord’s mouth.',
    refs: [
      { book: '2 Thessalonians', ref: '2 Thessalonians 2:1–12' },
      { book: 'Isaiah', ref: 'Isaiah 11:4', note: 'the rod of his mouth — echoed in 2:8' },
      { book: 'Daniel', ref: 'Daniel 11:36' },
      { book: 'Ezekiel', ref: 'Ezekiel 28:2', note: 'a ruler who claims to be a god' }
    ],
    quote: { text: 'Who opposeth and exalteth himself above all that is called God … so that he as God sitteth in the temple of God, shewing himself that he is God.', ref: '2 Thessalonians 2:4', translation: 'KJV, abridged' },
    context: 'The passage is written to calm an alarm, and it says Paul had already explained "the restrainer" in person (2:5) — which is why we cannot recover his meaning with confidence. Candidates proposed across the centuries include the Roman state and its law, the preaching of the gospel, the Holy Spirit, an angelic figure, and God’s own decree. No reading commands consensus, and the site does not choose between them.',
    symbols: ['self-exaltation in the sanctuary', 'the restrainer', 'lying wonders', 'a strong delusion'],
    themes: ['deception', 'temple', 'judgement'],
    certainty: 'contested',
    interpretations: [
      { framework: 'preterism', text: 'Identifies the figure with a first-century individual — often Nero or a Zealot leader — and the temple with the Jerusalem temple before AD 70.' },
      { framework: 'futurism', text: 'Identifies him with the beast of Revelation 13 and a future desecration, commonly requiring a rebuilt temple.' },
      { framework: 'historicism', text: 'Identifies the "temple of God" with the church and the figure with a corrupting power within it.' },
      { framework: 'idealism', text: 'Reads the description as the type of every self-deifying power, its full expression reserved for the end.' }
    ],
    related: ['little-horn', 'beast-from-sea', 'abomination-desolation', 'apostasy'],
    enoch: [] },

  { id: 'antichrists', stage: 'adversaries', order: 3, source: 'canonical',
    title: 'Antichrist, and many antichrists',
    summary: 'The only New Testament letters that use the word "antichrist" define it doctrinally and plurally: those who deny the Father and the Son, of whom many have already come.',
    refs: [
      { book: '1 John', ref: '1 John 2:18–23' },
      { book: '1 John', ref: '1 John 4:1–3' },
      { book: '2 John', ref: '2 John 7' },
      { book: 'Matthew', ref: 'Matthew 24:24', note: 'false messiahs, a different phrase' }
    ],
    quote: { text: 'Even now are there many antichrists; whereby we know that it is the last time.', ref: '1 John 2:18', translation: 'KJV' },
    context: 'This is an important corrective to popular usage. John’s letters never describe a political ruler; they describe teachers who have left the community and who deny the incarnation. The letters also assume their readers already expect a coming antichrist ("ye have heard that antichrist shall come"), so both a singular expectation and a present plural reality are in view.',
    symbols: ['denial of the incarnation', 'the spirit of antichrist', 'the last hour'],
    themes: ['deception'],
    certainty: 'anchored',
    interpretations: [
      { framework: 'idealism', text: 'Takes John’s definition as normative: antichrist is a recurring theological posture rather than a single individual.' },
      { framework: 'futurism', text: 'Combines John’s "antichrist shall come" with 2 Thessalonians 2 and Revelation 13 to expect a single final figure as well as many present ones.' },
      { framework: 'preterism', text: 'Locates the antichrists among first-century secessionists from the Johannine communities.' }
    ],
    related: ['man-of-lawlessness', 'false-messiahs', 'false-prophet'],
    enoch: [] },

  { id: 'beast-from-sea', stage: 'adversaries', order: 4, source: 'canonical',
    title: 'The beast from the sea',
    summary: 'A composite beast combining Daniel’s four, given authority by the dragon, worshipped by the earth, and permitted to make war on the saints for forty-two months.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 13:1–10' },
      { book: 'Revelation', ref: 'Revelation 17:8–14' },
      { book: 'Daniel', ref: 'Daniel 7:3–8, 21', note: 'lion, bear, leopard, and the fourth beast' },
      { book: 'Revelation', ref: 'Revelation 19:19–20', note: 'its end' }
    ],
    context: 'Revelation 13 folds Daniel’s four beasts into one, which suggests a summation of imperial power rather than a fifth empire. The healed mortal wound (13:3) is read by many commentators against the background of the "Nero returning" rumours current in the late first century. Revelation 13:10 responds not with resistance but with a call for the endurance and faith of the saints.',
    symbols: ['seven heads and ten horns', 'the healed wound', 'blasphemous names', 'authority for forty-two months'],
    themes: ['deception', 'kingdom', 'suffering'],
    certainty: 'contested',
    interpretations: [
      { framework: 'preterism', text: 'Identifies the beast with Rome and its imperial cult, often specifically with Nero.' },
      { framework: 'futurism', text: 'Identifies it with a future world ruler and empire; the site does not endorse identifications with living individuals or states.' },
      { framework: 'idealism', text: 'Reads it as the permanent character of state power when it demands the worship owed to God.' },
      { framework: 'historicism', text: 'Reads it as a religio-political system unfolding through church history.' }
    ],
    related: ['four-kingdoms', 'mark-and-number', 'false-prophet', 'babylon-falls'],
    enoch: [] },

  { id: 'false-prophet', stage: 'adversaries', order: 5, source: 'canonical',
    title: 'The beast from the earth, later called the false prophet',
    summary: 'A second beast with lamb-like horns and a dragon’s voice, whose function is entirely derivative: it works signs and makes the earth worship the first beast.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 13:11–17' },
      { book: 'Revelation', ref: 'Revelation 16:13; 19:20; 20:10' },
      { book: 'Deuteronomy', ref: 'Deuteronomy 13:1–5', note: 'signs alone do not authenticate a prophet' },
      { book: 'Matthew', ref: 'Matthew 24:24' }
    ],
    context: 'The trio of dragon, beast, and false prophet forms a counterfeit of the divine three named throughout the book — a parody rather than a rival. Deuteronomy 13 establishes the principle Revelation assumes: a wonder-worker whose message points away from God is thereby exposed, not authenticated.',
    symbols: ['lamb’s horns, dragon’s voice', 'fire called down from heaven', 'the image that speaks'],
    themes: ['deception'],
    certainty: 'contested',
    interpretations: [
      { framework: 'preterism', text: 'Identifies it with the provincial priesthood of the imperial cult, which enforced participation in emperor worship in Asia Minor.' },
      { framework: 'futurism', text: 'Identifies it with a future religious figure promoting the final ruler.' },
      { framework: 'idealism', text: 'Reads it as ideology and propaganda in the service of coercive power in any age.' }
    ],
    related: ['beast-from-sea', 'mark-and-number', 'antichrists'],
    enoch: [] },

  { id: 'mark-and-number', stage: 'adversaries', order: 6, source: 'canonical',
    title: 'The mark, and the number of the beast',
    summary: 'A mark on hand or forehead governing the ability to buy and sell, and a number the text itself invites the reader to calculate — 666, with an early variant reading of 616.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 13:16–18' },
      { book: 'Revelation', ref: 'Revelation 14:9–11' },
      { book: 'Revelation', ref: 'Revelation 7:3', note: 'the counterpart seal on God’s servants' },
      { book: 'Deuteronomy', ref: 'Deuteronomy 6:8', note: 'the commandments bound on hand and forehead' }
    ],
    context: 'The number is introduced as a puzzle requiring wisdom. The most widely held scholarly proposal is gematria on "Nero Caesar" written in Hebrew letters, which totals 666; the Latin spelling of the same name totals 616, which matches an early textual variant attested in some manuscripts. Other proposals read 666 as a symbol of repeated falling short of seven. The mark is best understood in the first instance as the counterfeit of the seal in Revelation 7:3.',
    symbols: ['the mark on hand and forehead', 'gematria', 'the number of a man'],
    themes: ['deception', 'judgement'],
    certainty: 'contested',
    interpretations: [
      { framework: 'preterism', text: 'Reads the number as identifying Nero, with the 616 variant as supporting evidence, and the mark as participation in the commercial and civic life that required imperial honours.' },
      { framework: 'idealism', text: 'Reads mark and seal as symbols of ownership and allegiance — who a person belongs to — rather than a physical token.' },
      { framework: 'futurism', text: 'Reads a literal future system of identification controlling commerce. Identifying any particular present-day technology with the mark is speculative, and this site makes no such identification.' }
    ],
    related: ['sealed-144000', 'beast-from-sea', 'false-prophet'],
    enoch: [] },

  { id: 'dragon-satan', stage: 'adversaries', order: 7, source: 'canonical',
    title: 'The dragon, the ancient serpent',
    summary: 'Revelation gathers four names into one identification — dragon, ancient serpent, devil, Satan — and describes his defeat as already accomplished and his time as short.',
    refs: [
      { book: 'Revelation', ref: 'Revelation 12:9–12' },
      { book: 'Revelation', ref: 'Revelation 20:2, 7–10' },
      { book: 'Job', ref: 'Job 1:6–12; 2:1–7', note: 'the accuser in the heavenly court' },
      { book: 'Zechariah', ref: 'Zechariah 3:1–2' },
      { book: 'Luke', ref: 'Luke 10:18' },
      { book: 'John', ref: 'John 12:31', note: 'the ruler of this world cast out' }
    ],
    context: 'In the Hebrew Bible the term "the satan" is a role — the accuser or adversary — within the heavenly court, not yet a proper name. The identification of that figure with the serpent of Genesis 3 and with a personal opponent of God develops in the Second Temple period and is stated explicitly in Revelation 12:9. Revelation ties his fall to the death and exaltation of Christ (12:10–11), not to a primeval event.',
    symbols: ['the accuser', 'the dragon’s tail sweeping stars', 'short time remaining'],
    themes: ['deception', 'watchers', 'judgement'],
    certainty: 'symbolic',
    interpretations: [
      { framework: 'amillennialism', text: 'Connects Revelation 12:9 with 20:2 and Luke 10:18: the decisive binding occurs at the first coming, restricting deception among the nations during the present age.' },
      { framework: 'premillennialism', text: 'Distinguishes the casting down of chapter 12 from the binding of chapter 20, placing the latter after the return of Christ.' },
      { framework: 'criticism', text: 'Traces the development of the figure from the accuser of Job and Zechariah to the fully adversarial Satan of Second Temple literature and the New Testament.' }
    ],
    related: ['transgression', 'satan-bound', 'satan-released', 'woman-dragon-child'],
    enoch: [ { ref: '1 Enoch 54:1–6; 69:4–12', relation: 'shared-tradition',
      text: '1 Enoch speaks of "the satans" in the plural and of Azazel and his hosts prepared for punishment. The Enochic tradition attributes evil chiefly to the fallen Watchers rather than to one adversary — a different account of the origin of evil from the one Revelation assumes.' } ]
  }

  );
})(window.AD);
