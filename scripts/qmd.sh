#!/usr/bin/env bash
# Wrapper untuk QMD CLI. Mencari binary di PATH atau ~/.bun/bin.
# Usage: scripts/qmd.sh <command> [args...]
# Example: scripts/qmd.sh status | scripts/qmd.sh search "pricing"
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
exec "$QMD" "$@"
