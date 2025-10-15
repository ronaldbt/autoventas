export default defineNuxtRouteMiddleware((to, from) => {
  // Solo ejecutar en cliente
  if (!process.client) return
  
  // Verificar localStorage directamente para evitar problemas de reactividad
  const token = localStorage.getItem('token')
  const userLS = localStorage.getItem('user')
  
  if (!token || !userLS) {
    console.log('🔴 [Admin Middleware] No hay token o usuario, redirigiendo al login')
    return navigateTo('/login')
  }
  
  try {
    const usuario = JSON.parse(userLS)
    
    // Verificar que el usuario tiene rol de admin
    if (usuario.rol.toUpperCase() !== 'ADMIN') {
      console.log('🔴 [Admin Middleware] Usuario no es admin:', usuario.rol)
      throw createError({ 
        statusCode: 403, 
        statusMessage: 'No tienes permisos para acceder a esta página' 
      })
    }
    
    console.log('✅ [Admin Middleware] Acceso autorizado para admin:', usuario.email)
    
  } catch (error) {
    console.error('🔴 [Admin Middleware] Error parseando usuario:', error)
    // Limpiar datos corruptos
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    localStorage.removeItem('rol')
    return navigateTo('/login')
  }
})