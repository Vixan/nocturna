import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['sigil.svg', 'creatures-atlas.png', 'creatures-atlas-2.png'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
      },
      manifest: {
        name: 'Nocturna — Quiz de creaturi',
        short_name: 'Nocturna',
        description: 'Descoperă ce creatură fantasy te reprezintă.',
        lang: 'ro',
        start_url: '/',
        display: 'standalone',
        background_color: '#171719',
        theme_color: '#171719',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' }
        ]
      }
    })
  ]
})
