<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-slate-800 mb-2">Detalles del Peritaje</h1>
            <p class="text-slate-600">Información completa de tu solicitud de peritaje</p>
          </div>
          <NuxtLink
            to="/cliente/peritajes"
            class="inline-flex items-center px-6 py-3 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Volver
          </NuxtLink>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Peritaje Details -->
      <div v-else-if="peritaje" class="space-y-6">
        <!-- Información General -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-xl font-semibold text-slate-800 mb-6">Información General</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Estado</label>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                    :class="getEstadoClass(peritaje.estado)">
                {{ getEstadoText(peritaje.estado) }}
              </span>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Fecha de Solicitud</label>
              <p class="text-slate-900 font-medium">{{ formatDate(peritaje.fechaCreacion) }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Precio</label>
              <p class="text-slate-900 font-medium">${{ peritaje.precio?.toLocaleString() || 'Por definir' }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Perito Asignado</label>
              <p class="text-slate-900 font-medium">{{ peritaje.perito?.nombre || 'Pendiente de asignación' }}</p>
            </div>
          </div>
        </div>

        <!-- Información del Vehículo -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-xl font-semibold text-slate-800 mb-6">Información del Vehículo</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Patente</label>
              <p class="text-slate-900 font-medium">{{ peritaje.vehiculo?.patente || peritaje.patente }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Marca</label>
              <p class="text-slate-900 font-medium">{{ peritaje.vehiculo?.marca || peritaje.marca }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Modelo</label>
              <p class="text-slate-900 font-medium">{{ peritaje.vehiculo?.modelo || peritaje.modelo }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Año</label>
              <p class="text-slate-900 font-medium">{{ peritaje.vehiculo?.ano || peritaje.ano }}</p>
            </div>
          </div>
        </div>

        <!-- Información de Contacto -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-xl font-semibold text-slate-800 mb-6">Información de Contacto</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Nombre</label>
              <p class="text-slate-900 font-medium">{{ peritaje.nombre }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Teléfono</label>
              <p class="text-slate-900 font-medium">{{ peritaje.telefono }}</p>
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-medium text-slate-500 mb-1">Email</label>
              <p class="text-slate-900 font-medium">{{ peritaje.email }}</p>
            </div>
          </div>
        </div>

        <!-- Información Adicional -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-xl font-semibold text-slate-800 mb-6">Información Adicional</h2>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Ubicación</label>
              <p class="text-slate-900 font-medium">{{ peritaje.ubicacion }}</p>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-500 mb-1">Motivo</label>
              <p class="text-slate-900 font-medium">{{ getMotivoText(peritaje.motivo) }}</p>
            </div>
            <div v-if="peritaje.comentarios">
              <label class="block text-sm font-medium text-slate-500 mb-1">Comentarios</label>
              <p class="text-slate-900">{{ peritaje.comentarios }}</p>
            </div>
          </div>
        </div>

        <!-- Acciones -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-xl font-semibold text-slate-800 mb-6">Acciones</h2>
          <div class="flex flex-wrap gap-4">
            <button
              v-if="peritaje.estado === 'pendiente'"
              @click="cancelarPeritaje"
              class="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
              Cancelar Solicitud
            </button>
            <button
              v-if="peritaje.estado === 'completado'"
              @click="descargarInforme"
              class="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Descargar Informe
            </button>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div v-else class="text-center py-12">
        <div class="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-slate-700 mb-2">Peritaje no encontrado</h3>
        <p class="text-slate-500 mb-6">El peritaje que buscas no existe o no tienes permisos para verlo</p>
        <NuxtLink
          to="/cliente/peritajes"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          Volver a Mis Peritajes
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Meta
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

const route = useRoute()
const loading = ref(true)
const peritaje = ref(null)

// Cargar peritaje
const cargarPeritaje = async () => {
  try {
    loading.value = true
    const peritajeStore = usePeritajeStore()
    peritaje.value = await peritajeStore.fetchPeritajeById(route.params.id)
  } catch (error) {
    console.error('Error al cargar peritaje:', error)
    peritaje.value = null
  } finally {
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
    'pendiente': 'Pendiente',
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

// Obtener texto del motivo
const getMotivoText = (motivo) => {
  const motivos = {
    'compra': 'Compra de vehículo',
    'venta': 'Venta de vehículo',
    'seguro': 'Reclamo de seguro',
    'otro': 'Otro'
  }
  return motivos[motivo] || motivo
}

// Cancelar peritaje
const cancelarPeritaje = async () => {
  if (confirm('¿Estás seguro de que quieres cancelar esta solicitud?')) {
    try {
      const { $api } = useNuxtApp()
      await $api.put(`/peritajes/${peritaje.value.id}/cancelar`)
      peritaje.value.estado = 'cancelado'
      alert('Solicitud cancelada correctamente')
    } catch (error) {
      console.error('Error al cancelar peritaje:', error)
      alert('Error al cancelar la solicitud')
    }
  }
}

// Descargar informe
const descargarInforme = () => {
  // TODO: Implementar descarga de informe
  alert('Funcionalidad de descarga en desarrollo')
}

// Cargar datos al montar
onMounted(() => {
  cargarPeritaje()
})
</script>
