/// <reference types="vite-ssg" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages(), basicSsl()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  ssgOptions: {
    crittersOptions: {
      // E.g., change the preload strategy
      preload: "media",
      // Other options: https://github.com/GoogleChromeLabs/critters#usage
    },
    includedRoutes(paths, routes) {
      // exclude all the route paths that contains 'api'
      return paths.filter(i => !i.includes('/api/'))
    },
  },
})
