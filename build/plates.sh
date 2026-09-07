#!/bin/sh
# Convert the rendered PNG plates to web JPEGs.
# The PNGs are the masters; only the JPEGs ship.
set -e
DIR="$(cd "$(dirname "$0")/.." && pwd)/plates"
for f in "$DIR"/*.png; do
  b=$(basename "$f" .png)
  case "$b" in _*) continue ;; esac
  sips -s format jpeg -s formatOptions 72 "$f" --out "$DIR/$b.jpg" >/dev/null
done
ls -la "$DIR"/*.jpg | awk '{printf "%-28s %6.0f KB\n", $9, $5/1024}'
