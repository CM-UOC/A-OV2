# Herramientas de render

Los fondos de `plates/` se renderizan sin conexión con estos dos ficheros.

    node render-plates.js           # los 11, a 640x360
    W=1600 H=900 STEPS=110 SS=4 DENOISE=2 node render-plates.js

- `plate.js` — el motor: cielo Rayleigh/Mie analítico, nubes volumétricas con
  marcha de luz y dispersión múltiple, plano de agua animado, terreno con
  perspectiva aérea.
- `render-plates.js` — definición de las 11 escenas (sol, nubes, cámara,
  gradación) más god rays, bloom, denoise y el grade de película.

Salida en PNG. `build/plates.sh` los convierte a JPEG para la web.

Para sustituirlos por imágenes propias no hace falta nada de esto: basta con
dejar `plates/<escena>.jpg` en 16:9. Ver `PROMPTS.md`.
