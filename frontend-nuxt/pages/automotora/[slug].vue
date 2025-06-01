<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold">{{ automotora.nombre }}</h1>
      <p class="text-sm text-gray-500">{{ automotora.direccion }} - {{ automotora.telefono }}</p>
  
      <img v-if="automotora.logo" :src="automotora.logo" class="w-40 h-40 object-cover mt-4" />
  
      <h2 class="text-xl mt-8 font-semibold">Autos en venta</h2>
      <ul>
        <li
          v-for="auto in automotora.vehiculos"
          :key="auto.id"
          class="p-2 border rounded mt-2"
        >
          {{ auto.titulo }} - ${{ auto.precio }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const route = useRoute()
  const { $api } = useNuxtApp()
  
  const { data: automotora } = await useAsyncData('automotora', () =>
    $api.get(`/automotoras/${route.params.slug}`).then(res => res.data)
  )
  </script>
  