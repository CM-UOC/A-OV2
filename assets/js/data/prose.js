/* Long-form prose: introduction and methodology. */
(function (AD) {
  'use strict';

  AD.data.intro = {
    eyebrow: 'Genesis 1 to Revelation 22',
    title: 'The Appointed Time',
    lede: 'An interactive chronology of what the biblical texts say about the beginning of all things and the end of the present age — with the interpretations kept visibly separate from the words.',
    arc: 'From the first light to the city with no need of sun',
    sections: [
      { h: 'What apocalyptic literature is',
        p: ['The word apocalypse means unveiling. As a literary genre it describes a particular kind of writing that flourished in Judaism and early Christianity roughly between the third century BCE and the second century CE: a narrative in which a human recipient is shown, by an angel or another heavenly figure, a reality normally hidden — the throne room of God, the structure of the cosmos, the meaning of history, or its end.',
             'Apocalyptic writing has recognisable habits. It uses vision rather than argument. It works in symbols whose meaning is sometimes explained and sometimes not. It uses numbers for significance as much as for quantity. It often comes to us under the name of an ancient figure — Enoch, Daniel, Ezra, Baruch — rather than its actual author. And it tends to appear when a community is under pressure, offering a view from above of a situation that looks, from below, hopeless.',
             'Recognising the genre is not a way of explaining these texts away. It is a way of reading them as their first audiences did: not as coded newspapers, but as literature designed to reframe a present crisis by placing it inside a larger frame.'] },
      { h: 'Why this site begins with Genesis',
        p: ['The last chapters of the Bible are written as a deliberate answer to its first. A garden with a river and a tree of life becomes a city with a river and a tree of life. A serpent that deceives becomes an ancient serpent judged. A curse on the ground is lifted. Cherubim who guard the way become gates that never close. Nations scattered at Babel are gathered from every language.',
             'Scholars have a shorthand for this correspondence: Urzeit gleicht Endzeit, primeval time resembles end time. It is not a decorative parallel; it determines what these texts think the end is for. The hope is not escape from creation but its restoration. That is why the chronology here opens at Genesis 1 rather than at the first explicit prophecy, and why a separate view sets each beginning beside its ending.'] },
      { h: 'How this site is built',
        p: ['Every event card separates two things that are usually blended. **What the text says** gives the description and the exact references. **How it has been read** gives the interpretations, each attributed to a named tradition. If a claim appears in the second block, it is interpretation — including interpretations held by large numbers of people for a long time.',
             'Where the order of events is disputed, the site does not choose. The chronology is organised into nine broad stages, and a separate view shows five different reconstructions of the sequence side by side, so that the disagreements are visible rather than hidden inside a single line.',
             'The Book of 1 Enoch appears throughout as a clearly marked comparative source. It is canonical in the Ethiopian Orthodox Tewahedo Church and is not canonical in Jewish, Catholic, Orthodox, or Protestant traditions. Its entries carry a dashed border and a comparative label, and can be filtered out entirely.'] },
      { h: 'What this site will not do',
        p: ['It will not calculate or predict a date for the end of the world. The texts themselves exclude this, and the historical record of attempts is uniform.',
             'It will not identify any contemporary person, government, religion, technology, or event as the fulfilment of a prophecy. Where a framework has historically made such identifications, that fact is recorded as part of describing the framework — not endorsed.',
             'It will not present a contested interpretation as an established fact, and it will not invent references, quotations, dates, or scholarly claims. Where the evidence is genuinely unsettled, the site says so.'] }
    ],
    howto: [
      { k: 'Chronology', v: 'Nine stages from Genesis to the new creation. Filter by book, testament, theme, tradition, certainty, or source; open any card for the full entry.' },
      { k: 'Beginning & End', v: 'Twelve pairs setting a Genesis motif beside its counterpart in the new creation.' },
      { k: 'Contested order', v: 'Five interpretive reconstructions in parallel, with the specific points of divergence named.' },
      { k: 'Frameworks', v: 'Seven Christian frameworks plus three interpretive lenses; select up to three to compare directly.' },
      { k: '1 Enoch', v: 'The comparative source in full: its booklets, its themes, and the limits of what parallels can prove.' },
      { k: 'Canon survey', v: 'All sixty-six books assessed for relevant material, including those that have none.' },
      { k: 'Passage map', v: 'Quotations, allusions, and shared traditions between the Hebrew Bible, 1 Enoch, and the New Testament.' }
    ]
  };

  AD.data.methodology = {
    title: 'Methodology',
    lede: 'How the texts were selected, how they are organised, and what the labels mean.',
    sections: [
      { h: 'Selection',
        p: ['A passage is included when it makes a claim about the beginning of the world or about the end of the present age — its signs, its adversaries, its judgement, its consummation — or when it supplies imagery that the eschatological texts demonstrably reuse.',
             'No book is forced into the timeline. Books with no directly relevant material are listed in the canon survey with that stated plainly, so the survey is complete without inflating it. Books that supply background but no prophecy of the end are marked as such rather than promoted.'] },
      { h: 'Organisation',
        p: ['The nine stages are an editorial frame, not a claim about a single chronology. Their order broadly follows the shape most frameworks recognise — foundations, signs, distress, adversaries, cosmic disturbance, coming, judgement, consummation — with Genesis added at the head because the concluding texts are written as its answer.',
             'Placement within a stage is not a claim that an event follows the one above it in time. Where placement is itself contested, the certainty label says so, and the contested-order view shows the alternatives.'] },
      { h: 'The certainty scale',
        p: ['The four levels describe confidence about **chronological position**, not about truth, importance, or authority. A passage may be central to Christian faith and still be marked contested here, because traditions place it at different points in a sequence.'] },
      { h: 'Quotations and translations',
        p: ['Quotations are given in public-domain translations, identified after each quotation, and kept short. Where a translation is abridged the label says so. Every event carries exact chapter-and-verse references so that any reader can check the passage in a translation of their choice.',
             'Where versification differs between Hebrew and English editions — as in Joel 2:28–32 and Malachi 4 — both are noted.'] },
      { h: 'Attribution of interpretations',
        p: ['Every interpretation is attributed to a named framework or lens. Descriptions aim to state each position as its own adherents would recognise it, and each framework entry includes limitations and disputed assumptions alongside its arguments.',
             'Where scholarship is genuinely divided — the date of Revelation, the date of the Book of Parables, the identity of Daniel’s fourth kingdom — the division is reported rather than resolved.'] },
      { h: 'Handling 1 Enoch',
        p: ['1 Enoch is treated as a comparative source throughout and is never merged with biblical material. Parallels are labelled by type: quotation, parallel, shared tradition, or contrast. A literary parallel is not treated as evidence of dependence unless the relationship is documented — which, for the New Testament, is essentially the single case of Jude 14–15 quoting 1 Enoch 1:9.'] },
      { h: 'Known limits',
        p: ['The site describes Christian eschatological frameworks in detail and Jewish interpretation only where it bears on shared texts; it is not a survey of Jewish eschatology, which would require its own treatment.',
             'Coverage of the Enochic corpus is thematic rather than complete, and other Second Temple apocalypses — 4 Ezra, 2 Baruch, Jubilees, the Qumran material — are mentioned as context but not catalogued.',
             'Reception history stops at the framing of the major positions; it does not attempt a history of interpretation century by century.'] }
    ]
  };
})(window.AD);
