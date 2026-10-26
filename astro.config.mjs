import { defineConfig } from 'astro/config';

// Site statique. Renseigner `site` avec l'URL finale au moment du déploiement
// pour activer les URL canoniques et le sitemap.
export default defineConfig({
  // site: 'https://exemple.com',
  vite: {
    build: {
      // Cible CSS incluant des navigateurs mobiles anciens. Sans cela, le
      // minifieur réécrit les media queries en `@media (width <= 640px)`,
      // non comprise d'iOS < 16.4 ni des vieux WebView Android, ce qui
      // casserait tout le responsive. Avec ces cibles, la syntaxe `max-width`
      // est conservée.
      cssTarget: ['chrome87', 'safari13.1', 'firefox78', 'edge88'],
    },
  },
});
