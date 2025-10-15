<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <!-- Breadcrumb SEO -->
    <div class="bg-slate-900 py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="text-sm">
          <ol class="flex items-center space-x-2 text-slate-300 flex-wrap">
            <li><NuxtLink to="/" class="hover:text-orange-500">Inicio</NuxtLink></li>
            <li>/</li>
            <li><NuxtLink :to="`/${params.region}`" class="hover:text-orange-500 capitalize">{{ params.region }}</NuxtLink></li>
            <li>/</li>
            <li><NuxtLink :to="`/${params.region}/${params.comuna}`" class="hover:text-orange-500 capitalize">{{ params.comuna }}</NuxtLink></li>
            <li>/</li>
            <li><NuxtLink :to="`/${params.region}/${params.comuna}/${params.estado}`" class="hover:text-orange-500 capitalize">{{ params.estado }}</NuxtLink></li>
            <li>/</li>
            <li><NuxtLink :to="`/${params.region}/${params.comuna}/${params.estado}/${params.marca}`" class="hover:text-orange-500 capitalize">{{ params.marca }}</NuxtLink></li>
            <li>/</li>
            <li><span class="text-orange-500">{{ params.ano }} {{ params.modelo }} {{ params.combustible }}</span></li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Header de la página -->
    <div class="bg-gradient-to-r from-orange-900/20 to-orange-600/10 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">
            {{ marcaCapitalizada }} {{ modeloCapitalizado }} {{ params.ano }} {{ combustibleCapitalizado }} {{ estadoCapitalizado }} en {{ comunaCapitalizada }}
          </h1>
          <p class="text-xl text-slate-300 max-w-4xl mx-auto">
            {{ vehiculosEncontrados }} {{ marcaCapitalizada }} {{ modeloCapitalizado }} {{ params.ano }} {{ estadoCapitalizado.toLowerCase() }}s con motor {{ combustibleCapitalizado }} 
            disponibles en {{ comunaCapitalizada }}, {{ regionCapitalizada }}.
            <span v-if="vehiculosEncontrados > 0">
              Precios desde ${{ precioMinimo.toLocaleString() }} hasta ${{ precioMaximo.toLocaleString() }}.
            </span>
          </p>
          
          <!-- Badges informativos -->
          <div class="flex justify-center gap-4 mt-6 flex-wrap">
            <span class="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {{ estadoCapitalizado }}s
            </span>
            <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {{ combustibleCapitalizado }}
            </span>
            <span class="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {{ comunaCapitalizada }}, {{ regionCapitalizada }}
            </span>
            <span class="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Año {{ params.ano }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Estadísticas rápidas -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-orange-600">{{ vehiculosEncontrados }}</div>
          <div class="text-sm text-slate-600">Vehículos {{ estadoCapitalizado.toLowerCase() }}s</div>
        </div>
        <div class="bg-white rounded-lg p-4 text-center" v-if="vehiculosEncontrados > 0">
          <div class="text-2xl font-bold text-orange-600">${{ precioPromedio.toLocaleString() }}</div>
          <div class="text-sm text-slate-600">Precio promedio</div>
        </div>
        <div class="bg-white rounded-lg p-4 text-center" v-if="vehiculosEncontrados > 0 && params.estado === 'usado'">
          <div class="text-2xl font-bold text-orange-600">{{ kmPromedio.toLocaleString() }}</div>
          <div class="text-sm text-slate-600">KM promedio</div>
        </div>
        <div class="bg-white rounded-lg p-4 text-center" v-if="vehiculosEncontrados > 0">
          <div class="text-2xl font-bold text-orange-600">{{ params.ano }}</div>
          <div class="text-sm text-slate-600">Año específico</div>
        </div>
      </div>

      <!-- Filtros adicionales si hay vehículos -->
      <div v-if="vehiculosEncontrados > 0" class="bg-white rounded-xl p-6 mb-8 text-slate-900">
        <h3 class="text-lg font-bold mb-4">Refinar búsqueda</h3>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium mb-2">Precio máximo</label>
            <select v-model="filtros.precioMax" class="w-full rounded border-gray-300">
              <option value="">Sin límite</option>
              <option value="10000000">Hasta $10.000.000</option>
              <option value="15000000">Hasta $15.000.000</option>
              <option value="20000000">Hasta $20.000.000</option>
              <option value="30000000">Hasta $30.000.000</option>
            </select>
          </div>
          <div v-if="params.estado === 'usado'">
            <label class="block text-sm font-medium mb-2">Kilómetros máximos</label>
            <select v-model="filtros.kmMax" class="w-full rounded border-gray-300">
              <option value="">Sin límite</option>
              <option value="50000">Hasta 50.000 km</option>
              <option value="100000">Hasta 100.000 km</option>
              <option value="150000">Hasta 150.000 km</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Transmisión</label>
            <select v-model="filtros.transmision" class="w-full rounded border-gray-300">
              <option value="">Todas</option>
              <option value="manual">Manual</option>
              <option value="automatica">Automática</option>
              <option value="cvt">CVT</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Ordenar por</label>
            <select v-model="ordenamiento" class="w-full rounded border-gray-300">
              <option value="precio_asc">Precio: Menor a Mayor</option>
              <option value="precio_desc">Precio: Mayor a Menor</option>
              <option value="km_asc" v-if="params.estado === 'usado'">Menor Kilometraje</option>
              <option value="más_nuevo">Más Recientes</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Listado de vehículos -->
      <div v-if="cargando" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p class="text-slate-300">Cargando {{ marcaCapitalizada }} {{ modeloCapitalizado }} {{ estadoCapitalizado.toLowerCase() }}s...</p>
      </div>

      <div v-else-if="vehiculos.length === 0" class="text-center py-12">
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">
            No hay {{ marcaCapitalizada }} {{ modeloCapitalizado }} {{ params.ano }} {{ estadoCapitalizado.toLowerCase() }}s disponibles en {{ comunaCapitalizada }}
          </h2>
          <p class="text-slate-300 mb-6">
            Pero tenemos excelentes alternativas para ti. Explora estas opciones:
          </p>
        </div>
        
        <!-- Sugerencias alternativas jerárquicas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          <NuxtLink :to="`/${params.region}/${params.comuna}/${params.estado}/${params.marca}`" 
                    class="bg-white text-slate-900 p-4 rounded-lg hover:bg-orange-50 transition">
            <h3 class="font-bold">Todos los {{ marcaCapitalizada }}</h3>
            <p class="text-sm text-slate-600">{{ estadoCapitalizado }}s en {{ comunaCapitalizada }}</p>
          </NuxtLink>
          
          <NuxtLink :to="`/${params.region}/${params.comuna}/${params.estado}`" 
                    class="bg-white text-slate-900 p-4 rounded-lg hover:bg-orange-50 transition">
            <h3 class="font-bold">Todos {{ estadoCapitalizado }}s</h3>
            <p class="text-sm text-slate-600">En {{ comunaCapitalizada }}</p>
          </NuxtLink>
          
          <NuxtLink :to="`/${params.region}/${params.estado}/${params.marca}`" 
                    class="bg-white text-slate-900 p-4 rounded-lg hover:bg-orange-50 transition">
            <h3 class="font-bold">{{ marcaCapitalizada }} en {{ regionCapitalizada }}</h3>
            <p class="text-sm text-slate-600">{{ estadoCapitalizado }}s en toda la región</p>
          </NuxtLink>
          
          <NuxtLink :to="`/autos-${params.estado}s-${params.marca}`" 
                    class="bg-white text-slate-900 p-4 rounded-lg hover:bg-orange-50 transition">
            <h3 class="font-bold">{{ marcaCapitalizada }} {{ estadoCapitalizado }}s</h3>
            <p class="text-sm text-slate-600">En todo Chile</p>
          </NuxtLink>
        </div>
      </div>

      <div v-else>
        <!-- Header de resultados -->
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-bold">{{ vehiculosFiltrados.length }} vehículos encontrados</h2>
          <div class="flex gap-4 items-center">
            <span class="text-sm text-slate-300">Mostrando {{ (paginaActual - 1) * vehiculosPorPagina + 1 }} - {{ Math.min(paginaActual * vehiculosPorPagina, vehiculosFiltrados.length) }} de {{ vehiculosFiltrados.length }}</span>
          </div>
        </div>

        <!-- Grid de vehículos -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div v-for="vehiculo in vehiculosPaginados" :key="vehiculo.id" 
               class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
            <div class="relative">
              <img :src="vehiculo.imagenes?.[0] || '/images/default-car.jpg'" 
                   :alt="`${vehiculo.marca?.nombre} ${vehiculo.modelo?.nombre} ${vehiculo.año} ${params.estado}`"
                   class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
              <div class="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                ${{ Number(vehiculo.precio).toLocaleString() }}
              </div>
              <div class="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                {{ estadoCapitalizado }}
              </div>
            </div>
            
            <div class="p-4">
              <h3 class="font-bold text-slate-900 mb-2 text-lg">
                {{ vehiculo.marca?.nombre }} {{ vehiculo.modelo?.nombre }} {{ vehiculo.año }}
              </h3>
              
              <div class="text-sm text-slate-600 space-y-1 mb-4">
                <div class="flex justify-between">
                  <span>Estado:</span>
                  <span class="font-semibold capitalize">{{ params.estado }}</span>
                </div>
                <div class="flex justify-between" v-if="params.estado === 'usado'">
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
                <div class="flex justify-between">
                  <span>Ubicación:</span>
                  <span>{{ vehiculo.comuna?.nombre }}</span>
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
              v-for="pagina in totalPaginas" 
              :key="pagina"
              @click="paginaActual = pagina"
              :class="[
                'px-4 py-2 rounded transition',
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

    <!-- Información SEO local específica -->
    <div class="bg-white text-slate-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold mb-4">
              Comprar {{ marcaCapitalizada }} {{ modeloCapitalizado }} {{ estadoCapitalizado }} en {{ comunaCapitalizada }}
            </h2>
            <p class="text-slate-700 mb-4">
              {{ comunaCapitalizada }} es una ubicación estratégica para encontrar {{ marcaCapitalizada }} {{ modeloCapitalizado }} {{ params.ano }} {{ estadoCapitalizado.toLowerCase() }}s. 
              La comuna cuenta con {{ params.estado === 'nuevo' ? 'concesionarios oficiales' : 'automotoras especializadas' }} 
              que ofrecen vehículos de calidad con garantía.
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-2">
              <li>{{ params.estado === 'nuevo' ? 'Concesionarios oficiales' : 'Amplia oferta de usados certificados' }}</li>
              <li>Servicios técnicos especializados en {{ marcaCapitalizada }}</li>
              <li>Opciones de financiamiento competitivas</li>
              <li>{{ params.estado === 'nuevo' ? 'Garantía de fábrica' : 'Garantía extendida disponible' }}</li>
            </ul>
          </div>
          
          <div>
            <h2 class="text-2xl font-bold mb-4">
              {{ marcaCapitalizada }} {{ modeloCapitalizado }} {{ params.ano }} {{ combustibleCapitalizado }}
            </h2>
            <p class="text-slate-700 mb-4">
              El {{ marcaCapitalizada }} {{ modeloCapitalizado }} {{ params.ano }} con motor {{ combustibleCapitalizado }} 
              {{ params.estado === 'nuevo' ? 'incorpora las últimas tecnologías' : 'mantiene excelente confiabilidad' }} 
              y representa una inversión inteligente {{ params.estado === 'nuevo' ? 'a largo plazo' : 'con gran valor' }}.
            </p>
            <ul class="list-disc list-inside text-slate-700 space-y-2">
              <li>{{ params.estado === 'nuevo' ? 'Tecnología de última generación' : 'Tecnología probada y confiable' }}</li>
              <li>Excelente eficiencia de combustible {{ combustibleCapitalizado.toLowerCase() }}</li>
              <li>Red de servicio técnico en {{ regionCapitalizada }}</li>
              <li>{{ params.estado === 'nuevo' ? 'Valor de reventa superior' : 'Depreciación estabilizada' }}</li>
            </ul>
          </div>
        </div>

        <!-- Sección de comparación nuevo vs usado -->
        <div class="mt-12 p-6 bg-slate-50 rounded-xl">
          <h3 class="text-xl font-bold text-center mb-6">
            ¿{{ marcaCapitalizada }} {{ modeloCapitalizado }} {{ estadoCapitalizado }} o {{ params.estado === 'nuevo' ? 'Usado' : 'Nuevo' }}?
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="text-center">
              <h4 class="font-bold text-lg mb-3 text-orange-600">{{ estadoCapitalizado }}</h4>
              <ul class="text-sm text-slate-700 space-y-1">
                <li v-if="params.estado === 'nuevo'">✓ Garantía completa de fábrica</li>
                <li v-if="params.estado === 'nuevo'">✓ Últimas características</li>
                <li v-if="params.estado === 'nuevo'">✓ Sin historial previo</li>
                <li v-if="params.estado === 'usado'">✓ Precio más accesible</li>
                <li v-if="params.estado === 'usado'">✓ Menor depreciación</li>
                <li v-if="params.estado === 'usado'">✓ Disponibilidad inmediata</li>
              </ul>
            </div>
            <div class="text-center">
              <h4 class="font-bold text-lg mb-3 text-slate-600">{{ params.estado === 'nuevo' ? 'Usado' : 'Nuevo' }}</h4>
              <ul class="text-sm text-slate-700 space-y-1">
                <li v-if="params.estado === 'nuevo'">• Precio más económico</li>
                <li v-if="params.estado === 'nuevo'">• Depreciación menor</li>
                <li v-if="params.estado === 'nuevo'">• Historial conocido</li>
                <li v-if="params.estado === 'usado'">• Últimas innovaciones</li>
                <li v-if="params.estado === 'usado'">• Garantía completa</li>
                <li v-if="params.estado === 'usado'">• Sin desgaste previo</li>
              </ul>
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
const params = route.params

// Función para capitalizar
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

// Computed properties para capitalización
const regionCapitalizada = computed(() => capitalize(params.region))
const comunaCapitalizada = computed(() => capitalize(params.comuna))
const estadoCapitalizado = computed(() => capitalize(params.estado))
const marcaCapitalizada = computed(() => capitalize(params.marca))
const modeloCapitalizado = computed(() => capitalize(params.modelo))
const combustibleCapitalizado = computed(() => capitalize(params.combustible))

// Estados reactivos
const vehiculos = ref([])
const cargando = ref(true)
const ordenamiento = ref('precio_asc')
const paginaActual = ref(1)
const vehiculosPorPagina = 12

// Filtros adicionales
const filtros = ref({
  precioMax: '',
  kmMax: '',
  transmision: ''
})

const { $api } = useNuxtApp()

// Computadas para estadísticas
const vehiculosEncontrados = computed(() => vehiculos.value.length)
const precioMinimo = computed(() => vehiculos.value.length > 0 ? Math.min(...vehiculos.value.map(v => v.precio || 0)) : 0)
const precioMaximo = computed(() => vehiculos.value.length > 0 ? Math.max(...vehiculos.value.map(v => v.precio || 0)) : 0)
const precioPromedio = computed(() => {
  if (vehiculos.value.length === 0) return 0
  const suma = vehiculos.value.reduce((acc, v) => acc + (v.precio || 0), 0)
  return Math.round(suma / vehiculos.value.length)
})
const kmPromedio = computed(() => {
  if (vehiculos.value.length === 0) return 0
  const suma = vehiculos.value.reduce((acc, v) => acc + (v.kilometros || 0), 0)
  return Math.round(suma / vehiculos.value.length)
})

// Vehículos filtrados
const vehiculosFiltrados = computed(() => {
  let filtrados = [...vehiculos.value]

  // Aplicar filtros adicionales
  if (filtros.value.precioMax) {
    filtrados = filtrados.filter(v => (v.precio || 0) <= parseInt(filtros.value.precioMax))
  }
  
  if (filtros.value.kmMax && params.estado === 'usado') {
    filtrados = filtrados.filter(v => (v.kilometros || 0) <= parseInt(filtros.value.kmMax))
  }
  
  if (filtros.value.transmision) {
    filtrados = filtrados.filter(v => 
      v.transmision?.nombre?.toLowerCase().includes(filtros.value.transmision.toLowerCase())
    )
  }

  // Ordenar
  switch (ordenamiento.value) {
    case 'precio_asc':
      filtrados.sort((a, b) => (a.precio || 0) - (b.precio || 0))
      break
    case 'precio_desc':
      filtrados.sort((a, b) => (b.precio || 0) - (a.precio || 0))
      break
    case 'km_asc':
      filtrados.sort((a, b) => (a.kilometros || 0) - (b.kilometros || 0))
      break
    case 'más_nuevo':
      filtrados.sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0))
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
    
    // Construir query para búsqueda específica jerárquica
    const query = new URLSearchParams({
      marca: params.marca,
      modelo: params.modelo,
      año: params.ano,
      combustible: params.combustible,
      estado: params.estado,
      region: params.region,
      comuna: params.comuna
    })

    const res = await $api.get(`/vehiculos?${query.toString()}`)
    vehiculos.value = res.data.vehiculos || []
    
    // Configurar SEO después de cargar datos
    configurarSEO()
    
  } catch (error) {
    console.error('Error cargando vehículos específicos:', error)
    vehiculos.value = []
  } finally {
    cargando.value = false
  }
}

const configurarSEO = () => {
  const title = `${marcaCapitalizada.value} ${modeloCapitalizado.value} ${params.ano} ${combustibleCapitalizado.value} ${estadoCapitalizado.value} en ${comunaCapitalizada.value} - Autoventas360`
  
  const description = vehiculosEncontrados.value > 0 
    ? `${vehiculosEncontrados.value} ${marcaCapitalizada.value} ${modeloCapitalizado.value} ${params.ano} ${estadoCapitalizado.value.toLowerCase()}s con motor ${combustibleCapitalizado.value} en ${comunaCapitalizada.value}, ${regionCapitalizada.value}. Precios desde $${precioMinimo.value.toLocaleString()}. ¡Encuentra tu auto ideal!`
    : `Busca ${marcaCapitalizada.value} ${modeloCapitalizado.value} ${params.ano} ${estadoCapitalizado.value.toLowerCase()}s con motor ${combustibleCapitalizado.value} en ${comunaCapitalizada.value}. Explora alternativas y encuentra el vehículo perfecto para ti.`
  
  const keywords = [
    `${params.marca} ${params.modelo} ${params.ano} ${params.estado}`,
    `auto ${params.estado} ${params.marca} ${params.comuna}`,
    `${params.marca} ${params.modelo} ${params.combustible} ${params.region}`,
    `vehículo ${params.estado} ${params.comuna}`,
    `comprar ${params.marca} ${params.estado} ${params.region}`,
    `auto ${params.combustible} ${params.estado} ${params.comuna}`
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
      { name: 'vehicle.condition', content: params.estado },
      { name: 'vehicle.make', content: params.marca },
      { name: 'vehicle.model', content: params.modelo },
      { name: 'vehicle.year', content: params.ano },
      { name: 'vehicle.fuel_type', content: params.combustible }
    ],
    link: [
      { 
        rel: 'canonical', 
        href: `https://autoventas360.com/${params.region}/${params.comuna}/${params.estado}/${params.marca}/${params.ano}/${params.modelo}/${params.combustible}` 
      }
    ]
  })

  // Structured data específico para la ubicación y estado
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "AutoDealer",
    "name": "Autoventas360",
    "description": description,
    "url": `https://autoventas360.com/${params.region}/${params.comuna}/${params.estado}/${params.marca}/${params.ano}/${params.modelo}/${params.combustible}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": comunaCapitalizada.value,
      "addressRegion": regionCapitalizada.value,
      "addressCountry": "CL"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${marcaCapitalizada.value} ${modeloCapitalizado.value} ${params.ano} ${estadoCapitalizado.value}`,
      "itemListElement": vehiculos.value.map(vehiculo => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Vehicle",
          "name": `${vehiculo.marca?.nombre} ${vehiculo.modelo?.nombre} ${vehiculo.año}`,
          "brand": vehiculo.marca?.nombre,
          "model": vehiculo.modelo?.nombre,
          "productionDate": vehiculo.año?.toString(),
          "fuelType": vehiculo.combustible?.nombre,
          "vehicleCondition": params.estado === 'nuevo' ? 'https://schema.org/NewCondition' : 'https://schema.org/UsedCondition'
        },
        "price": vehiculo.precio,
        "priceCurrency": "CLP",
        "availability": "https://schema.org/InStock"
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

// Watchers para resetear paginación cuando cambien filtros
watch([filtros, ordenamiento], () => {
  paginaActual.value = 1
}, { deep: true })

onMounted(cargarVehiculos)
</script>