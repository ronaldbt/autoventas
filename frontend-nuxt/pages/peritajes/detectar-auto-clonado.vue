<!-- pages/detectar-auto-clonado.vue -->
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
      <Meta property="og:url" content="https://autoventas360.com/peritajes/detectar-auto-clonado" />
      <Link rel="canonical" href="https://autoventas360.com/peritajes/detectar-auto-clonado" />
    </Head>

    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-300 text-sm font-medium mb-6">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path>
              </svg>
              Detección de Fraude
            </div>
            
            <h1 class="text-4xl lg:text-5xl font-bold mb-6">
              Detectar Auto <span class="text-orange-400">Clonado</span>
            </h1>
            
            <p class="text-xl text-purple-100 mb-8 leading-relaxed">
              Evita ser víctima de estafa. Verificamos si el auto que vas a comprar 
              es original o una clonación fraudulenta con documentos falsos.
            </p>

            <div class="bg-red-500/20 border border-red-500/30 rounded-lg p-4 mb-8">
              <div class="flex items-start">
                <svg class="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.530 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                <div>
                  <p class="text-red-100 font-medium">¡Alerta!</p>
                  <p class="text-red-200 text-sm">
                    Más de 15.000 autos clonados circulan en Chile según la PDI. No seas la próxima víctima.
                  </p>
                </div>
              </div>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Verificación VIN y números de serie</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Consulta en bases policiales</span>
              </div>
              <div class="flex items-center">
                <svg class="w-5 h-5 text-green-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Análisis de documentos originales</span>
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
                Verificar Auto Ahora
              </NuxtLink>
              <button class="border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Ver Señales
              </button>
            </div>
          </div>

          <div class="lg:text-right">
            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold mb-2">Peritaje Integral Completo</h3>
                <div class="text-3xl font-bold text-orange-400 mb-2">$59.990</div>
                <div class="text-sm text-purple-200 mb-4">Incluye todos los servicios</div>
              </div>
              
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span>Verificación VIN completa</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Consulta bases policiales</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Scanner automotriz</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Verificación kilometraje</span>
                  <span>✓</span>
                </div>
                <div class="flex justify-between">
                  <span>Certificado seguridad</span>
                  <span>✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Qué es un auto clonado -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ¿Qué es un Auto Clonado?
            </h2>
            <p class="text-xl text-gray-600 mb-6">
              Un auto clonado es un vehículo robado al cual se le han falsificado 
              los documentos para hacerlo pasar por un auto legal.
            </p>
            
            <div class="space-y-4">
              <div v-for="concepto in conceptosClonacion" :key="concepto.titulo" class="border-l-4 border-red-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ concepto.titulo }}</h3>
                <p class="text-gray-600">{{ concepto.descripcion }}</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Consecuencias de Comprar un Clonado</h3>
            <div class="space-y-4">
              <div v-for="consecuencia in consecuencias" :key="consecuencia.titulo" class="flex items-start">
                <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-1">{{ consecuencia.titulo }}</h4>
                  <p class="text-gray-600 text-sm">{{ consecuencia.descripcion }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Señales de un auto clonado -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Señales de Alerta de un Auto Clonado
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Aprende a identificar las señales que pueden indicar que el auto es clonado
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="senal in senalesClonado" :key="senal.categoria" class="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">{{ senal.categoria }}</h3>
            <ul class="space-y-2">
              <li v-for="indicador in senal.indicadores" :key="indicador" class="flex items-start">
                <svg class="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd"></path>
                </svg>
                <span class="text-sm text-gray-600">{{ indicador }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Proceso de verificación -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Proceso de Verificación
          </h2>
          <p class="text-xl text-gray-600">
            Método profesional para detectar autos clonados
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(paso, index) in procesosVerificacion" :key="paso.titulo" class="text-center">
            <div class="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              {{ index + 1 }}
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">{{ paso.titulo }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ paso.descripcion }}</p>
            <div class="bg-gray-50 rounded-lg p-3">
              <ul class="space-y-1">
                <li v-for="detalle in paso.detalles" :key="detalle" class="text-xs text-gray-500">
                  • {{ detalle }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Estadísticas y datos -->
    <section class="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4">
            La Realidad del Auto Clonado en Chile
          </h2>
          <p class="text-xl text-gray-300">
            Cifras oficiales que debes conocer
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8 mb-12">
          <div v-for="estadistica in estadisticasClonado" :key="estadistica.numero" class="text-center">
            <div class="text-4xl lg:text-5xl font-bold text-orange-400 mb-2">{{ estadistica.numero }}</div>
            <div class="text-lg font-semibold mb-2">{{ estadistica.titulo }}</div>
            <div class="text-gray-300 text-sm">{{ estadistica.descripcion }}</div>
          </div>
        </div>

        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-8">
          <h3 class="text-2xl font-bold mb-6 text-center">Regiones Más Afectadas</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div v-for="region in regionesAfectadas" :key="region.nombre" class="text-center">
              <div class="text-2xl font-bold text-red-400 mb-2">{{ region.casos }}</div>
              <div class="text-sm text-gray-300 mb-1">{{ region.nombre }}</div>
              <div class="text-xs text-gray-400">{{ region.porcentaje }}% del total nacional</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          Protégete del fraude
        </h2>
        <p class="text-xl mb-8 text-purple-100">
          Un peritaje integral de $59.990 puede evitarte perder todo tu dinero
        </p>
        
        <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-md mx-auto">
          <div class="text-xl font-bold text-orange-400 mb-2">Peritaje Integral Completo</div>
          <div class="text-4xl font-bold mb-2">$59.990</div>
          <div class="text-sm text-purple-200">Incluye todos los servicios de inspección</div>
        </div>

        <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 inline-block">
          Verificar Auto Ahora
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { usePeritajeSEO } from '~/composables/usePeritajeSEO'

// SEO configuration
const { generateKeywordMeta } = usePeritajeSEO()
const pageData = generateKeywordMeta('detectar-auto-clonado')

// Conceptos de clonación
const conceptosClonacion = [
  {
    titulo: 'Clonación de Identidad',
    descripcion: 'Se toman los datos de un auto legal y se replican en documentos falsos para un auto robado.'
  },
  {
    titulo: 'Falsificación de VIN',
    descripcion: 'Se modifica o cambia el número VIN del vehículo para que coincida con los documentos falsos.'
  },
  {
    titulo: 'Documentos Apócrifos',
    descripcion: 'Se crean padrones y revisiones técnicas falsas para darle apariencia de legalidad.'
  }
]

// Consecuencias
const consecuencias = [
  {
    titulo: 'Pérdida Total del Dinero',
    descripcion: 'El auto es confiscado y no hay reembolso posible'
  },
  {
    titulo: 'Problemas Legales',
    descripcion: 'Podrías enfrentar investigación por receptación'
  },
  {
    titulo: 'Sin Seguro',
    descripcion: 'Las aseguradoras no cubren vehículos clonados'
  },
  {
    titulo: 'Antecedentes Penales',
    descripcion: 'Posibles consecuencias judiciales permanentes'
  }
]

// Señales de auto clonado
const senalesClonado = [
  {
    categoria: 'Documentación',
    indicadores: [
      'Padrón con signos de alteración',
      'Revisión técnica muy reciente',
      'Documentos con manchas o borrones',
      'Sellos que no coinciden',
      'Fechas inconsistentes'
    ]
  },
  {
    categoria: 'Números de Serie',
    indicadores: [
      'VIN soldado o remachado',
      'Números grabados irregulares',
      'VIN que no coincide con motor',
      'Placas de identificación nuevas',
      'Marcas de lima o alteración'
    ]
  },
  {
    categoria: 'Vendedor Sospechoso',
    indicadores: [
      'Prisa por cerrar venta',
      'No permite revisar documentos',
      'Precio muy por debajo del mercado',
      'No tiene historial del auto',
      'Datos de contacto falsos'
    ]
  },
  {
    categoria: 'Estado del Vehículo',
    indicadores: [
      'Cerraduras forzadas o cambiadas',
      'Cables de encendido alterados',
      'Columna de dirección dañada',
      'Marcas de ganzúa',
      'Sistema de alarma deshabilitado'
    ]
  },
  {
    categoria: 'Procedencia',
    indicadores: [
      'Vendedor no es el dueño original',
      'Historial de propietarios confuso',
      'Auto "importado" sin documentos',
      'Vendido por terceros',
      'Sin comprobantes de compra'
    ]
  },
  {
    categoria: 'Documentos Digitales',
    indicadores: [
      'No aparece en sitio del Registro Civil',
      'Multas de regiones distantes',
      'Permiso de circulación vencido',
      'Sin registro en sitios oficiales',
      'TAG sin historial'
    ]
  }
]

// Procesos de verificación
const procesosVerificacion = [
  {
    titulo: 'Verificación VIN',
    descripcion: 'Análisis completo del número de identificación vehicular',
    detalles: [
      'Ubicación y legibilidad',
      'Coincidencia con documentos',
      'Verificación internacional',
      'Análisis de alteraciones'
    ]
  },
  {
    titulo: 'Consulta Policial',
    descripcion: 'Verificación en bases de datos oficiales',
    detalles: [
      'Base PDI de vehículos robados',
      'Registro Civil automotor',
      'Interpol vehículos',
      'Carabineros infracciones'
    ]
  },
  {
    titulo: 'Análisis Documental',
    descripcion: 'Examen forense de documentos del vehículo',
    detalles: [
      'Autenticidad padrón',
      'Verificación sellos',
      'Análisis papel y tinta',
      'Consistencia datos'
    ]
  },
  {
    titulo: 'Certificación',
    descripcion: 'Emisión de certificado oficial de verificación',
    detalles: [
      'Resultado verificación',
      'Respaldo legal',
      'Validez judicial',
      'Garantía servicio'
    ]
  }
]

// Estadísticas
const estadisticasClonado = [
  {
    numero: '15.000+',
    titulo: 'Autos clonados circulando',
    descripcion: 'Estimación PDI en Chile 2024'
  },
  {
    numero: '82%',
    titulo: 'Casos no detectados',
    descripcion: 'Por compradores sin verificación'
  },
  {
    numero: '$8.500.000',
    titulo: 'Pérdida promedio',
    descripcion: 'Por compra de auto clonado'
  },
  {
    numero: '24hrs',
    titulo: 'Tiempo confiscación',
    descripcion: 'Promedio desde detección'
  }
]

// Regiones afectadas
const regionesAfectadas = [
  {
    nombre: 'Región Metropolitana',
    casos: '6.200',
    porcentaje: '41'
  },
  {
    nombre: 'Región de Valparaíso',
    casos: '2.800',
    porcentaje: '19'
  },
  {
    nombre: 'Región del Biobío',
    casos: '1.900',
    porcentaje: '13'
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
        "name": "Detección de Autos Clonados",
        "description": "Verificación profesional para detectar autos clonados y evitar fraudes. Consulta en bases policiales incluida.",
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
        "serviceType": "Peritaje Integral Vehicular",
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Incluye",
            "value": "Consulta bases policiales"
          },
          {
            "@type": "PropertyValue",
            "name": "Cobertura",
            "value": "15.000+ casos detectables"
          }
        ]
      })
    }
  ]
})
</script>