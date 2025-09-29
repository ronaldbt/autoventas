<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <!-- Header de la página -->
    <div class="bg-gradient-to-r from-orange-900/20 to-orange-600/10 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">
            Autos Usados {{ marcaCapitalizada }} en Chile
          </h1>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto">
            Encuentra {{ totalVehiculos }} autos usados {{ marcaCapitalizada }} disponibles. 
            Precios competitivos, financiamiento y garantía incluida.
          </p>
        </div>
      </div>
    </div>

    <!-- Filtros y contenido -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar con filtros -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl p-6 text-slate-900 sticky top-6">
            <h3 class="text-lg font-bold mb-4">Filtrar por:</h3>
            
            <!-- Filtro por modelo -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Modelo</h4>
              <div class="space-y-2 max-h-48 overflow-y-auto">
                <label v-for="modelo in modelosDisponibles" :key="modelo.id" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="modelo.id"
                    v-model="filtrosSeleccionados.modelos"
                    class="rounded border-gray-300 text-orange-600"
                  >
                  <span class="ml-2 text-sm">{{ modelo.nombre }} ({{ modelo.count }})</span>
                </label>
              </div>
            </div>

            <!-- Filtro por precio -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Precio</h4>
              <div class="space-y-2">
                <label class="flex items-center">
                  <input type="radio" name="precio" value="0-10000000" v-model="filtrosSeleccionados.precio" class="text-orange-600">
                  <span class="ml-2 text-sm">Hasta $10.000.000</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="precio" value="10000000-20000000" v-model="filtrosSeleccionados.precio" class="text-orange-600">
                  <span class="ml-2 text-sm">$10.000.000 - $20.000.000</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="precio" value="20000000-9999999999" v-model="filtrosSeleccionados.precio" class="text-orange-600">
                  <span class="ml-2 text-sm">Más de $20.000.000</span>
                </label>
              </div>
            </div>

            <!-- Filtro por año -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Año</h4>
              <div class="grid grid-cols-2 gap-2">
                <select v-model="filtrosSeleccionados.añoDesde" class="rounded border-gray-300 text-sm">
                  <option value="">Desde</option>
                  <option v-for="año in añosDisponibles" :key="año" :value="año">{{ año }}</option>
                </select>
                <select v-model="filtrosSeleccionados.añoHasta" class="rounded border-gray-300 text-sm">
                  <option value="">Hasta</option>
                  <option v-for="año in añosDisponibles" :key="año" :value="año">{{ año }}</option>
                </select>
              </div>
            </div>

            <!-- Filtro por ciudad -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Ciudad</h4>
              <select v-model="filtrosSeleccionados.ciudad" class="w-full rounded border-gray-300 text-sm">
                <option value="">Todas las ciudades</option>
                <option v-for="ciudad in ciudadesDisponibles" :key="ciudad.id" :value="ciudad.id">
                  {{ ciudad.nombre }} ({{ ciudad.count }})
                </option>
              </select>
            </div>

            <button 
              @click="aplicarFiltros"
              class="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition"
            >
              Aplicar Filtros
            </button>
          </div>
        </div>

        <!-- Listado de vehículos -->
        <div class="lg:col-span-3">
          <!-- Header de resultados -->
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold">
              {{ vehiculosFiltrados.length }} resultados encontrados
            </h2>
            <select v-model="ordenamiento" class="bg-white text-slate-900 rounded border-gray-300">
              <option value="precio_asc">Precio: Menor a Mayor</option>
              <option value="precio_desc">Precio: Mayor a Menor</option>
              <option value="año_desc">Año: Más Nuevo</option>
              <option value="año_asc">Año: Más Antiguo</option>
              <option value="km_asc">Kilómetros: Menor a Mayor</option>
            </select>
          </div>

          <!-- Grid de vehículos -->
          <div v-if="cargando" class="text-center py-8">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p class="text-slate-300">Cargando vehículos...</p>
          </div>

          <div v-else-if="vehiculosFiltrados.length === 0" class="text-center py-12">
            <p class="text-slate-300 text-lg mb-4">No se encontraron vehículos con estos filtros</p>
            <button @click="limpiarFiltros" class="text-orange-500 hover:text-orange-600">
              Limpiar filtros
            </button>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <VehiculoCard 
              v-for="vehiculo in vehiculosPaginados" 
              :key="vehiculo.id" 
              :vehiculo="vehiculo"
            />
          </div>

          <!-- Paginación -->
          <div v-if="totalPaginas > 1" class="flex justify-center mt-8">
            <nav class="flex space-x-2">
              <button 
                v-for="pagina in totalPaginas" 
                :key="pagina"
                @click="paginaActual = pagina"
                :class="[
                  'px-3 py-2 rounded',
                  pagina === paginaActual 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-slate-900 hover:bg-orange-100'
                ]"
              >
                {{ pagina }}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Información SEO adicional -->
    <div class="bg-white text-slate-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold mb-4">¿Por qué elegir {{ marcaCapitalizada }}?</h2>
            <p class="text-slate-700 mb-4">
              {{ marcaCapitalizada }} es una de las marcas más confiables en el mercado chileno de autos usados. 
              Con una amplia gama de modelos disponibles, desde sedanes económicos hasta SUVs familiares.
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-2">
              <li>Amplia red de servicio técnico en Chile</li>
              <li>Excelente retención de valor</li>
              <li>Repuestos disponibles y accesibles</li>
              <li>Historial de confiabilidad comprobada</li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Financiamiento para tu {{ marcaCapitalizada }}</h2>
            <p class="text-slate-700 mb-4">
              En Autoventas360 facilitamos la compra de tu auto usado {{ marcaCapitalizada }} con opciones de financiamiento flexibles.
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-2">
              <li>Créditos desde 12 hasta 84 meses</li>
              <li>Tasas competitivas del mercado</li>
              <li>Aprobación en menos de 24 horas</li>
              <li>Sin penalización por prepago</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const marca = route.params.marca
const marcaCapitalizada = marca.charAt(0).toUpperCase() + marca.slice(1)

// Estados reactivos
const vehiculos = ref([])
const cargando = ref(true)
const totalVehiculos = ref(0)
const paginaActual = ref(1)
const vehiculosPorPagina = 12

// Filtros
const filtrosSeleccionados = ref({
  modelos: [],
  precio: '',
  añoDesde: '',
  añoHasta: '',
  ciudad: ''
})

const ordenamiento = ref('precio_asc')

// Datos para filtros
const modelosDisponibles = ref([])
const ciudadesDisponibles = ref([])
const añosDisponibles = computed(() => {
  const añoActual = new Date().getFullYear()
  const años = []
  for (let año = añoActual; año >= 1990; año--) {
    años.push(año)
  }
  return años
})

const { $api } = useNuxtApp()
const { generateCategoryMeta } = useSEO()

// Computadas
const vehiculosFiltrados = computed(() => {
  let filtrados = [...vehiculos.value]

  // Filtrar por modelos
  if (filtrosSeleccionados.value.modelos.length > 0) {
    filtrados = filtrados.filter(v => 
      filtrosSeleccionados.value.modelos.includes(v.modelo_id)
    )
  }

  // Filtrar por precio
  if (filtrosSeleccionados.value.precio) {
    const [min, max] = filtrosSeleccionados.value.precio.split('-').map(Number)
    filtrados = filtrados.filter(v => v.precio >= min && v.precio <= max)
  }

  // Filtrar por año
  if (filtrosSeleccionados.value.añoDesde) {
    filtrados = filtrados.filter(v => v.año >= filtrosSeleccionados.value.añoDesde)
  }
  if (filtrosSeleccionados.value.añoHasta) {
    filtrados = filtrados.filter(v => v.año <= filtrosSeleccionados.value.añoHasta)
  }

  // Filtrar por ciudad
  if (filtrosSeleccionados.value.ciudad) {
    filtrados = filtrados.filter(v => v.comuna_id === filtrosSeleccionados.value.ciudad)
  }

  // Ordenar
  switch (ordenamiento.value) {
    case 'precio_asc':
      filtrados.sort((a, b) => a.precio - b.precio)
      break
    case 'precio_desc':
      filtrados.sort((a, b) => b.precio - a.precio)
      break
    case 'año_desc':
      filtrados.sort((a, b) => b.año - a.año)
      break
    case 'año_asc':
      filtrados.sort((a, b) => a.año - b.año)
      break
    case 'km_asc':
      filtrados.sort((a, b) => a.kilometros - b.kilometros)
      break
  }

  return filtrados
})

const vehiculosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * vehiculosPorPagina
  const fin = inicio + vehiculosPorPagina
  return vehiculosFiltrados.value.slice(inicio, fin)
})

const totalPaginas = computed(() => {
  return Math.ceil(vehiculosFiltrados.value.length / vehiculosPorPagina)
})

// Métodos
const cargarVehiculos = async () => {
  try {
    cargando.value = true
    const res = await $api.get(`/vehiculos?marca=${marca}`)
    vehiculos.value = res.data.vehiculos || []
    totalVehiculos.value = res.data.total || vehiculos.value.length
    
    // Cargar datos para filtros
    cargarDatosFiltros()
  } catch (error) {
    console.error('Error cargando vehículos:', error)
  } finally {
    cargando.value = false
  }
}

const cargarDatosFiltros = () => {
  // Extraer modelos únicos
  const modelosMap = new Map()
  vehiculos.value.forEach(v => {
    if (v.modelo) {
      const key = v.modelo.id
      if (modelosMap.has(key)) {
        modelosMap.get(key).count++
      } else {
        modelosMap.set(key, { 
          id: v.modelo.id, 
          nombre: v.modelo.nombre, 
          count: 1 
        })
      }
    }
  })
  modelosDisponibles.value = Array.from(modelosMap.values())

  // Extraer ciudades únicas
  const ciudadesMap = new Map()
  vehiculos.value.forEach(v => {
    if (v.comuna) {
      const key = v.comuna.id
      if (ciudadesMap.has(key)) {
        ciudadesMap.get(key).count++
      } else {
        ciudadesMap.set(key, { 
          id: v.comuna.id, 
          nombre: v.comuna.nombre, 
          count: 1 
        })
      }
    }
  })
  ciudadesDisponibles.value = Array.from(ciudadesMap.values())
}

const aplicarFiltros = () => {
  paginaActual.value = 1
}

const limpiarFiltros = () => {
  filtrosSeleccionados.value = {
    modelos: [],
    precio: '',
    añoDesde: '',
    añoHasta: '',
    ciudad: ''
  }
  paginaActual.value = 1
}

// SEO dinámico
const configurarSEO = () => {
  const seoMeta = generateCategoryMeta('brand', marcaCapitalizada, totalVehiculos.value)
  useHead(seoMeta)
}

onMounted(async () => {
  await cargarVehiculos()
  configurarSEO()
})

watch(totalVehiculos, configurarSEO)
</script>