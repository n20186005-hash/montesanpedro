# Estado de QA da entrega

## Comprobacións de fonte realizadas

- Non existe `pnpm-workspace.yaml` (é un proxecto dun só paquete e non o precisa).
- `site` ten un único punto de configuración en `astro.config.mjs` e pode quedar baleiro.
- O sitemap só se activa cando `site` ten valor.
- Non se incorporaron `example.com`, `localhost` nin `chrome-extension://` ao código fonte.
- GA4 configurado con `G-HXM22WWPKP`.
- Logo e favicon comparten símbolo e paleta.
- JSON-LD de `TouristAttraction`/`Park` e `FAQPage` incluídos.
- Iframe de Google Maps utiliza `hl=gl`.

## Verificación CI pendente por limitación do contorno

O contorno no que se preparou esta entrega bloqueou a conexión HTTPS ao rexistro npm. A descarga de pnpm mediante Corepack fallou con `ECONNREFUSED` contra `registry.npmjs.org`, polo que aquí non foi posible completar de forma honesta:

```bash
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Pola mesma razón, non se xerou un `pnpm-lock.yaml` inventado ou non verificado: facelo daría unha falsa aparencia de reproducibilidade. En canto se execute nun contorno con acceso ao rexistro, hai que xerar o lockfile con pnpm 12.4.2 e repetir exactamente a secuencia anterior antes de produción.

## Comprobación recomendada tras o build

```bash
! grep -RInE 'example\\.com|localhost|chrome-extension://' dist
```

Se `configuredSite` segue baleiro, non debe existir sitemap. Se se configura un dominio real, `@astrojs/sitemap` debe xerar o sitemap a partir dese dominio e non se debe engadir `lastmod` manual.
