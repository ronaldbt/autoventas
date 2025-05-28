// plugins/axios.client.js
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import axios from 'axios'
import { useAuthStore } from '../stores/authStore'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  console.log('🛰️ Configuración detectada en axios.client.js → baseURL:', config.public.apiBase)

  const api = axios.create({
    baseURL: config.public.apiBase,
    withCredentials: false
  })

  // Interceptor para agregar el token si existe
  api.interceptors.request.use((req) => {
    const auth = useAuthStore()
    if (auth.token) {
      req.headers.Authorization = `Bearer ${auth.token}`
    }
    return req
  })

  // Lo inyecta como $api
  nuxtApp.provide('api', api)
})
