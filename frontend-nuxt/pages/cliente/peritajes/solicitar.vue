<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
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
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-slate-700 mb-2">Dirección del Peritaje *</label>
                <input
                  v-model="form.direccion"
                  type="text"
                  placeholder="Av. Providencia 1234, Santiago, Región Metropolitana"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
                />
              </div>
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
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePeritajeStore } from '~/stores/peritajeStore'

// Meta
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

const router = useRouter()
const peritajeStore = usePeritajeStore()

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
  direccion: '',
  motivo: '',
  comentarios: ''
})

// Enviar solicitud
const enviarSolicitud = async () => {
  try {
    loading.value = true
    
    // Usar el store para enviar la solicitud
    const response = await peritajeStore.solicitarPeritaje(form.value)
    
    console.log('Solicitud enviada:', response)
    
    // Mostrar mensaje de éxito
    alert('Solicitud enviada correctamente. Te contactaremos pronto.')
    
    // Redirigir a la lista de peritajes
    router.push('/cliente/peritajes')
    
  } catch (error) {
    console.error('Error al enviar solicitud:', error)
    alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.')
  } finally {
    loading.value = false
  }
}
</script>

