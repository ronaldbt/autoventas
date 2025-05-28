<template>
    <div class="h-screen flex flex-col md:flex-row overflow-hidden">
      <!-- Sidebar lateral en desktop, inferior en mobile -->
      <Sidebar class="md:w-64 w-full md:h-full h-auto md:flex-shrink-0" />
  
      <!-- Contenido principal -->
      <main class="flex-1 overflow-y-auto bg-gray-900 text-white p-6">
        <router-view />
      </main>
    </div>
  </template>
  
  <script setup>
  import Sidebar from '@/components/Sidebar.vue'
  </script>
  