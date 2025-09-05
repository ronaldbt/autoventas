<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <div v-if="cargando" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p class="text-slate-300">Cargando vehículo...</p>
      </div>
    </div>

    <div v-else-if="vehiculo" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Galería de imágenes -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <!-- Imagen principal -->
        <div class="lg:col-span-2">
          <div class="relative bg-white rounded-xl overflow-hidden shadow-lg">
            <img
              :src="imagenActual"
              :alt="vehiculo.titulo"
              class="w-full h-96 lg:h-[500px] object-cover"
            />
            <!-- Controles de imagen -->
            <div class="absolute top-4 left-4 flex gap-2">
              <button class="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition">
                <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
              <button class="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition">
                <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                </svg>
              </button>
              <button class="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition">
                <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </button>
            </div>
            <button class="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-slate-700 hover:bg-white transition">
              Ver todas las fotos
            </button>
          </div>
        </div>

        <!-- Miniaturas -->
        <div class="space-y-3">
          <div
            v-for="(imagen, index) in vehiculo.imagenes"
            :key="index"
            @click="imagenActual = imagen"
            class="relative bg-white rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-orange-500 transition"
            :class="{ 'ring-2 ring-orange-500': imagen === imagenActual }"
          >
            <img
              :src="imagen"
              :alt="`Imagen ${index + 1}`"
              class="w-full h-24 object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Información principal -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Columna izquierda -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Título y ubicación -->
          <div class="bg-white text-slate-900 rounded-xl p-6 shadow-sm">
            <h1 class="text-3xl font-bold mb-2">{{ vehiculo.titulo?.toUpperCase() }}</h1>
            <div class="flex items-center gap-4 text-sm text-slate-600 mb-4">
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>4.8 (2.436 reviews)</span>
              </div>
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{{ vehiculo.comuna?.nombre }}, {{ vehiculo.region?.nombre }}</span>
              </div>
            </div>
          </div>

          <!-- Especificaciones -->
          <div class="bg-white text-slate-900 rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold mb-6">Especificaciones</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-500">Asientos</p>
                  <p class="font-semibold">5 asientos</p>
                </div>
              </div>

              <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-500">Transmisión</p>
                  <p class="font-semibold">{{ vehiculo.transmision?.nombre || 'Automática' }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-500">Combustible</p>
                  <p class="font-semibold">{{ vehiculo.combustible?.nombre || 'Gasolina' }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-500">Marca</p>
                  <p class="font-semibold">{{ vehiculo.marca?.nombre }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-500">Tipo</p>
                  <p class="font-semibold">{{ vehiculo.carroceria?.nombre || vehiculo.version }}</p>
                </div>
              </div>

              <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-slate-500">Kilómetros</p>
                  <p class="font-semibold">{{ Number(vehiculo.kilometros || 0).toLocaleString() }} km</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Descripción -->
          <div class="bg-white text-slate-900 rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold mb-4">Descripción</h2>
            <p class="text-slate-700 leading-relaxed">
              {{ vehiculo.descripcion || 'Este vehículo está en excelente estado y listo para usar. Contacta al vendedor para más información.' }}
            </p>
          </div>

          <!-- Reseñas -->
          <div class="bg-white text-slate-900 rounded-xl p-6 shadow-sm">
            <h2 class="text-xl font-bold mb-4">Reseñas de clientes (24 reseñas)</h2>
            <div class="space-y-4">
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center">
                  <span class="text-sm font-semibold text-slate-600">GH</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center gap-2 mb-1">
                    <span class="font-semibold">Guy Hawkins</span>
                    <div class="flex text-yellow-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <p class="text-sm text-slate-600">Excelente vehículo, muy bien cuidado y en perfecto estado...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Columna derecha -->
        <div class="space-y-6">
          <!-- Precio y contacto -->
          <div class="bg-white text-slate-900 rounded-xl p-6 shadow-sm sticky top-6">
            <div class="mb-6">
              <p class="text-sm text-slate-500 mb-1">Precio</p>
              <p class="text-3xl font-bold text-orange-600">${{ Number(vehiculo.precio || 0).toLocaleString() }}</p>
            </div>
            <button class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Contactar
            </button>
          </div>

          <!-- Vendedor -->
          <div class="bg-white text-slate-900 rounded-xl p-6 shadow-sm">
            <h3 class="text-lg font-bold mb-4">Vendedor</h3>
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                <span class="text-lg font-semibold text-slate-600">
                  {{ vehiculo.vendedor?.nombre?.charAt(0)?.toUpperCase() || 'V' }}
                </span>
              </div>
              <div class="flex-1">
                <p class="font-semibold">{{ vehiculo.vendedor?.nombre || 'Vendedor' }}</p>
                <div class="flex items-center gap-1 mt-1">
                  <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Verificado
                  </span>
                </div>
              </div>
              <button class="p-2 text-slate-400 hover:text-slate-600">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <p class="text-slate-300 text-lg">Vehículo no encontrado</p>
        <NuxtLink to="/vehiculos" class="text-orange-500 hover:text-orange-600 mt-2 inline-block">
          ← Volver al listado
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const vehiculo = ref(null)
const cargando = ref(true)
const imagenActual = ref('')

const { $api } = useNuxtApp()

onMounted(async () => {
  try {
    const id = route.params.id
    const res = await $api.get(`/vehiculos/${id}`)
    vehiculo.value = res.data
    imagenActual.value = vehiculo.value.imagenes?.[0] || 'https://via.placeholder.com/800x500?text=Sin+imagen'
  } catch (error) {
    console.error('❌ Error cargando vehículo:', error)
  } finally {
    cargando.value = false
  }
})
</script>







