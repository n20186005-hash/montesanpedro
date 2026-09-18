import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ÚNICO punto para configurar o dominio de produción.
// Déixao baleiro ata ter o dominio; exemplo ao activar: 'https://dominio.tld'
const configuredSite = 'https://montesanpedro.com';
const site = configuredSite.trim() || undefined;

export default defineConfig({
  site,
  output: 'static',
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});
