<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <!-- Breadcrumb -->
    <div class="bg-slate-900 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="text-sm">
          <ol class="flex items-center space-x-2 text-slate-300">
            <li><NuxtLink to="/" class="hover:text-orange-500">Inicio</NuxtLink></li>
            <li>/</li>
            <li><NuxtLink :to="`/${params.region}`" class="hover:text-orange-500 capitalize">{{ regionCapitalizada }}</NuxtLink></li>
            <li>/</li>
            <li><span class="text-orange-500 capitalize">{{ comunaCapitalizada }}</span></li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Header de la página -->
    <div class="bg-gradient-to-r from-orange-900/20 to-orange-600/10 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">
            Autos Usados en {{ comunaCapitalizada }}, {{ regionCapitalizada }}
          </h1>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto">
            Descubre {{ totalVehiculos }} autos usados disponibles en {{ comunaCapitalizada }}. 
            La mayor variedad de marcas, modelos y precios en tu comuna.
          </p>
          
          <!-- Información de ubicación -->
          <div class="mt-6 flex justify-center items-center gap-2 text-slate-300">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span>{{ comunaCapitalizada }}, Región {{ regionCapitalizada }}, Chile</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Estadísticas de la comuna -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-orange-600">{{ totalVehiculos }}</div>
          <div class="text-sm text-slate-600">Autos disponibles</div>
        </div>
        <div class="bg-white rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-orange-600">{{ marcasDisponibles.length }}</div>
          <div class="text-sm text-slate-600">Marcas diferentes</div>
        </div>
        <div class="bg-white rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-orange-600">${{ precioPromedio.toLocaleString() }}</div>
          <div class="text-sm text-slate-600">Precio promedio</div>
        </div>
        <div class="bg-white rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-orange-600">{{ automorasLocal.length }}</div>
          <div class="text-sm text-slate-600">Automotoras</div>
        </div>
      </div>

      <!-- Navegación por estado (nuevo/usado) -->
      <div class="bg-white rounded-xl p-6 text-slate-900 mb-8">
        <h2 class="text-xl font-bold mb-4">Explorar por Estado</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <NuxtLink :to="`/${params.region}/${params.comuna}/usado`" 
                    class="group p-6 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold text-orange-700">Autos Usados</h3>
                <p class="text-sm text-orange-600">{{ vehiculosUsados }} vehículos disponibles</p>
                <p class="text-xs text-slate-600 mt-1">Desde ${{ precioMinimoUsados.toLocaleString() }}</p>
              </div>
              <div class="text-orange-600">→</div>
            </div>
          </NuxtLink>

          <NuxtLink :to="`/${params.region}/${params.comuna}/nuevo`" 
                    class="group p-6 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-bold text-blue-700">Autos Nuevos</h3>
                <p class="text-sm text-blue-600">{{ vehiculosNuevos }} vehículos disponibles</p>
                <p class="text-xs text-slate-600 mt-1">Desde ${{ precioMinimoNuevos.toLocaleString() }}</p>
              </div>
              <div class="text-blue-600">→</div>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Marcas más populares en la comuna -->
      <div class="bg-white rounded-xl p-6 text-slate-900 mb-8">
        <h2 class="text-xl font-bold mb-4">Marcas Más Populares en {{ comunaCapitalizada }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <NuxtLink v-for="marca in marcasPopulares" :key="marca.id"
                    :to="`/${params.region}/${params.comuna}/usado/${marca.nombre.toLowerCase()}`"
                    class="group p-4 rounded-lg bg-slate-50 hover:bg-orange-50 hover:border-orange-200 border border-transparent transition">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-orange-100 group-hover:to-orange-200 rounded-xl flex items-center justify-center mx-auto mb-3 transition">
                <span class="text-2xl font-bold text-slate-600 group-hover:text-orange-600">
                  {{ marca.nombre.charAt(0) }}
                </span>
              </div>
              <h3 class="font-semibold text-sm mb-1">{{ marca.nombre }}</h3>
              <p class="text-xs text-slate-500">{{ marca.count }} disponibles</p>
              <p class="text-xs text-orange-600 font-medium mt-1">Desde ${{ marca.precioMinimo.toLocaleString() }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Tipos de vehículos disponibles -->
      <div class="bg-white rounded-xl p-6 text-slate-900 mb-8">
        <h2 class="text-xl font-bold mb-4">Tipos de Vehículos en {{ comunaCapitalizada }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <NuxtLink v-for="tipo in tiposDisponibles" :key="tipo.slug"
                    :to="`/${params.region}/${params.comuna}/usado/${tipo.slug}`"
                    class="text-center p-4 rounded-lg bg-slate-50 hover:bg-orange-50 transition group">
            <div class="text-3xl mb-2">{{ tipo.icon }}</div>
            <h3 class="font-semibold text-sm mb-1">{{ tipo.nombre }}</h3>
            <p class="text-xs text-slate-500">{{ tipo.count }} unidades</p>
          </NuxtLink>
        </div>
      </div>

      <!-- Vehículos destacados -->
      <div class="mb-8">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-2xl font-bold">Vehículos Destacados en {{ comunaCapitalizada }}</h2>
          <NuxtLink :to="`/${params.region}/${params.comuna}/usado`" 
                    class="text-orange-500 hover:text-orange-600 font-medium">
            Ver todos →
          </NuxtLink>
        </div>

        <div v-if="cargando" class="text-center py-8">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p class="text-slate-300">Cargando vehículos destacados...</p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="vehiculo in vehiculosDestacados" :key="vehiculo.id" 
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
            <div class="relative">
              <img :src="vehiculo.imagenes?.[0] || '/images/default-car.jpg'" 
                   :alt="`${vehiculo.marca?.nombre} ${vehiculo.modelo?.nombre} en ${comunaCapitalizada}`"
                   class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                ${{ Number(vehiculo.precio).toLocaleString() }}
              </div>
              <div class="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                {{ comunaCapitalizada }}
              </div>
            </div>
            
            <div class="p-4">
              <h3 class="font-bold text-slate-900 mb-2">
                {{ vehiculo.marca?.nombre }} {{ vehiculo.modelo?.nombre }} {{ vehiculo.año }}
              </h3>
              
              <div class="text-sm text-slate-600 space-y-1 mb-4">
                <div class="flex justify-between">
                  <span>Kilómetros:</span>
                  <span>{{ Number(vehiculo.kilometros || 0).toLocaleString() }} km</span>
                </div>
                <div class="flex justify-between">
                  <span>Combustible:</span>
                  <span>{{ vehiculo.combustible?.nombre }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Transmisión:</span>
                  <span>{{ vehiculo.transmision?.nombre }}</span>
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
      </div>

      <!-- Rangos de precios -->
      <div class="bg-white rounded-xl p-6 text-slate-900 mb-8">
        <h2 class="text-xl font-bold mb-4">Buscar por Rango de Precio</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink v-for="rango in rangosPrecio" :key="rango.slug"
                    :to="`/autos-${rango.slug}`"
                    class="p-4 rounded-lg bg-slate-50 hover:bg-orange-50 transition border border-transparent hover:border-orange-200">
            <h3 class="font-semibold text-sm mb-2">{{ rango.nombre }}</h3>
            <p class="text-xs text-slate-500 mb-2">{{ rango.count }} vehículos</p>
            <p class="text-sm text-orange-600 font-medium">{{ rango.descripcion }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Información SEO local -->
    <div class="bg-white text-slate-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold mb-4">Comprar Auto Usado en {{ comunaCapitalizada }}</h2>
            <p class="text-slate-700 mb-4">
              {{ comunaCapitalizada }} es una excelente ubicación para encontrar autos usados de calidad. 
              La comuna cuenta con {{ automorasLocal.length }} automotoras establecidas y una amplia oferta 
              de vehículos de todas las marcas y precios.
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-2">
              <li>{{ marcasDisponibles.length }} marcas diferentes disponibles</li>
              <li>Precios competitivos del mercado local</li>
              <li>Facilidades de financiamiento</li>
              <li>Servicios técnicos especializados cercanos</li>
              <li>Garantía y post-venta confiables</li>
            </ul>
          </div>
          <div>
            <h2 class="text-2xl font-bold mb-4">¿Por qué {{ comunaCapitalizada }}?</h2>
            <p class="text-slate-700 mb-4">
              {{ getDescripcionComuna(params.comuna, params.region) }}
            </p>
            <div class="space-y-3">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Ubicación Estratégica</h3>
                  <p class="text-sm text-slate-600">Fácil acceso desde toda la Región {{ regionCapitalizada }}</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Mercado Activo</h3>
                  <p class="text-sm text-slate-600">Alta rotación y precios competitivos</p>
                </div>
              </div>
              
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg class="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Servicios Completos</h3>
                  <p class="text-sm text-slate-600">Talleres, seguros y financiamiento disponible</p>
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
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const params = route.params

// Computed properties para capitalización
const regionCapitalizada = computed(() => params.region.charAt(0).toUpperCase() + params.region.slice(1))
const comunaCapitalizada = computed(() => params.comuna.charAt(0).toUpperCase() + params.comuna.slice(1))

// Estados reactivos
const vehiculos = ref([])
const cargando = ref(true)
const totalVehiculos = ref(0)

// Datos calculados
const marcasDisponibles = ref([])
const automorasLocal = ref([])
const tiposDisponibles = ref([
  { slug: 'suvs', nombre: 'SUVs', icon: '🚙', count: 0 },
  { slug: 'sedanes', nombre: 'Sedanes', icon: '🚗', count: 0 },
  { slug: 'camionetas', nombre: 'Camionetas', icon: '🛻', count: 0 },
  { slug: 'hatchback', nombre: 'Hatchback', icon: '🚘', count: 0 },
  { slug: 'station-wagon', nombre: 'Station W.', icon: '🚐', count: 0 },
  { slug: 'coupe', nombre: 'Coupé', icon: '🏎️', count: 0 }
])

const rangosPrecio = ref([
  { 
    slug: 'bajo-10-millones', 
    nombre: 'Hasta $10.000.000', 
    count: 0, 
    descripcion: 'Autos económicos ideales para primer auto' 
  },
  { 
    slug: 'entre-10-15-millones', 
    nombre: '$10M - $15M', 
    count: 0, 
    descripcion: 'Vehículos con excelente relación precio-calidad' 
  },
  { 
    slug: 'entre-15-20-millones', 
    nombre: '$15M - $20M', 
    count: 0, 
    descripcion: 'Autos premium con tecnología avanzada' 
  },
  { 
    slug: 'sobre-20-millones', 
    nombre: 'Sobre $20.000.000', 
    count: 0, 
    descripcion: 'Vehículos de lujo y alta gama' 
  }
])

const { $api } = useNuxtApp()
const { generateCategoryMeta } = useSEO()

// Computadas
const vehiculosUsados = computed(() => vehiculos.value.filter(v => v.estado === 'usado').length)
const vehiculosNuevos = computed(() => vehiculos.value.filter(v => v.estado === 'nuevo').length)

const precioPromedio = computed(() => {
  if (vehiculos.value.length === 0) return 0
  const suma = vehiculos.value.reduce((acc, v) => acc + (v.precio || 0), 0)
  return Math.round(suma / vehiculos.value.length)
})

const precioMinimoUsados = computed(() => {
  const usados = vehiculos.value.filter(v => v.estado === 'usado')
  return usados.length > 0 ? Math.min(...usados.map(v => v.precio || 0)) : 0
})

const precioMinimoNuevos = computed(() => {
  const nuevos = vehiculos.value.filter(v => v.estado === 'nuevo')
  return nuevos.length > 0 ? Math.min(...nuevos.map(v => v.precio || 0)) : 0
})

const marcasPopulares = computed(() => {
  return marcasDisponibles.value
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)
})

const vehiculosDestacados = computed(() => {
  return vehiculos.value
    .sort((a, b) => {
      // Algoritmo de relevancia: precio vs año vs kilómetros
      const scoreA = (a.año || 0) * 0.4 + (50000000 - (a.precio || 0)) * 0.0001 + (200000 - (a.kilometros || 0)) * 0.00001
      const scoreB = (b.año || 0) * 0.4 + (50000000 - (b.precio || 0)) * 0.0001 + (200000 - (b.kilometros || 0)) * 0.00001
      return scoreB - scoreA
    })
    .slice(0, 6)
})

// Métodos
const cargarVehiculos = async () => {
  try {
    cargando.value = true
    
    const query = new URLSearchParams({
      region: params.region,
      comuna: params.comuna
    })

    const res = await $api.get(`/vehiculos?${query.toString()}`)
    vehiculos.value = res.data.vehiculos || []
    totalVehiculos.value = res.data.total || vehiculos.value.length
    
    // Procesar datos para estadísticas
    procesarDatosComuna()
    
  } catch (error) {
    console.error('Error cargando vehículos de la comuna:', error)
    // Datos de ejemplo para demostración
    generarDatosEjemplo()
  } finally {
    cargando.value = false
  }
}

const procesarDatosComuna = () => {
  // Procesar marcas
  const marcasMap = new Map()
  vehiculos.value.forEach(v => {
    if (v.marca) {
      const key = v.marca.id
      if (marcasMap.has(key)) {
        const marca = marcasMap.get(key)
        marca.count++
        marca.precioMinimo = Math.min(marca.precioMinimo, v.precio || 0)
      } else {
        marcasMap.set(key, { 
          id: v.marca.id, 
          nombre: v.marca.nombre, 
          count: 1,
          precioMinimo: v.precio || 0
        })
      }
    }
  })
  marcasDisponibles.value = Array.from(marcasMap.values())

  // Procesar tipos (simulado)
  const tiposCount = {
    'suvs': Math.floor(totalVehiculos.value * 0.3),
    'sedanes': Math.floor(totalVehiculos.value * 0.25),
    'camionetas': Math.floor(totalVehiculos.value * 0.2),
    'hatchback': Math.floor(totalVehiculos.value * 0.15),
    'station-wagon': Math.floor(totalVehiculos.value * 0.07),
    'coupe': Math.floor(totalVehiculos.value * 0.03)
  }

  tiposDisponibles.value.forEach(tipo => {
    tipo.count = tiposCount[tipo.slug] || 0
  })

  // Procesar rangos de precio
  const precios = vehiculos.value.map(v => v.precio || 0).filter(p => p > 0)
  rangosPrecio.value[0].count = precios.filter(p => p <= 10000000).length
  rangosPrecio.value[1].count = precios.filter(p => p > 10000000 && p <= 15000000).length
  rangosPrecio.value[2].count = precios.filter(p => p > 15000000 && p <= 20000000).length
  rangosPrecio.value[3].count = precios.filter(p => p > 20000000).length

  // Simular automotoras locales
  automorasLocal.value = [
    { nombre: `Automotora ${comunaCapitalizada.value}`, tipo: 'Multimarca' },
    { nombre: `Autos Premium ${params.comuna}`, tipo: 'Especializada' },
    { nombre: `${regionCapitalizada.value} Motors`, tipo: 'Regional' }
  ]
}

const generarDatosEjemplo = () => {
  // Datos de ejemplo para demostración
  totalVehiculos.value = Math.floor(Math.random() * 200) + 50
  
  marcasDisponibles.value = [
    { id: 1, nombre: 'Toyota', count: Math.floor(totalVehiculos.value * 0.2), precioMinimo: 8500000 },
    { id: 2, nombre: 'Ford', count: Math.floor(totalVehiculos.value * 0.15), precioMinimo: 9200000 },
    { id: 3, nombre: 'Chevrolet', count: Math.floor(totalVehiculos.value * 0.12), precioMinimo: 7800000 },
    { id: 4, nombre: 'Mazda', count: Math.floor(totalVehiculos.value * 0.1), precioMinimo: 10500000 },
    { id: 5, nombre: 'BMW', count: Math.floor(totalVehiculos.value * 0.08), precioMinimo: 15000000 }
  ]

  // Simular vehículos destacados
  vehiculos.value = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    marca: { nombre: ['Toyota', 'Ford', 'Chevrolet', 'Mazda', 'BMW'][Math.floor(Math.random() * 5)] },
    modelo: { nombre: ['Corolla', 'Focus', 'Cruze', 'CX-5', 'X3'][Math.floor(Math.random() * 5)] },
    año: 2018 + Math.floor(Math.random() * 6),
    precio: 8000000 + Math.floor(Math.random() * 15000000),
    kilometros: 20000 + Math.floor(Math.random() * 100000),
    combustible: { nombre: ['Gasolina', 'Diésel', 'Híbrido'][Math.floor(Math.random() * 3)] },
    transmision: { nombre: ['Manual', 'Automática'][Math.floor(Math.random() * 2)] },
    imagenes: ['/images/default-car.jpg'],
    estado: Math.random() > 0.8 ? 'nuevo' : 'usado'
  }))

  procesarDatosComuna()
}

const getDescripcionComuna = (comuna, region) => {
  // Descripciones específicas por comuna (se puede expandir)
  const descripciones = {
    'santiago': 'Como capital de Chile, Santiago concentra la mayor oferta de vehículos del país, con precios competitivos y todas las facilidades.',
    'providencia': 'Comuna premium con acceso a vehículos de alta gama y servicios especializados para automóviles de lujo.',
    'las-condes': 'Zona de alto poder adquisitivo con amplia oferta de vehículos premium y concesionarios oficiales.',
    'valparaiso': 'Puerto principal de Chile con gran movimiento comercial y excelente conectividad para el mercado automotriz.',
    'concepcion': 'Capital de la región del Biobío, centro económico del sur con amplia oferta de vehículos.',
    'la-serena': 'Ciudad turística con creciente demanda de vehículos y servicios automotrices de calidad.'
  }
  
  return descripciones[comuna.toLowerCase()] || 
         `${comunaCapitalizada.value} es una importante comuna de la Región ${regionCapitalizada.value} con un mercado automotriz dinámico y creciente oferta de vehículos de todas las categorías.`
}

// SEO dinámico
const configurarSEO = () => {
  const title = `Autos Usados en ${comunaCapitalizada.value}, ${regionCapitalizada.value} - ${totalVehiculos.value} Vehículos | Autoventas360`
  const description = `Encuentra ${totalVehiculos.value} autos usados en ${comunaCapitalizada.value}, ${regionCapitalizada.value}. ${marcasDisponibles.value.length} marcas disponibles desde $${precioMinimoUsados.value.toLocaleString()}. ¡Financiamiento disponible!`
  
  const keywords = [
    `autos usados ${params.comuna}`,
    `autos usados ${params.region}`,
    `comprar auto usado ${params.comuna}`,
    `venta autos ${params.comuna}`,
    `automotoras ${params.comuna}`,
    `autos ${params.comuna} ${params.region}`
  ].join(', ')

  useHead({
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'geo.region', content: `CL-${params.region.toUpperCase()}` },
      { name: 'geo.placename', content: comunaCapitalizada.value },
      { name: 'geo.position', content: '' }, // Se pueden agregar coordenadas
      { name: 'ICBM', content: '' }
    ],
    link: [
      { rel: 'canonical', href: `https://autoventas360.com/${params.region}/${params.comuna}` }
    ]
  })

  // Structured data para localización
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "AutoDealer",
    "name": "Autoventas360",
    "description": description,
    "url": `https://autoventas360.com/${params.region}/${params.comuna}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": comunaCapitalizada.value,
      "addressRegion": regionCapitalizada.value,
      "addressCountry": "CL"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "addressCountry": "CL",
        "addressRegion": regionCapitalizada.value,
        "addressLocality": comunaCapitalizada.value
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Autos en ${comunaCapitalizada.value}`,
      "itemListElement": vehiculosDestacados.value.map(vehiculo => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Vehicle",
          "name": `${vehiculo.marca?.nombre} ${vehiculo.modelo?.nombre} ${vehiculo.año}`,
          "brand": vehiculo.marca?.nombre,
          "model": vehiculo.modelo?.nombre
        },
        "price": vehiculo.precio,
        "priceCurrency": "CLP",
        "availability": "https://schema.org/InStock",
        "availableAtOrFrom": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": comunaCapitalizada.value,
            "addressRegion": regionCapitalizada.value,
            "addressCountry": "CL"
          }
        }
      }))
    }
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData)
      }
    ]
  })
}

onMounted(async () => {
  await cargarVehiculos()
  configurarSEO()
})
</script>