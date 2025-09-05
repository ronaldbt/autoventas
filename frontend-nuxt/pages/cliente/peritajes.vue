<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <!-- Debug: Template is rendering -->
    {{ console.log('🔵 [Peritajes Page] Template rendering...') }}
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-slate-800 mb-2">Mis Peritajes</h1>
            <p class="text-slate-600">Gestiona y revisa todos tus peritajes realizados</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <div class="text-2xl font-bold text-blue-600">{{ peritajes.length }}</div>
              <div class="text-sm text-slate-500">Peritajes totales</div>
            </div>
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Empty State -->
      <div v-else-if="peritajes.length === 0" class="text-center py-12">
        <div class="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-slate-700 mb-2">No tienes peritajes aún</h3>
        <p class="text-slate-500 mb-6">Solicita tu primer peritaje para comenzar</p>
        <NuxtLink
          to="/cliente/peritajes/solicitar"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Solicitar Peritaje
        </NuxtLink>
      </div>

      <!-- Peritajes List -->
      <div v-else class="grid gap-6">
        <div
          v-for="peritaje in peritajes"
          :key="peritaje.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center"
                     :class="getEstadoIconClass(peritaje.estado)">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path v-if="peritaje.estado === 'pendiente'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path v-else-if="peritaje.estado === 'en_proceso'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path v-else-if="peritaje.estado === 'completado'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-slate-800">{{ peritaje.titulo || `${peritaje.marca} ${peritaje.modelo}` }}</h3>
                  <p class="text-sm text-slate-500">Patente: {{ peritaje.patente }}</p>
                  <p v-if="peritaje.fecha && peritaje.hora" class="text-sm text-slate-500">
                    Cita: {{ formatDate(peritaje.fecha) }} a las {{ peritaje.hora }}
                  </p>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm text-slate-500">Solicitado</div>
                <div class="font-semibold text-slate-700">{{ formatDate(peritaje.createdAt) }}</div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Estado</div>
                <div class="font-semibold text-slate-700">{{ getEstadoText(peritaje.estado) }}</div>
              </div>
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Precio</div>
                <div class="font-semibold text-slate-700">${{ peritaje.precio?.toLocaleString() || 'N/A' }}</div>
              </div>
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Perito</div>
                <div class="font-semibold text-slate-700">{{ peritaje.perito?.nombre || 'Asignado' }}</div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                      :class="getEstadoClass(peritaje.estado)">
                  {{ getEstadoText(peritaje.estado) }}
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <NuxtLink
                  :to="`/cliente/peritajes/${peritaje.id}`"
                  class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  Ver Detalles
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePeritajeStore } from '~/stores/peritajeStore'

// Meta
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

// Store
const peritajeStore = usePeritajeStore()

// Estado
const loading = ref(true)
const peritajes = ref([])

// Cargar peritajes
const cargarPeritajes = async () => {
  try {
    console.log('🔵 [Peritajes Page] Starting to load peritajes...')
    loading.value = true
    
    // Usar el store para cargar peritajes del cliente
    peritajes.value = await peritajeStore.fetchPeritajesCliente()
    
    console.log('🔵 [Peritajes Page] Loaded peritajes:', peritajes.value)
  } catch (error) {
    console.error('🔴 [Peritajes Page] Error al cargar peritajes:', error)
    peritajes.value = []
  } finally {
    console.log('🔵 [Peritajes Page] Finished loading peritajes, loading = false')
    loading.value = false
  }
}

// Formatear fecha
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Obtener texto del estado
const getEstadoText = (estado) => {
  const estados = {
    'pendiente': 'Por Realizar',
    'en_proceso': 'En Proceso',
    'completado': 'Completado',
    'cancelado': 'Cancelado'
  }
  return estados[estado] || estado
}

// Obtener clase del estado
const getEstadoClass = (estado) => {
  const clases = {
    'pendiente': 'bg-yellow-100 text-yellow-800',
    'en_proceso': 'bg-blue-100 text-blue-800',
    'completado': 'bg-green-100 text-green-800',
    'cancelado': 'bg-red-100 text-red-800'
  }
  return clases[estado] || 'bg-gray-100 text-gray-800'
}

// Obtener clase del icono del estado
const getEstadoIconClass = (estado) => {
  const clases = {
    'pendiente': 'bg-gradient-to-r from-yellow-500 to-yellow-600',
    'en_proceso': 'bg-gradient-to-r from-blue-500 to-blue-600',
    'completado': 'bg-gradient-to-r from-green-500 to-green-600',
    'cancelado': 'bg-gradient-to-r from-red-500 to-red-600'
  }
  return clases[estado] || 'bg-gradient-to-r from-gray-500 to-gray-600'
}

// Cargar datos al montar
onMounted(() => {
  console.log('🔵 [Peritajes Page] Component mounted, loading peritajes...')
  cargarPeritajes()
})
</script>
