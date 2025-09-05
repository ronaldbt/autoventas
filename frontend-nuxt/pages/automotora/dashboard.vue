<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header del Dashboard -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">¡Hola, {{ usuario?.nombre || 'Usuario' }}!</h1>
            <p class="text-slate-600 text-lg">Gracias por estar nuevamente, acá un pequeño resumen.</p>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Avatar del usuario -->
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span class="text-white text-xl font-bold">{{ usuario?.nombre?.charAt(0)?.toUpperCase() || 'A' }}</span>
            </div>
            <div>
              <p class="text-slate-800 font-semibold">{{ usuario?.nombre || 'Alan Abarza' }}</p>
              <p class="text-slate-500 text-sm uppercase tracking-wide">{{ usuario?.rol || 'AUTOMOTORA' }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cards de Estadísticas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- Vehículos Activos -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="text-slate-500 text-sm font-medium uppercase tracking-wide">TUS VEHÍCULOS ACTIVOS</p>
              <div class="flex items-center space-x-2 mt-1">
                <span class="text-2xl font-bold text-slate-800">{{ estadisticas.vehiculosActivos }}</span>
                <span class="text-green-500 text-sm font-semibold">+{{ estadisticas.vehiculosNuevos }} disp.</span>
              </div>
            </div>
            <div class="w-14 h-14 bg-gradient-to-r from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
          <NuxtLink 
            to="/automotora/vehiculos" 
            class="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-200"
          >
            Ver todos los vehículos
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </NuxtLink>
        </div>

        <!-- Informes Realizados -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="text-slate-500 text-sm font-medium uppercase tracking-wide">INFORMES REALIZADOS</p>
              <div class="flex items-center space-x-2 mt-1">
                <span class="text-2xl font-bold text-slate-800">{{ estadisticas.informes }}</span>
                <span class="text-blue-500 text-sm font-semibold">+{{ estadisticas.informesNuevos }} disp.</span>
              </div>
            </div>
            <div class="w-14 h-14 bg-gradient-to-r from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
          </div>
          <button class="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200">
            Comprar informes
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </button>
        </div>

        <!-- Leads Nuevos -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 hover:shadow-2xl transition-all duration-300">
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="text-slate-500 text-sm font-medium uppercase tracking-wide">LEADS NUEVOS</p>
              <div class="flex items-center space-x-2 mt-1">
                <span class="text-2xl font-bold text-slate-800">{{ estadisticas.leads }}</span>
              </div>
            </div>
            <div class="w-14 h-14 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
          </div>
          <NuxtLink 
            to="/automotora/leads" 
            class="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors duration-200"
          >
            Ver leads
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>

      <!-- Botón de acción principal -->
      <div class="mb-8">
        <NuxtLink 
          to="/automotora/vehiculos/agregar" 
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Publicar Nuevo Vehículo
        </NuxtLink>
      </div>

      <!-- Sección de acciones rápidas -->
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 mb-8">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Acciones Rápidas</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Ver Perfil -->
          <NuxtLink 
            to="/automotora/perfil" 
            class="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all duration-200 group"
          >
            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-slate-800">Mi Perfil</p>
              <p class="text-sm text-slate-600">Editar información</p>
            </div>
          </NuxtLink>

          <!-- Estadísticas -->
          <NuxtLink 
            to="/automotora/estadisticas" 
            class="flex items-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl hover:from-purple-100 hover:to-purple-200 transition-all duration-200 group"
          >
            <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-slate-800">Estadísticas</p>
              <p class="text-sm text-slate-600">Ver métricas detalladas</p>
            </div>
          </NuxtLink>

          <!-- Configuración -->
          <NuxtLink 
            to="/automotora/configuracion" 
            class="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-gray-100 hover:to-gray-200 transition-all duration-200 group"
          >
            <div class="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-slate-800">Configuración</p>
              <p class="text-sm text-slate-600">Ajustes de cuenta</p>
            </div>
          </NuxtLink>

          <!-- Soporte -->
          <NuxtLink 
            to="/automotora/soporte" 
            class="flex items-center p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-xl hover:from-red-100 hover:to-red-200 transition-all duration-200 group"
          >
            <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <p class="font-semibold text-slate-800">Soporte</p>
              <p class="text-sm text-slate-600">Obtener ayuda</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <!-- Actividad Reciente -->
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100 mb-8">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Actividad Reciente</h2>
        <div class="space-y-4">
          <div class="flex items-center p-4 bg-green-50 rounded-xl border border-green-100">
            <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-slate-800">Nuevo vehículo publicado</p>
              <p class="text-sm text-slate-600">Toyota Corolla 2021 - hace 2 horas</p>
            </div>
            <span class="text-xs text-slate-500">14:30</span>
          </div>
          
          <div class="flex items-center p-4 bg-orange-50 rounded-xl border border-orange-100">
            <div class="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-slate-800">Nuevo lead recibido</p>
              <p class="text-sm text-slate-600">Cliente interesado en BMW X3 - hace 4 horas</p>
            </div>
            <span class="text-xs text-slate-500">12:45</span>
          </div>
          
          <div class="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-100">
            <div class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-4">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div class="flex-1">
              <p class="font-semibold text-slate-800">Perfil actualizado</p>
              <p class="text-sm text-slate-600">Información de contacto modificada - ayer</p>
            </div>
            <span class="text-xs text-slate-500">Ayer</span>
          </div>
        </div>
      </div>

      <!-- Tips y Consejos -->
      <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white">
        <h2 class="text-2xl font-bold mb-4">💡 Consejo del día</h2>
        <p class="text-lg mb-4">
          Las fotos de calidad aumentan hasta un 40% las posibilidades de venta. 
          Asegúrate de tomar fotos con buena iluminación y desde diferentes ángulos.
        </p>
        <NuxtLink 
          to="/automotora/consejos" 
          class="inline-flex items-center text-orange-100 hover:text-white font-semibold transition-colors duration-200"
        >
          Ver más consejos
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '../../stores/authStore'

let authStore = null
const storeReady = ref(false)

// Inicializar el store de forma segura
onMounted(() => {
  try {
    authStore = useAuthStore()
    storeReady.value = true
  } catch (error) {
    console.error('Error inicializando AuthStore:', error)
  }
})

// Computed para obtener el usuario de forma segura
const usuario = computed(() => {
  if (storeReady.value && authStore?.user) {
    return authStore.user
  }
  
  // Fallback a localStorage
  if (process.client) {
    try {
      const userLS = localStorage.getItem('user')
      return userLS ? JSON.parse(userLS) : null
    } catch {
      return null
    }
  }
  
  return null
})

// Datos de estadísticas (esto se conectará más tarde con la API)
const estadisticas = ref({
  vehiculosActivos: 14,
  vehiculosNuevos: 1,
  informes: 0,
  informesNuevos: 0,
  leads: 0
})

// Meta tags para SEO
definePageMeta({
  title: 'Dashboard - Automotora',
  description: 'Panel de control para tu automotora'
})
</script>
  