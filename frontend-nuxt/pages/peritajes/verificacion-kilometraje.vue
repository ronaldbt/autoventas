<!-- pages/verificacion-kilometraje.vue -->
<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>{{ pageData.title }}</Title>
      <Meta name="description" :content="pageData.description" />
      <Meta name="keywords" :content="pageData.keywords" />
      <Meta property="og:title" :content="pageData.title" />
      <Meta property="og:description" :content="pageData.description" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://autoventas360.com/peritajes/verificacion-kilometraje" />
      <Link rel="canonical" href="https://autoventas360.com/peritajes/verificacion-kilometraje" />
    </Head>

    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-300 text-sm font-medium mb-6">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
              Detección de Fraude
            </div>
            
            <h1 class="text-4xl lg:text-5xl font-bold mb-6">
              Verificación de <span class="text-orange-400">Kilometraje</span>
            </h1>
            
            <p class="text-xl text-red-100 mb-8 leading-relaxed">
              ¿Sospechas que el kilometraje fue alterado? Nuestros expertos verifican 
              la autenticidad del odómetro y detectan manipulaciones fraudulentas.
            </p>

            <div class="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-8">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <p class="text-yellow-100 font-medium">¡Importante!</p>
                  <p class="text-yellow-200 text-sm">
                    El 35% de los autos usados en Chile tienen kilometraje alterado según estudios del mercado automotriz.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Verificación forense del odómetro</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Análisis de desgaste vs kilometraje</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Consulta en bases de datos oficiales</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Certificado de autenticidad</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center">
                Verificar Kilometraje
              </NuxtLink>
              <button class="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                ¿Cómo funciona?
              </button>
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
                <h3 class="text-xl font-bold mb-2">Peritaje Integral Completo</h3>
                <div class="text-3xl font-bold text-orange-400 mb-2">$59.990</div>
                <div class="text-sm text-red-200 mb-4">Incluye todos los servicios</div>
              </div>
              
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span>Análisis forense odómetro</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Verificación desgaste</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Scanner automotriz</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Detección auto clonado</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Certificado autenticidad</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Señales de kilometraje alterado -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Señales de Kilometraje Alterado
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprende a identificar las señales que indican manipulación del odómetro
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="senal in senalesManipulacion" :key="senal.titulo" class="bg-red-50 border border-red-200 rounded-xl p-6">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ senal.titulo }}</h3>
            <p class="text-gray-600 mb-4">{{ senal.descripcion }}</p>
            <div class="text-sm text-red-600 font-medium">
              🚨 {{ senal.alerta }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Métodos de verificación -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Métodos de Verificación
          </h2>
          <p class="text-xl text-gray-600">
            Técnicas profesionales para detectar manipulación de kilometraje
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="metodo in metodosVerificacion" :key="metodo.nombre" class="bg-white rounded-xl p-8 shadow-lg">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="metodo.icono"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900">{{ metodo.nombre }}</h3>
            </div>
            <p class="text-gray-600 mb-4">{{ metodo.descripcion }}</p>
            <ul class="space-y-2">
              <li v-for="paso in metodo.pasos" :key="paso" class="flex items-start">
                <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-sm text-gray-600">{{ paso }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Estadísticas del fraude -->
    <section class="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            El Fraude del Kilometraje en Chile
          </h2>
          <p class="text-xl text-gray-300">
            Estadísticas que debes conocer antes de comprar un auto usado
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8 mb-12">
          <div v-for="stat in estadisticasFraude" :key="stat.numero" class="text-center">
            <div class="text-4xl lg:text-5xl font-bold text-orange-400 mb-2">{{ stat.numero }}</div>
            <div class="text-lg font-semibold mb-2">{{ stat.titulo }}</div>
            <div class="text-gray-300 text-sm">{{ stat.descripcion }}</div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 class="text-2xl font-bold mb-6 text-center">Impacto Económico del Fraude</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-2xl font-bold text-red-400 mb-2">-$2.500.000</div>
              <div class="text-sm text-gray-300">Pérdida promedio por kilometraje alterado</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-red-400 mb-2">30%</div>
              <div class="text-sm text-gray-300">Sobreprecio pagado en promedio</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-400 mb-2">$55.000</div>
              <div class="text-sm text-gray-300">Costo de verificación vs pérdida</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso de verificación -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo verificamos el kilometraje?
          </h2>
          <p class="text-xl text-gray-600">
            Proceso paso a paso de nuestra verificación profesional
          </p>
        </div>

        <div class="grid md:grid-cols-5 gap-6">
          <div v-for="(paso, index) in procesoVerificacion" :key="paso.titulo" class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ paso.titulo }}</h3>
            <p class="text-gray-600 text-sm">{{ paso.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          No seas víctima del fraude
        </h2>
        <p class="text-xl mb-8 text-red-100">
          Un peritaje integral de $59.990 puede ahorrarte millones en pérdidas
        </p>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
          <div class="text-xl font-bold text-orange-400 mb-2">Peritaje Integral Completo</div>
          <div class="text-4xl font-bold mb-2">$59.990</div>
          <div class="text-sm text-red-200">Incluye verificación + scanner + detección</div>
        </div>

        <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-block">
          Verificar Kilometraje Ahora
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePeritajeSEO } from '~/composables/usePeritajeSEO'

// SEO configuration
const { generateKeywordMeta } = usePeritajeSEO()
const pageData = generateKeywordMeta('verificacion-kilometraje')

// Señales de manipulación
const senalesManipulacion = [
  {
    titulo: 'Desgaste Excesivo',
    descripcion: 'Pedales, volante y asientos muy gastados para el kilometraje mostrado',
    alerta: 'Desgaste inconsistente con km'
  },
  {
    titulo: 'Números Desalineados',
    descripcion: 'Dígitos del odómetro no están perfectamente alineados',
    alerta: 'Posible manipulación física'
  },
  {
    titulo: 'Historial Incompleto',
    descripcion: 'Falta de documentación de mantenciones o revisiones técnicas',
    alerta: 'Sin respaldo documental'
  },
  {
    titulo: 'Precio Sospechoso',
    descripcion: 'Precio muy bajo para el año y supuesto kilometraje',
    alerta: 'Oferta demasiado buena'
  },
  {
    titulo: 'Stickers Removidos',
    descripcion: 'Marcas de adhesivos removidos del parabrisas o tablero',
    alerta: 'Evidencia de manipulación'
  },
  {
    titulo: 'Inconsistencias Digitales',
    descripcion: 'Scanner muestra datos inconsistentes con odómetro',
    alerta: 'Datos electrónicos alterados'
  }
]

// Métodos de verificación
const metodosVerificacion = [
  {
    nombre: 'Análisis Forense Digital',
    descripcion: 'Revisión profunda de la electrónica del vehículo',
    icono: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    pasos: [
      'Scanner OBD2 especializado',
      'Lectura de memoria EEPROM',
      'Análisis de datos históricos',
      'Detección de reseteos'
    ]
  },
  {
    nombre: 'Inspección Física Detallada',
    descripcion: 'Evaluación del desgaste real del vehículo',
    icono: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    pasos: [
      'Inspección de pedales y volante',
      'Estado de neumáticos y frenos',
      'Desgaste de asientos y tapices',
      'Análisis de componentes mecánicos'
    ]
  },
  {
    nombre: 'Verificación Documental',
    descripcion: 'Análisis de documentos y historial del vehículo',
    icono: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    pasos: [
      'Revisión técnica histórica',
      'Registros de mantención',
      'Consulta bases oficiales',
      'Análisis de consistencia'
    ]
  },
  {
    nombre: 'Tecnología Avanzada',
    descripcion: 'Uso de equipos especializados de detección',
    icono: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    pasos: [
      'Microscopio digital para odómetro',
      'Detectores de manipulación',
      'Software forense especializado',
      'Análisis de circuitos'
    ]
  }
]

// Estadísticas del fraude
const estadisticasFraude = [
  {
    numero: '35%',
    titulo: 'Autos con km alterado',
    descripcion: 'Porcentaje en el mercado usado chileno'
  },
  {
    numero: '78%',
    titulo: 'Reducción promedio',
    descripcion: 'Kilometraje reducido en promedio'
  },
  {
    numero: '45.000',
    titulo: 'Km promedio alterados',
    descripcion: 'Diferencia entre real y mostrado'
  },
  {
    numero: '90%',
    titulo: 'Detección exitosa',
    descripcion: 'Casos detectados con método profesional'
  }
]

// Proceso de verificación
const procesoVerificacion = [
  {
    titulo: 'Inspección Inicial',
    descripcion: 'Revisión visual y física del vehículo'
  },
  {
    titulo: 'Scanner Diagnóstico',
    descripcion: 'Lectura de datos electrónicos del auto'
  },
  {
    titulo: 'Análisis Forense',
    descripcion: 'Verificación profunda del odómetro'
  },
  {
    titulo: 'Consulta Oficial',
    descripcion: 'Verificación en bases de datos'
  },
  {
    titulo: 'Certificación',
    descripcion: 'Emisión de certificado oficial'
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
        "name": "Verificación de Kilometraje Automotriz",
        "description": "Verificación profesional de kilometraje para detectar manipulación del odómetro. Certificado oficial incluido.",
        "provider": {
          "@type": "Organization",
          "name": "Autoventas360",
          "url": "https://autoventas360.com"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "offers": {
          "@type": "Offer",
          "price": "59990",
          "priceCurrency": "CLP",
          "availability": "https://schema.org/InStock"
        },
        "serviceType": "Verificación Kilometraje",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Incluye",
            "value": "Certificado de autenticidad"
          },
          {
            "@type": "PropertyValue", 
            "name": "Detección",
            "value": "90% casos de manipulación"
          }
        ]
      })
    }
  ]
})
</script>