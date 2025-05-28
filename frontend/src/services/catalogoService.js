// src/services/catalogoService.js
import api from '@/axios'

export const catalogoService = {
  getMarcas: () => api.get('/marcas').then(r => r.data),
  getTransmisiones: () => api.get('/transmisiones').then(r => r.data),
  getCarrocerias: () => api.get('/carrocerias').then(r => r.data),
  getCombustibles: () => api.get('/combustibles').then(r => r.data),
  getRegiones: () => api.get('/regiones').then(r => r.data),
  getComunasPorRegion: (regionId) => api.get(`/comunas?regionId=${regionId}`).then(r => r.data),
}
