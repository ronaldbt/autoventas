// services/catalogoService.js
import { useNuxtApp } from '#app'

export const catalogoService = {
  async getMarcas(options = {}) {
    const { $api } = useNuxtApp()
    const params = new URLSearchParams()
    
    if (options.popular) params.append('popular', 'true')
    if (options.search) params.append('search', options.search)
    if (options.limit) params.append('limit', options.limit)
    
    const url = `/marcas${params.toString() ? `?${params.toString()}` : ''}`
    const res = await $api.get(url)
    return res.data
  },

  async getMarcasPopulares(limit = 10) {
    const { $api } = useNuxtApp()
    const res = await $api.get(`/marcas/populares?limit=${limit}`)
    return res.data
  },

  async getMarcaPorId(id) {
    const { $api } = useNuxtApp()
    const res = await $api.get(`/marcas/${id}`)
    return res.data
  },

  async getModelos(marcaId = null) {
    const { $api } = useNuxtApp()
    const url = marcaId ? `/modelos?marcaId=${marcaId}` : '/modelos'
    const res = await $api.get(url)
    return res.data
  },

  async getTransmisiones() {
    const { $api } = useNuxtApp()
    const res = await $api.get('/transmisiones')
    return res.data
  },

  async getCarrocerias() {
    const { $api } = useNuxtApp()
    const res = await $api.get('/carrocerias')
    return res.data
  },

  async getCombustibles() {
    const { $api } = useNuxtApp()
    const res = await $api.get('/combustibles')
    return res.data
  },

  async getRegiones() {
    const { $api } = useNuxtApp()
    const res = await $api.get('/regiones')
    return res.data
  },

  async getComunas() {
    const { $api } = useNuxtApp()
    const res = await $api.get('/comunas')
    return res.data
  },

  async getComunasPorRegion(regionId) {
    const { $api } = useNuxtApp()
    const res = await $api.get(`/comunas?regionId=${regionId}`)
    return res.data
  }
}
