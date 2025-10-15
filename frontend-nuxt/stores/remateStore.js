import { defineStore } from 'pinia'

export const useRemateStore = defineStore('remate', {
  state: () => ({
    remates: [],
    remateActual: null,
    rematesDestacados: [],
    loading: false,
    error: null,
    filtros: {
      estado: '',
      tipo: '',
      precio: '',
      page: 1
    }
  }),

  getters: {
    rematesProximos: (state) => {
      return state.remates.filter(remate => 
        remate.estado === 'programado' || remate.estado === 'en_vivo'
      )
    },

    rematesFinalizados: (state) => {
      return state.remates.filter(remate => remate.estado === 'finalizado')
    },

    cantidadRemates: (state) => state.remates.length
  },

  actions: {
    // Listar remates con filtros
    async fetchRemates(filtros = {}) {
      this.loading = true
      this.error = null
      
      try {
        const params = new URLSearchParams({
          ...this.filtros,
          ...filtros
        }).toString()
        
        const { data } = await useNuxtApp().$api.get(`/remates?${params}`)
        
        this.remates = data.remates
        return data
      } catch (error) {
        console.error('Error cargando remates:', error)
        this.error = 'Error al cargar los remates'
        this.remates = []
        return { remates: [], totalPages: 0, currentPage: 1, totalRemates: 0 }
      } finally {
        this.loading = false
      }
    },

    // Obtener remates destacados
    async fetchRematesDestacados() {
      try {
        const { data } = await useNuxtApp().$api.get('/remates/destacados')
        this.rematesDestacados = data
        return data
      } catch (error) {
        console.error('Error cargando remates destacados:', error)
        this.rematesDestacados = []
        return []
      }
    },

    // Obtener remate por ID o slug
    async fetchRemate(idOrSlug) {
      this.loading = true
      this.error = null
      
      try {
        const { data } = await useNuxtApp().$api.get(`/remates/${idOrSlug}`)
        this.remateActual = data
        return data
      } catch (error) {
        console.error('Error cargando remate:', error)
        this.error = 'Remate no encontrado'
        this.remateActual = null
        throw error
      } finally {
        this.loading = false
      }
    },

    // Inscribirse a un remate
    async inscribirseRemate(remateId) {
      try {
        const { data } = await useNuxtApp().$api.post(`/remates/${remateId}/inscripcion`)
        
        // Actualizar el remate actual si es el mismo
        if (this.remateActual?.id === remateId) {
          this.remateActual.participantesInscritos++
        }
        
        // Actualizar en la lista de remates
        const remateIndex = this.remates.findIndex(r => r.id === remateId)
        if (remateIndex !== -1) {
          this.remates[remateIndex].participantesInscritos++
        }
        
        return data
      } catch (error) {
        console.error('Error inscribiéndose al remate:', error)
        throw error
      }
    },

    // Solicitar remate de vehículo propio
    async solicitarRemate(solicitud) {
      try {
        const { data } = await useNuxtApp().$api.post('/remates/solicitar', solicitud)
        return data
      } catch (error) {
        console.error('Error solicitando remate:', error)
        throw error
      }
    },

    // ADMIN: Crear remate
    async crearRemate(remate) {
      try {
        const { data } = await useNuxtApp().$api.post('/remates', remate)
        this.remates.unshift(data)
        return data
      } catch (error) {
        console.error('Error creando remate:', error)
        throw error
      }
    },

    // ADMIN: Actualizar remate
    async actualizarRemate(id, updates) {
      try {
        const { data } = await useNuxtApp().$api.put(`/remates/${id}`, updates)
        
        // Actualizar en la lista
        const index = this.remates.findIndex(r => r.id === id)
        if (index !== -1) {
          this.remates[index] = data
        }
        
        // Actualizar remate actual si es el mismo
        if (this.remateActual?.id === id) {
          this.remateActual = data
        }
        
        return data
      } catch (error) {
        console.error('Error actualizando remate:', error)
        throw error
      }
    },

    // ADMIN: Eliminar remate
    async eliminarRemate(id) {
      try {
        await useNuxtApp().$api.delete(`/remates/${id}`)
        
        // Remover de la lista
        this.remates = this.remates.filter(r => r.id !== id)
        
        // Limpiar remate actual si es el mismo
        if (this.remateActual?.id === id) {
          this.remateActual = null
        }
      } catch (error) {
        console.error('Error eliminando remate:', error)
        throw error
      }
    },

    // Actualizar filtros
    setFiltros(nuevosFiltros) {
      this.filtros = { ...this.filtros, ...nuevosFiltros }
    },

    // Limpiar filtros
    limpiarFiltros() {
      this.filtros = {
        estado: '',
        tipo: '',
        precio: '',
        page: 1
      }
    },

    // ADMIN: Cambiar estado del remate
    async cambiarEstadoRemate(id, nuevoEstado) {
      try {
        const { data } = await useNuxtApp().$api.put(`/remates/${id}/estado`, { estado: nuevoEstado })
        
        // Actualizar en la lista
        const index = this.remates.findIndex(r => r.id === id)
        if (index !== -1) {
          this.remates[index] = { ...this.remates[index], estado: nuevoEstado }
        }
        
        // Actualizar remate actual si es el mismo
        if (this.remateActual?.id === id) {
          this.remateActual = { ...this.remateActual, estado: nuevoEstado }
        }
        
        return data
      } catch (error) {
        console.error('Error cambiando estado del remate:', error)
        throw error
      }
    },

    // Limpiar estado
    limpiarEstado() {
      this.remates = []
      this.remateActual = null
      this.rematesDestacados = []
      this.loading = false
      this.error = null
    }
  }
})