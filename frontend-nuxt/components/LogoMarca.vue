<template>
  <div class="relative">
    <!-- Logo con lazy loading -->
    <img
      v-if="!error && !loading"
      :src="logoUrl"
      :alt="`Logo de ${nombreMarca}`"
      :class="clasesImagen"
      @load="onLoad"
      @error="onError"
      loading="lazy"
    />
    
    <!-- Placeholder mientras carga -->
    <div
      v-if="loading"
      :class="clasesPlaceholder"
    >
      <div class="animate-pulse bg-gray-300 rounded-full w-full h-full"></div>
    </div>
    
    <!-- Placeholder en caso de error -->
    <div
      v-if="error"
      :class="clasesPlaceholder"
    >
      <span class="text-white font-bold text-lg">
        {{ inicial }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { logoService } from '../utils/logoService'

const props = defineProps({
  nombreMarca: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String,
    default: null
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg, xl
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  className: {
    type: String,
    default: ''
  }
})

const loading = ref(true)
const error = ref(false)

// Computed para la URL del logo
const logoUrl = computed(() => {
  return logoService.obtenerLogo(props.nombreMarca, props.logoUrl)
})

// Computed para la inicial
const inicial = computed(() => {
  return props.nombreMarca.charAt(0).toUpperCase()
})

// Computed para las clases de la imagen
const clasesImagen = computed(() => {
  const baseClasses = 'object-contain transition-opacity duration-300'
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }
  
  return `${baseClasses} ${sizeClasses[props.size]} ${props.className}`
})

// Computed para las clases del placeholder
const clasesPlaceholder = computed(() => {
  const baseClasses = 'flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-400 to-slate-600'
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }
  
  return `${baseClasses} ${sizeClasses[props.size]} ${props.className}`
})

// Eventos de la imagen
const onLoad = () => {
  loading.value = false
  error.value = false
}

const onError = () => {
  loading.value = false
  error.value = true
}

// Inicializar
onMounted(() => {
  // Si es un placeholder, no mostrar loading
  if (logoUrl.value.includes('via.placeholder.com')) {
    loading.value = false
    error.value = true
  }
})
</script>




