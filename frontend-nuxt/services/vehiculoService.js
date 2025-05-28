// services/vehiculoService.js
import { useNuxtApp } from '#app'

export const vehiculoService = {
  async crearVehiculo(formData) {
    const { $api } = useNuxtApp()
    try {
      const res = await $api.post('/vehiculos/crear', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      return res.data
    } catch (err) {
      console.error('❌ Error creando vehículo (crearVehiculo):', err)
      throw err
    }
  },

  async obtenerVehiculos() {
    const { $api } = useNuxtApp()
    try {
      const res = await $api.get('/vehiculos')
      return res.data
    } catch (err) {
      console.error('❌ Error obteniendo vehículos (obtenerVehiculos):', err)
      throw err
    }
  },

  async obtenerVehiculoPorId(id) {
    const { $api } = useNuxtApp()
    try {
      const res = await $api.get(`/vehiculos/${id}`)
      return res.data
    } catch (err) {
      console.error(`❌ Error obteniendo vehículo por ID (${id}):`, err)
      throw err
    }
  },

  async eliminarVehiculo(id) {
    const { $api } = useNuxtApp()
    try {
      const res = await $api.delete(`/vehiculos/${id}`)
      return res.data
    } catch (err) {
      console.error(`❌ Error eliminando vehículo (${id}):`, err)
      throw err
    }
  },

  async actualizarEstado(id, estado) {
    const { $api } = useNuxtApp()
    try {
      const res = await $api.put(`/vehiculos/${id}/estado`, { estado })
      return res.data
    } catch (err) {
      console.error(`❌ Error actualizando estado del vehículo (${id}) a "${estado}":`, err)
      throw err
    }
  }
}
