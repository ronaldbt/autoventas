<!-- pages/publicista/dashboard.vue -->
<template>
    <div class="min-h-screen bg-gray-100 dark:bg-black px-6 py-8">
      <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Panel del Publicista
      </h1>
  
      <div class="bg-white dark:bg-gray-800 p-6 rounded shadow mb-8">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
          Bienvenido, {{ publicista.nombre }} 📣
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Aquí puedes gestionar tus campañas y ver estadísticas de rendimiento.
        </p>
      </div>
  
      <!-- 📊 Estadísticas -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
          <h3 class="text-sm text-gray-500 dark:text-gray-400">Campañas activas</h3>
          <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ stats.campanas }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
          <h3 class="text-sm text-gray-500 dark:text-gray-400">Impresiones totales</h3>
          <p class="text-2xl font-bold text-green-600 dark:text-green-400">{{ stats.impresiones }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
          <h3 class="text-sm text-gray-500 dark:text-gray-400">Clics recibidos</h3>
          <p class="text-2xl font-bold text-yellow-500 dark:text-yellow-400">{{ stats.clics }}</p>
        </div>
      </div>
  
      <!-- 📢 Campañas -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">Mis campañas</h2>
        <button
          @click="irANuevaCampana"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Crear campaña
        </button>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          v-for="campana in campanas"
          :key="campana.id"
          class="bg-white dark:bg-gray-800 p-4 rounded shadow"
        >
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">{{ campana.titulo }}</h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Estado: {{ campana.estado }}</p>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            Clics: {{ campana.clics }} / Impresiones: {{ campana.impresiones }}
          </p>
          <div class="flex justify-end space-x-2 mt-2">
            <button class="text-sm text-blue-600 hover:underline">Editar</button>
            <button class="text-sm text-red-500 hover:underline">Eliminar</button>
          </div>
        </div>
      </div>
  
      <p v-if="error" class="text-red-500 mt-4 text-sm">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const router = useRouter()
  const { $api } = useNuxtApp()
  
  const publicista = ref({})
  const campanas = ref([])
  const stats = ref({
    campanas: 0,
    clics: 0,
    impresiones: 0
  })
  const error = ref('')
  
  onMounted(async () => {
    const token = localStorage.getItem('token')
    const rol = localStorage.getItem('rol')
  
    if (!token || rol !== 'PUBLICISTA') {
      router.push('/login')
      return
    }
  
    try {
      const res = await $api.get('/dashboard/publicista', {
        headers: { Authorization: `Bearer ${token}` }
      })
  
      publicista.value = res.data.usuario
  
      // Campañas simuladas
      campanas.value = [
        { id: 1, titulo: 'Banner SUV 2024', estado: 'Activa', clics: 302, impresiones: 14500 },
        { id: 2, titulo: 'Campaña híbridos', estado: 'Pausada', clics: 112, impresiones: 8200 }
      ]
  
      stats.value = {
        campanas: campanas.value.length,
        clics: campanas.value.reduce((s, c) => s + c.clics, 0),
        impresiones: campanas.value.reduce((s, c) => s + c.impresiones, 0)
      }
    } catch (err) {
      error.value = err.response?.data?.error || 'Error al cargar el dashboard'
    }
  })
  
  const irANuevaCampana = () => {
    router.push('/publicista/nueva-campaña')
  }
  </script>
  