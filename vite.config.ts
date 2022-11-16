/// <reference types="vite-ssg" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages()],
  ssgOptions: {
    crittersOptions: {
      // E.g., change the preload strategy
      preload: "media",
      // Other options: https://github.com/GoogleChromeLabs/critters#usage
    },
  },
})
