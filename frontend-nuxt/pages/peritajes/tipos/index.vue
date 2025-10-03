<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 to-indigo-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Tipos de Peritaje Vehicular
          </h1>
          <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Encuentra el tipo de peritaje que necesitas según tus requerimientos específicos
          </p>
        </div>
      </div>
    </section>

    <!-- Tipos de Peritaje -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Peritaje para Seguros -->
          <div class="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900">Peritaje para Seguros</h2>
                <p class="text-red-600 font-semibold">Desde $65.000</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Evaluación oficial para compañías de seguros, siniestros y reclamos. 
              Reconocido por todas las aseguradoras en Chile.
            </p>

            <div class="space-y-4 mb-8">
              <h3 class="font-semibold text-gray-900">¿Cuándo lo necesitas?</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Reclamos por siniestros
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Evaluación de daños
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Pérdida total
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Renovación de póliza
                </li>
              </ul>
            </div>

            <NuxtLink 
              to="/peritajes/tipos/seguros"
              class="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-colors"
            >
              Más información
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Peritaje Compra-Venta -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3a2 2 0 00-2-2H9a2 2 0 00-2 2v2"></path>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900">Peritaje Compra-Venta</h2>
                <p class="text-green-600 font-semibold">Desde $80.000</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Inspección pre-compra y evaluación completa para transacciones seguras. 
              Protege tu inversión con información técnica profesional.
            </p>

            <div class="space-y-4 mb-8">
              <h3 class="font-semibold text-gray-900">¿Cuándo lo necesitas?</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Compra de auto usado
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Venta con garantía
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Verificación técnica
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Negociación de precio
                </li>
              </ul>
            </div>

            <NuxtLink 
              to="/peritajes/tipos/compra-venta"
              class="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-colors"
            >
              Más información
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Peritaje Judicial -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900">Peritaje Judicial</h2>
                <p class="text-purple-600 font-semibold">Desde $120.000</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Peritajes con validez legal para tribunales y procesos judiciales. 
              Peritos certificados con experiencia en testimonios periciales.
            </p>

            <div class="space-y-4 mb-8">
              <h3 class="font-semibold text-gray-900">¿Cuándo lo necesitas?</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Procesos civiles
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Casos penales
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Disputas familiares
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Testimonios periciales
                </li>
              </ul>
            </div>

            <NuxtLink 
              to="/peritajes/tipos/judicial"
              class="inline-flex items-center px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-xl transition-colors"
            >
              Más información
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Tasación Vehicular -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-200">
            <div class="flex items-center mb-6">
              <div class="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-900">Tasación Vehicular</h2>
                <p class="text-blue-600 font-semibold">Desde $90.000</p>
              </div>
            </div>
            
            <p class="text-gray-600 mb-6">
              Determinación del valor comercial real del vehículo en el mercado. 
              Informes oficiales para bancos, seguros y transacciones.
            </p>

            <div class="space-y-4 mb-8">
              <h3 class="font-semibold text-gray-900">¿Cuándo lo necesitas?</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Créditos bancarios
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Herencias y divorcios
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Declaraciones fiscales
                </li>
                <li class="flex items-center">
                  <svg class="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Importación/exportación
                </li>
              </ul>
            </div>

            <NuxtLink 
              to="/peritajes/tipos/tasacion"
              class="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"
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

    <!-- Comparación -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Comparación de Tipos de Peritaje
          </h2>
          <p class="text-gray-600">
            Encuentra el tipo de peritaje más adecuado para tu situación
          </p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th class="px-6 py-4 text-left">Características</th>
                  <th class="px-6 py-4 text-center">Seguros</th>
                  <th class="px-6 py-4 text-center">Compra-Venta</th>
                  <th class="px-6 py-4 text-center">Judicial</th>
                  <th class="px-6 py-4 text-center">Tasación</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 font-medium">Precio desde</td>
                  <td class="px-6 py-4 text-center font-bold text-red-600">$65.000</td>
                  <td class="px-6 py-4 text-center font-bold text-green-600">$80.000</td>
                  <td class="px-6 py-4 text-center font-bold text-purple-600">$120.000</td>
                  <td class="px-6 py-4 text-center font-bold text-blue-600">$90.000</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 font-medium">Tiempo de entrega</td>
                  <td class="px-6 py-4 text-center">24 horas</td>
                  <td class="px-6 py-4 text-center">48 horas</td>
                  <td class="px-6 py-4 text-center">72 horas</td>
                  <td class="px-6 py-4 text-center">48 horas</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium">Validez legal</td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-600 font-bold">✓</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-600 font-bold">✓</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-600 font-bold">✓ Judicial</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-600 font-bold">✓</span>
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 font-medium">Incluye tasación</td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-600 font-bold">✓</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-600 font-bold">✓</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-orange-600">Opcional</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-600 font-bold">✓ Especializada</span>
                  </td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium">Testimonio pericial</td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-gray-400">✗</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-gray-400">✗</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-green-600 font-bold">✓ Incluido</span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <span class="text-orange-600">Opcional</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Ya sabes qué tipo de peritaje necesitas?
        </h2>
        <p class="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Solicita tu peritaje vehicular profesional o contáctanos para asesorarte
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/peritajes/solicitar"
            class="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Solicitar Peritaje
          </NuxtLink>
          <a 
            href="tel:+56912345678"
            class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold rounded-xl transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Llamar para Asesorarse
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
const { 
  generatePeritajeMeta, 
  generateBreadcrumbSchema,
  generatePeritajeFAQSchema
} = usePeritajeSEO()

useHead(generatePeritajeMeta('tipos'))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateBreadcrumbSchema([
        { name: 'Inicio', url: 'https://autoventas360.com' },
        { name: 'Peritajes', url: 'https://autoventas360.com/peritajes' },
        { name: 'Tipos', url: 'https://autoventas360.com/peritajes/tipos' }
      ]))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generatePeritajeFAQSchema('tipos'))
    }
  ]
})
</script>