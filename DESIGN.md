# The Appointed Time — design document

A chronological, interactive study of biblical "end times" prophecy, with 1 Enoch
presented as a clearly labelled comparative (non-canonical for most traditions) source.

Working title / page name: **The Appointed Time** (Dan 8:19; Hab 2:3).

---

## 1. Editorial stance

This is a *reference instrument*, not a warning poster. Three rules govern every
content decision:

1. **Text and interpretation are typographically separate.** Every card carries two
   distinct blocks — `WHAT THE TEXT SAYS` (description + citation) and
   `HOW IT HAS BEEN READ` (interpretation, attributed to a named tradition). They never
   share a visual treatment.
2. **Disputed order is shown as plural, never resolved.** Where sequence is contested the
   site shows five parallel reconstructions side by side rather than one "correct" line.
3. **No date-setting, no identification of living people, states, or technologies with
   any prophecy.** Stated explicitly in the introduction and the methodology page.

Register: museum wall-label prose. Concise, plain, sourced. Never breathless.

---

## 2. Information architecture

Single-page application, hash-routed, eleven views. The chronology runs from the
beginning of all things to the end of all things: stage 0 is Genesis, because the
apocalyptic texts are written as its deliberate mirror (Gunkel's *Urzeit gleicht
Endzeit* — primeval time resembles end time). The `#/mirror` view makes that
correspondence explicit and citable rather than implied.

| # | Route | View | Purpose |
|---|-------|------|---------|
| 1 | `#/introduction` | Introduction | What apocalyptic literature is; how to read the site; limits |
| 2 | `#/timeline` | Chronology | The main instrument: 9 stages, ~66 events, 6 filter axes, search |
| 2b | `#/mirror` | Beginning & End | Genesis motifs paired with their new-creation counterparts |
| 3 | `#/sequences` | Contested order | 5 interpretive reconstructions in parallel lanes |
| 4 | `#/frameworks` | Frameworks | 7 traditions; side-by-side comparison tool |
| 5 | `#/enoch` | 1 Enoch | Comparative source: themes, parallels, cautions |
| 6 | `#/canon` | Canon & apocrypha | Canon, apocrypha, pseudepigrapha, status of 1 Enoch |
| 7 | `#/map` | Passage map | Three-column citation/allusion graph |
| 8 | `#/glossary` | Glossary | ~48 terms and symbols |
| 9 | `#/methodology` | Methodology | Selection criteria, certainty scale, editorial policy |
| 10 | `#/sources` | Sources | Academic bibliography and text editions |

Global chrome: left rail (desktop) / top bar + sheet (mobile), search (`/`), theme toggle,
scroll progress rail, skip link.

---

## 3. Content model

```
Event {
  id, stage, order, title, summary,
  refs: [{ ref, book, testament, note? }],   // exact chapter:verse
  quote?: { text, ref, translation },        // public-domain translations only (KJV/WEB)
  context: string,                           // literary + historical setting
  symbols: [string],
  themes: [themeId],
  certainty: 'anchored'|'sequenced'|'contested'|'symbolic',
  interpretations: [{ framework, text }],    // attributed, neutral
  related: [eventId],
  enoch?: [{ ref, text, relation: 'quotation'|'parallel'|'shared-tradition'|'contrast' }],
  source: 'canonical'|'comparative'
}

Framework { id, name, kind:'reading'|'millennial', thesis, keyTexts[], arguments[],
            limitations[], disputed[], proponents[], color }
Sequence  { id, framework, lanes: [{ label, note, eventIds[] }] }
Theme     { id, label, description }
Term      { id, term, aka?, definition, refs[], seeAlso[] }
MapNode   { id, label, ref, column:'hb'|'st'|'nt', tradition }
MapEdge   { from, to, kind:'quotation'|'allusion'|'shared-imagery', note }
Source    { id, author, title, publisher, year, kind, note }
```

Every text-bearing record carries `source` so canonical and comparative material can
never be silently merged.

**Certainty scale** (deliberately about *chronology*, not truth):
- `anchored` — the text itself places the event relative to others.
- `sequenced` — order is inferred from a wider argument, broadly agreed.
- `contested` — traditions place it at materially different points.
- `symbolic` — the text presents it in visionary/non-sequential terms.

---

## 4. Visual direction

**Concept: the ruled column and the star chart.** The column runs from Genesis 1 to
Revelation 22 — one continuous rule, opening in ink-brown and closing in malachite.
 Two things the sources have in common:
scribes ruled their columns before writing, and apocalyptic vision is astronomical
(1 Enoch 72–82 is literally a book about luminaries). So: the timeline is a ruled scribal
column with a marginal gold rule and sigla in the margin; the ground behind it, in dark
mode, is a slowly drifting field of plotted stars.

**Palette drawn from manuscript pigments** — not decorative naming; each stage takes a
pigment actually used in ancient and medieval manuscript production.

| Token | Pigment | Light | Dark | Stage |
|---|---|---|---|---|
| `--s-origins` | Carbon & bistre ink | `#6B4A2F` | `#C99A6C` | The beginning of all things (Genesis) |
| `--s-foundations` | Iron gall | `#4C5674` | `#8E9AC0` | Earlier prophetic foundations |
| `--s-signs` | Verdigris | `#2A6F68` | `#5FB4A8` | Signs preceding the end |
| `--s-tribulation` | Red ochre | `#9F4A36` | `#D9846C` | Tribulation and judgement |
| `--s-adversaries` | Tyrian purple | `#75406F` | `#BE86B6` | Adversarial figures |
| `--s-cosmos` | Lapis lazuli | `#2E559B` | `#7FA3E0` | Cosmic disturbances |
| `--s-parousia` | Gold leaf | `#9C7420` | `#E0B75A` | The coming of the Messiah |
| `--s-judgement` | Madder lake | `#93375A` | `#DC7C9E` | Resurrection and judgement |
| `--s-restoration` | Malachite | `#4A7538` | `#8CBE6E` | Restoration and new creation |

Neutrals are biased toward indigo, never pure grey. Light ground is cool limestone
(`#E4E2DB`), not the warm-cream default; dark ground is night indigo (`#0D111E`).
Accent throughout is gold leaf — one bold colour, everything else quiet.

**Type — three roles, all subject-grounded:**
- **Cardo** (display, quotations). A face cut for classical and biblical scholarship,
  after Bembo, with Greek and Hebrew coverage. Used for headings and scripture.
- **Archivo** (body, UI). Sturdy grotesque; carries dense interface text without
  reading as a tech landing page.
- **IBM Plex Mono** (apparatus). Chapter-and-verse citations, certainty chips, filter
  counts — the marginal sigla of the scribal column.

**Motion.** One orchestrated idea, not scattered effects: cards rise into the ruled column
as it scrolls, the margin rule fills behind them as a progress indicator, and the star
field drifts. All of it off under `prefers-reduced-motion`.

**Accessibility.** WCAG 2.1 AA target: ≥4.5:1 body contrast in both themes, colour never
the sole carrier of meaning (every stage also has a text label and a margin numeral),
visible focus rings, full keyboard operation of filters/cards/map, live regions on
result counts, semantic landmarks and heading order.

---

## 5. Component hierarchy

```
App
├─ SkipLink
├─ Rail (nav, theme toggle, search trigger)        ← Sheet on mobile
├─ ProgressRule
├─ SearchOverlay (⌘K / “/”, indexes every record)
└─ ViewOutlet
   ├─ IntroductionView   → Lede, PrimerCard[], CautionPanel
   ├─ MirrorView         → MirrorPair[] (Genesis panel | new-creation panel, shared motif)
   ├─ TimelineView
   │  ├─ FilterBar → FilterGroup[] → Chip[], CertaintyKey, ResultCount(live)
   │  ├─ Legend (stage colour + numeral + label)
   │  └─ StageBand[] → EventCard[]
   │     └─ EventCard → StageSigil, RefList, QuoteBlock,
   │                    TextEvidencePanel | InterpretationPanel,
   │                    SymbolChip[], CertaintyChip, EnochParallel[], RelatedLinks
   ├─ SequencesView      → LaneHeader[], LaneStep[], DivergenceNote[]
   ├─ FrameworksView     → FrameworkCard[], CompareTray (pick ≤3), CompareTable
   ├─ EnochView          → SourceBanner, ThemeCard[], ParallelTable, DependenceCaution
   ├─ CanonView          → CanonColumns, StatusTable, Timeline of reception
   ├─ MapView            → PassageGraph (SVG, 3 columns), NodeInspector, EdgeLegend
   ├─ GlossaryView       → AlphaIndex, TermCard[]
   ├─ MethodologyView    → CriteriaList, CertaintyScale, EditorialPolicy
   └─ SourcesView        → SourceGroup[] → SourceEntry[]
```

## 6. Build

Plain ES5-compatible classic scripts registered on a single `AD` namespace, so the site
runs from `file://` with no server and no build step. `build/bundle.py` inlines CSS and JS
into `dist/artifact.html` for publishing.


---

## 7. The cinematic rebuild

The site was rebuilt as a continuous scroll-driven journey. The reference material did
not change; it moved behind the scenes into reading panels.

**No external media.** The artifact sandbox blocks every external image, video, and font
file, so nothing is fetched: the atmosphere is generated in the browser. This also keeps
the whole experience in one 488 KB file.

| Layer | Technique |
|---|---|
| Sky | A full-screen WebGL fragment shader — vertical gradient, fbm cloud field with domain warping, star field, sun/moon/eclipse with corona, horizon band, vignette, grain, filmic tone map. Every uniform is interpolated between scenes, so the sky dissolves rather than cuts. Falls back to a CSS gradient if WebGL is unavailable. |
| Foreground | Canvas 2D. Procedurally generated silhouettes — dunes, ruins, colonnade, mountains, throne, city — from deterministic seeded profiles, plus nine particle behaviours (stars, motes, dust, ash, embers, low fog, falling stars, rising light, pollen). Both cross-fade and parallax against the sky. |
| Glyphs | Inline SVG line art, one symbol per scene, stroked on as the scene arrives. |
| Sound | Web Audio: three detuned oscillators and filtered noise, retuned per scene. Off until asked for; there is no autoplay. |

**Eleven scenes** — prologue, the nine stages, and a coda. Each is 176 vh with a sticky
inner frame, so the caption holds while the camera moves: the shader zooms and drifts,
the silhouettes parallax, and the next scene's palette blends in over the last 45 % of
the scroll.

**Text is short by construction.** A scene carries a kicker, a name, one sentence, one
short quotation, and a row of entry chips. Everything longer — context, references,
interpretations, 1 Enoch parallels, frameworks, canon survey, glossary, sources — opens
in a drawer over the journey. Nothing ever navigates away, and the scene behind never
unmounts.

**Reduced motion** replaces the whole thing with a static, stacked, fully readable
version: no parallax, no render loop, one painted frame, and captions always visible.
