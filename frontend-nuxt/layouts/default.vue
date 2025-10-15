<!-- layouts/default.vue -->
<template>
  <!-- Diferentes layouts dependiendo del estado de autenticación -->
  <div v-if="estaLogueado" class="min-h-screen bg-slate-50">
    <!-- Layout para usuarios logueados: Header + sidebar + contenido -->
    
    <!-- 🔝 Header fijo para usuarios logueados -->
    <header class="fixed top-0 right-0 left-0 md:left-64 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200/50 shadow-sm">
      <div class="h-16 flex items-center justify-between px-6">
        <!-- Logo compacto -->
        <div class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <span class="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Autoventas360
          </span>
        </div>

        <!-- Acciones del usuario -->
        <div class="flex items-center space-x-4">
          <div class="relative" ref="menuRef">
            <button
              @click="mostrarMenu = !mostrarMenu"
              class="flex items-center gap-2 px-3 py-2 text-slate-700 hover:text-orange-500 font-medium transition-colors duration-200 rounded-lg hover:bg-slate-50"
            >
              <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-semibold">{{ usuario?.email?.charAt(0)?.toUpperCase() || 'U' }}</span>
              </div>
              <span class="hidden sm:block text-sm">{{ usuario?.email || 'Usuario' }}</span>
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
                <p class="text-xs text-slate-500">{{ usuario?.rol?.nombre || 'Cliente' }}</p>
              </div>
              <NuxtLink
                to="/cliente/perfil"
                class="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors duration-200"
              >
                Mi perfil
              </NuxtLink>
              <button
                @click="cerrarSesion"
                class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <!-- 🧭 Sidebar lateral FIJO -->
    <aside class="hidden md:flex w-64 text-white flex-shrink-0 fixed left-0 top-0 h-full z-30">
      <Sidebar />
    </aside>

    <!-- 📄 Contenido principal con scroll independiente -->
    <main class="md:ml-64 overflow-y-auto bg-slate-50 min-h-screen pt-16">
      <div class="p-6 pb-20 md:pb-6">
        <slot />
      </div>
    </main>

    <!-- 📱 Sidebar móvil (manejado en el componente Sidebar) -->
    <!-- El sidebar móvil se renderiza desde el componente Sidebar -->
  </div>

  <!-- Layout para usuarios NO logueados: Header sticky + contenido -->
  <div v-else class="min-h-screen bg-slate-50">
    <!-- 🔝 Header público STICKY -->
    <header class="fixed top-0 left-0 right-0 z-50">
      <HeaderNav />
    </header>

    <!-- 📄 Contenido principal con padding para el header -->
    <main class="pt-16">
      <slot />
    </main>
  </div>
</template>



<script setup>
import { onMounted, computed, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import HeaderNav from '../components/HeaderNav.vue'

const authStore = useAuthStore()
const { $api, $toast } = useNuxtApp()
const router = useRouter()

const estaLogueado = computed(() => {
  const isLoggedIn = !!authStore.user && !!authStore.token
  return isLoggedIn
})

const usuario = computed(() => authStore.user)
const mostrarMenu = ref(false)
const menuRef = ref(null)

const cerrarSesion = async () => {
  try {
    await authStore.logout()
    $toast.success('Sesión cerrada exitosamente.')
    await router.push('/login')
  } catch (error) {
    console.error('Error al cerrar sesión:', error)
    $toast.error('Error al cerrar sesión.')
  }
}

// Cerrar menú al hacer click fuera
onClickOutside(menuRef, () => {
  mostrarMenu.value = false
})

onMounted(async () => {
  authStore.cargarDesdeLocalStorage()

  if (authStore.token) {
    try {
      const res = await $api.get('/auth/verificar', {
        headers: {
          Authorization: `Bearer ${authStore.token}`
        }
      })

      if (res.data?.usuario) {
        authStore.user = res.data.usuario
        localStorage.setItem('user', JSON.stringify(res.data.usuario))
      }
    } catch (err) {
      console.warn('⛔ Token inválido o expirado. Cerrando sesión.')
      authStore.logout()
      $toast.error('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.')
      await router.push('/login') // ✅ Redirige automáticamente
    }
  }
})
</script>
