<template>
    <div class="min-h-screen bg-gray-100 dark:bg-black px-6 py-8">
      <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Panel de Administrador
      </h1>
  
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <div class="bg-white dark:bg-gray-800 p-5 rounded shadow text-center">
          <h2 class="text-sm text-gray-500 dark:text-gray-400">Usuarios registrados</h2>
          <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ stats.usuarios }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-5 rounded shadow text-center">
          <h2 class="text-sm text-gray-500 dark:text-gray-400">Concesionarios activos</h2>
          <p class="text-2xl font-bold text-green-600 dark:text-green-400">{{ stats.concesionarios }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-5 rounded shadow text-center">
          <h2 class="text-sm text-gray-500 dark:text-gray-400">Publicistas</h2>
          <p class="text-2xl font-bold text-yellow-500 dark:text-yellow-300">{{ stats.publicistas }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-5 rounded shadow text-center">
          <h2 class="text-sm text-gray-500 dark:text-gray-400">Autos publicados</h2>
          <p class="text-2xl font-bold text-red-500 dark:text-red-400">{{ stats.autos }}</p>
        </div>
      </div>
  
      <div class="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Bienvenido, {{ usuario.nombre }} 👑
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Este es tu panel de control principal. Desde aquí puedes gestionar usuarios, concesionarios, autos, campañas publicitarias y más.
        </p>
      </div>
  
      <p v-if="error" class="text-red-500 mt-4 text-sm">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  // ✅ Composición Nuxt
  const router = useRouter()
  const { $api } = useNuxtApp()
  
  const usuario = ref({})
  const stats = ref({
    usuarios: 0,
    concesionarios: 0,
    publicistas: 0,
    autos: 0
  })
  const error = ref('')
  
  onMounted(async () => {
    const token = localStorage.getItem('token')
    const rol = localStorage.getItem('rol')
  
    if (!token || rol !== 'ADMIN') {
      router.push('/login')
      return
    }
  
    try {
      const res = await $api.get('/dashboard/admin', {
        headers: { Authorization: `Bearer ${token}` }
      })
  
      usuario.value = res.data.usuario
  
      // Puedes reemplazar estas estadísticas por valores reales del backend si están disponibles
      stats.value = {
        usuarios: 1258,
        concesionarios: 238,
        publicistas: 49,
        autos: 8031
      }
    } catch (err) {
      error.value = err.response?.data?.error || 'Error al cargar el dashboard'
    }
  })
  </script>
  