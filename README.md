# The Appointed Time

An interactive, chronological study of biblical prophecy — from the beginning of all
things in Genesis to the new creation — with the Book of 1 Enoch presented throughout
as a clearly labelled comparative source.

## Running it

No build step and no server required. Open `index.html` in a browser.

Everything is plain classic-script JavaScript on a single `AD` namespace, so the site
runs from `file://` as well as from a server.

To rebuild the single-file version for publishing:

```bash
python3 build/bundle.py
```

That inlines all CSS and JS into `dist/appointed-time.html`.

## Layout

```
index.html                 shell and script manifest
DESIGN.md                  information architecture, content model, visual direction
assets/css/
  tokens.css               design tokens; light, dark, and system themes
  base.css                 elements, chrome, layout
  components.css           cards, filters, lanes, map, overlay
assets/js/
  core/      util, store (filters/search/theme), hash router
  data/      taxonomy, 101 events across 9 stages, 1 Enoch, 11 cinematic scenes,
             frameworks, sequences, canon survey, passage map, glossary, sources
  cinema/    atmosphere (WebGL raymarcher: sky, volumetric cloud, terrain,
             water, grade), foreground (particles), glyphs, hotspots,
             audio (generative Web Audio), panel (reading drawer), journey
  components/ primitives, event card, filter bar, passage map, search overlay
  views/     one module per reading panel
build/bundle.py            single-file bundler for publishing
```

## How the experience is built

Eleven scenes scroll past a rendered environment. No image, video, or media file is
loaded. A WebGL fragment shader raymarches the whole place — analytic Rayleigh/Mie sky,
volumetric clouds with a light march, a ground plane with aerial perspective, ridge
silhouettes, an animated water surface with sun glitter, volumetric shafts, and a filmic
grade. A real 3-D camera is moved by scroll, so parallax is geometric rather than faked.
Every parameter interpolates between scenes, so nothing cuts.

Sound is generative: a drone, a chord progression and a bell motif, each scene with its
own root, mode, progression and tempo. It stays silent until switched on and publishes an
accessible description of what is playing.

See ANALYSIS.md for the evaluation of the reference site and the full redesign brief.

All reference material opens in a drawer over the journey rather than on its own page.
`prefers-reduced-motion` swaps the whole thing for a static, stacked, readable version.

## Editorial rules the code enforces

1. Every event card renders two visually distinct blocks — *What the text says* and
   *How it has been read*. Interpretation is never presented as description.
2. Where the sequence is disputed, five reconstructions are shown in parallel;
   no single timeline is presented as correct.
3. 1 Enoch entries carry `source: 'comparative'`, a dashed border, and a canon label,
   and can be filtered out entirely.
4. No date is calculated for the end of the world, and no contemporary person, state,
   religion, technology, or event is identified as the fulfilment of a prophecy.

## Content model

See `DESIGN.md` for the full schema. Each event carries: title, summary, exact
chapter-and-verse references, literary and historical context, symbols, themes,
a chronological-certainty level, attributed interpretive alternatives, related
entries, and any parallel in 1 Enoch with its relation type.
