<template>
    <div class="bg-white text-black rounded-xl shadow-md overflow-hidden">
      <!-- 🔎 Filtros principales -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3 p-4">
        <!-- Carrocería desde BD -->
        <div>
          <label class="block text-sm text-slate-600 mb-1">Carrocería</label>
          <select v-model="filtros.carroceriaId" class="border p-2 rounded-md w-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all">
            <option value="" disabled>Selecciona carrocería</option>
            <option v-if="loading.carrocerias && (!carrocerias || carrocerias.length === 0)" disabled>Cargando...</option>
            <option v-for="c in carrocerias" :key="c.id" :value="c.id">{{ c.nombre }}</option>
          </select>
        </div>
  
        <!-- Select de Marca con búsqueda -->
        <div class="relative">
          <select 
            v-model="filtros.marcaId" 
            class="border p-2 rounded-md w-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all appearance-none bg-white"
            @focus="mostrarMarcas = true"
            @blur="setTimeout(() => mostrarMarcas = false, 200)"
          >
            <option value="">{{ marcaSeleccionada || 'Seleccionar marca' }}</option>
          </select>
          
          <!-- Dropdown personalizado para marcas -->
          <div 
            v-if="mostrarMarcas" 
            class="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto"
          >
            <div class="p-2 border-b">
              <input
                v-model="busquedaMarca"
                type="text"
                placeholder="Buscar marca..."
                class="w-full p-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                @click.stop
              />
            </div>
            <div class="max-h-48 overflow-y-auto">
              <button
                v-for="marca in marcasFiltradas"
                :key="marca.id"
                @click="seleccionarMarca(marca)"
                class="w-full text-left px-3 py-2 hover:bg-orange-50 text-sm flex items-center justify-between"
                :class="{ 'bg-orange-100 text-orange-700': filtros.marcaId === marca.id }"
              >
                <span>{{ marca.nombre }}</span>
                <span v-if="filtros.marcaId === marca.id" class="text-orange-600">✓</span>
              </button>
            </div>
          </div>
          
          <!-- Icono de flecha -->
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
  
        <input
          v-model="filtros.modelo"
          type="text"
          placeholder="Modelo"
          class="border p-2 rounded-md w-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
        />
  
        <input
          v-model="filtros.palabrasClave"
          type="text"
          placeholder="Palabras clave"
          class="border p-2 rounded-md w-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
        />
  
        <button
          @click="emitirBusqueda"
          class="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2 px-4 rounded-md transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span class="flex items-center justify-center space-x-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            <span>Buscar</span>
          </span>
        </button>
      </div>
  
      <!-- 🎯 Filtros adicionales -->
      <div class="grid grid-cols-2 md:grid-cols-6 gap-2 bg-black text-white text-sm p-4 rounded-b-xl">
        <select v-model="filtros.regionId" class="bg-black text-white border border-gray-700 p-1 rounded-md">
          <option value="">Región</option>
          <option v-for="r in regiones" :key="r.id" :value="r.id">{{ r.nombre }}</option>
        </select>
  
        <select v-model="filtros.anioMin" class="bg-black text-white border border-gray-700 p-1 rounded-md">
          <option value="">Año desde</option>
          <option v-for="anio in 40" :key="anio" :value="1985 + anio">{{ 1985 + anio }}</option>
        </select>
  
        <select v-model="filtros.anioMax" class="bg-black text-white border border-gray-700 p-1 rounded-md">
          <option value="">Año hasta</option>
          <option v-for="anio in 40" :key="anio" :value="1985 + anio">{{ 1985 + anio }}</option>
        </select>
  
        <select v-model="filtros.precioMin" class="bg-black text-white border border-gray-700 p-1 rounded-md">
          <option value="">Precio min</option>
          <option :value="1000000">$1.000.000</option>
          <option :value="5000000">$5.000.000</option>
          <option :value="10000000">$10.000.000</option>
        </select>
  
        <select v-model="filtros.precioMax" class="bg-black text-white border border-gray-700 p-1 rounded-md">
          <option value="">Precio max</option>
          <option :value="10000000">$10.000.000</option>
          <option :value="20000000">$20.000.000</option>
          <option :value="50000000">$50.000.000</option>
        </select>
  
        <!-- Espacio vacío para alinear -->
        <div></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, computed, ref, watchEffect, onMounted } from 'vue'
  import { useCatalogo } from '../composables/useCatalogo'
  
  const props = defineProps({
    modelValue: {
      type: Object,
      default: () => ({})
    }
  })
  
  const emit = defineEmits(['update:modelValue', 'buscar'])
  
  // Usar el composable de catálogo
  const { 
    marcas,
    regiones,
    carrocerias,
    cargarMarcas,
    cargarRegiones,
    cargarCarrocerias,
    loading 
  } = useCatalogo()
  
  // Estado local
  const filtros = reactive({ ...props.modelValue })
  const mostrarMarcas = ref(false)
  const busquedaMarca = ref('')
  
  // Computed para marcas filtradas
  const marcasFiltradas = computed(() => {
    if (!busquedaMarca.value) return marcas.value
    return marcas.value.filter(marca => 
      marca.nombre.toLowerCase().includes(busquedaMarca.value.toLowerCase())
    )
  })
  
  // Computed para marca seleccionada
  const marcaSeleccionada = computed(() => {
    if (!filtros.marcaId) return ''
    const marca = marcas.value.find(m => m.id === filtros.marcaId)
    return marca ? marca.nombre : ''
  })
  
  // Cargar catálogos al montar
  onMounted(async () => {
    try {
      await Promise.all([
        cargarMarcas(),
        cargarRegiones(),
        cargarCarrocerias()
      ])
    } catch (error) {
      console.error('❌ Error cargando catálogos:', error)
    }
  })
  
  // Función para seleccionar marca
  function seleccionarMarca(marca) {
    filtros.marcaId = marca.id
    mostrarMarcas.value = false
    busquedaMarca.value = ''
  }
  
  // Watcher para emitir cambios
  watchEffect(() => {
    emit('update:modelValue', filtros)
  })
  
  function emitirBusqueda() {
    emit('buscar', filtros)
  }
  </script>
  