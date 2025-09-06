<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold mb-6">Remates de Vehículos en Vivo</h1>
        <p class="text-xl mb-8 max-w-3xl mx-auto">
          Participa en emocionantes subastas de vehículos en tiempo real. Encuentra tu próximo auto al mejor precio o remata el tuyo en minutos.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/remates/proximos"
            class="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            Ver Próximos Remates
          </NuxtLink>
          <NuxtLink 
            to="/remates/rematar-mi-auto"
            class="inline-flex items-center px-8 py-4 bg-orange-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Rematar Mi Auto
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-16">
      <!-- Estadísticas -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="text-center">
          <div class="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-slate-800 mb-2">{{ stats.totalRemates }}</h3>
          <p class="text-slate-600">Remates Realizados</p>
        </div>
        <div class="text-center">
          <div class="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-slate-800 mb-2">{{ stats.participantes }}</h3>
          <p class="text-slate-600">Participantes Activos</p>
        </div>
        <div class="text-center">
          <div class="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-3xl font-bold text-slate-800 mb-2">{{ stats.promedio }}%</h3>
          <p class="text-slate-600">Mejor Precio vs Mercado</p>
        </div>
      </div>

      <!-- Próximos Remates Destacados -->
      <div class="mb-16">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-3xl font-bold text-slate-800">Próximos Remates Destacados</h2>
          <NuxtLink 
            to="/remates/proximos"
            class="text-orange-600 hover:text-orange-700 font-semibold"
          >
            Ver todos →
          </NuxtLink>
        </div>

        <!-- Loading State -->
        <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="n in 3" :key="n" class="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
            <div class="w-full h-48 bg-slate-200 rounded-xl mb-4"></div>
            <div class="h-6 bg-slate-200 rounded mb-2"></div>
            <div class="h-4 bg-slate-200 rounded mb-4 w-2/3"></div>
            <div class="h-8 bg-slate-200 rounded"></div>
          </div>
        </div>

        <!-- Remates Grid -->
        <div v-else-if="rematesDestacados.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="remate in rematesDestacados" 
            :key="remate.id"
            class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <!-- Imagen del vehículo -->
            <div class="relative h-48 bg-gradient-to-r from-slate-200 to-slate-300">
              <img 
                v-if="remate.vehiculo?.imagenes?.[0]" 
                :src="remate.vehiculo.imagenes[0]" 
                :alt="`${remate.vehiculo.marca} ${remate.vehiculo.modelo}`"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full">
                  {{ tiempoParaRemate(remate.fechaHoraInicio) }}
                </span>
              </div>
            </div>

            <!-- Información del remate -->
            <div class="p-6">
              <h3 class="text-lg font-bold text-slate-800 mb-2">
                {{ remate.vehiculo?.marca }} {{ remate.vehiculo?.modelo }} {{ remate.vehiculo?.ano }}
              </h3>
              <p class="text-slate-600 text-sm mb-4">{{ remate.descripcion || 'Remate sin descripción' }}</p>
              
              <div class="flex items-center justify-between mb-4">
                <div>
                  <p class="text-xs text-slate-500">Precio Base</p>
                  <p class="text-lg font-bold text-green-600">${{ remate.precioBase?.toLocaleString() || 'Por definir' }}</p>
                </div>
                <div class="text-right">
                  <p class="text-xs text-slate-500">Fecha</p>
                  <p class="text-sm font-semibold">{{ formatFecha(remate.fechaHoraInicio) }}</p>
                </div>
              </div>

              <NuxtLink 
                :to="`/remates/${remate.slug || remate.id}`"
                class="block w-full text-center py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-200"
              >
                Ver Detalles
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-16">
          <div class="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-slate-700 mb-2">No hay remates programados</h3>
          <p class="text-slate-500 mb-6">Regresa pronto para ver nuestros próximos remates</p>
        </div>
      </div>

      <!-- Cómo Funciona -->
      <div class="bg-white rounded-2xl shadow-xl p-8 mb-16">
        <h2 class="text-3xl font-bold text-slate-800 text-center mb-12">¿Cómo Funciona?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-white">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Regístrate</h3>
            <p class="text-slate-600">Crea tu cuenta como cliente para poder participar en nuestros remates en vivo</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-white">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Inscríbete</h3>
            <p class="text-slate-600">Selecciona los remates que te interesen e inscríbete antes de que inicien</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold text-white">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-3">Puja en Vivo</h3>
            <p class="text-slate-600">Participa en tiempo real y puja por el vehículo que más te guste</p>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center">
        <h2 class="text-3xl font-bold text-slate-800 mb-6">¿Tienes un auto para rematar?</h2>
        <p class="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Obtén el mejor precio por tu vehículo en nuestros remates en vivo. El proceso es rápido, seguro y transparente.
        </p>
        <NuxtLink 
          to="/remates/rematar-mi-auto"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <svg class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Rematar Mi Auto Ahora
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Meta tags para SEO
useHead({
  title: 'Remates de Vehículos en Vivo | Autoventas360 - Subastas de Autos Online',
  meta: [
    {
      name: 'description',
      content: 'Participa en emocionantes remates de vehículos en tiempo real. Encuentra tu próximo auto al mejor precio o remata el tuyo en minutos. Subastas seguras y transparentes.'
    },
    {
      name: 'keywords',
      content: 'remates autos, subastas vehiculos, remates en vivo, vender auto subasta, comprar auto remate, subastas online chile'
    },
    {
      property: 'og:title',
      content: 'Remates de Vehículos en Vivo | Autoventas360'
    },
    {
      property: 'og:description',
      content: 'Participa en emocionantes remates de vehículos en tiempo real. Encuentra tu próximo auto al mejor precio.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

// Estado
const loading = ref(true)
const rematesDestacados = ref([])
const stats = ref({
  totalRemates: 247,
  participantes: 1563,
  promedio: 15
})

// Funciones
const tiempoParaRemate = (fecha) => {
  const ahora = new Date()
  const fechaRemate = new Date(fecha)
  const diferencia = fechaRemate - ahora
  
  if (diferencia < 0) return 'En curso'
  
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  
  if (dias > 0) return `${dias}d ${horas}h`
  if (horas > 0) return `${horas}h`
  return 'Próximamente'
}

const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// Store
const remateStore = useRemateStore()

// Cargar datos
const cargarRematesDestacados = async () => {
  try {
    loading.value = true
    rematesDestacados.value = await remateStore.fetchRematesDestacados()
  } catch (error) {
    console.error('Error cargando remates:', error)
    rematesDestacados.value = []
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  cargarRematesDestacados()
})
</script>