<!-- layouts/default.vue -->
<template>
  <!-- Diferentes layouts dependiendo del estado de autenticación -->
  <div v-if="estaLogueado" class="min-h-screen flex bg-slate-950 text-white">
    <!-- Layout para usuarios logueados: Solo sidebar + contenido -->
    
    <!-- 🧭 Sidebar lateral -->
    <aside class="hidden md:flex w-64 bg-slate-950 text-white flex-shrink-0">
      <Sidebar />
    </aside>

    <!-- 📄 Contenido principal -->
    <main class="flex-1 overflow-y-auto bg-slate-50 min-h-0">
      <slot />
    </main>

    <!-- 📱 Sidebar móvil (copiado desde Sidebar.vue) -->
    <nav class="md:hidden fixed bottom-0 left-0 w-full bg-slate-950 text-white flex justify-around items-center py-2 shadow-lg z-40">
      <!-- Links del sidebar móvil se manejan en el componente Sidebar -->
    </nav>
  </div>

  <!-- Layout para usuarios NO logueados: Solo header + contenido -->
  <div v-else class="min-h-screen flex flex-col bg-slate-50">
    <!-- 🔝 Header público -->
    <header class="h-16 flex-shrink-0">
      <HeaderNav />
    </header>

    <!-- 📄 Contenido principal -->
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>



<script setup>
import { onMounted, computed } from 'vue'
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
