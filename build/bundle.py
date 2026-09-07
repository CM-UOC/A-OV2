#!/usr/bin/env python3
"""Inline every stylesheet and script into a single artifact-ready HTML file.

The Artifact host wraps the file in <!doctype html><head>…</head><body>, so the
output carries no doctype/html/head/body tags — only <title>, <link> for fonts,
<style>, the markup, and <script>.
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'index.html')
OUT = os.path.join(ROOT, 'dist', 'appointed-time.html')

html = open(SRC, encoding='utf-8').read()

def read(rel):
    with open(os.path.join(ROOT, rel), encoding='utf-8') as f:
        return f.read()

css = [m for m in re.findall(r'<link rel="stylesheet" href="(assets/[^"]+)">', html)]
js = re.findall(r'<script src="([^"]+)"></script>', html)

parts = []
parts.append('<title>The Appointed Time</title>')
parts.append('<link rel="preconnect" href="https://fonts.googleapis.com">')
parts.append('<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>')
parts.append('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
             'family=Archivo:wght@400;500;600;700&family=Cardo:ital,wght@0,400;0,700;1,400'
             '&family=IBM+Plex+Mono:wght@400;500&display=swap">')
parts.append('<style>\n' + '\n'.join(read(p) for p in css) + '\n</style>')

# inline the rendered plates as data URIs so the artifact is one self-contained file
import base64, glob as _glob
plate_dir = os.path.join(ROOT, 'plates')
plate_js = {}
for f in sorted(_glob.glob(os.path.join(plate_dir, '*.jpg'))):
    name = os.path.splitext(os.path.basename(f))[0]
    if name.startswith('_'):
        continue
    with open(f, 'rb') as fh:
        plate_js[name] = 'data:image/jpeg;base64,' + base64.b64encode(fh.read()).decode('ascii')
if plate_js:
    import json as _json
    parts.append('<script>window.AD_PLATE_DATA=' + _json.dumps(plate_js) + ';</script>')
    print('inlined %d plates (%.1f MB)' % (len(plate_js), sum(len(v) for v in plate_js.values()) / 1048576.0))
parts.append('<a class="skip-link" href="#main">Skip to content</a>')
parts.append('<div id="plates" aria-hidden="true"></div>')
parts.append('<canvas id="fg" class="layer" aria-hidden="true"></canvas>')
parts.append('<div class="layer layer--wash" aria-hidden="true"></div>')
parts.append('<div id="app"></div>')
parts.append('<script>\n' + '\n'.join(read(p) for p in js) + '\n</script>')

os.makedirs(os.path.dirname(OUT), exist_ok=True)
with open(OUT, 'w', encoding='utf-8') as f:
    f.write('\n'.join(parts) + '\n')

size = os.path.getsize(OUT)
print('wrote %s (%.1f KB) — %d stylesheets, %d scripts' % (OUT, size / 1024.0, len(css), len(js)))
