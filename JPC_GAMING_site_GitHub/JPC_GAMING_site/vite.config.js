import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const fromRoot = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: fromRoot('./index.html'),
        privacidade: fromRoot('./privacidade.html'),
        termos: fromRoot('./termos.html'),
        suporte: fromRoot('./suporte.html'),
        exclusaoDeDados: fromRoot('./exclusao-de-dados.html'),
        streamerJpc: fromRoot('./jogos/streamerjpc.html'),
        aventuraPixel2D: fromRoot('./jogos/aventurapixel2d.html'),
      },
    },
  },
})