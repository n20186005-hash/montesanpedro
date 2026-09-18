# Estado de QA da entrega

## Comprobacións de fonte realizadas

- `site` está configurado como `https://montesanpedro.com` en `astro.config.mjs`: xera `canonical`, URL absolutas de Open Graph, `@id` do JSON-LD e o sitemap (`/sitemap-index.xml`).
- `public/robots.txt` inclúe a liña `Sitemap` apuntando ao índice do sitemap.
- Os datos da entidade (nome oficial, nome curto, cidade, provincia, país, código postal, coordenadas, plus code, enderezo e ligazóns oficiais) están nun único bloque de constantes ao comezo de `src/pages/index.astro`.
- JSON-LD `TouristAttraction`/`Park` con `@id`, `name`, `alternateName`, `description`, `url`, `image`, `geo`, `hasMap`, `sameAs`, `isAccessibleForFree` e `openingHoursSpecification`.
- **Sen `aggregateRating` nin `review` no JSON-LD**: a valoración (`4,7 / 5`) e o número de opinións (`12.365`) están sincronizados coas opinións de usuarios de Google Maps e móstranse **só na páxina**, coa nota de orixe e a ligazón á ficha de Google Maps.
- Nota de orixe xunto á valoración: «Valoración e número de opinións sincronizados coas opinións de usuarios de Google Maps · setembro de 2026 · Ver todas as opinións en Google Maps ↗».
- Sección de opinións (`#opinions`): aviso de que as opinións están sincronizadas desde Google Maps (sincronización: setembro de 2026), que a autoría e os dereitos pertencen aos autores e a Google Maps, e botón «Ver todas as opinións en Google Maps».
- Sección de fontes (`#fontes`): Turismo da Coruña (Concello), Turismo de Galicia (Xunta), Compañía de Tranvías da Coruña, Wikimedia Commons e a entrada «Opinións · sincronización: setembro de 2026» coa mesma nota de orixe e ligazón á fonte.
- `FAQPage` con 8 preguntas en galego.
- Todas as ligazóns externas (Google Maps, Turismo da Coruña, Turismo de Galicia, Tranvías, Wikimedia Commons) manteñen `target="_blank"` e `rel="noopener noreferrer"`.
- Iframe de Google Maps con `hl=gl` e `referrerpolicy="strict-origin-when-cross-origin"`.
- Todas as imaxes `<img>` (hero, canóns, Cúpula Atlántica) teñen `alt` vinculado á entidade; o hero carga con `loading="eager"` e `fetchpriority="high"`.
- PWA: `public/manifest.webmanifest` (nome, cores da marca, `standalone`, atallos), `public/sw.js` (cachea só recursos do propio dominio) e iconas `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`; rexistro do service worker na páxina.
- Non se incorporaron `example.com`, `localhost` nin `chrome-extension://` ao código fonte.
- GA4 configurado con `G-HXM22WWPKP`.
- Logo e favicon comparten símbolo e paleta coas iconas da PWA.

## Verificación local executada

Contorno: Windows, Node.js `24.14.0`, pnpm `12.4.2` con `--config.node-linker=hoisted`.

```bash
pnpm install --config.node-linker=hoisted
node node_modules/astro/bin/astro.mjs build
```

`astro build` rematou con código 0 e xerou `dist/index.html`, `dist/sitemap-index.xml`, `dist/sitemap-0.xml`, `dist/robots.txt`, `dist/manifest.webmanifest`, `dist/sw.js`, as iconas e `dist/_astro/*.css`.

Comprobacións sobre `dist/index.html`:

- 2 bloques JSON-LD que parsean correctamente: `TouristAttraction`/`Park` (`@id: https://montesanpedro.com/#attraction`, `image`, `geo`, `hasMap`, `sameAs`) e `FAQPage` con 8 preguntas.
- O JSON-LD **non** contén `aggregateRating` nin `review`.
- `canonical=https://montesanpedro.com/`, `og:image`, `og:image:alt` e `twitter:card` presentes.
- `title`: `Monte de San Pedro (A Coruña) - Guía de visita e localización`.
- Un único `H1` con «Monte de San Pedro (A Coruña)» e 9 `H2` semánticos (Sobre, Historia, Visita, Aviso do ascensor, Localización, Arredores, Opinións, FAQ, Fontes).
- Nota de orixe da valoración (2 aparicións) e nota de orixe das opinións (2 aparicións), sempre con ligazón a Google Maps.
- `node --check public/sw.js` e `JSON.parse(public/manifest.webmanifest)` sen erros.
- `dist/robots.txt` apunta a `https://montesanpedro.com/sitemap-index.xml` e `dist/sitemap-0.xml` contén `https://montesanpedro.com/`.

Notas do contorno:

- `pnpm-workspace.yaml` inclúe `allowBuilds: { esbuild: true }`. Sen ese valor, pnpm 12 remata con `ERR_PNPM_IGNORED_BUILDS` despois de instalar os paquetes.
- `pnpm check` (`astro check`) non se executou porque o prompt interactivo de pnpm bloquea este contorno; a verificación apoiouse en `astro build` e no lint do editor.

## Pendente antes de publicación

- Substituír os seis resumos de opinións de `#opinions` por extractos literais e verificados da ficha de Google Maps, mantendo a atribución de autoría e sen inventar nomes nin datas.
- Revisar periodicamente as cifras de valoración/opinións e a data de `REVIEWS_SYNC_TIME`.
