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

## Configurar o dominio

Hai un único punto de configuración: `astro.config.mjs`.

```js
const configuredSite = '';
```

Mentres estea baleiro, o proxecto non require dominio: non emite canonical/OG absolutos e non activa `@astrojs/sitemap`. Cando teñas o dominio, escribe alí a URL completa e reconstrúe. O resto de URLs absolutas SEO derivan de `Astro.site`.

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
