<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Informe de Peritaje</h1>
            <p class="text-slate-600 text-lg">Resultado de la inspección técnica del vehículo</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div>
              <p class="text-slate-800 font-semibold">Peritaje Técnico</p>
              <p class="text-slate-500 text-sm uppercase tracking-wide">Informe Oficial</p>
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
      </div>
  
      <div v-else class="bg-white rounded-2xl shadow-xl p-12 text-center">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <p class="text-slate-600 text-lg">Cargando información del peritaje...</p>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { onMounted, ref } from 'vue'
  import { usePeritajeStore } from '../stores/peritajeStore'
  import peritajeService from '../services/peritajeService'
  import { useNuxtApp } from '#app'
  
  const route = useRoute()
  const peritaje = ref(null)
  const { $api } = useNuxtApp()
  
  onMounted(async () => {
    const res = await peritajeService.obtenerUno($api, route.params.id)
    peritaje.value = res.data
  })
  
  function calcularComision(precio) {
    return Math.round(precio * 0.6).toLocaleString()
  }

  function imprimirInforme() {
    window.print()
  }
  </script>
  