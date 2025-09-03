<template>
  <div class="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-8">
    <!-- 🔍 Si es listado -->
    <div v-if="!esDetalle">
      <h1 class="text-2xl font-bold mb-6">Vehículos disponibles</h1>

      <!-- ✅ Filtros -->
      <FiltrosVehiculos
        v-model="filtros"
        :marcas="marcas"
        :regiones="regiones"
        @buscar="buscarConFiltros"
      />

      <!-- Mensaje si no hay resultados -->
      <div v-if="vehiculos.length === 0" class="text-gray-500 text-center mt-6">
        <p>No se encontraron resultados para esta búsqueda.</p>
        <p class="text-sm mt-1">Prueba cambiando la región, marca o año.</p>
      </div>

      <!-- Resultados -->
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div
          v-for="v in vehiculos"
          :key="v.id"
          class="bg-white rounded-lg shadow p-4"
        >
          <img
            :src="v.imagenes?.[0] || 'https://via.placeholder.com/400x300?text=Sin+imagen'"
            class="w-full h-40 object-cover rounded mb-3"
          />
          <h2 class="text-lg font-semibold">{{ v.titulo }}</h2>
          <p class="text-sm text-gray-600">
            {{ v.marca?.nombre }} {{ v.modelo?.nombre }} ({{ v.anio }})
          </p>
          <p class="font-bold text-blue-600 text-lg mt-2">
            ${{ Number(v.precio).toLocaleString() }}
          </p>
          <NuxtLink
            :to="generarRutaDetalle(v)"
            class="inline-block mt-3 text-sm text-blue-600 hover:underline"
          >
            Ver detalles →
          </NuxtLink>
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
import FiltrosVehiculos from '~/components/FiltrosVehiculos.vue'
import { catalogoService } from '~/services/catalogoService'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug || []

const vehiculos = ref([])
const detalle = ref(null)
const cargando = ref(true)

// Filtros reactivos conectados a FiltrosVehiculos.vue
const filtros = ref({
  marcaId: '',
  modelo: '',
  regionId: '',
  anioMin: '',
  anioMax: '',
  precioMin: '',
  precioMax: ''
})

// Catálogos usados por el componente de filtros
const marcas = ref([])
const regiones = ref([])

// Detectar si es vista de detalle (último segmento es un ID numérico)
const esDetalle = computed(() => {
  const lastSegment = slug[slug.length - 1]
  return slug.length >= 6 && /^\d+$/.test(lastSegment)
})

const { $api } = useNuxtApp()

onMounted(async () => {
  // Cargar catálogos para el componente de filtros
  marcas.value = await catalogoService.getMarcas()
  regiones.value = await catalogoService.getRegiones()

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
      if (value) query[key] = value
    })

    const res = await $api.get(path, { params: query })
    vehiculos.value = res.data
  } catch (error) {
    console.error('❌ Error buscando vehículos:', error)
  } finally {
    cargando.value = false
  }
}


// Función que el componente de filtros puede invocar para aplicar cambios
function aplicarFiltros() {
  const query = {}
  Object.entries(filtros.value).forEach(([key, value]) => {
    if (value) query[key] = value
  })

  router.push({ path: route.path, query })
  buscarConFiltros()
}


// Escucha reactiva para volver a buscar si los filtros cambian
watch(() => route.query, buscarConFiltros)

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
