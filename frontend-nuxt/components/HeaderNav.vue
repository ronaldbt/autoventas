<template>
  <header class="bg-white/95 backdrop-blur-sm border-b border-slate-200/50 shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo y navegación -->
        <div class="flex items-center space-x-8">
          <NuxtLink to="/" class="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <div class="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Autoventas360
            </span>
          </NuxtLink>
          
          <nav class="hidden lg:flex space-x-6">
            <NuxtLink to="/nuevos" class="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200">Autos Nuevos</NuxtLink>
            <NuxtLink to="/electricos" class="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200">Autos Eléctricos</NuxtLink>
            <NuxtLink to="/analisis" class="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200">Análisis</NuxtLink>
            <NuxtLink to="/noticias" class="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200">Noticias</NuxtLink>
            <NuxtLink to="/ayuda" class="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200">Ayuda</NuxtLink>
            <NuxtLink to="/servicios" class="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200">Servicios</NuxtLink>
          </nav>
        </div>

        <!-- Acciones del usuario -->
        <div class="flex items-center space-x-4">
          <!-- Si está logueado -->
          <div v-if="estaLogueado" class="relative" ref="menuRef">
            <button
              @click="mostrarMenu = !mostrarMenu"
              class="flex items-center gap-2 px-4 py-2 text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200 rounded-lg hover:bg-slate-50"
            >
              <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-semibold">{{ usuario?.email?.charAt(0)?.toUpperCase() || 'U' }}</span>
              </div>
              <span class="hidden sm:block">{{ usuario?.email || 'Usuario' }}</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <!-- Menú desplegable -->
            <div
              v-if="mostrarMenu"
              class="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200/50 z-50 py-2"
            >
              <div class="px-4 py-3 border-b border-slate-100">
                <p class="text-sm font-medium text-slate-900">{{ usuario?.email || 'Usuario' }}</p>
                <p class="text-xs text-slate-500">Usuario registrado</p>
              </div>
              <NuxtLink to="/perfil" class="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Mi perfil
              </NuxtLink>
              <NuxtLink to="/mis-autos" class="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200">
                <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                Mis autos
              </NuxtLink>
              <div class="border-t border-slate-100 mt-2 pt-2">
                <button
                  @click="cerrarSesion"
                  class="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                >
                  <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                  Cerrar sesión
                </button>
              </div>
            </div>
          </div>

          <!-- Si NO está logueado -->
          <template v-else>
            <NuxtLink to="/login" class="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-slate-50">
              Ingresar
            </NuxtLink>
            <NuxtLink to="/register" class="text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-slate-50">
              Registrarse
            </NuxtLink>
          </template>

          <!-- Botón Vende tu Auto (mantener como está) -->
          <NuxtLink to="/vender">
            <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md whitespace-nowrap">
              Vende tu Auto
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { useAuthStore } from '../stores/authStore'

const router = useRouter()
let authStore = null
const storeReady = ref(false)

// Inicializar el store de forma segura
onMounted(() => {
  try {
    authStore = useAuthStore()
    storeReady.value = true
    console.log('🔵 [HeaderNav] AuthStore inicializado correctamente');
  } catch (error) {
    console.error('🔴 [HeaderNav] Error inicializando AuthStore:', error);
  }
})

const estaLogueado = computed(() => {
  // Si no tenemos store, verificar localStorage directamente
  if (!storeReady.value || !authStore) {
    if (!process.client) return false
    
    try {
      const token = localStorage.getItem('token')
      const user = localStorage.getItem('user')
      return !!(token && user)
    } catch {
      return false
    }
  }
  
  // Si tenemos store, usar la lógica normal
  const isLoggedIn = !!(authStore.user && authStore.token)
  console.log('🔵 [HeaderNav] Verificando estado de login:', {
    user: authStore.user,
    token: authStore.token,
    estaLogueado: isLoggedIn
  });
  return isLoggedIn
});

const mostrarMenu = ref(false)

// Referencia al contenedor del menú
const menuRef = ref(null)
onClickOutside(menuRef, () => {
  mostrarMenu.value = false
})

// Cerrar sesión
function cerrarSesion() {
  if (authStore) {
    authStore.logout()
  } else {
    // Fallback si no hay store disponible
    if (process.client) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('rol')
    }
  }
  mostrarMenu.value = false
  router.push('/')
}

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
</script>
