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
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
            </svg>
          </div>
        </div>
        <h1 class="text-3xl font-bold text-white mb-2">Únete a nosotros</h1>
        <p class="text-slate-300">Crea tu cuenta en Autoventas360</p>
      </div>

      <!-- Formulario -->
      <div class="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl shadow-orange-500/10 border border-white/20 p-8">
        <form @submit.prevent="register" class="space-y-6">
          <!-- Campo Nombre -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-700">Nombre completo</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <input
                v-model="nombre"
                required
                placeholder="Tu nombre completo"
                class="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
              />
            </div>
          </div>

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

          <!-- Campo Rol -->
          <div class="space-y-2">
            <label class="text-sm font-medium text-slate-700">Tipo de cuenta</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <select
                v-model="rol"
                required
                class="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 appearance-none"
              >
                <option disabled value="">Selecciona un tipo de cuenta</option>
                <option value="CLIENTE">Cliente</option>
                <option value="AUTOMOTORA">Automotora</option>
                <option value="PUBLICISTA">Publicista</option>
              </select>
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          <!-- Botón de envío -->
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span class="flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
              <span>Crear Cuenta</span>
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
            ¿Ya tienes cuenta? 
            <NuxtLink to="/login" class="text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200">
              Inicia sesión aquí
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ✅ Nuxt 3 usa useRouter directamente
const router = useRouter()
const { $api, $toast } = useNuxtApp()

const nombre = ref('')
const email = ref('')
const password = ref('')
const rol = ref('')
const error = ref('')

const register = async () => {
  try {
    await $api.post('/auth/register', {
      nombre: nombre.value,
      email: email.value,
      password: password.value,
      rol: rol.value
    })

    $toast.success('✅ Registro exitoso')
    router.push('/login')
  } catch (err) {
    error.value = err.response?.data?.error || 'Error al registrarse'
    $toast.error('❌ ' + error.value)
  }
}
</script>
  