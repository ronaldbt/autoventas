// middleware/auth.global.js
// Protege rutas privadas usando localStorage directamente para evitar problemas con Pinia

export default defineNuxtRouteMiddleware(async (to) => {
  console.log('🔵 [Auth Middleware] === INICIO MIDDLEWARE ===');
  console.log('🔵 [Auth Middleware] Ruta destino:', to.path);
  console.log('🔵 [Auth Middleware] ¿Es cliente?:', process.client);
  
  // Rutas públicas que no requieren autenticación
  const rutasPublicas = new Set([
    '/',
    '/login',
    '/register',
    '/unauthorized',
  ])

  // Prefijos protegidos por rol
  const prefijosProtegidos = [
    '/admin',
    '/cliente',
    '/publicista',
    '/automotora',
    '/perito'
  ]

  const esRutaPublica = rutasPublicas.has(to.path)
    || !prefijosProtegidos.some((p) => to.path.startsWith(p))

  console.log('🔵 [Auth Middleware] ¿Es ruta pública?', esRutaPublica);

  // Si es pública, no hacer nada
  if (esRutaPublica) {
    console.log('✅ [Auth Middleware] === RUTA PÚBLICA - ACCESO PERMITIDO ===');
    return
  }

  // Solo ejecutar en cliente
  if (!process.client) {
    console.log('🔵 [Auth Middleware] === SERVIDOR - SALTANDO ===');
    return
  }

  // VERIFICACIÓN DIRECTA DE localStorage - NO USAR PINIA AÚN
  console.log('🔵 [Auth Middleware] Verificando localStorage directamente...');
  
  try {
    const tokenDirecto = localStorage.getItem('token')
    const userDirecto = localStorage.getItem('user')
    
    console.log('🔵 [Auth Middleware] Estado localStorage directo:', {
      hasToken: !!tokenDirecto,
      hasUser: !!userDirecto,
      tokenLength: tokenDirecto?.length,
      userLength: userDirecto?.length
    });

    // Si NO hay datos en localStorage, redirigir inmediatamente
    if (!tokenDirecto || !userDirecto) {
      console.log('🔴 [Auth Middleware] === NO HAY DATOS EN LOCALSTORAGE - REDIRIGIENDO ===');
      return navigateTo('/login')
    }

    // Validar que el user sea JSON válido
    let userData = null
    try {
      userData = JSON.parse(userDirecto)
    } catch (error) {
      console.error('🔴 [Auth Middleware] Usuario en localStorage es JSON inválido:', error);
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('rol')
      return navigateTo('/login')
    }

    // Si llegamos aquí, hay datos válidos en localStorage
    console.log('✅ [Auth Middleware] === DATOS VÁLIDOS EN LOCALSTORAGE ===');
    console.log('✅ [Auth Middleware] Usuario:', userData?.email || userData?.nombre);
    console.log('✅ [Auth Middleware] Rol:', userData?.rol);
    console.log('✅ [Auth Middleware] Acceso autorizado a:', to.path);

    // Aquí ya podemos usar Pinia de manera segura si es necesario
    // El plugin se encargará de cargar los datos en el store
    
  } catch (error) {
    console.error('🔴 [Auth Middleware] Error accediendo localStorage:', error);
    return navigateTo('/login')
  }
})
























