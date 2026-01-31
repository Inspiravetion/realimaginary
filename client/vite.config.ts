import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ isPreview: _ }) => ({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],

  server: {
    proxy: {
      '/api': {
        // point to our local dev server when running dev
        target: 'http://localhost:3000',
        changeOrigin: true,
        xfwd: true,
      },
    },
  },
}));
