<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h1 class="text-3xl font-bold text-slate-800 mb-2">Mi Automotora</h1>
            <p class="text-slate-600">Gestiona la información de tu automotora</p>
          </div>
          <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <form @submit.prevent="guardarCambios" class="space-y-6">
          <!-- Información básica -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Nombre de la automotora</label>
              <input 
                v-model="automotora.nombre" 
                required
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900"
                placeholder="Nombre de tu automotora"
              />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Email</label>
              <input 
                v-model="automotora.email" 
                type="email"
                required
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900"
                placeholder="email@automotora.com"
              />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Teléfono</label>
              <input 
                v-model="automotora.telefono" 
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900"
                placeholder="+56 9 1234 5678"
              />
            </div>

            <div class="space-y-2">
              <label class="text-sm font-medium text-slate-700">Dirección</label>
              <input 
                v-model="automotora.direccion" 
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900"
                placeholder="Dirección completa"
              />
            </div>
          </div>

          <!-- Logo -->
          <div class="space-y-4">
            <label class="text-sm font-medium text-slate-700">Logo de la automotora</label>
            <div class="flex items-center space-x-6">
              <div v-if="automotora.logo" class="w-24 h-24 rounded-xl overflow-hidden border-2 border-slate-200">
                <img :src="automotora.logo" class="w-full h-full object-cover" />
              </div>
              <div v-else class="w-24 h-24 rounded-xl border-2 border-dashed border-slate-300 flex items-center justify-center">
                <svg class="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <input 
                  type="file" 
                  @change="subirLogo" 
                  accept="image/*"
                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                />
                <p class="text-xs text-slate-500 mt-1">PNG, JPG hasta 2MB</p>
              </div>
            </div>
          </div>

          <!-- Botones -->
          <div class="flex justify-end space-x-4 pt-6 border-t border-slate-200">
            <button 
              type="button"
              @click="cancelar"
              class="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors duration-200"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              :disabled="guardando"
              class="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="guardando" class="flex items-center space-x-2">
                <svg class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <span>Guardando...</span>
              </span>
              <span v-else>Guardar Cambios</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '~/stores/authStore'

// Definir el layout
definePageMeta({
  layout: 'default'
})

const { $api, $toast } = useNuxtApp()
const router = useRouter()
const authStore = useAuthStore()

// Estado reactivo
const automotora = ref({
  id: null,
  nombre: '',
  email: '',
  telefono: '',
  direccion: '',
  logo: '',
  slug: ''
})

const guardando = ref(false)
const cargando = ref(true)

// Cargar datos de la automotora
onMounted(async () => {
  console.log('🔵 [MiAutomotora] Cargando datos...');
  console.log('🔵 [MiAutomotora] Usuario:', authStore.user);
  
  if (!authStore.user) {
    console.log('❌ [MiAutomotora] Usuario no autenticado');
    router.push('/login')
    return
  }

  try {
    // Buscar automotora por usuario
    const response = await $api.get(`/automotoras/por-usuario/${authStore.user.id}`)
    console.log('✅ [MiAutomotora] Datos cargados:', response.data);
    
    automotora.value = response.data
  } catch (error) {
    console.error('❌ [MiAutomotora] Error cargando datos:', error);
    $toast.error('Error al cargar los datos de la automotora')
  } finally {
    cargando.value = false
  }
})

// Guardar cambios
async function guardarCambios() {
  console.log('🔵 [MiAutomotora] Guardando cambios...');
  guardando.value = true
  
  try {
    await $api.put(`/automotoras/${automotora.value.id}`, automotora.value)
    console.log('✅ [MiAutomotora] Cambios guardados');
    $toast.success('✅ Cambios guardados exitosamente')
  } catch (error) {
    console.error('❌ [MiAutomotora] Error guardando:', error);
    $toast.error('Error al guardar los cambios')
  } finally {
    guardando.value = false
  }
}

// Subir logo
async function subirLogo(event) {
  console.log('🔵 [MiAutomotora] Subiendo logo...');
  const file = event.target.files[0]
  
  if (!file) return
  
  const formData = new FormData()
  formData.append('logo', file)

  try {
    const res = await $api.post(`/automotoras/${automotora.value.id}/logo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    
    automotora.value.logo = res.data.logo
    console.log('✅ [MiAutomotora] Logo subido:', res.data.logo);
    $toast.success('✅ Logo actualizado')
  } catch (error) {
    console.error('❌ [MiAutomotora] Error subiendo logo:', error);
    $toast.error('Error al subir el logo')
  }
}

// Cancelar cambios
function cancelar() {
  router.push('/automotora/dashboard')
}
</script>
  