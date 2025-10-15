<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">Mis ventas</h1>
      <div v-if="ventas.length">
        <table class="w-full text-left border">
          <thead>
            <tr class="bg-gray-100">
              <th class="p-2">Vehículo</th>
              <th class="p-2">Cliente</th>
              <th class="p-2">Fecha</th>
              <th class="p-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="venta in ventas" :key="venta.id">
              <td class="p-2">{{ venta.vehiculo?.titulo }}</td>
              <td class="p-2">{{ venta.cliente?.nombre }}</td>
              <td class="p-2">{{ venta.fecha }}</td>
              <td class="p-2">{{ venta.estado }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>Aún no tienes ventas registradas.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  const { $api } = useNuxtApp()
  const { data: ventas } = await useAsyncData('ventas', () =>
    $api.get('/ventas/mis-ventas').then(res => res.data)
  )
  </script>
  