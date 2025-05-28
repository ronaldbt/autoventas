// src/stores/useVehiculoStore.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { vehiculoService } from '@/services/vehiculoService'

export const useVehiculoStore = defineStore('vehiculo', () => {
  const vehiculos = ref([])
  const cargando = ref(false)
  const error = ref(null)
  const vehiculoSeleccionado = ref(null)

  // ✅ Cargar todos los vehículos
  async function cargarVehiculos() {
    try {
      cargando.value = true
      error.value = null
      vehiculos.value = await vehiculoService.obtenerVehiculos()
    } catch (err) {
      error.value = 'Error al cargar vehículos'
      console.error('❌', err)
    } finally {
      cargando.value = false
    }
  }

  // ✅ Cargar un solo vehículo por ID (detalles)
  async function cargarVehiculoPorId(id) {
    try {
      cargando.value = true
      error.value = null
      vehiculoSeleccionado.value = await vehiculoService.obtenerVehiculoPorId(id)
    } catch (err) {
      error.value = 'Error al cargar vehículo'
      console.error('❌', err)
    } finally {
      cargando.value = false
    }
  }

  // ✅ Agregar uno nuevo manualmente al store (ej: después de crear)
  function agregarVehiculo(nuevo) {
    vehiculos.value.unshift(nuevo)
  }

  return {
    vehiculos,
    vehiculoSeleccionado,
    cargando,
    error,
    cargarVehiculos,
    cargarVehiculoPorId,
    agregarVehiculo
  }
})
