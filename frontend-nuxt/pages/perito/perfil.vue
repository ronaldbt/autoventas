<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Mi Perfil</h1>
            <p class="text-slate-600 text-lg">Gestiona tu información personal</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
        <div class="flex items-center space-x-3">
          <svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p class="text-red-700 font-medium">{{ error }}</p>
        </div>
      </div>

      <!-- Profile Content -->
      <div v-else class="space-y-8">
        <!-- Información Personal -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Información Personal</h2>
          </div>

          <form @submit.prevent="actualizarPerfil" class="space-y-6">
            <!-- Nombre -->
            <div>
              <label for="nombre" class="block text-sm font-medium text-slate-700 mb-2">
                Nombre Completo
              </label>
              <input
                id="nombre"
                v-model="form.nombre"
                type="text"
                required
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                placeholder="Ingresa tu nombre completo"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-slate-700 mb-2">
                Correo Electrónico
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                placeholder="tu@email.com"
              />
            </div>

            <!-- Rol (solo lectura) -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">
                Rol
              </label>
              <div class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-600">
                Perito Automotriz
              </div>
            </div>

            <!-- Botones de acción -->
            <div class="flex space-x-4 pt-6">
              <button
                type="submit"
                :disabled="updating"
                class="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="updating" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Actualizando...
                </span>
                <span v-else>Guardar Cambios</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Cambiar Contraseña -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Cambiar Contraseña</h2>
          </div>

          <form @submit.prevent="cambiarPassword" class="space-y-6">
            <!-- Contraseña Actual -->
            <div>
              <label for="currentPassword" class="block text-sm font-medium text-slate-700 mb-2">
                Contraseña Actual
              </label>
              <input
                id="currentPassword"
                v-model="passwordForm.currentPassword"
                type="password"
                required
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                placeholder="Ingresa tu contraseña actual"
              />
            </div>

            <!-- Nueva Contraseña -->
            <div>
              <label for="newPassword" class="block text-sm font-medium text-slate-700 mb-2">
                Nueva Contraseña
              </label>
              <input
                id="newPassword"
                v-model="passwordForm.newPassword"
                type="password"
                required
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                placeholder="Ingresa tu nueva contraseña"
              />
            </div>

            <!-- Confirmar Nueva Contraseña -->
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-slate-700 mb-2">
                Confirmar Nueva Contraseña
              </label>
              <input
                id="confirmPassword"
                v-model="passwordForm.confirmPassword"
                type="password"
                required
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                placeholder="Confirma tu nueva contraseña"
              />
            </div>

            <!-- Botón de cambiar contraseña -->
            <div class="flex space-x-4 pt-6">
              <button
                type="submit"
                :disabled="changingPassword"
                class="flex-1 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="changingPassword" class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Cambiando...
                </span>
                <span v-else>Cambiar Contraseña</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/stores/authStore'

// Configuración de página
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

// Stores
const authStore = useAuthStore()
const { $api } = useNuxtApp()

// Estado reactivo
const loading = ref(false)
const updating = ref(false)
const changingPassword = ref(false)
const error = ref(null)

// Formularios
const form = ref({
  nombre: '',
  email: ''
})

const passwordForm = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// Cargar datos del usuario
const cargarPerfil = () => {
  if (authStore.user) {
    form.value.nombre = authStore.user.nombre || ''
    form.value.email = authStore.user.email || ''
  }
}

// Actualizar perfil
const actualizarPerfil = async () => {
  try {
    updating.value = true
    error.value = null

    // Aquí iría la llamada al API para actualizar el perfil
    // const response = await $api.put('/auth/perfil', form.value)
    
    // Simulación por ahora
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Actualizar el store local
    if (authStore.user) {
      authStore.user.nombre = form.value.nombre
      authStore.user.email = form.value.email
    }

    // Mostrar mensaje de éxito
    const { $toast } = useNuxtApp()
    $toast.success('✅ Perfil actualizado exitosamente')

  } catch (err) {
    console.error('Error al actualizar perfil:', err)
    error.value = err.message || 'Error al actualizar el perfil'
    
    const { $toast } = useNuxtApp()
    $toast.error('❌ ' + error.value)
  } finally {
    updating.value = false
  }
}

// Cambiar contraseña
const cambiarPassword = async () => {
  try {
    changingPassword.value = true
    error.value = null

    // Validar que las contraseñas coincidan
    if (passwordForm.value.newPassword !== passwordForm.value.confirmPassword) {
      throw new Error('Las contraseñas no coinciden')
    }

    // Validar longitud mínima
    if (passwordForm.value.newPassword.length < 6) {
      throw new Error('La nueva contraseña debe tener al menos 6 caracteres')
    }

    // Aquí iría la llamada al API para cambiar la contraseña
    // const response = await $api.put('/auth/cambiar-password', {
    //   currentPassword: passwordForm.value.currentPassword,
    //   newPassword: passwordForm.value.newPassword
    // })
    
    // Simulación por ahora
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Limpiar formulario
    passwordForm.value = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }

    // Mostrar mensaje de éxito
    const { $toast } = useNuxtApp()
    $toast.success('✅ Contraseña cambiada exitosamente')

  } catch (err) {
    console.error('Error al cambiar contraseña:', err)
    error.value = err.message || 'Error al cambiar la contraseña'
    
    const { $toast } = useNuxtApp()
    $toast.error('❌ ' + error.value)
  } finally {
    changingPassword.value = false
  }
}

// Cargar datos al montar
onMounted(() => {
  cargarPerfil()
})

// Watchear cambios en el store
watch(() => authStore.user, () => {
  cargarPerfil()
}, { deep: true })
</script>