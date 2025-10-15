<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-slate-800 mb-2">Mis Autos</h1>
            <p class="text-slate-600">Gestiona tus vehículos publicados</p>
          </div>
          <div class="flex gap-4">
            <NuxtLink 
              to="/vehiculos/agregar"
              class="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Agregar Auto
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex items-center justify-center py-12">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p class="text-slate-600">Cargando tus vehículos...</p>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else-if="!misVehiculos.length" class="bg-white rounded-2xl shadow-lg p-12 text-center">
        <svg class="w-16 h-16 text-slate-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0M15 17a2 2 0 104 0"></path>
        </svg>
        <h3 class="text-xl font-semibold text-slate-700 mb-2">No tienes autos publicados</h3>
        <p class="text-slate-500 mb-6">Comienza agregando tu primer vehículo para venta</p>
        <NuxtLink 
          to="/vehiculos/agregar"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Agregar mi primer auto
        </NuxtLink>
      </div>

      <!-- Vehiculos Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="vehiculo in misVehiculos" 
          :key="vehiculo.id" 
          class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 group"
        >
          <!-- Image -->
          <div class="relative h-48 bg-slate-100 overflow-hidden">
            <img 
              v-if="vehiculo.imagenes && vehiculo.imagenes.length > 0"
              :src="vehiculo.imagenes[0]" 
              :alt="vehiculo.titulo"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <div v-else class="w-full h-full flex items-center justify-center bg-slate-200">
              <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>

            <!-- Status Badge -->
            <div class="absolute top-3 left-3">
              <span 
                :class="{
                  'bg-green-100 text-green-800': vehiculo.estado === 'ACTIVO',
                  'bg-yellow-100 text-yellow-800': vehiculo.estado === 'PENDIENTE',
                  'bg-red-100 text-red-800': vehiculo.estado === 'INACTIVO'
                }"
                class="px-3 py-1 text-xs font-medium rounded-full"
              >
                {{ vehiculo.estado }}
              </span>
            </div>

            <!-- Quick Actions -->
            <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div class="flex gap-2">
                <button 
                  @click="editarVehiculo(vehiculo.id)"
                  class="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  title="Editar"
                >
                  <svg class="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                </button>
                <button 
                  @click="confirmarEliminar(vehiculo)"
                  class="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                  title="Eliminar"
                >
                  <svg class="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-start justify-between mb-3">
              <h3 class="font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                {{ vehiculo.titulo }}
              </h3>
              <span class="text-2xl font-bold text-orange-600">
                ${{ Number(vehiculo.precio).toLocaleString('es-CL') }}
              </span>
            </div>

            <!-- Vehicle Details -->
            <div class="space-y-2 mb-4">
              <div class="flex items-center gap-2 text-sm text-slate-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                {{ vehiculo.marca?.nombre || 'Marca no especificada' }} 
                {{ vehiculo.modelo?.nombre ? ' - ' + vehiculo.modelo.nombre : '' }}
              </div>
              
              <div class="flex items-center gap-2 text-sm text-slate-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v1a1 1 0 01-1 1v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a1 1 0 01-1-1V7a1 1 0 011-1h3z"></path>
                </svg>
                {{ vehiculo.anio }} • {{ Number(vehiculo.kilometros).toLocaleString('es-CL') }} km
              </div>

              <div class="flex items-center gap-2 text-sm text-slate-600">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                {{ vehiculo.region?.nombre || 'Región no especificada' }}
                {{ vehiculo.comuna?.nombre ? ', ' + vehiculo.comuna.nombre : '' }}
              </div>
            </div>

            <!-- Action buttons -->
            <div class="flex gap-3">
              <NuxtLink 
                :to="generateHierarchicalURL(vehiculo)"
                class="flex-1 px-4 py-2 bg-slate-100 text-slate-700 text-center rounded-lg hover:bg-slate-200 transition-colors text-sm font-medium"
              >
                Ver Publicación
              </NuxtLink>
              <button 
                @click="editarVehiculo(vehiculo.id)"
                class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                Editar
              </button>
            </div>

            <!-- Stats -->
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              <span>{{ vehiculo.visitas || 0 }} visitas</span>
              <span>Publicado {{ formatearFecha(vehiculo.createdAt) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de confirmación de eliminación -->
    <div 
      v-if="mostrarModalEliminar"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      @click.self="mostrarModalEliminar = false"
    >
      <div class="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full">
        <div class="text-center">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-800 mb-2">¿Eliminar vehículo?</h3>
          <p class="text-slate-600 mb-6">
            ¿Estás seguro de que quieres eliminar "<strong>{{ vehiculoAEliminar?.titulo }}</strong>"? Esta acción no se puede deshacer.
          </p>
          <div class="flex gap-3">
            <button 
              @click="mostrarModalEliminar = false"
              class="flex-1 px-4 py-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors"
              :disabled="eliminando"
            >
              Cancelar
            </button>
            <button 
              @click="eliminarVehiculo"
              class="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
              :disabled="eliminando"
            >
              {{ eliminando ? 'Eliminando...' : 'Eliminar' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ['auth']
})

const { $api } = useNuxtApp()
const router = useRouter()
const { generateHierarchicalURL } = useSEO()

// Estados reactivos
const loading = ref(true)
const misVehiculos = ref([])
const mostrarModalEliminar = ref(false)
const vehiculoAEliminar = ref(null)
const eliminando = ref(false)

// Cargar vehículos del usuario
const cargarMisVehiculos = async () => {
  try {
    loading.value = true
    const response = await $api.get('/vehiculos/mis-vehiculos')
    misVehiculos.value = response.data.vehiculos || []
  } catch (error) {
    console.error('Error al cargar vehículos:', error)
    // Si no hay endpoint aún, usar el endpoint general con filtros
    try {
      const response = await $api.get('/vehiculos')
      misVehiculos.value = response.data.vehiculos || []
    } catch (fallbackError) {
      console.error('Error en endpoint fallback:', fallbackError)
      misVehiculos.value = []
    }
  } finally {
    loading.value = false
  }
}

// Editar vehículo
const editarVehiculo = (id) => {
  router.push(`/vehiculos/editar/${id}`)
}

// Confirmar eliminación
const confirmarEliminar = (vehiculo) => {
  vehiculoAEliminar.value = vehiculo
  mostrarModalEliminar.value = true
}

// Eliminar vehículo
const eliminarVehiculo = async () => {
  if (!vehiculoAEliminar.value) return
  
  try {
    eliminando.value = true
    await $api.delete(`/vehiculos/${vehiculoAEliminar.value.id}`)
    
    // Remover de la lista
    misVehiculos.value = misVehiculos.value.filter(v => v.id !== vehiculoAEliminar.value.id)
    
    mostrarModalEliminar.value = false
    vehiculoAEliminar.value = null
    
    // Mostrar mensaje de éxito
    const toast = useToast()
    if (toast) {
      toast.success('Vehículo eliminado correctamente')
    }
  } catch (error) {
    console.error('Error al eliminar vehículo:', error)
    alert('Error al eliminar el vehículo. Por favor, inténtalo de nuevo.')
  } finally {
    eliminando.value = false
  }
}

// Formatear fecha
const formatearFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

// Cargar datos al montar el componente
onMounted(() => {
  cargarMisVehiculos()
})

// SEO
useHead({
  title: 'Mis Autos - Autoventas360',
  meta: [
    { name: 'description', content: 'Gestiona tus vehículos publicados en Autoventas360' }
  ]
})
</script>