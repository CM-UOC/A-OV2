/* Biblioteca visual de A-OV2 (lotes 1 y 2).

   28 imágenes generadas para el proyecto. Los metadatos vienen del manifiesto
   de la entrega y se integran en el sistema de evidencia del sitio: las
   categorías A-H del proveedor se asignan a los 14 niveles ya existentes, de
   modo que no hay dos arquitecturas de contenido compitiendo.

   Originales sin tocar en media/originals/ (WebP 1672x941).
   Producción en media/library/ (JPEG 1280 px) y media/thumbs/ (400 px).

   Resolución pendiente: los maestros nativos miden 1672x941 y no alcanzan el
   mínimo de produccion de 2560x1440 que pedia el encargo. Queda registrado.  */
(function (AD) {
  'use strict';

  AD.data.libraryActNames = {
 "I": {
  "es": "Creación y comunión",
  "en": "Creation and communion",
  "de": "Schöpfung und Gemeinschaft",
  "fr": "Création et communion"
 },
 "II": {
  "es": "Separación",
  "en": "Separation",
  "de": "Trennung",
  "fr": "Séparation"
 },
 "III": {
  "es": "Los Vigilantes",
  "en": "The Watchers",
  "de": "Die Wächter",
  "fr": "Les Veilleurs"
 },
 "IV": {
  "es": "Diluvio y pacto",
  "en": "Flood and covenant",
  "de": "Flut und Bund",
  "fr": "Déluge et alliance"
 },
 "VII": {
  "es": "Cristo",
  "en": "Christ",
  "de": "Christus",
  "fr": "Le Christ"
 },
 "IX": {
  "es": "Visiones apocalípticas",
  "en": "Apocalyptic visions",
  "de": "Apokalyptische Visionen",
  "fr": "Visions apocalyptiques"
 },
 "X": {
  "es": "Nueva creación",
  "en": "New creation",
  "de": "Neue Schöpfung",
  "fr": "Création nouvelle"
 }
};

  AD.data.library = [
 {
  "id": "IMG-001",
  "file": "001-creation-formless-depths-hero-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-01",
  "title": "Antes de la forma",
  "alt": "Aguas oscuras se extienden bajo nubes densas mientras una claridad dorada aparece en el horizonte.",
  "desc": "Oscuridad, agua y presencia próxima antes de la forma.",
  "role": "hero",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Génesis 1:2"
  ],
  "enoch": [],
  "warning": "Representación simbólica; la materialización visual no afirma una realidad física ni un cumplimiento histórico literal. Génesis 1:2 no es un modelo de cosmología científica moderna.",
  "safeText": "left-upper",
  "motion": [
   "zoom máximo 1.03; desactivar con prefers-reduced-motion"
  ],
  "brightness": "oscura con horizonte luminoso",
  "safeBox": [
   0.05,
   0.4,
   0.1,
   0.38
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-002",
  "file": "002-creation-prior-creation-interpretive-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-01",
  "title": "Posible creación anterior",
  "alt": "Relieves rocosos inciertos se sumergen en aguas azules oscuras bajo reflejos de luz tenue y partículas suspendidas.",
  "desc": "Hipótesis de realidad previa sugerida únicamente mediante relieves naturales sumergidos.",
  "role": "interpretive",
  "evidence": "debated",
  "catLetter": "E",
  "refs": [
   "Génesis 1:1–2"
  ],
  "enoch": [],
  "warning": "Exploración de una hipótesis debatida sobre Génesis 1:1–2, citado como pasaje interpretado. El texto no narra expresamente una creación previa arruinada ni una civilización preadámica. Las formas ambiguas no constituyen evidencia histórica.",
  "safeText": "left-upper",
  "motion": [
   "Acercamiento mínimo y oscilación leve del reflejo; no materializar las formas ambiguas.",
   "Desactivar con prefers-reduced-motion; no deformar sujetos."
  ],
  "brightness": "oscura con luz superior derecha",
  "safeBox": [
   0.05,
   0.39,
   0.15,
   0.68
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-003",
  "file": "003-creation-light-hero-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-02",
  "title": "La luz",
  "alt": "Una amplia claridad dorada atraviesa las nubes desde arriba a la derecha y revela las aguas oscuras.",
  "desc": "Irrupción de luz desde una abertura alta que transforma la oscuridad sobre las aguas.",
  "role": "hero",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 1:3–5"
  ],
  "enoch": [],
  "warning": "Visualización poética del relato; no describe un modelo científico del origen del universo. Relieve, flora, fauna y luz son elecciones artísticas.",
  "safeText": "left-upper",
  "motion": [
   "Expansión muy lenta de luz ambiental y acercamiento de cámara casi imperceptible.",
   "Desactivar con prefers-reduced-motion; no deformar sujetos."
  ],
  "brightness": "oscura-media con abertura luminosa superior",
  "safeBox": [
   0.05,
   0.39,
   0.1,
   0.4
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-004",
  "file": "004-creation-waters-firmament-interpretive-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-02",
  "title": "Separación de aguas y firmamento",
  "alt": "Una gran extensión de cielo azul y nubes claras se abre sobre las aguas oscuras de un horizonte bajo.",
  "desc": "Separación de aguas y firmamento sugerida por una bóveda de nubes y un intervalo de aire.",
  "role": "interpretive",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Génesis 1:6–8"
  ],
  "enoch": [],
  "warning": "Imagen cosmológico-poética basada en la separación de aguas del texto; la bóveda atmosférica es un recurso visual, no un diagrama científico.",
  "safeText": "left-upper",
  "motion": [
   "Desplazamiento pausado de capas de nubes y aproximación suave al intervalo central.",
   "Desactivar con prefers-reduced-motion; no deformar sujetos."
  ],
  "brightness": "media con cielo luminoso",
  "safeBox": [
   0.07,
   0.4,
   0.25,
   0.56
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-005",
  "file": "005-creation-land-vegetation-background-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-02",
  "title": "Tierra y vegetación",
  "alt": "Brotes verdes nacen en tierra húmeda frente a brazos de río e islas de vegetación, rodeados de laderas claras.",
  "desc": "Tierra fértil y vegetación naciente junto a aguas reunidas en un valle amplio.",
  "role": "background",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 1:9–13"
  ],
  "enoch": [],
  "warning": "Visualización poética del relato; no describe un modelo científico del origen del universo. Relieve, flora, fauna y luz son elecciones artísticas.",
  "safeText": "left-upper",
  "motion": [
   "Avance lento siguiendo el río, con movimiento leve de niebla y hojas.",
   "Desactivar con prefers-reduced-motion; no deformar sujetos."
  ],
  "brightness": "media-luminosa",
  "safeBox": [
   0.1,
   0.4,
   0.07,
   0.24
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-006",
  "file": "006-creation-luminaries-interpretive-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-02",
  "title": "Sol, luna y luminarias",
  "alt": "Una luna creciente y estrellas ocupan el cielo azul mientras el sol asoma sobre un valle de ríos iluminado en oro.",
  "desc": "Orden del tiempo representado mediante coexistencia simbólica de luna, estrellas y sol.",
  "role": "interpretive",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Génesis 1:14–19"
  ],
  "enoch": [],
  "warning": "Composición simbólica de las luminarias y del orden temporal. La coexistencia y disposición de sus luces expresa ciclos; no afirma una alineación astronómica documentada.",
  "safeText": "left-upper",
  "motion": [
   "Variación ambiental muy lenta entre tonos de día y noche; preservar posiciones y escala de luminarias.",
   "Desactivar con prefers-reduced-motion; no deformar sujetos."
  ],
  "brightness": "media con transición de noche a luz dorada",
  "safeBox": [
   0.05,
   0.34,
   0.22,
   0.39
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-007",
  "file": "007-creation-sea-sky-life-background-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-02",
  "title": "Vida en los mares y cielos",
  "alt": "Peces nadan en aguas costeras transparentes, dos delfines emergen a distancia y aves vuelan ante acantilados claros.",
  "desc": "Vida marina y aves reunidas en un paisaje costero de aguas físicamente creíbles.",
  "role": "background",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 1:20–23"
  ],
  "enoch": [],
  "warning": "Visualización poética del relato; no describe un modelo científico del origen del universo. Relieve, flora, fauna y luz son elecciones artísticas.",
  "safeText": "left-upper",
  "motion": [
   "Deslizamiento corto de cámara sobre la costa y pequeñas ondas; no animar fauna mediante deformación.",
   "Desactivar con prefers-reduced-motion; no deformar sujetos."
  ],
  "brightness": "media-luminosa",
  "safeBox": [
   0.05,
   0.38,
   0.08,
   0.28
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-008",
  "file": "008-creation-land-life-background-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-02",
  "title": "Vida terrestre",
  "alt": "Dos gacelas pastan junto al río, una cabra silvestre ocupa una roca elevada y una tortuga avanza por la tierra del primer plano.",
  "desc": "Vida terrestre integrada a distintas profundidades en el valle del jardín.",
  "role": "background",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 1:24–25"
  ],
  "enoch": [],
  "warning": "Visualización poética del relato; no describe un modelo científico del origen del universo. Relieve, flora, fauna y luz son elecciones artísticas.",
  "safeText": "left-upper",
  "motion": [
   "Movimiento pausado hacia el valle; limitar animación a follaje, bruma y reflejos.",
   "Desactivar con prefers-reduced-motion; no deformar sujetos."
  ],
  "brightness": "media-luminosa",
  "safeBox": [
   0.12,
   0.38,
   0.22,
   0.31
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-009",
  "file": "009-creation-humanity-interpretive-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-02",
  "title": "Creación de la humanidad",
  "alt": "Dos rostros humanos adultos contemplan la luz entre hojas opacas, con el río y las laderas del jardín al fondo.",
  "desc": "Surgimiento simbólico de conciencia y dignidad humana mediante miradas, tierra, vegetación y luz.",
  "role": "interpretive",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Génesis 1:26–27",
   "Génesis 2:7"
  ],
  "enoch": [],
  "warning": "Síntesis simbólica del surgimiento de la humanidad. Casting, gesto, simultaneidad y entorno son decisiones artísticas; no se representa un mecanismo físico de creación.",
  "safeText": "left-upper",
  "motion": "Acercamiento mínimo a los rostros con partículas escasas; rostros y cuerpos permanecen estables.",
  "brightness": "medium-bright",
  "safeBox": [
   0.05,
   0.25,
   0.2,
   0.65
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-010",
  "file": "010-creation-human-vocation-interpretive-desktop",
  "act": "I",
  "actSlug": "creation",
  "chapter": "CH-02",
  "title": "Imagen de Dios y vocación humana",
  "alt": "Adán retira pequeñas ramas del suelo mientras Eva sostiene un tallo, rodeados por vegetación opaca con el río al fondo.",
  "desc": "La vocación humana se representa como cuidado compartido de una planta viva.",
  "role": "interpretive",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Génesis 1:26–28",
   "Génesis 2:15"
  ],
  "enoch": [],
  "warning": "Representación conceptual de imagen de Dios y cuidado de la creación. La acción concreta es editorial; el texto no ofrece una imagen física de Dios ni una escena detallada equivalente.",
  "safeText": "left-upper",
  "motion": "Parallax leve entre vegetación y valle, sin deformar las manos ni alterar la acción.",
  "brightness": "medium-bright",
  "safeBox": [
   0.05,
   0.3,
   0.2,
   0.62
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-011",
  "file": "011-eden-sacred-garden-hero-desktop",
  "act": "I",
  "actSlug": "eden",
  "chapter": "CH-03",
  "title": "El jardín de Edén",
  "alt": "Un gran árbol crece junto a un río turquesa entre vegetación, cascadas y laderas de piedra clara.",
  "desc": "Edén como jardín vivo de agua, altura y encuentro.",
  "role": "hero",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 2:8–15"
  ],
  "enoch": [],
  "warning": "Basada en elementos del relato; composición, aspecto físico y detalles ambientales son decisiones artísticas, no documentación del acontecimiento.",
  "safeText": "left-upper",
  "motion": [
   "zoom máximo 1.03; desactivar con prefers-reduced-motion"
  ],
  "brightness": "media-luminosa",
  "safeBox": [
   0.08,
   0.38,
   0.07,
   0.3
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-012",
  "file": "012-eden-cosmic-sanctuary-interpretive-desktop",
  "act": "I",
  "actSlug": "eden",
  "chapter": "CH-03",
  "title": "Edén como santuario cósmico",
  "alt": "Troncos y ramas irregulares enmarcan una apertura hacia el río, laderas de caliza y vegetación iluminada.",
  "desc": "Santuario interpretado como umbral enteramente natural entre jardín, agua y cielo.",
  "role": "interpretive",
  "evidence": "christian",
  "catLetter": "C",
  "refs": [
   "Génesis 2:8–15",
   "Génesis 3:24"
  ],
  "enoch": [],
  "warning": "Lectura teológica de Edén como santuario y encuentro entre cielo y tierra. Génesis no describe un templo construido allí; la geometría del paisaje y la luz son recursos editoriales.",
  "safeText": "left-upper",
  "motion": "Aproximación lenta al claro con parallax discreto de ramas; sin abrir un portal literal.",
  "brightness": "medium-bright",
  "safeBox": [
   0.04,
   0.24,
   0.18,
   0.52
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-013",
  "file": "013-eden-tree-of-life-background-desktop",
  "act": "I",
  "actSlug": "eden",
  "chapter": "CH-03",
  "title": "El árbol de la vida",
  "alt": "El tronco de múltiples bifurcaciones y las raíces del árbol se alzan junto al río turquesa, con caliza y vegetación al fondo.",
  "desc": "Retrato cercano del árbol de la vida a nivel del agua y sus raíces, con corteza físicamente tangible.",
  "role": "background",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 2:9"
  ],
  "enoch": [],
  "warning": "El texto menciona el árbol de la vida sin identificar especie, forma ni dimensiones. Su aspecto natural y monumental es editorial, dentro de una geografía imaginada.",
  "safeText": "left-lower",
  "motion": "Acercamiento suave al tronco y movimiento mínimo del follaje y del agua.",
  "brightness": "medium-bright",
  "safeBox": [
   0.05,
   0.33,
   0.66,
   0.82
  ],
  "focal": "78% 38%"
 },
 {
  "id": "IMG-014",
  "file": "014-eden-communion-background-desktop",
  "act": "I",
  "actSlug": "eden",
  "chapter": "CH-03",
  "title": "Comunión",
  "alt": "Adán y Eva, vistos de perfil entre arbustos opacos, comparten un recorrido sereno junto al río del jardín.",
  "desc": "La pareja en comunión con el jardín, a escala humana dentro del paisaje luminoso.",
  "role": "background",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Génesis 2:15–25"
  ],
  "enoch": [],
  "warning": "Paseo armónico elegido para expresar comunión; esos versículos no narran esta puesta en escena. La presencia divina se sugiere mediante luz, sin cuerpo humano de Dios.",
  "safeText": "left-upper",
  "motion": "Avance suave paralelo al camino; mantener figuras estables y una respiración ambiental leve.",
  "brightness": "medium-bright",
  "safeBox": [
   0.05,
   0.28,
   0.2,
   0.66
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-015",
  "file": "015-fall-serpent-tree-background-desktop",
  "act": "II",
  "actSlug": "fall",
  "chapter": "CH-04",
  "title": "La serpiente y el árbol",
  "alt": "Una serpiente de escamas oliva parduzcas reposa sobre una rama sombreada, con el jardín y su río al fondo.",
  "desc": "Tensión contenida mediante la quietud de una serpiente realista y el cambio hacia sombras más profundas.",
  "role": "background",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 3:1–6"
  ],
  "enoch": [],
  "warning": "La serpiente pertenece al relato; su especie, anatomía concreta y posición son elecciones visuales. No se identifica la especie del fruto ni se añade anatomía monstruosa.",
  "safeText": "left-upper",
  "motion": "Acercamiento mínimo a la rama con follaje apenas móvil; sin transformar anatomía de la serpiente.",
  "brightness": "medium-dark",
  "safeBox": [
   0.05,
   0.38,
   0.18,
   0.65
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-016",
  "file": "016-fall-unknown-fruit-interpretive-desktop",
  "act": "II",
  "actSlug": "fall",
  "chapter": "CH-04",
  "title": "El fruto no identificado",
  "alt": "Una mano adulta se detiene a poca distancia de la superficie ocre de un fruto parcialmente oculto por hojas y sombra.",
  "desc": "Instante previo a la elección mediante la proximidad de una mano y un fruto de identidad botánica indeterminada.",
  "role": "interpretive",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 3:6"
  ],
  "enoch": [],
  "warning": "Génesis no identifica la especie del fruto prohibido. Su aspecto queda intencionadamente ambiguo; el gesto previo y el detalle de la mano son una elección de puesta en escena.",
  "safeText": "left-upper",
  "motion": "Acercamiento casi imperceptible; mantener mano y fruto estáticos y sin deformación.",
  "brightness": "medium-dark",
  "safeBox": [
   0.04,
   0.3,
   0.08,
   0.3
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-017",
  "file": "017-fall-decision-background-desktop",
  "act": "II",
  "actSlug": "fall",
  "chapter": "CH-04",
  "title": "El instante de la decisión",
  "alt": "Eva observa una rama con la mano detenida entre las hojas, mientras Adán permanece detrás de ella en un jardín de río y roca clara.",
  "desc": "El instante de la decisión en un primer plano de miradas contenidas y manos, con el cuerpo cubierto por el encuadre vegetal.",
  "role": "background",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Génesis 3:6"
  ],
  "enoch": [],
  "warning": "El texto narra la elección; este instante psicológico, las expresiones y el reparto de miradas son una interpretación artística. No se define la especie del fruto.",
  "safeText": "left-upper",
  "motion": "Cambio ambiental lento de luz sin mover facciones ni introducir melodrama.",
  "brightness": "medium, warm",
  "safeBox": [
   0.03,
   0.22,
   0.12,
   0.72
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-018",
  "file": "018-fall-hiding-background-desktop",
  "act": "II",
  "actSlug": "fall",
  "chapter": "CH-04",
  "title": "Vergüenza y ocultamiento",
  "alt": "Eva y Adán se esconden entre ramas oscuras con coberturas de hojas, mientras el río y el árbol del jardín quedan detrás de ellos.",
  "desc": "Ocultamiento y vulnerabilidad con rostros reconocibles, cobertura vegetal opaca y luz en descenso.",
  "role": "background",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 3:7–10"
  ],
  "enoch": [],
  "warning": "El relato menciona coberturas vegetales y ocultamiento. La composición evita desnudez explícita y no anticipa las prendas de piel de Génesis 3:21.",
  "safeText": "left-lower",
  "motion": "Lento acercamiento desde el follaje, dejando la expresión humana quieta y legible.",
  "brightness": "dark-medium",
  "safeBox": [
   0.04,
   0.31,
   0.58,
   0.84
  ],
  "focal": "78% 38%"
 },
 {
  "id": "IMG-019",
  "file": "019-fall-broken-communion-interpretive-desktop",
  "act": "II",
  "actSlug": "fall",
  "chapter": "CH-04",
  "title": "Ruptura de la comunión",
  "alt": "La pareja, parcialmente oculta por ramas, mira hacia un jardín que se aleja entre sombras y bruma al final de un camino rocoso.",
  "desc": "Ruptura de comunión expresada con un camino, un jardín aún reconocible y una creciente separación de luz y distancia.",
  "role": "interpretive",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Génesis 3:8–10",
   "Génesis 3:23–24"
  ],
  "enoch": [],
  "warning": "Símbolo de ruptura y separación basado en el relato. El umbral que se cierra y la disposición de figuras no son mecanismos o gestos descritos literalmente en Génesis.",
  "safeText": "left-lower",
  "motion": "Cerrar levemente la bruma del camino con parallax lento; no crear una puerta mecánica.",
  "brightness": "dark-medium",
  "safeBox": [
   0.04,
   0.31,
   0.51,
   0.79
  ],
  "focal": "78% 38%"
 },
 {
  "id": "IMG-020",
  "file": "020-fall-lost-access-interpretive-desktop",
  "act": "II",
  "actSlug": "fall",
  "chapter": "CH-04",
  "title": "Pérdida de acceso",
  "alt": "Un sendero rocoso termina junto a aguas veladas por bruma, mientras el árbol del jardín permanece luminoso en la orilla distante.",
  "desc": "Interpretación teológica de acceso perdido mediante camino, reflejos y un velo atmosférico entre el observador y el jardín.",
  "role": "interpretive",
  "evidence": "christian",
  "catLetter": "C",
  "refs": [
   "Génesis 3:22–24"
  ],
  "enoch": [],
  "warning": "Lectura teológica y metafísica de la pérdida de acceso al espacio sagrado. El velo y las capas visuales son símbolos; no afirman dimensiones físicas superiores ni un mecanismo científico.",
  "safeText": "left-upper",
  "motion": "Desplazamiento mínimo entre reflejo y paisaje, sin convertir el símbolo en una demostración física.",
  "brightness": "medium with dark foreground",
  "safeBox": [
   0.05,
   0.39,
   0.15,
   0.34
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-021",
  "file": "021-fall-expulsion-hero-desktop",
  "act": "II",
  "actSlug": "fall",
  "chapter": "CH-05",
  "title": "Expulsión del jardín",
  "alt": "Adán y Eva, vestidos con pieles, miran atrás mientras se alejan del jardín por un sendero rocoso.",
  "desc": "La pareja sale del jardín hacia una tierra más árida.",
  "role": "hero",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 3:21–24"
  ],
  "enoch": [],
  "warning": "Basada en elementos del relato; composición, aspecto físico y detalles ambientales son decisiones artísticas, no documentación del acontecimiento.",
  "safeText": "left-upper",
  "motion": [
   "zoom máximo 1.03; desactivar con prefers-reduced-motion"
  ],
  "brightness": "media con sujetos en sombra",
  "safeBox": [
   0.05,
   0.38,
   0.08,
   0.3
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-022",
  "file": "022-fall-guarded-way-background-desktop",
  "act": "II",
  "actSlug": "fall",
  "chapter": "CH-05",
  "title": "Querubines y camino cerrado",
  "alt": "Dos presencias luminosas apenas definidas entre la niebla y una llama estrecha custodian un camino rocoso hacia el jardín.",
  "desc": "Camino custodiado mediante presencias veladas y fuego contenido; el jardín continúa visible más allá del umbral.",
  "role": "background",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 3:24"
  ],
  "enoch": [],
  "warning": "Génesis 3:24 nombra querubines y una espada o llama que se mueve, sin describir su anatomía. Las formas veladas y el tratamiento del fuego son editoriales; no se importan rasgos de Ezequiel ni querubines infantiles.",
  "safeText": "left-lower",
  "motion": "Oscilación sobria de la llama y bruma; mantener guardianes velados sin concretar anatomía.",
  "brightness": "medium with dark foreground and bright mist",
  "safeBox": [
   0.04,
   0.34,
   0.58,
   0.83
  ],
  "focal": "78% 38%"
 },
 {
  "id": "IMG-023",
  "file": "023-fall-outside-eden-background-desktop",
  "act": "II",
  "actSlug": "fall",
  "chapter": "CH-05",
  "title": "Fuera de Edén",
  "alt": "Adán remueve tierra rojiza con una vara de madera mientras Eva transporta ramas junto a un refugio sencillo de palos y pieles.",
  "desc": "Vida fuera de Edén: esfuerzo compartido, abrigo básico y un horizonte todavía abierto en un paisaje más duro.",
  "role": "background",
  "evidence": "history",
  "catLetter": "B",
  "refs": [
   "Génesis 3:17–19",
   "Génesis 3:21",
   "Génesis 3:23"
  ],
  "enoch": [],
  "warning": "Reconstrucción narrativa plausible del trabajo fuera del jardín. Génesis no detalla este asentamiento, refugio ni herramientas concretas. Las prendas de piel corresponden al momento posterior a Génesis 3:21.",
  "safeText": "left-upper",
  "motion": "Deslizamiento lento hacia el refugio; animar solo clima y vegetación, preservar anatomía y herramientas.",
  "brightness": "medium",
  "safeBox": [
   0.04,
   0.34,
   0.05,
   0.22
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-033",
  "file": "033-watchers-descent-hero-desktop",
  "act": "III",
  "actSlug": "watchers",
  "chapter": "CH-07",
  "title": "Descenso de los Vigilantes",
  "alt": "Presencias humanas luminosas y parcialmente veladas descienden entre nubes sobre una cresta montañosa bajo una tormenta oscura.",
  "desc": "Descenso de los Vigilantes en lenguaje visionario de la tradición de 1 Enoc, con roca húmeda, niebla y una luz ámbar contenida.",
  "role": "hero",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Genesis 6:1–4"
  ],
  "enoch": [
   "1 Enoc 6:1-6"
  ],
  "warning": "El descenso al monte pertenece a 1 Enoc. Génesis 6 no describe este descenso ni la apariencia física de los Vigilantes. La tormenta, el vestuario, la geografía montañosa dramatizada y la escala son decisiones artísticas; la montaña no es una reconstrucción topográfica de Hermón.",
  "safeText": "left-upper",
  "motion": [
   "acercamiento lento",
   "crossfade atmosférico"
  ],
  "brightness": "dark-medium, focal highlights",
  "safeBox": [
   0.05,
   0.4,
   0.1,
   0.4
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-045",
  "file": "045-flood-deluge-hero-desktop",
  "act": "IV",
  "actSlug": "flood",
  "chapter": "CH-09",
  "title": "El diluvio",
  "alt": "Un arca larga y cerrada de madera oscura resiste entre grandes olas de espuma bajo nubes de tormenta y una abertura de luz fría.",
  "desc": "El diluvio como juicio y preservación: una estructura de madera sobria sobre un mar inmenso, sin víctimas visibles.",
  "role": "hero",
  "evidence": "text",
  "catLetter": "A",
  "refs": [
   "Génesis 7:11-20"
  ],
  "enoch": [],
  "warning": "Génesis sustenta el diluvio y la preservación en el arca. La carpintería, cubierta, ventana, escala de oleaje y punto de vista son reconstrucción artística; no se presentan como ingeniería naval o arqueología demostrada.",
  "safeText": "left-upper",
  "motion": [
   "acercamiento lento",
   "crossfade de atmósfera"
  ],
  "brightness": "dark-medium, cold focal sky",
  "safeBox": [
   0.05,
   0.4,
   0.1,
   0.4
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-103",
  "file": "103-christ-kingdom-teaching-hero-desktop",
  "act": "VII",
  "actSlug": "christ",
  "chapter": "CH-20",
  "title": "Enseñanza del Reino",
  "alt": "Jesús enseña sentado entre un pequeño grupo de adultos en una ladera de Galilea, junto a olivos y piedra clara, con el lago al fondo.",
  "desc": "Enseñanza humana y cercana del Reino, con luz cálida, materiales naturales y atención compartida.",
  "role": "hero",
  "evidence": "history",
  "catLetter": "B",
  "refs": [
   "Matthew 5:1–2"
  ],
  "enoch": [],
  "warning": "Fisonomía y puesta en escena creadas para continuidad narrativa, no retrato históricamente comprobado. La acción se ancla en Mateo 5:1–2.",
  "safeText": "left-upper",
  "motion": "",
  "brightness": "Pendiente de evaluación visual.",
  "safeBox": [
   0.04,
   0.44,
   0.05,
   0.27
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-170",
  "file": "170-revelation-return-of-christ-hero-desktop",
  "act": "IX",
  "actSlug": "revelation",
  "chapter": "CH-31",
  "title": "Regreso de Cristo",
  "alt": "Cristo permanece de pie sobre un umbral rocoso bajo nubes abiertas y luz dorada, con el mismo rostro de su enseñanza y un amplio paisaje a sus pies.",
  "desc": "Regreso simbólico de Cristo: presencia serena, continuidad humana y cielo iluminado sobre una tierra extensa.",
  "role": "hero",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Revelation 1:7",
   "Matthew 24:30"
  ],
  "enoch": [],
  "warning": "Síntesis visionaria inspirada en Apocalipsis 1:7 y Mateo 24:30. No pretende representar literalmente todos los elementos de Apocalipsis 19 ni establecer una cronología futura.",
  "safeText": "left-upper",
  "motion": [
   "desplazamiento lento",
   "parallax sutil si existen capas",
   "crossfade entre variantes verificadas"
  ],
  "brightness": "Pendiente de evaluación visual.",
  "safeBox": [
   0.04,
   0.41,
   0.1,
   0.46
  ],
  "focal": "78% 62%"
 },
 {
  "id": "IMG-184",
  "file": "184-new-creation-alpha-omega-hero-desktop",
  "act": "X",
  "actSlug": "new-creation",
  "chapter": "CH-34",
  "title": "Alfa y Omega visual",
  "alt": "El río y el gran árbol del jardín se integran en una ciudad de piedra clara donde una comunidad camina en paz.",
  "desc": "Jardín, ciudad y humanidad reunidos como cierre simbólico de la historia.",
  "role": "hero",
  "evidence": "symbolic",
  "catLetter": "D",
  "refs": [
   "Génesis 2:8–15",
   "Apocalipsis 21:1–4",
   "Apocalipsis 21:22–27",
   "Apocalipsis 22:1–5",
   "Apocalipsis 22:13"
  ],
  "enoch": [],
  "warning": "Representación simbólica; la materialización visual no afirma una realidad física ni un cumplimiento histórico literal. Síntesis artística autorizada de jardín, ciudad, río, árbol y comunidad; no es un solo versículo ni un acontecimiento adicional.",
  "safeText": "left-upper",
  "motion": [
   "zoom máximo 1.03; desactivar con prefers-reduced-motion"
  ],
  "brightness": "luminosa",
  "safeBox": [
   0.08,
   0.38,
   0.07,
   0.27
  ],
  "focal": "78% 62%"
 }
];

  AD.data.libraryBase = 'media/library/';
  AD.data.libraryThumbs = 'media/thumbs/';
  AD.data.libraryNote = {
    es: 'Imágenes generadas para este proyecto. Cada una lleva su clasificación metodológica: una reconstrucción artística no es una fotografía documental ni una afirmación histórica.',
    en: 'Images generated for this project. Each carries its methodological classification: an artistic reconstruction is neither a documentary photograph nor a historical claim.',
    de: 'Für dieses Projekt erzeugte Bilder. Jedes tragt seine methodische Einordnung: eine künstlerische Rekonstruktion ist weder Dokumentarfoto noch historische Behauptung.',
    fr: 'Images produites pour ce projet. Chacune porte sa classification méthodologique : une reconstitution artistique n\u2019est ni une photographie documentaire ni une affirmation historique.'
  };
  AD.data.libraryById = {};
  AD.data.library.forEach(function (a) { AD.data.libraryById[a.id] = a; });
})(window.AD);
