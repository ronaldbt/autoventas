// nuxt.config.js
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  
  // ✅ Estilos globales
  css: ['~/assets/css/main.css'],
  
  // ✅ Módulos de Nuxt
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap'
  ],
  
  // ✅ Configuración de Vite para Tailwind CSS v4
  vite: {
    plugins: [
      tailwindcss(),
    ],
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
  },

  // ✅ Configuración SEO
  seo: {
    // Meta tags globales por defecto
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Autoventas360' },
      { name: 'language', content: 'es-CL' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Autoventas360' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@autoventas360' }
    ],
    link: [
      { rel: 'canonical', href: 'https://autoventas360.com' }
    ]
  },

  // ✅ Configuración Sitemap
  sitemap: {
    hostname: 'https://autoventas360.com',
    gzip: true,
    exclude: [
      '/admin/**',
      '/cliente/**',
      '/automotora/**',
      '/perito/**',
      '/publicista/**',
      '/login',
      '/register',
      '/unauthorized'
    ],
    routes: async () => {
      const routes = []
      
      try {
        // Aquí se pueden agregar rutas dinámicas desde la API
        // Por ejemplo, rutas de vehículos, marcas, ciudades, etc.
        
        // Rutas de páginas principales
        routes.push(
          { url: '/', changefreq: 'daily', priority: 1.0 },
          { url: '/vehiculos', changefreq: 'daily', priority: 0.9 },
          { url: '/remates', changefreq: 'weekly', priority: 0.8 },
          { url: '/peritajes', changefreq: 'weekly', priority: 0.8 },
          { url: '/servicios', changefreq: 'monthly', priority: 0.7 },
          { url: '/noticias', changefreq: 'weekly', priority: 0.7 },
          { url: '/nuevos', changefreq: 'daily', priority: 0.8 },
          { url: '/electricos', changefreq: 'daily', priority: 0.8 },
          { url: '/analisis', changefreq: 'weekly', priority: 0.6 }
        )

        // Rutas de categorías por marca (más populares) - NUEVA ESTRUCTURA
        const marcasPopulares = [
          'toyota', 'ford', 'chevrolet', 'mazda', 'bmw', 
          'peugeot', 'suzuki', 'volkswagen', 'kia', 'nissan'
        ]
        marcasPopulares.forEach(marca => {
          routes.push({
            url: `/vehiculos/marca-${marca}`,
            changefreq: 'daily',
            priority: 0.8
          })
        })

        // Rutas de categorías por tipo - NUEVA ESTRUCTURA
        const tiposVehiculos = [
          'suvs', 'sedanes', 'camionetas', 
          'hatchback', 'station-wagon', 'coupe'
        ]
        tiposVehiculos.forEach(tipo => {
          routes.push({
            url: `/vehiculos/${tipo}-usados`,
            changefreq: 'daily',
            priority: 0.7
          })
        })

        // Rutas jerárquicas por ubicación (principales combinaciones)
        const ubicacionesPopulares = [
          { region: 'metropolitana', comuna: 'santiago' },
          { region: 'metropolitana', comuna: 'providencia' },
          { region: 'metropolitana', comuna: 'las-condes' },
          { region: 'valparaiso', comuna: 'valparaiso' },
          { region: 'valparaiso', comuna: 'vina-del-mar' },
          { region: 'biobio', comuna: 'concepcion' }
        ]
        ubicacionesPopulares.forEach(({region, comuna}) => {
          routes.push({
            url: `/vehiculos/${region}/${comuna}`,
            changefreq: 'daily',
            priority: 0.7
          })
          routes.push({
            url: `/vehiculos/${region}/${comuna}/usado`,
            changefreq: 'daily',
            priority: 0.7
          })
          routes.push({
            url: `/vehiculos/${region}/${comuna}/nuevo`,
            changefreq: 'daily',
            priority: 0.6
          })
        })

        // Rutas de rangos de precios - NUEVA ESTRUCTURA
        const rangosPrecio = [
          'bajo-5-millones', 'entre-5-10-millones', 
          'entre-10-15-millones', 'entre-15-20-millones',
          'sobre-20-millones'
        ]
        rangosPrecio.forEach(rango => {
          routes.push({
            url: `/vehiculos/precio-${rango}`,
            changefreq: 'daily', 
            priority: 0.6
          })
        })

      } catch (error) {
        console.error('Error generando sitemap:', error)
      }

      return routes
    }
  },

  // ✅ Head global
  app: {
    head: {
      title: 'Autoventas360 - Autos Usados, Subastas y Peritajes en Chile',
      meta: [
        { name: 'description', content: 'Compra y vende autos usados en Chile. Subastas online, peritajes profesionales y financiamiento. La plataforma más confiable para vehículos usados.' },
        { name: 'keywords', content: 'autos usados chile, comprar auto usado, venta autos usados, subastas autos, peritaje vehicular, financiamiento auto usado' }
      ]
    }
  }
})
