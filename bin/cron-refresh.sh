#!/usr/bin/env bash
set -euo pipefail

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

cd "$(dirname "$0")/.."

mkdir -p logs

{
  echo "=== $(date -Iseconds) cron-refresh start ==="
  npm run refresh -- --skip-if-fresh
  npm run export
  npm run build
  npx wrangler pages deploy dist --project-name x-rank --branch main --commit-dirty=true
  echo "=== $(date -Iseconds) cron-refresh done ==="
} >> logs/scheduler.log 2>&1
