<template>
    <header class="flex items-center justify-between px-6 py-4 border-b border-gray-800">
      <div class="flex items-center space-x-6">
        <img src="https://www.svgrepo.com/show/474444/car.svg" alt="Logo" class="h-8" />
        <nav class="space-x-4 hidden md:flex">
          <NuxtLink to="/" class="hover:underline">Todos los Autos</NuxtLink>
          <NuxtLink to="/nuevos" class="hover:underline">Autos Nuevos</NuxtLink>
          <NuxtLink to="/electricos" class="hover:underline">Autos Eléctricos</NuxtLink>
          <NuxtLink to="/vender" class="hover:underline">Vende tu Auto</NuxtLink>
          <NuxtLink to="/analisis" class="hover:underline">Análisis</NuxtLink>
          <NuxtLink to="/noticias" class="hover:underline">Noticias</NuxtLink>
          <NuxtLink to="/ayuda" class="hover:underline">Ayuda y Sitios</NuxtLink>
          <NuxtLink to="/servicios" class="hover:underline">Servicios</NuxtLink>
        </nav>
      </div>
  
      <div class="space-x-4 flex items-center">
        <NuxtLink to="/login" class="hover:underline">Ingresar</NuxtLink>
        <NuxtLink to="/register" class="hover:underline">Registrarse</NuxtLink>
        <NuxtLink to="/vender">
          <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full">
            Vende tu Auto
          </button>
        </NuxtLink>
      </div>
    </header>
  </template>
  