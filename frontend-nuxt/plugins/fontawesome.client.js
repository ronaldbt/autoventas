export default defineNuxtPlugin(() => {
  // Cargar FontAwesome CSS dinámicamente
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
  link.crossOrigin = 'anonymous'
  document.head.appendChild(link)
})


