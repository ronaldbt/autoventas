<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-slate-800 mb-2">Mis Informes</h1>
            <p class="text-slate-600">Gestiona y descarga todos tus informes generados</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <div class="text-2xl font-bold text-blue-600">{{ informes.length }}</div>
              <div class="text-sm text-slate-500">Informes totales</div>
            </div>
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtros -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div class="flex flex-wrap items-center gap-4">
          <div class="flex-1 min-w-64">
            <input
              v-model="filtroBusqueda"
              type="text"
              placeholder="Buscar informes..."
              class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <select
            v-model="filtroEstado"
            class="px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Todos los estados</option>
            <option value="pendiente">Pendiente</option>
            <option value="en_proceso">En Proceso</option>
            <option value="completado">Completado</option>
            <option value="cancelado">Cancelado</option>
          </select>
          <select
            v-model="filtroTipo"
            class="px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Todos los tipos</option>
            <option value="peritaje">Peritaje</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="valoracion">Valoración</option>
            <option value="personalizado">Personalizado</option>
          </select>
          <button
            @click="solicitarInforme"
            class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Solicitar Informe
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>

      <!-- Empty State -->
      <div v-else-if="informesFiltrados.length === 0" class="text-center py-12">
        <div class="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-slate-700 mb-2">No tienes informes aún</h3>
        <p class="text-slate-500 mb-6">Solicita tu primer informe para comenzar</p>
        <button
          @click="solicitarInforme"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Solicitar Primer Informe
        </button>
      </div>

      <!-- Informes List -->
      <div v-else class="grid gap-6">
        <div
          v-for="informe in informesFiltrados"
          :key="informe.id"
          class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          <div class="p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-slate-800">{{ informe.titulo }}</h3>
                  <p class="text-sm text-slate-500">{{ getTipoText(informe.tipo) }}</p>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm text-slate-500">Fecha</div>
                <div class="font-semibold text-slate-700">{{ formatDate(informe.fechaCreacion) }}</div>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Estado</div>
                <div class="font-semibold text-slate-700">{{ getEstadoText(informe.estado) }}</div>
              </div>
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Tipo</div>
                <div class="font-semibold text-slate-700">{{ getTipoText(informe.tipo) }}</div>
              </div>
              <div class="bg-slate-50 rounded-xl p-4">
                <div class="text-sm text-slate-500 mb-1">Progreso</div>
                <div class="font-semibold text-slate-700">{{ getProgresoText(informe.estado) }}</div>
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                      :class="getEstadoClass(informe.estado)">
                  {{ getEstadoText(informe.estado) }}
                </span>
              </div>
              <div class="flex items-center space-x-3">
                <button
                  v-if="informe.estado === 'completado'"
                  @click="descargarInforme(informe.id)"
                  class="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Descargar
                </button>
                <button
                  v-if="informe.estado === 'pendiente'"
                  @click="cancelarInforme(informe.id)"
                  class="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  Cancelar
                </button>
                <button
                  @click="verDetalles(informe.id)"
                  class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  Ver Detalles
                </button>
              </div>
            </div>
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
import { ref, onMounted, computed } from 'vue'

// Meta
definePageMeta({
  layout: 'default'
})

// Estado
const loading = ref(false)
const loadingInforme = ref(false)
const showModalInforme = ref(false)
const informes = ref([])

const filtroBusqueda = ref('')
const filtroEstado = ref('')
const filtroTipo = ref('')

const formInforme = ref({
  tipo: '',
  titulo: '',
  descripcion: ''
})

// Informes filtrados
const informesFiltrados = computed(() => {
  let filtrados = informes.value

  if (filtroBusqueda.value) {
    filtrados = filtrados.filter(informe => 
      informe.titulo.toLowerCase().includes(filtroBusqueda.value.toLowerCase())
    )
  }

  if (filtroEstado.value) {
    filtrados = filtrados.filter(informe => informe.estado === filtroEstado.value)
  }

  if (filtroTipo.value) {
    filtrados = filtrados.filter(informe => informe.tipo === filtroTipo.value)
  }

  return filtrados
})

// Cargar informes
const cargarInformes = async () => {
  try {
    loading.value = true
    const informeStore = useInformeStore()
    informes.value = await informeStore.fetchInformesCliente()
  } catch (error) {
    console.error('Error al cargar informes:', error)
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

// Cancelar informe
const cancelarInforme = async (id) => {
  if (confirm('¿Estás seguro de que quieres cancelar este informe?')) {
    try {
      const informeStore = useInformeStore()
      await informeStore.cancelarInforme(id)
      
      // Recargar la lista de informes
      await cargarInformes()
      
      alert('Informe cancelado correctamente')
    } catch (error) {
      console.error('Error al cancelar informe:', error)
      alert('Error al cancelar el informe. Por favor, inténtalo de nuevo.')
    }
  }
}

// Ver detalles
const verDetalles = (id) => {
  // TODO: Implementar vista de detalles
  alert(`Ver detalles del informe ${id}...`)
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

// Obtener texto del tipo
const getTipoText = (tipo) => {
  const tipos = {
    'peritaje': 'Peritaje',
    'mantenimiento': 'Mantenimiento',
    'valoracion': 'Valoración',
    'personalizado': 'Personalizado'
  }
  return tipos[tipo] || tipo
}

// Obtener texto del progreso
const getProgresoText = (estado) => {
  const progresos = {
    'pendiente': '0%',
    'en_proceso': '50%',
    'completado': '100%',
    'cancelado': 'Cancelado'
  }
  return progresos[estado] || '0%'
}

// Cargar datos al montar
onMounted(() => {
  cargarInformes()
})
</script>
