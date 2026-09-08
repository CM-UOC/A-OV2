# Informe de despliegue

**URL desplegada** https://cm-uoc.github.io/A-OV2/
**Repositorio** CM-UOC/A-OV2 · rama `main` · Pages desde `main` raíz, base `/A-OV2/`
**Commit** `100afbb` · **Build** correcto, verificado en vivo
**A-O** intacto: `49925f2` antes y después. Sólo lecturas (HTTP GET). Cero escrituras.

## Fase 1 · Seguridad del repositorio

| Comprobación | Resultado |
|---|---|
| Directorio de trabajo es repo git | no (`/Users/cm/Downloads/AD`, sin `.git`) |
| Remoto del clon de despliegue | `https://github.com/CM-UOC/A-OV2.git` |
| ¿Es A-OV2? | sí |
| ¿Apunta a A-O? | no |
| Rama activa | `main` |
| Pages | `main` / raíz |
| Rutas absolutas en `index.html` | 0 (66 relativas) |
| Secretos en el commit | 0 |

Verificado antes de cada push, no sólo una vez.

## Qué se ha construido en esta iteración

**Cuatro idiomas escritos nativamente.** No es una traducción: cada lengua trae su
tipografía y sus convenciones bíblicas. `Génesis 1:1` en español, pero `1. Mose 1,1`
en alemán y `Genèse 1,1` en francés — coma, no dos puntos. Guillemets franceses con
espacio fino, `„Anführungszeichen“` alemanas, `«comillas»` españolas. 69 libros
mapeados; el Pentateuco alemán usa la numeración luterana. Las citas de escena usan
la traducción de dominio público propia de cada lengua: Reina-Valera 1909, King James,
Lutherbibel 1912, Louis Segond 1910.

**Preguntas Difíciles.** Tres fichas, cada una en los cuatro idiomas:

1. *¿Estado inicial o ruina anterior?* — Génesis 1:2 con los cuatro modelos que pedía
   el brief, incluida la teoría del intervalo situada en su contexto real: no es una
   lectura antigua sino una propuesta del siglo XIX, en plena discusión sobre la edad
   geológica de la tierra.
2. *La mujer de Caín* — separando dato explícito, armonización tradicional, inferencia
   narrativa, desarrollo legendario e hipótesis moderna.
3. *¿Qué se pierde en la caída?* — cinco posturas, desde la ruptura de relaciones que
   el texto sí afirma hasta la lectura dimensional, etiquetada como anacronismo y
   documentada porque circula, no porque esté sostenida.

Cada ficha añade los dos campos que pediste y que este material no suele tener:
**qué se deduce realmente cuando el lenguaje es figurado** y **para qué está ahí el
episodio**. 12 posturas, todas clasificadas en la escala de 14 niveles de evidencia.

**Lector de pasajes.** 33 pasajes se abren dentro del sitio con su texto completo, en
King James (dominio público). Nada transcrito de memoria: si una cita no tiene texto
incorporado, la ficha lo dice y da la referencia.

**Mapa de conexiones rehecho.** Era de tres columnas rígidas; ahora es un diagrama
radial de cuerdas con trazo animado al seleccionar. Gana los cuatro nodos
deuterocanónicos que faltaban: 1 Macabeos 1:54 (la abominación), 2 Macabeos 7 (la
resurrección de los mártires), Sabiduría 2:24 (la primera identificación conservada
de la serpiente con el diablo) y Eclesiástico 44:16 (Henoc). 56 nodos, 65 relaciones.

**Liquid Glass.** Sistema de tres niveles con luz de canto y tinte tonal, con reservas
para transparencia reducida, contraste alto y navegadores sin `backdrop-filter`.

**Música.** Encendido, apagado y elección entre tres bandas sonoras. Sin control de
volumen, sin barra de progreso, sin play ni pause. Verificado en vivo: 0 controles
de reproducción indebidos en el DOM.

## Pruebas

Suite headless (jsdom) sobre la página real, sin errores de consola:

- 11 escenas · 11 glifos · 25 puntos interactivos, todos con etiqueta accesible
- 15 paneles abren y renderizan
- 4 idiomas conmutan; atributo `lang` correcto; referencias con formato nativo
- 3 fichas de preguntas · 12 posturas · 12 etiquetas de evidencia · 6 bloques de
  deducción y propósito
- Lector de pasajes: abre, pagina versículos, acredita traducción
- Mapa radial: 56 nodos, 65 cuerdas, 4 deuterocanónicos, resaltado al seleccionar
- 0 controles de reproducción indebidos

Verificación en vivo sobre `https://cm-uoc.github.io/A-OV2/`: sello de caché activo,
11 planos (3 inmediatos, resto diferidos), `backdrop-filter` soportado.

## Limitaciones conocidas · lo que falta del brief

Esto es lo que **no** está hecho, dicho sin rodeos:

- **21 de las ~24 preguntas** del §6 siguen pendientes (Nefilim, hijos de Dios, 666,
  Babilonia, milenio, Melquisedec, Seol, bestias de Daniel, criaturas vivientes…).
  La estructura y el motor están; falta escribir el contenido en cuatro idiomas.
- **El corpus principal sigue en inglés**: 101 fichas, 67 libros, 50 términos de
  glosario, 10 marcos. La infraestructura los sirve, pero el texto no está traducido.
- **§11 cumplimiento profético y comparaciones contemporáneas**: el modelo de datos
  (9 estados de cumplimiento) está definido; la vista y el contenido, no.
- **§14 interpretaciones especulativas modernas** (helicópteros, IA, vigilancia): sin
  módulo propio todavía.
- **§16 lenguas originales** y **§17 paralelos culturales**: sólo aparecen dentro de
  fichas concretas, sin sección propia.
- **Los 10 actos del §10** no están como estructura narrativa; el recorrido sigue
  teniendo 11 escenas.
- **Sólo 33 de ~460 pasajes** citados tienen texto completo incorporado.
- No he podido hacer captura visual: el panel del navegador va oculto en este entorno.
  La verificación es por DOM y por consulta directa a la página desplegada.

## Fuentes y licencias

- Texto bíblico: King James Version (1611/1769), Reina-Valera 1909, Lutherbibel 1912,
  Louis Segond 1910 — todas de dominio público.
- Imágenes: 11 planos fotográficos aportados por el propietario del proyecto,
  2048×1152, 2,8 MB en total.
- Audio: sintetizado en el navegador con Web Audio. Cero archivos de audio.
- Tipografías: Cardo, Archivo, IBM Plex Mono (Google Fonts, SIL OFL).
- Bibliografía académica citada en cada ficha y en la sección de fuentes.
