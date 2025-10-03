<!-- pages/peritajes/santiago/index.vue -->
<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Peritajes Vehiculares Santiago - Todas las Comunas | Autoventas360</Title>
      <Meta name="description" content="Peritajes vehiculares en todas las comunas de Santiago. Servicio a domicilio, especialistas locales, precios desde $75.000. Cobertura completa Región Metropolitana." />
      <Meta name="keywords" content="peritaje santiago, revisión auto santiago, inspección vehicular santiago, peritaje domicilio santiago, todas comunas santiago" />
      <Meta property="og:title" content="Peritajes Vehiculares Santiago - Todas las Comunas" />
      <Meta property="og:description" content="Peritajes vehiculares en todas las comunas de Santiago. Servicio a domicilio, especialistas locales." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://autoventas360.com/peritajes/santiago" />
      <Link rel="canonical" href="https://autoventas360.com/peritajes/santiago" />
    </Head>

    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />

    <!-- Hero Section Santiago -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
            </svg>
            Cobertura Completa Santiago
          </div>
          
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Peritajes Vehiculares en <span class="text-orange-400">Santiago</span>
          </h1>
          
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Servicio profesional de peritaje vehicular en todas las comunas de Santiago. 
            Especialistas locales, atención rápida y precios competitivos.
          </p>

          <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-3xl font-bold text-orange-400 mb-2">32+</div>
              <div class="text-sm text-blue-200">Comunas cubiertas</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-3xl font-bold text-orange-400 mb-2">2-4h</div>
              <div class="text-sm text-blue-200">Tiempo de respuesta</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-3xl font-bold text-orange-400 mb-2">$75.000</div>
              <div class="text-sm text-blue-200">Desde (incluye traslado)</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa de comunas -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Selecciona tu Comuna
          </h2>
          <p class="text-xl text-gray-600">
            Encuentra información específica de precios y tiempos de respuesta para tu ubicación
          </p>
        </div>

        <!-- Comunas organizadas por sectores -->
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Sector Oriente -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              Sector Oriente
            </h3>
            <div class="space-y-2">
              <NuxtLink 
                v-for="comuna in comunasOriente" 
                :key="comuna.slug"
                :to="`/peritajes/santiago/${comuna.slug}`"
                class="block px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-800 rounded-lg transition-all duration-200 group"
              >
                <div class="flex justify-between items-center">
                  <span class="font-medium">{{ comuna.nombre }}</span>
                  <span class="text-sm text-gray-500 group-hover:text-blue-600">{{ comuna.tiempo }}</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Sector Centro/Norte -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              Sector Centro/Norte
            </h3>
            <div class="space-y-2">
              <NuxtLink 
                v-for="comuna in comunasCentroNorte" 
                :key="comuna.slug"
                :to="`/peritajes/santiago/${comuna.slug}`"
                class="block px-4 py-3 text-gray-700 hover:bg-green-100 hover:text-green-800 rounded-lg transition-all duration-200 group"
              >
                <div class="flex justify-between items-center">
                  <span class="font-medium">{{ comuna.nombre }}</span>
                  <span class="text-sm text-gray-500 group-hover:text-green-600">{{ comuna.tiempo }}</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Sector Sur/Poniente -->
          <div class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div class="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
              Sector Sur/Poniente
            </h3>
            <div class="space-y-2">
              <NuxtLink 
                v-for="comuna in comunasSurPoniente" 
                :key="comuna.slug"
                :to="`/peritajes/santiago/${comuna.slug}`"
                class="block px-4 py-3 text-gray-700 hover:bg-orange-100 hover:text-orange-800 rounded-lg transition-all duration-200 group"
              >
                <div class="flex justify-between items-center">
                  <span class="font-medium">{{ comuna.nombre }}</span>
                  <span class="text-sm text-gray-500 group-hover:text-orange-600">{{ comuna.tiempo }}</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ventajas por sectores -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ventajas por Sector
          </h2>
          <p class="text-xl text-gray-600">
            Conocemos las características específicas de cada zona de Santiago
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="ventaja in ventajasSectores" :key="ventaja.sector" class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="ventaja.icono"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ ventaja.sector }}</h3>
            <p class="text-gray-600">{{ ventaja.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          ¿No encuentras tu comuna?
        </h2>
        <p class="text-xl mb-8 text-blue-100">
          También atendemos comunas fuera de Santiago. Consulta disponibilidad y precios especiales.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
            Solicitar Peritaje
          </NuxtLink>
          <a href="tel:+56987654321" class="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
            Llamar para Consultar
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Comunas organizadas por sectores geográficos
const comunasOriente = [
  { nombre: 'Las Condes', slug: 'las-condes', tiempo: '1-2h' },
  { nombre: 'Vitacura', slug: 'vitacura', tiempo: '1-2h' },
  { nombre: 'Providencia', slug: 'providencia', tiempo: '1-2h' },
  { nombre: 'Ñuñoa', slug: 'nunoa', tiempo: '2-3h' },
  { nombre: 'La Reina', slug: 'la-reina', tiempo: '2-3h' },
  { nombre: 'Peñalolén', slug: 'penalolen', tiempo: '3-4h' },
  { nombre: 'Macul', slug: 'macul', tiempo: '2-3h' },
  { nombre: 'San Joaquín', slug: 'san-joaquin', tiempo: '2-3h' }
]

const comunasCentroNorte = [
  { nombre: 'Santiago Centro', slug: 'santiago', tiempo: '2-3h' },
  { nombre: 'Independencia', slug: 'independencia', tiempo: '2-3h' },
  { nombre: 'Recoleta', slug: 'recoleta', tiempo: '2-3h' },
  { nombre: 'Conchalí', slug: 'conchali', tiempo: '3-4h' },
  { nombre: 'Huechuraba', slug: 'huechuraba', tiempo: '3-4h' },
  { nombre: 'Quilicura', slug: 'quilicura', tiempo: '3-4h' },
  { nombre: 'Renca', slug: 'renca', tiempo: '3-4h' },
  { nombre: 'Quinta Normal', slug: 'quinta-normal', tiempo: '2-3h' }
]

const comunasSurPoniente = [
  { nombre: 'Maipú', slug: 'maipu', tiempo: '3-4h' },
  { nombre: 'La Florida', slug: 'la-florida', tiempo: '3-4h' },
  { nombre: 'Puente Alto', slug: 'puente-alto', tiempo: '4-5h' },
  { nombre: 'San Miguel', slug: 'san-miguel', tiempo: '2-3h' },
  { nombre: 'San Bernardo', slug: 'san-bernardo', tiempo: '4-5h' },
  { nombre: 'Estación Central', slug: 'estacion-central', tiempo: '2-3h' },
  { nombre: 'Cerrillos', slug: 'cerrillos', tiempo: '3-4h' },
  { nombre: 'Pedro Aguirre Cerda', slug: 'pedro-aguirre-cerda', tiempo: '2-3h' }
]

// Ventajas por sectores
const ventajasSectores = [
  {
    sector: 'Sector Oriente',
    descripcion: 'Especialistas en vehículos premium y de lujo. Experiencia con autos importados y eléctricos.',
    icono: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    sector: 'Sector Centro/Norte',
    descripcion: 'Expertos en vehículos comerciales y urbanos. Atención rápida en zona céntrica.',
    icono: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    sector: 'Sector Sur/Poniente',
    descripcion: 'Especialistas en vehículos familiares y trabajo. Cobertura amplia y precios competitivos.',
    icono: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
  }
]

// Schema.org structured data
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Peritajes Vehiculares Santiago",
        "description": "Servicio de peritaje vehicular en todas las comunas de Santiago. Especialistas locales con cobertura completa.",
        "provider": {
          "@type": "Organization",
          "name": "Autoventas360",
          "url": "https://autoventas360.com"
        },
        "areaServed": [
          ...comunasOriente.map(comuna => ({
            "@type": "City",
            "name": comuna.nombre,
            "addressRegion": "Región Metropolitana",
            "addressCountry": "CL"
          })),
          ...comunasCentroNorte.map(comuna => ({
            "@type": "City", 
            "name": comuna.nombre,
            "addressRegion": "Región Metropolitana",
            "addressCountry": "CL"
          })),
          ...comunasSurPoniente.map(comuna => ({
            "@type": "City",
            "name": comuna.nombre,
            "addressRegion": "Región Metropolitana", 
            "addressCountry": "CL"
          }))
        ],
        "offers": {
          "@type": "Offer",
          "price": "75000",
          "priceCurrency": "CLP",
          "availability": "https://schema.org/InStock"
        }
      })
    }
  ]
})
</script>