/* Canon, apocrypha, pseudepigrapha, and the status of 1 Enoch. */
(function (AD) {
  'use strict';

  AD.data.canonTerms = [
    { term: 'Canon', def: 'The list of books a community receives as scripture. The word comes from Greek kanōn, a measuring rod or standard. Canons were formed gradually and differ between communities; there has never been a single list held by all Jews and Christians.' },
    { term: 'Protocanonical', def: 'A term used mainly in Catholic scholarship for the books received without significant dispute — those common to the Jewish and all Christian Old Testaments.' },
    { term: 'Deuterocanonical', def: 'Books received as scripture by the Catholic and Orthodox churches but not in the Jewish canon or in Protestant Bibles: Tobit, Judith, Wisdom, Sirach, Baruch, 1–2 Maccabees, and additions to Esther and Daniel. Orthodox canons include several further books.' },
    { term: 'Apocrypha', def: 'Literally "hidden things". In Protestant usage it names the deuterocanonical books, often printed as a separate section — useful but not doctrinally normative. In Catholic usage the same word is applied to what Protestants call pseudepigrapha, so the term must always be qualified by tradition.' },
    { term: 'Pseudepigrapha', def: 'Jewish and Christian writings attributed to figures who did not write them — Enoch, Moses, Ezra, Baruch, the twelve patriarchs. The attribution was a recognised convention of the genre rather than a simple forgery, though ancient readers did dispute it.' },
    { term: 'Pseudonymity', def: 'Writing in another’s name. In apocalyptic literature it typically places a revelation in the mouth of an ancient figure, which lets the writer present history up to their own time as prophecy — a device scholars call vaticinium ex eventu, prophecy after the event.' }
  ];

  AD.data.canonTraditions = [
    { id: 'jewish', name: 'Jewish (Tanakh)', extent: '24 books', enoch: 'Not canonical',
      note: 'Torah, Nevi’im, Ketuvim — the same content as the Protestant Old Testament, differently arranged and counted. Enochic writings were known at Qumran but did not enter the rabbinic canon.' },
    { id: 'protestant', name: 'Protestant', extent: '39 Old Testament, 27 New Testament', enoch: 'Not canonical',
      note: 'Follows the Jewish canon for the Old Testament. The deuterocanonical books are usually excluded or printed separately as "the Apocrypha".' },
    { id: 'catholic', name: 'Roman Catholic', extent: '46 Old Testament, 27 New Testament', enoch: 'Not canonical',
      note: 'Includes the deuterocanonical books, affirmed at the Council of Trent (1546). 1 Enoch is classed as apocryphal in the Catholic sense of that word.' },
    { id: 'orthodox', name: 'Eastern Orthodox', extent: 'Wider Old Testament, 27 New Testament', enoch: 'Not canonical',
      note: 'Receives the deuterocanonical books together with several others — 1 Esdras, 3 Maccabees, Prayer of Manasseh, Psalm 151 — with some variation between churches.' },
    { id: 'tewahedo', name: 'Ethiopian Orthodox Tewahedo', extent: 'The broadest canon in use, commonly numbered at 81 books', enoch: 'Canonical — Henok',
      note: 'The only major church to retain 1 Enoch as scripture, alongside Jubilees and other books not received elsewhere. The complete text of 1 Enoch survives only in Ge’ez, in this church’s manuscript tradition.' }
  ];

  AD.data.enochTransmission = [
    { label: 'Aramaic', detail: 'Fragments of every part of the corpus except the Book of Parables were found among the Dead Sea Scrolls at Qumran (4Q201–212), establishing that the collection existed in Aramaic well before the first century CE.' },
    { label: 'Greek', detail: 'Substantial portions survive, notably the Akhmim (Panopolitanus) manuscript covering much of chapters 1–32, further fragments in the Chester Beatty papyri, and quotations preserved by the Byzantine chronicler George Syncellus.' },
    { label: 'Ge’ez (Ethiopic)', detail: 'The only complete text, transmitted continuously in the Ethiopian Orthodox Tewahedo Church, where the book is canonical. All modern editions depend on this tradition for the whole work.' },
    { label: 'Return to European scholarship', detail: 'James Bruce brought Ge’ez manuscripts from Ethiopia to Europe in 1773; Richard Laurence published the first English translation in 1821; R. H. Charles produced the standard critical editions and translation in the early twentieth century. The Hermeneia commentary of Nickelsburg and VanderKam is the current standard.' }
  ];

  AD.data.enochReception = [
    { who: 'Jude', when: 'First century', what: 'Quotes 1 Enoch 1:9 as prophecy of "Enoch, the seventh from Adam" (Jude 14–15) and alludes to the Watchers tradition (Jude 6).' },
    { who: 'Tertullian', when: 'c. 155–220', what: 'Argued for the book’s authority, partly on the grounds that Jude cites it — an early and explicit defence.' },
    { who: 'Origen', when: 'c. 185–253', what: 'Knew and cited the work, while noting that it was not universally received as scripture.' },
    { who: 'Jerome and Augustine', when: 'Fourth to fifth century', what: 'Did not accept it. Augustine acknowledged that Enoch wrote something, on Jude’s testimony, while denying that the circulating book was reliably his.' },
    { who: 'Ethiopian Orthodox Tewahedo Church', when: 'Continuous', what: 'Retains Henok in its canon and preserved the complete text, which survives nowhere else.' }
  ];

  AD.data.canonNotes = [
    'Canonical status is a fact about communities, not about a text’s antiquity or interest. 1 Enoch is older than several New Testament books and was widely read; that is a separate question from whether a given tradition receives it as scripture.',
    'Quotation does not confer canonicity. Jude quotes 1 Enoch; Paul quotes the Greek poets Aratus (Acts 17:28) and Epimenides (Titus 1:12). Citation shows a text was known and considered apt.',
    'This site keeps the two bodies of material visually and structurally separate. Every 1 Enoch entry is marked as comparative, carries a dashed border, and can be filtered out entirely.'
  ];
})(window.AD);
