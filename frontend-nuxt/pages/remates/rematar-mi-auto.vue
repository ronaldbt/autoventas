<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Rematar Mi Auto</h1>
            <p class="text-slate-600 text-lg">Obtén el mejor precio por tu vehículo en nuestros remates en vivo</p>
          </div>
          <NuxtLink
            to="/remates"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Ver Remates
          </NuxtLink>
        </div>
      </div>

      <!-- Beneficios -->
      <div class="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl shadow-xl p-8 text-white mb-8">
        <h2 class="text-2xl font-bold mb-6 text-center">¿Por qué rematar tu auto con nosotros?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">Venta Rápida</h3>
            <p class="text-green-100">Dinero en tu cuenta en menos de 2 horas</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">Mejor Precio</h3>
            <p class="text-green-100">Competencia real entre compradores</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">100% Seguro</h3>
            <p class="text-green-100">Proceso transparente y verificado</p>
          </div>
        </div>
      </div>

      <!-- Formulario -->
      <div class="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div class="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
          <h2 class="text-2xl font-bold text-white">Solicita Rematar tu Vehículo</h2>
          <p class="text-orange-100 mt-2">Completa la información para programar el remate de tu auto</p>
        </div>

        <form @submit.prevent="enviarSolicitud" class="p-8">
          <!-- Información del Vehículo -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-slate-800 mb-4">Información del Vehículo</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Marca *</label>
                <input
                  v-model="solicitud.marca"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ej: Toyota"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Modelo *</label>
                <input
                  v-model="solicitud.modelo"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ej: Corolla"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Año *</label>
                <input
                  v-model="solicitud.ano"
                  type="number"
                  min="1980"
                  max="2024"
                  required
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ej: 2018"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Kilometraje</label>
                <input
                  v-model="solicitud.kilometraje"
                  type="number"
                  min="0"
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ej: 45000"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Patente *</label>
                <input
                  v-model="solicitud.patente"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ej: ABC123"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Precio Base Sugerido *</label>
                <input
                  v-model="solicitud.precioBase"
                  type="number"
                  min="1000000"
                  step="100000"
                  required
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ej: 8500000"
                />
              </div>
            </div>
          </div>

          <!-- Información del Propietario -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-slate-800 mb-4">Información del Propietario</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Nombre Completo *</label>
                <input
                  v-model="solicitud.propietario"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Nombre completo del propietario"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Teléfono de Contacto *</label>
                <input
                  v-model="solicitud.telefono"
                  type="tel"
                  required
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+56 9 1234 5678"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Email *</label>
                <input
                  v-model="solicitud.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="propietario@email.com"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Ciudad</label>
                <input
                  v-model="solicitud.ciudad"
                  type="text"
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Ej: Santiago"
                />
              </div>
            </div>
          </div>

          <!-- Preferencias del Remate -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-slate-800 mb-4">Preferencias del Remate</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Fecha Preferida</label>
                <input
                  v-model="solicitud.fechaPreferida"
                  type="date"
                  :min="fechaMinima"
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-700 mb-2">Hora Preferida</label>
                <select
                  v-model="solicitud.horaPreferida"
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Selecciona una hora</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Observaciones -->
          <div class="mb-8">
            <label class="block text-sm font-semibold text-slate-700 mb-2">Observaciones Adicionales</label>
            <textarea
              v-model="solicitud.observaciones"
              rows="4"
              class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Describe cualquier detalle especial del vehículo, daños, mejoras, etc."
            ></textarea>
          </div>

          <!-- Términos y Condiciones -->
          <div class="mb-8">
            <label class="flex items-start space-x-3">
              <input
                v-model="aceptaTerminos"
                type="checkbox"
                required
                class="mt-1 w-5 h-5 text-orange-600 border-slate-300 rounded focus:ring-orange-500"
              />
              <span class="text-sm text-slate-600">
                Acepto los <a href="#" class="text-orange-600 hover:underline">términos y condiciones</a> 
                del servicio de remates y autorizo la realización del peritaje de mi vehículo *
              </span>
            </label>
          </div>

          <!-- Botón de Envío -->
          <div class="flex items-center justify-center">
            <button
              type="submit"
              :disabled="enviando"
              class="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <svg v-if="enviando" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ enviando ? 'Enviando Solicitud...' : 'Solicitar Remate' }}
            </button>
          </div>
        </form>
      </div>

      <!-- Información Adicional -->
      <div class="mt-8 bg-blue-50 rounded-2xl p-8">
        <h3 class="text-xl font-bold text-slate-800 mb-4">¿Qué sigue después?</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
            <div>
              <h4 class="font-semibold text-slate-800">Revisión</h4>
              <p class="text-slate-600 text-sm">Revisamos tu solicitud en 24 horas</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
            <div>
              <h4 class="font-semibold text-slate-800">Peritaje</h4>
              <p class="text-slate-600 text-sm">Coordinamos el peritaje técnico</p>
            </div>
          </div>
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
            <div>
              <h4 class="font-semibold text-slate-800">Remate</h4>
              <p class="text-slate-600 text-sm">Programamos tu remate en vivo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

// Meta tags para SEO
useHead({
  title: 'Rematar Mi Auto | Autoventas360 - Vende tu Vehículo en Subasta',
  meta: [
    {
      name: 'description',
      content: 'Vende tu auto al mejor precio en nuestros remates en vivo. Proceso rápido, seguro y transparente. ¡Obtén dinero en menos de 2 horas!'
    },
    {
      name: 'keywords',
      content: 'vender auto remate, subasta vehiculo, rematar auto, venta rapida auto, mejor precio auto'
    }
  ]
})

// Estado
const enviando = ref(false)
const aceptaTerminos = ref(false)

const solicitud = reactive({
  marca: '',
  modelo: '',
  ano: '',
  kilometraje: '',
  patente: '',
  precioBase: '',
  propietario: '',
  telefono: '',
  email: '',
  ciudad: '',
  fechaPreferida: '',
  horaPreferida: '',
  observaciones: ''
})

// Computed
const fechaMinima = computed(() => {
  const hoy = new Date()
  const manana = new Date(hoy.getTime() + 24 * 60 * 60 * 1000)
  return manana.toISOString().split('T')[0]
})

// Funciones
const enviarSolicitud = async () => {
  try {
    enviando.value = true
    
    // TODO: Implementar llamada a API
    console.log('Enviando solicitud de remate:', solicitud)
    
    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('¡Solicitud enviada exitosamente! Te contactaremos pronto.')
    
    // Limpiar formulario
    Object.keys(solicitud).forEach(key => {
      solicitud[key] = ''
    })
    aceptaTerminos.value = false
    
  } catch (error) {
    console.error('Error enviando solicitud:', error)
    alert('Error al enviar la solicitud. Por favor intenta nuevamente.')
  } finally {
    enviando.value = false
  }
}
</script>