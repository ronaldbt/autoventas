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
          { url: '/peritajes', changefreq: 'daily', priority: 0.9 },
          { url: '/servicios', changefreq: 'monthly', priority: 0.7 },
          { url: '/noticias', changefreq: 'weekly', priority: 0.7 },
          { url: '/nuevos', changefreq: 'daily', priority: 0.8 },
          { url: '/electricos', changefreq: 'daily', priority: 0.8 },
          { url: '/analisis', changefreq: 'weekly', priority: 0.6 }
        )

        // NUEVAS RUTAS DE PERITAJES - ALTA PRIORIDAD SEO
        routes.push(
          // Páginas principales de peritajes
          { url: '/peritajes/solicitar', changefreq: 'daily', priority: 0.9 },
          { url: '/peritajes/precios', changefreq: 'weekly', priority: 0.9 },
          { url: '/peritajes/como-funciona', changefreq: 'monthly', priority: 0.8 },
          { url: '/peritajes/tipos', changefreq: 'weekly', priority: 0.8 },
          
          // Tipos de peritaje
          { url: '/peritajes/tipos/seguros', changefreq: 'weekly', priority: 0.8 },
          { url: '/peritajes/tipos/compra-venta', changefreq: 'weekly', priority: 0.8 },
          { url: '/peritajes/tipos/judicial', changefreq: 'weekly', priority: 0.7 },
          { url: '/peritajes/tipos/tasacion', changefreq: 'weekly', priority: 0.7 }
        )

        // PÁGINAS DE KEYWORDS DE ALTA CONVERSIÓN (NUEVAS)
        routes.push(
          // Páginas principales de alta conversión
          { url: '/peritajes/revision-precompra-auto', changefreq: 'daily', priority: 0.95 },
          { url: '/peritajes/inspeccion-auto-usado', changefreq: 'daily', priority: 0.9 },
          { url: '/peritajes/solicitar-peritaje', changefreq: 'daily', priority: 0.9 },
          
          // Páginas especializadas
          { url: '/peritajes/scanner-automotriz-domicilio', changefreq: 'weekly', priority: 0.85 },
          { url: '/peritajes/verificacion-kilometraje', changefreq: 'weekly', priority: 0.8 },
          { url: '/peritajes/detectar-auto-clonado', changefreq: 'weekly', priority: 0.8 },
          { url: '/peritajes/peritaje-auto-electrico', changefreq: 'weekly', priority: 0.85 },
          { url: '/peritajes/agendar-peritaje-auto', changefreq: 'daily', priority: 0.9 }
        )

        // Página principal de ciudades
        routes.push({
          url: '/peritajes/ciudades',
          changefreq: 'weekly',
          priority: 0.8
        })

        // 20 ciudades principales de Chile para peritajes (expandido)
        const ciudadesPeritajes = [
          'santiago', 'valparaiso', 'concepcion', 'la-serena', 
          'antofagasta', 'temuco', 'rancagua', 'talca', 
          'arica', 'puerto-montt', 'iquique', 'vina-del-mar',
          'coquimbo', 'chillan', 'valdivia', 'osorno',
          'calama', 'copiapó', 'linares', 'curicó'
        ]
        ciudadesPeritajes.forEach(ciudad => {
          routes.push({
            url: `/peritajes/ciudades/${ciudad}`,
            changefreq: 'weekly',
            priority: ciudad === 'santiago' ? 0.9 : 0.7
          })
        })

        // Guías de peritajes (contenido SEO) - EXPANDIDO CON NUEVAS KEYWORDS
        const guiasPeritajes = [
          // Guías originales
          'que-es-peritaje-vehicular',
          'cuando-necesito-peritaje', 
          'diferencia-perito-mecanico',
          'costo-real-peritaje-2024',
          'peritaje-auto-usado-guia',
          'documentos-necesarios',
          'errores-comunes-peritaje',
          'tecnologia-peritaje-moderna',
          'casos-estudio-reales',
          'faq-peritajes-chile',
          
          // NUEVAS GUÍAS CON KEYWORDS DE ALTA CONVERSIÓN
          'que-revisar-auto-usado-compra',
          'como-detectar-auto-chocado',
          'señales-motor-desgastado',
          'checklist-compra-auto-usado',
          'errores-comunes-comprar-auto',
          'peritaje-vs-revision-tecnica',
          'auto-electrico-que-revisar',
          'como-saber-si-auto-esta-bien',
          'detectar-estafa-compra-auto',
          'kilometraje-adulterado-como-detectar',
          'documentos-compra-auto-usado-chile',
          'problemas-tipicos-autos-usados',
          'vale-la-pena-peritaje-auto-usado',
          'mejor-servicio-peritaje-santiago',
          'donde-hacer-peritaje-auto-chile'
        ]
        guiasPeritajes.forEach(guia => {
          routes.push({
            url: `/peritajes/guias/${guia}`,
            changefreq: 'monthly',
            priority: 0.6
          })
        })

        // MARCAS ESPECÍFICAS PARA PERITAJES (NUEVA SECCIÓN)
        const marcasPeritajes = [
          'toyota', 'chevrolet', 'hyundai', 'suzuki', 'mazda', 'nissan', 
          'kia', 'honda', 'ford', 'volkswagen', 'peugeot', 'citroën',
          'bmw', 'mercedes-benz', 'audi', 'subaru', 'mitsubishi', 'jeep'
        ]
        marcasPeritajes.forEach(marca => {
          routes.push({
            url: `/peritajes/marcas/${marca}`,
            changefreq: 'weekly',
            priority: ['toyota', 'chevrolet', 'hyundai'].includes(marca) ? 0.8 : 0.6
          })
        })

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

        // PÁGINAS LOCALES POR COMUNA DE SANTIAGO (NUEVA ESTRUCTURA)
        const comunasSantiago = [
          'santiago', 'providencia', 'las-condes', 'vitacura', 'nunoa',
          'la-florida', 'maipu', 'puente-alto', 'san-miguel', 'la-reina',
          'penalolen', 'macul', 'san-bernardo', 'quilicura', 'estacion-central',
          'independencia', 'recoleta', 'conchali', 'renca', 'quinta-normal',
          'cerro-navia', 'pudahuel', 'lo-prado', 'cerrillos', 'maipú',
          'el-bosque', 'pedro-aguirre-cerda', 'san-joaquin', 'san-ramon',
          'la-granja', 'la-pintana', 'san-miguel', 'lo-espejo'
        ]
        
        // Páginas de Santiago (nueva estructura)
        routes.push({
          url: '/peritajes/santiago',
          changefreq: 'weekly',
          priority: 0.8
        })
        
        // Páginas locales de precios por comuna (nueva ubicación)
        comunasSantiago.forEach(comuna => {
          routes.push({
            url: `/peritajes/santiago/${comuna}`,
            changefreq: 'weekly',
            priority: ['santiago', 'providencia', 'las-condes', 'vitacura', 'nunoa'].includes(comuna) ? 0.8 : 0.7
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
