/* Cuatro idiomas escritos nativamente, no traducidos mecánicamente.
   Cada locale trae su propia convención tipográfica y su propio uso de los
   nombres bíblicos, que es donde una traducción automática siempre falla:

   · español   Génesis 1:1      comillas «…»   ¿ ¡ de apertura
   · English   Genesis 1:1      quotes “…”
   · Deutsch   1. Mose 1,1      Anführung „…“  coma entre capítulo y versículo
   · français  Genèse 1,1       guillemets « … » con espacio fino insecable
*/
(function (AD) {
  'use strict';

  AD.data.locales = [
    { id: 'es', name: 'Español',  html: 'es', flagWord: 'ES' },
    { id: 'en', name: 'English',  html: 'en', flagWord: 'EN' },
    { id: 'de', name: 'Deutsch',  html: 'de', flagWord: 'DE' },
    { id: 'fr', name: 'Français', html: 'fr', flagWord: 'FR' }
  ];

  /* separador capítulo:versículo y comillas propias de cada lengua */
  AD.data.localeStyle = {
    es: { vs: ':', open: '«', close: '»', thin: '' },
    en: { vs: ':', open: '“', close: '”', thin: '' },
    de: { vs: ',', open: '„', close: '“', thin: '' },
    fr: { vs: ',', open: '«', close: '»', thin: ' ' }
  };

  /* Nombres de los libros. El alemán usa la numeración luterana del Pentateuco
     (1. Mose…), que es la forma que un lector alemán reconoce de inmediato. */
  AD.data.bookNames = {
    'Genesis':        { es: 'Génesis',        de: '1. Mose',        fr: 'Genèse' },
    'Exodus':         { es: 'Éxodo',          de: '2. Mose',        fr: 'Exode' },
    'Leviticus':      { es: 'Levítico',       de: '3. Mose',        fr: 'Lévitique' },
    'Numbers':        { es: 'Números',        de: '4. Mose',        fr: 'Nombres' },
    'Deuteronomy':    { es: 'Deuteronomio',   de: '5. Mose',        fr: 'Deutéronome' },
    'Joshua':         { es: 'Josué',          de: 'Josua',          fr: 'Josué' },
    'Judges':         { es: 'Jueces',         de: 'Richter',        fr: 'Juges' },
    'Ruth':           { es: 'Rut',            de: 'Rut',            fr: 'Ruth' },
    '1 Samuel':       { es: '1 Samuel',       de: '1. Samuel',      fr: '1 Samuel' },
    '2 Samuel':       { es: '2 Samuel',       de: '2. Samuel',      fr: '2 Samuel' },
    '1 Kings':        { es: '1 Reyes',        de: '1. Könige',      fr: '1 Rois' },
    '2 Kings':        { es: '2 Reyes',        de: '2. Könige',      fr: '2 Rois' },
    '1 Chronicles':   { es: '1 Crónicas',     de: '1. Chronik',     fr: '1 Chroniques' },
    '2 Chronicles':   { es: '2 Crónicas',     de: '2. Chronik',     fr: '2 Chroniques' },
    'Ezra':           { es: 'Esdras',         de: 'Esra',           fr: 'Esdras' },
    'Nehemiah':       { es: 'Nehemías',       de: 'Nehemia',        fr: 'Néhémie' },
    'Esther':         { es: 'Ester',          de: 'Ester',          fr: 'Esther' },
    'Job':            { es: 'Job',            de: 'Hiob',           fr: 'Job' },
    'Psalms':         { es: 'Salmos',         de: 'Psalm',          fr: 'Psaumes' },
    'Proverbs':       { es: 'Proverbios',     de: 'Sprüche',        fr: 'Proverbes' },
    'Ecclesiastes':   { es: 'Eclesiastés',    de: 'Prediger',       fr: 'Ecclésiaste' },
    'Song of Songs':  { es: 'Cantar de los Cantares', de: 'Hoheslied', fr: 'Cantique des cantiques' },
    'Isaiah':         { es: 'Isaías',         de: 'Jesaja',         fr: 'Ésaïe' },
    'Jeremiah':       { es: 'Jeremías',       de: 'Jeremia',        fr: 'Jérémie' },
    'Lamentations':   { es: 'Lamentaciones',  de: 'Klagelieder',    fr: 'Lamentations' },
    'Ezekiel':        { es: 'Ezequiel',       de: 'Hesekiel',       fr: 'Ézéchiel' },
    'Daniel':         { es: 'Daniel',         de: 'Daniel',         fr: 'Daniel' },
    'Hosea':          { es: 'Oseas',          de: 'Hosea',          fr: 'Osée' },
    'Joel':           { es: 'Joel',           de: 'Joël',           fr: 'Joël' },
    'Amos':           { es: 'Amós',           de: 'Amos',           fr: 'Amos' },
    'Obadiah':        { es: 'Abdías',         de: 'Obadja',         fr: 'Abdias' },
    'Jonah':          { es: 'Jonás',          de: 'Jona',           fr: 'Jonas' },
    'Micah':          { es: 'Miqueas',        de: 'Micha',          fr: 'Michée' },
    'Nahum':          { es: 'Nahúm',          de: 'Nahum',          fr: 'Nahoum' },
    'Habakkuk':       { es: 'Habacuc',        de: 'Habakuk',        fr: 'Habacuc' },
    'Zephaniah':      { es: 'Sofonías',       de: 'Zefanja',        fr: 'Sophonie' },
    'Haggai':         { es: 'Hageo',          de: 'Haggai',         fr: 'Aggée' },
    'Zechariah':      { es: 'Zacarías',       de: 'Sacharja',       fr: 'Zacharie' },
    'Malachi':        { es: 'Malaquías',      de: 'Maleachi',       fr: 'Malachie' },
    'Matthew':        { es: 'Mateo',          de: 'Matthäus',       fr: 'Matthieu' },
    'Mark':           { es: 'Marcos',         de: 'Markus',         fr: 'Marc' },
    'Luke':           { es: 'Lucas',          de: 'Lukas',          fr: 'Luc' },
    'John':           { es: 'Juan',           de: 'Johannes',       fr: 'Jean' },
    'Acts':           { es: 'Hechos',         de: 'Apostelgeschichte', fr: 'Actes' },
    'Romans':         { es: 'Romanos',        de: 'Römer',          fr: 'Romains' },
    '1 Corinthians':  { es: '1 Corintios',    de: '1. Korinther',   fr: '1 Corinthiens' },
    '2 Corinthians':  { es: '2 Corintios',    de: '2. Korinther',   fr: '2 Corinthiens' },
    'Galatians':      { es: 'Gálatas',        de: 'Galater',        fr: 'Galates' },
    'Ephesians':      { es: 'Efesios',        de: 'Epheser',        fr: 'Éphésiens' },
    'Philippians':    { es: 'Filipenses',     de: 'Philipper',      fr: 'Philippiens' },
    'Colossians':     { es: 'Colosenses',     de: 'Kolosser',       fr: 'Colossiens' },
    '1 Thessalonians':{ es: '1 Tesalonicenses', de: '1. Thessalonicher', fr: '1 Thessaloniciens' },
    '2 Thessalonians':{ es: '2 Tesalonicenses', de: '2. Thessalonicher', fr: '2 Thessaloniciens' },
    '1 Timothy':      { es: '1 Timoteo',      de: '1. Timotheus',   fr: '1 Timothée' },
    '2 Timothy':      { es: '2 Timoteo',      de: '2. Timotheus',   fr: '2 Timothée' },
    'Titus':          { es: 'Tito',           de: 'Titus',          fr: 'Tite' },
    'Philemon':       { es: 'Filemón',        de: 'Philemon',       fr: 'Philémon' },
    'Hebrews':        { es: 'Hebreos',        de: 'Hebräer',        fr: 'Hébreux' },
    'James':          { es: 'Santiago',       de: 'Jakobus',        fr: 'Jacques' },
    '1 Peter':        { es: '1 Pedro',        de: '1. Petrus',      fr: '1 Pierre' },
    '2 Peter':        { es: '2 Pedro',        de: '2. Petrus',      fr: '2 Pierre' },
    '1 John':         { es: '1 Juan',         de: '1. Johannes',    fr: '1 Jean' },
    '2 John':         { es: '2 Juan',         de: '2. Johannes',    fr: '2 Jean' },
    '3 John':         { es: '3 Juan',         de: '3. Johannes',    fr: '3 Jean' },
    'Jude':           { es: 'Judas',          de: 'Judas',          fr: 'Jude' },
    'Revelation':     { es: 'Apocalipsis',    de: 'Offenbarung',    fr: 'Apocalypse' },
    '1 Enoch':        { es: '1 Enoc',         de: '1. Henoch',      fr: '1 Hénoch' },
    '1 Maccabees':    { es: '1 Macabeos',     de: '1. Makkabäer',   fr: '1 Maccabées' },
    'Sirach':         { es: 'Eclesiástico',   de: 'Jesus Sirach',   fr: 'Siracide' }
  };

  /* Cadenas de interfaz. Cada una redactada en la lengua, no calcada del inglés. */
  AD.data.ui = {
    'site.title':      { es: 'El Tiempo Señalado', en: 'The Appointed Time', de: 'Die bestimmte Zeit', fr: 'Le Temps fixé' },
    'site.tagline':    { es: 'Génesis 1 — Apocalipsis 22', en: 'Genesis 1 — Revelation 22', de: '1. Mose 1 — Offenbarung 22', fr: 'Genèse 1 — Apocalypse 22' },
    'nav.search':      { es: 'Buscar', en: 'Search', de: 'Suche', fr: 'Rechercher' },
    'nav.index':       { es: 'Índice', en: 'Index', de: 'Register', fr: 'Index' },
    'nav.atlas':       { es: 'Atlas', en: 'Atlas', de: 'Atlas', fr: 'Atlas' },
    'nav.study':       { es: 'Estudio', en: 'Study', de: 'Studium', fr: 'Étude' },
    'nav.questions':   { es: 'Preguntas', en: 'Questions', de: 'Fragen', fr: 'Questions' },
    'nav.language':    { es: 'Idioma', en: 'Language', de: 'Sprache', fr: 'Langue' },
    'nav.close':       { es: 'Cerrar', en: 'Close', de: 'Schließen', fr: 'Fermer' },
    'nav.theme':       { es: 'Tema', en: 'Theme', de: 'Darstellung', fr: 'Thème' },
    'theme.auto':      { es: 'Auto', en: 'Auto', de: 'Auto', fr: 'Auto' },
    'theme.light':     { es: 'Claro', en: 'Light', de: 'Hell', fr: 'Clair' },
    'theme.dark':      { es: 'Oscuro', en: 'Dark', de: 'Dunkel', fr: 'Sombre' },
    'sound.on':        { es: 'Sonido', en: 'Sound', de: 'Ton', fr: 'Son' },
    'sound.off':       { es: 'Silencio', en: 'Muted', de: 'Stumm', fr: 'Muet' },
    'sound.track':     { es: 'Banda sonora', en: 'Soundtrack', de: 'Klangbild', fr: 'Ambiance' },
    'scroll.cue':      { es: 'Desplázate para avanzar', en: 'Scroll to travel', de: 'Zum Weitergehen scrollen', fr: 'Faites défiler pour avancer' },
    'scene.recon':     { es: 'reconstrucción artística', en: 'artistic reconstruction', de: 'künstlerische Rekonstruktion', fr: 'reconstitution artistique' },
    'scene.stage':     { es: 'Etapa', en: 'Stage', de: 'Stufe', fr: 'Étape' },
    'scene.entries':   { es: 'fichas', en: 'entries', de: 'Einträge', fr: 'fiches' },
    'scene.openIndex': { es: 'abrir el índice', en: 'open the index', de: 'Register öffnen', fr: 'ouvrir l’index' },
    'scene.all':       { es: 'TODAS', en: 'ALL', de: 'ALLE', fr: 'TOUTES' },
    'evidence.label':  { es: 'Nivel de evidencia', en: 'Evidence level', de: 'Belegstufe', fr: 'Niveau de preuve' },
    'q.textSays':      { es: 'Lo que el texto dice', en: 'What the text says', de: 'Was der Text sagt', fr: 'Ce que le texte dit' },
    'q.textOmits':     { es: 'Lo que el texto no explica', en: 'What the text does not explain', de: 'Was der Text nicht erklärt', fr: 'Ce que le texte n’explique pas' },
    'q.context':       { es: 'Contexto histórico y literario', en: 'Historical and literary context', de: 'Historischer und literarischer Kontext', fr: 'Contexte historique et littéraire' },
    'q.metaphor':      { es: 'Qué se deduce de la imagen', en: 'What the image lets us deduce', de: 'Was sich aus dem Bild ableiten lässt', fr: 'Ce que l’image permet de déduire' },
    'q.purpose':       { es: 'Para qué está ahí', en: 'Why it is there', de: 'Wozu es dasteht', fr: 'À quoi cela sert dans le récit' },
    'q.positions':     { es: 'Posturas', en: 'Positions', de: 'Deutungen', fr: 'Positions' },
    'q.arguments':     { es: 'A favor', en: 'Arguments for', de: 'Dafür spricht', fr: 'Arguments pour' },
    'q.objections':    { es: 'Objeciones', en: 'Objections', de: 'Einwände', fr: 'Objections' },
    'q.origin':        { es: 'Origen de esta lectura', en: 'Where this reading comes from', de: 'Herkunft dieser Deutung', fr: 'Origine de cette lecture' },
    'q.undetermined':  { es: 'Lo que no puede determinarse', en: 'What cannot be determined', de: 'Was sich nicht entscheiden lässt', fr: 'Ce qui ne peut être tranché' },
    'q.sources':       { es: 'Fuentes', en: 'Sources', de: 'Quellen', fr: 'Sources' },
    'q.readPassage':   { es: 'Leer el pasaje', en: 'Read the passage', de: 'Stelle lesen', fr: 'Lire le passage' },
    'p.translation':   { es: 'Traducción', en: 'Translation', de: 'Übersetzung', fr: 'Traduction' },
    'p.notEmbedded':   { es: 'Este pasaje aún no está incorporado con texto completo. Referencia para consultarlo:',
                         en: 'The full text of this passage is not embedded yet. Reference to look it up:',
                         de: 'Der vollständige Text dieser Stelle ist noch nicht eingebunden. Fundstelle zum Nachschlagen:',
                         fr: 'Le texte complet de ce passage n’est pas encore intégré. Référence pour le consulter :' },
    'i18n.partial':    { es: 'Esta sección aún no está redactada en español. Se muestra en inglés.',
                         en: 'This section is shown in English.',
                         de: 'Dieser Abschnitt liegt noch nicht auf Deutsch vor und wird auf Englisch angezeigt.',
                         fr: 'Cette section n’est pas encore rédigée en français. Elle est affichée en anglais.' }
  };

  AD.data.uiCount = Object.keys(AD.data.ui).length;
})(window.AD);
