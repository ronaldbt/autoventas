import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// ✅ Notificaciones Toast
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

// ✅ SEO dinámico con @vueuse/head
import { createHead } from '@vueuse/head'

const app = createApp(App)

app.use(createPinia())         // Estado global
app.use(router)                // Rutas
app.use(Vue3Toastify, {        // Notificaciones
  autoClose: 3000,
  position: 'top-right',
  theme: 'light'
})

const head = createHead()      // SEO dinámico
app.use(head)

app.mount('#app')
