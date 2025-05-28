// src/services/notificacionService.js
import { toast } from 'vue3-toastify'

export const notificacionService = {
  success(mensaje, opciones = {}) {
    toast.success(mensaje, {
      autoClose: 3000,
      position: 'top-right',
      theme: 'light',
      ...opciones
    })
  },

  error(mensaje, opciones = {}) {
    toast.error(mensaje, {
      autoClose: 4000,
      position: 'top-right',
      theme: 'dark',
      ...opciones
    })
  },

  info(mensaje, opciones = {}) {
    toast.info(mensaje, {
      autoClose: 3000,
      position: 'top-right',
      theme: 'colored',
      ...opciones
    })
  },

  warning(mensaje, opciones = {}) {
    toast.warning(mensaje, {
      autoClose: 3500,
      position: 'top-right',
      theme: 'colored',
      ...opciones
    })
  }
}
