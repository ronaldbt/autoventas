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

    <div class="space-x-4 flex items-center relative">
      <!-- Si está logueado, mostrar botón con menú -->
      <div v-if="estaLogueado" class="relative" ref="menuRef">
        <button
          @click="mostrarMenu = !mostrarMenu"
          class="flex items-center gap-2 text-sm text-gray-300 hover:text-white focus:outline-none"
        >
          👤 {{ authStore.user.email }}
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <!-- Menú desplegable -->
        <div
          v-if="mostrarMenu"
          class="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-50 py-2"
        >
          <NuxtLink to="/perfil" class="block px-4 py-2 text-sm text-white hover:bg-gray-700">Mi perfil</NuxtLink>
          <NuxtLink to="/mis-autos" class="block px-4 py-2 text-sm text-white hover:bg-gray-700">Mis autos</NuxtLink>
          <button
            @click="cerrarSesion"
            class="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700"
          >
            Cerrar sesión
          </button>
        </div>
      </div>

      <!-- Si NO está logueado -->
      <template v-else>
        <NuxtLink to="/login" class="hover:underline">Ingresar</NuxtLink>
        <NuxtLink to="/register" class="hover:underline">Registrarse</NuxtLink>
      </template>

      <NuxtLink to="/vender">
        <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-full">
          Vende tu Auto
        </button>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { useAuthStore } from '../stores/authStore'

const authStore = useAuthStore()
const router = useRouter()

const estaLogueado = computed(() => !!authStore.user && !!authStore.token)
const mostrarMenu = ref(false)

// Referencia al contenedor del menú
const menuRef = ref(null)
onClickOutside(menuRef, () => {
  mostrarMenu.value = false
})

// Cerrar sesión
function cerrarSesion() {
  authStore.logout()
  mostrarMenu.value = false
  router.push('/')
}
</script>
