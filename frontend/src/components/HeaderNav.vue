<template>
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
      <button @click="irALogin" class="hover:underline">Ingresar</button>
      <button @click="irARegistro" class="hover:underline">Registrarse</button>
      <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full">
        Vende tu Auto
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const irALogin = () => {
  router.push('/login')
}

const irARegistro = () => {
  router.push('/register')
}
</script>
