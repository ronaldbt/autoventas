<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Solicitudes Pendientes</h1>
            <p class="text-slate-600 text-lg">Toma solicitudes de peritajes de clientes para trabajar</p>
          </div>
          <div class="text-right">
            <div class="text-2xl font-bold text-orange-600">{{ solicitudes.length }}</div>
            <div class="text-sm text-slate-500">Solicitudes disponibles</div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div class="flex items-center justify-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          <span class="ml-4 text-slate-600 text-lg">Cargando solicitudes...</span>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="solicitudes.length === 0" class="bg-white rounded-2xl shadow-xl p-12 border border-slate-100 text-center">
        <div class="w-24 h-24 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-800 mb-4">No hay solicitudes pendientes</h3>
        <p class="text-slate-600 mb-8">No hay solicitudes de clientes esperando ser asignadas</p>
        <NuxtLink
          to="/perito/peritajes"
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Ver mis peritajes
        </NuxtLink>
      </div>

      <!-- Solicitudes Grid -->
      <div v-else class="grid gap-6">
        <div
          v-for="solicitud in solicitudes"
          :key="solicitud.id"
          class="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
        >
          <div class="p-6">
            <!-- Header de la solicitud -->
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-slate-800">{{ solicitud.titulo || `${solicitud.marca} ${solicitud.modelo}` }}</h3>
                  <p class="text-sm text-slate-500">Patente: {{ solicitud.patente }}</p>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm text-slate-500">Solicitado</div>
                <div class="font-semibold text-slate-700">{{ formatDate(solicitud.createdAt) }}</div>
              </div>
            </div>

            <!-- Información del vehículo -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Vehículo</div>
                <div class="font-semibold text-slate-700">{{ solicitud.marca }} {{ solicitud.modelo }}</div>
                <div class="text-sm text-slate-600">{{ solicitud.ano }}</div>
              </div>
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Cliente</div>
                <div class="font-semibold text-slate-700">{{ solicitud.usuarioCliente?.nombre || solicitud.nombre }}</div>
              </div>
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Contacto</div>
                <div class="font-semibold text-slate-700">{{ solicitud.telefono }}</div>
                <div class="text-xs text-slate-600">{{ solicitud.email }}</div>
              </div>
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Fecha Cita</div>
                <div class="font-semibold text-slate-700">{{ formatDate(solicitud.fecha) }}</div>
                <div class="text-sm text-slate-600">{{ solicitud.hora }}</div>
              </div>
            </div>

            <!-- Motivo y comentarios -->
            <div v-if="solicitud.motivo || solicitud.comentarios" class="mb-4">
              <div class="bg-blue-50 rounded-xl p-4">
                <div v-if="solicitud.motivo" class="mb-2">
                  <div class="text-sm text-blue-600 font-semibold mb-1">Motivo del peritaje:</div>
                  <div class="text-slate-700">{{ solicitud.motivo }}</div>
                </div>
                <div v-if="solicitud.comentarios">
                  <div class="text-sm text-blue-600 font-semibold mb-1">Comentarios adicionales:</div>
                  <div class="text-slate-700">{{ solicitud.comentarios }}</div>
                </div>
              </div>
            </div>

            <!-- Dirección -->
            <div v-if="solicitud.direccion" class="mb-4">
              <div class="bg-green-50 rounded-xl p-4">
                <div class="text-sm text-green-600 font-semibold mb-1">Dirección:</div>
                <div class="text-slate-700">{{ solicitud.direccion }}</div>
              </div>
            </div>

            <!-- Acciones -->
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Pendiente
                </span>
                <span class="text-sm text-slate-500">
                  {{ timeAgo(solicitud.createdAt) }}
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <button
                  @click="tomarSolicitud(solicitud)"
                  :disabled="tomandoSolicitud"
                  class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  <svg v-if="!tomandoSolicitud" class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <div v-else class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {{ tomandoSolicitud ? 'Tomando...' : 'Tomar Solicitud' }}
                </button>
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
import { useRouter } from 'vue-router'
import { usePeritajeStore } from '~/stores/peritajeStore'

// Meta
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

const router = useRouter()
const store = usePeritajeStore()

// Estado
const loading = ref(true)
const solicitudes = ref([])
const tomandoSolicitud = ref(false)

// Cargar solicitudes pendientes
const cargarSolicitudes = async () => {
  try {
    loading.value = true
    solicitudes.value = await store.fetchSolicitudesPendientes()
  } catch (error) {
    console.error('Error al cargar solicitudes:', error)
    solicitudes.value = []
  } finally {
    loading.value = false
  }
}

// Tomar una solicitud
const tomarSolicitud = async (solicitud) => {
  try {
    tomandoSolicitud.value = true
    await store.tomarSolicitud(solicitud.id)
    // Remover de la lista local
    solicitudes.value = solicitudes.value.filter(s => s.id !== solicitud.id)
    // Redirigir a mis peritajes
    router.push('/perito/peritajes')
  } catch (error) {
    console.error('Error al tomar solicitud:', error)
    alert('Error al tomar la solicitud')
  } finally {
    tomandoSolicitud.value = false
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

// Tiempo transcurrido
const timeAgo = (date) => {
  const now = new Date()
  const past = new Date(date)
  const diffMs = now - past
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diffMs / (1000 * 60))
  
  if (diffDays > 0) return `hace ${diffDays} día${diffDays > 1 ? 's' : ''}`
  if (diffHours > 0) return `hace ${diffHours} hora${diffHours > 1 ? 's' : ''}`
  if (diffMinutes > 0) return `hace ${diffMinutes} minuto${diffMinutes > 1 ? 's' : ''}`
  return 'hace unos momentos'
}

// Cargar datos al montar
onMounted(() => {
  cargarSolicitudes()
})
</script>