<template>
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
  