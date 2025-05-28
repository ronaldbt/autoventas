// plugins/toastify.client.js
import { defineNuxtPlugin } from '#app'
import Toastify, { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Toastify, {
    autoClose: 3000,
    position: 'top-right',
    theme: 'light'
  })

  // ✅ Inyecta el toast para usarlo con useToast()
  nuxtApp.provide('toast', toast)
})
