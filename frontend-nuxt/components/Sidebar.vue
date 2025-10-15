<template>
  <aside>
    <!-- 🖥️ Sidebar escritorio -->
    <div class="flex flex-col w-full h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl">
      <!-- Header del sidebar -->
      <div class="p-6 border-b border-slate-700/50 flex-shrink-0">
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <i class="fas fa-car text-white text-lg"></i>
          </div>
          <div>
            <h1 class="text-lg font-bold text-white">Autoventas360</h1>
            <p class="text-xs text-slate-400 capitalize">{{ rol }}</p>
          </div>
        </div>
      </div>

      <!-- Navegación -->
      <nav class="flex-1 overflow-y-auto py-4 px-3">
        <ul class="space-y-1">
          <li v-for="item in menu" :key="item.label" class="mb-1">
            <div>
              <!-- Submenú botón -->
              <button
                v-if="item.children"
                @click="toggle(item.label)"
                class="flex items-center justify-between w-full px-4 py-3 rounded-xl hover:bg-slate-700/50 transition-all duration-200 group"
                :class="{ 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30': isOpen(item.label) }"
              >
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
                       :class="isOpen(item.label) ? 'bg-blue-500/20' : 'bg-slate-700/50 group-hover:bg-slate-600/50'">
                    <i :class="[item.icon, 'text-sm', isOpen(item.label) ? 'text-blue-400' : 'text-slate-300']"></i>
                  </div>
                  <span class="font-medium text-slate-200">{{ item.label }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span v-if="item.children && item.children.length > 0" 
                        class="text-xs bg-slate-600 text-slate-300 px-2 py-1 rounded-full">
                    {{ item.children.length }}
                  </span>
                  <i 
                    :class="[isOpen(item.label) ? 'fas fa-chevron-up' : 'fas fa-chevron-down', 'text-xs text-slate-400 transition-transform duration-200']"
                    :style="{ transform: isOpen(item.label) ? 'rotate(0deg)' : 'rotate(0deg)' }"
                  ></i>
                </div>
              </button>

              <!-- Enlace directo -->
              <NuxtLink
                v-else
                :to="item.route"
                :class="[
                  'flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-700/50 transition-all duration-200 group',
                  { 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-white': route.path === item.route }
                ]"
              >
                <div class="w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200"
                     :class="route.path === item.route ? 'bg-blue-500/20' : 'bg-slate-700/50 group-hover:bg-slate-600/50'">
                  <i :class="[item.icon, 'text-sm', route.path === item.route ? 'text-blue-400' : 'text-slate-300']"></i>
                </div>
                <span class="font-medium" 
                      :class="route.path === item.route ? 'text-white' : 'text-slate-200'">{{ item.label }}</span>
              </NuxtLink>

              <!-- Submenú -->
              <div v-if="item.children && isOpen(item.label)" class="ml-4 mt-2 space-y-1 border-l-2 border-blue-500/30 pl-4 bg-slate-800/30 rounded-lg py-2">
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.route"
                  :to="child.route"
                  class="block px-3 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-slate-700/30"
                  :class="{ 
                    'bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-sm': route.path === child.route,
                    'text-slate-400 hover:text-slate-300': route.path !== child.route
                  }"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 rounded-full bg-slate-500 transition-colors duration-200"
                         :class="route.path === child.route ? 'bg-blue-400' : 'bg-slate-500'"></div>
                    {{ child.label }}
                  </div>
                </NuxtLink>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      <!-- Botón de cerrar sesión -->
      <div class="p-4 border-t border-slate-700/50 flex-shrink-0">
        <button
          @click="cerrarSesion"
          class="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/25 hover:scale-[1.02]"
        >
          <i class="fas fa-sign-out-alt"></i>
          Cerrar sesión
        </button>
      </div>

      <!-- Versión -->
      <div class="px-4 pb-4 flex-shrink-0">
        <div class="text-xs text-slate-500 text-center bg-slate-800/50 rounded-lg py-2 border border-slate-700/30">
          <i class="fas fa-code text-slate-600 mr-1"></i>
          v1.0.0
        </div>
      </div>
    </div>

    <!-- 📱 Sidebar móvil -->
    <nav class="md:hidden fixed bottom-0 left-0 w-full bg-slate-900 text-white flex justify-around items-center py-3 shadow-lg z-40 border-t border-slate-700/50 backdrop-blur-sm">
      <NuxtLink
        v-for="item in flatMenu.slice(0, 4)"
        :key="item.route"
        :to="item.route"
        class="flex flex-col items-center justify-center text-xs px-2 py-2 rounded-lg transition-all duration-200"
        :class="{ 
          'text-blue-400 bg-blue-500/20 scale-110': route.path === item.route,
          'text-slate-400 hover:text-slate-300 hover:bg-slate-700/30': route.path !== item.route
        }"
      >
        <i :class="[item.icon, 'text-lg mb-1']"></i>
        <span class="text-xs font-medium">{{ item.label }}</span>
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

const rol = computed(() => {
  const userRole = authStore.user?.rol || 'CLIENTE'
  return userRole
})

const menu = computed(() => {
  const menuItems = menusPorRol[rol.value] || []
  return menuItems
})

// Submenús abiertos
const openItems = ref([])

const toggle = (label) => {
  if (openItems.value.includes(label)) {
    openItems.value = openItems.value.filter((l) => l !== label)
  } else {
    openItems.value.push(label)
  }
}

const isOpen = (label) => {
  return openItems.value.includes(label)
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