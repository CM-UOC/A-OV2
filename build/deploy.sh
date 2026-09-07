#!/bin/sh
# Publish the site to CM-UOC/A-OV2 (GitHub Pages, main branch, root).
set -e
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
WORK="$1"
[ -n "$WORK" ] || { echo "usage: deploy.sh <clone-dir>"; exit 1; }
rm -rf "$WORK/assets" "$WORK/plates"
cp -R "$ROOT/index.html" "$ROOT/assets" "$WORK"/
mkdir -p "$WORK/plates"
cp "$ROOT/plates"/*.jpg "$WORK/plates"/
cp "$ROOT/ANALYSIS.md" "$ROOT/DESIGN.md" "$ROOT/README.md" "$WORK"/
mkdir -p "$WORK/single"
cp "$ROOT/dist/appointed-time.html" "$WORK/single/index.html"
touch "$WORK/.nojekyll"
echo "staged into $WORK"
