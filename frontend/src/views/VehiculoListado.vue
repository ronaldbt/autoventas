<template>
  <div class="flex flex-col md:flex-row min-h-screen bg-gray-100 text-sm">
    <!-- Filtros -->
    <aside class="w-full md:w-64 bg-white p-4 border-r border-gray-200 shadow-sm">
      <div class="mb-4">
        <h2 class="font-semibold text-gray-700 mb-2">Filtros</h2>
        <button class="text-blue-600 text-sm underline">Limpiar todo</button>
      </div>
      <input
        type="text"
        placeholder="Ingrese código o nombre"
        class="w-full mb-2 border border-gray-300 rounded px-2 py-1"
      />
      <p class="text-red-500 text-xs mb-4">Presione ENTER luego de escribir</p>
      <div v-for="filtro in filtros" :key="filtro" class="border-b py-2 cursor-pointer text-gray-600">
        {{ filtro }}
      </div>
    </aside>

    <!-- Listado -->
    <section class="flex-1 p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-lg font-semibold">Vehículos</h1>
        <div class="space-x-2">
          <RouterLink to="/concesionario/vehiculos/agregar">
            <button class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm">
              + Agregar Vehículo
            </button>
          </RouterLink>
          <button class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded text-sm">
            Exportar Excel
          </button>
        </div>
      </div>

      <div v-if="loading" class="text-center py-10 text-gray-500">Cargando vehículos...</div>
      <div v-else>
        <table class="w-full text-left text-sm bg-white rounded shadow overflow-hidden">
          <thead class="bg-gray-100 text-gray-700">
            <tr>
              <th class="p-3">Imagen</th>
              <th class="p-3">Título</th>
              <th class="p-3">Precio</th>
              <th class="p-3">Publicado</th>
              <th class="p-3">Estado</th>
              <th class="p-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="vehiculo in vehiculos"
              :key="vehiculo.id"
              class="border-b hover:bg-gray-50"
            >
              <td class="p-3">
                <img
                  :src="vehiculo.imagenes?.[0] || 'https://via.placeholder.com/120x80?text=Sin+Foto'"
                  alt="auto"
                  class="w-20 h-14 object-cover rounded"
                />
              </td>
              <td class="p-3">
                <p class="text-sm font-medium text-gray-800">{{ vehiculo.titulo }}</p>
                <p class="text-xs text-gray-500">
                  {{ vehiculo.marca?.nombre }} {{ vehiculo.modelo?.nombre }} ({{ vehiculo.anio }})
                </p>
              </td>
              <td class="p-3 font-semibold">
                ${{ Number(vehiculo.precio).toLocaleString() }}
              </td>
              <td class="p-3 text-gray-500">
                {{ new Date(vehiculo.createdAt).toLocaleDateString() }}
              </td>
              <td class="p-3">
                <span
                  :class="{
                    'bg-green-500': vehiculo.estado === 'ACTIVO',
                    'bg-yellow-500': vehiculo.estado === 'INACTIVO',
                    'bg-red-500': vehiculo.estado === 'VENDIDO'
                  }"
                  class="text-white px-2 py-1 rounded text-xs"
                >
                  {{ vehiculo.estado }}
                </span>
              </td>
              <td class="p-3">
                <RouterLink
                  :to="`/${formatearSlug(vehiculo.region?.nombre)}/${formatearSlug(vehiculo.marca?.nombre)}/${vehiculo.anio}/${formatearSlug(vehiculo.modelo?.nombre)}-${vehiculo.id}`"
                  class="text-blue-600 hover:underline flex items-center gap-1"
                >
                  <span class="text-sm">🔍 Ver detalles</span>
                </RouterLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { vehiculoService } from '@/services/vehiculoService'
import { RouterLink } from 'vue-router'

const vehiculos = ref([])
const filtros = ['ESTADO', 'MARCAS', 'PRECIO', 'ÚNICO DUEÑO', 'DESDE AÑO', 'COMBUSTIBLE']
const loading = ref(true)

function formatearSlug(texto) {
  return (texto || '')
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

onMounted(async () => {
  try {
    const data = await vehiculoService.obtenerVehiculos()
    vehiculos.value = data
  } catch (error) {
    console.error('Error al cargar vehículos:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
aside {
  min-height: 100vh;
}
</style>
