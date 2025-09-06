<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Gestión de Usuarios</h1>
            <p class="text-slate-600 text-lg">Administra todos los usuarios del sistema</p>
          </div>
          <div class="flex items-center space-x-4">
            <div class="bg-white px-4 py-2 rounded-xl shadow">
              <span class="text-sm text-slate-500">Total Usuarios:</span>
              <span class="font-bold text-slate-800 ml-1">{{ stats.total }}</span>
            </div>
            <NuxtLink
              to="/admin/dashboard"
              class="inline-flex items-center px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-xl transition-all duration-200"
            >
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              Volver al Panel
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Filtros y Estadísticas -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <!-- Total -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Total</p>
              <p class="text-2xl font-bold text-slate-800">{{ stats.total }}</p>
            </div>
            <div class="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Clientes -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Clientes</p>
              <p class="text-2xl font-bold text-green-600">{{ stats.clientes }}</p>
            </div>
            <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Automotoras -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Automotoras</p>
              <p class="text-2xl font-bold text-purple-600">{{ stats.automotoras }}</p>
            </div>
            <div class="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0H3m0 0h8M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Peritos -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Peritos</p>
              <p class="text-2xl font-bold text-orange-600">{{ stats.peritos }}</p>
            </div>
            <div class="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Admins -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Admins</p>
              <p class="text-2xl font-bold text-red-600">{{ stats.admins }}</p>
            </div>
            <div class="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
              <svg class="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtros -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Filtrar por Rol</label>
            <select v-model="filtros.rol" @change="aplicarFiltros" class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Todos los roles</option>
              <option value="CLIENTE">Clientes</option>
              <option value="AUTOMOTORA">Automotoras</option>
              <option value="PERITO">Peritos</option>
              <option value="ADMIN">Administradores</option>
              <option value="PUBLICISTA">Publicistas</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Buscar por Email</label>
            <input 
              v-model="filtros.email" 
              @input="aplicarFiltros"
              type="email" 
              placeholder="ejemplo@email.com"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Buscar por Nombre</label>
            <input 
              v-model="filtros.nombre" 
              @input="aplicarFiltros"
              type="text" 
              placeholder="Nombre del usuario"
              class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div class="flex items-end">
            <button 
              @click="limpiarFiltros"
              class="w-full px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-200"
            >
              Limpiar Filtros
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="bg-white rounded-2xl shadow-lg p-6">
        <div class="animate-pulse space-y-4">
          <div v-for="n in 5" :key="n" class="flex items-center space-x-4 p-4 border border-slate-100 rounded-xl">
            <div class="w-12 h-12 bg-slate-200 rounded-full"></div>
            <div class="flex-1">
              <div class="h-4 bg-slate-200 rounded w-1/4 mb-2"></div>
              <div class="h-3 bg-slate-200 rounded w-1/2"></div>
            </div>
            <div class="w-20 h-6 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>

      <!-- Tabla de Usuarios -->
      <div v-else class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-200">
          <h3 class="text-lg font-bold text-slate-800">Lista de Usuarios</h3>
        </div>
        
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Usuario</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Email</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Rol</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Estado</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Registro</th>
                <th class="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr v-for="usuario in usuarios" :key="usuario.id" class="hover:bg-slate-50">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 w-10 h-10">
                      <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" 
                           :class="getAvatarColor(usuario.rol)">
                        {{ (usuario.nombre || 'U')[0].toUpperCase() }}
                      </div>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-slate-900">{{ usuario.nombre || 'Sin nombre' }}</div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-slate-900">{{ usuario.email }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full"
                        :class="getRolColor(usuario.rol)">
                    {{ formatRol(usuario.rol) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    Activo
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  {{ formatFecha(usuario.createdAt) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                  <div class="flex items-center space-x-2">
                    <button 
                      @click="verDetalles(usuario)"
                      class="text-blue-600 hover:text-blue-900 font-medium"
                    >
                      Ver
                    </button>
                    <span class="text-slate-300">|</span>
                    <button 
                      @click="editarUsuario(usuario)"
                      class="text-green-600 hover:text-green-900 font-medium"
                    >
                      Editar
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Empty State -->
        <div v-if="usuarios.length === 0" class="text-center py-12">
          <svg class="mx-auto h-12 w-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <h3 class="mt-2 text-sm font-medium text-slate-900">No hay usuarios</h3>
          <p class="mt-1 text-sm text-slate-500">No se encontraron usuarios con los filtros aplicados</p>
        </div>
      </div>

      <!-- Paginación -->
      <div v-if="usuarios.length > 0" class="flex justify-center mt-8">
        <div class="flex items-center space-x-2">
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="cambiarPagina(page)"
            :class="[
              'px-4 py-2 rounded-xl font-semibold transition-all duration-200',
              currentPage === page 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            ]"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from 'vue'

definePageMeta({
  middleware: 'admin'
})

useHead({
  title: 'Gestión de Usuarios | Admin - Autoventas360',
  meta: [
    {
      name: 'description',
      content: 'Panel de administración para gestionar todos los usuarios del sistema'
    }
  ]
})

// Estado
const loading = ref(true)
const usuarios = ref([])
const currentPage = ref(1)
const totalPages = ref(1)

const stats = ref({
  total: 0,
  clientes: 0,
  automotoras: 0,
  peritos: 0,
  admins: 0,
  publicistas: 0
})

const filtros = reactive({
  rol: '',
  email: '',
  nombre: ''
})

// Funciones
const getAvatarColor = (rol) => {
  const colors = {
    'CLIENTE': 'bg-green-500',
    'AUTOMOTORA': 'bg-purple-500',
    'PERITO': 'bg-orange-500',
    'ADMIN': 'bg-red-500',
    'PUBLICISTA': 'bg-blue-500'
  }
  return colors[rol] || 'bg-slate-500'
}

const getRolColor = (rol) => {
  const colors = {
    'CLIENTE': 'bg-green-100 text-green-800',
    'AUTOMOTORA': 'bg-purple-100 text-purple-800',
    'PERITO': 'bg-orange-100 text-orange-800',
    'ADMIN': 'bg-red-100 text-red-800',
    'PUBLICISTA': 'bg-blue-100 text-blue-800'
  }
  return colors[rol] || 'bg-slate-100 text-slate-800'
}

const formatRol = (rol) => {
  const roles = {
    'CLIENTE': 'Cliente',
    'AUTOMOTORA': 'Automotora',
    'PERITO': 'Perito',
    'ADMIN': 'Administrador',
    'PUBLICISTA': 'Publicista'
  }
  return roles[rol] || rol
}

const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

const cargarUsuarios = async () => {
  try {
    loading.value = true
    const { $api } = useNuxtApp()
    
    // Construir parámetros de filtro
    const params = new URLSearchParams({
      page: currentPage.value,
      ...filtros
    }).toString()
    
    const { data } = await $api.get(`/usuarios?${params}`)
    
    usuarios.value = data.usuarios || []
    totalPages.value = data.totalPages || 1
    
    // Calcular estadísticas
    stats.value = {
      total: data.total || 0,
      clientes: data.estadisticas?.clientes || 0,
      automotoras: data.estadisticas?.automotoras || 0,
      peritos: data.estadisticas?.peritos || 0,
      admins: data.estadisticas?.admins || 0,
      publicistas: data.estadisticas?.publicistas || 0
    }
    
  } catch (error) {
    console.error('Error cargando usuarios:', error)
    usuarios.value = []
    
    // Datos mock para desarrollo
    usuarios.value = [
      {
        id: 1,
        nombre: 'Ronald Bravo',
        email: 'ronald.bravo.t@gmail.com',
        rol: 'ADMIN',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        nombre: 'Perito Ejemplo',
        email: 'perito1@test.com',
        rol: 'PERITO',
        createdAt: new Date().toISOString()
      }
    ]
    
    stats.value = {
      total: 25,
      clientes: 18,
      automotoras: 4,
      peritos: 2,
      admins: 1,
      publicistas: 0
    }
    
  } finally {
    loading.value = false
  }
}

const aplicarFiltros = () => {
  currentPage.value = 1
  cargarUsuarios()
}

const limpiarFiltros = () => {
  filtros.rol = ''
  filtros.email = ''
  filtros.nombre = ''
  currentPage.value = 1
  cargarUsuarios()
}

const cambiarPagina = (page) => {
  currentPage.value = page
  cargarUsuarios()
}

const verDetalles = (usuario) => {
  // TODO: Implementar modal de detalles
  console.log('Ver detalles de usuario:', usuario)
  alert(`Ver detalles de: ${usuario.nombre} (${usuario.email})`)
}

const editarUsuario = (usuario) => {
  // TODO: Implementar edición de usuario
  console.log('Editar usuario:', usuario)
  alert(`Editar usuario: ${usuario.nombre} (${usuario.email})`)
}

onMounted(() => {
  cargarUsuarios()
})
</script>