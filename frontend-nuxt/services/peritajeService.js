// services/peritajeService.js

export default {
    // Crear un nuevo peritaje
    async crear($api, data) {
      try {
        const response = await $api.post('/peritajes', data)
        return response.data
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al crear el peritaje')
      }
    },
  
    // Obtener peritajes del perito logueado
    async obtenerMios($api) {
      try {
        const response = await $api.get('/peritajes/mios')
        return response.data
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al cargar peritajes')
      }
    },
  
    // Obtener un solo peritaje por ID
    async obtenerUno($api, id) {
      try {
        const response = await $api.get(`/peritajes/${id}`)
        return response.data
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al obtener el peritaje')
      }
    },
  
    // Actualizar un peritaje
    async actualizar($api, id, data) {
      try {
        const response = await $api.put(`/peritajes/${id}`, data)
        return response.data
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al actualizar el peritaje')
      }
    },
  
    // Eliminar un peritaje
    async eliminar($api, id) {
      try {
        const response = await $api.delete(`/peritajes/${id}`)
        return response.data
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al eliminar el peritaje')
      }
    },

    // Dashboard del perito
    async dashboard($api) {
      try {
        const response = await $api.get('/peritajes/dashboard')
        return response.data
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al cargar dashboard')
      }
    },

    // Obtener solicitudes pendientes
    async solicitudesPendientes($api) {
      try {
        const response = await $api.get('/peritajes/pendientes')
        return response.data
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al cargar solicitudes')
      }
    },

    // Tomar una solicitud
    async tomarSolicitud($api, id) {
      try {
        const response = await $api.post(`/peritajes/tomar/${id}`)
        return response.data
      } catch (error) {
        throw new Error(error.response?.data?.message || 'Error al tomar solicitud')
      }
    }
  }
  