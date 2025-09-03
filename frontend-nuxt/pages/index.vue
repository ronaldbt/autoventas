
<!-- pages/index.vue -->
<template>
<div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <div class="relative">
      <!-- Hero section con overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-orange-600/10"></div>
      
      <!-- Contenido principal -->
      <div class="relative z-10">
        <BuscadorAutos />
        <MarcasPopulares />
        <FooterAutoventas />
      </div>
    </div>
  </div>
</template>

<script setup>
// ✅ No necesitas importar manualmente si usas la autoimportación de Nuxt
</script>
  