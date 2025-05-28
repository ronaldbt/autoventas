// services/catalogoService.js
import { useNuxtApp } from '#app'

const $api = useNuxtApp().$api

export const catalogoService = {
  async getMarcas() {
    const res = await $api.get('/marcas')
    return res.data
  },

  async getModelos(marcaId = null) {
    const url = marcaId ? `/modelos?marcaId=${marcaId}` : '/modelos'
    const res = await $api.get(url)
    return res.data
  },

  async getTransmisiones() {
    const res = await $api.get('/transmisiones')
    return res.data
  },

  async getCarrocerias() {
    const res = await $api.get('/carrocerias')
    return res.data
  },

  async getCombustibles() {
    const res = await $api.get('/combustibles')
    return res.data
  },

  async getRegiones() {
    const res = await $api.get('/regiones')
    return res.data
  },

  async getComunas() {
    const res = await $api.get('/comunas')
    return res.data
  },

  async getComunasPorRegion(regionId) {
    const res = await $api.get(`/comunas?regionId=${regionId}`)
    return res.data
  }
}
