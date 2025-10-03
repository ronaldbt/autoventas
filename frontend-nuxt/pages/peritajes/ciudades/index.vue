<!-- pages/peritajes/ciudades/index.vue -->
<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Peritajes Vehiculares en Chile - Todas las Ciudades | Autoventas360</Title>
      <Meta name="description" content="Peritajes vehiculares en las principales ciudades de Chile. Red de especialistas en Santiago, Valparaíso, Concepción, Antofagasta y más. Partners locales certificados." />
      <Meta name="keywords" content="peritaje chile, peritaje ciudades chile, inspección auto chile, peritaje vehicular regiones, partners peritaje" />
      <Meta property="og:title" content="Peritajes Vehiculares en Chile - Todas las Ciudades" />
      <Meta property="og:description" content="Red nacional de peritajes vehiculares en las principales ciudades de Chile." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://autoventas360.com/peritajes/ciudades" />
      <Link rel="canonical" href="https://autoventas360.com/peritajes/ciudades" />
    </Head>

    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" clip-rule="evenodd"></path>
            </svg>
            Cobertura Nacional
          </div>
          
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Peritajes en todo <span class="text-orange-400">Chile</span>
          </h1>
          
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Red nacional de especialistas en peritaje vehicular. Desde Arica a Punta Arenas, 
            conectamos con partners locales certificados para garantizar el mejor servicio.
          </p>

          <div class="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-3xl font-bold text-orange-400 mb-2">20+</div>
              <div class="text-sm text-blue-200">Ciudades cubiertas</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div class="text-sm text-blue-200">Partners certificados</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-3xl font-bold text-orange-400 mb-2">24-48h</div>
              <div class="text-sm text-blue-200">Tiempo respuesta</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div class="text-3xl font-bold text-orange-400 mb-2">15</div>
              <div class="text-sm text-blue-200">Regiones activas</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mapa de ciudades por regiones -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Selecciona tu Ciudad
          </h2>
          <p class="text-xl text-gray-600">
            Encuentra especialistas locales en tu región
          </p>
        </div>

        <!-- Regiones organizadas -->
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Zona Norte -->
          <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div class="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
              Zona Norte
            </h3>
            <div class="space-y-2">
              <NuxtLink 
                v-for="ciudad in ciudadesNorte" 
                :key="ciudad.slug"
                :to="`/peritajes/ciudades/${ciudad.slug}`"
                class="block px-4 py-3 text-gray-700 hover:bg-yellow-100 hover:text-yellow-800 rounded-lg transition-all duration-200 group"
              >
                <div class="flex justify-between items-center">
                  <div>
                    <span class="font-medium">{{ ciudad.nombre }}</span>
                    <div class="text-xs text-gray-500">{{ ciudad.region }}</div>
                  </div>
                  <span class="text-sm text-gray-500 group-hover:text-yellow-600">{{ ciudad.partners }} partners</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Zona Centro -->
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
              Zona Centro
            </h3>
            <div class="space-y-2">
              <NuxtLink 
                v-for="ciudad in ciudadesCentro" 
                :key="ciudad.slug"
                :to="`/peritajes/ciudades/${ciudad.slug}`"
                class="block px-4 py-3 text-gray-700 hover:bg-blue-100 hover:text-blue-800 rounded-lg transition-all duration-200 group"
              >
                <div class="flex justify-between items-center">
                  <div>
                    <span class="font-medium">{{ ciudad.nombre }}</span>
                    <div class="text-xs text-gray-500">{{ ciudad.region }}</div>
                  </div>
                  <span class="text-sm text-gray-500 group-hover:text-blue-600">{{ ciudad.partners }} partners</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Zona Sur -->
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              Zona Sur
            </h3>
            <div class="space-y-2">
              <NuxtLink 
                v-for="ciudad in ciudadesSur" 
                :key="ciudad.slug"
                :to="`/peritajes/ciudades/${ciudad.slug}`"
                class="block px-4 py-3 text-gray-700 hover:bg-green-100 hover:text-green-800 rounded-lg transition-all duration-200 group"
              >
                <div class="flex justify-between items-center">
                  <div>
                    <span class="font-medium">{{ ciudad.nombre }}</span>
                    <div class="text-xs text-gray-500">{{ ciudad.region }}</div>
                  </div>
                  <span class="text-sm text-gray-500 group-hover:text-green-600">{{ ciudad.partners }} partners</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Ventajas de la red nacional -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Red Nacional de Partners
          </h2>
          <p class="text-xl text-gray-600">
            Conectamos con los mejores especialistas locales en cada ciudad
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="ventaja in ventajasRed" :key="ventaja.titulo" class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="ventaja.icono"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ ventaja.titulo }}</h3>
            <p class="text-gray-600">{{ ventaja.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Partners -->
    <section class="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-4">
              ¿Eres perito especialista?
            </h2>
            <p class="text-xl mb-6 text-orange-100">
              Únete a nuestra red nacional de partners certificados y expande tu negocio.
            </p>
            <div class="space-y-3 text-orange-100">
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Acceso a más clientes</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Herramientas digitales</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Respaldo de marca nacional</span>
              </div>
            </div>
          </div>
          
          <div class="text-center">
            <a href="mailto:partners@autoventas360.com" class="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-block mb-4">
              Ser Partner
            </a>
            <div class="text-sm text-orange-200">
              O llama al: <strong>+56 2 2XXX XXXX</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 20 ciudades más grandes de Chile organizadas por zonas
const ciudadesNorte = [
  { nombre: 'Arica', slug: 'arica', region: 'XV Región', partners: 3 },
  { nombre: 'Iquique', slug: 'iquique', region: 'I Región', partners: 4 },
  { nombre: 'Antofagasta', slug: 'antofagasta', region: 'II Región', partners: 6 },
  { nombre: 'Calama', slug: 'calama', region: 'II Región', partners: 2 },
  { nombre: 'Copiapó', slug: 'copiapo', region: 'III Región', partners: 3 },
  { nombre: 'La Serena', slug: 'la-serena', region: 'IV Región', partners: 5 },
  { nombre: 'Coquimbo', slug: 'coquimbo', region: 'IV Región', partners: 3 }
]

const ciudadesCentro = [
  { nombre: 'Santiago', slug: 'santiago', region: 'Región Metropolitana', partners: 15 },
  { nombre: 'Valparaíso', slug: 'valparaiso', region: 'V Región', partners: 8 },
  { nombre: 'Viña del Mar', slug: 'vina-del-mar', region: 'V Región', partners: 7 },
  { nombre: 'Rancagua', slug: 'rancagua', region: 'VI Región', partners: 4 },
  { nombre: 'Talca', slug: 'talca', region: 'VII Región', partners: 5 },
  { nombre: 'Chillán', slug: 'chillan', region: 'XVI Región', partners: 3 }
]

const ciudadesSur = [
  { nombre: 'Concepción', slug: 'concepcion', region: 'VIII Región', partners: 9 },
  { nombre: 'Talcahuano', slug: 'talcahuano', region: 'VIII Región', partners: 4 },
  { nombre: 'Temuco', slug: 'temuco', region: 'IX Región', partners: 6 },
  { nombre: 'Valdivia', slug: 'valdivia', region: 'XIV Región', partners: 4 },
  { nombre: 'Osorno', slug: 'osorno', region: 'X Región', partners: 3 },
  { nombre: 'Puerto Montt', slug: 'puerto-montt', region: 'X Región', partners: 5 },
  { nombre: 'Punta Arenas', slug: 'punta-arenas', region: 'XII Región', partners: 2 }
]

// Ventajas de la red
const ventajasRed = [
  {
    titulo: 'Partners Certificados',
    descripcion: 'Todos nuestros especialistas pasan rigurosos procesos de certificación y capacitación.',
    icono: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    titulo: 'Estándares Unificados',
    descripcion: 'Mismos protocolos de calidad y herramientas en todo Chile para garantizar consistencia.',
    icono: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2zm8 0h-2a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2z'
  },
  {
    titulo: 'Soporte Nacional',
    descripcion: 'Respaldo técnico y comercial desde Santiago para toda la red de partners.',
    icono: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
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
        "name": "Red Nacional Peritajes Chile",
        "description": "Red nacional de especialistas en peritaje vehicular en las principales ciudades de Chile.",
        "provider": {
          "@type": "Organization",
          "name": "Autoventas360",
          "url": "https://autoventas360.com"
        },
        "areaServed": [
          ...ciudadesNorte.map(ciudad => ({
            "@type": "City",
            "name": ciudad.nombre,
            "addressRegion": ciudad.region,
            "addressCountry": "CL"
          })),
          ...ciudadesCentro.map(ciudad => ({
            "@type": "City",
            "name": ciudad.nombre,
            "addressRegion": ciudad.region,
            "addressCountry": "CL"
          })),
          ...ciudadesSur.map(ciudad => ({
            "@type": "City",
            "name": ciudad.nombre,
            "addressRegion": ciudad.region,
            "addressCountry": "CL"
          }))
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Peritaje por Ciudad",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Peritaje Vehicular Local"
              }
            }
          ]
        }
      })
    }
  ]
})
</script>