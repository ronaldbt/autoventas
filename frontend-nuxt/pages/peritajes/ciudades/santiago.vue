<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 to-indigo-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Peritaje Vehicular en Santiago
          </h1>
          <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Servicios profesionales de peritaje vehicular en la Región Metropolitana. Peritos certificados y atención a domicilio disponible.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/peritajes/solicitar"
              class="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              Solicitar Peritaje
            </NuxtLink>
            <a 
              href="tel:+56912345678"
              class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold rounded-xl transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              +56 9 1234 5678
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Santiago -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Peritajes en Santiago
          </h2>
          <p class="text-gray-600">
            Líder en servicios de peritaje vehicular en la Región Metropolitana
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
            <div class="text-gray-600">Peritajes Realizados</div>
            <div class="text-sm text-gray-500">En Santiago y RM</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">24h</div>
            <div class="text-gray-600">Tiempo Respuesta</div>
            <div class="text-sm text-gray-500">Servicio express</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">20+</div>
            <div class="text-gray-600">Peritos Activos</div>
            <div class="text-sm text-gray-500">En toda la RM</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">32</div>
            <div class="text-gray-600">Comunas</div>
            <div class="text-sm text-gray-500">Cobertura completa</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Zonas de Cobertura -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Cobertura en Santiago y Región Metropolitana
          </h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Atendemos todas las comunas de Santiago con servicio a domicilio disponible. 
            Tiempo de respuesta promedio: 2 horas para confirmación.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Zona Norte -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
              Zona Norte
            </h3>
            <div class="grid grid-cols-2 gap-4 text-gray-700">
              <div class="space-y-2">
                <div>• Conchalí</div>
                <div>• Huechuraba</div>
                <div>• Independencia</div>
                <div>• Quilicura</div>
                <div>• Recoleta</div>
              </div>
              <div class="space-y-2">
                <div>• Renca</div>
                <div>• Vitacura</div>
                <div>• Colina</div>
                <div>• Lampa</div>
                <div>• Til Til</div>
              </div>
            </div>
            <div class="mt-6 p-4 bg-white rounded-xl">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">Tiempo promedio:</span>
                <span class="font-semibold text-blue-600">45 min</span>
              </div>
            </div>
          </div>

          <!-- Zona Centro -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
              Zona Centro
            </h3>
            <div class="grid grid-cols-2 gap-4 text-gray-700">
              <div class="space-y-2">
                <div>• Santiago Centro</div>
                <div>• Providencia</div>
                <div>• Las Condes</div>
                <div>• Ñuñoa</div>
                <div>• San Miguel</div>
              </div>
              <div class="space-y-2">
                <div>• Estación Central</div>
                <div>• Quinta Normal</div>
                <div>• Macul</div>
                <div>• Peñalolén</div>
                <div>• La Reina</div>
              </div>
            </div>
            <div class="mt-6 p-4 bg-white rounded-xl">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">Tiempo promedio:</span>
                <span class="font-semibold text-green-600">30 min</span>
              </div>
            </div>
          </div>

          <!-- Zona Sur -->
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div class="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mr-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </div>
              Zona Sur
            </h3>
            <div class="grid grid-cols-2 gap-4 text-gray-700">
              <div class="space-y-2">
                <div>• La Florida</div>
                <div>• Puente Alto</div>
                <div>• Maipú</div>
                <div>• San Bernardo</div>
                <div>• La Pintana</div>
              </div>
              <div class="space-y-2">
                <div>• El Bosque</div>
                <div>• Pedro Aguirre C.</div>
                <div>• Cerrillos</div>
                <div>• Pirque</div>
                <div>• Calera de Tango</div>
              </div>
            </div>
            <div class="mt-6 p-4 bg-white rounded-xl">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-600">Tiempo promedio:</span>
                <span class="font-semibold text-orange-600">50 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Precios Santiago -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Precios en Santiago
          </h2>
          <p class="text-gray-600">
            Tarifas especiales para la Región Metropolitana
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-red-200 transition-all">
            <div class="text-center">
              <div class="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Para Seguros</h3>
              <div class="text-2xl font-bold text-red-600 mb-2">$65.000</div>
              <p class="text-sm text-gray-600 mb-4">En sucursal</p>
              <div class="text-sm text-gray-500">
                <div>+ $15.000 domicilio</div>
                <div>+ $10.000 zona alejada</div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-green-200 transition-all">
            <div class="text-center">
              <div class="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3a2 2 0 00-2-2H9a2 2 0 00-2 2v2"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Compra-Venta</h3>
              <div class="text-2xl font-bold text-green-600 mb-2">$80.000</div>
              <p class="text-sm text-gray-600 mb-4">En sucursal</p>
              <div class="text-sm text-gray-500">
                <div>+ $15.000 domicilio</div>
                <div>+ $10.000 zona alejada</div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-purple-200 transition-all">
            <div class="text-center">
              <div class="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Judicial</h3>
              <div class="text-2xl font-bold text-purple-600 mb-2">$120.000</div>
              <p class="text-sm text-gray-600 mb-4">Incluye testimonio</p>
              <div class="text-sm text-gray-500">
                <div>+ $20.000 domicilio</div>
                <div>+ $15.000 zona alejada</div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-blue-200 transition-all">
            <div class="text-center">
              <div class="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">Tasación</h3>
              <div class="text-2xl font-bold text-blue-600 mb-2">$90.000</div>
              <p class="text-sm text-gray-600 mb-4">Valor comercial</p>
              <div class="text-sm text-gray-500">
                <div>+ $15.000 domicilio</div>
                <div>+ $10.000 zona alejada</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 text-center">
          <p class="text-gray-600 mb-4">
            * Precios incluyen IVA. Zonas alejadas: Pirque, Colina, Lampa, Til Til, Calera de Tango
          </p>
          <NuxtLink 
            to="/peritajes/precios"
            class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Ver calculadora de precios completa
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Testimonios Santiago -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes en Santiago
          </h2>
          <p class="text-gray-600">
            Más de 2,500 peritajes realizados con satisfacción garantizada
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              "Excelente servicio, el perito llegó puntual a mi casa en Las Condes. 
              Muy profesional y detallado. El informe fue aceptado sin problemas por mi seguro."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div class="font-semibold text-gray-900">María González</div>
                <div class="text-sm text-gray-600">Las Condes, Santiago</div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              "Necesitaba un peritaje urgente en Maipú para comprar un auto usado. 
              Me atendieron el mismo día y evité comprar un auto con problemas graves."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div class="font-semibold text-gray-900">Carlos Ruiz</div>
                <div class="text-sm text-gray-600">Maipú, Santiago</div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
            <div class="flex items-center mb-4">
              <div class="flex text-yellow-400">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <p class="text-gray-700 mb-4">
              "El proceso fue súper rápido y transparente. En Providencia me hicieron el peritaje 
              en 45 minutos y al día siguiente tenía el informe completo."
            </p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
              <div>
                <div class="font-semibold text-gray-900">Ana Morales</div>
                <div class="text-sm text-gray-600">Providencia, Santiago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Necesitas un Peritaje en Santiago?
        </h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Servicio profesional con peritos certificados. Cobertura en todas las comunas de la Región Metropolitana.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <NuxtLink 
            to="/peritajes/solicitar"
            class="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Solicitar Peritaje
          </NuxtLink>
          <a 
            href="tel:+56912345678"
            class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold rounded-xl transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            Llamar Ahora
          </a>
        </div>

        <div class="text-blue-100 text-sm">
          <p>Atención telefónica: Lunes a Viernes 8:00 - 18:00 hrs | Sábados 9:00 - 14:00 hrs</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
const { 
  generatePeritajeLocationMeta, 
  generateCityPeritajeSchema,
  generateBreadcrumbSchema
} = usePeritajeSEO()

useHead(generatePeritajeLocationMeta('Santiago', 'Región Metropolitana'))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateCityPeritajeSchema('Santiago', 'Región Metropolitana'))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateBreadcrumbSchema([
        { name: 'Inicio', url: 'https://autoventas360.com' },
        { name: 'Peritajes', url: 'https://autoventas360.com/peritajes' },
        { name: 'Ciudades', url: 'https://autoventas360.com/peritajes/ciudades' },
        { name: 'Santiago', url: 'https://autoventas360.com/peritajes/ciudades/santiago' }
      ]))
    }
  ]
})
</script>