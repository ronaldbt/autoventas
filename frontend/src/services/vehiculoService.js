// src/services/vehiculoService.js
import api from '@/axios' // Usamos instancia global con interceptor y token

const endpoint = '/vehiculos'

export const vehiculoService = {
  async crearVehiculo(formData) {
    try {
      const response = await api.post(`${endpoint}/crear`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data
    } catch (error) {
      console.error('❌ Error creando vehículo:', error)
      throw error
    }
  },

  async obtenerVehiculos() {
    try {
      const response = await api.get(endpoint)
      return response.data
    } catch (error) {
      console.error('❌ Error obteniendo vehículos:', error)
      throw error
    }
  },

  async obtenerVehiculoPorId(id) {
    try {
      const response = await api.get(`${endpoint}/${id}`)
      return response.data
    } catch (error) {
      console.error('❌ Error obteniendo vehículo por ID:', error)
      throw error
    }
  },

  async eliminarVehiculo(id) {
    try {
      const response = await api.delete(`${endpoint}/${id}`)
      return response.data
    } catch (error) {
      console.error('❌ Error eliminando vehículo:', error)
      throw error
    }
  },

  async actualizarEstado(id, estado) {
    try {
      const response = await api.put(`${endpoint}/${id}/estado`, { estado })
      return response.data
    } catch (error) {
      console.error('❌ Error actualizando estado:', error)
      throw error
    }
  }
}
