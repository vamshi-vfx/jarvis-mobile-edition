import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/jarvis-mobile-edition/',
  plugins: [react()],
  build: { outDir: 'dist', emptyOutDir: true, cssCodeSplit: true, sourcemap: false, assetsInlineLimit: 4096, assetsDir: 'assets/kalki-site' }
});
