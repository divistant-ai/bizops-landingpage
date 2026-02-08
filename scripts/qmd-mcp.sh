#!/usr/bin/env bash
# Menjalankan QMD MCP server. Mencari binary qmd di PATH atau ~/.bun/bin.
set -e
QMD=""
if command -v qmd &>/dev/null; then
  QMD="qmd"
elif [ -x "$HOME/.bun/bin/qmd" ]; then
  QMD="$HOME/.bun/bin/qmd"
else
  echo "QMD not found. Install with: bun install -g github:tobi/qmd" >&2
  exit 1
fi
exec "$QMD" mcp
