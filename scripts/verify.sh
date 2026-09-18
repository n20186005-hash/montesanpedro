#!/usr/bin/env bash
set -euo pipefail
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
if [[ -f pnpm-workspace.yaml ]]; then
  grep -Eq '^packages:' pnpm-workspace.yaml
fi
if grep -RInE 'example\.com|localhost|chrome-extension://' dist; then
  echo 'ERROR: found forbidden placeholder/extension URL in dist' >&2
  exit 1
fi
if [[ -f dist/sitemap-0.xml || -f dist/sitemap-index.xml ]]; then
  if grep -RIn '<lastmod>' dist/sitemap*.xml; then
    echo 'ERROR: sitemap contains lastmod' >&2
    exit 1
  fi
fi
