<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div class="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Iniciar Sesión</h2>
  
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Correo</label>
            <input v-model="email" type="email" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Contraseña</label>
            <input v-model="password" type="password" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Entrar
          </button>
          <p v-if="error" class="text-red-500 mt-3 text-sm text-center">{{ error }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useAuthStore } from '../stores/authStore'
  import { useRouter } from 'vue-router'
  
  const email = ref('')
  const password = ref('')
  const error = ref('')
  
  const { $api, $toast } = useNuxtApp()
  const router = useRouter()
  const authStore = useAuthStore()
  
  const login = async () => {
    console.log('🔐 Intentando iniciar sesión con:')
    console.log('📧 Email:', email.value)
    console.log('🔑 Password:', password.value)
  
    try {
      const res = await $api.post('/auth/login', {
        email: email.value,
        password: password.value
      })
  
      console.log('✅ Respuesta del backend:', res.data)
  
      if (!res.data || !res.data.usuario || !res.data.token) {
        console.warn('⚠️ Datos incompletos en la respuesta:', res.data)
        throw new Error('Respuesta inválida del servidor')
      }
  
      authStore.login(res.data)
      $toast.success('✅ Sesión iniciada con éxito')
  
      const rol = res.data.usuario.rol
      console.log('👤 Rol detectado:', rol)
  
      if (rol === 'CLIENTE') {
        router.push('/cliente/dashboard')
      } else if (rol === 'CONCESIONARIO') {
        router.push('/concesionario/dashboard')
      } else if (rol === 'PUBLICISTA') {
        router.push('/publicista/dashboard')
      } else if (rol === 'ADMIN') {
        router.push('/admin')
      } else {
        console.warn('⚠️ Rol no reconocido:', rol)
      }
  
    } catch (err) {
      console.error('❌ Error al hacer login:', err)
      console.error('🧾 Detalles de respuesta:', err.response?.data)
  
      error.value = err.response?.data?.error || err.message || 'Error al iniciar sesión'
      $toast.error('❌ ' + error.value)
    }
  }
  </script>
  