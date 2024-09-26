/// <reference types="vite-ssg" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { fileURLToPath, URL } from 'url';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueRouter({
      /* options */
    }),vue(), mkcert()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssgOptions: {
    crittersOptions: {
      // E.g., change the preload strategy
      preload: 'media',
      // Other options: https://github.com/GoogleChromeLabs/critters#usage
    },
    includedRoutes(paths, routes) {
      // exclude all the route paths that contains 'api'
      return paths.filter((i) => !i.includes('/api/'));
    },
  },
});
