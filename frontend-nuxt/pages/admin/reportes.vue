<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Reportes y Análisis</h1>
            <p class="text-slate-600 text-lg">Estadísticas detalladas del sistema</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="bg-white px-4 py-2 rounded-xl shadow">
              <span class="text-sm text-slate-500">Último reporte:</span>
              <span class="font-bold text-slate-800 ml-1">{{ fechaActual }}</span>
            </div>
            <NuxtLink
              to="/admin/dashboard"
              class="inline-flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-xl transition-all duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Volver al Panel
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Filtros de Tiempo -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-bold text-slate-800">Período de Análisis</h3>
          <button 
            @click="exportarReportes" 
            class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition-all duration-200"
          >
            📊 Exportar Reportes
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Período</label>
            <select v-model="filtros.periodo" @change="actualizarReportes" class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="7d">Últimos 7 días</option>
              <option value="30d">Últimos 30 días</option>
              <option value="90d">Últimos 3 meses</option>
              <option value="1y">Último año</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Fecha Desde</label>
            <input 
              v-model="filtros.fechaDesde" 
              @change="actualizarReportes"
              type="date" 
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Fecha Hasta</label>
            <input 
              v-model="filtros.fechaHasta" 
              @change="actualizarReportes"
              type="date" 
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div class="flex items-end">
            <button 
              @click="generarReporte"
              class="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200"
            >
              Generar Reporte
            </button>
          </div>
        </div>
      </div>

      <!-- KPIs Principales -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Usuarios Activos</p>
              <p class="text-2xl font-bold text-blue-600">{{ reportes.usuariosActivos }}</p>
              <p class="text-xs text-green-600 mt-1">
                <span class="inline-flex items-center">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"/>
                  </svg>
                  +12% vs mes anterior
                </span>
              </p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Vehículos Publicados</p>
              <p class="text-2xl font-bold text-green-600">{{ reportes.vehiculosPublicados }}</p>
              <p class="text-xs text-green-600 mt-1">
                <span class="inline-flex items-center">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"/>
                  </svg>
                  +8% vs mes anterior
                </span>
              </p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Remates Realizados</p>
              <p class="text-2xl font-bold text-orange-600">{{ reportes.rematesRealizados }}</p>
              <p class="text-xs text-orange-600 mt-1">
                <span class="inline-flex items-center">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"/>
                  </svg>
                  +25% vs mes anterior
                </span>
              </p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Peritajes Completados</p>
              <p class="text-2xl font-bold text-purple-600">{{ reportes.peritajesCompletados }}</p>
              <p class="text-xs text-purple-600 mt-1">
                <span class="inline-flex items-center">
                  <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"/>
                  </svg>
                  +15% vs mes anterior
                </span>
              </p>
            </div>
            <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Gráficos y Análisis -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <!-- Registros por Mes -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-slate-800">Registros de Usuarios por Mes</h3>
            <div class="text-sm text-slate-500">Últimos 6 meses</div>
          </div>
          <div class="h-64 flex items-end justify-between space-x-2">
            <div v-for="(mes, index) in registrosPorMes" :key="index" class="flex flex-col items-center flex-1">
              <div 
                class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg w-full transition-all duration-500 hover:from-blue-600 hover:to-blue-500"
                :style="`height: ${(mes.usuarios / maxRegistros) * 200}px`"
              ></div>
              <div class="text-xs text-slate-600 mt-2">{{ mes.mes }}</div>
              <div class="text-sm font-bold text-slate-800">{{ mes.usuarios }}</div>
            </div>
          </div>
        </div>

        <!-- Distribución por Rol -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-slate-800">Distribución de Usuarios por Rol</h3>
            <div class="text-sm text-slate-500">Actual</div>
          </div>
          <div class="space-y-4">
            <div v-for="rol in distribucionRoles" :key="rol.nombre" class="flex items-center justify-between">
              <div class="flex items-center space-x-3">
                <div class="w-4 h-4 rounded-full" :class="rol.color"></div>
                <span class="text-sm font-medium text-slate-700">{{ rol.nombre }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <div class="w-24 bg-slate-200 rounded-full h-2">
                  <div 
                    class="h-2 rounded-full transition-all duration-500" 
                    :class="rol.color"
                    :style="`width: ${(rol.cantidad / totalUsuarios) * 100}%`"
                  ></div>
                </div>
                <span class="text-sm font-bold text-slate-800 w-8">{{ rol.cantidad }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tablas de Reportes Detallados -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Top Automotoras -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-slate-800">Top Automotoras</h3>
            <span class="text-sm text-slate-500">Por vehículos publicados</span>
          </div>
          <div class="space-y-3">
            <div v-for="(automotora, index) in topAutomotoras" :key="index" class="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">{{ index + 1 }}</span>
                </div>
                <div>
                  <div class="font-medium text-slate-800">{{ automotora.nombre }}</div>
                  <div class="text-xs text-slate-500">{{ automotora.ubicacion }}</div>
                </div>
              </div>
              <div class="text-right">
                <div class="font-bold text-slate-800">{{ automotora.vehiculos }}</div>
                <div class="text-xs text-slate-500">vehículos</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Actividad Reciente -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-bold text-slate-800">Actividad Reciente</h3>
            <span class="text-sm text-slate-500">Últimas 24 horas</span>
          </div>
          <div class="space-y-3">
            <div v-for="(actividad, index) in actividadReciente" :key="index" class="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-xl transition-colors">
              <div class="w-2 h-2 rounded-full" :class="actividad.color"></div>
              <div class="flex-1">
                <div class="text-sm font-medium text-slate-800">{{ actividad.accion }}</div>
                <div class="text-xs text-slate-500">{{ actividad.tiempo }}</div>
              </div>
              <div class="text-xs text-slate-500">{{ actividad.usuario }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive, computed } from 'vue'

definePageMeta({
  middleware: 'admin'
})

useHead({
  title: 'Reportes y Análisis | Admin - Autoventas360',
  meta: [
    {
      name: 'description',
      content: 'Panel de reportes y análisis para administradores del sistema'
    }
  ]
})

// Estado
const loading = ref(false)

const filtros = reactive({
  periodo: '30d',
  fechaDesde: '',
  fechaHasta: ''
})

const reportes = ref({
  usuariosActivos: 156,
  vehiculosPublicados: 423,
  rematesRealizados: 28,
  peritajesCompletados: 89
})

const registrosPorMes = ref([
  { mes: 'Jul', usuarios: 23 },
  { mes: 'Ago', usuarios: 35 },
  { mes: 'Sep', usuarios: 28 },
  { mes: 'Oct', usuarios: 42 },
  { mes: 'Nov', usuarios: 38 },
  { mes: 'Dec', usuarios: 45 }
])

const distribucionRoles = ref([
  { nombre: 'Clientes', cantidad: 128, color: 'bg-green-500' },
  { nombre: 'Automotoras', cantidad: 18, color: 'bg-purple-500' },
  { nombre: 'Peritos', cantidad: 8, color: 'bg-orange-500' },
  { nombre: 'Publicistas', cantidad: 3, color: 'bg-blue-500' },
  { nombre: 'Administradores', cantidad: 2, color: 'bg-red-500' }
])

const topAutomotoras = ref([
  { nombre: 'AutoMax Santiago', ubicacion: 'Santiago', vehiculos: 45 },
  { nombre: 'Autos Premium', ubicacion: 'Valparaíso', vehiculos: 38 },
  { nombre: 'Concesionaria Norte', ubicacion: 'Antofagasta', vehiculos: 32 },
  { nombre: 'Sur Motors', ubicacion: 'Temuco', vehiculos: 28 },
  { nombre: 'Auto Espacio', ubicacion: 'Concepción', vehiculos: 24 }
])

const actividadReciente = ref([
  { accion: 'Nuevo usuario registrado', tiempo: 'Hace 2 horas', usuario: 'Sistema', color: 'bg-green-500' },
  { accion: 'Remate finalizado exitosamente', tiempo: 'Hace 3 horas', usuario: 'Admin', color: 'bg-blue-500' },
  { accion: 'Peritaje completado', tiempo: 'Hace 4 horas', usuario: 'Perito #2', color: 'bg-orange-500' },
  { accion: 'Vehículo publicado', tiempo: 'Hace 5 horas', usuario: 'AutoMax', color: 'bg-purple-500' },
  { accion: 'Usuario suspendido', tiempo: 'Hace 6 horas', usuario: 'Admin', color: 'bg-red-500' }
])

// Computed
const fechaActual = computed(() => {
  return new Date().toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

const maxRegistros = computed(() => {
  return Math.max(...registrosPorMes.value.map(mes => mes.usuarios))
})

const totalUsuarios = computed(() => {
  return distribucionRoles.value.reduce((total, rol) => total + rol.cantidad, 0)
})

// Funciones
const actualizarReportes = async () => {
  try {
    loading.value = true
    // TODO: Implementar llamada a API con filtros
    console.log('Actualizando reportes con filtros:', filtros)
    
    // Simular delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
  } catch (error) {
    console.error('Error actualizando reportes:', error)
  } finally {
    loading.value = false
  }
}

const generarReporte = async () => {
  try {
    loading.value = true
    console.log('Generando reporte personalizado...')
    
    // TODO: Implementar generación de reporte
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    const { $toast } = useNuxtApp()
    $toast.success('Reporte generado exitosamente')
    
  } catch (error) {
    console.error('Error generando reporte:', error)
  } finally {
    loading.value = false
  }
}

const exportarReportes = () => {
  // TODO: Implementar exportación
  console.log('Exportando reportes...')
  
  const { $toast } = useNuxtApp()
  $toast.success('Reportes exportados a CSV')
}

// Inicializar fechas por defecto
onMounted(() => {
  const hoy = new Date()
  filtros.fechaHasta = hoy.toISOString().split('T')[0]
  
  const hace30dias = new Date()
  hace30dias.setDate(hoy.getDate() - 30)
  filtros.fechaDesde = hace30dias.toISOString().split('T')[0]
})
</script>