// stores/peritajeStore.js
import { defineStore } from 'pinia'

export const usePeritajeStore = defineStore('peritaje', {
  state: () => ({
    lista: [],       // Todos los peritajes del usuario
    actual: null,    // Peritaje actual visualizado o editado
    cargando: false, // Estado de carga
    error: null      // Último error
  }),

  actions: {
    // Para peritos - ver sus peritajes
    async fetchMisPeritajes() {
      this.cargando = true
      this.error = null
      try {
        const { data } = await useNuxtApp().$api.get('/peritajes/mios')
        this.lista = data
        return data
      } catch (err) {
        console.error('Error al cargar peritajes:', err)
        this.error = 'No se pudieron cargar los peritajes'
        return []
      } finally {
        this.cargando = false
      }
    },

      // Para clientes - ver sus peritajes solicitados
  async fetchPeritajesCliente() {
    this.cargando = true
    this.error = null
    try {
      const { data } = await useNuxtApp().$api.get('/peritajes/cliente')
      this.lista = data
      return data
    } catch (err) {
      console.error('Error al cargar peritajes del cliente:', err)
      this.error = 'No se pudieron cargar los peritajes'
      return []
    } finally {
      this.cargando = false
    }
  },

  // Para clientes - obtener un peritaje específico
  async fetchPeritajeById(id) {
    this.cargando = true
    this.error = null
    try {
      const { data } = await useNuxtApp().$api.get(`/peritajes/cliente/${id}`)
      return data
    } catch (err) {
      console.error('Error al cargar peritaje:', err)
      this.error = 'No se pudo cargar el peritaje'
      throw err
    } finally {
      this.cargando = false
    }
  },

    // Para clientes - solicitar peritaje
    async solicitarPeritaje(payload) {
      this.cargando = true
      this.error = null
      try {
        const { data } = await useNuxtApp().$api.post('/peritajes/solicitar', payload)
        this.lista.unshift(data.solicitud)
        return data
      } catch (err) {
        console.error('Error al solicitar peritaje:', err)
        this.error = 'No se pudo enviar la solicitud'
        throw err
      } finally {
        this.cargando = false
      }
    },


    async crearPeritaje(payload) {
      this.cargando = true
      this.error = null
      try {
        const { data } = await useNuxtApp().$api.post('/peritajes', payload)
        this.lista.unshift(data)
        return data
      } catch (err) {
        console.error('Error al crear peritaje:', err)
        this.error = 'No se pudo crear el peritaje'
        throw err
      } finally {
        this.cargando = false
      }
    },

    setActual(peritaje) {
      this.actual = peritaje
    },

    limpiar() {
      this.actual = null
      this.error = null
    }
  }
})
