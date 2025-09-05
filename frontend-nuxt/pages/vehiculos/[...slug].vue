<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 🔍 Si es listado -->
    <div v-if="!esDetalle">
      <!-- Header con buscador principal -->
      <div class="bg-white shadow-sm border-b">
        <div class="max-w-7xl mx-auto px-4 py-4">
          <div class="flex items-center justify-between">
            <div class="flex-1 max-w-lg">
              <div class="relative">
                <input
                  v-model="busquedaPrincipal"
                  type="text"
                  placeholder="Renault Talisman Intense 2016"
                  class="w-full px-4 py-2 pl-10 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  @keyup.enter="buscarConFiltros"
                />
                <svg class="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <button 
                  @click="limpiarBusqueda"
                  v-if="busquedaPrincipal"
                  class="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
            <button class="ml-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium">
              Sell a car
            </button>
            <button class="ml-2 p-2 text-gray-600 hover:text-gray-800">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Layout principal con sidebar -->
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex gap-6">
          <!-- Sidebar con filtros -->
          <div class="hidden lg:block w-80 flex-shrink-0">
            <VehiculosSidebar 
              v-model="filtros"
              :total-resultados="vehiculos.length"
              @aplicar-filtros="buscarConFiltros"
            />
          </div>

          <!-- Contenido principal -->
          <div class="flex-1">
            <!-- Header de resultados -->
            <div class="bg-white rounded-lg shadow-sm p-4 mb-4">
              <div class="flex items-center justify-between">
                <div class="text-sm text-gray-600">
                  Found cars: <span class="font-bold text-gray-900">{{ vehiculos.length }}</span>
                </div>
                <div class="flex items-center space-x-4">
                  <select 
                    v-model="ordenamiento"
                    @change="aplicarOrdenamiento"
                    class="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="recent">Más recientes</option>
                    <option value="price_asc">Precio: menor a mayor</option>
                    <option value="price_desc">Precio: mayor a menor</option>
                    <option value="year_desc">Año: más nuevo</option>
                    <option value="year_asc">Año: más antiguo</option>
                    <option value="mileage_asc">Menor kilometraje</option>
                    <option value="mileage_desc">Mayor kilometraje</option>
                  </select>
                  
                  <div class="flex border border-gray-300 rounded-md">
                    <button 
                      @click="vistaGrid = true"
                      class="p-2 text-gray-500 hover:text-gray-700"
                      :class="{ 'bg-gray-100 text-gray-900': vistaGrid }"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                    </button>
                    <button 
                      @click="vistaGrid = false"
                      class="p-2 text-gray-500 hover:text-gray-700"
                      :class="{ 'bg-gray-100 text-gray-900': !vistaGrid }"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Mensaje si no hay resultados -->
            <div v-if="vehiculos.length === 0 && !cargando" class="text-center py-12">
              <svg class="mx-auto w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 class="text-lg font-medium text-gray-900 mb-2">No se encontraron resultados</h3>
              <p class="text-gray-500 mb-4">Prueba ajustando tus filtros de búsqueda</p>
              <button 
                @click="limpiarFiltros"
                class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Limpiar filtros
              </button>
            </div>

            <!-- Grid de vehículos -->
            <div v-else-if="vistaGrid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <VehiculoCard
                v-for="vehiculo in vehiculosPaginados"
                :key="vehiculo.id"
                :vehiculo="vehiculo"
                @click="navegarADetalle(vehiculo)"
              />
            </div>

            <!-- Vista de lista -->
            <div v-else class="space-y-4">
              <VehiculoListItem
                v-for="vehiculo in vehiculosPaginados"
                :key="vehiculo.id"
                :vehiculo="vehiculo"
                @click="navegarADetalle(vehiculo)"
              />
            </div>

            <!-- Paginación -->
            <div v-if="totalPaginas > 1" class="flex items-center justify-center space-x-2 mt-8">
              <button
                @click="cambiarPagina(paginaActual - 1)"
                :disabled="paginaActual <= 1"
                class="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <div class="flex space-x-1">
                <button
                  v-for="pagina in paginasVisibles"
                  :key="pagina"
                  @click="cambiarPagina(pagina)"
                  class="px-3 py-2 rounded-md border text-sm font-medium"
                  :class="pagina === paginaActual 
                    ? 'bg-red-500 border-red-500 text-white' 
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'"
                >
                  {{ pagina }}
                </button>
              </div>

              <button
                @click="cambiarPagina(paginaActual + 1)"
                :disabled="paginaActual >= totalPaginas"
                class="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 🧾 Si es detalle -->
    <div v-else-if="detalle">
      <div class="bg-white p-6 rounded shadow max-w-4xl mx-auto">
        <img
          :src="detalle.imagenes?.[0] || 'https://via.placeholder.com/800x500?text=Sin+imagen'"
          class="w-full h-64 object-cover rounded mb-4"
        />
        <h1 class="text-2xl font-bold">{{ detalle.titulo }}</h1>
        <p class="text-gray-600 text-sm">
          {{ detalle.marca?.nombre }} {{ detalle.modelo?.nombre }} - {{ detalle.anio }}
        </p>
        <p class="mt-2 text-lg font-semibold text-blue-700">
          ${{ Number(detalle.precio).toLocaleString() }}
        </p>
        <p class="mt-4">{{ detalle.descripcion }}</p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-6 text-sm text-gray-700">
          <p><strong>Color ext.:</strong> {{ detalle.colorExterior }}</p>
          <p><strong>Color int.:</strong> {{ detalle.colorInterior }}</p>
          <p><strong>Kilómetros:</strong> {{ detalle.kilometros }}</p>
          <p><strong>Transmisión:</strong> {{ detalle.transmision?.nombre }}</p>
          <p><strong>Combustible:</strong> {{ detalle.combustible?.nombre }}</p>
          <p><strong>Ubicación:</strong> {{ detalle.comuna?.nombre }}, {{ detalle.region?.nombre }}</p>
        </div>
      </div>
    </div>

    <!-- ⌛ Cargando -->
    <div v-else class="text-center py-10 text-gray-500">
      Cargando información...
    </div>
  </div>
</template>

  
<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import VehiculosSidebar from '~/components/VehiculosSidebar.vue'
import VehiculoCard from '~/components/VehiculoCard.vue'
import VehiculoListItem from '~/components/VehiculoListItem.vue'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug || []

const vehiculos = ref([])
const detalle = ref(null)
const cargando = ref(true)

// Nuevas variables para la UI
const busquedaPrincipal = ref('')
const vistaGrid = ref(true)
const ordenamiento = ref('recent')

// Variables de paginación
const paginaActual = ref(1)
const vehiculosPorPagina = 12

// Filtros reactivos conectados al sidebar
const filtros = ref({
  marcaId: '',
  modelo: '',
  version: '',
  anioMin: '',
  anioMax: '',
  precioMin: 21000,
  precioMax: 34000,
  kilometrosMin: 0,
  kilometrosMax: 300000,
  carroceriaId: '',
  transmisionId: '',
  combustibleId: '',
  regionId: '',
  condicion: '',
  colorExterior: '',
  colorInterior: '',
  estado: 'ACTIVO',
  primerDueno: false,
  posibleRemate: false,
  intercambio: false,
  intercambioAuto: false
})

// Detectar si es vista de detalle (último segmento es un ID numérico)
const esDetalle = computed(() => {
  const lastSegment = slug[slug.length - 1]
  return slug.length >= 6 && /^\d+$/.test(lastSegment)
})

// Computed properties para paginación
const totalPaginas = computed(() => {
  return Math.ceil(vehiculos.value.length / vehiculosPorPagina)
})

const vehiculosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * vehiculosPorPagina
  const fin = inicio + vehiculosPorPagina
  return vehiculos.value.slice(inicio, fin)
})

const paginasVisibles = computed(() => {
  const total = totalPaginas.value
  const actual = paginaActual.value
  const paginas = []
  
  // Mostrar máximo 5 páginas
  let inicio = Math.max(1, actual - 2)
  let fin = Math.min(total, inicio + 4)
  
  // Ajustar si estamos cerca del final
  if (fin - inicio < 4) {
    inicio = Math.max(1, fin - 4)
  }
  
  for (let i = inicio; i <= fin; i++) {
    paginas.push(i)
  }
  
  return paginas
})

const { $api } = useNuxtApp()

onMounted(async () => {
  // Inicializar filtros desde query params (si hay)
  filtros.value = {
    ...filtros.value,
    ...route.query
  }

  if (esDetalle.value) {
    const id = slug[slug.length - 1]
    const res = await $api.get(`/vehiculos/${id}`)
    detalle.value = res.data
    cargando.value = false
  } else {
    await buscarConFiltros()
  }
})

// Buscar autos según los filtros actuales
async function buscarConFiltros() {
  cargando.value = true
  try {
    const path = slug.length ? `/vehiculos/${slug.join('/')}` : '/vehiculos'
    const query = {}

    Object.entries(filtros.value).forEach(([key, value]) => {
      if (value !== '' && value !== false && value !== null && value !== undefined) {
        query[key] = value
      }
    })

    // Añadir búsqueda principal si existe
    if (busquedaPrincipal.value) {
      query.search = busquedaPrincipal.value
    }

    const res = await $api.get(path, { params: query })
    vehiculos.value = res.data
    
    // Aplicar ordenamiento después de obtener los datos
    aplicarOrdenamiento()
  } catch (error) {
    console.error('❌ Error buscando vehículos:', error)
    vehiculos.value = []
  } finally {
    cargando.value = false
  }
}


// Nuevas funciones
function limpiarBusqueda() {
  busquedaPrincipal.value = ''
  resetearPagina()
  buscarConFiltros()
}

function limpiarFiltros() {
  filtros.value = {
    marcaId: '',
    modelo: '',
    version: '',
    anioMin: '',
    anioMax: '',
    precioMin: 21000,
    precioMax: 34000,
    kilometrosMin: 0,
    kilometrosMax: 300000,
    carroceriaId: '',
    transmisionId: '',
    combustibleId: '',
    regionId: '',
    condicion: '',
    colorExterior: '',
    colorInterior: '',
    estado: 'ACTIVO',
    primerDueno: false,
    posibleRemate: false,
    intercambio: false,
    intercambioAuto: false
  }
  busquedaPrincipal.value = ''
  resetearPagina()
  buscarConFiltros()
}

function aplicarOrdenamiento() {
  // Ordenar los vehículos según la selección
  const vehiculosOrdenados = [...vehiculos.value]
  
  switch (ordenamiento.value) {
    case 'price_asc':
      vehiculosOrdenados.sort((a, b) => Number(a.precio) - Number(b.precio))
      break
    case 'price_desc':
      vehiculosOrdenados.sort((a, b) => Number(b.precio) - Number(a.precio))
      break
    case 'year_desc':
      vehiculosOrdenados.sort((a, b) => b.anio - a.anio)
      break
    case 'year_asc':
      vehiculosOrdenados.sort((a, b) => a.anio - b.anio)
      break
    case 'mileage_asc':
      vehiculosOrdenados.sort((a, b) => (a.kilometros || 0) - (b.kilometros || 0))
      break
    case 'mileage_desc':
      vehiculosOrdenados.sort((a, b) => (b.kilometros || 0) - (a.kilometros || 0))
      break
    case 'recent':
    default:
      vehiculosOrdenados.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      break
  }
  
  vehiculos.value = vehiculosOrdenados
}

function navegarADetalle(vehiculo) {
  const ruta = generarRutaDetalle(vehiculo)
  router.push(ruta)
}


// Función para cambiar de página
function cambiarPagina(nuevaPagina) {
  if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas.value) {
    paginaActual.value = nuevaPagina
    
    // Scroll hacia arriba al cambiar página
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Resetear página al aplicar nuevos filtros
function resetearPagina() {
  paginaActual.value = 1
}

// Escucha reactiva para volver a buscar si los filtros cambian
watch(() => route.query, () => {
  resetearPagina()
  buscarConFiltros()
})

// Generador de URL para el detalle del auto
function generarRutaDetalle(v) {
  function slugify(texto) {
    return (texto || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  return `/vehiculos/${slugify(v.region?.nombre)}/${slugify(v.comuna?.nombre)}/${slugify(v.marca?.nombre)}/${slugify(v.modelo?.nombre)}/${v.anio}/${v.id}`
}
</script>
