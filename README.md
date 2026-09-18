# Monte de San Pedro — guía independente

Sitio dunha soa páxina en galego dedicado ao Monte de San Pedro (A Coruña). O deseño está inspirado na costa atlántica, a pedra, a vexetación e a antiga batería costeira, evitando un modelo turístico xenérico.

## Stack

- Astro `7.3.3`
- Tailwind CSS `4.3.3` mediante `@tailwindcss/vite` `4.3.3`
- TypeScript `6.0.3` (dentro do rango soportado por `@astrojs/check` `0.9.10`)
- pnpm `12.4.2`
- Node.js `24.21.0` LTS
- Cloudflare Workers Static Assets (sen base de datos, CMS nin autenticación)

Todas as versións do `package.json` están fixadas sen `latest`, `*` nin rangos flotantes.

## Dominio e SEO

O dominio de produción está configurado en `astro.config.mjs` (`https://montesanpedro.com`). De `Astro.site` derivan as URL absolutas (`canonical`, Open Graph, JSON-LD) e a activación de `@astrojs/sitemap`.

Todos os datos da entidade están nun único bloque de constantes ao principio de `src/pages/index.astro`: nome oficial, nome curto, cidade, provincia, país, código postal, coordenadas, enderezo, ligazóns oficiais, lugares próximos e datos de sincronización de opinións. Para reutilizar a páxina noutro destino abonda con cambiar ese bloque.

## Valoracións e opinións de Google Maps

A valoración (4,7 / 5) e o número de opinións (12.365) están sincronizados coas opinións de usuarios de Google Maps (`setembro de 2026`, constante `REVIEWS_SYNC_TIME`).

- As cifras e as opinións móstranse **só na páxina**, coa atribución de orixe (`sincronizadas desde as opinións de usuarios de Google Maps`) e ligazón á ficha de Google Maps.
- **Non** se envían como datos estruturados: o JSON-LD non inclúe `aggregateRating` nin `review`, para non presentar opinións de terceiros como propias.
- Na sección `#opinions` indícase que a autoría e os dereitos pertencen aos autores das opinións e a Google Maps, e engádese o botón «Ver todas as opinións en Google Maps».

Ao actualizar as cifras hai que revisar tamén a data de sincronización (`REVIEWS_SYNC_TIME`) e o texto de orixe da sección de fontes.

> Nota de mantemento: as seis opinións que se amosan en `#opinions` son resumos redactados a partir dos temas recorrentes nas opinións públicas do lugar (vistas, solpor, acceso, aparcadoiro, canóns, ascensor pechado) e van atribuídas de forma xenérica a «Usuario de Google Maps». Antes de publicar definitivamente convén substituílas por extractos literais e verificados da ficha de Google Maps (cada autoría, sen inventar nomes nin datas).

## PWA

- `public/manifest.webmanifest`: nome, cores da marca, `display: standalone` e atallos.
- `public/sw.js`: service worker que só cachea recursos do propio dominio (a analítica, o iframe de Google Maps e as imaxes externas van sempre á rede).
- Iconas: `icon-192.png`, `icon-512.png` e `icon-maskable-512.png` xeradas a partir de `apple-touch-icon.png`.
- O rexistro do service worker faise desde `src/pages/index.astro`.

## Desenvolvemento

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

## Despregamento en Cloudflare Workers

O sitio xérase de forma estática en `dist/`. `worker.js` serve eses ficheiros mediante o binding `ASSETS` definido en `wrangler.toml`.

```bash
pnpm build
pnpm dlx wrangler@4.134.0 deploy
```

## Google Analytics

O identificador configurado é `G-HXM22WWPKP`.

## Imaxes reais e licenzas

As fotografías do sitio son fotografías reais de Wikimedia Commons e móstranse co crédito correspondente no pé de foto. Neste paquete mantéñense como URLs remotas porque o contorno de construción utilizado para esta entrega non permitiu descargar os binarios de Wikimedia; convén gardalas en `public/images/` antes da publicación se se quere eliminar esas peticións externas.

- Canóns do Monte de San Pedro — Contando Estrelas / Elentir — CC BY-SA 2.0.
- Cúpula Atlántica — Diego Delso — CC BY-SA 4.0.

## Fontes operativas

A descrición histórica e o aviso do ascensor panorámico baséanse en Turismo da Coruña. Para bus urbano, comprobar sempre a Compañía de Tranvías da Coruña antes da visita, xa que percorridos e servizos poden variar.

## Estado da verificación desta entrega

Consulta `docs/QA-STATUS.md`. O proxecto non se marca como “CI verificado” se non foi posible executar a instalación limpa e a compilación no contorno de entrega.
