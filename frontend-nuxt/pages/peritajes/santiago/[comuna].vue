<!-- pages/precios-revision-precompra-santiago/[comuna].vue -->
<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>{{ seoData.title }}</Title>
      <Meta name="description" :content="seoData.description" />
      <Meta name="keywords" :content="seoData.keywords" />
      <Meta property="og:title" :content="seoData.title" />
      <Meta property="og:description" :content="seoData.description" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" :content="`https://autoventas360.com/peritajes/santiago/${comunaSlug}`" />
      <Link rel="canonical" :href="`https://autoventas360.com/peritajes/santiago/${comunaSlug}`" />
    </Head>

    <!-- Hero Section Local -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              Servicio Local en {{ comunaData.nombre }}
            </div>
            
            <h1 class="text-4xl lg:text-5xl font-bold mb-6">
              Precios Revisión <span class="text-orange-400">Precompra {{ comunaData.nombre }}</span>
            </h1>
            
            <p class="text-xl text-blue-100 mb-8 leading-relaxed">
              Revisión técnica precompra especializada en {{ comunaData.nombre }}, Santiago. 
              Evita sorpresas costosas antes de comprar tu auto usado. Servicio a domicilio disponible.
            </p>

            <div class="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-8">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <p class="text-green-100 font-medium">✅ Disponible en {{ comunaData.nombre }}</p>
                  <p class="text-green-200 text-sm">
                    {{ comunaData.tiempoRespuesta }} - Servicio a domicilio sin costo adicional
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Especialistas locales en {{ comunaData.nombre }}</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ comunaData.tiempoRespuesta }} de respuesta</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Informe técnico especializado</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center">
                Agendar en {{ comunaData.nombre }}
              </NuxtLink>
              <a :href="`tel:${telefonoContacto}`" class="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-center">
                Llamar Ahora
              </a>
            </div>
          </div>

          <div class="lg:text-right">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Precios {{ comunaData.nombre }}</h3>
                <div class="text-3xl font-bold text-orange-400 mb-2">$75.000</div>
                <div class="text-sm text-blue-200 mb-4">Incluye traslado en {{ comunaData.nombre }}</div>
              </div>
              
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span>Revisión precompra completa</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Traslado a {{ comunaData.nombre }}</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Informe técnico digital</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>{{ comunaData.tiempoRespuesta }}</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Información local específica -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir nuestro servicio en {{ comunaData.nombre }}?
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              Conocemos {{ comunaData.nombre }} y sus características específicas. 
              {{ comunaData.descripcionLocal }}
            </p>
            
            <div class="space-y-4">
              <div v-for="ventaja in ventajasLocales" :key="ventaja.titulo" class="border-l-4 border-blue-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ ventaja.titulo }}</h3>
                <p class="text-gray-600">{{ ventaja.descripcion }}</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Datos de {{ comunaData.nombre }}</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Población:</span>
                <span class="font-semibold text-gray-900">{{ comunaData.poblacion?.toLocaleString() || 'N/A' }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Área:</span>
                <span class="font-semibold text-gray-900">{{ comunaData.area || 'N/A' }} km²</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Tiempo respuesta:</span>
                <span class="font-semibold text-green-600">{{ comunaData.tiempoRespuesta }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Servicio a domicilio:</span>
                <span class="font-semibold text-green-600">Incluido</span>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-orange-100 rounded-lg">
              <p class="text-sm text-orange-800">
                <strong>Atención especial:</strong> {{ comunaData.atencionEspecial }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonios locales -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Clientes Satisfechos en {{ comunaData.nombre }}
          </h2>
          <p class="text-xl text-gray-600">
            Lo que dicen nuestros clientes de {{ comunaData.nombre }}
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="testimonio in testimoniosLocales" :key="testimonio.nombre" class="bg-white rounded-xl p-6 shadow-lg">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-blue-600 font-bold text-lg">{{ testimonio.nombre.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-semibold text-gray-900">{{ testimonio.nombre }}</div>
                <div class="text-sm text-gray-600">{{ testimonio.sector }}, {{ comunaData.nombre }}</div>
              </div>
            </div>
            <p class="text-gray-600 mb-4">"{{ testimonio.comentario }}"</p>
            <div class="flex text-yellow-400">
              <svg v-for="n in 5" :key="n" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Local -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          ¿Listo para revisar tu auto en {{ comunaData.nombre }}?
        </h2>
        <p class="text-xl mb-8 text-blue-100">
          Servicio profesional a domicilio. {{ comunaData.tiempoRespuesta }} en {{ comunaData.nombre }}.
        </p>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
          <div class="text-xl font-bold text-orange-400 mb-2">Precio Especial {{ comunaData.nombre }}</div>
          <div class="text-4xl font-bold mb-2">$75.000</div>
          <div class="text-sm text-blue-200">Incluye traslado sin costo adicional</div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
            Agendar en {{ comunaData.nombre }}
          </NuxtLink>
          <a :href="`tel:${telefonoContacto}`" class="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
            {{ telefonoContacto }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Obtener el parámetro de la comuna desde la URL
const route = useRoute()
const comunaSlug = computed(() => route.params.comuna)

// Datos de comunas de Santiago
const comunasData = {
  'santiago': {
    nombre: 'Santiago',
    poblacion: 404495,
    area: 22.4,
    tiempoRespuesta: 'Atención en 2-3 horas',
    descripcionLocal: 'Ubicada en el corazón de la capital, Santiago Centro concentra gran actividad comercial y residencial.',
    atencionEspecial: 'Especialistas en vehículos comerciales y alta demanda de revisiones express.'
  },
  'providencia': {
    nombre: 'Providencia',
    poblacion: 142079,
    area: 14.4,
    tiempoRespuesta: 'Atención en 1-2 horas',
    descripcionLocal: 'Comuna de alta densidad vehicular con gran demanda de vehículos premium y ejecutivos.',
    atencionEspecial: 'Experiencia en vehículos de lujo y alta gama. Servicio VIP disponible.'
  },
  'las-condes': {
    nombre: 'Las Condes',
    poblacion: 294838,
    area: 99.4,
    tiempoRespuesta: 'Atención en 1-2 horas',
    descripcionLocal: 'Zona de alto poder adquisitivo con gran concentración de vehículos premium y de lujo.',
    atencionEspecial: 'Especialistas en vehículos importados, eléctricos y de alta gama.'
  },
  'vitacura': {
    nombre: 'Vitacura',
    poblacion: 85384,
    area: 28.3,
    tiempoRespuesta: 'Atención en 1-2 horas',
    descripcionLocal: 'Comuna residencial de alto nivel con preferencia por vehículos premium y tecnología avanzada.',
    atencionEspecial: 'Servicio premium para vehículos de lujo, deportivos y eléctricos.'
  },
  'nunoa': {
    nombre: 'Ñuñoa',
    poblacion: 208237,
    area: 16.9,
    tiempoRespuesta: 'Atención en 2-3 horas',
    descripcionLocal: 'Comuna residencial con gran diversidad de vehículos desde económicos hasta media-alta.',
    atencionEspecial: 'Amplia experiencia en todo tipo de vehículos familiares y compactos.'
  },
  'la-florida': {
    nombre: 'La Florida',
    poblacion: 366916,
    area: 70.8,
    tiempoRespuesta: 'Atención en 3-4 horas',
    descripcionLocal: 'Comuna residencial con alta demanda de vehículos familiares y económicos.',
    atencionEspecial: 'Especialistas en vehículos usados, familiares y de precio accesible.'
  },
  'maipú': {
    nombre: 'Maipú',
    poblacion: 578605,
    area: 133.0,
    tiempoRespuesta: 'Atención en 3-4 horas',
    descripcionLocal: 'Una de las comunas más grandes de Santiago con gran diversidad vehicular.',
    atencionEspecial: 'Cobertura amplia, especialistas en todo tipo de vehículos y marcas populares.'
  },
  'puente-alto': {
    nombre: 'Puente Alto',
    poblacion: 645909,
    area: 88.2,
    tiempoRespuesta: 'Atención en 4-5 horas',
    descripcionLocal: 'Comuna en crecimiento con alta demanda de vehículos familiares y trabajo.',
    atencionEspecial: 'Experiencia en vehículos de trabajo, familiares y pickups.'
  },
  'san-miguel': {
    nombre: 'San Miguel',
    poblacion: 133059,
    area: 9.5,
    tiempoRespuesta: 'Atención en 2-3 horas',
    descripcionLocal: 'Comuna céntrica con diversidad vehicular y alta actividad comercial.',
    atencionEspecial: 'Especialistas en vehículos comerciales y de distribución urbana.'
  },
  'la-reina': {
    nombre: 'La Reina',
    poblacion: 92960,
    area: 56.7,
    tiempoRespuesta: 'Atención en 2-3 horas',
    descripcionLocal: 'Comuna residencial con preferencia por SUVs y vehículos familiares de buena calidad.',
    atencionEspecial: 'Especialistas en SUVs, vehículos familiares y 4x4.'
  }
}

// Obtener datos de la comuna actual
const comunaData = computed(() => {
  return comunasData[comunaSlug.value] || {
    nombre: 'Comuna no encontrada',
    poblacion: 0,
    area: 0,
    tiempoRespuesta: 'Consultar disponibilidad',
    descripcionLocal: 'Comuna del Gran Santiago.',
    atencionEspecial: 'Servicio disponible bajo consulta.'
  }
})

// SEO dinámico
const seoData = computed(() => {
  const comuna = comunaData.value
  return {
    title: `Precios Revisión Precompra ${comuna.nombre} - Desde $75.000 | Autoventas360`,
    description: `Revisión técnica precompra en ${comuna.nombre}, Santiago. ${comuna.tiempoRespuesta}. Especialistas locales, servicio a domicilio incluido. Evita sorpresas al comprar auto usado.`,
    keywords: `revisión precompra ${comuna.nombre}, peritaje ${comuna.nombre}, precios revisión auto ${comuna.nombre}, técnico automotriz ${comuna.nombre}, inspección vehículo ${comuna.nombre}, Santiago`
  }
})

// Ventajas locales
const ventajasLocales = computed(() => {
  const comuna = comunaData.value.nombre
  return [
    {
      titulo: `Conocimiento Local de ${comuna}`,
      descripcion: `Nuestros técnicos conocen las características específicas de ${comuna} y las condiciones de manejo locales.`
    },
    {
      titulo: `${comunaData.value.tiempoRespuesta}`,
      descripcion: `Tiempo de respuesta optimizado para ${comuna}, considerando la ubicación y accesibilidad de la zona.`
    },
    {
      titulo: 'Sin Costo de Traslado',
      descripcion: `El traslado a ${comuna} está incluido en el precio. No pagas extra por el servicio a domicilio.`
    },
    {
      titulo: comunaData.value.atencionEspecial.split('.')[0],
      descripcion: comunaData.value.atencionEspecial
    }
  ]
})

// Testimonios locales (simulados pero realistas)
const testimoniosLocales = computed(() => {
  const comuna = comunaData.value.nombre
  return [
    {
      nombre: 'Carlos M.',
      sector: 'Centro',
      comentario: `Excelente servicio en ${comuna}. Llegaron puntualmente y detectaron problemas que no había notado. Muy recomendable.`
    },
    {
      nombre: 'María P.',
      sector: 'Residencial',
      comentario: `El técnico fue muy profesional y explicó todo detalladamente. Me ahorré problemas futuros gracias a su revisión.`
    },
    {
      nombre: 'Jorge L.',
      sector: 'Comercial',
      comentario: `Rápidos y confiables. El informe fue muy completo y me ayudó a negociar mejor el precio del auto.`
    }
  ]
})

// Teléfono de contacto
const telefonoContacto = '+56 9 8765 4321'

// Schema.org structured data dinámico
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Revisión Precompra ${comunaData.value.nombre}`,
        "description": `Revisión técnica precompra especializada en ${comunaData.value.nombre}, Santiago. ${comunaData.value.tiempoRespuesta}.`,
        "provider": {
          "@type": "Organization",
          "name": "Autoventas360",
          "url": "https://autoventas360.com"
        },
        "areaServed": {
          "@type": "City",
          "name": comunaData.value.nombre,
          "addressRegion": "Región Metropolitana",
          "addressCountry": "CL"
        },
        "offers": {
          "@type": "Offer",
          "price": "75000",
          "priceCurrency": "CLP",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2024-12-31"
        },
        "serviceType": "Revisión Precompra Vehicular",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      }))
    }
  ]
})
</script>