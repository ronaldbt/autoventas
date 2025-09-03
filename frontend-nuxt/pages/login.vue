<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
    <!-- Fondo decorativo -->
    <div class="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-orange-500/5"></div>
    
    <div class="relative z-10 w-full max-w-md">
      <!-- Logo y título -->
      <div class="text-center mb-8">
        <div class="flex justify-center mb-4">
          <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
        </div>
        <h1 class="text-3xl font-bold text-white mb-2">Bienvenido de vuelta</h1>
        <p class="text-slate-300">Inicia sesión en tu cuenta</p>
      </div>

      <!-- Formulario -->
      <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-orange-500/10 border border-white/20 p-8">
        <form @submit.prevent="login" class="space-y-6">
          <!-- Campo Email -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-700">Correo electrónico</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
                </svg>
              </div>
              <input
                v-model="email"
                type="email"
                required
                placeholder="tu@email.com"
                class="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
              />
            </div>
          </div>

          <!-- Campo Contraseña -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-700">Contraseña</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <input
                v-model="password"
                type="password"
                required
                placeholder="••••••••"
                class="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
              />
            </div>
          </div>

          <!-- Botón de envío -->
          <button 
            type="submit" 
            class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span class="flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              <span>Iniciar Sesión</span>
            </span>
          </button>

          <!-- Mensaje de error -->
          <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-red-700 text-sm">{{ error }}</p>
            </div>
          </div>
        </form>

        <!-- Enlaces adicionales -->
        <div class="mt-6 pt-6 border-t border-slate-200">
          <p class="text-center text-slate-600 text-sm">
            ¿No tienes cuenta? 
            <NuxtLink to="/register" class="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
              Regístrate aquí
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const email = ref('')
const password = ref('')
const error = ref('')

const { $api, $toast } = useNuxtApp()
const router = useRouter()
const authStore = useAuthStore()

const login = async () => {
  try {
    const res = await $api.post('/auth/login', {
      email: email.value,
      password: password.value
    })

    if (!res.data || !res.data.usuario || !res.data.token) {
      throw new Error('Respuesta inválida del servidor')
    }

    authStore.login(res.data)
    $toast.success('✅ Sesión iniciada con éxito')

    const rol = res.data.usuario.rol

    // Redireccionar según el rol
    switch (rol) {
      case 'CLIENTE':
        router.push('/cliente/dashboard')
        break
      case 'AUTOMOTORA':
        router.push('/automotora/mi-automotora')
        break
      case 'PUBLICISTA':
        router.push('/publicista/dashboard')
        break
      case 'ADMIN':
        router.push('/admin')
        break
      case 'PERITO':
        router.push('/perito')
        break
      default:
        $toast.warning('⚠️ Rol no reconocido. No se puede redirigir.')
        break
    }
  } catch (err) {
    console.error('❌ Error al iniciar sesión:', err)
    error.value = err.response?.data?.error || err.message || 'Error al iniciar sesión'
    $toast.error('❌ ' + error.value)
  }
}
</script>
