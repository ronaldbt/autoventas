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
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
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

  // ✅ Configuración de variables de entorno (cliente y servidor)
  runtimeConfig: {
    // Disponible solo en el servidor (SSR)
    apiBaseInternal: process.env.NUXT_API_BASE_INTERNAL || 'http://backend:3001/api',
    // Disponible en cliente y servidor
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://api.autoventas360.cl/api'
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

  // ✅ Configuración Sitemap (dinámico, con inventario)
  sitemap: {
    siteUrl: 'https://autoventas360.com',
    gzip: true,
    autoLastmod: true,
    defaults: { changefreq: 'daily', priority: 0.7 },
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
    urls: async () => {
      const urls = []

      // 1) Páginas estáticas principales
      urls.push(
        { url: '/', priority: 1.0 },
        { url: '/vehiculos', priority: 0.9 },
        { url: '/remates', changefreq: 'weekly' },
        { url: '/servicios', changefreq: 'monthly' },
        { url: '/noticias', changefreq: 'weekly' },
        { url: '/nuevos' },
        { url: '/electricos' },
        { url: '/analisis' },
        { url: '/ayuda' },
        { url: '/vender' }
      )

      // 2) Categorías por tipo
      const tiposVehiculos = ['suvs','sedanes','camionetas','hatchback','station-wagon','coupe']
      tiposVehiculos.forEach(tipo => {
        urls.push({ url: `/vehiculos/${tipo}-usados` })
      })

      // 3) Categorías por marca (populares)
      const marcasPopulares = ['toyota','chevrolet','hyundai','suzuki','mazda','nissan','kia','honda','ford','volkswagen','peugeot','bmw']
      marcasPopulares.forEach(marca => {
        urls.push({ url: `/vehiculos/marca-${marca}` })
      })

      // 4) Rangos de precio
      const rangosPrecio = ['bajo-5-millones','entre-5-10-millones','entre-10-15-millones','entre-15-20-millones','sobre-20-millones']
      rangosPrecio.forEach(r => urls.push({ url: `/vehiculos/precio-${r}` }))

      // 5) Ubicaciones jerárquicas más usadas
      const ubicaciones = [
        { region: 'metropolitana', comunas: ['santiago','providencia','las-condes','vitacura','nunoa','maipu','puente-alto'] },
        { region: 'valparaiso', comunas: ['valparaiso','vina-del-mar'] },
        { region: 'biobio', comunas: ['concepcion'] }
      ]
      ubicaciones.forEach(({ region, comunas }) => {
        comunas.forEach(comuna => {
          urls.push(
            { url: `/vehiculos/${region}/${comuna}` },
            { url: `/vehiculos/${region}/${comuna}/usado` },
            { url: `/vehiculos/${region}/${comuna}/nuevo`, changefreq: 'weekly', priority: 0.6 }
          )
        })
      })

      // 6) Landings de peritajes
      urls.push(
        { url: '/peritajes', priority: 0.9 },
        { url: '/peritajes/solicitar-peritaje', priority: 0.9 },
        { url: '/peritajes/revision-precompra-auto', priority: 0.95 },
        { url: '/peritajes/inspeccion-auto-usado' },
        { url: '/peritajes/peritaje-auto-electrico' },
        { url: '/peritajes/detectar-auto-clonado' },
        { url: '/peritajes/verificacion-kilometraje' },
        { url: '/peritajes/tipos' },
        { url: '/peritajes/precios', changefreq: 'weekly' },
        { url: '/peritajes/ciudades' },
        { url: '/peritajes/santiago' }
      )
      const comunasSantiago = ['santiago','providencia','las-condes','vitacura','nunoa','maipu','puente-alto','la-florida','san-miguel','la-reina','macul','penalolen']
      comunasSantiago.forEach(c => urls.push({ url: `/peritajes/santiago/${c}`, changefreq: 'weekly' }))

      // 7) Inventario desde API (detalles)
      try {
        const apiBase = process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:3001/api'
        const params = new URLSearchParams({ limit: '5000', fields: 'id,slug,region,comuna,marca,modelo,ano,combustible' })
        const res = await fetch(`${apiBase}/vehiculos?${params.toString()}`)
        const json = await res.json()
        const vehiculos = Array.isArray(json?.data) ? json.data : (Array.isArray(json) ? json : [])

        vehiculos.forEach(v => {
          if (v?.id) urls.push({ url: `/vehiculos/${v.id}`, priority: 0.8 })
          if (v?.slug) urls.push({ url: `/vehiculos/seo-${v.slug}` })
          if (v?.region && v?.comuna && v?.marca && v?.ano && v?.modelo && v?.combustible) {
            urls.push({ url: `/vehiculos/${v.region}/${v.comuna}/usado/${v.marca}/${v.ano}/${v.modelo}/${v.combustible}` })
          }
        })
      } catch (error) {
        console.warn('No se pudo cargar inventario para sitemap', error)
      }

      return urls
    }
  },

  // ✅ Robots dinámico
  robots: {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/vehiculos/', '/peritajes/', '/remates/', '/nuevos/', '/electricos/', '/servicios/', '/noticias/', '/analisis/']
      },
      {
        userAgent: '*',
        disallow: ['/admin/', '/cliente/', '/automotora/', '/perito/', '/publicista/', '/login', '/register', '/unauthorized', '/api/', '/_nuxt/', '/.nuxt/']
      },
      { userAgent: '*', disallow: ['/*?*precio_min=', '/*?*precio_max=', '/*?*km_min=', '/*?*km_max=', '/*?*sort=', '/*?*page='] }
    ],
    sitemap: ['https://autoventas360.cl/sitemap.xml']
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
