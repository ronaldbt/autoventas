// plugins/axios.server.js
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  // Server (SSR): usar base interna para baja latencia y sin TLS interno
  const baseURL = config.apiBaseInternal || config.public.apiBase
  const api = axios.create({ baseURL, withCredentials: false })

  // Interceptor mínimo (sin token aquí)
  nuxtApp.provide('api', api)
})


