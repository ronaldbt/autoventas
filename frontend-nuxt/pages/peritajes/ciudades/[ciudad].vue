<!-- pages/peritajes/ciudades/[ciudad].vue -->
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
      <Meta property="og:url" :content="`https://autoventas360.com/peritajes/ciudades/${ciudadSlug}`" />
      <Link rel="canonical" :href="`https://autoventas360.com/peritajes/ciudades/${ciudadSlug}`" />
    </Head>

    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />

    <!-- Hero Section Local -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
              </svg>
              Especialistas en {{ ciudadData.nombre }}
            </div>
            
            <h1 class="text-4xl lg:text-5xl font-bold mb-6">
              Peritaje Vehicular <span class="text-orange-400">{{ ciudadData.nombre }}</span>
            </h1>
            
            <p class="text-xl text-blue-100 mb-8 leading-relaxed">
              {{ ciudadData.descripcion }}
              Conectamos con los mejores especialistas locales certificados.
            </p>

            <div class="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-8">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-green-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <p class="text-green-100 font-medium">✅ Disponible en {{ ciudadData.nombre }}</p>
                  <p class="text-green-200 text-sm">
                    {{ ciudadData.partners }} partners locales - {{ ciudadData.tiempoRespuesta }}
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Partners certificados en {{ ciudadData.nombre }}</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ ciudadData.tiempoRespuesta }} de respuesta</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Mismos estándares nacionales</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center">
                Solicitar en {{ ciudadData.nombre }}
              </NuxtLink>
              <a :href="`tel:${ciudadData.telefono}`" class="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-center">
                {{ ciudadData.telefono }}
              </a>
            </div>
          </div>

          <div class="lg:text-right">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Peritaje en {{ ciudadData.nombre }}</h3>
                <div class="text-3xl font-bold text-orange-400 mb-2">{{ ciudadData.precioDesde }}</div>
                <div class="text-sm text-blue-200 mb-4">{{ ciudadData.incluye }}</div>
              </div>
              
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span>Partners locales</span>
                  <span>{{ ciudadData.partners }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Tiempo respuesta</span>
                  <span>{{ ciudadData.tiempoRespuesta }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Servicios disponibles</span>
                  <span>✓ Todos</span>
                </div>
                <div class="flex justify-between">
                  <span>Certificación nacional</span>
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
              Especialistas en {{ ciudadData.nombre }}
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              {{ ciudadData.descripcionDetallada }}
            </p>
            
            <div class="space-y-4">
              <div v-for="ventaja in ventajasLocales" :key="ventaja.titulo" class="border-l-4 border-blue-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ ventaja.titulo }}</h3>
                <p class="text-gray-600">{{ ventaja.descripcion }}</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Información {{ ciudadData.nombre }}</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Región:</span>
                <span class="font-semibold text-gray-900">{{ ciudadData.region }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Población:</span>
                <span class="font-semibold text-gray-900">{{ ciudadData.poblacion?.toLocaleString() || 'N/A' }} hab.</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Partners activos:</span>
                <span class="font-semibold text-green-600">{{ ciudadData.partners }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Zona de cobertura:</span>
                <span class="font-semibold text-gray-900">{{ ciudadData.cobertura }}</span>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-orange-100 rounded-lg">
              <p class="text-sm text-orange-800">
                <strong>Especialidad local:</strong> {{ ciudadData.especialidad }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios disponibles -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Servicios Disponibles en {{ ciudadData.nombre }}
          </h2>
          <p class="text-xl text-gray-600">
            Todos nuestros servicios están disponibles a través de partners locales
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="servicio in serviciosDisponibles" :key="servicio.nombre" class="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div class="flex items-center mb-4">
              <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="servicio.icono"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900">{{ servicio.nombre }}</h3>
                <p class="text-sm text-green-600 font-medium">{{ servicio.precio }}</p>
              </div>
            </div>
            <p class="text-gray-600 text-sm mb-4">{{ servicio.descripcion }}</p>
            <div class="text-xs text-gray-500">
              Tiempo estimado: {{ servicio.tiempo }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          ¿Listo para tu peritaje en {{ ciudadData.nombre }}?
        </h2>
        <p class="text-xl mb-8 text-blue-100">
          Conectamos contigo al mejor especialista local. {{ ciudadData.tiempoRespuesta }} garantizado.
        </p>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
          <div class="text-xl font-bold text-orange-400 mb-2">Desde {{ ciudadData.nombre }}</div>
          <div class="text-4xl font-bold mb-2">{{ ciudadData.precioDesde }}</div>
          <div class="text-sm text-blue-200">{{ ciudadData.incluye }}</div>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
            Solicitar Peritaje
          </NuxtLink>
          <a :href="`tel:${ciudadData.telefono}`" class="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
            {{ ciudadData.telefono }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Obtener el parámetro de la ciudad desde la URL
const route = useRoute()
const ciudadSlug = computed(() => route.params.ciudad)

// Datos de las 20 ciudades principales de Chile
const ciudadesData = {
  // Zona Norte
  'arica': {
    nombre: 'Arica',
    region: 'XV Región de Arica y Parinacota',
    poblacion: 222619,
    partners: 3,
    tiempoRespuesta: '24-48 horas',
    telefono: '+56 58 2XXX XXX',
    precioDesde: 'Desde $80.000',
    incluye: 'Incluye traslado regional',
    cobertura: 'Arica y alrededores (50km)',
    especialidad: 'Vehículos de trabajo y minería, adaptados al clima extremo del norte.',
    descripcion: 'Peritaje vehicular especializado en Arica, ciudad fronteriza con alta demanda de vehículos comerciales.',
    descripcionDetallada: 'Nuestros partners en Arica están especializados en vehículos que operan en condiciones extremas del norte de Chile, con experiencia en autos de trabajo minero y comercio fronterizo.'
  },
  'iquique': {
    nombre: 'Iquique',
    region: 'I Región de Tarapacá',
    poblacion: 191468,
    partners: 4,
    tiempoRespuesta: '24-48 horas',
    telefono: '+56 57 2XXX XXX',
    precioDesde: 'Desde $80.000',
    incluye: 'Incluye traslado ZF',
    cobertura: 'Iquique, Alto Hospicio, Zona Franca',
    especialidad: 'Vehículos importados de zona franca y flotas comerciales.',
    descripcion: 'Servicios especializados en Iquique, capital regional con importante actividad portuaria y zona franca.',
    descripcionDetallada: 'Partners especializados en vehículos importados a través de la zona franca, con conocimiento específico en marcas asiáticas y europeas de reciente ingreso al país.'
  },
  'antofagasta': {
    nombre: 'Antofagasta',
    region: 'II Región de Antofagasta',
    poblacion: 425725,
    partners: 6,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 55 2XXX XXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Cobertura zona minera',
    cobertura: 'Antofagasta, Mejillones, Tocopilla',
    especialidad: 'Flotillas mineras, vehículos industriales y 4x4 especializados.',
    descripcion: 'Hub minero del norte con alta demanda de peritajes para vehículos industriales y de trabajo.',
    descripcionDetallada: 'Centro de operaciones mineras con partners altamente especializados en vehículos de la gran minería, camionetas 4x4 y flotillas industriales.'
  },
  'calama': {
    nombre: 'Calama',
    region: 'II Región de Antofagasta',
    poblacion: 190336,
    partners: 2,
    tiempoRespuesta: '24-48 horas',
    telefono: '+56 55 2XXX XXX',
    precioDesde: 'Desde $85.000',
    incluye: 'Especializado minería',
    cobertura: 'Calama, Chuquicamata, San Pedro',
    especialidad: 'Vehículos mineros especializados y alta resistencia.',
    descripcion: 'Puerta de entrada a la minería del cobre, con especialistas en vehículos de alta resistencia.',
    descripcionDetallada: 'Partners especializados en vehículos que operan en las condiciones más extremas de la minería chilena, con conocimiento en sistemas especiales para alta montaña.'
  },
  'copiapo': {
    nombre: 'Copiapó',
    region: 'III Región de Atacama',
    poblacion: 158438,
    partners: 3,
    tiempoRespuesta: '24-48 horas',
    telefono: '+56 52 2XXX XXX',
    precioDesde: 'Desde $80.000',
    incluye: 'Cobertura regional',
    cobertura: 'Copiapó, Caldera, Tierra Amarilla',
    especialidad: 'Vehículos agrícolas y mineros de mediana escala.',
    descripcion: 'Capital regional con importante actividad agrícola y minera, especialistas en vehículos mixtos.',
    descripcionDetallada: 'Partners con experiencia en la diversidad vehicular de la región, desde vehículos agrícolas hasta mineros, adaptados al clima desértico.'
  },
  'la-serena': {
    nombre: 'La Serena',
    region: 'IV Región de Coquimbo',
    poblacion: 249656,
    partners: 5,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 51 2XXX XXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Incluye Coquimbo',
    cobertura: 'La Serena, Coquimbo, Ovalle',
    especialidad: 'Vehículos turísticos, agrícolas y residenciales.',
    descripcion: 'Centro turístico y agrícola del norte chico, con diversidad de vehículos familiares y comerciales.',
    descripcionDetallada: 'Partners especializados en la variedad vehicular de la región turística, desde autos familiares hasta vehículos agrícolas de la zona vitivinícola.'
  },
  'coquimbo': {
    nombre: 'Coquimbo',
    region: 'IV Región de Coquimbo',
    poblacion: 227730,
    partners: 3,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 51 2XXX XXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Puerto y centro',
    cobertura: 'Coquimbo, La Serena, puerto',
    especialidad: 'Vehículos portuarios y pesqueros.',
    descripcion: 'Puerto importante del norte chico con especialistas en vehículos comerciales y pesqueros.',
    descripcionDetallada: 'Especialistas en vehículos del sector portuario y pesquero, con conocimiento en flotillas comerciales y adaptaciones para trabajo marítimo.'
  },

  // Zona Centro
  'santiago': {
    nombre: 'Santiago',
    region: 'Región Metropolitana',
    poblacion: 7112808,
    partners: 15,
    tiempoRespuesta: '2-4 horas',
    telefono: '+56 2 2XXX XXXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Toda el área metropolitana',
    cobertura: 'RM completa (todas las comunas)',
    especialidad: 'Todo tipo de vehículos, especialistas en lujo y eléctricos.',
    descripcion: 'Capital de Chile con la mayor concentración de especialistas y diversidad vehicular del país.',
    descripcionDetallada: 'Centro de operaciones principal con partners especializados en todas las marcas y tipos de vehículos, desde económicos hasta de lujo y eléctricos.'
  },
  'valparaiso': {
    nombre: 'Valparaíso',
    region: 'V Región de Valparaíso',
    poblacion: 315732,
    partners: 8,
    tiempoRespuesta: '6-12 horas',
    telefono: '+56 32 2XXX XXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Puerto y cerros',
    cobertura: 'Valparaíso, Viña, Con-Con, Villa Alemana',
    especialidad: 'Vehículos portuarios, clásicos y adaptados a cerros.',
    descripcion: 'Puerto principal de Chile con especialistas en vehículos adaptados a geografía de cerros.',
    descripcionDetallada: 'Partners especializados en vehículos que operan en la geografía única de Valparaíso, con experiencia en autos clásicos y adaptaciones para pendientes.'
  },
  'vina-del-mar': {
    nombre: 'Viña del Mar',
    region: 'V Región de Valparaíso',
    poblacion: 334248,
    partners: 7,
    tiempoRespuesta: '6-12 horas',
    telefono: '+56 32 2XXX XXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Zona costera',
    cobertura: 'Viña del Mar, Reñaca, Con-Con',
    especialidad: 'Vehículos de lujo, deportivos y resistentes a salinidad.',
    descripcion: 'Ciudad jardín con alta concentración de vehículos premium y adaptados al ambiente costero.',
    descripcionDetallada: 'Especialistas en vehículos de gama alta y deportivos, con conocimiento específico en efectos de la salinidad marina en componentes vehiculares.'
  },
  'rancagua': {
    nombre: 'Rancagua',
    region: 'VI Región del Libertador General Bernardo O\'Higgins',
    poblacion: 241774,
    partners: 4,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 72 2XXX XXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Valle central',
    cobertura: 'Rancagua, Machalí, Graneros',
    especialidad: 'Vehículos agrícolas, mineros y familiares.',
    descripcion: 'Centro agrícola y minero con diversidad de vehículos de trabajo y familiares.',
    descripcionDetallada: 'Partners especializados en la dualidad agrícola-minera de la región, con experiencia en vehículos de trabajo rural y minería mediana.'
  },
  'talca': {
    nombre: 'Talca',
    region: 'VII Región del Maule',
    poblacion: 236724,
    partners: 5,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 71 2XXX XXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Valle del Maule',
    cobertura: 'Talca, Curicó, Linares',
    especialidad: 'Vehículos agrícolas, vitivinícolas y familiares.',
    descripcion: 'Corazón agrícola de Chile con especialistas en vehículos del sector vitivinícola y agrícola.',
    descripcionDetallada: 'Centro de la industria vitivinícola con partners especializados en vehículos agrícolas especializados y maquinaria del sector vino.'
  },
  'chillan': {
    nombre: 'Chillán',
    region: 'XVI Región de Ñuble',
    poblacion: 198624,
    partners: 3,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 42 2XXX XXX',
    precioDesde: 'Desde $80.000',
    incluye: 'Zona agrícola',
    cobertura: 'Chillán, Chillán Viejo, San Carlos',
    especialidad: 'Vehículos agrícolas y forestales.',
    descripcion: 'Centro agrícola del sur con especialistas en vehículos de trabajo rural y forestal.',
    descripcionDetallada: 'Partners especializados en vehículos del sector agrícola y forestal, con conocimiento en maquinaria adaptada para trabajo rural intensivo.'
  },

  // Zona Sur
  'concepcion': {
    nombre: 'Concepción',
    region: 'VIII Región del Biobío',
    poblacion: 238092,
    partners: 9,
    tiempoRespuesta: '6-12 horas',
    telefono: '+56 41 2XXX XXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Gran Concepción',
    cobertura: 'Concepción, Talcahuano, San Pedro',
    especialidad: 'Vehículos industriales, universitarios y portuarios.',
    descripcion: 'Capital del sur con importante actividad industrial, portuaria y universitaria.',
    descripcionDetallada: 'Partners especializados en la diversidad del Gran Concepción, desde vehículos universitarios hasta industriales y portuarios del segundo puerto más importante.'
  },
  'talcahuano': {
    nombre: 'Talcahuano',
    region: 'VIII Región del Biobío',
    poblacion: 148345,
    partners: 4,
    tiempoRespuesta: '6-12 horas',
    telefono: '+56 41 2XXX XXX',
    precioDesde: 'Desde $75.000',
    incluye: 'Puerto industrial',
    cobertura: 'Talcahuano, Hualpén, base naval',
    especialidad: 'Vehículos navales, industriales y portuarios.',
    descripcion: 'Principal puerto industrial del sur con especialistas en vehículos del sector naval y portuario.',
    descripcionDetallada: 'Centro naval e industrial con partners especializados en vehículos del sector naval, industrial pesado y portuario del sur de Chile.'
  },
  'temuco': {
    nombre: 'Temuco',
    region: 'IX Región de La Araucanía',
    poblacion: 302931,
    partners: 6,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 45 2XXX XXX',
    precioDesde: 'Desde $80.000',
    incluye: 'La Araucanía',
    cobertura: 'Temuco, Padre las Casas, Vilcún',
    especialidad: 'Vehículos forestales, agrícolas y 4x4.',
    descripcion: 'Capital de La Araucanía con especialistas en vehículos forestales y adaptados a caminos rurales.',
    descripcionDetallada: 'Partners especializados en vehículos del sector forestal y agrícola, con experiencia en 4x4 y vehículos adaptados para caminos rurales complejos.'
  },
  'valdivia': {
    nombre: 'Valdivia',
    region: 'XIV Región de Los Ríos',
    poblacion: 176774,
    partners: 4,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 63 2XXX XXX',
    precioDesde: 'Desde $80.000',
    incluye: 'Zona fluvial',
    cobertura: 'Valdivia, La Unión, Río Bueno',
    especialidad: 'Vehículos fluviales, forestales y universitarios.',
    descripcion: 'Ciudad universitaria y fluvial con especialistas en vehículos adaptados a alta humedad.',
    descripcionDetallada: 'Centro universitario y fluvial con partners especializados en vehículos adaptados a la alta humedad de la zona de los ríos y sector forestal.'
  },
  'osorno': {
    nombre: 'Osorno',
    region: 'X Región de Los Lagos',
    poblacion: 173410,
    partners: 3,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 64 2XXX XXX',
    precioDesde: 'Desde $85.000',
    incluye: 'Zona ganadera',
    cobertura: 'Osorno, San Pablo, Río Negro',
    especialidad: 'Vehículos ganaderos, lecheros y rurales.',
    descripcion: 'Centro ganadero del sur con especialistas en vehículos del sector lácteo y ganadero.',
    descripcionDetallada: 'Partners especializados en vehículos del sector ganadero y lácteo, con experiencia en camionetas de trabajo rural y adaptaciones para el sector lechero.'
  },
  'puerto-montt': {
    nombre: 'Puerto Montt',
    region: 'X Región de Los Lagos',
    poblacion: 245902,
    partners: 5,
    tiempoRespuesta: '12-24 horas',
    telefono: '+56 65 2XXX XXX',
    precioDesde: 'Desde $80.000',
    incluye: 'Región de Los Lagos',
    cobertura: 'Puerto Montt, Puerto Varas, Osorno',
    especialidad: 'Vehículos salmoneros, turísticos y 4x4.',
    descripcion: 'Puerta de entrada a la Patagonia con especialistas en vehículos de la industria salmonera.',
    descripcionDetallada: 'Gateway patagónico con partners especializados en vehículos de la industria salmonera, turismo aventura y 4x4 para condiciones australes.'
  },
  'punta-arenas': {
    nombre: 'Punta Arenas',
    region: 'XII Región de Magallanes y de la Antártica Chilena',
    poblacion: 131592,
    partners: 2,
    tiempoRespuesta: '24-48 horas',
    telefono: '+56 61 2XXX XXX',
    precioDesde: 'Desde $100.000',
    incluye: 'Patagonia extrema',
    cobertura: 'Punta Arenas, Puerto Natales',
    especialidad: 'Vehículos patagónicos, resistentes a vientos y frío extremo.',
    descripcion: 'Ciudad más austral con especialistas en vehículos adaptados a condiciones patagónicas extremas.',
    descripcionDetallada: 'Partners especializados en vehículos que operan en las condiciones más extremas de la Patagonia, con experiencia en adaptaciones para vientos y frío intenso.'
  }
}

// Obtener datos de la ciudad actual
const ciudadData = computed(() => {
  return ciudadesData[ciudadSlug.value] || {
    nombre: 'Ciudad no encontrada',
    region: 'Región no especificada',
    poblacion: 0,
    partners: 0,
    tiempoRespuesta: 'Consultar disponibilidad',
    telefono: '+56 2 2XXX XXXX',
    precioDesde: 'Consultar',
    incluye: 'Servicio bajo consulta',
    cobertura: 'A definir',
    especialidad: 'Servicio disponible bajo consulta.',
    descripcion: 'Servicio de peritaje disponible bajo consulta.',
    descripcionDetallada: 'Contáctanos para consultar disponibilidad de partners en esta ubicación.'
  }
})

// SEO dinámico
const seoData = computed(() => {
  const ciudad = ciudadData.value
  return {
    title: `Peritaje Vehicular ${ciudad.nombre} - Partners Locales Certificados | Autoventas360`,
    description: `Peritaje vehicular en ${ciudad.nombre}, ${ciudad.region}. ${ciudad.partners} partners locales certificados. ${ciudad.tiempoRespuesta}. ${ciudad.especialidad}`,
    keywords: `peritaje ${ciudad.nombre}, inspección auto ${ciudad.nombre}, peritaje vehicular ${ciudad.region}, partners ${ciudad.nombre}, revision técnica ${ciudad.nombre}`
  }
})

// Ventajas locales
const ventajasLocales = computed(() => {
  const ciudad = ciudadData.value
  return [
    {
      titulo: `Conocimiento Local de ${ciudad.nombre}`,
      descripcion: `Partners locales con conocimiento específico de las condiciones y características vehiculares de ${ciudad.nombre}.`
    },
    {
      titulo: `${ciudad.tiempoRespuesta}`,
      descripcion: `Tiempo de respuesta optimizado para ${ciudad.nombre}, considerando la geografía y logística local.`
    },
    {
      titulo: 'Estándares Nacionales',
      descripcion: `Mismos protocolos de calidad que Santiago, adaptados a las condiciones específicas de ${ciudad.nombre}.`
    },
    {
      titulo: ciudad.especialidad.split('.')[0],
      descripcion: ciudad.especialidad
    }
  ]
})

// Servicios disponibles
const serviciosDisponibles = [
  {
    nombre: 'Peritaje Completo',
    precio: 'Desde $75.000',
    descripcion: 'Evaluación integral de 180+ puntos de inspección',
    tiempo: '2-3 horas',
    icono: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    nombre: 'Revisión Precompra',
    precio: 'Desde $75.000',
    descripcion: 'Inspección especializada antes de comprar auto usado',
    tiempo: '1.5-2 horas',
    icono: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  },
  {
    nombre: 'Scanner Automotriz',
    precio: 'Desde $45.000',
    descripcion: 'Diagnóstico electrónico OBD2 profesional',
    tiempo: '45-60 min',
    icono: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    nombre: 'Verificación Kilometraje',
    precio: 'Desde $55.000',
    descripcion: 'Detección de manipulación del odómetro',
    tiempo: '1-1.5 horas',
    icono: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    nombre: 'Detectar Auto Clonado',
    precio: 'Desde $75.000',
    descripcion: 'Verificación de autenticidad y documentos',
    tiempo: '2-3 horas',
    icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    nombre: 'Auto Eléctrico',
    precio: 'Desde $150.000',
    descripcion: 'Peritaje especializado para vehículos eléctricos',
    tiempo: '2.5-3 horas',
    icono: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]

// Schema.org structured data dinámico
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Peritaje Vehicular ${ciudadData.value.nombre}`,
        "description": `${ciudadData.value.descripcion} ${ciudadData.value.partners} partners locales certificados.`,
        "provider": {
          "@type": "Organization",
          "name": "Autoventas360",
          "url": "https://autoventas360.com"
        },
        "areaServed": {
          "@type": "City",
          "name": ciudadData.value.nombre,
          "addressRegion": ciudadData.value.region,
          "addressCountry": "CL"
        },
        "offers": {
          "@type": "Offer",
          "price": ciudadData.value.precioDesde.replace(/[^\d]/g, ''),
          "priceCurrency": "CLP",
          "availability": "https://schema.org/InStock"
        },
        "serviceType": "Peritaje Vehicular Local",
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