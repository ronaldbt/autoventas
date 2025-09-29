<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Dashboard Perito</h1>
            <p class="text-slate-600 text-lg">Gestión de peritajes y solicitudes</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
        <div class="flex items-center space-x-3">
          <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p class="text-red-700 font-medium">{{ error }}</p>
        </div>
      </div>

      <!-- Dashboard Content -->
      <div v-else class="space-y-8">
        <!-- Estadísticas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Total Peritajes -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-slate-600 text-sm font-medium">Total Peritajes</p>
                <p class="text-3xl font-bold text-slate-800 mt-1">{{ dashboardData.estadisticas.totalPeritajes }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- En Proceso -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-slate-600 text-sm font-medium">En Proceso</p>
                <p class="text-3xl font-bold text-orange-600 mt-1">{{ dashboardData.estadisticas.peritajesEnProceso }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Completados -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-slate-600 text-sm font-medium">Completados</p>
                <p class="text-3xl font-bold text-green-600 mt-1">{{ dashboardData.estadisticas.peritajesCompletados }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Solicitudes Pendientes -->
          <div class="bg-white rounded-2xl shadow-xl p-6 border border-slate-100">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-slate-600 text-sm font-medium">Solicitudes Pendientes</p>
                <p class="text-3xl font-bold text-purple-600 mt-1">{{ dashboardData.estadisticas.solicitudesPendientes }}</p>
              </div>
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Próximos Peritajes -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-slate-800">Próximos Peritajes</h2>
            </div>
            <NuxtLink 
              to="/perito/peritajes" 
              class="text-orange-600 hover:text-orange-700 font-medium transition-colors"
            >
              Ver todos →
            </NuxtLink>
          </div>

          <div v-if="dashboardData.proximosPeritajes.length === 0" class="text-center py-8">
            <svg class="w-16 h-16 text-slate-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <p class="text-slate-500 text-lg">No hay peritajes programados</p>
            <p class="text-slate-400 text-sm mt-1">Los próximos peritajes aparecerán aquí</p>
          </div>

          <div v-else class="space-y-4">
            <div
              v-for="peritaje in dashboardData.proximosPeritajes"
              :key="peritaje.id"
              class="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-slate-800">{{ peritaje.titulo || 'Peritaje sin título' }}</h3>
                    <p class="text-slate-600 text-sm">
                      Cliente: {{ peritaje.usuarioCliente?.nombre || 'Sin asignar' }}
                    </p>
                    <p class="text-slate-500 text-sm">
                      {{ peritaje.marca }} {{ peritaje.modelo }} {{ peritaje.ano }}
                    </p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-slate-800 font-medium">
                    {{ formatDate(peritaje.fecha) }}
                  </p>
                  <p class="text-slate-500 text-sm">
                    {{ peritaje.hora || 'Hora por confirmar' }}
                  </p>
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 mt-2">
                    {{ peritaje.estado }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Acciones Rápidas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Ver Solicitudes Pendientes -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-800">Solicitudes Pendientes</h3>
                <p class="text-slate-600">Revisa las nuevas solicitudes de peritaje</p>
              </div>
            </div>
            <NuxtLink 
              to="/perito/solicitudes" 
              class="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Ver Solicitudes
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- Mis Peritajes -->
          <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-slate-800">Mis Peritajes</h3>
                <p class="text-slate-600">Gestiona tus peritajes asignados</p>
              </div>
            </div>
            <NuxtLink 
              to="/perito/peritajes" 
              class="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Ver Mis Peritajes
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import peritajeService from '~/services/peritajeService'

// Configuración de página
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

// Estado reactivo
const loading = ref(true)
const error = ref(null)
const dashboardData = ref({
  estadisticas: {
    totalPeritajes: 0,
    peritajesEnProceso: 0,
    peritajesCompletados: 0,
    solicitudesPendientes: 0
  },
  proximosPeritajes: []
})

// Función para formatear fecha
const formatDate = (dateString) => {
  if (!dateString) return 'Fecha por confirmar'
  const date = new Date(dateString)
  return date.toLocaleDateString('es-CL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Cargar datos del dashboard
const cargarDashboard = async () => {
  try {
    loading.value = true
    error.value = null
    
    const { $api } = useNuxtApp()
    const data = await peritajeService.dashboard($api)
    dashboardData.value = data
    
  } catch (err) {
    console.error('Error al cargar dashboard:', err)
    error.value = err.message || 'Error al cargar los datos del dashboard'
  } finally {
    loading.value = false
  }
}

// Cargar datos al montar
onMounted(() => {
  cargarDashboard()
})
</script>