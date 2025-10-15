<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Nuevo Peritaje</h1>
            <p class="text-slate-600 text-lg">Complete la información del vehículo y realice la inspección técnica</p>
          </div>
          <NuxtLink
            to="/perito/peritajes"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Volver a la lista
          </NuxtLink>
        </div>
      </div>

      <!-- Progress Indicator -->
      <div class="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 mb-8">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="flex items-center">
              <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-bold">1</span>
              </div>
              <span class="ml-2 text-sm font-semibold text-slate-700">Información del Vehículo</span>
            </div>
            <div class="w-16 h-1 bg-slate-200 rounded-full">
              <div class="w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
            </div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <span class="text-slate-500 text-sm font-bold">2</span>
              </div>
              <span class="ml-2 text-sm font-semibold text-slate-500">Inspección Técnica</span>
            </div>
            <div class="w-16 h-1 bg-slate-200 rounded-full"></div>
            <div class="flex items-center">
              <div class="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <span class="text-slate-500 text-sm font-bold">3</span>
              </div>
              <span class="ml-2 text-sm font-semibold text-slate-500">Finalizar</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Form Container -->
      <div class="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <PeritajeForm @submit="handleSubmit" :isLoading="isLoading" />
      </div>

      <!-- Help Section -->
      <div class="mt-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
        <div class="flex items-start space-x-4">
          <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold mb-2">💡 Consejos para un peritaje profesional</h3>
            <ul class="text-blue-100 space-y-1">
              <li>• Verifique que todos los datos del vehículo sean correctos</li>
              <li>• Realice mediciones precisas en frenos y suspensión</li>
              <li>• Documente cualquier daño o irregularidad encontrada</li>
              <li>• Tome fotografías de evidencia si es necesario</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { usePeritajeStore } from '~/stores/peritajeStore'
  import PeritajeForm from '~/components/PeritajeForm.vue'
  
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
  