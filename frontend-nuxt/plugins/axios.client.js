// plugins/axios.client.js
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import axios from 'axios'
import { useAuthStore } from '../stores/authStore'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  // Cliente (navegador): usar dominio público
  const baseURL = config.public.apiBase
  const api = axios.create({ baseURL, withCredentials: false })

  // Interceptor para agregar el token si existe
  api.interceptors.request.use((req) => {
    const auth = useAuthStore()
    
    // Token de prueba para testing
    const testToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sIjoiQ0xJRU5URSIsImlhdCI6MTc1NzEwMzk4NywiZXhwIjoxNzU3MTkwMzg3fQ.4_8TiD1VJsYTf7N-n_XeAgp7G-c_dngxbqKtwpaBuf0'
    
    if (auth.token) {
      req.headers.Authorization = `Bearer ${auth.token}`
    } else if (req.url.includes('/peritajes/')) {
      // Para endpoints de peritajes, usar token de prueba si no hay token de auth
      req.headers.Authorization = `Bearer ${testToken}`
      console.log('🧪 [Axios] Usando token de prueba para:', req.url)
    }
    return req
  })

  // Lo inyecta como $api
  nuxtApp.provide('api', api)
})
