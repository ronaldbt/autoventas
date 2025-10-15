<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden">
    <!-- Imagen del vehículo -->
    <div class="relative">
      <img
        :src="vehiculo.imagenes?.[0] || 'https://via.placeholder.com/400x250?text=Sin+imagen'"
        :alt="vehiculo.titulo"
        class="w-full h-48 object-cover"
      />
      
      <!-- Badge de fecha -->
      <div class="absolute top-2 left-2 bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
        {{ formatearFecha(vehiculo.createdAt) }}
      </div>
      
      <!-- Botón de favorito -->
      <button 
        @click.stop="toggleFavorito"
        class="absolute top-2 right-2 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
      >
        <svg 
          class="w-4 h-4"
          :class="esFavorito ? 'text-red-500 fill-current' : 'text-gray-400'"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      </button>
    </div>

    <!-- Contenido de la card -->
    <div class="p-4">
      <!-- Título del vehículo -->
      <h3 class="font-semibold text-gray-900 mb-1 line-clamp-1">
        {{ vehiculo.titulo || `${vehiculo.marca?.nombre} ${vehiculo.modelo?.nombre}` }}
      </h3>
      
      <!-- Información básica -->
      <p class="text-sm text-gray-600 mb-2">
        {{ vehiculo.marca?.nombre }} {{ vehiculo.modelo?.nombre }} ({{ vehiculo.anio }})
      </p>

      <!-- Detalles técnicos -->
      <div class="flex items-center space-x-4 text-xs text-gray-500 mb-3">
        <div class="flex items-center">
          <span class="font-medium">{{ vehiculo.kilometros || '0' }} km</span>
        </div>
        <div class="flex items-center">
          <span>{{ vehiculo.ubicacion || vehiculo.comuna?.nombre || 'N/A' }}</span>
        </div>
      </div>

      <!-- Características adicionales -->
      <div class="flex items-center space-x-4 text-xs text-gray-500 mb-3">
        <div class="flex items-center">
          <span>{{ vehiculo.transmision?.nombre || 'N/A' }}</span>
        </div>
        <div class="flex items-center">
          <span>{{ vehiculo.combustible?.nombre || 'N/A' }}</span>
        </div>
      </div>

      <!-- Precio -->
      <div class="flex items-center justify-between">
        <div>
          <p class="text-2xl font-bold text-red-600">
            {{ formatearPrecio(vehiculo.precio) }}
          </p>
        </div>
        
        <!-- Botón de más detalles -->
        <button 
          @click.stop="$emit('click')"
          class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Ver detalles
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  vehiculo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['click', 'toggle-favorito'])

const esFavorito = ref(false)

function toggleFavorito() {
  esFavorito.value = !esFavorito.value
  emit('toggle-favorito', props.vehiculo.id, esFavorito.value)
}

function formatearPrecio(precio) {
  if (!precio) return '$0'
  return `$${Number(precio).toLocaleString('es-CL')}`
}

function formatearFecha(fecha) {
  if (!fecha) return 'Hoy'
  
  const fechaVehiculo = new Date(fecha)
  const hoy = new Date()
  const ayer = new Date(hoy)
  ayer.setDate(hoy.getDate() - 1)
  
  if (fechaVehiculo.toDateString() === hoy.toDateString()) {
    return `Hoy, ${fechaVehiculo.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}`
  } else if (fechaVehiculo.toDateString() === ayer.toDateString()) {
    return `Ayer, ${fechaVehiculo.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}`
  } else {
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    return `${diasSemana[fechaVehiculo.getDay()]}, ${fechaVehiculo.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit' })}`
  }
}
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>