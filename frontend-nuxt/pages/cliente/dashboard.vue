<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-slate-800 mb-2">Dashboard Cliente</h1>
            <p class="text-slate-600">Bienvenido a tu panel de control</p>
          </div>
          <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <NuxtLink
          to="/cliente/peritajes"
          class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
        >
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-800">Mis Peritajes</h3>
              <p class="text-slate-500 text-sm">Ver y gestionar peritajes</p>
            </div>
          </div>
        </NuxtLink>

        <NuxtLink
          to="/cliente/peritajes/solicitar"
          class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
        >
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-800">Solicitar Peritaje</h3>
              <p class="text-slate-500 text-sm">Nueva solicitud de peritaje</p>
            </div>
          </div>
        </NuxtLink>

        <button
          @click="solicitarInforme"
          class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group text-left w-full"
        >
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-800">Solicitar Informe</h3>
              <p class="text-slate-500 text-sm">Generar nuevo informe</p>
            </div>
          </div>
        </button>

        <NuxtLink
          to="/cliente/informes"
          class="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 group"
        >
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-slate-800">Ver Informes</h3>
              <p class="text-slate-500 text-sm">Mis informes generados</p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- Informes Recientes -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold text-slate-800">Informes Recientes</h2>
          <NuxtLink
            to="/cliente/informes"
            class="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Ver todos →
          </NuxtLink>
        </div>
        
        <div v-if="loading" class="flex justify-center items-center py-8">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>

        <div v-else-if="informes.length === 0" class="text-center py-8">
          <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <p class="text-slate-500 mb-4">No tienes informes generados aún</p>
          <button
            @click="solicitarInforme"
            class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Solicitar Primer Informe
          </button>
        </div>

        <div v-else class="space-y-4">
          <div
            v-for="informe in informes.slice(0, 3)"
            :key="informe.id"
            class="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <div class="flex items-center space-x-4">
              <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <p class="text-slate-800 font-medium">{{ informe.titulo }}</p>
                <p class="text-slate-500 text-sm">{{ informe.tipo }} • {{ formatDate(informe.fechaCreacion) }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
                    :class="getEstadoClass(informe.estado)">
                {{ getEstadoText(informe.estado) }}
              </span>
              <button
                v-if="informe.estado === 'completado'"
                @click="descargarInforme(informe.id)"
                class="p-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <h2 class="text-xl font-semibold text-slate-800 mb-6">Actividad Reciente</h2>
        <div class="space-y-4">
          <div class="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-slate-800 font-medium">Bienvenido a Autoventas360</p>
              <p class="text-slate-500 text-sm">Tu cuenta ha sido configurada correctamente</p>
            </div>
            <span class="text-slate-400 text-sm">Hoy</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Solicitar Informe -->
    <div v-if="showModalInforme" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
        <h3 class="text-xl font-semibold text-slate-800 mb-6">Solicitar Nuevo Informe</h3>
        
        <form @submit.prevent="enviarSolicitudInforme" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Tipo de Informe</label>
            <select
              v-model="formInforme.tipo"
              required
              class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Selecciona un tipo</option>
              <option value="peritaje">Informe de Peritaje</option>
              <option value="mantenimiento">Informe de Mantenimiento</option>
              <option value="valoracion">Informe de Valoración</option>
              <option value="personalizado">Informe Personalizado</option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Título del Informe</label>
            <input
              v-model="formInforme.titulo"
              type="text"
              required
              placeholder="Ej: Informe de peritaje - Toyota Corolla"
              class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 mb-2">Descripción</label>
            <textarea
              v-model="formInforme.descripcion"
              rows="3"
              placeholder="Describe qué información necesitas en el informe..."
              class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          <div class="flex items-center justify-end space-x-4 pt-4">
            <button
              type="button"
              @click="showModalInforme = false"
              class="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              :disabled="loadingInforme"
              class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <div v-if="loadingInforme" class="flex items-center">
                <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Enviando...
              </div>
              <span v-else>Enviar Solicitud</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Meta
definePageMeta({
  layout: 'default'
})

// Estado
const loading = ref(false)
const loadingInforme = ref(false)
const showModalInforme = ref(false)
const informes = ref([])

const formInforme = ref({
  tipo: '',
  titulo: '',
  descripcion: ''
})

// Cargar informes
const cargarInformes = async () => {
  try {
    loading.value = true
    const informeStore = useInformeStore()
    informes.value = await informeStore.fetchInformesCliente()
  } catch (error) {
    console.error('Error al cargar informes:', error)
    // Fallback a datos de ejemplo si la API falla
    informes.value = []
  } finally {
    loading.value = false
  }
}

// Solicitar informe
const solicitarInforme = () => {
  showModalInforme.value = true
  formInforme.value = {
    tipo: '',
    titulo: '',
    descripcion: ''
  }
}

// Enviar solicitud de informe
const enviarSolicitudInforme = async () => {
  try {
    loadingInforme.value = true
    
    const informeStore = useInformeStore()
    await informeStore.solicitarInforme(formInforme.value)
    
    // Recargar la lista de informes
    await cargarInformes()
    
    // Cerrar modal
    showModalInforme.value = false
    
    // Mostrar mensaje de éxito
    alert('Solicitud de informe enviada correctamente')
    
  } catch (error) {
    console.error('Error al enviar solicitud de informe:', error)
    alert('Error al enviar la solicitud. Por favor, inténtalo de nuevo.')
  } finally {
    loadingInforme.value = false
  }
}

// Descargar informe
const descargarInforme = (id) => {
  // TODO: Implementar descarga real
  alert(`Descargando informe ${id}...`)
}

// Formatear fecha
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'short',
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

// Cargar datos al montar
onMounted(() => {
  cargarInformes()
})
</script>
