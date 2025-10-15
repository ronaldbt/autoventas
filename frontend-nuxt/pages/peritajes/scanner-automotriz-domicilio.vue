<!-- pages/scanner-automotriz-domicilio.vue -->
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
      <Meta property="og:url" content="https://autoventas360.com/peritajes/scanner-automotriz-domicilio" />
      <Link rel="canonical" href="https://autoventas360.com/peritajes/scanner-automotriz-domicilio" />
    </Head>

    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              Scanner Profesional OBD2
            </div>
            
            <h1 class="text-4xl lg:text-5xl font-bold mb-6">
              Scanner Automotriz a <span class="text-orange-400">Domicilio</span>
            </h1>
            
            <p class="text-xl text-blue-100 mb-8 leading-relaxed">
              Diagnóstico completo del motor y sistemas electrónicos de tu auto. 
              Detectamos fallas ocultas y problemas antes de que se conviertan en reparaciones costosas.
            </p>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Scanner profesional en tu casa en 24 horas</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Detecta códigos de error ocultos</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Reporte técnico detallado incluido</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center">
                Agendar Scanner Ahora
              </NuxtLink>
              <button class="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Ver Precios
              </button>
            </div>
          </div>

          <div class="lg:text-right">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Promoción Limitada</h3>
                <div class="text-3xl font-bold text-orange-400 mb-2">$45.000</div>
                <div class="text-sm text-blue-200 line-through mb-4">Precio normal: $65.000</div>
              </div>
              
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span>Scanner OBD2 profesional</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Diagnóstico a domicilio</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Reporte técnico digital</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Lectura códigos de error</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ¿Qué incluye el scanner? -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué detecta nuestro Scanner Automotriz?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Diagnóstico completo de todos los sistemas electrónicos de tu vehículo
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="sistema in sistemasScanner" :key="sistema.nombre" class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="sistema.icono"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ sistema.nombre }}</h3>
            <p class="text-gray-600 mb-4">{{ sistema.descripcion }}</p>
            <ul class="space-y-2">
              <li v-for="detalle in sistema.detalles" :key="detalle" class="flex items-start">
                <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-sm text-gray-600">{{ detalle }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso del servicio -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Cómo funciona nuestro servicio?
          </h2>
          <p class="text-xl text-gray-600">
            Proceso simple y rápido para obtener el diagnóstico de tu auto
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="(paso, index) in pasosProceso" :key="paso.titulo" class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ paso.titulo }}</h3>
            <p class="text-gray-600">{{ paso.descripcion }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Casos de uso -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Cuándo necesitas un Scanner Automotriz?
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="space-y-6">
              <div v-for="caso in casosUso" :key="caso.titulo" class="flex items-start">
                <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ caso.titulo }}</h3>
                  <p class="text-gray-600">{{ caso.descripcion }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Beneficios del Diagnóstico Preventivo</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Ahorra hasta 70% en reparaciones futuras</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Evita quedarte botado en carretera</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Mantiene la garantía del vehículo</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-700">Mejora el rendimiento del combustible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          No esperes a que tu auto falle
        </h2>
        <p class="text-xl mb-8 text-blue-100">
          Un diagnóstico preventivo hoy puede ahorrarte miles de pesos mañana
        </p>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
          <div class="text-2xl font-bold text-orange-400 mb-2">Oferta Limitada</div>
          <div class="text-4xl font-bold mb-2">$45.000</div>
          <div class="text-sm text-blue-200">Scanner completo a domicilio</div>
        </div>

        <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-block">
          Agendar Scanner Ahora
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePeritajeSEO } from '~/composables/usePeritajeSEO'

// SEO configuration
const { generateKeywordMeta } = usePeritajeSEO()
const pageData = generateKeywordMeta('scanner-automotriz')

// Sistemas que diagnostica el scanner
const sistemasScanner = [
  {
    nombre: 'Motor y Transmisión',
    descripcion: 'Diagnóstico completo del sistema motor y caja de cambios',
    icono: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    detalles: [
      'Códigos de error P0xxx (motor)',
      'Sensores de oxígeno',
      'Sistema de inyección',
      'Sensor MAF y MAP',
      'Sistema de encendido'
    ]
  },
  {
    nombre: 'Sistema Eléctrico',
    descripcion: 'Verificación de componentes eléctricos y electrónicos',
    icono: 'M13 10V3L4 14h7v7l9-11h-7z',
    detalles: [
      'Alternador y batería',
      'Sistema de carga',
      'Luces y señalizaciones',
      'Módulos electrónicos',
      'Cableado principal'
    ]
  },
  {
    nombre: 'Frenos ABS',
    descripcion: 'Diagnóstico del sistema de frenos antibloqueo',
    icono: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    detalles: [
      'Sensores de rueda ABS',
      'Módulo hidráulico',
      'Códigos C0xxx',
      'Sistema ESP/ESC',
      'Freno de mano electrónico'
    ]
  },
  {
    nombre: 'Airbags y Seguridad',
    descripcion: 'Verificación de sistemas de seguridad pasiva',
    icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    detalles: [
      'Módulo airbag SRS',
      'Sensores de impacto',
      'Cinturones de seguridad',
      'Códigos B0xxx',
      'Luces de advertencia'
    ]
  },
  {
    nombre: 'Climatización',
    descripcion: 'Diagnóstico de aire acondicionado y calefacción',
    icono: 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 0V9a3 3 0 0 0-3-3H2m1 4.5l1.5 1.5L7 9',
    detalles: [
      'Compresor A/C',
      'Sensores de temperatura',
      'Actuadores de compuertas',
      'Sistema automático',
      'Códigos climatización'
    ]
  },
  {
    nombre: 'Carrocería y Confort',
    descripción: 'Sistemas de confort y carrocería inteligente',
    icono: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
    detalles: [
      'Elevavidrios eléctricos',
      'Cierre centralizado',
      'Alarma y inmovilizador',
      'Sensores de parking',
      'Sistema multimedia'
    ]
  }
]

// Proceso del servicio
const pasosProceso = [
  {
    titulo: 'Agenda tu cita',
    descripcion: 'Selecciona fecha y hora que más te convenga'
  },
  {
    titulo: 'Técnico a domicilio',
    descripcion: 'Nuestro especialista llega a tu casa con equipos profesionales'
  },
  {
    titulo: 'Diagnóstico completo',
    descripcion: 'Scanner OBD2 de todos los sistemas electrónicos'
  },
  {
    titulo: 'Reporte detallado',
    descripcion: 'Recibes informe técnico digital con recomendaciones'
  }
]

// Casos de uso
const casosUso = [
  {
    titulo: 'Luz del motor encendida',
    descripcion: 'La luz check engine indica problemas que solo un scanner puede detectar con precisión'
  },
  {
    titulo: 'Pérdida de potencia',
    descripcion: 'Falta de fuerza al acelerar puede indicar problemas en sensores o inyectores'
  },
  {
    titulo: 'Consumo excesivo de combustible',
    descripcion: 'El scanner identifica sensores defectuosos que aumentan el consumo'
  },
  {
    titulo: 'Problemas de encendido',
    descripcion: 'Dificultad para encender puede ser detectada con códigos específicos'
  },
  {
    titulo: 'Antes de comprar usado',
    descripcion: 'Verifica el estado real de los sistemas antes de tomar la decisión'
  },
  {
    titulo: 'Mantenimiento preventivo',
    descripcion: 'Detecta problemas antes de que se conviertan en reparaciones costosas'
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
        "name": "Scanner Automotriz a Domicilio",
        "description": "Diagnóstico completo del motor y sistemas electrónicos de tu auto a domicilio. Scanner OBD2 profesional en Santiago.",
        "provider": {
          "@type": "Organization",
          "name": "Autoventas360",
          "url": "https://autoventas360.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "Santiago",
          "addressCountry": "CL"
        },
        "offers": {
          "@type": "Offer",
          "price": "45000",
          "priceCurrency": "CLP",
          "priceValidUntil": "2024-12-31",
          "availability": "https://schema.org/InStock"
        },
        "serviceType": "Diagnóstico Automotriz",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      })
    }
  ]
})
</script>