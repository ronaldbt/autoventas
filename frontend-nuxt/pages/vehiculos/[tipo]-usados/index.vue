<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <!-- Header de la página -->
    <div class="bg-gradient-to-r from-orange-900/20 to-orange-600/10 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">
            {{ tipoCapitalizado }} Usados en Chile
          </h1>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto">
            Encuentra {{ totalVehiculos }} {{ tipoCapitalizado.toLowerCase() }} usados en Chile. 
            La mayor variedad de marcas, modelos y precios en una sola plataforma.
          </p>
          
          <!-- Estadísticas del tipo de vehículo -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div class="text-2xl font-bold text-orange-400">{{ totalVehiculos }}</div>
              <div class="text-sm text-slate-300">{{ tipoCapitalizado }}</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div class="text-2xl font-bold text-orange-400">{{ marcasDisponibles.length }}</div>
              <div class="text-sm text-slate-300">Marcas</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div class="text-2xl font-bold text-orange-400">${{ precioPromedio.toLocaleString() }}</div>
              <div class="text-sm text-slate-300">Precio promedio</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div class="text-2xl font-bold text-orange-400">{{ regionesDisponibles.length }}</div>
              <div class="text-sm text-slate-300">Regiones</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navegación por categorías -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-xl p-6 text-slate-900 mb-8">
        <h2 class="text-xl font-bold mb-4">Explorar por Categorías</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <NuxtLink v-for="categoria in categoriasRelacionadas" :key="categoria.slug"
                    :to="`/${categoria.slug}-usados`"
                    :class="[
                      'p-3 rounded-lg text-center hover:bg-orange-50 transition',
                      categoria.slug === route.params.tipo ? 'bg-orange-100 text-orange-700 font-semibold' : 'bg-gray-50'
                    ]">
            <div class="text-2xl mb-2">{{ categoria.icon }}</div>
            <div class="text-sm">{{ categoria.nombre }}</div>
            <div class="text-xs text-slate-500">{{ categoria.count }} disponibles</div>
          </NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar con filtros -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl p-6 text-slate-900 sticky top-6">
            <h3 class="text-lg font-bold mb-4">Filtrar {{ tipoCapitalizado }}</h3>
            
            <!-- Filtro por marca -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Marca</h4>
              <div class="space-y-2 max-h-48 overflow-y-auto">
                <label v-for="marca in marcasDisponibles" :key="marca.id" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="marca.id"
                    v-model="filtrosSeleccionados.marcas"
                    class="rounded border-gray-300 text-orange-600"
                  >
                  <span class="ml-2 text-sm">{{ marca.nombre }} ({{ marca.count }})</span>
                </label>
              </div>
            </div>

            <!-- Filtro por precio -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Rango de Precio</h4>
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
                  <input type="radio" name="precio" value="20000000-30000000" v-model="filtrosSeleccionados.precio" class="text-orange-600">
                  <span class="ml-2 text-sm">$20.000.000 - $30.000.000</span>
                </label>
                <label class="flex items-center">
                  <input type="radio" name="precio" value="30000000-9999999999" v-model="filtrosSeleccionados.precio" class="text-orange-600">
                  <span class="ml-2 text-sm">Más de $30.000.000</span>
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

            <!-- Filtro por región -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Región</h4>
              <select v-model="filtrosSeleccionados.region" class="w-full rounded border-gray-300 text-sm">
                <option value="">Todas las regiones</option>
                <option v-for="region in regionesDisponibles" :key="region.id" :value="region.id">
                  {{ region.nombre }} ({{ region.count }})
                </option>
              </select>
            </div>

            <!-- Filtro por combustible -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Combustible</h4>
              <div class="space-y-2">
                <label v-for="combustible in combustiblesDisponibles" :key="combustible.id" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="combustible.id"
                    v-model="filtrosSeleccionados.combustibles"
                    class="rounded border-gray-300 text-orange-600"
                  >
                  <span class="ml-2 text-sm">{{ combustible.nombre }} ({{ combustible.count }})</span>
                </label>
              </div>
            </div>

            <button 
              @click="aplicarFiltros"
              class="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition mb-3"
            >
              Aplicar Filtros
            </button>
            
            <button 
              @click="limpiarFiltros"
              class="w-full border border-orange-600 text-orange-600 py-2 px-4 rounded-lg hover:bg-orange-50 transition"
            >
              Limpiar Filtros
            </button>
          </div>
        </div>

        <!-- Listado de vehículos -->
        <div class="lg:col-span-3">
          <!-- Header de resultados -->
          <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 class="text-xl font-bold">
              {{ vehiculosFiltrados.length }} {{ tipoCapitalizado.toLowerCase() }} encontrados
            </h2>
            <div class="flex gap-4 items-center">
              <select v-model="ordenamiento" class="bg-white text-slate-900 rounded border-gray-300">
                <option value="precio_asc">Precio: Menor a Mayor</option>
                <option value="precio_desc">Precio: Mayor a Menor</option>
                <option value="año_desc">Año: Más Nuevo</option>
                <option value="año_asc">Año: Más Antiguo</option>
                <option value="km_asc">Kilómetros: Menor a Mayor</option>
                <option value="relevancia">Más Relevantes</option>
              </select>
              <select v-model="vehiculosPorPagina" class="bg-white text-slate-900 rounded border-gray-300">
                <option value="12">12 por página</option>
                <option value="24">24 por página</option>
                <option value="48">48 por página</option>
              </select>
            </div>
          </div>

          <!-- Grid de vehículos -->
          <div v-if="cargando" class="text-center py-8">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p class="text-slate-300">Cargando {{ tipoCapitalizado.toLowerCase() }}...</p>
          </div>

          <div v-else-if="vehiculosFiltrados.length === 0" class="text-center py-12">
            <p class="text-slate-300 text-lg mb-4">No se encontraron {{ tipoCapitalizado.toLowerCase() }} con estos filtros</p>
            <button @click="limpiarFiltros" class="text-orange-500 hover:text-orange-600">
              Limpiar filtros y ver todos
            </button>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <VehiculoCard 
              v-for="vehiculo in vehiculosPaginados" 
              :key="vehiculo.id" 
              :vehiculo="vehiculo"
              :mostrar-tipo="false"
            />
          </div>

          <!-- Paginación -->
          <div v-if="totalPaginas > 1" class="flex justify-center mt-8">
            <nav class="flex space-x-2">
              <button 
                v-if="paginaActual > 1"
                @click="paginaActual = paginaActual - 1"
                class="px-3 py-2 rounded bg-white text-slate-900 hover:bg-orange-100 transition"
              >
                ← Anterior
              </button>
              
              <button 
                v-for="pagina in paginasVisibles" 
                :key="pagina"
                @click="paginaActual = pagina"
                :class="[
                  'px-3 py-2 rounded transition',
                  pagina === paginaActual 
                    ? 'bg-orange-600 text-white' 
                    : 'bg-white text-slate-900 hover:bg-orange-100'
                ]"
              >
                {{ pagina }}
              </button>
              
              <button 
                v-if="paginaActual < totalPaginas"
                @click="paginaActual = paginaActual + 1"
                class="px-3 py-2 rounded bg-white text-slate-900 hover:bg-orange-100 transition"
              >
                Siguiente →
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <!-- Información SEO sobre el tipo de vehículo -->
    <div class="bg-white text-slate-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold mb-4">¿Por qué elegir {{ tipoCapitalizado }} usados?</h2>
            <p class="text-slate-700 mb-4">
              Los {{ tipoCapitalizado.toLowerCase() }} usados ofrecen una excelente relación precio-valor, especialmente en el mercado chileno. 
              Son ideales para {{ getDescripcionUso(route.params.tipo) }}.
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-2">
              <li>{{ getBeneficios(route.params.tipo)[0] }}</li>
              <li>{{ getBeneficios(route.params.tipo)[1] }}</li>
              <li>{{ getBeneficios(route.params.tipo)[2] }}</li>
              <li>Amplia disponibilidad en el mercado chileno</li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Marcas más populares de {{ tipoCapitalizado }}</h2>
            <p class="text-slate-700 mb-4">
              En Chile, las marcas más buscadas de {{ tipoCapitalizado.toLowerCase() }} usados incluyen opciones confiables 
              con excelente soporte técnico y disponibilidad de repuestos.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="marca in marcasPopulares" :key="marca.nombre" 
                   class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span class="text-xs font-bold text-orange-600">{{ marca.nombre.charAt(0) }}</span>
                </div>
                <div>
                  <div class="font-semibold text-sm">{{ marca.nombre }}</div>
                  <div class="text-xs text-slate-500">{{ marca.count }} disponibles</div>
                </div>
              </div>
            </div>
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
const tipo = route.params.tipo
const tipoCapitalizado = computed(() => tipo.charAt(0).toUpperCase() + tipo.slice(1))

// Estados reactivos
const vehiculos = ref([])
const cargando = ref(true)
const totalVehiculos = ref(0)
const paginaActual = ref(1)
const vehiculosPorPagina = ref(12)

// Filtros
const filtrosSeleccionados = ref({
  marcas: [],
  precio: '',
  añoDesde: '',
  añoHasta: '',
  region: '',
  combustibles: []
})

const ordenamiento = ref('relevancia')

// Datos para filtros
const marcasDisponibles = ref([])
const regionesDisponibles = ref([])
const combustiblesDisponibles = ref([])
const añosDisponibles = computed(() => {
  const añoActual = new Date().getFullYear()
  const años = []
  for (let año = añoActual; año >= 1990; año--) {
    años.push(año)
  }
  return años
})

// Categorías relacionadas
const categoriasRelacionadas = ref([
  { slug: 'suvs', nombre: 'SUVs', icon: '🚙', count: 0 },
  { slug: 'sedanes', nombre: 'Sedanes', icon: '🚗', count: 0 },
  { slug: 'camionetas', nombre: 'Camionetas', icon: '🛻', count: 0 },
  { slug: 'hatchback', nombre: 'Hatchback', icon: '🚘', count: 0 },
  { slug: 'station-wagon', nombre: 'Station Wagon', icon: '🚐', count: 0 },
  { slug: 'coupe', nombre: 'Coupé', icon: '🏎️', count: 0 }
])

const { $api } = useNuxtApp()
const { generateCategoryMeta } = useSEO()

// Computadas
const vehiculosFiltrados = computed(() => {
  let filtrados = [...vehiculos.value]

  // Filtrar por marcas
  if (filtrosSeleccionados.value.marcas.length > 0) {
    filtrados = filtrados.filter(v => 
      filtrosSeleccionados.value.marcas.includes(v.marca_id)
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

  // Filtrar por región
  if (filtrosSeleccionados.value.region) {
    filtrados = filtrados.filter(v => v.region_id === filtrosSeleccionados.value.region)
  }

  // Filtrar por combustibles
  if (filtrosSeleccionados.value.combustibles.length > 0) {
    filtrados = filtrados.filter(v => 
      filtrosSeleccionados.value.combustibles.includes(v.combustible_id)
    )
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
    case 'relevancia':
      // Ordenar por relevancia (precio vs año vs popularidad)
      filtrados.sort((a, b) => {
        const scoreA = (a.año || 0) * 0.3 + (50000000 - (a.precio || 0)) * 0.0001 + (100000 - (a.kilometros || 0)) * 0.00001
        const scoreB = (b.año || 0) * 0.3 + (50000000 - (b.precio || 0)) * 0.0001 + (100000 - (b.kilometros || 0)) * 0.00001
        return scoreB - scoreA
      })
      break
  }

  return filtrados
})

const vehiculosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * vehiculosPorPagina.value
  const fin = inicio + vehiculosPorPagina.value
  return vehiculosFiltrados.value.slice(inicio, fin)
})

const totalPaginas = computed(() => {
  return Math.ceil(vehiculosFiltrados.value.length / vehiculosPorPagina.value)
})

const paginasVisibles = computed(() => {
  const total = totalPaginas.value
  const actual = paginaActual.value
  const rango = 2

  let inicio = Math.max(1, actual - rango)
  let fin = Math.min(total, actual + rango)

  if (fin - inicio < 4 && total > 4) {
    if (inicio === 1) {
      fin = Math.min(total, inicio + 4)
    } else if (fin === total) {
      inicio = Math.max(1, fin - 4)
    }
  }

  const paginas = []
  for (let i = inicio; i <= fin; i++) {
    paginas.push(i)
  }
  return paginas
})

const precioPromedio = computed(() => {
  if (vehiculos.value.length === 0) return 0
  const suma = vehiculos.value.reduce((acc, v) => acc + (v.precio || 0), 0)
  return Math.round(suma / vehiculos.value.length)
})

const marcasPopulares = computed(() => {
  return marcasDisponibles.value
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
})

// Métodos
const cargarVehiculos = async () => {
  try {
    cargando.value = true
    const res = await $api.get(`/vehiculos?tipo=${tipo}`)
    vehiculos.value = res.data.vehiculos || []
    totalVehiculos.value = res.data.total || vehiculos.value.length
    
    // Cargar datos para filtros
    cargarDatosFiltros()
    cargarConteosCategorias()
  } catch (error) {
    console.error('Error cargando vehículos:', error)
  } finally {
    cargando.value = false
  }
}

const cargarDatosFiltros = () => {
  // Extraer marcas únicas
  const marcasMap = new Map()
  vehiculos.value.forEach(v => {
    if (v.marca) {
      const key = v.marca.id
      if (marcasMap.has(key)) {
        marcasMap.get(key).count++
      } else {
        marcasMap.set(key, { 
          id: v.marca.id, 
          nombre: v.marca.nombre, 
          count: 1 
        })
      }
    }
  })
  marcasDisponibles.value = Array.from(marcasMap.values())

  // Extraer regiones únicas
  const regionesMap = new Map()
  vehiculos.value.forEach(v => {
    if (v.region) {
      const key = v.region.id
      if (regionesMap.has(key)) {
        regionesMap.get(key).count++
      } else {
        regionesMap.set(key, { 
          id: v.region.id, 
          nombre: v.region.nombre, 
          count: 1 
        })
      }
    }
  })
  regionesDisponibles.value = Array.from(regionesMap.values())

  // Extraer combustibles únicos
  const combustiblesMap = new Map()
  vehiculos.value.forEach(v => {
    if (v.combustible) {
      const key = v.combustible.id
      if (combustiblesMap.has(key)) {
        combustiblesMap.get(key).count++
      } else {
        combustiblesMap.set(key, { 
          id: v.combustible.id, 
          nombre: v.combustible.nombre, 
          count: 1 
        })
      }
    }
  })
  combustiblesDisponibles.value = Array.from(combustiblesMap.values())
}

const cargarConteosCategorias = async () => {
  try {
    // Simular conteos de categorías (en una implementación real, esto vendría de la API)
    const conteos = {
      'suvs': Math.floor(Math.random() * 500) + 200,
      'sedanes': Math.floor(Math.random() * 400) + 150,
      'camionetas': Math.floor(Math.random() * 300) + 100,
      'hatchback': Math.floor(Math.random() * 250) + 80,
      'station-wagon': Math.floor(Math.random() * 150) + 50,
      'coupe': Math.floor(Math.random() * 100) + 30
    }

    categoriasRelacionadas.value.forEach(categoria => {
      categoria.count = conteos[categoria.slug] || 0
    })
  } catch (error) {
    console.error('Error cargando conteos de categorías:', error)
  }
}

const aplicarFiltros = () => {
  paginaActual.value = 1
}

const limpiarFiltros = () => {
  filtrosSeleccionados.value = {
    marcas: [],
    precio: '',
    añoDesde: '',
    añoHasta: '',
    region: '',
    combustibles: []
  }
  paginaActual.value = 1
}

// Funciones de utilidad para contenido SEO
const getDescripcionUso = (tipo) => {
  const descripciones = {
    'suvs': 'familias que buscan espacio, seguridad y versatilidad para viajes largos y actividades outdoor',
    'sedanes': 'personas que priorizan la comodidad, elegancia y eficiencia de combustible en la ciudad',
    'camionetas': 'trabajadores y empresas que necesitan capacidad de carga y tracción en diferentes terrenos',
    'hatchback': 'conductores urbanos que valoran la agilidad, facilidad de estacionamiento y economía',
    'station-wagon': 'familias que requieren amplio espacio de carga sin renunciar al confort de un auto',
    'coupe': 'entusiastas que buscan deportividad, estilo y experiencia de conducción única'
  }
  return descripciones[tipo] || 'diferentes necesidades de movilidad'
}

const getBeneficios = (tipo) => {
  const beneficios = {
    'suvs': [
      'Mayor altura de manejo y mejor visibilidad',
      'Amplio espacio interior y maletero',
      'Capacidad para terrenos difíciles'
    ],
    'sedanes': [
      'Excelente eficiencia de combustible',
      'Manejo suave y confortable',
      'Maletero independiente y seguro'
    ],
    'camionetas': [
      'Alta capacidad de carga útil',
      'Tracción 4x4 disponible',
      'Durabilidad y resistencia comprobada'
    ],
    'hatchback': [
      'Fácil estacionamiento en espacios reducidos',
      'Menor costo de mantención',
      'Versatilidad del espacio interior'
    ],
    'station-wagon': [
      'Máximo espacio de carga familiar',
      'Estabilidad y seguridad en carretera',
      'Practicidad para viajes largos'
    ],
    'coupe': [
      'Diseño deportivo y atractivo',
      'Experiencia de conducción dinámica',
      'Exclusividad y estilo personal'
    ]
  }
  return beneficios[tipo] || ['Versatilidad comprobada', 'Buena relación precio-valor', 'Confiabilidad en el tiempo']
}

// SEO dinámico
const configurarSEO = () => {
  const seoMeta = generateCategoryMeta('type', tipoCapitalizado.value, totalVehiculos.value)
  useHead(seoMeta)
}

onMounted(async () => {
  await cargarVehiculos()
  configurarSEO()
})

watch(totalVehiculos, configurarSEO)
watch(ordenamiento, () => { paginaActual.value = 1 })
watch(vehiculosPorPagina, () => { paginaActual.value = 1 })
</script>