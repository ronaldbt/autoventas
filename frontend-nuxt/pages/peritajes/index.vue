<template>
  <div class="min-h-screen bg-white">
    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-20 overflow-hidden">
      <div class="absolute inset-0 bg-black opacity-20"></div>
      <div class="absolute inset-0 bg-[url('/images/car-inspection-bg.jpg')] bg-cover bg-center opacity-30"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Peritaje Vehicular
            <span class="text-orange-400">Profesional</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Evaluación técnica certificada con peritos profesionales. Informes oficiales para seguros, compra-venta y trámites legales.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <NuxtLink 
              to="/peritajes/solicitar"
              class="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              Solicitar Peritaje
            </NuxtLink>
            <NuxtLink 
              to="/peritajes/precios"
              class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-xl transition-all duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
              Ver Precios
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">5,000+</div>
              <div class="text-blue-200 text-sm md:text-base">Peritajes Realizados</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">48h</div>
              <div class="text-blue-200 text-sm md:text-base">Entrega de Informe</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div class="text-blue-200 text-sm md:text-base">Peritos Certificados</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-white mb-2">15</div>
              <div class="text-blue-200 text-sm md:text-base">Ciudades de Chile</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tipos de Peritaje -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tipos de Peritaje Vehicular
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos diferentes tipos de peritaje según tus necesidades específicas
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Peritaje para Seguros -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 group">
            <div class="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Para Seguros</h3>
            <p class="text-gray-600 mb-6">Evaluación oficial para compañías de seguros, siniestros y reclamos.</p>
            <NuxtLink 
              to="/peritajes/tipos/seguros"
              class="inline-flex items-center text-red-600 hover:text-red-700 font-semibold"
            >
              Más información
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Peritaje Compra-Venta -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 group">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3a2 2 0 00-2-2H9a2 2 0 00-2 2v2"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Compra-Venta</h3>
            <p class="text-gray-600 mb-6">Inspección pre-compra y evaluación completa para transacciones seguras.</p>
            <NuxtLink 
              to="/peritajes/tipos/compra-venta"
              class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold"
            >
              Más información
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Peritaje Judicial -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 group">
            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Judicial</h3>
            <p class="text-gray-600 mb-6">Peritajes con validez legal para tribunales y procesos judiciales.</p>
            <NuxtLink 
              to="/peritajes/tipos/judicial"
              class="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
            >
              Más información
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Tasación -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-200 group">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Tasación</h3>
            <p class="text-gray-600 mb-6">Determinación del valor comercial real del vehículo en el mercado.</p>
            <NuxtLink 
              to="/peritajes/tipos/tasacion"
              class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              Más información
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo Funciona?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Proceso simple y rápido para obtener tu peritaje vehicular profesional
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-white">1</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Solicita Online</h3>
            <p class="text-gray-600">Completa el formulario con los datos de tu vehículo y selecciona fecha y hora.</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-white">2</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Confirmación</h3>
            <p class="text-gray-600">Te contactamos para confirmar la cita y asignar un perito certificado.</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-white">3</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Evaluación</h3>
            <p class="text-gray-600">El perito realiza la inspección completa del vehículo (45-60 minutos).</p>
          </div>

          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-2xl font-bold text-white">4</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Informe</h3>
            <p class="text-gray-600">Recibes el informe detallado en máximo 24 horas con validez oficial.</p>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink 
            to="/peritajes/como-funciona"
            class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
          >
            Ver Proceso Completo
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Ciudades -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cobertura Nacional
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicio de peritaje vehicular disponible en las principales ciudades de Chile
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <NuxtLink 
            v-for="ciudad in ciudadesPrincipales" 
            :key="ciudad.slug"
            :to="`/peritajes/ciudades/${ciudad.slug}`"
            class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-200 group"
          >
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600">{{ ciudad.nombre }}</h3>
            <p class="text-sm text-gray-600">{{ ciudad.region }}</p>
          </NuxtLink>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-600 mb-6">¿No encuentras tu ciudad? También atendemos otras localidades</p>
          <NuxtLink 
            to="/peritajes/solicitar"
            class="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
          >
            Consultar Disponibilidad
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
          <p class="text-xl text-gray-600">
            Resuelve tus dudas sobre nuestros servicios de peritaje vehicular
          </p>
        </div>

        <div class="space-y-6">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-gray-50 rounded-xl overflow-hidden"
          >
            <button 
              @click="toggleFAQ(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-900">{{ faq.pregunta }}</h3>
              <svg 
                :class="[
                  'w-6 h-6 text-gray-500 transition-transform duration-200',
                  faqAbierto === index ? 'rotate-180' : ''
                ]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              v-show="faqAbierto === index"
              class="px-6 pb-4"
            >
              <p class="text-gray-600">{{ faq.respuesta }}</p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink 
            to="/peritajes/guias/faq-peritajes-chile"
            class="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold"
          >
            Ver todas las preguntas frecuentes
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Necesitas un Peritaje Vehicular?
        </h2>
        <p class="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Obtén tu peritaje profesional con peritos certificados. Proceso rápido, informes oficiales y precios competitivos.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/peritajes/solicitar"
            class="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Solicitar Ahora
          </NuxtLink>
          <a 
            href="tel:+56912345678"
            class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold rounded-xl transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Llamar Ahora
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO y Meta tags
const { 
  generatePeritajeMeta, 
  generatePeritajeServiceSchema, 
  generatePeritajeFAQSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema
} = usePeritajeSEO()

// Meta tags específicos para la landing principal
useHead(generatePeritajeMeta('general'))

// Structured Data
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generatePeritajeServiceSchema())
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generatePeritajeFAQSchema())
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateBreadcrumbSchema([
        { name: 'Inicio', url: 'https://autoventas360.com' },
        { name: 'Peritajes', url: 'https://autoventas360.com/peritajes' }
      ]))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateOrganizationSchema())
    }
  ]
})

// Data
const faqAbierto = ref(null)

const ciudadesPrincipales = [
  { nombre: 'Santiago', region: 'Metropolitana', slug: 'santiago' },
  { nombre: 'Valparaíso', region: 'Valparaíso', slug: 'valparaiso' },
  { nombre: 'Concepción', region: 'Biobío', slug: 'concepcion' },
  { nombre: 'La Serena', region: 'Coquimbo', slug: 'la-serena' },
  { nombre: 'Antofagasta', region: 'Antofagasta', slug: 'antofagasta' },
  { nombre: 'Temuco', region: 'Araucanía', slug: 'temuco' },
  { nombre: 'Rancagua', region: 'O\'Higgins', slug: 'rancagua' },
  { nombre: 'Talca', region: 'Maule', slug: 'talca' },
  { nombre: 'Arica', region: 'Arica y Parinacota', slug: 'arica' },
  { nombre: 'Puerto Montt', region: 'Los Lagos', slug: 'puerto-montt' }
]

const faqs = [
  {
    pregunta: '¿Cuánto cuesta un peritaje vehicular?',
    respuesta: 'Ofrecemos un peritaje integral completo por $59.990 que incluye todos los servicios: verificación VIN, scanner automotriz, verificación kilometraje, detección auto clonado y certificado oficial.'
  },
  {
    pregunta: '¿Cuánto tiempo demora el peritaje?',
    respuesta: 'Un peritaje completo toma entre 45-60 minutos. El informe detallado se entrega el mismo día o máximo 24 horas después de realizada la evaluación.'
  },
  {
    pregunta: '¿Es válido para todas las aseguradoras?',
    respuesta: 'Sí, nuestros peritajes son reconocidos por todas las compañías de seguros en Chile. Contamos con peritos certificados y acreditados oficialmente.'
  },
  {
    pregunta: '¿Qué documentos necesito?',
    respuesta: 'Necesitas permiso de circulación vigente, cédula de identidad del propietario, y en caso de seguros, el formulario de la aseguradora.'
  },
  {
    pregunta: '¿Ofrecen peritaje a domicilio?',
    respuesta: 'Sí, ofrecemos servicio de peritaje a domicilio en la Región Metropolitana y principales ciudades de Chile. Consulta disponibilidad en tu zona.'
  }
]

// Methods
const toggleFAQ = (index) => {
  faqAbierto.value = faqAbierto.value === index ? null : index
}
</script>