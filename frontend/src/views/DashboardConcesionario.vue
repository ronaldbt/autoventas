<template>
    <div class="min-h-screen bg-gray-100 dark:bg-black px-6 py-8">
      <h1 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Panel de Concesionario
      </h1>
  
      <div class="bg-white dark:bg-gray-800 p-6 rounded shadow mb-8">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">
          Bienvenido, {{ concesionario.nombre }}
        </h2>
        <p class="text-gray-600 dark:text-gray-300">
          Aquí puedes gestionar tus vehículos y ver tu actividad reciente.
        </p>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
          <h3 class="text-sm text-gray-500 dark:text-gray-400">Autos publicados</h3>
          <p class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ stats.autos }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
          <h3 class="text-sm text-gray-500 dark:text-gray-400">Visitas totales</h3>
          <p class="text-2xl font-bold text-green-600 dark:text-green-400">{{ stats.visitas }}</p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded shadow text-center">
          <h3 class="text-sm text-gray-500 dark:text-gray-400">Solicitudes de contacto</h3>
          <p class="text-2xl font-bold text-yellow-500 dark:text-yellow-400">{{ stats.contactos }}</p>
        </div>
      </div>
  
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-gray-800 dark:text-white">Mis vehículos</h2>
        <button
          @click="irAPublicar"
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Publicar Auto
        </button>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div
          v-for="auto in autos"
          :key="auto.id"
          class="bg-white dark:bg-gray-800 p-4 rounded shadow"
        >
          <h3 class="text-lg font-semibold text-gray-800 dark:text-white">
            {{ auto.marca }} {{ auto.modelo }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">Año: {{ auto.anio }}</p>
          <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">Precio: ${{ auto.precio }}</p>
          <div class="flex justify-end space-x-2">
            <button class="text-sm text-blue-600 hover:underline">Editar</button>
            <button class="text-sm text-red-500 hover:underline">Eliminar</button>
          </div>
        </div>
      </div>
  
      <p v-if="error" class="text-red-500 mt-4 text-sm">{{ error }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const concesionario = ref({});
  const error = ref('');
  const autos = ref([]);
  const stats = ref({
    autos: 0,
    visitas: 0,
    contactos: 0
  });
  
  onMounted(async () => {
    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');
  
    if (!token || rol !== 'CONCESIONARIO') {
      router.push('/login');
      return;
    }
  
    try {
      const res = await axios.get('http://localhost:3000/api/dashboard/concesionario', {
        headers: { Authorization: `Bearer ${token}` }
      });
  
      concesionario.value = res.data.usuario;
  
      // Datos simulados
      autos.value = [
        { id: 1, marca: 'Toyota', modelo: 'Corolla', anio: 2020, precio: 10500000 },
        { id: 2, marca: 'Chevrolet', modelo: 'Sail', anio: 2019, precio: 8800000 },
        { id: 3, marca: 'Hyundai', modelo: 'Tucson', anio: 2021, precio: 15800000 }
      ];
  
      stats.value = {
        autos: autos.value.length,
        visitas: 1267,
        contactos: 89
      };
    } catch (err) {
      error.value = err.response?.data?.error || 'Error al cargar el dashboard';
    }
  });
  
  const irAPublicar = () => {
    router.push('/concesionario/publicar');
  };
  </script>
  