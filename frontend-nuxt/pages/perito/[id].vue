<template>
    <div class="p-6 max-w-6xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">Detalle del Peritaje</h1>
  
      <div v-if="peritaje" class="space-y-6">
        <!-- Sección principal -->
        <section class="bg-white shadow-md rounded p-6">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div><strong>Patente:</strong> {{ peritaje.patente }}</div>
            <div><strong>Marca:</strong> {{ peritaje.marca }}</div>
            <div><strong>Modelo:</strong> {{ peritaje.modelo }}</div>
            <div><strong>Color:</strong> {{ peritaje.color }}</div>
            <div><strong>Propietario:</strong> {{ peritaje.propietario }}</div>
            <div><strong>Cliente:</strong> {{ peritaje.cliente }}</div>
            <div><strong>Teléfono:</strong> {{ peritaje.telefono }}</div>
            <div><strong>Email:</strong> {{ peritaje.email }}</div>
            <div><strong>Fecha:</strong> {{ peritaje.fecha }}</div>
          </div>
        </section>
  
        <!-- FRENOS -->
        <section class="bg-white shadow-md rounded p-6">
          <h2 class="text-xl font-semibold mb-2">Frenos</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><strong>Eficacia Delantera:</strong> {{ peritaje.frenos_eficacia_delantera }}</div>
            <div><strong>Eficacia Trasera:</strong> {{ peritaje.frenos_eficacia_trasera }}</div>
            <div><strong>Dif. Fuerza Delantera:</strong> {{ peritaje.frenos_diferencia_fuerza_delantera }}</div>
            <div><strong>Dif. Fuerza Trasera:</strong> {{ peritaje.frenos_diferencia_fuerza_trasera }}</div>
            <div><strong>Esfuerzo:</strong> {{ peritaje.frenos_esfuerzo }}</div>
            <div><strong>Peso:</strong> {{ peritaje.frenos_peso }}</div>
            <div><strong>Total:</strong> {{ peritaje.frenos_total }}</div>
            <div><strong>Estado:</strong> {{ peritaje.frenos_estado_general }}</div>
          </div>
        </section>
  
        <!-- SUSPENSIÓN -->
        <section class="bg-white shadow-md rounded p-6">
          <h2 class="text-xl font-semibold mb-2">Suspensión</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><strong>Delantera Izquierda:</strong> {{ peritaje.suspension_delantera_izquierda }}</div>
            <div><strong>Delantera Derecha:</strong> {{ peritaje.suspension_delantera_derecha }}</div>
            <div><strong>Trasera Izquierda:</strong> {{ peritaje.suspension_trasera_izquierda }}</div>
            <div><strong>Trasera Derecha:</strong> {{ peritaje.suspension_trasera_derecha }}</div>
            <div><strong>Diferencia Delantera:</strong> {{ peritaje.suspension_diferencia_delantera }}</div>
            <div><strong>Diferencia Trasera:</strong> {{ peritaje.suspension_diferencia_trasera }}</div>
            <div><strong>Estado:</strong> {{ peritaje.suspension_estado_general }}</div>
          </div>
        </section>
  
        <!-- CARROCERÍA, CHASIS, LLANTAS -->
        <section class="bg-white shadow-md rounded p-6">
          <h2 class="text-xl font-semibold mb-2">Estado General</h2>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h3 class="font-bold">Carrocería</h3>
              <ul class="list-disc ml-4">
                <li v-for="(estado, parte) in peritaje.carroceria" :key="parte">
                  {{ parte.replaceAll('_', ' ') }}: {{ estado }}
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold">Chasis</h3>
              <ul class="list-disc ml-4">
                <li v-for="(estado, parte) in peritaje.chasis" :key="parte">
                  {{ parte.replaceAll('_', ' ') }}: {{ estado }}
                </li>
              </ul>
            </div>
            <div>
              <h3 class="font-bold">Llantas</h3>
              <ul class="list-disc ml-4">
                <li v-for="(info, llanta) in peritaje.llantas" :key="llanta">
                  {{ llanta }}: {{ info.marca }}, {{ info.medida }}, {{ info.profundidad }} mm
                </li>
              </ul>
            </div>
          </div>
        </section>
  
        <!-- OBSERVACIONES Y PRECIO -->
        <section class="bg-white shadow-md rounded p-6">
          <h2 class="text-xl font-semibold mb-2">Observaciones y Precio</h2>
          <p><strong>Observaciones:</strong> {{ peritaje.observaciones_generales }}</p>
          <p><strong>Valor Avalúo:</strong> ${{ peritaje.valorAvaluo.toLocaleString() }}</p>
          <p><strong>Precio del peritaje:</strong> ${{ peritaje.precio.toLocaleString() }}</p>
          <p><strong>Comisión del perito (60%):</strong> ${{ calcularComision(peritaje.precio) }}</p>
        </section>
      </div>
  
      <div v-else class="text-center py-10 text-gray-500">
        Cargando información del peritaje...
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
  </script>
  