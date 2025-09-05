import { defineStore } from 'pinia'

export const useInformeStore = defineStore('informe', {
  state: () => ({
    lista: [],
    cargando: false,
    error: null
  }),

  actions: {
    // Para clientes - ver sus informes
    async fetchInformesCliente() {
      this.cargando = true
      this.error = null
      try {
        const { data } = await useNuxtApp().$api.get('/informes/cliente')
        this.lista = data
        return data
      } catch (err) {
        console.error('Error al cargar informes del cliente:', err)
        this.error = 'No se pudieron cargar los informes'
        return []
      } finally {
        this.cargando = false
      }
    },

    // Para clientes - obtener un informe específico
    async fetchInformeById(id) {
      this.cargando = true
      this.error = null
      try {
        const { data } = await useNuxtApp().$api.get(`/informes/cliente/${id}`)
        return data
      } catch (err) {
        console.error('Error al cargar informe:', err)
        this.error = 'No se pudo cargar el informe'
        throw err
      } finally {
        this.cargando = false
      }
    },

    // Para clientes - solicitar informe
    async solicitarInforme(payload) {
      this.cargando = true
      this.error = null
      try {
        const { data } = await useNuxtApp().$api.post('/informes/solicitar', payload)
        this.lista.unshift(data.informe)
        return data
      } catch (err) {
        console.error('Error al solicitar informe:', err)
        this.error = 'No se pudo enviar la solicitud'
        throw err
      } finally {
        this.cargando = false
      }
    },

    // Para clientes - cancelar informe
    async cancelarInforme(id) {
      this.cargando = true
      this.error = null
      try {
        const { data } = await useNuxtApp().$api.put(`/informes/cliente/${id}/cancelar`)
        const index = this.lista.findIndex(informe => informe.id === id)
        if (index !== -1) {
          this.lista[index] = data.informe
        }
        return data
      } catch (err) {
        console.error('Error al cancelar informe:', err)
        this.error = 'No se pudo cancelar el informe'
        throw err
      } finally {
        this.cargando = false
      }
    }
  }
})
