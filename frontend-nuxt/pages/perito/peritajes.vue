<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Mis Peritajes</h1>
            <p class="text-slate-600 text-lg">Gestiona todos tus peritajes realizados</p>
          </div>
          <div class="flex items-center space-x-4">
            <NuxtLink
              to="/perito/solicitudes"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Solicitudes Pendientes
            </NuxtLink>
            <NuxtLink
              to="/perito/nuevo"
              class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Nuevo Peritaje
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        <div class="flex items-center justify-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          <span class="ml-4 text-slate-600 text-lg">Cargando peritajes...</span>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="peritajes.length === 0" class="bg-white rounded-2xl shadow-xl p-12 border border-slate-100 text-center">
        <div class="w-24 h-24 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-slate-800 mb-4">Aún no tienes peritajes</h3>
        <p class="text-slate-600 mb-8">Comienza creando tu primer peritaje para verlo aquí</p>
        <NuxtLink
          to="/perito/nuevo"
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Crear Primer Peritaje
        </NuxtLink>
      </div>

      <!-- Peritajes Table -->
      <div v-else class="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-gradient-to-r from-slate-50 to-slate-100">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">#</th>
                <th class="px-6 py-4 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">Patente</th>
                <th class="px-6 py-4 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">Fecha</th>
                <th class="px-6 py-4 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-4 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">Comisión</th>
                <th class="px-6 py-4 text-left text-sm font-bold text-slate-700 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-slate-200">
              <tr
                v-for="(p, i) in peritajes"
                :key="p.id"
                class="hover:bg-slate-50 transition-colors duration-200"
              >
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  {{ i + 1 }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-bold text-slate-900">{{ p.patente }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {{ new Date(p.fecha).toLocaleDateString('es-CL') }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    :class="[
                      'inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide',
                      p.estado === 'COMPLETADO'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    ]"
                  >
                    {{ p.estado }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">
                  ${{ p.comisionPerito?.toLocaleString() || 0 }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                  <NuxtLink
                    :to="`/perito/${p.id}`"
                    class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    Ver
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import { usePeritajeStore } from '~/stores/peritajeStore'
  
  const store = usePeritajeStore()
  const peritajes = ref([])
  const loading = ref(true)
  
  onMounted(async () => {
    loading.value = true
    peritajes.value = await store.fetchMisPeritajes()
    loading.value = false
  })
  </script>
  