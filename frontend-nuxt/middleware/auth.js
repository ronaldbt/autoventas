// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return
  
  const authStore = useAuthStore()
  
  // Verificar si el usuario está autenticado
  if (!authStore.isLoggedIn) {
    console.log('🔴 [Auth Middleware] Usuario no autenticado, redirigiendo a login')
    return navigateTo('/login')
  }
  
  console.log('✅ [Auth Middleware] Usuario autenticado, permitir acceso')
})