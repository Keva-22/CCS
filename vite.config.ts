import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' → relative Pfade, damit die Seite auch in einem Unterordner
// (z. B. GitHub Pages: https://<name>.github.io/<repo>/) funktioniert.
export default defineConfig({
  base: './',
  plugins: [react()],
});
