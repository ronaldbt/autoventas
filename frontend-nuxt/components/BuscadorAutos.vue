<!-- components/BuscadorAutos.vue -->
<template>

  <section class="relative py-20 px-4">
    <!-- Fondo decorativo -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-orange-500/5"></div>
    
    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Título principal -->
      <div class="text-center mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          Encuentra tu
          <span class="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            próximo auto
          </span>
        </h1>
      </div>

      <!-- Tarjetas de servicios -->
      <div class="max-w-4xl mx-auto mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Tarjeta de Remates -->
          <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div class="flex items-center space-x-3 mb-3">
              <div class="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 002 2h2a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white">Remates</h3>
            </div>
            <p class="text-slate-200 text-sm">Remata tu auto en vivo y ten dinero en 2 horas</p>
          </div>

          <!-- Tarjeta de Peritaje -->
          <NuxtLink to="/perito/peritajes" class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 block">
            <div class="flex items-center space-x-3 mb-3">
              <div class="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white">Peritaje</h3>
            </div>
            <p class="text-slate-200 text-sm">Revisa tu auto por expertos, que no sea robado o chocado con cada detalle</p>
          </NuxtLink>
        </div>
      </div>

      <!-- 🔎 Buscador principal -->
      <div class="max-w-6xl mx-auto">
        <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-blue-500/10 border border-white/20 overflow-hidden">
          <!-- Filtros principales -->
          <div class="grid grid-cols-1 md:grid-cols-5 gap-4 p-8">
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Categoría</label>
              <select v-model="categoria" class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm">
                <option value="">Todas las categorías</option>
                <option value="auto">Auto</option>
                <option value="suv">SUV</option>
                <option value="camioneta">Camioneta</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Marca</label>
              <select v-model="marcaId" class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm">
                <option value="">Todas las marcas</option>
                <option v-for="m in marcas" :key="m.id" :value="m.id">{{ m.nombre }}</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Modelo</label>
              <input v-model="modelo" type="text" placeholder="Ej: Corolla, Civic..." class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm" />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Palabras clave</label>
              <input v-model="palabrasClave" type="text" placeholder="Ej: automático, 4x4..." class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/80 backdrop-blur-sm" />
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">&nbsp;</label>
                      <button
          @click="buscarVehiculos"
          class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
                <span class="flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <span>Buscar</span>
                </span>
              </button>
            </div>
          </div>

          <!-- Filtros adicionales -->
          <div class="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6">
            <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
              <div class="space-y-2">
                <label class="text-xs font-medium text-slate-300">Región</label>
                <select v-model="regionId" class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm">
                  <option value="">Todas las regiones</option>
                  <option v-for="r in regiones" :key="r.id" :value="r.id">{{ r.nombre }}</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-medium text-slate-300">Año mínimo</label>
                <select v-model="anioMin" class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm">
                  <option value="">Cualquier año</option>
                  <option v-for="anio in 40" :key="anio" :value="1985 + anio">{{ 1985 + anio }}</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-medium text-slate-300">Año máximo</label>
                <select v-model="anioMax" class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm">
                  <option value="">Cualquier año</option>
                  <option v-for="anio in 40" :key="anio" :value="1985 + anio">{{ 1985 + anio }}</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-medium text-slate-300">Precio mínimo</label>
                <select v-model="precioMin" class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm">
                  <option value="">Cualquier precio</option>
                  <option :value="1000000">$1.000.000</option>
                  <option :value="5000000">$5.000.000</option>
                  <option :value="10000000">$10.000.000</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-medium text-slate-300">Precio máximo</label>
                <select v-model="precioMax" class="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm">
                  <option value="">Cualquier precio</option>
                  <option :value="10000000">$10.000.000</option>
                  <option :value="20000000">$20.000.000</option>
                  <option :value="50000000">$50.000.000</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="text-xs font-medium text-slate-300">&nbsp;</label>
                <button class="w-full px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium rounded-lg transition-all duration-200 text-sm transform hover:scale-105">
                  Filtros
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { catalogoService } from '~/services/catalogoService'
import { vehiculoService } from '~/services/vehiculoService'

// Filtros principales (van en el slug)
const regionId = ref('')
const comunaId = ref('')
const marcaId = ref('')
const modelo = ref('')
const anio = ref('')

// Filtros secundarios (van como query params)
const categoria = ref('')
const palabrasClave = ref('')
const anioMin = ref('')
const anioMax = ref('')
const precioMin = ref('')
const precioMax = ref('')

// Catálogos
const regiones = ref([])
const comunas = ref([])
const marcas = ref([])

// Resultados
const resultados = ref([])

// Router
const router = useRouter()

// Slugify
function slugify(texto) {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Cargar catálogos al montar
onMounted(async () => {
  regiones.value = await catalogoService.getRegiones()
  marcas.value = await catalogoService.getMarcas()
})

// Cargar comunas cuando se seleccione una región
watch(regionId, async (nuevoId) => {
  if (nuevoId) {
    comunas.value = await catalogoService.getComunasPorRegion(nuevoId)
  } else {
    comunas.value = []
  }
})

// Buscar vehículos y redirigir con URL amigable
async function buscarVehiculos() {
  const slug = []

  // Región y comuna
  const region = regiones.value.find(r => r.id === regionId.value)
  if (region) slug.push(slugify(region.nombre))

  const comuna = comunas.value.find(c => c.id === comunaId.value)
  if (comuna) slug.push(slugify(comuna.nombre))

  // Marca y modelo
  const marca = marcas.value.find(m => m.id === marcaId.value)
  if (marca) slug.push(slugify(marca.nombre))

  if (modelo.value) slug.push(slugify(modelo.value))
  if (anio.value) slug.push(anio.value)

  // Query params
  const query = {
    categoria: categoria.value || undefined,
    palabras: palabrasClave.value || undefined,
    desde: anioMin.value || undefined,
    hasta: anioMax.value || undefined,
    min: precioMin.value || undefined,
    max: precioMax.value || undefined
  }

  try {
    await router.push({
      path: `/vehiculos/${slug.join('/')}`,
      query
    })
  } catch (error) {
    console.error('❌ Error al redirigir a la ruta de búsqueda:', error)
  }
}
</script>
