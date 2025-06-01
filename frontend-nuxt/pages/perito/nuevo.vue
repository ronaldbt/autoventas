<template>
    <div class="max-w-4xl mx-auto p-6">
      <div class="mb-6 flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-800 dark:text-white">Nuevo Peritaje</h1>
        <NuxtLink
          to="/perito/peritajes"
          class="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          ← Volver a la lista
        </NuxtLink>
      </div>
  
      <div class="bg-white dark:bg-gray-900 p-6 rounded shadow">
        <PeritajeForm @submit="handleSubmit" :isLoading="isLoading" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { usePeritajeStore } from '../stores/peritajeStore'
  import PeritajeForm from '../components/PeritajeForm.vue'
  
  const router = useRouter()
  const store = usePeritajeStore()
  const isLoading = ref(false)
  
  const handleSubmit = async (nuevoPeritaje) => {
    isLoading.value = true
    try {
      await store.crearPeritaje(nuevoPeritaje)
      router.push('/perito/peritajes')
    } catch (error) {
      console.error('Error al crear peritaje:', error)
      alert('Hubo un error al crear el peritaje.')
    } finally {
      isLoading.value = false
    }
  }
  </script>
  