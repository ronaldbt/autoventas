<!-- layouts/default.vue -->
<template>
    <div class="h-screen flex flex-col md:flex-row bg-black text-white overflow-hidden">
      <!-- Sidebar lateral si está logueado -->
      <Sidebar
        v-if="estaLogueado"
        class="md:w-64 w-full md:h-full h-auto md:flex-shrink-0"
      />
  
      <!-- Contenido principal -->
      <div class="flex-1 flex flex-col min-h-screen">
        <HeaderNav />
        <main class="flex-1 overflow-y-auto px-4 py-6 bg-gray-900">
          <slot />
        </main>
        
      </div>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from '../stores/authStore'
  import Sidebar from '../components/Sidebar.vue'
  
  // Detecta si hay un usuario logueado
  const authStore = useAuthStore()
  const estaLogueado = computed(() => !!authStore.user)
  </script>
  