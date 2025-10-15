<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <!-- Header de la página -->
    <div class="bg-gradient-to-r from-orange-900/20 to-orange-600/10 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">
            Autos Usados {{ getTituloRango(route.params.rango) }} en Chile
          </h1>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto">
            Descubre {{ totalVehiculos }} autos usados {{ getDescripcionRango(route.params.rango) }}. 
            La mayor variedad de marcas y modelos en tu rango de presupuesto.
          </p>
          
          <!-- Información del rango de precios -->
          <div class="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <div class="text-3xl font-bold text-orange-400">{{ getRangoFormateado(route.params.rango) }}</div>
            <div class="text-sm text-slate-300">Rango de precios</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navegación entre rangos de precio -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="bg-white rounded-xl p-6 text-slate-900 mb-8">
        <h2 class="text-xl font-bold mb-4">Explorar Otros Rangos de Precio</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink v-for="rango in rangosDisponibles" :key="rango.slug"
                    :to="`/autos-${rango.slug}`"
                    :class="[
                      'p-4 rounded-lg text-center transition',
                      rango.slug === route.params.rango 
                        ? 'bg-orange-100 border-2 border-orange-500 text-orange-700' 
                        : 'bg-slate-50 hover:bg-orange-50 border-2 border-transparent hover:border-orange-200'
                    ]">
            <div class="text-2xl font-bold mb-2" :class="rango.slug === route.params.rango ? 'text-orange-600' : 'text-slate-700'">
              {{ rango.count }}
            </div>
            <h3 class="font-semibold text-sm mb-1">{{ rango.nombre }}</h3>
            <p class="text-xs text-slate-500">{{ rango.descripcion }}</p>
            <div class="mt-2 text-xs" :class="rango.slug === route.params.rango ? 'text-orange-600' : 'text-slate-600'">
              Desde ${{ rango.precioMinimo.toLocaleString() }}
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar con filtros -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-xl p-6 text-slate-900 sticky top-6">
            <h3 class="text-lg font-bold mb-4">Filtrar en {{ getTituloRango(route.params.rango) }}</h3>
            
            <!-- Rango de precio específico -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Precio Específico</h4>
              <div class="space-y-3">
                <div>
                  <label class="block text-sm font-medium mb-1">Precio mínimo</label>
                  <input 
                    type="number" 
                    v-model="filtros.precioMin"
                    :placeholder="rangoInfo.min.toLocaleString()"
                    class="w-full rounded border-gray-300 text-sm"
                  >
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Precio máximo</label>
                  <input 
                    type="number" 
                    v-model="filtros.precioMax"
                    :placeholder="rangoInfo.max === Infinity ? 'Sin límite' : rangoInfo.max.toLocaleString()"
                    class="w-full rounded border-gray-300 text-sm"
                  >
                </div>
              </div>
            </div>

            <!-- Filtro por marca -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Marca</h4>
              <div class="space-y-2 max-h-48 overflow-y-auto">
                <label v-for="marca in marcasDisponibles" :key="marca.id" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="marca.id"
                    v-model="filtros.marcas"
                    class="rounded border-gray-300 text-orange-600"
                  >
                  <span class="ml-2 text-sm">{{ marca.nombre }} ({{ marca.count }})</span>
                </label>
              </div>
            </div>

            <!-- Filtro por tipo -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Tipo de Vehículo</h4>
              <div class="space-y-2">
                <label v-for="tipo in tiposDisponibles" :key="tipo.id" class="flex items-center">
                  <input 
                    type="checkbox" 
                    :value="tipo.id"
                    v-model="filtros.tipos"
                    class="rounded border-gray-300 text-orange-600"
                  >
                  <span class="ml-2 text-sm">{{ tipo.nombre }} ({{ tipo.count }})</span>
                </label>
              </div>
            </div>

            <!-- Filtro por año -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Año</h4>
              <div class="grid grid-cols-2 gap-2">
                <select v-model="filtros.añoDesde" class="rounded border-gray-300 text-sm">
                  <option value="">Desde</option>
                  <option v-for="año in añosDisponibles" :key="año" :value="año">{{ año }}</option>
                </select>
                <select v-model="filtros.añoHasta" class="rounded border-gray-300 text-sm">
                  <option value="">Hasta</option>
                  <option v-for="año in añosDisponibles" :key="año" :value="año">{{ año }}</option>
                </select>
              </div>
            </div>

            <!-- Filtro por región -->
            <div class="mb-6">
              <h4 class="font-semibold mb-3">Región</h4>
              <select v-model="filtros.region" class="w-full rounded border-gray-300 text-sm">
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
                    v-model="filtros.combustibles"
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
          <!-- Estadísticas del rango -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div class="bg-white rounded-lg p-4 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ vehiculosFiltrados.length }}</div>
              <div class="text-sm text-slate-600">Vehículos disponibles</div>
            </div>
            <div class="bg-white rounded-lg p-4 text-center">
              <div class="text-2xl font-bold text-orange-600">${{ promedioRango.toLocaleString() }}</div>
              <div class="text-sm text-slate-600">Precio promedio</div>
            </div>
            <div class="bg-white rounded-lg p-4 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ marcasDisponibles.length }}</div>
              <div class="text-sm text-slate-600">Marcas diferentes</div>
            </div>
            <div class="bg-white rounded-lg p-4 text-center">
              <div class="text-2xl font-bold text-orange-600">{{ añoPromedio }}</div>
              <div class="text-sm text-slate-600">Año promedio</div>
            </div>
          </div>

          <!-- Header de resultados -->
          <div class="flex justify-between items-center mb-6 flex-wrap gap-4">
            <h2 class="text-xl font-bold">
              {{ vehiculosFiltrados.length }} vehículos {{ getTituloRango(route.params.rango).toLowerCase() }}
            </h2>
            <div class="flex gap-4 items-center">
              <select v-model="ordenamiento" class="bg-white text-slate-900 rounded border-gray-300">
                <option value="precio_asc">Precio: Menor a Mayor</option>
                <option value="precio_desc">Precio: Mayor a Menor</option>
                <option value="año_desc">Año: Más Nuevo</option>
                <option value="km_asc">Menor Kilometraje</option>
                <option value="mejor_valor">Mejor Valor</option>
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
            <p class="text-slate-300">Cargando vehículos {{ getTituloRango(route.params.rango).toLowerCase() }}...</p>
          </div>

          <div v-else-if="vehiculosFiltrados.length === 0" class="text-center py-12">
            <h3 class="text-xl font-bold mb-4">No hay vehículos con estos filtros</h3>
            <p class="text-slate-300 text-lg mb-6">Prueba ajustando los filtros o explorando otros rangos de precio</p>
            <div class="flex justify-center gap-4">
              <button @click="limpiarFiltros" class="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                Limpiar Filtros
              </button>
              <NuxtLink to="/vehiculos" class="border border-orange-600 text-orange-600 px-6 py-2 rounded-lg hover:bg-orange-50 transition">
                Ver Todos los Vehículos
              </NuxtLink>
            </div>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <div v-for="vehiculo in vehiculosPaginados" :key="vehiculo.id" 
                 class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div class="relative">
                <img :src="vehiculo.imagenes?.[0] || '/images/default-car.jpg'" 
                     :alt="`${vehiculo.marca?.nombre} ${vehiculo.modelo?.nombre} ${getTituloRango(route.params.rango)}`"
                     class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                <div class="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ${{ Number(vehiculo.precio).toLocaleString() }}
                </div>
                <div class="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  {{ getEtiquetaValor(vehiculo) }}
                </div>
              </div>
              
              <div class="p-4">
                <h3 class="font-bold text-slate-900 mb-2 text-lg">
                  {{ vehiculo.marca?.nombre }} {{ vehiculo.modelo?.nombre }} {{ vehiculo.año }}
                </h3>
                
                <div class="text-sm text-slate-600 space-y-1 mb-4">
                  <div class="flex justify-between">
                    <span>Precio:</span>
                    <span class="font-semibold text-orange-600">${{ Number(vehiculo.precio).toLocaleString() }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Kilómetros:</span>
                    <span>{{ Number(vehiculo.kilometros || 0).toLocaleString() }} km</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Combustible:</span>
                    <span>{{ vehiculo.combustible?.nombre }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Ubicación:</span>
                    <span>{{ vehiculo.comuna?.nombre }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Valor/Precio:</span>
                    <span class="text-green-600 font-medium">{{ calcularScoreValor(vehiculo) }}/10</span>
                  </div>
                </div>
                
                <div class="flex gap-2">
                  <NuxtLink :to="`/vehiculos/${vehiculo.id}`" 
                            class="flex-1 bg-orange-600 text-white text-center py-2 rounded hover:bg-orange-700 transition">
                    Ver Detalles
                  </NuxtLink>
                  <button class="px-3 py-2 border border-orange-600 text-orange-600 rounded hover:bg-orange-50 transition">
                    ♥
                  </button>
                </div>
              </div>
            </div>
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

    <!-- Información SEO específica del rango -->
    <div class="bg-white text-slate-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold mb-4">
              Autos {{ getTituloRango(route.params.rango) }}: {{ getQueOfrecer(route.params.rango) }}
            </h2>
            <p class="text-slate-700 mb-4">
              {{ getDescripcionDetallada(route.params.rango) }}
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-2">
              <li v-for="beneficio in getBeneficios(route.params.rango)" :key="beneficio">
                {{ beneficio }}
              </li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">Marcas Recomendadas {{ getTituloRango(route.params.rango) }}</h2>
            <p class="text-slate-700 mb-4">
              En este rango de precio, estas marcas ofrecen la mejor relación calidad-precio y confiabilidad:
            </p>
            <div class="grid grid-cols-1 gap-3">
              <div v-for="marca in marcasRecomendadas" :key="marca.nombre" 
                   class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                  <span class="text-xs font-bold text-orange-600">{{ marca.nombre.charAt(0) }}</span>
                </div>
                <div class="flex-1">
                  <div class="font-semibold text-sm">{{ marca.nombre }}</div>
                  <div class="text-xs text-slate-500">{{ marca.descripcion }}</div>
                </div>
                <div class="text-sm text-orange-600 font-medium">
                  {{ marca.count }} disponibles
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

// Estados reactivos
const vehiculos = ref([])
const cargando = ref(true)
const totalVehiculos = ref(0)
const paginaActual = ref(1)
const vehiculosPorPagina = ref(12)

// Filtros
const filtros = ref({
  precioMin: '',
  precioMax: '',
  marcas: [],
  tipos: [],
  añoDesde: '',
  añoHasta: '',
  region: '',
  combustibles: []
})

const ordenamiento = ref('mejor_valor')

// Datos para filtros
const marcasDisponibles = ref([])
const tiposDisponibles = ref([])
const regionesDisponibles = ref([])
const combustiblesDisponibles = ref([])

// Rangos disponibles
const rangosDisponibles = ref([
  { 
    slug: 'bajo-5-millones', 
    nombre: 'Bajo $5.000.000', 
    count: 0, 
    descripcion: 'Autos económicos',
    precioMinimo: 2000000
  },
  { 
    slug: 'entre-5-10-millones', 
    nombre: '$5M - $10M', 
    count: 0, 
    descripcion: 'Excelente relación precio-calidad',
    precioMinimo: 5000000
  },
  { 
    slug: 'entre-10-15-millones', 
    nombre: '$10M - $15M', 
    count: 0, 
    descripción: 'Vehículos bien equipados',
    precioMinimo: 10000000
  },
  { 
    slug: 'entre-15-20-millones', 
    nombre: '$15M - $20M', 
    count: 0, 
    descripcion: 'Autos premium',
    precioMinimo: 15000000
  },
  { 
    slug: 'sobre-20-millones', 
    nombre: 'Sobre $20.000.000', 
    count: 0, 
    descripcion: 'Vehículos de lujo',
    precioMinimo: 20000000
  }
])

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

// Información del rango actual
const rangoInfo = computed(() => {
  const rangos = {
    'bajo-5-millones': { min: 0, max: 5000000 },
    'entre-5-10-millones': { min: 5000000, max: 10000000 },
    'entre-10-15-millones': { min: 10000000, max: 15000000 },
    'entre-15-20-millones': { min: 15000000, max: 20000000 },
    'sobre-20-millones': { min: 20000000, max: Infinity }
  }
  return rangos[route.params.rango] || { min: 0, max: Infinity }
})

// Computadas
const vehiculosFiltrados = computed(() => {
  let filtrados = [...vehiculos.value]

  // Filtrar por rango de precio base
  filtrados = filtrados.filter(v => {
    const precio = v.precio || 0
    return precio >= rangoInfo.value.min && precio <= rangoInfo.value.max
  })

  // Aplicar filtros adicionales
  if (filtros.value.precioMin) {
    filtrados = filtrados.filter(v => (v.precio || 0) >= parseInt(filtros.value.precioMin))
  }
  
  if (filtros.value.precioMax) {
    filtrados = filtrados.filter(v => (v.precio || 0) <= parseInt(filtros.value.precioMax))
  }

  if (filtros.value.marcas.length > 0) {
    filtrados = filtrados.filter(v => filtros.value.marcas.includes(v.marca_id))
  }

  if (filtros.value.tipos.length > 0) {
    filtrados = filtrados.filter(v => filtros.value.tipos.includes(v.tipo_id))
  }

  if (filtros.value.añoDesde) {
    filtrados = filtrados.filter(v => v.año >= filtros.value.añoDesde)
  }
  if (filtros.value.añoHasta) {
    filtrados = filtrados.filter(v => v.año <= filtros.value.añoHasta)
  }

  if (filtros.value.region) {
    filtrados = filtrados.filter(v => v.region_id === filtros.value.region)
  }

  if (filtros.value.combustibles.length > 0) {
    filtrados = filtrados.filter(v => filtros.value.combustibles.includes(v.combustible_id))
  }

  // Ordenar
  switch (ordenamiento.value) {
    case 'precio_asc':
      filtrados.sort((a, b) => (a.precio || 0) - (b.precio || 0))
      break
    case 'precio_desc':
      filtrados.sort((a, b) => (b.precio || 0) - (a.precio || 0))
      break
    case 'año_desc':
      filtrados.sort((a, b) => (b.año || 0) - (a.año || 0))
      break
    case 'km_asc':
      filtrados.sort((a, b) => (a.kilometros || 0) - (b.kilometros || 0))
      break
    case 'mejor_valor':
      // Algoritmo de mejor valor: año vs precio vs kilómetros
      filtrados.sort((a, b) => {
        const scoreA = calcularScoreValor(a, true)
        const scoreB = calcularScoreValor(b, true)
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

const promedioRango = computed(() => {
  if (vehiculosFiltrados.value.length === 0) return 0
  const suma = vehiculosFiltrados.value.reduce((acc, v) => acc + (v.precio || 0), 0)
  return Math.round(suma / vehiculosFiltrados.value.length)
})

const añoPromedio = computed(() => {
  if (vehiculosFiltrados.value.length === 0) return 0
  const suma = vehiculosFiltrados.value.reduce((acc, v) => acc + (v.año || 0), 0)
  return Math.round(suma / vehiculosFiltrados.value.length)
})

const marcasRecomendadas = computed(() => {
  return marcasDisponibles.value
    .sort((a, b) => b.count - a.count)
    .slice(0, 5)
    .map(marca => ({
      ...marca,
      descripcion: getMarcaDescripcion(marca.nombre, route.params.rango)
    }))
})

// Métodos
const cargarVehiculos = async () => {
  try {
    cargando.value = true
    const res = await $api.get('/vehiculos')
    vehiculos.value = res.data.vehiculos || []
    totalVehiculos.value = res.data.total || vehiculos.value.length
    
    procesarDatos()
    
  } catch (error) {
    console.error('Error cargando vehículos:', error)
    generarDatosEjemplo()
  } finally {
    cargando.value = false
  }
}

const procesarDatos = () => {
  // Filtrar por rango y procesar estadísticas
  const vehiculosEnRango = vehiculos.value.filter(v => {
    const precio = v.precio || 0
    return precio >= rangoInfo.value.min && precio <= rangoInfo.value.max
  })

  // Procesar marcas
  const marcasMap = new Map()
  vehiculosEnRango.forEach(v => {
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

  // Actualizar conteos de rangos
  rangosDisponibles.value.forEach(rango => {
    const { min, max } = getRangoMinMax(rango.slug)
    rango.count = vehiculos.value.filter(v => {
      const precio = v.precio || 0
      return precio >= min && precio <= max
    }).length
  })
}

const generarDatosEjemplo = () => {
  // Generar datos de ejemplo basados en el rango
  const { min, max } = rangoInfo.value
  const count = Math.floor(Math.random() * 150) + 50

  vehiculos.value = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    marca: { 
      id: Math.floor(Math.random() * 10) + 1,
      nombre: ['Toyota', 'Ford', 'Chevrolet', 'Mazda', 'BMW', 'Audi', 'Volkswagen', 'Kia', 'Hyundai', 'Peugeot'][Math.floor(Math.random() * 10)]
    },
    modelo: { nombre: ['Corolla', 'Focus', 'Cruze', 'CX-5', 'X3', 'A4', 'Golf', 'Sportage', 'Tucson', '308'][Math.floor(Math.random() * 10)] },
    año: 2015 + Math.floor(Math.random() * 9),
    precio: min + Math.floor(Math.random() * (max === Infinity ? 30000000 : max - min)),
    kilometros: 20000 + Math.floor(Math.random() * 150000),
    combustible: { 
      id: Math.floor(Math.random() * 3) + 1,
      nombre: ['Gasolina', 'Diésel', 'Híbrido'][Math.floor(Math.random() * 3)]
    },
    transmision: { nombre: ['Manual', 'Automática'][Math.floor(Math.random() * 2)] },
    comuna: { nombre: ['Santiago', 'Providencia', 'Las Condes', 'Valparaíso'][Math.floor(Math.random() * 4)] },
    imagenes: ['/images/default-car.jpg']
  }))

  procesarDatos()
}

const aplicarFiltros = () => {
  paginaActual.value = 1
}

const limpiarFiltros = () => {
  filtros.value = {
    precioMin: '',
    precioMax: '',
    marcas: [],
    tipos: [],
    añoDesde: '',
    añoHasta: '',
    region: '',
    combustibles: []
  }
  paginaActual.value = 1
}

// Funciones de utilidad
const getTituloRango = (rango) => {
  const titulos = {
    'bajo-5-millones': 'Bajo $5.000.000',
    'entre-5-10-millones': 'Entre $5M y $10M',
    'entre-10-15-millones': 'Entre $10M y $15M', 
    'entre-15-20-millones': 'Entre $15M y $20M',
    'sobre-20-millones': 'Sobre $20.000.000'
  }
  return titulos[rango] || 'En tu presupuesto'
}

const getDescripcionRango = (rango) => {
  const descripciones = {
    'bajo-5-millones': 'ideales para primer auto o presupuesto ajustado',
    'entre-5-10-millones': 'con excelente relación precio-calidad',
    'entre-10-15-millones': 'bien equipados y confiables',
    'entre-15-20-millones': 'premium con tecnología avanzada',
    'sobre-20-millones': 'de lujo y alta gama'
  }
  return descripciones[rango] || 'en diversos rangos de precio'
}

const getRangoFormateado = (rango) => {
  return getTituloRango(rango)
}

const getRangoMinMax = (slug) => {
  const rangos = {
    'bajo-5-millones': { min: 0, max: 5000000 },
    'entre-5-10-millones': { min: 5000000, max: 10000000 },
    'entre-10-15-millones': { min: 10000000, max: 15000000 },
    'entre-15-20-millones': { min: 15000000, max: 20000000 },
    'sobre-20-millones': { min: 20000000, max: Infinity }
  }
  return rangos[slug] || { min: 0, max: Infinity }
}

const calcularScoreValor = (vehiculo, paraOrdenar = false) => {
  const precio = vehiculo.precio || 0
  const año = vehiculo.año || 2010
  const km = vehiculo.kilometros || 100000
  
  // Normalizar valores (0-1)
  const añoNorm = Math.max(0, Math.min(1, (año - 2010) / (2024 - 2010)))
  const precioNorm = Math.max(0, Math.min(1, 1 - (precio / 50000000))) // Menor precio = mejor
  const kmNorm = Math.max(0, Math.min(1, 1 - (km / 300000))) // Menor km = mejor
  
  // Score ponderado
  const score = (añoNorm * 0.4 + precioNorm * 0.3 + kmNorm * 0.3) * 10
  
  return paraOrdenar ? score : Math.round(score * 10) / 10
}

const getEtiquetaValor = (vehiculo) => {
  const score = calcularScoreValor(vehiculo)
  if (score >= 8) return 'Excelente Valor'
  if (score >= 6) return 'Buen Valor'
  if (score >= 4) return 'Valor Justo'
  return 'Precio Alto'
}

const getQueOfrecer = (rango) => {
  const ofertas = {
    'bajo-5-millones': 'Movilidad Económica',
    'entre-5-10-millones': 'Calidad y Confiabilidad',
    'entre-10-15-millones': 'Tecnología y Confort',
    'entre-15-20-millones': 'Lujo Accesible',
    'sobre-20-millones': 'Máximo Lujo y Prestaciones'
  }
  return ofertas[rango] || 'Excelentes Opciones'
}

const getDescripcionDetallada = (rango) => {
  const descripciones = {
    'bajo-5-millones': 'En este rango encontrarás vehículos ideales para movilidad urbana económica. Perfectos para estudiantes, primer auto o como segundo vehículo familiar.',
    'entre-5-10-millones': 'El rango más popular del mercado chileno. Aquí encuentras la mejor relación precio-calidad con vehículos confiables y bien equipados.',
    'entre-10-15-millones': 'Vehículos con tecnología moderna, mayor confort y seguridad. Ideales para familias que buscan características premium sin llegar al lujo.',
    'entre-15-20-millones': 'Autos premium con tecnología avanzada, excelente terminación y prestaciones superiores. Para quienes valoran la calidad y el estatus.',
    'sobre-20-millones': 'Vehículos de lujo con las últimas tecnologías, materiales premium y prestaciones excepcionales. Para los más exigentes del mercado.'
  }
  return descripciones[rango] || 'Amplia variedad de vehículos para diferentes necesidades y presupuestos.'
}

const getBeneficios = (rango) => {
  const beneficios = {
    'bajo-5-millones': [
      'Costo de mantención accesible',
      'Seguro más económico',
      'Ideal para aprender a manejar',
      'Reventa estable en el tiempo'
    ],
    'entre-5-10-millones': [
      'Equilibrio perfecto precio-calidad',
      'Tecnologías de seguridad estándar',
      'Amplia disponibilidad de repuestos',
      'Excelente valor de reventa'
    ],
    'entre-10-15-millones': [
      'Sistemas de seguridad avanzados',
      'Mayor confort y comodidades',
      'Mejor eficiencia de combustible',
      'Tecnología de conectividad moderna'
    ],
    'entre-15-20-millones': [
      'Materiales premium en interior',
      'Sistemas de asistencia al conductor',
      'Audio y navegación de alta calidad',
      'Prestaciones deportivas disponibles'
    ],
    'sobre-20-millones': [
      'Tecnología de vanguardia',
      'Máximo confort y lujo',
      'Prestaciones excepcionales',
      'Exclusividad y prestigio'
    ]
  }
  return beneficios[rango] || ['Excelente relación precio-valor', 'Amplia variedad disponible']
}

const getMarcaDescripcion = (marca, rango) => {
  // Descripciones específicas por marca y rango
  const descripciones = {
    'Toyota': 'Confiabilidad legendaria y bajo costo operacional',
    'Ford': 'Tecnología americana con diseño moderno',
    'Chevrolet': 'Versatilidad y buen equipamiento',
    'Mazda': 'Diseño premium y conducción deportiva',
    'BMW': 'Lujo alemán y prestaciones superiores',
    'Audi': 'Tecnología avanzada y elegancia',
    'Volkswagen': 'Ingeniería alemana accesible',
    'Kia': 'Garantía extendida y equipamiento completo',
    'Hyundai': 'Modernidad y eficiencia',
    'Peugeot': 'Diseño francés y comfort europeo'
  }
  return descripciones[marca] || 'Excelente opción en este rango'
}

// SEO dinámico
const configurarSEO = () => {
  const titulo = getTituloRango(route.params.rango)
  const seoMeta = generateCategoryMeta('price', titulo, vehiculosFiltrados.value.length)
  useHead(seoMeta)
}

onMounted(async () => {
  await cargarVehiculos()
  configurarSEO()
})

watch([vehiculosFiltrados], configurarSEO)
watch([ordenamiento, vehiculosPorPagina], () => { paginaActual.value = 1 })
</script>