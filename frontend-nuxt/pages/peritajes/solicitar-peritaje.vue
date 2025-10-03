<template>
  <div>
    <!-- SEO Head -->
    <Head>
      <Title>Solicitar Peritaje Auto - Agenda tu Inspección Vehicular | Autoventas360</Title>
      <Meta name="description" content="Solicita tu peritaje vehicular online. Formulario fácil para agendar inspección de auto. Expertos certificados, servicio a domicilio disponible." />
      <Meta name="keywords" content="solicitar peritaje auto, agendar peritaje vehicular, formulario peritaje auto, inspección vehículo solicitar, peritaje domicilio" />
      <Meta property="og:title" content="Solicitar Peritaje Auto - Agenda tu Inspección Vehicular" />
      <Meta property="og:description" content="Solicita tu peritaje vehicular online. Formulario fácil para agendar inspección de auto." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://autoventas360.com/peritajes/solicitar-peritaje" />
      <Link rel="canonical" href="https://autoventas360.com/peritajes/solicitar-peritaje" />
    </Head>
    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />
    

  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <!-- Debug: Template is rendering -->
    {{ console.log('🟠 [SOLICITAR PERITAJE FORM] Template renderizando...') }}
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-slate-800 mb-2">Solicitar Peritaje</h1>
            <p class="text-slate-600">Completa el formulario para solicitar un peritaje de tu vehículo</p>
          </div>
          <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <form @submit.prevent="enviarSolicitud" class="space-y-8">
          <!-- Debug form submission -->
          {{ console.log('🟢 [Solicitar Peritaje] Formulario renderizado, función enviarSolicitud:', typeof enviarSolicitud) }}
          <!-- Información del Vehículo -->
          <div class="border-b border-slate-200 pb-8">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-slate-800">Información del Vehículo</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Patente *</label>
                <input
                  v-model="form.patente"
                  type="text"
                  placeholder="Ej: ABC123"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Año *</label>
                <input
                  v-model="form.ano"
                  type="number"
                  min="1990"
                  :max="new Date().getFullYear() + 1"
                  placeholder="2020"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Marca *</label>
                <input
                  v-model="form.marca"
                  type="text"
                  placeholder="Toyota"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Modelo *</label>
                <input
                  v-model="form.modelo"
                  type="text"
                  placeholder="Corolla"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
            </div>
          </div>

          <!-- Información de Contacto -->
          <div class="border-b border-slate-200 pb-8">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-slate-800">Información de Contacto</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Nombre Completo *</label>
                <input
                  v-model="form.nombre"
                  type="text"
                  placeholder="Juan Pérez"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Teléfono *</label>
                <input
                  v-model="form.telefono"
                  type="tel"
                  placeholder="+56 9 1234 5678"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="juan@ejemplo.com"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
            </div>
          </div>

          <!-- Información de Cita -->
          <div class="border-b border-slate-200 pb-8">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-slate-800">Información de Cita</h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Fecha del Peritaje *</label>
                <input
                  v-model="form.fecha"
                  type="date"
                  :min="new Date().toISOString().split('T')[0]"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Hora del Peritaje *</label>
                <input
                  v-model="form.hora"
                  type="time"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
            </div>

            <!-- Tipo de Servicio -->
            <div class="mb-6">
              <label class="block text-sm font-medium text-slate-700 mb-3">Tipo de Servicio *</label>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  @click="form.tipoServicio = 'domicilio'"
                  :class="[
                    'border-2 rounded-xl p-4 cursor-pointer transition-all duration-200',
                    form.tipoServicio === 'domicilio'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  ]"
                >
                  <div class="flex items-center space-x-3">
                    <div :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center',
                      form.tipoServicio === 'domicilio'
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-100 text-slate-600'
                    ]">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-slate-800">Peritaje a Domicilio</h3>
                      <p class="text-sm text-slate-600">El perito va a tu ubicación</p>
                      <p class="text-xs text-slate-500 mt-1">Costo adicional: $15.000</p>
                    </div>
                  </div>
                </div>
                <div 
                  @click="form.tipoServicio = 'sucursal'"
                  :class="[
                    'border-2 rounded-xl p-4 cursor-pointer transition-all duration-200',
                    form.tipoServicio === 'sucursal'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  ]"
                >
                  <div class="flex items-center space-x-3">
                    <div :class="[
                      'w-12 h-12 rounded-xl flex items-center justify-center',
                      form.tipoServicio === 'sucursal'
                        ? 'bg-blue-500 text-white'
                        : 'bg-slate-100 text-slate-600'
                    ]">
                      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 class="font-semibold text-slate-800">Peritaje en Sucursal</h3>
                      <p class="text-sm text-slate-600">Llevas el vehículo a la sucursal del perito</p>
                      <p class="text-xs text-slate-500 mt-1">Sin costo adicional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Dirección/Ubicación -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                {{ form.tipoServicio === 'domicilio' ? 'Dirección donde realizar el peritaje *' : 'Dirección de la sucursal o punto de encuentro *' }}
              </label>
              <input
                v-model="form.direccion"
                type="text"
                :placeholder="form.tipoServicio === 'domicilio' 
                  ? 'Av. Providencia 1234, Santiago, Región Metropolitana' 
                  : 'El perito te contactará para coordinar la dirección de la sucursal'"
                required
                class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
              />
              <p v-if="form.tipoServicio === 'sucursal'" class="text-xs text-slate-500 mt-1">
                * El perito te contactará para coordinar la dirección exacta de la sucursal
              </p>
            </div>
          </div>

          <!-- Información Adicional -->
          <div class="border-b border-slate-200 pb-8">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-slate-800">Información Adicional</h2>
            </div>
            
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Motivo del Peritaje *</label>
                <select
                  v-model="form.motivo"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                >
                  <option value="">Selecciona un motivo</option>
                  <option value="compra">Compra de vehículo</option>
                  <option value="venta">Venta de vehículo</option>
                  <option value="seguro">Reclamo de seguro</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-slate-700 mb-2">Comentarios Adicionales</label>
                <textarea
                  v-model="form.comentarios"
                  rows="4"
                  placeholder="Describe cualquier información adicional que consideres relevante..."
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                ></textarea>
              </div>
            </div>
          </div>

          <!-- Botones -->
          <div class="flex items-center justify-between pt-6">
            <NuxtLink
              to="/cliente/peritajes"
              class="inline-flex items-center px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Cancelar
            </NuxtLink>
            <button
              type="submit"
              :disabled="loading"
              @click="() => console.log('🟡 [Solicitar Peritaje] Botón presionado!')"
              class="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <div v-if="loading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              <svg v-else class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              {{ loading ? 'Enviando...' : 'Enviar Solicitud' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePeritajeStore } from '~/stores/peritajeStore'

// Meta - Temporalmente sin middleware para testing
definePageMeta({
  // middleware: 'auth', // Comentado temporalmente para testing
  layout: 'default'
})

const router = useRouter()
const peritajeStore = usePeritajeStore()

console.log('🟢 [Solicitar Peritaje] Script ejecutándose, stores cargados')

// Estado
const loading = ref(false)
const form = ref({
  patente: '',
  ano: '',
  marca: '',
  modelo: '',
  nombre: '',
  telefono: '',
  email: '',
  fecha: '',
  hora: '',
  tipoServicio: 'domicilio', // Por defecto domicilio
  direccion: '',
  motivo: '',
  comentarios: ''
})

console.log('🟢 [Solicitar Peritaje] Estado inicial configurado')

// Enviar solicitud
const enviarSolicitud = async () => {
  try {
    loading.value = true
    
    console.log('🔵 [Solicitar Peritaje] Iniciando envío...', form.value)
    
    // Usar el store para enviar la solicitud
    const response = await peritajeStore.solicitarPeritaje(form.value)
    
    console.log('✅ [Solicitar Peritaje] Solicitud enviada:', response)
    
    // Mostrar mensaje de éxito
    alert('Solicitud enviada correctamente. Te contactaremos pronto.')
    
    // Redirigir a la lista de peritajes
    router.push('/cliente/peritajes')
    
  } catch (error) {
    console.error('🔴 [Solicitar Peritaje] Error al enviar solicitud:', error)
    
    // Mostrar error más detallado
    if (error.response?.data?.error) {
      alert(`Error: ${error.response.data.error}`)
    } else if (error.message) {
      alert(`Error: ${error.message}`)
    } else {
      alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.')
    }
  } finally {
    loading.value = false
  }
}

// SEO optimization para solicitar peritaje
const { generatePeritajeMeta, generatePeritajeSchema, generatePeritajeFAQSchema } = usePeritajeSEO()

useHead(generatePeritajeMeta('solicitar', 'general'))

// Structured Data para solicitar peritaje
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generatePeritajeSchema('solicitud'))
    },
    {
      type: 'application/ld+json', 
      innerHTML: JSON.stringify(generatePeritajeFAQSchema('solicitar'))
    }
  ]
})
</script>

