<!-- pages/peritaje-auto-electrico.vue -->
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
      <Meta property="og:url" content="https://autoventas360.com/peritajes/peritaje-auto-electrico" />
      <Link rel="canonical" href="https://autoventas360.com/peritajes/peritaje-auto-electrico" />
    </Head>

    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-sm font-medium mb-6">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"></path>
              </svg>
              Especialistas en Eléctricos
            </div>
            
            <h1 class="text-4xl lg:text-5xl font-bold mb-6">
              Peritaje Auto <span class="text-orange-400">Eléctrico</span>
            </h1>
            
            <p class="text-xl text-green-100 mb-8 leading-relaxed">
              Evaluación especializada para vehículos eléctricos e híbridos. 
              Verificamos batería, sistema eléctrico y componentes únicos de la movilidad sustentable.
            </p>

            <div class="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4 mb-8">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <p class="text-blue-100 font-medium">¿Sabías que?</p>
                  <p class="text-blue-200 text-sm">
                    Una batería de auto eléctrico en mal estado puede costar entre $8-15 millones para reemplazar.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Análisis especializado de batería de tracción</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Evaluación sistema de carga y conectores</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Diagnóstico motor eléctrico y inversor</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Certificado técnico especializado</span>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-center">
                Agendar Peritaje Eléctrico
              </NuxtLink>
              <button class="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                ¿Qué incluye?
              </button>
            </div>
          </div>

          <div class="lg:text-right">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Peritaje Especializado EV</h3>
                <div class="text-3xl font-bold text-orange-400 mb-2">$150.000</div>
                <div class="text-sm text-green-200 mb-4">Incluye análisis de batería</div>
              </div>
              
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span>Análisis batería tracción</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Sistema carga completo</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Motor eléctrico y inversor</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Autonomía real estimada</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Qué evaluamos en autos eléctricos -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué evaluamos en tu Auto Eléctrico?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Evaluación especializada de todos los componentes únicos de la movilidad eléctrica
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="componente in componentesElectricos" :key="componente.nombre" class="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="componente.icono"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3">{{ componente.nombre }}</h3>
            <p class="text-gray-600 mb-4">{{ componente.descripcion }}</p>
            <ul class="space-y-2">
              <li v-for="verificacion in componente.verificaciones" :key="verificacion" class="flex items-start">
                <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-sm text-gray-600">{{ verificacion }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Estado de la batería -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué es Crucial Evaluar la Batería?
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              La batería es el corazón del vehículo eléctrico y su componente más costoso. 
              Su estado determina la autonomía, rendimiento y valor del auto.
            </p>
            
            <div class="space-y-6">
              <div v-for="aspecto in aspectosBateria" :key="aspecto.titulo" class="border-l-4 border-green-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ aspecto.titulo }}</h3>
                <p class="text-gray-600 mb-2">{{ aspecto.descripcion }}</p>
                <div class="text-sm text-green-600 font-medium">
                  💡 {{ aspecto.consejo }}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Datos de Degradación de Batería</h3>
            <div class="space-y-6">
              <div v-for="dato in datosBateria" :key="dato.años" class="flex items-center justify-between">
                <div>
                  <div class="font-semibold text-gray-900">{{ dato.años }}</div>
                  <div class="text-sm text-gray-600">{{ dato.descripcion }}</div>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold" :class="dato.color">{{ dato.capacidad }}</div>
                  <div class="text-xs text-gray-500">capacidad restante</div>
                </div>
              </div>
            </div>
            
            <div class="mt-6 p-4 bg-orange-100 rounded-lg">
              <p class="text-sm text-orange-800">
                <strong>Importante:</strong> Una batería con menos del 70% de capacidad 
                puede necesitar reemplazo pronto (costo: $8-15 millones).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferencias vs auto tradicional -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Peritaje Eléctrico vs Tradicional
          </h2>
          <p class="text-xl text-gray-600">
            Por qué necesitas un peritaje especializado para vehículos eléctricos
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg class="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
              Peritaje Tradicional
            </h3>
            <ul class="space-y-3">
              <li v-for="item in peritajeTradicional" :key="item" class="flex items-start">
                <svg class="w-4 h-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border-2 border-green-200">
            <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <svg class="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Peritaje Eléctrico
            </h3>
            <ul class="space-y-3">
              <li v-for="item in peritajeElectrico" :key="item" class="flex items-start">
                <svg class="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-gray-600">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Marcas y modelos -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Marcas y Modelos que Evaluamos
          </h2>
          <p class="text-xl text-gray-600">
            Experiencia especializada en todas las marcas de vehículos eléctricos
          </p>
        </div>

        <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="marca in marcasElectricas" :key="marca.nombre" class="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200">
            <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-gray-600">{{ marca.logo }}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ marca.nombre }}</h3>
            <div class="text-sm text-gray-600 space-y-1">
              <div v-for="modelo in marca.modelos" :key="modelo">{{ modelo }}</div>
            </div>
            <div class="mt-3 text-xs text-green-600 font-medium">
              {{ marca.especialidad }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          Protege tu inversión en movilidad eléctrica
        </h2>
        <p class="text-xl mb-8 text-green-100">
          Un peritaje especializado puede revelarte el verdadero estado de la batería y evitar sorpresas costosas
        </p>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
          <div class="text-xl font-bold text-orange-400 mb-2">Peritaje Completo EV</div>
          <div class="text-4xl font-bold mb-2">$150.000</div>
          <div class="text-sm text-green-200">Incluye análisis especializado de batería</div>
        </div>

        <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-block">
          Agendar Peritaje Eléctrico
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePeritajeSEO } from '~/composables/usePeritajeSEO'

// SEO configuration
const { generateKeywordMeta } = usePeritajeSEO()
const pageData = generateKeywordMeta('peritaje-auto-electrico')

// Componentes eléctricos
const componentesElectricos = [
  {
    nombre: 'Batería de Tracción',
    descripcion: 'El componente más crítico del vehículo eléctrico',
    icono: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    verificaciones: [
      'Estado de salud (SOH) de la batería',
      'Capacidad real vs nominal',
      'Historial de cargas y descargas',
      'Temperatura de operación',
      'Celdas individuales balanceadas'
    ]
  },
  {
    nombre: 'Sistema de Carga',
    descripcion: 'Conectores, cargadores y gestión de energía',
    icono: 'M13 10V3L4 14h7v7l9-11h-7z',
    verificaciones: [
      'Puerto de carga AC/DC',
      'Cargador interno (OBC)',
      'Cables y conectores',
      'Velocidades de carga',
      'Sistemas de comunicación'
    ]
  },
  {
    nombre: 'Motor Eléctrico',
    descripción: 'Propulsión eléctrica y sistemas de control',
    icono: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    verificaciones: [
      'Motor de tracción principal',
      'Inversor y controlador',
      'Eficiencia energética',
      'Ruidos y vibraciones',
      'Refrigeración del motor'
    ]
  },
  {
    nombre: 'Sistemas de Gestión',
    descripcion: 'BMS y controles electrónicos avanzados',
    icono: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    verificaciones: [
      'Sistema de gestión batería (BMS)',
      'Módulos de control electrónico',
      'Software y actualizaciones',
      'Diagnósticos y códigos error',
      'Comunicación CAN-Bus'
    ]
  },
  {
    nombre: 'Autonomía Real',
    descripcion: 'Medición real del rendimiento del vehículo',
    icono: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 002 2h2a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2z',
    verificaciones: [
      'Prueba de autonomía real',
      'Consumo energético actual',
      'Degradación vs original',
      'Condiciones climáticas',
      'Modos de conducción'
    ]
  },
  {
    nombre: 'Sistemas de Seguridad',
    descripcion: 'Protecciones específicas de alta tensión',
    icono: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    verificaciones: [
      'Aislación alta tensión',
      'Fusibles y protecciones',
      'Sistemas de emergencia',
      'Detector de impacto',
      'Desconexión automática'
    ]
  }
]

// Aspectos de la batería
const aspectosBateria = [
  {
    titulo: 'Capacidad de Almacenamiento',
    descripcion: 'Una batería degradada reduce significativamente la autonomía del vehículo.',
    consejo: 'Verificamos la capacidad real vs la nominal especificada por el fabricante'
  },
  {
    titulo: 'Ciclos de Vida',
    descripcion: 'Cada ciclo de carga-descarga reduce ligeramente la capacidad de la batería.',
    consejo: 'Analizamos el historial de uso para estimar vida útil restante'
  },
  {
    titulo: 'Gestión Térmica',
    descripcion: 'La temperatura afecta dramáticamente el rendimiento y vida útil de la batería.',
    consejo: 'Evaluamos el sistema de refrigeración y calentamiento de la batería'
  },
  {
    titulo: 'Balanceado de Celdas',
    descripcion: 'Las celdas desbalanceadas pueden causar fallas prematuras y pérdida de capacidad.',
    consejo: 'Verificamos que todas las celdas trabajen de manera equilibrada'
  }
]

// Datos de degradación
const datosBateria = [
  {
    años: 'Año 1-2',
    descripcion: 'Batería nueva o casi nueva',
    capacidad: '95-100%',
    color: 'text-green-600'
  },
  {
    años: 'Año 3-5',
    descripcion: 'Degradación normal esperada',
    capacidad: '85-94%',
    color: 'text-blue-600'
  },
  {
    años: 'Año 6-8',
    descripción: 'Considera reemplazo pronto',
    capacidad: '70-84%',
    color: 'text-orange-600'
  },
  {
    años: 'Año 9+',
    descripcion: 'Reemplazo recomendado',
    capacidad: '<70%',
    color: 'text-red-600'
  }
]

// Peritaje tradicional vs eléctrico
const peritajeTradicional = [
  'Motor de combustión interna',
  'Sistema de transmisión',
  'Sistema de escape',
  'Combustible y filtros',
  'Aceites y fluidos',
  'Correas y cadenas',
  'Sistema de refrigeración'
]

const peritajeElectrico = [
  'Batería de alta tensión (400-800V)',
  'Motor eléctrico y inversor',
  'Sistema de carga AC/DC',
  'Gestión térmica batería',
  'Software y actualizaciones',
  'Autonomía real del vehículo',
  'Sistemas de seguridad eléctrica',
  'Regeneración de energía'
]

// Marcas eléctricas
const marcasElectricas = [
  {
    nombre: 'Tesla',
    logo: 'T',
    modelos: ['Model 3', 'Model Y', 'Model S', 'Model X'],
    especialidad: 'Líder en tecnología EV'
  },
  {
    nombre: 'BMW',
    logo: 'B',
    modelos: ['i3', 'iX3', 'i4', 'iX'],
    especialidad: 'Lujo eléctrico alemán'
  },
  {
    nombre: 'Nissan',
    logo: 'N',
    modelos: ['Leaf', 'Ariya'],
    especialidad: 'Pionero masivo EV'
  },
  {
    nombre: 'Hyundai',
    logo: 'H',
    modelos: ['Ioniq 5', 'Kona EV', 'Ioniq 6'],
    especialidad: 'Carga ultrarrápida'
  },
  {
    nombre: 'KIA',
    logo: 'K',
    modelos: ['EV6', 'Niro EV', 'Soul EV'],
    especialidad: 'Tecnología accesible'
  },
  {
    nombre: 'Audi',
    logo: 'A',
    modelos: ['e-tron', 'e-tron GT', 'Q4 e-tron'],
    especialidad: 'Lujo y performance'
  },
  {
    nombre: 'Mercedes',
    logo: 'M',
    modelos: ['EQC', 'EQS', 'EQA', 'EQB'],
    especialidad: 'Elegancia eléctrica'
  },
  {
    nombre: 'BYD',
    logo: 'B',
    modelos: ['Han', 'Tang', 'Song', 'Yuan'],
    especialidad: 'Tecnología china'
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
        "name": "Peritaje Auto Eléctrico",
        "description": "Peritaje especializado para vehículos eléctricos e híbridos. Evaluación de batería, sistema eléctrico y componentes únicos.",
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
          "price": "150000",
          "priceCurrency": "CLP",
          "availability": "https://schema.org/InStock"
        },
        "serviceType": "Peritaje Vehículo Eléctrico",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Especialidad",
            "value": "Análisis batería de tracción"
          },
          {
            "@type": "PropertyValue",
            "name": "Incluye",
            "value": "Autonomía real estimada"
          }
        ]
      })
    }
  ]
})
</script>