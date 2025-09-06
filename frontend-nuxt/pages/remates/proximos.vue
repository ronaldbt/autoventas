<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Próximos Remates</h1>
            <p class="text-slate-600 text-lg">Descubre los mejores vehículos en subasta</p>
          </div>
          <NuxtLink
            to="/remates/rematar-mi-auto"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Rematar Mi Auto
          </NuxtLink>
        </div>
      </div>

      <!-- Filtros -->
      <div class="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Estado</label>
            <select v-model="filtros.estado" class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option value="">Todos</option>
              <option value="programado">Programados</option>
              <option value="en_vivo">En Vivo</option>
              <option value="finalizado">Finalizados</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Tipo de Vehículo</label>
            <select v-model="filtros.tipo" class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option value="">Todos</option>
              <option value="auto">Automóviles</option>
              <option value="suv">SUVs</option>
              <option value="pickup">Pickups</option>
              <option value="moto">Motocicletas</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Precio Base</label>
            <select v-model="filtros.precio" class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent">
              <option value="">Cualquier precio</option>
              <option value="0-5000000">Hasta $5.000.000</option>
              <option value="5000000-10000000">$5M - $10M</option>
              <option value="10000000-20000000">$10M - $20M</option>
              <option value="20000000+">Más de $20M</option>
            </select>
          </div>
          <div class="flex items-end">
            <button 
              @click="aplicarFiltros"
              class="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-200"
            >
              Filtrar
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div v-for="n in 4" :key="n" class="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
          <div class="h-64 bg-slate-200"></div>
          <div class="p-6">
            <div class="h-6 bg-slate-200 rounded mb-4"></div>
            <div class="h-4 bg-slate-200 rounded mb-2"></div>
            <div class="h-4 bg-slate-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>

      <!-- Remates Grid -->
      <div v-else-if="remates.length > 0" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div 
          v-for="remate in remates" 
          :key="remate.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <!-- Header con estado -->
          <div class="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100">
            <div class="flex items-center space-x-3">
              <div class="w-3 h-3 rounded-full" :class="getEstadoColor(remate.estado)"></div>
              <span class="font-semibold text-slate-700">{{ getEstadoTexto(remate.estado) }}</span>
            </div>
            <div class="text-right">
              <div class="text-xs text-slate-500">ID Remate</div>
              <div class="font-mono text-sm">#{{ remate.id.toString().padStart(6, '0') }}</div>
            </div>
          </div>

          <div class="flex">
            <!-- Imagen del vehículo -->
            <div class="w-1/3 relative">
              <div class="h-64 bg-gradient-to-r from-slate-200 to-slate-300">
                <img 
                  v-if="remate.vehiculo?.imagenes?.[0]" 
                  :src="remate.vehiculo.imagenes[0]" 
                  :alt="`${remate.vehiculo.marca} ${remate.vehiculo.modelo}`"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute top-3 left-3">
                <span class="px-2 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                  {{ tiempoParaRemate(remate.fechaHoraInicio) }}
                </span>
              </div>
            </div>

            <!-- Información del remate -->
            <div class="w-2/3 p-6">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-xl font-bold text-slate-800 mb-1">
                    {{ remate.vehiculo?.marca }} {{ remate.vehiculo?.modelo }}
                  </h3>
                  <p class="text-slate-600 text-sm">{{ remate.vehiculo?.ano }} • {{ remate.vehiculo?.kilometraje?.toLocaleString() }} km</p>
                </div>
                <div class="text-right">
                  <div class="text-xs text-slate-500">Participantes</div>
                  <div class="text-lg font-bold text-blue-600">{{ remate.participantes || 0 }}</div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div class="text-xs text-slate-500">Precio Base</div>
                  <div class="text-lg font-bold text-green-600">${{ remate.precioBase?.toLocaleString() || 'N/A' }}</div>
                </div>
                <div>
                  <div class="text-xs text-slate-500">Puja Actual</div>
                  <div class="text-lg font-bold text-orange-600">${{ remate.pujaActual?.toLocaleString() || 'Sin pujas' }}</div>
                </div>
              </div>

              <div class="mb-4">
                <div class="text-xs text-slate-500 mb-1">Fecha y Hora</div>
                <div class="text-sm font-semibold">{{ formatFechaCompleta(remate.fechaHoraInicio) }}</div>
              </div>

              <div class="flex items-center space-x-2">
                <NuxtLink 
                  :to="`/remates/${remate.slug || remate.id}`"
                  class="flex-1 text-center py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
                >
                  Ver Detalles
                </NuxtLink>
                <button 
                  v-if="remate.estado === 'programado'"
                  @click="inscribirse(remate)"
                  :disabled="inscribiendo === remate.id"
                  class="flex-1 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
                >
                  {{ inscribiendo === remate.id ? 'Inscribiendo...' : 'Inscribirse' }}
                </button>
                <button 
                  v-else-if="remate.estado === 'en_vivo'"
                  @click="unirseRemate(remate)"
                  class="flex-1 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-200 text-sm animate-pulse"
                >
                  🔴 EN VIVO
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="text-center py-16">
        <div class="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-slate-700 mb-2">No se encontraron remates</h3>
        <p class="text-slate-500 mb-6">Intenta ajustar tus filtros o revisa más tarde</p>
        <button 
          @click="limpiarFiltros"
          class="px-6 py-3 bg-orange-600 text-white rounded-xl hover:bg-orange-700 transition-colors"
        >
          Limpiar Filtros
        </button>
      </div>

      <!-- Paginación -->
      <div v-if="remates.length > 0" class="flex justify-center mt-8">
        <div class="flex items-center space-x-2">
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="cambiarPagina(page)"
            :class="[
              'px-4 py-2 rounded-xl font-semibold transition-all duration-200',
              currentPage === page 
                ? 'bg-orange-600 text-white' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            ]"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

// Meta tags para SEO
useHead({
  title: 'Próximos Remates de Vehículos | Autoventas360 - Subastas Programadas',
  meta: [
    {
      name: 'description',
      content: 'Explora todos los próximos remates de vehículos programados. Inscríbete antes de que inicien y participa en subastas en tiempo real.'
    },
    {
      name: 'keywords',
      content: 'próximos remates, subastas programadas, remates vehículos, calendario subastas, inscripción remates'
    }
  ]
})

// Estado
const loading = ref(true)
const remates = ref([])
const inscribiendo = ref(null)
const currentPage = ref(1)
const totalPages = ref(1)

const filtros = reactive({
  estado: '',
  tipo: '',
  precio: ''
})

// Funciones
const getEstadoColor = (estado) => {
  const colores = {
    'programado': 'bg-yellow-500',
    'en_vivo': 'bg-red-500 animate-pulse',
    'finalizado': 'bg-green-500'
  }
  return colores[estado] || 'bg-gray-500'
}

const getEstadoTexto = (estado) => {
  const textos = {
    'programado': 'Programado',
    'en_vivo': 'En Vivo',
    'finalizado': 'Finalizado'
  }
  return textos[estado] || estado
}

const tiempoParaRemate = (fecha) => {
  const ahora = new Date()
  const fechaRemate = new Date(fecha)
  const diferencia = fechaRemate - ahora
  
  if (diferencia < 0) return 'En curso'
  
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  
  if (dias > 0) return `${dias}d ${horas}h`
  if (horas > 0) return `${horas}h`
  return 'Pronto'
}

const formatFechaCompleta = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-CL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const inscribirse = async (remate) => {
  try {
    inscribiendo.value = remate.id
    // TODO: Implementar API call
    // await $api.post(`/remates/${remate.id}/inscripcion`)
    console.log('Inscribiéndose al remate:', remate.id)
    // Simular delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    alert('¡Te has inscrito exitosamente al remate!')
  } catch (error) {
    console.error('Error al inscribirse:', error)
    alert('Error al inscribirse al remate')
  } finally {
    inscribiendo.value = null
  }
}

const unirseRemate = (remate) => {
  // TODO: Implementar lógica para unirse a remate en vivo
  console.log('Uniéndose al remate en vivo:', remate.id)
  // Redirigir a la sala de remate
  navigateTo(`/remates/${remate.slug || remate.id}/sala`)
}

const aplicarFiltros = async () => {
  await cargarRemates()
}

const limpiarFiltros = async () => {
  filtros.estado = ''
  filtros.tipo = ''
  filtros.precio = ''
  await cargarRemates()
}

const cambiarPagina = async (page) => {
  currentPage.value = page
  await cargarRemates()
}

const cargarRemates = async () => {
  try {
    loading.value = true
    // TODO: Implementar API call con filtros
    // const params = { ...filtros, page: currentPage.value }
    // const response = await $api.get('/remates', { params })
    // remates.value = response.data.remates
    // totalPages.value = response.data.totalPages
    
    // Datos mock por ahora
    remates.value = []
  } catch (error) {
    console.error('Error cargando remates:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  cargarRemates()
})
</script>