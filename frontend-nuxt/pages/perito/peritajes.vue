<template>
    <div class="p-6">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Mis Peritajes</h1>
        <NuxtLink
          to="/perito/nuevo"
          class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          ➕ Nuevo Peritaje
        </NuxtLink>
      </div>
  
      <div v-if="loading" class="text-gray-500">Cargando peritajes...</div>
  
      <div v-else-if="peritajes.length === 0" class="text-gray-500">
        Aún no has registrado peritajes.
      </div>
  
      <div v-else class="overflow-auto rounded shadow bg-white dark:bg-gray-900">
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead class="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-white">#</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-white">Patente</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-white">Fecha</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-white">Estado</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-white">Comisión</th>
              <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700 dark:text-white">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 dark:divide-gray-700">
            <tr
              v-for="(p, i) in peritajes"
              :key="p.id"
              class="hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <td class="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{{ i + 1 }}</td>
              <td class="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">{{ p.patente }}</td>
              <td class="px-4 py-2 text-sm text-gray-600 dark:text-gray-300">
                {{ new Date(p.fecha).toLocaleDateString() }}
              </td>
              <td class="px-4 py-2 text-sm">
                <span
                  :class="[
                    'px-2 py-1 rounded-full text-xs font-semibold',
                    p.estado === 'COMPLETADO'
                      ? 'bg-green-200 text-green-800 dark:bg-green-700 dark:text-white'
                      : 'bg-yellow-200 text-yellow-800 dark:bg-yellow-600 dark:text-white'
                  ]"
                >
                  {{ p.estado }}
                </span>
              </td>
              <td class="px-4 py-2 text-sm text-green-600 dark:text-green-400">
                ${{ p.comisionPerito?.toLocaleString() || 0 }}
              </td>
              <td class="px-4 py-2 text-sm">
                <NuxtLink
                  :to="`/perito/${p.id}`"
                  class="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Ver detalle
                </NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { usePeritajeStore } from '../stores/peritajeStore'
  
  const store = usePeritajeStore()
  const peritajes = ref([])
  const loading = ref(true)
  
  onMounted(async () => {
    loading.value = true
    peritajes.value = await store.fetchMisPeritajes()
    loading.value = false
  })
  </script>
  