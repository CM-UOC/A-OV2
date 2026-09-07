/* Contested order — five reconstructions shown in parallel.
   None is presented as the correct sequence. */
(function (AD) {
  'use strict';

  AD.data.sequences = [
    { id: 'dispensational', framework: 'futurism', color: 'var(--st-cosmos)',
      name: 'Dispensational premillennial',
      note: 'Pretribulational. Distinguishes Israel and the church, and separates the removal of the church from the public return.',
      steps: [
        { title: 'The present church age', note: 'A period not specified in Old Testament prophecy; the prophetic clock for Israel is paused between Daniel’s sixty-ninth and seventieth weeks.', events: ['gospel-to-nations'] },
        { title: 'The church is caught up', note: '1 Thessalonians 4:16–17, understood as an event distinct from and prior to the public return.', events: ['caught-up'] },
        { title: 'A seven-year period begins', note: 'Daniel’s seventieth week; a covenant made with many and broken at its midpoint (Daniel 9:27).', events: ['seventy-weeks'] },
        { title: 'The beast revealed; the sacrilege', note: 'The final adversary desecrates a rebuilt temple at the midpoint.', events: ['man-of-lawlessness', 'abomination-desolation', 'beast-from-sea'] },
        { title: 'The great tribulation', note: 'The second half of the period; seals, trumpets, and bowls run their course.', events: ['great-tribulation', 'seven-bowls'] },
        { title: 'Armageddon', note: 'The gathering of the kings.', events: ['armageddon'] },
        { title: 'The visible return of Christ', note: 'Revelation 19:11–21, distinguished from the earlier removal of the church.', events: ['rider-white-horse'] },
        { title: 'Judgement of the nations', note: 'Matthew 25:31–46, often read as a judgement of survivors entering the kingdom.', events: ['sheep-goats'] },
        { title: 'The millennial kingdom', note: 'A thousand years with Christ reigning from Jerusalem; Satan bound.', events: ['satan-bound', 'first-resurrection', 'wolf-and-lamb'] },
        { title: 'The final revolt', note: 'Satan released, the nations gathered, fire from heaven.', events: ['satan-released'] },
        { title: 'The great white throne', note: 'Judgement of the dead.', events: ['great-white-throne'] },
        { title: 'New heavens and new earth', note: 'The eternal state.', events: ['new-heavens-new-earth', 'new-jerusalem'] }
      ] },

    { id: 'historic-premil', framework: 'premillennialism', color: 'var(--st-parousia)',
      name: 'Historic premillennial',
      note: 'Posttribulational. One return, one people of God; the church passes through the tribulation.',
      steps: [
        { title: 'The present age', note: 'Tribulation and gospel proclamation together; the kingdom already inaugurated but not consummated.', events: ['gospel-to-nations', 'persecution-foretold'] },
        { title: 'Apostasy, and the adversary revealed', note: '2 Thessalonians 2:3 — both precede the day.', events: ['apostasy', 'man-of-lawlessness'] },
        { title: 'The great tribulation', note: 'The church is present and endures it; the days are shortened for the elect.', events: ['great-tribulation'] },
        { title: 'Cosmic signs', note: '"Immediately after the tribulation of those days" (Matthew 24:29).', events: ['sun-darkened'] },
        { title: 'The return of Christ', note: 'One event: the resurrection of the righteous, and the living caught up to meet and accompany him.', events: ['son-of-man-comes', 'caught-up', 'last-trumpet'] },
        { title: 'Judgement of the beast', note: 'Revelation 19:19–21.', events: ['rider-white-horse'] },
        { title: 'The millennium', note: 'Satan bound; the risen saints reign.', events: ['satan-bound', 'first-resurrection'] },
        { title: 'The final revolt', note: 'Satan released for a little while.', events: ['satan-released'] },
        { title: 'Resurrection of the rest; last judgement', note: 'The great white throne.', events: ['great-white-throne'] },
        { title: 'New creation', note: 'Revelation 21–22.', events: ['new-heavens-new-earth', 'no-more-death'] }
      ] },

    { id: 'amillennial', framework: 'amillennialism', color: 'var(--st-signs)',
      name: 'Amillennial',
      note: 'The thousand years are the present age. Revelation 20 recapitulates rather than continues Revelation 19.',
      steps: [
        { title: 'The first coming inaugurates the kingdom', note: 'The strong man bound (Matthew 12:29); Satan restrained from deceiving the nations.', events: ['satan-bound', 'joel-spirit'] },
        { title: 'The present age is the thousand years', note: 'A symbolic figure for the whole period between the advents.', events: ['first-resurrection'] },
        { title: 'The faithful dead reign with Christ', note: 'The "first resurrection" understood as life with Christ between death and the resurrection of the body.', events: ['martyrs-under-altar'] },
        { title: 'Tribulation and gospel advance run together', note: 'Both characterise the whole age; neither is confined to a final period.', events: ['great-tribulation', 'gospel-to-nations', 'lawlessness-increases'] },
        { title: 'A final intensification', note: 'Satan released "for a little while"; the last apostasy and the adversary revealed.', events: ['satan-released', 'man-of-lawlessness'] },
        { title: 'The return of Christ — a single event', note: 'Visible, public, and unmistakable.', events: ['son-of-man-comes', 'every-eye-sees'] },
        { title: 'The general resurrection', note: 'The righteous and the unrighteous in one "hour" (John 5:28–29).', events: ['general-resurrection', 'caught-up'] },
        { title: 'The last judgement', note: 'One judgement with two outcomes.', events: ['great-white-throne', 'sheep-goats'] },
        { title: 'New heavens and new earth', note: 'The renewal of creation, not its replacement.', events: ['new-heavens-new-earth', 'no-more-curse'] }
      ] },

    { id: 'postmillennial', framework: 'postmillennialism', color: 'var(--st-restoration)',
      name: 'Postmillennial',
      note: 'The millennium is a future era within history, brought about by the success of the gospel; Christ returns at its end.',
      steps: [
        { title: 'The first coming inaugurates the kingdom', note: 'All authority given; the commission issued.', events: ['gospel-to-nations'] },
        { title: 'The gospel advances', note: 'Growth parables understood as describing genuine, eventual permeation.', events: ['abraham-promise'] },
        { title: 'A large-scale turning', note: 'Including, in most versions, the fullness of the Gentiles and the salvation of Israel (Romans 11:25–26).', events: ['all-israel-saved'] },
        { title: 'An era of widespread righteousness', note: 'The millennium: within history, and not necessarily a literal thousand years.', events: ['nations-stream', 'first-resurrection'] },
        { title: 'A brief final apostasy', note: 'Revelation 20:7–9, at the close of the era.', events: ['satan-released'] },
        { title: 'The return of Christ', note: 'A single, public return.', events: ['son-of-man-comes'] },
        { title: 'General resurrection and judgement', note: 'Both groups raised; one judgement.', events: ['general-resurrection', 'great-white-throne'] },
        { title: 'New creation', note: 'The eternal state.', events: ['new-heavens-new-earth'] }
      ] },

    { id: 'preterist', framework: 'preterism', color: 'var(--st-tribulation)',
      name: 'Partial preterist',
      note: 'The Olivet Discourse and much of Revelation describe the first century. The return, resurrection, and judgement remain future.',
      steps: [
        { title: 'The ministry, death, and exaltation of Jesus', note: 'The kingdom inaugurated; the Son of Man enthroned (Daniel 7:13–14 read as ascent to the throne).', events: ['son-of-man-daniel'] },
        { title: 'The apostolic generation', note: 'Persecution, false messiahs, and the gospel spread through the Roman world.', events: ['persecution-foretold', 'false-messiahs', 'gospel-to-nations'] },
        { title: 'The Jewish revolt', note: 'From AD 66; the conditions Jesus described.', events: ['birth-pangs', 'abomination-desolation'] },
        { title: 'AD 70: the temple destroyed', note: 'Read as "the coming of the Son of Man" in judgement, within "this generation" (Matthew 24:34).', events: ['jerusalem-destroyed', 'great-tribulation', 'sun-darkened'] },
        { title: 'Judgement on the persecuting power', note: 'The fall of Babylon, identified with Rome or with Jerusalem depending on the reading.', events: ['babylon-falls'] },
        { title: 'The present age', note: 'Christ reigns; most partial preterists are amillennial or postmillennial about the thousand years.', events: ['first-resurrection'] },
        { title: 'The return of Christ — still future', note: 'Bodily, visible, and not yet.', events: ['every-eye-sees', 'revealed-in-fire'] },
        { title: 'Resurrection and final judgement', note: 'Future and general.', events: ['general-resurrection', 'great-white-throne'] },
        { title: 'New heavens and new earth', note: 'The consummation.', events: ['new-heavens-new-earth'] }
      ] }
  ];

  AD.data.divergences = [
    { q: 'Is the tribulation past, present, or future?',
      a: 'Preterism places it in the first century; idealism and amillennialism treat it as characteristic of the whole age; futurism places it in a defined future period. The word itself (thlipsis) is used in the New Testament of ordinary Christian hardship (John 16:33) as well as of the crisis in view here.' },
    { q: 'Is there one return or two stages?',
      a: 'Only dispensational premillennialism distinguishes a removal of the church from the later public return. Every other framework here reads a single event, though they place it differently in the sequence.' },
    { q: 'Does Revelation 20 follow Revelation 19 in time?',
      a: 'Premillennialism says yes. Amillennialism and most idealist readings say the book recapitulates, and that chapter 20 restarts from the first coming. Almost every other disagreement about the millennium follows from this one.' },
    { q: 'What is "the first resurrection"?',
      a: 'A bodily raising of the righteous before the millennium (premillennialism), or the reign of the faithful dead with Christ between death and the general resurrection (amillennialism). The Greek verb ezēsan in Revelation 20:4–5 is the crux.' },
    { q: 'Is the millennium earthly, heavenly, or historical?',
      a: 'Future and earthly (premillennialism), present and heavenly (amillennialism), or future and within history (postmillennialism). Only Revelation 20:1–6 mentions the thousand years at all.' },
    { q: 'Are cosmic signs literal or idiomatic?',
      a: 'The prophets used sun-and-moon imagery for the fall of Babylon, Egypt, and Edom. Preterism and idealism read the New Testament’s use the same way; futurism reads literal astronomical disturbance. The texts themselves do not resolve it.' },
    { q: 'Does Israel retain a distinct future?',
      a: 'Dispensationalism says yes, on the basis of unconditional land promises. Covenantal readings say the promises find their scope in Christ and are extended to all his people (Galatians 3:29; Romans 4:13). Romans 11:25–26 is read in support of both.' }
  ];
})(window.AD);
