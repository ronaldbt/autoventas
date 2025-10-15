// src/stores/authStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter, useNuxtApp } from '#imports'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(null)
  const router = useRouter()
  const isHydrated = ref(false) // Flag para indicar si se ha hidratado desde localStorage

  // Getter para verificar si está autenticado
  const isLoggedIn = computed(() => !!(token.value && user.value))

  function cargarDesdeLocalStorage() {
    // Solo ejecutar en el cliente
    if (!process.client) {
      console.log('🔵 [AuthStore] No se puede cargar localStorage en servidor');
      return
    }
    
    console.log('🔵 [AuthStore] Cargando desde localStorage...');
    try {
      const userLS = localStorage.getItem('user')
      const tokenLS = localStorage.getItem('token')
      const rolLS = localStorage.getItem('rol')
      
      console.log('🔵 [AuthStore] Datos en localStorage:', {
        hasUser: !!userLS,
        hasToken: !!tokenLS,
        hasRole: !!rolLS,
        userLength: userLS?.length,
        tokenPrefix: tokenLS?.substring(0, 20) + '...'
      });
      
      if (userLS && tokenLS) {
        const parsedUser = JSON.parse(userLS)
        user.value = parsedUser
        token.value = tokenLS
        console.log('✅ [AuthStore] Datos cargados exitosamente:', {
          userId: parsedUser?.id,
          userEmail: parsedUser?.email,
          userName: parsedUser?.nombre,
          userRole: parsedUser?.rol,
          hasToken: !!token.value,
          tokenLength: tokenLS.length
        });
      } else {
        console.log('🟡 [AuthStore] No hay datos completos en localStorage', {
          hasUser: !!userLS,
          hasToken: !!tokenLS
        });
        user.value = null
        token.value = null
      }
    } catch (error) {
      console.error('❌ [AuthStore] Error cargando localStorage:', error);
      // Limpiar datos corruptos
      user.value = null
      token.value = null
      if (process.client) {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('rol')
      }
    } finally {
      isHydrated.value = true
      console.log('🔵 [AuthStore] Hidratación completada. Estado final:', {
        isHydrated: isHydrated.value,
        isLoggedIn: isLoggedIn.value,
        hasUser: !!user.value,
        hasToken: !!token.value
      });
    }
  }

  function login(data) {
    console.log('🔵 [AuthStore] Login iniciado:', data?.usuario?.email);
    user.value = data.usuario
    token.value = data.token
    
    // Persistir solo en el cliente
    if (process.client) {
      localStorage.setItem('user', JSON.stringify(data.usuario))
      localStorage.setItem('token', data.token)
      localStorage.setItem('rol', data.usuario.rol)
    }
    
    console.log('✅ [AuthStore] Login completado:', {
      user: user.value?.email || user.value?.nombre,
      hasToken: !!token.value,
      rol: data.usuario.rol
    });
  }

  function logout() {
    console.log('🔵 [AuthStore] Logout iniciado');
    user.value = null
    token.value = null
    
    // Limpiar localStorage solo en el cliente
    if (process.client) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      localStorage.removeItem('rol')
    }
    
    console.log('✅ [AuthStore] Logout completado');
    router.push('/login')
  }

  // ✅ Verificar token contra el backend
  async function validarToken() {
    if (!token.value) {
      console.log('🔵 [AuthStore] No hay token para validar');
      return false
    }

    try {
      const { $api } = useNuxtApp()
      const res = await $api.get('/auth/verificar', {
        headers: { Authorization: `Bearer ${token.value}` }
      })

      if (res?.data?.usuario) {
        // Actualizar usuario con datos frescos del backend
        user.value = res.data.usuario
        if (process.client) {
          localStorage.setItem('user', JSON.stringify(res.data.usuario))
        }
        console.log('✅ [AuthStore] Token válido, usuario actualizado');
        return true
      }

      console.warn('⚠️ [AuthStore] Token válido pero sin usuario');
      logout()
      return false
    } catch (error) {
      console.warn('⚠️ [AuthStore] Token inválido o expirado:', error.message);
      logout()
      return false
    }
  }

  return {
    user,
    token,
    isHydrated,
    isLoggedIn,
    login,
    logout,
    cargarDesdeLocalStorage,
    validarToken
  }
})
