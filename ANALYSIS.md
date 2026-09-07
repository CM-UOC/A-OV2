# Reference evaluation and redesign brief

Reference: **Alpha & Omega · A Biblical Atlas** — https://cm-uoc.github.io/A-O/
Measured in-browser on 2026-09-07 (DOM, network, computed styles).

---

## 1. Evaluation of the reference

**What it is, technically.** A Next.js static export. Twelve `<section>`s, each exactly
one viewport tall (document height 8,640 px at a 720 px viewport = 12 × 720). Zero
`<canvas>` elements. Four `.webp` background photographs, 1536 × 1024, totalling 810 KB,
reused across the twelve chapters: `primordial-waters` ×4, `desert` ×4, `garden` ×2,
`new-creation` ×2. One `clouds-loop.mp4` present in the DOM with `autoplay = false`.
Typography is system Georgia and Arial — no webfont is loaded.

### What already works well

- **Restraint.** One line of text per chapter, a title, and one or two references. The
  discipline of the copy is the best thing about it, and it is worth keeping exactly.
- **Structural clarity.** α "The Beginning" and ω "The Last Things" as the two poles,
  with a numbered 01–12 chapter spine, is legible in three seconds.
- **Tone.** Dark ground, warm light, wide serif italic display. Serious without being
  grim. It does not sensationalise the subject, which matters here.
- **A real accessibility baseline.** Skip link, correct `h1`/`h2` order, two labelled
  `nav` regions, an `aria-live` region, and named chapter buttons.
- **Good affordances.** "Explore this scene", "Look closer" hotspots, a Reading room, a
  sound toggle, and a chapter navigator — the right set of controls.
- **The closing gesture.** "See how the end echoes the beginning" is the strongest single
  idea in the piece, and it is under-used.

### What is static, repetitive, or technically limited

1. **Four images across twelve chapters.** Chapters 3, 5, 6 and 8 are the same desert
   photograph. The repetition is visible within one scroll and undoes the immersion.
2. **No scroll-driven animation.** Each chapter is exactly one viewport with no sticky
   frame, so there is no camera movement, no parallax, and no scrub. The transitions are
   cross-fades between fixed backdrops — a slideshow, not a journey.
3. **The atmospheric video never plays.** `clouds-loop.mp4` is in the DOM with autoplay
   off and no poster, so the promised motion is absent.
4. **Static images cannot respond.** Light does not change with the chronology, weather
   does not build, and nothing in the frame moves. The imagery is wallpaper behind text.
5. **No responsive images.** One 1536 px asset is served to every device; `garden.webp`
   alone is 381 KB. On a phone that is wasted bandwidth for a downscaled result.
6. **Generic type.** System Georgia is a reasonable fallback but it is the default of a
   thousand sites; it does no identity work for a subject with its own scribal tradition.
7. **Hotspots are shallow.** Two per scene, fixed to the layout rather than to the image,
   so they do not behave like points in a place.
8. **Two modes are implied but not built.** "Reading room" exists, but there is no real
   passage between the cinematic layer and a study layer, and no way to compare
   interpretations — a gap that matters for this subject specifically.

---

## 2. Specific improvements

| # | Improvement | Why |
|---|---|---|
| 1 | Replace recycled stills with a **rendered environment per scene** — volumetric clouds, atmospheric scattering, water, terrain | Every scene becomes unique and alive; no repetition is possible |
| 2 | **Physically-driven light**: one sun with an elevation and azimuth per scene drives sky colour, cloud shading, water glitter and terrain | Light genuinely changes as the chronology progresses |
| 3 | **A real 3-D camera** with a per-scene path, scrubbed by scroll | Parallax and depth become a consequence of geometry, not a CSS trick |
| 4 | **Sticky scenes at 180 vh** so the caption holds while the camera moves | Turns a slideshow into continuous travel |
| 5 | **World-anchored hotspots** that project through the camera and parallax with it | Points belong to the place rather than the page |
| 6 | **Journey Mode ↔ Study Mode** with preserved scroll position | The cinematic and scholarly layers stop competing |
| 7 | **An interactive atlas** of the ancient Near East linking places to scenes and passages | The one thing the reference's title promises and does not deliver |
| 8 | **Film-strip chronology navigator** with live scene tinting | Faster orientation than a numbered list |
| 9 | **Layered ambient audio**, off by default, with an audio description | Atmosphere without autoplay and without excluding anyone |
| 10 | **Adaptive resolution and step counts**, paused when hidden | Cinematic on a desktop GPU, still smooth on a phone |
| 11 | **A distinct typographic identity** — Cardo, cut for classical and biblical scholarship | Identity work the reference leaves undone |
| 12 | **Explicit evidence labelling** on every card: text / reconstruction / interpretation | The subject demands it, and the reference does not do it |

---

## 3. Visual direction

**"A rendered place, graded like film."**

No photographs and no stock video. Every environment is generated in the browser, which
means each of the eleven scenes is unique, lit by its own sun, and in motion. It also
means the entire experience is one file with no media payload.

- **Light.** A single sun per scene with a physical elevation and azimuth. Sky colour
  comes from a Rayleigh/Mie scattering approximation, so a sun at −2° gives a real dawn
  and a sun at 60° gives a hard white noon. The chronology is lit from pre-dawn, through
  a smoke-red low sun, an eclipse, a golden-hour arrival, and back to stars.
- **Air.** Volumetric raymarched clouds with a light march toward the sun, so cloud
  bases are dark and edges are silver. Aerial perspective on every terrain layer.
  Volumetric shafts where the sun sits behind cloud.
- **Ground.** Ridged terrain layers with distance haze, water with animated normals and
  a sun-glitter path, and rim-lit architectural silhouettes drawn from ancient Near
  Eastern forms — mudbrick massing, colonnades, stepped platforms, city walls with gates.
- **Grade.** Filmic tone map, per-scene lift/gamma/gain, bloom, halation, a trace of
  chromatic aberration at the frame edge, and 35 mm grain. One consistent grade across
  the whole piece.
- **Palette.** Kept from the manuscript-pigment system — iron gall, verdigris, red ochre,
  Tyrian purple, lapis, gold leaf, madder, malachite — now used as the grade target for
  each scene rather than as flat UI colour.
- **Type.** Cardo for display and scripture, Archivo for interface, IBM Plex Mono for the
  reference apparatus.
- **No depicted figures.** Procedural humans would look worse than nothing, and depicting
  sacred figures is contested across the traditions this site addresses. The visual
  language is landscape, architecture, artefact and sky.

---

## 4. The user journey

```
  Overture ─ a held frame, the title, one line
     │
  I. Journey Mode  ── continuous scroll, camera moving through eleven scenes
     │                each scene: title · one sentence · one quotation
     │                hotspots in the frame · entry chips below
     │
     ├── tap a hotspot ─────► contextual card (what the text says + reference)
     ├── tap an entry chip ─► reading drawer (full entry, evidence/interpretation split)
     ├── open the atlas ────► places, linked back to scenes and passages
     │
  II. Study Mode  ── the same chronology as an indexed, filterable corpus
     │                101 entries · frameworks · contested order · 1 Enoch
     │                canon survey · passage map · glossary · sources
     │
     └── return ─────────► back to the exact scene and scroll position
```

Progression is designed as an arc of light and pressure: dark and still (prologue),
first warmth (Genesis), cold clarity (the prophets), haze (signs), heat and smoke
(tribulation), low fog (adversaries), the eclipse (cosmic), the break (the coming),
high white stillness (judgement), golden calm (restoration), stars again (coda).

---

## 5. Interaction and animation system

- **Scroll is the transport.** Scenes are 180 vh with a sticky inner frame. Scene-local
  progress drives camera position, caption opacity, and hotspot reveal; the last 45 % of
  each scene cross-dissolves every rendering parameter into the next. Nothing cuts.
- **Camera.** Per-scene start and end (height, yaw, pitch, focal length), eased and
  interpolated. Because the renderer is a raymarcher, parallax between cloud, terrain and
  water layers is physical rather than simulated.
- **Hotspots.** Defined in world angles, projected each frame. They fade in with the
  scene, pulse slowly, and are reachable by keyboard in reading order.
- **Reveals.** Caption elements stagger in on a 90 ms cascade; glyphs stroke on;
  entry chips rise as the scene settles. All are scrubbed, not timed, so scrolling
  backwards runs them in reverse.
- **Mode transition.** Journey → Study cross-dissolves while the sky blurs and desaturates
  behind the reading surface. Scroll position is retained on both sides.
- **Reduced motion.** One static frame, no loop, no parallax, captions all visible,
  scenes stacked at natural height. The whole thing remains fully readable.

---

## 6. Media strategy

- **No downloaded media at all.** No images, no video, no audio files. Environments are
  WebGL, foreground elements are canvas 2-D, symbols are inline SVG, ambience is
  synthesized with Web Audio. Total transferred media: 0 bytes.
- **Adaptive resolution.** The render target starts at min(devicePixelRatio, 1.5) and is
  scaled down automatically when the rolling frame time exceeds budget, then back up when
  it recovers.
- **Adaptive quality.** Cloud march steps, light march steps and terrain iterations are
  uniforms, set from a quality tier chosen by pointer type and pixel ratio.
- **Rendering pauses** when the tab is hidden, when a reading panel is open, and in
  Study Mode.
- **Static fallbacks.** If WebGL is unavailable, a graded CSS gradient sky is used and
  the journey still works. If Web Audio is unavailable, the control is hidden.

---

## 7. Accessibility and performance plan

- Full keyboard operation: scenes, hotspots, chips, navigator, drawers, search.
- Visible focus on everything focusable; `Escape` closes any layer.
- `prefers-reduced-motion` replaces the render loop with a single frame and stacks the
  scenes as ordinary readable sections.
- Reading surfaces use the token system and meet 4.5:1 in light and dark; HUD text sits
  on a scrim, never directly on unpredictable sky.
- Audio is off until requested, has a labelled control, and carries an audio description
  for what is playing. Nothing is conveyed by sound alone.
- Every scene's content exists as text in Study Mode — the complete transcript of the
  experience, filterable and screen-readable.
- Colour is never the only carrier: stages also have numerals and names.
- Live regions announce filter result counts and mode changes.

---

## Responsibility

Every environment on this site is an **artistic reconstruction**, not a photograph and
not a historical claim. Scenes are labelled as such in the interface. The site does not
calculate dates, does not identify contemporary people, states, technologies or events
with any prophecy, and does not present one eschatological framework as correct.
1 Enoch appears throughout as a clearly marked comparative source: canonical in the
Ethiopian Orthodox Tewahedo Church, non-canonical in Jewish, Catholic, Orthodox and
Protestant traditions.


---

## Addendum — why the backdrops are pre-rendered

The first build of this site rendered every environment live in a WebGL fragment shader.
That was the wrong call, and it looked it. A realtime shader on a phone can afford roughly
14–26 raymarch steps per pixel; the plates here use 110, with a six-step light march,
multiple scattering, god rays and bloom as separate full-frame passes. Those passes are
simply not affordable at 60 fps, and without them clouds smear and skies wash out.

So the pipeline inverted: render offline at high quality, ship the results as plates, and
spend the realtime budget on **motion** instead — a scroll-driven push-in, cross-fades,
drifting haze, and light shafts that breathe. That is the same architecture the reference
site uses, with two differences: eleven unique plates instead of four recycled ones, and
the stills actually move.
