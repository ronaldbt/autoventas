// plugins/auth.client.js
export default defineNuxtPlugin({
  name: 'auth-client',
  setup() {
    console.log('🔵 [Auth Plugin] Iniciando plugin de autenticación...');
    
    // Verificar localStorage directamente sin tocar Pinia aún
    if (process.client) {
      try {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        
        console.log('🔵 [Auth Plugin] Estado localStorage:', {
          hasToken: !!token,
          hasUser: !!user
        });
        
        // Solo inicializar el store si realmente hay datos
        if (token && user) {
          // Esperar a que Pinia esté completamente inicializada
          nextTick(async () => {
            try {
              console.log('🔵 [Auth Plugin] Inicializando AuthStore...');
              const authStore = useAuthStore()
              
              // Cargar datos desde localStorage
              authStore.cargarDesdeLocalStorage()
              
              console.log('🔵 [Auth Plugin] AuthStore inicializado:', {
                isLoggedIn: authStore.isLoggedIn,
                isHydrated: authStore.isHydrated,
                hasUser: !!authStore.user,
                hasToken: !!authStore.token
              });

              // Validación de token en background
              if (authStore.token) {
                console.log('🔵 [Auth Plugin] Programando validación de token...');
                setTimeout(() => {
                  authStore.validarToken().catch((error) => {
                    console.warn('🟡 [Auth Plugin] Error validando token:', error.message);
                  })
                }, 1000) // Esperar 1 segundo para asegurar que todo esté listo
              }
              
            } catch (error) {
              console.error('🔴 [Auth Plugin] Error inicializando AuthStore:', error);
            }
          })
        } else {
          console.log('🔵 [Auth Plugin] No hay datos de autenticación en localStorage');
        }
        
      } catch (error) {
        console.error('🔴 [Auth Plugin] Error accediendo localStorage:', error);
      }
    }

    console.log('✅ [Auth Plugin] Plugin completado');
  }
})

