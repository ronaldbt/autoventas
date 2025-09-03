<template>
    <div class="bg-white text-black rounded-xl shadow-md overflow-hidden">
      <!-- 🔎 Filtros principales -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-3 p-4">
        <select v-model="filtros.categoria" class="border p-2 rounded-md w-full">
          <option value="">Categoría</option>
          <option value="auto">Auto</option>
          <option value="suv">SUV</option>
          <option value="camioneta">Camioneta</option>
        </select>
  
        <select v-model="filtros.marcaId" class="border p-2 rounded-md w-full">
          <option value="">Marca</option>
          <option v-for="m in marcas" :key="m.id" :value="m.id">{{ m.nombre }}</option>
        </select>
  
        <input
          v-model="filtros.modelo"
          type="text"
          placeholder="Modelo"
          class="border p-2 rounded-md w-full"
        />
  
        <input
          v-model="filtros.palabrasClave"
          type="text"
          placeholder="Palabras clave"
          class="border p-2 rounded-md w-full"
        />
  
        <button
          @click="emitirBusqueda"
          class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Buscar
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
  import { reactive, toRefs, watchEffect } from 'vue'
  
  const props = defineProps({
    marcas: {
      type: Array,
      default: () => []
    },
    regiones: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  })
  
  const emit = defineEmits(['update:modelValue', 'buscar'])
  
  const filtros = reactive({ ...props.modelValue })
  
  watchEffect(() => {
    emit('update:modelValue', filtros)
  })
  
  function emitirBusqueda() {
    emit('buscar', filtros)
  }
  </script>
  