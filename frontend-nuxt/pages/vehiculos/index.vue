<template>
    <div class="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-8">
      <h1 class="text-2xl font-bold mb-4">Vehículos disponibles</h1>
  
      <div v-if="cargando" class="text-center text-gray-500">⌛ Cargando vehículos...</div>
  
      <div v-else-if="vehiculos.length === 0" class="text-center text-gray-500">
        <p>No se encontraron vehículos disponibles.</p>
      </div>
  
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="v in vehiculos" :key="v.id" class="bg-white rounded-lg shadow p-4">
          <img
            :src="v.imagenes?.[0] || 'https://via.placeholder.com/400x300?text=Sin+imagen'"
            class="w-full h-40 object-cover rounded mb-3"
          />
          <h2 class="text-lg font-semibold">{{ v.titulo }}</h2>
          <p class="text-sm text-gray-600">{{ v.marca?.nombre }} {{ v.modelo?.nombre }} ({{ v.anio }})</p>
          <p class="font-bold text-blue-600 text-lg mt-2">${{ Number(v.precio).toLocaleString() }}</p>
          <NuxtLink
            :to="generarRutaDetalle(v)"
            class="inline-block mt-3 text-sm text-blue-600 hover:underline"
          >
            Ver detalles →
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const vehiculos = ref([])
  const cargando = ref(true)
  
  const { $api } = useNuxtApp()
  
  onMounted(async () => {
    try {
      const res = await $api.get('/vehiculos')
      vehiculos.value = res.data
    } catch (err) {
      console.error('❌ Error cargando vehículos:', err)
    } finally {
      cargando.value = false
    }
  })
  
  function generarRutaDetalle(v) {
    function slugify(texto) {
      return texto
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
    }
  
    return `/vehiculos/${slugify(v.region?.nombre)}/${slugify(v.comuna?.nombre)}/${slugify(v.marca?.nombre)}/${slugify(v.modelo?.nombre)}/${v.anio}/${v.id}`
  }
  </script>
  