import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    outDir: 'assistant-effects-dist',
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    target: 'es2020',
    lib: {
      entry: 'src/assistant-effects.jsx',
      formats: ['es'],
      fileName: () => 'assistant-effects.js',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'assistant-effects.js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
