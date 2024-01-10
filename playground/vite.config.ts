import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { alias } from '../alias'

export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [
    Vue(),
    UnoCSS(),
  ],
})
