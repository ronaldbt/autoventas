<template>
    <aside>
      <!-- 🖥️ Sidebar escritorio -->
      <div
        class="hidden md:flex flex-col fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-lg z-40"
      >
        <div class="p-6 border-b border-gray-700">
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
                  class="flex items-center justify-between w-full px-6 py-3 hover:bg-gray-800 transition-all"
                  :class="{ 'bg-gray-800 font-semibold': isOpen(item.label) }"
                >
                  <div class="flex items-center gap-3">
                    <span>{{ item.icon }}</span>
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
                  class="flex items-center gap-3 px-6 py-3 hover:bg-gray-800 transition-all"
                  :class="{ 'bg-gray-800 font-semibold': route.path === item.route }"
                >
                  <span>{{ item.icon }}</span>
                  <span>{{ item.label }}</span>
                </NuxtLink>
  
                <!-- Submenú -->
                <ul v-if="item.children && isOpen(item.label)" class="ml-6 mt-1 space-y-1">
                  <li v-for="child in item.children" :key="child.route">
                    <NuxtLink
                      :to="child.route"
                      class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 rounded"
                      :class="{ 'bg-gray-800 font-semibold': route.path === child.route }"
                    >
                      – {{ child.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
  
        <div class="text-sm text-gray-400 p-4 border-t border-gray-700">
          v1.0.0
        </div>
      </div>
  
      <!-- 📱 Sidebar móvil -->
      <nav
        class="md:hidden fixed bottom-0 left-0 w-full bg-gray-900 text-white flex justify-around items-center py-2 shadow-lg z-40"
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
  import { useRoute } from 'vue-router'
  import { useAuthStore } from '../stores/authStore'
  import { menusPorRol } from '../data/menuPorRol'
  
  const authStore = useAuthStore()
  const route = useRoute()
  
  const rol = computed(() => authStore.user?.rol || 'CLIENTE')
  const menu = computed(() => menusPorRol[rol.value] || [])
  
  // Submenús abiertos
  const openItems = ref([])
  
  const toggle = (label) => {
    if (openItems.value.includes(label)) {
      openItems.value = openItems.value.filter((l) => l !== label)
    } else {
      openItems.value.push(label)
    }
  }
  
  const isOpen = (label) => openItems.value.includes(label)
  
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
  </script>
  