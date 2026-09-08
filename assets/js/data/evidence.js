/* Sistema de clasificación de evidencia (§13).
   Toda afirmación sustancial del sitio lleva una de estas etiquetas.
   El orden va de lo que el texto dice explícitamente a lo puramente especulativo. */
(function (AD) {
  'use strict';

  AD.data.evidenceLevels = [
    { id: 'text', rank: 1, label: 'Texto explícito', short: 'TEXTO',
      tone: 'anchored',
      def: 'El texto bíblico lo afirma de forma directa. No requiere inferencia.' },
    { id: 'translation', rank: 2, label: 'Decisión de traducción', short: 'TRADUCCIÓN',
      tone: 'anchored',
      def: 'La afirmación depende de cómo se vierte una palabra o construcción. Otras versiones pueden diferir legítimamente.' },
    { id: 'history', rank: 3, label: 'Contexto histórico aceptado', short: 'HISTORIA',
      tone: 'sequenced',
      def: 'Dato del mundo antiguo sostenido por evidencia documental o arqueológica y con amplio consenso.' },
    { id: 'inference', rank: 4, label: 'Inferencia textual razonable', short: 'INFERENCIA',
      tone: 'sequenced',
      def: 'No se afirma, pero se sigue con naturalidad de lo que el texto sí dice.' },
    { id: 'academic', rank: 5, label: 'Lectura académica común', short: 'ACADÉMICA',
      tone: 'sequenced',
      def: 'Interpretación mayoritaria o muy extendida en la investigación crítica.' },
    { id: 'jewish', rank: 6, label: 'Interpretación judía tradicional', short: 'JUDÍA',
      tone: 'sequenced',
      def: 'Lectura sostenida dentro de la tradición interpretativa judía, rabínica o medieval.' },
    { id: 'christian', rank: 7, label: 'Interpretación cristiana tradicional', short: 'CRISTIANA',
      tone: 'sequenced',
      def: 'Lectura sostenida ampliamente en la tradición cristiana, patrística o posterior.' },
    { id: 'denominational', rank: 8, label: 'Posición confesional', short: 'CONFESIONAL',
      tone: 'contested',
      def: 'Postura propia de una confesión o corriente concreta, no compartida por todas.' },
    { id: 'debated', rank: 9, label: 'Hipótesis académica debatida', short: 'DEBATIDA',
      tone: 'contested',
      def: 'Propuesta seria en la investigación, pero sin consenso; hay especialistas a favor y en contra.' },
    { id: 'symbolic', rank: 10, label: 'Lectura simbólica', short: 'SIMBÓLICA',
      tone: 'symbolic',
      def: 'Interpreta el pasaje como imagen o figura más que como descripción referencial.' },
    { id: 'mystical', rank: 11, label: 'Interpretación mística o metafísica', short: 'MÍSTICA',
      tone: 'symbolic',
      def: 'Lectura teológica, filosófica o mística. No es una afirmación empírica ni pretende serlo.' },
    { id: 'speculative', rank: 12, label: 'Especulación moderna', short: 'ESPECULACIÓN',
      tone: 'contested',
      def: 'Propuesta reciente sin apoyo académico establecido. Se documenta porque circula, no porque esté sostenida.' },
    { id: 'artistic', rank: 13, label: 'Reconstrucción artística', short: 'ARTÍSTICA',
      tone: 'symbolic',
      def: 'Imagen o ambientación creada para el sitio. No es un documento histórico ni una afirmación sobre los hechos.' },
    { id: 'unknown', rank: 14, label: 'Indeterminable', short: 'SIN DETERMINAR',
      tone: 'contested',
      def: 'La evidencia disponible no permite decidir. Registrado como pregunta abierta.' }
  ];

  AD.data.evidenceById = {};
  AD.data.evidenceLevels.forEach(function (e) { AD.data.evidenceById[e.id] = e; });

  /* Estados de cumplimiento profético (§11). Deliberadamente no binarios. */
  AD.data.fulfilmentStatus = [
    { id: 'documented', label: 'Asociada a un hecho histórico documentado',
      def: 'Existe un acontecimiento fechable que la mayoría de intérpretes relaciona con el pasaje.' },
    { id: 'in-narrative', label: 'Interpretada como cumplida dentro del relato bíblico',
      def: 'El propio texto bíblico presenta el cumplimiento en un pasaje posterior.' },
    { id: 'in-christ', label: 'Interpretada por los cristianos como cumplida en Cristo',
      def: 'Lectura cristiana tradicional. El judaísmo no la comparte, y eso se hace constar.' },
    { id: 'partial', label: 'Parcialmente cumplida según algunos marcos',
      def: 'Cumplimiento inaugurado pero no consumado: el esquema "ya y todavía no".' },
    { id: 'ongoing', label: 'Continua o recurrente según algunos marcos',
      def: 'Se entiende como un patrón que se repite, no como un suceso único.' },
    { id: 'future', label: 'Futura según algunos marcos',
      def: 'Situada enteramente por delante en al menos una tradición interpretativa relevante.' },
    { id: 'symbolic-read', label: 'Simbólica más que cronológica según algunos marcos',
      def: 'Se lee como figura de una realidad permanente, no como agenda de sucesos.' },
    { id: 'modern-claim', label: 'Identificación moderna especulativa',
      def: 'Alguien la ha vinculado a un hecho contemporáneo sin respaldo académico. Se documenta y se etiqueta.' },
    { id: 'insufficient', label: 'Evidencia insuficiente',
      def: 'No hay base suficiente para afirmar ni negar un cumplimiento.' }
  ];
  AD.data.fulfilmentById = {};
  AD.data.fulfilmentStatus.forEach(function (f) { AD.data.fulfilmentById[f.id] = f; });
})(window.AD);
