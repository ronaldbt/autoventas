<!-- layouts/default.vue -->
<template>
  <div class="h-screen flex flex-col bg-black text-white">
    <!-- 🔝 Header fijo arriba -->
    <header class="h-16 flex-shrink-0">
      <HeaderNav />
    </header>

    <!-- 📦 Contenedor principal: sidebar + contenido -->
    <div class="flex flex-1 overflow-hidden">
      <!-- 🧭 Sidebar lateral si está logueado -->
      <aside v-if="estaLogueado" class="hidden md:flex w-64 bg-gray-900 text-white">
        <Sidebar />
      </aside>

      <!-- 📄 Contenido principal -->
      <main class="flex-1 overflow-y-auto bg-gray-900">
        <slot />
      </main>
    </div>
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

const estaLogueado = computed(() => !!authStore.user && !!authStore.token)

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
