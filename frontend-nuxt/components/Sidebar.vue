<template>
  <aside>
    <!-- 🖥️ Sidebar escritorio -->
    <div
      class="flex flex-col w-full h-full bg-slate-950 text-white shadow-lg"
    >
      <div class="p-6 border-b border-slate-700">
        <h1 class="text-xl font-bold">Autoventas360</h1>
        <p class="text-sm text-gray-400">Panel {{ rol }}</p>
      </div>

      <nav class="flex-1 overflow-y-auto py-4">
        <ul>
          <li v-for="item in menu" :key="item.label" class="mb-1">
            <div>
              <!-- Submenú botón -->
              <button
                v-if="item.children"
                @click="toggle(item.label)"
                class="flex items-center justify-between w-full px-6 py-3 hover:bg-slate-800 transition-all"
                :class="{ 'bg-slate-800 font-semibold': isOpen(item.label) }"
              >
                <!-- Debug: Toggle button is rendering -->
                {{ console.log('🔵 [Sidebar] Rendering toggle button for:', item.label, 'hasChildren:', !!item.children) }}
                <div class="flex items-center gap-3">
                  <span v-if="item.label === 'Peritajes'" class="w-5 h-5">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </span>
                  <span v-else>{{ item.icon }}</span>
                  <span>{{ item.label }}</span>
                </div>
                <span class="text-sm">
                  {{ isOpen(item.label) ? '▲' : '▼' }}
                </span>
              </button>

              <!-- Enlace directo -->
              <NuxtLink
                v-else
                :to="item.route"
                @click="() => console.log('🔵 [Sidebar] Direct link clicked:', item.label, '->', item.route)"
                class="flex items-center gap-3 px-6 py-3 hover:bg-slate-800 transition-all"
                :class="{ 'bg-slate-800 font-semibold': route.path === item.route }"
              >
                <span>{{ item.icon }}</span>
                <span>{{ item.label }}</span>
              </NuxtLink>

              <!-- Submenú -->
              <ul v-if="item.children && isOpen(item.label)" class="ml-6 mt-1 space-y-1">
                <!-- Debug: Submenu is rendering -->
                {{ console.log('🔵 [Sidebar] Rendering submenu for:', item.label, 'with children:', item.children) }}
                <li v-for="child in item.children" :key="child.route">
                  <NuxtLink
                    :to="child.route"
                    @click="() => console.log('🟡 [Sidebar] Link peritajes clicked:', child.label, '->', child.route)"
                    class="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 rounded"
                    :class="{ 'bg-slate-800 font-semibold': route.path === child.route }"
                  >
                    – {{ child.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Botón de cerrar sesión -->
      <div class="p-4 border-t border-slate-700">
        <button
          @click="cerrarSesion"
          class="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-sm font-semibold transition-all"
        >
          🔓 Cerrar sesión
        </button>
      </div>

      <div class="text-sm text-slate-400 text-center py-2">v1.0.0</div>
    </div>

    <!-- 📱 Sidebar móvil -->
    <nav
      class="md:hidden fixed bottom-0 left-0 w-full bg-slate-950 text-white flex justify-around items-center py-2 shadow-lg z-40"
    >
      <NuxtLink
        v-for="item in flatMenu"
        :key="item.route"
        :to="item.route"
        class="flex flex-col items-center justify-center text-xs px-2 py-1"
        :class="{ 'text-blue-400': route.path === item.route }"
      >
        <span>{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'
import { menusPorRol } from '../data/menuPorRol'

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()

// Debug current route
console.log('🔵 [Sidebar] Current route:', route.path)

// Debug authStore
console.log('🔵 [Sidebar] AuthStore state:', {
  isLoggedIn: authStore.isLoggedIn,
  isHydrated: authStore.isHydrated,
  hasUser: !!authStore.user,
  hasToken: !!authStore.token,
  user: authStore.user
})

const rol = computed(() => {
  const userRole = authStore.user?.rol || 'CLIENTE'
  console.log('🔵 [Sidebar] User role:', userRole)
  return userRole
})

const menu = computed(() => {
  const menuItems = menusPorRol[rol.value] || []
  console.log('🔵 [Sidebar] Menu items for role', rol.value, ':', menuItems)
  return menuItems
})

// Submenús abiertos
const openItems = ref([])

const toggle = (label) => {
  console.log('🔵 [Sidebar] Toggle clicked for:', label)
  console.log('🔵 [Sidebar] Current openItems:', openItems.value)
  
  if (openItems.value.includes(label)) {
    openItems.value = openItems.value.filter((l) => l !== label)
    console.log('🔵 [Sidebar] Closed submenu for:', label)
  } else {
    openItems.value.push(label)
    console.log('🔵 [Sidebar] Opened submenu for:', label)
  }
  
  console.log('🔵 [Sidebar] New openItems:', openItems.value)
}

const isOpen = (label) => {
  const isItemOpen = openItems.value.includes(label)
  console.log('🔵 [Sidebar] isOpen check for', label, ':', isItemOpen)
  return isItemOpen
}

// Menú móvil plano
const flatMenu = computed(() => {
  const items = []
  for (const item of menu.value) {
    if (item.children) {
      items.push(...item.children)
    } else {
      items.push(item)
    }
  }
  return items
})

// Acción cerrar sesión
const cerrarSesion = () => {
  authStore.logout()
  router.push('/login')
}
</script>
