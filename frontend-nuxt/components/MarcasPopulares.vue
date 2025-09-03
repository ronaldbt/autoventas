<template>
  <section class="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
    <div class="max-w-7xl mx-auto">
      <!-- Encabezado de la sección -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Marcas
          <span class="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            más populares
          </span>
        </h2>
        <p class="text-xl text-slate-600 max-w-3xl mx-auto">
          Descubre las marcas más confiables y solicitadas por nuestros usuarios
        </p>
      </div>

      <!-- Grid de marcas -->
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
        <div
          v-for="marca in marcas"
          :key="marca.nombre"
          class="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 hover:border-blue-200"
        >
          <!-- Logo de la marca -->
          <div class="flex justify-center mb-4">
            <div class="w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center p-3 group-hover:from-blue-50 group-hover:to-orange-50 transition-all duration-300">
              <img 
                :src="marca.logo" 
                :alt="`Logo de ${marca.nombre}`" 
                class="w-10 h-10 object-contain filter group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
          </div>

          <!-- Nombre de la marca -->
          <h3 class="text-center font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {{ marca.nombre }}
          </h3>

          <!-- Cantidad de vehículos -->
          <div class="text-center">
            <span class="inline-block bg-gradient-to-r from-slate-100 to-slate-200 text-slate-600 text-sm font-medium px-3 py-1 rounded-full group-hover:from-blue-100 group-hover:to-orange-100 group-hover:text-blue-700 transition-all duration-300">
              {{ marca.cantidad.toLocaleString() }} vehículos
            </span>
          </div>

          <!-- Overlay hover -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-orange-500/0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      </div>

      <!-- Botón de acción -->
      <div class="text-center">
        <button class="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
          <span>Ver todas las marcas</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const marcas = [
  { nombre: "BMW", cantidad: 20902, logo: "https://cdn.worldvectorlogo.com/logos/bmw.svg" },
  { nombre: "Honda", cantidad: 41570, logo: "https://cdn.worldvectorlogo.com/logos/honda.svg" },
  { nombre: "Mercedes-Benz", cantidad: 20380, logo: "https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg" },
  { nombre: "Subaru", cantidad: 13223, logo: "https://cdn.worldvectorlogo.com/logos/subaru-6.svg" },
  { nombre: "Chery", cantidad: 14977, logo: "https://cdn.worldvectorlogo.com/logos/chery-6.svg" },
  { nombre: "Hyundai", cantidad: 33223, logo: "https://cdn.worldvectorlogo.com/logos/hyundai-4.svg" },
  { nombre: "Mitsubishi", cantidad: 12409, logo: "https://cdn.worldvectorlogo.com/logos/mitsubishi.svg" },
  { nombre: "Toyota", cantidad: 142016, logo: "https://cdn.worldvectorlogo.com/logos/toyota.svg" },
  { nombre: "Chevrolet", cantidad: 16948, logo: "https://cdn.worldvectorlogo.com/logos/chevrolet.svg" },
  { nombre: "Kia", cantidad: 33032, logo: "https://cdn.worldvectorlogo.com/logos/kia-motors.svg" },
  { nombre: "Nissan", cantidad: 55475, logo: "https://cdn.worldvectorlogo.com/logos/nissan-9.svg" },
  { nombre: "Volkswagen", cantidad: 24643, logo: "https://cdn.worldvectorlogo.com/logos/volkswagen-1.svg" }
];
</script>
  