# Prompts para los 11 fondos

Cada imagen sustituye a `plates/<nombre>.jpg`. Genera las que quieras: las que no
me pases, se quedan con el render actual.

## Especificaciones técnicas

- **Proporción 16:9** obligatoria (`--ar 16:9`). Mínimo 1920×1080, ideal 2560×1440.
- JPEG, PNG o WebP — cualquiera vale, yo convierto.
- **Deja aire en los bordes**: el sitio hace un push-in lento (zoom 1.05 → 1.13),
  así que un ~8 % del borde se recorta. Nada importante pegado al margen.
- **Tercio izquierdo despejado**: ahí van el título y el texto de cada escena.
  Cielo, agua, niebla o sombra en esa zona — nada de detalle fino.
- **Sin personas, sin rostros, sin figuras religiosas, sin texto ni letras,
  sin objetos modernos.** Paisaje, arquitectura antigua, cielo y luz.

## Bloque de estilo — añádelo a TODOS los prompts

Esto es lo que hace que las 11 parezcan una sola película y no 11 imágenes sueltas.

```
shot on 65mm large format, anamorphic lens, natural volumetric light,
deep atmospheric haze, physically accurate sky, fine film grain,
muted filmic color grade, high dynamic range, no people, no text,
photorealistic, cinematic still --ar 16:9
```

**Negativo** (si tu herramienta lo admite):
```
--no people, faces, figures, text, letters, watermark, logo, cartoon,
illustration, painting, CGI look, oversaturated, HDR halo, fisheye, tilt
```

---

## Los 11 prompts

### 1 — `prologue.jpg` · Antes de la primera luz
```
A vast dark ocean under a deep blue pre-dawn sky, the first cold grey light
just touching the horizon, dense starfield still visible overhead, long slow
swell with almost no wind, thin low mist over the water, nothing else in frame
```

### 2 — `origins.jpg` · El principio de todo (Génesis)
```
Sunrise breaking over a primordial sea, immense towering cumulus clouds lit
from within, a single blazing path of golden light on the water reaching the
camera, shafts of light spilling through gaps in the cloud, warm amber and
deep bronze, immense scale
```

### 3 — `foundations.jpg` · Los profetas · desierto de noche
```
Moonlit desert wilderness of the ancient Near East, long sculpted sand dunes
in cold blue light, brilliant Milky Way overhead, a thin band of high cirrus
catching the moon, absolute stillness, no vegetation, no structures
```

### 4 — `signs.jpg` · Señales · país de colinas al alba
```
Dawn over the arid hill country of the Levant, layered ridges receding into
teal morning haze, a heavy storm front approaching from the right, sunlight
breaking in one narrow band across the valley floor, cool grey-green palette,
olive terraces just visible in the distance
```

### 5 — `tribulation.jpg` · Tribulación · ruinas bajo el humo
```
Ruins of an ancient stone city at dusk under thick drifting smoke, toppled
limestone walls and broken columns, a low blood-red sun burning through the
haze, embers and ash suspended in the air, deep red and charcoal palette,
desolate, no fire visible
```

### 6 — `adversaries.jpg` · Figuras adversarias · columnata al anochecer
```
A long colonnade of weathered ancient stone columns at twilight, dense low
fog rolling between them, violet and deep purple sky, one cold shaft of
light falling between two columns, imposing scale, empty, no statues,
no figures
```

### 7 — `cosmos.jpg` · Perturbaciones cósmicas · eclipse
```
Total solar eclipse over a high mountain range, the black disc ringed by a
white corona, the landscape below in deep cold blue twilight, stars appearing
in the darkened sky, sharp snow ridges receding into distance, silent and
immense
```

### 8 — `parousia.jpg` · La venida · mar de nubes dorado
```
Aerial view above an endless sea of clouds at golden hour, brilliant sun low
on the horizon, enormous god rays fanning across the cloud tops, warm gold and
white, the cloud deck stretching to a curved horizon, overwhelming light,
nothing solid in frame
```

### 9 — `judgement.jpg` · Resurrección y juicio · agua en calma
```
Perfectly still water under a high hard white sun, immense pale cumulus
towers reflected on the mirror surface, cool desaturated light, a faint rose
tone in the highest clouds, absolute stillness, vast emptiness, no shore
```

### 10 — `restoration.jpg` · Restauración · la ciudad en luz dorada
```
Golden hour over an ancient walled city on a hill, warm limestone walls and
gates, a river running toward the camera through green terraced groves,
soft haze, low warm sun behind the city, abundant and peaceful,
no people, no modern buildings
```

### 11 — `coda.jpg` · Coda · las estrellas otra vez
```
Calm dark water under a full starfield, the Milky Way arching overhead and
mirrored on the still surface, faint blue-green airglow on the horizon,
utter quiet, the same sea as the opening but at peace
```

---

## Cuando las tengas

Adjúntalas en el chat. Las nombro, convierto y despliego — el sistema de
movimiento, los puntos interactivos y el color ya están listos y no hay que
tocar nada más.
