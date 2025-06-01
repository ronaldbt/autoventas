// src/stores/authStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter, useNuxtApp } from '#imports'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)
  const router = useRouter()

  function cargarDesdeLocalStorage() {
    const userLS = localStorage.getItem('user')
    const tokenLS = localStorage.getItem('token')
    if (userLS) user.value = JSON.parse(userLS)
    if (tokenLS) token.value = tokenLS
  }

  function login(data) {
    user.value = data.usuario
    token.value = data.token
    localStorage.setItem('user', JSON.stringify(data.usuario))
    localStorage.setItem('token', data.token)
    localStorage.setItem('rol', data.usuario.rol)
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('rol')
    router.push('/login')
  }

  // ✅ Verificar token contra el backend
  async function validarToken() {
    if (!token.value) return false

    try {
      const { $api } = useNuxtApp() // Asegúrate de tener `$api` configurado con Axios en plugins
      const res = await $api.get('/auth/verificar', {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      })

      if (res?.data?.usuario) {
        user.value = res.data.usuario
        return true
      }

      logout()
      return false
    } catch (error) {
      console.warn('Token inválido o expirado. Cerrando sesión.')
      logout()
      return false
    }
  }

  return {
    user,
    token,
    login,
    logout,
    cargarDesdeLocalStorage,
    validarToken
  }
})
