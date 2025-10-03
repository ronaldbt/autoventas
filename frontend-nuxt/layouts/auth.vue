<template>
  <div class="min-h-screen bg-slate-50">
    <!-- 🔝 Header sticky para páginas de autenticación -->
    <header class="fixed top-0 left-0 right-0 z-50">
      <HeaderNav />
    </header>

    <!-- 📄 Contenido principal con padding para el header -->
    <main class="pt-16">
      <slot />
    </main>
  </div>
</template>

<script setup>
import HeaderNav from '../components/HeaderNav.vue'

// Layout para páginas de autenticación (login, register)
// Incluye header de navegación pero sin sidebar
</script>