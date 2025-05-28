<!-- pages/cliente/dashboard.vue -->
<template>
    <div class="min-h-screen bg-gray-100 dark:bg-black px-6 py-8">
      <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Panel del Cliente
      </h1>
  
      <div class="bg-white dark:bg-gray-800 p-6 rounded shadow mb-8">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
          Bienvenido, {{ cliente.nombre }} 👋
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Aquí puedes ver tus autos favoritos, tu historial de búsqueda y gestionar tu perfil.
        </p>
      </div>
  
      <!-- ❤️ Autos favoritos -->
      <section class="mb-10">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Tus autos favoritos</h3>
        <div v-if="favoritos.length" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div
            v-for="auto in favoritos"
            :key="auto.id"
            class="bg-white dark:bg-gray-800 p-4 rounded shadow"
          >
            <h4 class="text-lg font-semibold text-gray-800 dark:text-white">{{ auto.marca }} {{ auto.modelo }}</h4>
            <p class="text-gray-600 dark:text-gray-300 text-sm">Año: {{ auto.anio }}</p>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">Precio: ${{ auto.precio }}</p>
            <button class="text-sm text-red-500 hover:underline">Eliminar</button>
          </div>
        </div>
        <p v-else class="text-gray-500 dark:text-gray-400">Aún no has guardado autos como favoritos.</p>
      </section>
  
      <!-- 🕘 Historial -->
      <section class="mb-10">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Últimas búsquedas</h3>
        <ul class="text-gray-600 dark:text-gray-300 list-disc list-inside space-y-1">
          <li>Toyota Corolla 2020</li>
          <li>Hyundai Tucson 2022</li>
          <li>Chevrolet Sail usado</li>
        </ul>
      </section>
  
      <!-- ⚙️ Perfil -->
      <section class="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-4">Gestión de cuenta</h3>
        <div class="space-x-4">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Editar Perfil</button>
          <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Eliminar Cuenta</button>
          <button @click="cerrarSesion" class="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded">Cerrar sesión</button>
        </div>
      </section>
  
      <p v-if="error" class="text-red-500 mt-4 text-sm">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const cliente = ref({})
  const favoritos = ref([])
  const error = ref('')
  
  const { $api } = useNuxtApp()
  const router = useRouter()
  
  onMounted(async () => {
    const token = localStorage.getItem('token')
    const rol = localStorage.getItem('rol')
  
    if (!token || rol !== 'CLIENTE') {
      router.push('/login')
      return
    }
  
    try {
      const res = await $api.get('/dashboard/cliente', {
        headers: { Authorization: `Bearer ${token}` }
      })
      cliente.value = res.data.usuario
  
      favoritos.value = [
        { id: 1, marca: 'Toyota', modelo: 'Corolla', anio: 2020, precio: 10500000 },
        { id: 2, marca: 'Hyundai', modelo: 'Tucson', anio: 2021, precio: 15800000 }
      ]
    } catch (err) {
      error.value = err.response?.data?.error || 'Error al cargar el dashboard'
    }
  })
  
  const cerrarSesion = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('rol')
    router.push('/login')
  }
  </script>
  