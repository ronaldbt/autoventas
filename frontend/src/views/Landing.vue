<template>
  <div class="min-h-screen bg-black text-white">
    <HeaderNav />
    <BuscadorAutos />
    <MarcasPopulares />
    <FooterAutoventas />
  </div>
</template>

<script setup>
import HeaderNav from '@/components/HeaderNav.vue'
import BuscadorAutos from '@/components/BuscadorAutos.vue'
import MarcasPopulares from '@/components/MarcasPopulares.vue'
import FooterAutoventas from '@/components/FooterAutoventas.vue'
</script>
