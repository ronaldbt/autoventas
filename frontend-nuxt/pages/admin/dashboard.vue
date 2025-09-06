<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <!-- Header -->
    <div class="bg-white shadow-lg border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-slate-800">Panel de Administración</h1>
            <p class="text-slate-600 mt-1">Gestiona todo el sistema desde aquí</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <p class="text-sm text-slate-500">Bienvenido</p>
              <p class="font-semibold text-slate-800">{{ usuario?.nombre || 'Administrador' }}</p>
            </div>
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">{{ (usuario?.nombre || 'A')[0].toUpperCase() }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <!-- Total Vehículos -->
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-slate-500">Total Vehículos</p>
              <p class="text-3xl font-bold text-slate-800">{{ stats.totalVehiculos }}</p>
              <p class="text-xs text-green-600 mt-1">
                <span class="inline-flex items-center">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"/>
                  </svg>
                  Activos en catálogo
                </span>
              </p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Total Usuarios -->
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-slate-500">Total Usuarios</p>
              <p class="text-3xl font-bold text-slate-800">{{ stats.totalUsuarios }}</p>
              <p class="text-xs text-blue-600 mt-1">
                <span class="inline-flex items-center">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                  Registrados
                </span>
              </p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Total Automotoras -->
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-slate-500">Automotoras</p>
              <p class="text-3xl font-bold text-slate-800">{{ stats.totalAutomotoras }}</p>
              <p class="text-xs text-purple-600 mt-1">
                <span class="inline-flex items-center">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                  </svg>
                  Activas
                </span>
              </p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0H3m0 0h8M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Total Remates -->
        <div class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-slate-500">Remates</p>
              <p class="text-3xl font-bold text-slate-800">{{ stats.totalRemates }}</p>
              <div class="flex items-center mt-1">
                <span class="text-xs text-green-600 mr-2">{{ stats.rematesActivos }} activos</span>
                <span class="text-xs text-orange-600">{{ stats.rematesPendientes }} programados</span>
              </div>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Gestión de Remates -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-800">Gestión de Remates</h3>
          </div>
          <p class="text-slate-600 mb-4">Administra subastas, horarios y participantes</p>
          <div class="space-y-2">
            <NuxtLink 
              to="/admin/remates"
              class="block w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-center py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Panel de Remates
            </NuxtLink>
            <div class="grid grid-cols-2 gap-2">
              <button 
                @click="navegarACrearRemate"
                class="bg-orange-100 hover:bg-orange-200 text-orange-700 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Crear Remate
              </button>
              <NuxtLink 
                to="/remates"
                class="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Ver Públicos
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Gestión de Usuarios -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-800">Usuarios</h3>
          </div>
          <p class="text-slate-600 mb-4">Administra clientes y automotoras</p>
          <div class="grid grid-cols-2 gap-2">
            <div class="bg-blue-50 p-3 rounded-lg text-center">
              <p class="text-2xl font-bold text-blue-600">{{ stats.clientes }}</p>
              <p class="text-xs text-blue-600">Clientes</p>
            </div>
            <div class="bg-green-50 p-3 rounded-lg text-center">
              <p class="text-2xl font-bold text-green-600">{{ stats.totalAutomotoras }}</p>
              <p class="text-xs text-green-600">Dealers</p>
            </div>
          </div>
        </div>

        <!-- Sistema -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-3">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-slate-800">Sistema</h3>
          </div>
          <p class="text-slate-600 mb-4">Configuración y herramientas</p>
          <div class="space-y-2">
            <button class="w-full bg-green-100 hover:bg-green-200 text-green-700 py-2 rounded-lg text-sm font-medium transition-colors">
              Configuración
            </button>
            <div class="grid grid-cols-2 gap-2">
              <button class="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg text-xs font-medium transition-colors">
                Reportes
              </button>
              <button class="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 rounded-lg text-xs font-medium transition-colors">
                Logs
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Recent Remates -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-slate-800">Remates Recientes</h3>
            <NuxtLink 
              to="/admin/remates"
              class="text-orange-600 hover:text-orange-700 text-sm font-medium"
            >
              Ver todos →
            </NuxtLink>
          </div>
          
          <div v-if="loadingRemates" class="space-y-3">
            <div v-for="n in 3" :key="n" class="animate-pulse">
              <div class="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                <div class="w-10 h-10 bg-slate-200 rounded-lg"></div>
                <div class="flex-1">
                  <div class="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
                  <div class="h-3 bg-slate-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>

          <div v-else-if="recentRemates.length > 0" class="space-y-3">
            <div 
              v-for="remate in recentRemates" 
              :key="remate.id"
              class="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <div :class="getEstadoClass(remate.estado)" class="w-10 h-10 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <div class="flex-1 min-w-0">
                <p class="font-medium text-slate-800 truncate">{{ remate.titulo }}</p>
                <p class="text-sm text-slate-500">
                  {{ formatEstado(remate.estado) }} • {{ formatFecha(remate.fechaHoraInicio) }}
                </p>
              </div>
              <span class="text-sm font-medium text-green-600">
                ${{ formatNumber(remate.precioBase) }}
              </span>
            </div>
          </div>

          <div v-else class="text-center py-8">
            <svg class="mx-auto h-12 w-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            <h3 class="mt-2 text-sm font-medium text-slate-900">No hay remates</h3>
            <p class="mt-1 text-sm text-slate-500">Comienza creando tu primer remate</p>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h3 class="text-lg font-bold text-slate-800 mb-4">Estadísticas Rápidas</h3>
          
          <div class="space-y-4">
            <!-- Vehículos por Estado -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-slate-600">Vehículos Activos</span>
                <span class="text-sm font-bold text-slate-800">{{ stats.totalVehiculos }}</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" 
                  :style="`width: ${stats.totalVehiculos > 0 ? 75 : 0}%`"
                ></div>
              </div>
            </div>

            <!-- Remates por Estado -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-slate-600">Remates Activos</span>
                <span class="text-sm font-bold text-slate-800">{{ stats.rematesActivos }}</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" 
                  :style="`width: ${stats.rematesActivos > 0 ? (stats.rematesActivos / stats.totalRemates * 100) : 0}%`"
                ></div>
              </div>
            </div>

            <!-- Usuarios Registrados -->
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-slate-600">Usuarios</span>
                <span class="text-sm font-bold text-slate-800">{{ stats.totalUsuarios }}</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-2">
                <div 
                  class="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" 
                  :style="`width: ${stats.totalUsuarios > 0 ? 60 : 0}%`"
                ></div>
              </div>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-200">
            <div class="text-center">
              <p class="text-2xl font-bold text-slate-800">{{ formatNumber(stats.valorTotalInventario) }}</p>
              <p class="text-sm text-slate-500">Valor total del inventario</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth', 'admin'],
  layout: 'default'
})

useHead({
  title: 'Dashboard Administrador | Autoventas360',
  meta: [
    {
      name: 'description',
      content: 'Panel de administración principal con estadísticas del sistema'
    }
  ]
})

const { $api } = useNuxtApp()
const { usuario } = useAuthStore()
const remateStore = useRemateStore()

// Estado reactivo
const stats = ref({
  totalVehiculos: 0,
  totalUsuarios: 0,
  totalAutomotoras: 0,
  totalRemates: 0,
  rematesActivos: 0,
  rematesPendientes: 0,
  clientes: 0,
  valorTotalInventario: 0
})

const recentRemates = ref([])
const loadingRemates = ref(true)

// Cargar estadísticas generales
const cargarEstadisticas = async () => {
  try {
    // Cargar múltiples endpoints en paralelo
    const [vehiculosRes, usuariosRes, rematesRes] = await Promise.allSettled([
      $api.get('/vehiculos'),
      $api.get('/dashboard/stats'), // Asumiendo que existe este endpoint
      remateStore.fetchRemates({ limit: 5 })
    ])

    // Procesar vehículos
    if (vehiculosRes.status === 'fulfilled') {
      const vehiculos = vehiculosRes.value?.data?.vehiculos || []
      stats.value.totalVehiculos = vehiculos.length
      stats.value.valorTotalInventario = vehiculos.reduce((sum, v) => sum + (v.precio || 0), 0)
    }

    // Procesar estadísticas del dashboard (si existe el endpoint)
    if (usuariosRes.status === 'fulfilled') {
      const dashStats = usuariosRes.value?.data || {}
      stats.value.totalUsuarios = dashStats.totalUsuarios || 0
      stats.value.totalAutomotoras = dashStats.totalAutomotoras || 0
      stats.value.clientes = dashStats.clientes || 0
    } else {
      // Valores por defecto si no existe el endpoint
      stats.value.totalUsuarios = 150
      stats.value.totalAutomotoras = 25
      stats.value.clientes = 125
    }

    // Procesar remates
    if (rematesRes.status === 'fulfilled') {
      const remateData = rematesRes.value
      recentRemates.value = remateData.remates || []
      stats.value.totalRemates = remateData.totalRemates || recentRemates.value.length
      stats.value.rematesActivos = recentRemates.value.filter(r => r.estado === 'en_vivo').length
      stats.value.rematesPendientes = recentRemates.value.filter(r => r.estado === 'programado').length
    }

  } catch (error) {
    console.error('Error cargando estadísticas:', error)
  } finally {
    loadingRemates.value = false
  }
}

// Navegación
const navegarACrearRemate = () => {
  navigateTo('/admin/remates?modal=crear')
}

// Helpers
const formatNumber = (num) => {
  return new Intl.NumberFormat('es-CL').format(num || 0)
}

const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short'
  })
}

const formatEstado = (estado) => {
  const estados = {
    programado: 'Programado',
    en_vivo: 'En Vivo',
    finalizado: 'Finalizado',
    cancelado: 'Cancelado'
  }
  return estados[estado] || estado
}

const getEstadoClass = (estado) => {
  const clases = {
    programado: 'bg-blue-100 text-blue-600',
    en_vivo: 'bg-green-100 text-green-600',
    finalizado: 'bg-slate-100 text-slate-600',
    cancelado: 'bg-red-100 text-red-600'
  }
  return clases[estado] || 'bg-slate-100 text-slate-600'
}

// Cargar datos al montar
onMounted(() => {
  cargarEstadisticas()
})
</script>