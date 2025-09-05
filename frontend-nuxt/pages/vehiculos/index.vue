<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Header con buscador principal -->
    <div class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex-1 max-w-lg">
            <div class="relative">
              <input
                v-model="busquedaPrincipal"
                type="text"
                placeholder="Busca por marca, modelo o año..."
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
            Vender Auto
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
            :total-resultados="vehiculosFiltered.length"
            @aplicar-filtros="buscarConFiltros"
          />
        </div>

        <!-- Contenido principal -->
        <div class="flex-1">
          <!-- Header de resultados -->
          <div class="bg-white rounded-lg shadow-sm p-4 mb-4">
            <div class="flex items-center justify-between">
              <div class="text-sm text-gray-600">
                Vehículos encontrados: <span class="font-bold text-gray-900">{{ vehiculosFiltered.length }}</span>
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
          <div v-if="vehiculosFiltered.length === 0 && !cargando" class="text-center py-12">
            <svg class="mx-auto w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 class="text-lg font-medium text-gray-900 mb-2">No se encontraron vehículos</h3>
            <p class="text-gray-500 mb-4">Prueba ajustando tus filtros de búsqueda</p>
            <button 
              @click="limpiarFiltros"
              class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Limpiar filtros
            </button>
          </div>

          <!-- Loading -->
          <div v-else-if="cargando" class="text-center py-12">
            <div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm text-gray-500">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Cargando vehículos...
            </div>
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import VehiculosSidebar from '~/components/VehiculosSidebar.vue'
import VehiculoCard from '~/components/VehiculoCard.vue'
import VehiculoListItem from '~/components/VehiculoListItem.vue'

const router = useRouter()
const vehiculos = ref([])
const cargando = ref(true)

// Variables para la UI
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

// Computed para filtrar vehículos
const vehiculosFiltered = computed(() => {
  let resultado = [...vehiculos.value]
  
  // Filtrar por búsqueda principal
  if (busquedaPrincipal.value && busquedaPrincipal.value.trim()) {
    const busqueda = busquedaPrincipal.value.toLowerCase().trim()
    resultado = resultado.filter(v => 
      v.titulo?.toLowerCase().includes(busqueda) ||
      v.marca?.nombre?.toLowerCase().includes(busqueda) ||
      v.modelo?.nombre?.toLowerCase().includes(busqueda) ||
      v.version?.toLowerCase().includes(busqueda) ||
      v.anio?.toString().includes(busqueda)
    )
  }
  
  // Aplicar filtros del sidebar solo si tienen valores
  resultado = resultado.filter(v => {
    // Filtro por marca
    if (filtros.value.marcaId && filtros.value.marcaId !== '' && v.marcaId != filtros.value.marcaId) return false
    
    // Filtro por modelo
    if (filtros.value.modelo && filtros.value.modelo.trim() !== '' && !v.modelo?.nombre?.toLowerCase().includes(filtros.value.modelo.toLowerCase())) return false
    
    // Filtro por versión
    if (filtros.value.version && filtros.value.version.trim() !== '' && !v.version?.toLowerCase().includes(filtros.value.version.toLowerCase())) return false
    
    // Filtro por año
    if (filtros.value.anioMin && filtros.value.anioMin !== '' && v.anio < filtros.value.anioMin) return false
    if (filtros.value.anioMax && filtros.value.anioMax !== '' && v.anio > filtros.value.anioMax) return false
    
    // Filtro por precio (solo aplicar si son diferentes a los valores por defecto)
    if (filtros.value.precioMin && filtros.value.precioMin > 21000 && Number(v.precio) < filtros.value.precioMin) return false
    if (filtros.value.precioMax && filtros.value.precioMax < 34000 && Number(v.precio) > filtros.value.precioMax) return false
    
    // Filtro por kilometraje (solo aplicar si son diferentes a los valores por defecto)
    if (filtros.value.kilometrosMin && filtros.value.kilometrosMin > 0 && (v.kilometros || 0) < filtros.value.kilometrosMin) return false
    if (filtros.value.kilometrosMax && filtros.value.kilometrosMax < 300000 && (v.kilometros || 0) > filtros.value.kilometrosMax) return false
    
    // Filtro por carrocería
    if (filtros.value.carroceriaId && filtros.value.carroceriaId !== '' && v.carroceriaId != filtros.value.carroceriaId) return false
    
    // Filtro por transmisión
    if (filtros.value.transmisionId && filtros.value.transmisionId !== '' && v.transmisionId != filtros.value.transmisionId) return false
    
    // Filtro por combustible
    if (filtros.value.combustibleId && filtros.value.combustibleId !== '' && v.combustibleId != filtros.value.combustibleId) return false
    
    // Filtro por región
    if (filtros.value.regionId && filtros.value.regionId !== '' && v.regionId != filtros.value.regionId) return false
    
    // Filtro por condición
    if (filtros.value.condicion && filtros.value.condicion !== '' && v.condicion !== filtros.value.condicion) return false
    
    // Filtro por color exterior
    if (filtros.value.colorExterior && filtros.value.colorExterior !== '' && v.colorExterior?.toLowerCase() !== filtros.value.colorExterior.toLowerCase()) return false
    
    // Filtro por color interior
    if (filtros.value.colorInterior && filtros.value.colorInterior !== '' && v.colorInterior?.toLowerCase() !== filtros.value.colorInterior.toLowerCase()) return false
    
    // Filtro por estado (solo filtrar si es diferente al valor por defecto 'ACTIVO')
    if (filtros.value.estado && filtros.value.estado !== 'ACTIVO' && v.estado !== filtros.value.estado) return false
    
    // Filtro por primer dueño (solo aplicar si está marcado)
    if (filtros.value.primerDueno && !v.primerDueno) return false
    
    return true
  })
  
  return resultado
})

// Computed properties para paginación
const totalPaginas = computed(() => {
  return Math.ceil(vehiculosFiltered.value.length / vehiculosPorPagina)
})

const vehiculosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * vehiculosPorPagina
  const fin = inicio + vehiculosPorPagina
  return vehiculosFiltered.value.slice(inicio, fin)
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

// Cargar vehículos
onMounted(async () => {
  await cargarVehiculos()
})

async function cargarVehiculos() {
  cargando.value = true
  try {
    const res = await $api.get('/vehiculos')
    vehiculos.value = res.data
    aplicarOrdenamiento()
  } catch (err) {
    console.error('❌ Error cargando vehículos:', err)
  } finally {
    cargando.value = false
  }
}

function buscarConFiltros() {
  resetearPagina()
  aplicarOrdenamiento()
}

function limpiarBusqueda() {
  busquedaPrincipal.value = ''
  resetearPagina()
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
}

function aplicarOrdenamiento() {
  // El ordenamiento se aplica automáticamente en el computed vehiculosFiltered
  // Este método existe para mantener consistencia con el otro archivo
}

function navegarADetalle(vehiculo) {
  const ruta = generarRutaDetalle(vehiculo)
  router.push(ruta)
}

function cambiarPagina(nuevaPagina) {
  if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas.value) {
    paginaActual.value = nuevaPagina
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function resetearPagina() {
  paginaActual.value = 1
}

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