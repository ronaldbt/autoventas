<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer p-4">
    <div class="flex gap-4">
      <!-- Imagen del vehículo -->
      <div class="relative flex-shrink-0">
        <img
          :src="vehiculo.imagenes?.[0] || 'https://via.placeholder.com/200x150?text=Sin+imagen'"
          :alt="vehiculo.titulo"
          class="w-32 h-24 object-cover rounded-lg"
        />
        
        <!-- Badge de fecha -->
        <div class="absolute top-1 left-1 bg-gray-800 bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
          {{ formatearFecha(vehiculo.createdAt) }}
        </div>
      </div>

      <!-- Contenido principal -->
      <div class="flex-1 min-w-0">
        <div class="flex items-start justify-between">
          <!-- Información del vehículo -->
          <div class="flex-1 min-w-0">
            <!-- Título -->
            <h3 class="font-semibold text-gray-900 mb-1 truncate">
              {{ vehiculo.titulo || `${vehiculo.marca?.nombre} ${vehiculo.modelo?.nombre}` }}
            </h3>
            
            <!-- Información básica -->
            <p class="text-sm text-gray-600 mb-2">
              {{ vehiculo.marca?.nombre }} {{ vehiculo.modelo?.nombre }} ({{ vehiculo.anio }})
            </p>

            <!-- Detalles técnicos en una línea -->
            <div class="flex items-center space-x-4 text-sm text-gray-500">
              <span><strong>Kilometraje:</strong> {{ vehiculo.kilometros || '0' }} km</span>
              <span><strong>Ubicación:</strong> {{ vehiculo.ubicacion || vehiculo.comuna?.nombre || 'N/A' }}</span>
              <span><strong>Motor:</strong> {{ vehiculo.motor || vehiculo.combustible?.nombre || 'N/A' }}</span>
              <span><strong>Transmisión:</strong> {{ vehiculo.transmision?.nombre || 'N/A' }}</span>
            </div>
          </div>

          <!-- Precio y acciones -->
          <div class="flex flex-col items-end space-y-2 ml-4">
            <!-- Botón de favorito -->
            <button 
              @click.stop="toggleFavorito"
              class="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
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

            <!-- Precio -->
            <div class="text-right">
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