<!-- pages/peritajes/agendar-peritaje-auto.vue -->
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
      <Meta property="og:url" content="https://autoventas360.com/peritajes/agendar-peritaje-auto" />
      <Link rel="canonical" href="https://autoventas360.com/peritajes/agendar-peritaje-auto" />
    </Head>

    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center">
          <div class="inline-flex items-center px-4 py-2 bg-orange-500/20 rounded-full text-orange-300 text-sm font-medium mb-6">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
            Agenda en 2 minutos
          </div>
          
          <h1 class="text-4xl lg:text-5xl font-bold mb-6">
            Agendar <span class="text-orange-400">Peritaje Auto</span>
          </h1>
          
          <p class="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Programa tu peritaje vehicular en línea. Selecciona fecha, hora y tipo de servicio. 
            Nuestros expertos van a donde estés en Santiago y Regiones.
          </p>
        </div>
      </div>
    </section>

    <!-- Formulario de agendamiento -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Agenda tu Peritaje en 3 Pasos
            </h2>
            <p class="text-gray-600">
              Completa el formulario y confirma tu cita al instante
            </p>
          </div>

          <form @submit.prevent="agendarPeritaje" class="space-y-8">
            <!-- Paso 1: Tipo de peritaje -->
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Selecciona el tipo de peritaje
              </h3>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div v-for="tipo in tiposPeritaje" :key="tipo.id" class="relative">
                  <input 
                    :id="tipo.id" 
                    v-model="formulario.tipoPeritaje" 
                    :value="tipo.id" 
                    type="radio" 
                    name="tipoPeritaje" 
                    class="sr-only"
                  >
                  <label 
                    :for="tipo.id" 
                    class="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200"
                    :class="formulario.tipoPeritaje === tipo.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'"
                  >
                    <div class="flex-1">
                      <div class="font-semibold text-gray-900">{{ tipo.nombre }}</div>
                      <div class="text-sm text-gray-600">{{ tipo.descripcion }}</div>
                      <div class="text-lg font-bold text-blue-600 mt-2">${{ tipo.precio.toLocaleString() }}</div>
                    </div>
                    <div v-if="formulario.tipoPeritaje === tipo.id" class="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            <!-- Paso 2: Información del vehículo -->
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Información del vehículo
              </h3>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Marca</label>
                  <select v-model="formulario.marca" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona una marca</option>
                    <option v-for="marca in marcas" :key="marca" :value="marca">{{ marca }}</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Modelo</label>
                  <input v-model="formulario.modelo" type="text" placeholder="Ej: Corolla, Civic..." class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Año</label>
                  <select v-model="formulario.anio" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona el año</option>
                    <option v-for="anio in anios" :key="anio" :value="anio">{{ anio }}</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Patente</label>
                  <input v-model="formulario.patente" type="text" placeholder="ABCD12" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
              </div>
            </div>

            <!-- Paso 3: Fecha y hora -->
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Fecha, hora y ubicación
              </h3>
              
              <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Fecha preferida</label>
                  <input v-model="formulario.fecha" type="date" :min="fechaMinima" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Hora preferida</label>
                  <select v-model="formulario.hora" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Selecciona una hora</option>
                    <option v-for="hora in horasDisponibles" :key="hora" :value="hora">{{ hora }}</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dirección del peritaje</label>
                <input v-model="formulario.direccion" type="text" placeholder="Dirección completa donde realizar el peritaje" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <p class="text-sm text-gray-500 mt-1">Nos desplazamos a domicilio sin costo adicional en Santiago</p>
              </div>
            </div>

            <!-- Información personal -->
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">
                Tus datos de contacto
              </h3>
              
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input v-model="formulario.nombre" type="text" placeholder="Juan Pérez" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input v-model="formulario.telefono" type="tel" placeholder="+56 9 1234 5678" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
                
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input v-model="formulario.email" type="email" placeholder="juan@email.com" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                </div>
              </div>
            </div>

            <!-- Resumen y botón -->
            <div class="bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-6">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-semibold text-gray-900">Resumen de tu peritaje</h3>
                <div class="text-2xl font-bold text-blue-600">
                  ${{ tipoSeleccionado?.precio.toLocaleString() || '0' }}
                </div>
              </div>
              
              <div class="grid md:grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                <div>
                  <strong>Servicio:</strong> {{ tipoSeleccionado?.nombre || 'No seleccionado' }}
                </div>
                <div>
                  <strong>Vehículo:</strong> {{ formulario.marca }} {{ formulario.modelo }} {{ formulario.anio }}
                </div>
                <div>
                  <strong>Fecha:</strong> {{ formulario.fecha ? formatearFecha(formulario.fecha) : 'No seleccionada' }}
                </div>
                <div>
                  <strong>Hora:</strong> {{ formulario.hora || 'No seleccionada' }}
                </div>
              </div>
              
              <button 
                type="submit" 
                :disabled="!formularioValido"
                class="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <span v-if="enviando">Agendando...</span>
                <span v-else>Confirmar Agendamiento</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Ventajas del servicio -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir nuestro servicio?
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="ventaja in ventajasServicio" :key="ventaja.titulo" class="text-center">
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

    <!-- FAQ rápido -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h2>
        </div>

        <div class="space-y-6">
          <div v-for="faq in faqsAgendamiento" :key="faq.pregunta" class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ faq.pregunta }}</h3>
            <p class="text-gray-600">{{ faq.respuesta }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { usePeritajeSEO } from '~/composables/usePeritajeSEO'

// SEO configuration
const { generateKeywordMeta } = usePeritajeSEO()
const pageData = generateKeywordMeta('agendar-peritaje')

// Formulario reactivo
const formulario = ref({
  tipoPeritaje: '',
  marca: '',
  modelo: '',
  anio: '',
  patente: '',
  fecha: '',
  hora: '',
  direccion: '',
  nombre: '',
  telefono: '',
  email: ''
})

const enviando = ref(false)

// Tipos de peritaje
const tiposPeritaje = [
  {
    id: 'completo',
    nombre: 'Peritaje Completo',
    descripcion: 'Evaluación integral de 180+ puntos',
    precio: 85000
  },
  {
    id: 'precompra',
    nombre: 'Revisión Pre-compra',
    descripcion: 'Ideal antes de comprar un auto usado',
    precio: 75000
  },
  {
    id: 'scanner',
    nombre: 'Scanner Automotriz',
    descripcion: 'Diagnóstico electrónico a domicilio',
    precio: 45000
  },
  {
    id: 'electrico',
    nombre: 'Peritaje Eléctrico',
    descripcion: 'Especializado en vehículos eléctricos',
    precio: 150000
  },
  {
    id: 'kilometraje',
    nombre: 'Verificación Kilometraje',
    descripcion: 'Detecta manipulación del odómetro',
    precio: 55000
  },
  {
    id: 'clonado',
    nombre: 'Detección Auto Clonado',
    descripcion: 'Verifica autenticidad del vehículo',
    precio: 75000
  }
]

// Marcas populares
const marcas = [
  'Toyota', 'Nissan', 'Hyundai', 'Chevrolet', 'Kia', 'Ford', 'Volkswagen', 
  'Honda', 'Mazda', 'Suzuki', 'Mitsubishi', 'Peugeot', 'Renault', 'BMW', 
  'Mercedes-Benz', 'Audi', 'Volvo', 'Subaru', 'Tesla', 'BYD'
]

// Años disponibles
const anios = computed(() => {
  const currentYear = new Date().getFullYear()
  const years = []
  for (let year = currentYear; year >= 1990; year--) {
    years.push(year)
  }
  return years
})

// Horarios disponibles
const horasDisponibles = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
]

// Fecha mínima (mañana)
const fechaMinima = computed(() => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return tomorrow.toISOString().split('T')[0]
})

// Tipo seleccionado
const tipoSeleccionado = computed(() => {
  return tiposPeritaje.find(tipo => tipo.id === formulario.value.tipoPeritaje)
})

// Validación del formulario
const formularioValido = computed(() => {
  const f = formulario.value
  return f.tipoPeritaje && f.marca && f.modelo && f.anio && f.patente && 
         f.fecha && f.hora && f.direccion && f.nombre && f.telefono && f.email
})

// Formatear fecha
function formatearFecha(fecha) {
  const date = new Date(fecha + 'T00:00:00')
  return date.toLocaleDateString('es-CL', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

// Agendar peritaje
async function agendarPeritaje() {
  if (!formularioValido.value) return
  
  enviando.value = true
  
  try {
    // Aquí iría la lógica para enviar el formulario
    // Por ahora simulamos un delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Redirigir a página de confirmación o mostrar mensaje
    alert('¡Peritaje agendado exitosamente! Te contactaremos para confirmar.')
    
    // Resetear formulario
    formulario.value = {
      tipoPeritaje: '',
      marca: '',
      modelo: '',
      anio: '',
      patente: '',
      fecha: '',
      hora: '',
      direccion: '',
      nombre: '',
      telefono: '',
      email: ''
    }
  } catch (error) {
    alert('Error al agendar. Por favor intenta nuevamente.')
  } finally {
    enviando.value = false
  }
}

// Ventajas del servicio
const ventajasServicio = [
  {
    titulo: 'A Domicilio',
    descripcion: 'Vamos donde estés, sin costos adicionales en Santiago',
    icono: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  },
  {
    titulo: 'Expertos Certificados',
    descripcion: 'Más de 10 años de experiencia en peritajes vehiculares',
    icono: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  },
  {
    titulo: 'Reporte Inmediato',
    descripcion: 'Recibes el informe digital al finalizar el peritaje',
    icono: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  }
]

// FAQs de agendamiento
const faqsAgendamiento = [
  {
    pregunta: '¿Cuánto tiempo demora el peritaje?',
    respuesta: 'Un peritaje completo toma entre 45-90 minutos dependiendo del tipo de servicio seleccionado.'
  },
  {
    pregunta: '¿Qué pasa si llueve el día agendado?',
    respuesta: 'Podemos realizar el peritaje bajo techo (garaje, estacionamiento cubierto) o reagendar sin costo.'
  },
  {
    pregunta: '¿Puedo cambiar la fecha después de agendar?',
    respuesta: 'Sí, puedes cambiar la fecha hasta 24 horas antes de la cita sin costo adicional.'
  },
  {
    pregunta: '¿Qué formas de pago aceptan?',
    respuesta: 'Aceptamos efectivo, transferencia bancaria, tarjetas de débito y crédito.'
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
        "name": "Agendar Peritaje Auto",
        "description": "Agenda tu peritaje vehicular en línea. Servicio a domicilio en Santiago. Expertos certificados con más de 10 años de experiencia.",
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
        "offers": [
          {
            "@type": "Offer",
            "name": "Peritaje Completo",
            "price": "85000",
            "priceCurrency": "CLP"
          },
          {
            "@type": "Offer",
            "name": "Revisión Pre-compra",
            "price": "75000",
            "priceCurrency": "CLP"
          }
        ],
        "serviceType": "Agendamiento Peritaje Vehicular",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      })
    }
  ]
})
</script>