export default defineNuxtRouteMiddleware((to, from) => {
  const { usuario } = useAuthStore()
  
  // Si no hay usuario, redirigir al login
  if (!usuario) {
    return navigateTo('/login')
  }
  
  // Verificar que el usuario tiene rol de admin (sin importar mayúsculas)
  if (usuario.rol.toUpperCase() !== 'ADMIN') {
    throw createError({ 
      statusCode: 403, 
      statusMessage: 'No tienes permisos para acceder a esta página' 
    })
  }
})