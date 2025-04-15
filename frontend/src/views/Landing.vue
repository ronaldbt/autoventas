<template>
    <div class="min-h-screen bg-black text-white">
      <!-- 🔝 Barra superior de navegación -->
      <header class="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <div class="flex items-center space-x-6">
          <img src="https://www.svgrepo.com/show/474444/car.svg" alt="Logo" class="h-8" />
          <nav class="space-x-4 hidden md:flex">
            <a href="#" class="hover:underline">Todos los Autos</a>
            <a href="#" class="hover:underline">Autos Nuevos</a>
            <a href="#" class="hover:underline">Autos Eléctricos</a>
            <a href="#" class="hover:underline">Vende tu Auto</a>
            <a href="#" class="hover:underline">Análisis</a>
            <a href="#" class="hover:underline">Noticias</a>
            <a href="#" class="hover:underline">Ayuda y Sitios</a>
            <a href="#" class="hover:underline">Servicios</a>
          </nav>
        </div>
        <div class="space-x-4 flex items-center">
          <button class="hover:underline">Ingresar</button>
          <button class="hover:underline">Registrarse</button>
          <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full">
            Vende tu Auto
          </button>
        </div>
      </header>
  
      <!-- 🧭 Sección de búsqueda -->
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
  
      <!-- 🚗 Marcas populares -->
      <section class="bg-white text-black py-10 px-6">
        <div class="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div
            v-for="marca in marcas"
            :key="marca.nombre"
            class="flex items-center space-x-2"
          >
            <img :src="marca.logo" :alt="marca.nombre" class="h-6 w-6 object-contain" />
            <span>{{ marca.nombre }}</span>
            <span class="text-gray-500">({{ marca.cantidad }})</span>
          </div>
        </div>
        <div class="text-center mt-6">
          <button class="text-blue-600 hover:underline">Mostrar todas las marcas</button>
        </div>
      </section>
    </div>
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
    { nombre: "Volkswagen", cantidad: 24643, logo: "https://cdn.worldvectorlogo.com/logos/volkswagen-1.svg" },
  ];
  </script>
  
  <style scoped>
  /* Estilos personalizados opcionales */
  </style>
  