<!-- components/BuscadorAutos.vue -->
<template>
    <section class="text-center py-12 px-4">
      <h1 class="text-3xl font-semibold mb-6">Encuentra tu próximo auto</h1>
      <div class="max-w-6xl mx-auto bg-white text-black rounded-xl overflow-hidden shadow-md">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-2 p-4">
          <select class="border p-2 rounded-md w-full">
            <option>Categorías de Vehículo</option>
          </select>
          <select class="border p-2 rounded-md w-full">
            <option>Marca</option>
          </select>
          <input type="text" placeholder="Modelo" class="border p-2 rounded-md w-full" />
          <input type="text" placeholder="Palabras claves" class="border p-2 rounded-md w-full" />
          <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Buscar 78,822 vehículos
          </button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-6 gap-2 bg-black text-white text-sm p-4 rounded-b-xl">
          <select class="bg-black text-white border border-gray-700 p-1 rounded-md">
            <option>Todos</option>
          </select>
          <select class="bg-black text-white border border-gray-700 p-1 rounded-md">
            <option>Región</option>
          </select>
          <select class="bg-black text-white border border-gray-700 p-1 rounded-md">
            <option>Año Min</option>
          </select>
          <select class="bg-black text-white border border-gray-700 p-1 rounded-md">
            <option>Año Max</option>
          </select>
          <select class="bg-black text-white border border-gray-700 p-1 rounded-md">
            <option>Precio Min</option>
          </select>
          <select class="bg-black text-white border border-gray-700 p-1 rounded-md">
            <option>Precio Max</option>
          </select>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No se requiere lógica adicional por ahora
  </script>
  