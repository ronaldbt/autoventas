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

    async fetchPeritajeById(id) {
      this.cargando = true
      this.error = null
      try {
        const { data } = await useNuxtApp().$api.get(`/peritajes/${id}`)
        this.actual = data
        return data
      } catch (err) {
        console.error(`Error al cargar peritaje ${id}:`, err)
        this.error = 'No se pudo cargar el peritaje'
        return null
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
