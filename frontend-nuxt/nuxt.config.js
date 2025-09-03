// nuxt.config.js
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // ✅ Estilos globales
  css: ['~/assets/css/main.css'],

  // ✅ Módulos de Nuxt
  modules: ['@pinia/nuxt'],

  // ✅ Configuración de Vite para Tailwind CSS v4
  vite: {
    plugins: [tailwindcss()]
  },

  // ✅ Alias personalizado
  alias: {
    '@': './'
  },

  // ✅ Configuración de variables públicas
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001/api'
    }
  }
})
