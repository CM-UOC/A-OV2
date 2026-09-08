/* Texto de las escenas en los cuatro idiomas, redactado en cada lengua.
   Cada cita usa la traducción de dominio público propia del idioma:
     es · Reina-Valera 1909      en · King James Version
     de · Lutherbibel 1912       fr · Louis Segond 1910 */
(function (AD) {
  'use strict';

  var TR = {
    es: 'Reina-Valera 1909', en: 'King James Version',
    de: 'Lutherbibel 1912',  fr: 'Louis Segond 1910'
  };
  AD.data.bibleTranslations = TR;

  AD.data.sceneText = {
    prologue: {
      kicker: { es: 'Génesis 1 — Apocalipsis 22', en: 'Genesis 1 — Revelation 22', de: '1. Mose 1 — Offenbarung 22', fr: 'Genèse 1 — Apocalypse 22' },
      name:   { es: 'El Tiempo Señalado', en: 'The Appointed Time', de: 'Die bestimmte Zeit', fr: 'Le Temps fixé' },
      line:   { es: 'Un recorrido por lo que los textos dicen sobre el principio de todo y sobre el final de esta edad.',
                en: 'A journey through what the texts say about the beginning of all things, and the end of the present age.',
                de: 'Ein Gang durch das, was die Texte über den Anfang aller Dinge und über das Ende dieses Zeitalters sagen.',
                fr: 'Un parcours de ce que les textes disent du commencement de toutes choses et de la fin du temps présent.' },
      place:  { es: 'Antes de la primera luz', en: 'Before the first light', de: 'Vor dem ersten Licht', fr: 'Avant la première lumière' }
    },
    origins: {
      kicker: { es: 'Tinta de carbón y bistre', en: 'Carbon and bistre ink', de: 'Ruß- und Bistertinte', fr: 'Encre de carbone et bistre' },
      name:   { es: 'El principio de todo', en: 'The beginning of all things', de: 'Der Anfang aller Dinge', fr: 'Le commencement de toutes choses' },
      line:   { es: 'La luz separada de las tinieblas. Un huerto, un río y un árbol que queda vedado.',
                en: 'Light divided from darkness. A garden, a river, and a tree that is guarded.',
                de: 'Licht von der Finsternis geschieden. Ein Garten, ein Strom und ein Baum, der bewacht wird.',
                fr: 'La lumière séparée des ténèbres. Un jardin, un fleuve, et un arbre dont l’accès est gardé.' },
      place:  { es: 'Sobre la faz del abismo', en: 'Over the face of the deep', de: 'Über der Tiefe', fr: 'Sur la face de l’abîme' },
      quote:  { es: 'En el principio crió Dios los cielos y la tierra.',
                en: 'In the beginning God created the heaven and the earth.',
                de: 'Am Anfang schuf Gott Himmel und Erde.',
                fr: 'Au commencement, Dieu créa les cieux et la terre.' },
      qref:   'Genesis 1:1'
    },
    foundations: {
      kicker: { es: 'Tinta ferrogálica', en: 'Iron gall', de: 'Eisengallustinte', fr: 'Encre ferro-gallique' },
      name:   { es: 'Los cimientos proféticos', en: 'Earlier prophetic foundations', de: 'Die prophetischen Grundlagen', fr: 'Les fondations prophétiques' },
      line:   { es: 'Los profetas anuncian un día que todavía no ha llegado.',
                en: 'The prophets name a day that has not yet come.',
                de: 'Die Propheten nennen einen Tag, der noch nicht gekommen ist.',
                fr: 'Les prophètes annoncent un jour qui n’est pas encore venu.' },
      place:  { es: 'El desierto, de noche', en: 'The wilderness, by night', de: 'Die Wüste, bei Nacht', fr: 'Le désert, la nuit' },
      quote:  { es: '¿No será el día de Jehová tinieblas, y no luz?',
                en: 'The day of the LORD is darkness, and not light.',
                de: 'Denn des HERRN Tag ist Finsternis und nicht Licht.',
                fr: 'Le jour de l’Éternel n’est-il pas ténèbres et non lumière ?' },
      qref:   'Amos 5:20'
    },
    signs: {
      kicker: { es: 'Verdigrís', en: 'Verdigris', de: 'Grünspan', fr: 'Vert-de-gris' },
      name:   { es: 'Señales y condiciones', en: 'Signs and conditions', de: 'Zeichen und Umstände', fr: 'Signes et conditions' },
      line:   { es: 'Guerras, rumores, engaños — y aún no es el fin.',
                en: 'Wars, rumours, deceptions — and the end is not yet.',
                de: 'Kriege, Gerüchte, Verführung — und noch ist es nicht das Ende.',
                fr: 'Guerres, rumeurs, tromperies — et ce n’est pas encore la fin.' },
      place:  { es: 'La serranía, al amanecer', en: 'The hill country, at first light', de: 'Das Bergland, im ersten Licht', fr: 'La montagne, au point du jour' },
      quote:  { es: 'Mirad que no os turbéis; porque es menester que todo esto acontezca; mas aún no es el fin.',
                en: 'All these things must come to pass, but the end is not yet.',
                de: 'Das muß zum ersten alles geschehen; aber es ist noch nicht das Ende da.',
                fr: 'Il faut que ces choses arrivent. Mais ce ne sera pas encore la fin.' },
      qref:   'Matthew 24:6'
    },
    tribulation: {
      kicker: { es: 'Ocre rojo', en: 'Red ochre', de: 'Roter Ocker', fr: 'Ocre rouge' },
      name:   { es: 'Tribulación y juicio', en: 'Tribulation and judgement', de: 'Trübsal und Gericht', fr: 'Tribulation et jugement' },
      line:   { es: 'No quedará piedra sobre piedra.',
                en: 'Not one stone left upon another.',
                de: 'Kein Stein wird auf dem anderen bleiben.',
                fr: 'Il ne restera pas pierre sur pierre.' },
      place:  { es: 'Una ciudad en ruinas, bajo el humo', en: 'A city in ruin, under smoke', de: 'Eine Stadt in Trümmern, unter Rauch', fr: 'Une ville en ruines, sous la fumée' },
      quote:  { es: 'Porque habrá entonces grande aflicción, cual no fué desde el principio del mundo hasta ahora.',
                en: 'Then shall be great tribulation.',
                de: 'Denn es wird alsbald eine große Trübsal sein, wie nicht gewesen ist von Anfang der Welt.',
                fr: 'Car alors, la détresse sera si grande qu’il n’y en a point eu de pareille depuis le commencement du monde.' },
      qref:   'Matthew 24:21'
    },
    adversaries: {
      kicker: { es: 'Púrpura de Tiro', en: 'Tyrian purple', de: 'Purpur', fr: 'Pourpre de Tyr' },
      name:   { es: 'Figuras de engaño y poder', en: 'Deceptive and adversarial figures', de: 'Verführung und Widersacher', fr: 'Figures de tromperie et d’opposition' },
      line:   { es: 'Poderes que piden ser adorados. Los textos describen papeles, nunca nombres propios.',
                en: 'Powers that ask to be worshipped. The texts describe roles, never names.',
                de: 'Mächte, die Anbetung fordern. Die Texte beschreiben Rollen, nie Namen.',
                fr: 'Des puissances qui réclament d’être adorées. Les textes décrivent des rôles, jamais des noms.' },
      place:  { es: 'Una columnata al anochecer', en: 'A colonnade at dusk', de: 'Eine Säulenhalle in der Dämmerung', fr: 'Une colonnade au crépuscule' },
      quote:  { es: 'Y ahora han comenzado á ser muchos antichristos.',
                en: 'Even now are there many antichrists.',
                de: 'Und nun sind viele Widerchristen geworden.',
                fr: 'Il y a maintenant plusieurs antichrists.' },
      qref:   '1 John 2:18'
    },
    cosmos: {
      kicker: { es: 'Lapislázuli', en: 'Lapis lazuli', de: 'Lapislazuli', fr: 'Lapis-lazuli' },
      name:   { es: 'Conmoción cósmica', en: 'Cosmic disturbances', de: 'Kosmische Erschütterung', fr: 'Bouleversements cosmiques' },
      line:   { es: 'El sol oscurecido, la luna como sangre — lenguaje profético para un orden que se derrumba.',
                en: 'The sun darkened, the moon like blood — prophetic idiom for an order collapsing.',
                de: 'Die Sonne verfinstert, der Mond wie Blut — prophetische Rede für eine Ordnung, die zusammenbricht.',
                fr: 'Le soleil obscurci, la lune comme du sang — langage prophétique pour un ordre qui s’effondre.' },
      place:  { es: 'Tierras altas, bajo el eclipse', en: 'High country, under eclipse', de: 'Hochland, unter der Finsternis', fr: 'Les hauteurs, sous l’éclipse' },
      quote:  { es: 'Y las virtudes de los cielos serán conmovidas.',
                en: 'The powers of the heavens shall be shaken.',
                de: 'Und die Kräfte der Himmel werden sich bewegen.',
                fr: 'Et les puissances des cieux seront ébranlées.' },
      qref:   'Matthew 24:29'
    },
    parousia: {
      kicker: { es: 'Pan de oro', en: 'Gold leaf', de: 'Blattgold', fr: 'Feuille d’or' },
      name:   { es: 'La venida del Mesías', en: 'The coming of the Messiah', de: 'Das Kommen des Messias', fr: 'La venue du Messie' },
      line:   { es: 'Pública, visible, inconfundible — y la hora no se revela.',
                en: 'Public, visible, unmistakable — and the hour is not disclosed.',
                de: 'Öffentlich, sichtbar, unverkennbar — und die Stunde bleibt verborgen.',
                fr: 'Publique, visible, incontestable — et l’heure n’est pas révélée.' },
      place:  { es: 'Sobre el mar de nubes', en: 'Above the cloud line', de: 'Über der Wolkendecke', fr: 'Au-dessus de la mer de nuages' },
      quote:  { es: 'He aquí que viene con las nubes, y todo ojo le verá.',
                en: 'Behold, he cometh with clouds; and every eye shall see him.',
                de: 'Siehe, er kommt mit den Wolken, und es werden ihn sehen alle Augen.',
                fr: 'Voici, il vient avec les nuées. Et tout œil le verra.' },
      qref:   'Revelation 1:7'
    },
    judgement: {
      kicker: { es: 'Laca de rubia', en: 'Madder lake', de: 'Krapplack', fr: 'Laque de garance' },
      name:   { es: 'Resurrección y juicio', en: 'Resurrection and final judgement', de: 'Auferstehung und Gericht', fr: 'Résurrection et jugement' },
      line:   { es: 'Los muertos resucitan. Los libros se abren. Nada queda sin cuenta.',
                en: 'The dead are raised. The books are opened. Nothing is unaccounted for.',
                de: 'Die Toten werden auferweckt. Die Bücher werden aufgetan. Nichts bleibt unbedacht.',
                fr: 'Les morts ressuscitent. Les livres sont ouverts. Rien n’échappe au compte.' },
      place:  { es: 'Aguas quietas, luz alta', en: 'Still water, high light', de: 'Stilles Wasser, hohes Licht', fr: 'Eaux calmes, lumière haute' },
      quote:  { es: 'Y vi los muertos, grandes y pequeños, que estaban delante de Dios.',
                en: 'And I saw the dead, small and great, stand before God.',
                de: 'Und ich sah die Toten, beide, groß und klein, stehen vor Gott.',
                fr: 'Et je vis les morts, les grands et les petits, qui se tenaient devant le trône.' },
      qref:   'Revelation 20:12'
    },
    restoration: {
      kicker: { es: 'Malaquita', en: 'Malachite', de: 'Malachit', fr: 'Malachite' },
      name:   { es: 'Restauración y nueva creación', en: 'Restoration and new creation', de: 'Wiederherstellung und neue Schöpfung', fr: 'Restauration et création nouvelle' },
      line:   { es: 'Una ciudad, un río, un árbol — y ya no habrá maldición.',
                en: 'A city, a river, a tree — and no more curse.',
                de: 'Eine Stadt, ein Strom, ein Baum — und kein Fluch mehr.',
                fr: 'Une ville, un fleuve, un arbre — et plus de malédiction.' },
      place:  { es: 'La ciudad, en luz dorada', en: 'The city, in golden light', de: 'Die Stadt, im goldenen Licht', fr: 'La ville, dans la lumière dorée' },
      quote:  { es: 'Y la muerte no será más; y no habrá más llanto, ni clamor, ni dolor.',
                en: 'There shall be no more death, neither sorrow, nor crying.',
                de: 'Und der Tod wird nicht mehr sein, noch Leid noch Geschrei noch Schmerz.',
                fr: 'La mort ne sera plus, et il n’y aura plus ni deuil, ni cri, ni douleur.' },
      qref:   'Revelation 21:4'
    },
    coda: {
      kicker: { es: 'Donde empieza la lectura', en: 'Where the reading begins', de: 'Wo das Lesen beginnt', fr: 'Où commence la lecture' },
      name:   { es: 'Todo en todos', en: 'All in all', de: 'Alles in allem', fr: 'Tout en tous' },
      line:   { es: 'Todo lo que has visto es reconstrucción artística. Lo que dicen los textos está en la capa de estudio, con las interpretaciones separadas.',
                en: 'Everything you have seen is artistic reconstruction. What the texts say is in the study layer, with the interpretations kept separate.',
                de: 'Alles Gesehene ist künstlerische Rekonstruktion. Was die Texte sagen, steht in der Studienebene — die Deutungen davon getrennt.',
                fr: 'Tout ce que vous avez vu est une reconstitution artistique. Ce que disent les textes se trouve dans la couche d’étude, les interprétations tenues à part.' },
      place:  { es: 'Bajo las estrellas otra vez', en: 'Under the stars again', de: 'Wieder unter den Sternen', fr: 'De nouveau sous les étoiles' },
      quote:  { es: 'Para que Dios sea todas las cosas en todos.',
                en: 'That God may be all in all.',
                de: 'Auf daß Gott sei alles in allen.',
                fr: 'Afin que Dieu soit tout en tous.' },
      qref:   '1 Corinthians 15:28'
    }
  };
})(window.AD);
