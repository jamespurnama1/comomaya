/// <reference types="vite-ssg" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Pages(), basicSsl()],
  ssgOptions: {
    crittersOptions: {
      // E.g., change the preload strategy
      preload: "media",
      // Other options: https://github.com/GoogleChromeLabs/critters#usage
    },
  },
})
