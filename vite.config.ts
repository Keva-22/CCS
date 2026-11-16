import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { hero, links, site, team } from './src/content';

// Setzt Titel, Beschreibung und Link-Vorschau aus src/content.ts in index.html ein
// (Platzhalter %…%), damit auch diese Angaben nur an einer Stelle stehen.
function contentInHtml(): Plugin {
  const values: Record<string, string> = {
    SITE_TITLE: team.name,
    SITE_MOTTO: team.motto,
    SITE_DESCRIPTION: site.description,
    SITE_URL: site.url,
    PREVIEW_IMAGE_ALT: site.previewImageAlt,
    HERO_IMAGE: hero.background.src,
    INSTAGRAM_URL: links.instagram,
  };
  const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

  return {
    name: 'content-in-html',
    transformIndexHtml: {
      // 'pre': vor Vites eigener Verarbeitung, damit die Bildpfade danach normal behandelt werden
      order: 'pre',
      handler: (html) => html.replace(/%(\w+)%/g, (match, key: string) => (key in values ? escapeHtml(values[key]) : match)),
    },
  };
}

// base: './' → relative Pfade, damit die Seite auch in einem Unterordner
// (z. B. GitHub Pages: https://<name>.github.io/<repo>/) funktioniert.
export default defineConfig({
  base: './',
  plugins: [react(), contentInHtml()],
});
