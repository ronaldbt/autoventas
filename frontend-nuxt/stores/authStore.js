// src/stores/authStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)

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
  }

  return {
    user,
    token,
    login,
    logout,
    cargarDesdeLocalStorage
  }
})
