// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // ✅ Estilos globales
  css: ['~/assets/css/main.css'],

  // ✅ Módulos de Nuxt
  modules: ['@pinia/nuxt'],

  // ✅ Plugins Vite
  vite: {
    plugins: [tailwindcss(), tsconfigPaths()]
  },

  // ✅ Alias personalizado (si realmente lo necesitas)
  alias: {
    '@': './'
  },

  // ✅ Configuración de variables públicas (para usar en cliente y servidor)
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE // Puedes cambiarlo por una variable de entorno si quieres
    }
  }
})
