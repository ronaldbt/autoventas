<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">
              {{ peritaje?.estado === 'en_proceso' ? 'Solicitud de Peritaje' : 'Informe de Peritaje' }}
            </h1>
            <p class="text-slate-600 text-lg">
              {{ peritaje?.estado === 'en_proceso' ? 
                'Información detallada de la solicitud para realizar el peritaje' : 
                'Resultado de la inspección técnica del vehículo' 
              }}
            </p>
          </div>
          <div class="flex items-center space-x-4">
            <div :class="[
              'w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg',
              peritaje?.estado === 'en_proceso' 
                ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
                : 'bg-gradient-to-r from-orange-500 to-orange-600'
            ]">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="peritaje?.estado === 'en_proceso'" 
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path v-else 
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p class="text-slate-800 font-semibold">
                {{ peritaje?.estado === 'en_proceso' ? 'Solicitud Asignada' : 'Peritaje Técnico' }}
              </p>
              <p class="text-slate-500 text-sm uppercase tracking-wide">
                {{ peritaje?.estado?.replace('_', ' ') || 'Cargando...' }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="peritaje" class="space-y-8">
        <!-- Información del Vehículo -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Información del Vehículo</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-slate-600 uppercase tracking-wide">Patente</p>
              <p class="text-xl font-bold text-slate-800">{{ peritaje.patente }}</p>
            </div>
            <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-slate-600 uppercase tracking-wide">Marca</p>
              <p class="text-xl font-bold text-slate-800">{{ peritaje.marca }}</p>
            </div>
            <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-slate-600 uppercase tracking-wide">Modelo</p>
              <p class="text-xl font-bold text-slate-800">{{ peritaje.modelo }}</p>
            </div>
            <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-slate-600 uppercase tracking-wide">Color</p>
              <p class="text-xl font-bold text-slate-800">{{ peritaje.color }}</p>
            </div>
            <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-slate-600 uppercase tracking-wide">Propietario</p>
              <p class="text-xl font-bold text-slate-800">{{ peritaje.propietario }}</p>
            </div>
            <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-slate-600 uppercase tracking-wide">Fecha del Peritaje</p>
              <p class="text-xl font-bold text-slate-800">{{ new Date(peritaje.fecha).toLocaleDateString('es-CL') }}</p>
            </div>
          </div>
        </div>

        <!-- Información del Cliente y Solicitud -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Información del Cliente</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-green-600 uppercase tracking-wide">Cliente</p>
              <p class="text-xl font-bold text-green-800">{{ peritaje.usuarioCliente?.nombre || peritaje.nombre }}</p>
            </div>
            <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-green-600 uppercase tracking-wide">Email</p>
              <p class="text-lg font-bold text-green-800">{{ peritaje.usuarioCliente?.email || peritaje.email }}</p>
            </div>
            <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-green-600 uppercase tracking-wide">Teléfono</p>
              <p class="text-lg font-bold text-green-800">{{ peritaje.telefono }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide">Dirección</p>
              <p class="text-lg font-bold text-blue-800">{{ peritaje.direccion }}</p>
            </div>
            <div class="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
              <p class="text-sm font-semibold text-blue-600 uppercase tracking-wide">Tipo de Servicio</p>
              <div class="flex items-center space-x-2">
                <span :class="[
                  'inline-flex items-center px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide',
                  peritaje.tipoServicio === 'domicilio' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-purple-100 text-purple-800'
                ]">
                  <svg v-if="peritaje.tipoServicio === 'domicilio'" class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  <svg v-else class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  {{ peritaje.tipoServicio === 'domicilio' ? 'A Domicilio' : 'En Sucursal' }}
                </span>
                <span v-if="peritaje.tipoServicio === 'domicilio'" class="text-sm text-blue-600 font-semibold">
                  (+$15.000)
                </span>
              </div>
            </div>
          </div>

          <div v-if="peritaje.motivo || peritaje.comentarios" class="mt-6 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div v-if="peritaje.motivo" class="mb-4">
              <p class="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-1">Motivo del Peritaje</p>
              <p class="text-amber-800 font-medium capitalize">{{ peritaje.motivo }}</p>
            </div>
            <div v-if="peritaje.comentarios">
              <p class="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-1">Comentarios Adicionales</p>
              <p class="text-amber-800">{{ peritaje.comentarios }}</p>
            </div>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div v-if="peritaje.estado === 'en_proceso'" class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div class="flex items-center justify-between">
            <div>
              <h3 class="text-xl font-bold text-slate-800 mb-2">¿Listo para realizar el peritaje?</h3>
              <p class="text-slate-600">Completa la inspección técnica del vehículo para generar el informe oficial.</p>
            </div>
            <div class="flex items-center space-x-4">
              <button
                @click="realizarPeritaje"
                class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Realizar Peritaje
              </button>
            </div>
          </div>
        </div>
  
        <!-- Mostrar secciones técnicas solo si el peritaje está completado -->
        <template v-if="peritaje.estado === 'completado'">
        <!-- Sistema de Frenos -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Sistema de Frenos</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <p class="text-sm font-semibold text-red-600 uppercase tracking-wide">Eficacia Delantera</p>
              <p class="text-2xl font-bold text-red-800">{{ peritaje.frenos_eficacia_delantera }}%</p>
            </div>
            <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <p class="text-sm font-semibold text-red-600 uppercase tracking-wide">Eficacia Trasera</p>
              <p class="text-2xl font-bold text-red-800">{{ peritaje.frenos_eficacia_trasera }}%</p>
            </div>
            <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <p class="text-sm font-semibold text-red-600 uppercase tracking-wide">Esfuerzo</p>
              <p class="text-2xl font-bold text-red-800">{{ peritaje.frenos_esfuerzo }} kg</p>
            </div>
            <div class="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
              <p class="text-sm font-semibold text-red-600 uppercase tracking-wide">Estado General</p>
              <span :class="[
                'inline-flex px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide',
                peritaje.frenos_estado_general === 'BUENO' ? 'bg-green-100 text-green-800' :
                peritaje.frenos_estado_general === 'REGULAR' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              ]">
                {{ peritaje.frenos_estado_general }}
              </span>
            </div>
          </div>
        </div>
  
        <!-- Sistema de Suspensión -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Sistema de Suspensión</h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <p class="text-sm font-semibold text-green-600 uppercase tracking-wide">Delantera Izquierda</p>
              <p class="text-2xl font-bold text-green-800">{{ peritaje.suspension_delantera_izquierda }}</p>
            </div>
            <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <p class="text-sm font-semibold text-green-600 uppercase tracking-wide">Delantera Derecha</p>
              <p class="text-2xl font-bold text-green-800">{{ peritaje.suspension_delantera_derecha }}</p>
            </div>
            <div class="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
              <p class="text-sm font-semibold text-green-600 uppercase tracking-wide">Estado General</p>
              <span :class="[
                'inline-flex px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide',
                peritaje.suspension_estado_general === 'BUENO' ? 'bg-green-100 text-green-800' :
                peritaje.suspension_estado_general === 'REGULAR' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              ]">
                {{ peritaje.suspension_estado_general }}
              </span>
            </div>
          </div>
        </div>

        <!-- Resumen y Observaciones -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Resumen y Observaciones</h2>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Observaciones -->
            <div>
              <h3 class="text-lg font-semibold text-slate-800 mb-4">Observaciones Generales</h3>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p class="text-slate-700">{{ peritaje.observaciones_generales || 'No hay observaciones adicionales.' }}</p>
              </div>
            </div>
            
            <!-- Información Económica -->
            <div>
              <h3 class="text-lg font-semibold text-slate-800 mb-4">Información Económica</h3>
              <div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200">
                  <p class="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Valor Avalúo</p>
                  <p class="text-2xl font-bold text-emerald-800">${{ peritaje.valorAvaluo?.toLocaleString() || '0' }}</p>
                </div>
                <div class="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-xl border border-orange-200">
                  <p class="text-sm font-semibold text-orange-600 uppercase tracking-wide">Precio del Peritaje</p>
                  <p class="text-2xl font-bold text-orange-800">${{ peritaje.precio?.toLocaleString() || '0' }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Botón de Acción -->
        <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white text-center">
          <h3 class="text-2xl font-bold mb-4">✅ Peritaje Completado</h3>
          <p class="text-orange-100 mb-6">Este informe ha sido realizado por un perito certificado y contiene toda la información técnica del vehículo inspeccionado.</p>
          <button 
            @click="imprimirInforme"
            class="inline-flex items-center px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all duration-200 transform hover:scale-105"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path>
            </svg>
            Imprimir Informe
          </button>
        </div>
        </template>
        <!-- Fin de secciones técnicas -->
      </div>
  
      <div v-else class="bg-white rounded-2xl shadow-xl p-12 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p class="text-slate-600 text-lg">Cargando información del peritaje...</p>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { usePeritajeStore } from '~/stores/peritajeStore'

definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

const route = useRoute()
const router = useRouter()
const peritajeStore = usePeritajeStore()
const peritaje = ref(null)
const loading = ref(true)

// Cargar datos del peritaje
onMounted(async () => {
  try {
    loading.value = true
    console.log('🔍 [Peritaje Detail] Cargando peritaje ID:', route.params.id)
    
    const data = await peritajeStore.obtenerPeritaje(route.params.id)
    peritaje.value = data
    
    console.log('✅ [Peritaje Detail] Peritaje cargado:', data)
  } catch (error) {
    console.error('❌ [Peritaje Detail] Error al cargar peritaje:', error)
    
    // Mostrar error al usuario
    if (error.response?.status === 404) {
      alert('Peritaje no encontrado o no tienes permisos para verlo.')
      router.push('/perito/peritajes')
    } else {
      alert('Error al cargar el peritaje. Inténtalo de nuevo.')
    }
  } finally {
    loading.value = false
  }
})

// Redirigir al formulario de nuevo peritaje con datos pre-llenados
const realizarPeritaje = () => {
  console.log('🎯 [Peritaje Detail] Iniciando realización de peritaje')
  
  // Guardar datos del peritaje en el store para pre-llenar el formulario
  peritajeStore.setActual(peritaje.value)
  
  // Redirigir al formulario de nuevo peritaje
  router.push('/perito/nuevo')
}

// Imprimir informe (para peritajes completados)
const imprimirInforme = () => {
  window.print()
}
</script>
  