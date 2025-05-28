<template>
    <div class="max-w-6xl mx-auto p-4 md:p-8 text-white">
      <!-- Galería de imágenes -->
      <div v-if="vehiculo.imagenes?.length" class="mb-6">
        <div class="w-full aspect-video bg-gray-800 rounded overflow-hidden">
          <img :src="vehiculo.imagenes[0]" alt="Imagen principal" class="w-full h-full object-cover" />
        </div>
        <div class="flex gap-2 mt-2 overflow-x-auto">
          <img
            v-for="(img, i) in vehiculo.imagenes"
            :key="i"
            :src="img"
            class="w-24 h-16 object-cover rounded border"
            :alt="`Imagen ${i + 1}`"
          />
        </div>
      </div>
  
      <!-- Título y resumen -->
      <div class="mb-4">
        <h1 class="text-2xl font-bold capitalize">
          {{ vehiculo.marca?.nombre }} {{ vehiculo.modelo?.nombre }} {{ vehiculo.anio }}
        </h1>
        <p class="text-lg text-gray-300 mt-1">{{ vehiculo.version }}</p>
      </div>
  
      <!-- Resumen clave -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="text-sm bg-gray-800 p-4 rounded shadow">
          <p><strong>Precio:</strong> ${{ vehiculo.precio.toLocaleString() }}</p>
          <p><strong>Kilómetros:</strong> {{ vehiculo.kilometros.toLocaleString() }} km</p>
          <p><strong>Ubicación:</strong> {{ vehiculo.region?.nombre }} / {{ vehiculo.comuna?.nombre }}</p>
          <p><strong>Publicado:</strong> {{ new Date(vehiculo.createdAt).toLocaleDateString() }}</p>
          <p><strong>Estado:</strong> <span class="text-green-400 font-semibold">ACTIVO</span></p>
        </div>
  
        <!-- Botones -->
        <div class="flex flex-col gap-3 justify-center">
          <a
            :href="`https://wa.me/${telefonoContacto}?text=Estoy%20interesado%20en%20el%20vehículo%20${vehiculo.titulo}`"
            target="_blank"
            class="bg-green-600 hover:bg-green-700 text-white text-center px-4 py-2 rounded shadow"
          >
            Contactar por WhatsApp
          </a>
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow">
            Guardar en Favoritos
          </button>
        </div>
      </div>
  
      <!-- Especificaciones técnicas -->
      <div class="mb-6 bg-gray-800 p-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-3">Especificaciones</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <li><strong>Marca:</strong> {{ vehiculo.marca?.nombre }}</li>
          <li><strong>Modelo:</strong> {{ vehiculo.modelo?.nombre }}</li>
          <li><strong>Año:</strong> {{ vehiculo.anio }}</li>
          <li><strong>Versión:</strong> {{ vehiculo.version }}</li>
          <li><strong>Transmisión:</strong> {{ vehiculo.transmision?.nombre }}</li>
          <li><strong>Combustible:</strong> {{ vehiculo.combustible?.nombre }}</li>
          <li><strong>Color exterior:</strong> {{ vehiculo.colorExterior }}</li>
          <li><strong>Color interior:</strong> {{ vehiculo.colorInterior }}</li>
        </ul>
      </div>
  
      <!-- Descripción -->
      <div class="mb-6 bg-gray-800 p-4 rounded shadow">
        <h2 class="text-lg font-semibold mb-3">Descripción</h2>
        <p class="text-sm text-gray-300 whitespace-pre-line">{{ vehiculo.descripcion }}</p>
      </div>
  
      <!-- Recomendaciones -->
      <div v-if="vehiculosSimilares.length" class="mb-6">
        <h2 class="text-lg font-semibold mb-3">Vehículos similares</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="v in vehiculosSimilares" :key="v.id" class="bg-gray-700 p-4 rounded">
            <router-link :to="`/${slug(v.region.nombre)}/${slug(v.marca.nombre)}/${v.anio}/${slug(v.modelo.nombre)}-${v.id}`">
              <h3 class="font-semibold">{{ v.titulo }}</h3>
              <p class="text-sm text-gray-300">${{ v.precio.toLocaleString() }}</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import api from '@/axios'
  
  const route = useRoute()
  const vehiculo = ref(null)
  const vehiculosSimilares = ref([])
  const telefonoContacto = '56912345678' // 📞 Cambia por número real o del dueño
  
  function slug(texto) {
    return texto
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
  
  onMounted(async () => {
    const id = route.params.id
    const res = await api.get(`/vehiculos/${id}`)
    vehiculo.value = res.data
  
    // Similares por marca y año (puedes ajustar lógica)
    const similares = await api.get(`/vehiculos?marcaId=${res.data.marcaId}&anio=${res.data.anio}`)
    vehiculosSimilares.value = similares.data.filter(v => v.id !== res.data.id)
  })
  </script>
  