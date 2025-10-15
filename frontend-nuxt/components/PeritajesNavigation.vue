<!-- components/PeritajesNavigation.vue -->
<template>
  <nav class="bg-white shadow-sm border-b border-gray-200 sticky top-16 z-40">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between py-3">
        <!-- Logo/Título de sección -->
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-lg font-semibold text-gray-900">Peritajes Vehiculares</h2>
            <p class="text-xs text-gray-500">Servicios profesionales de inspección</p>
          </div>
        </div>

        <!-- Menú de navegación horizontal -->
        <div class="hidden lg:flex space-x-8">
          <!-- Servicios Principales -->
          <div class="relative group">
            <button class="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">
              <span>Servicios Principales</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div class="py-3">
                <NuxtLink 
                  v-for="servicio in serviciosPrincipales" 
                  :key="servicio.url"
                  :to="servicio.url"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  :class="{ 'bg-orange-50 text-orange-600': isActive(servicio.url) }"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div>
                      <div class="font-medium">{{ servicio.nombre }}</div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Servicios Especializados -->
          <div class="relative group">
            <button class="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">
              <span>Especializados</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div class="py-3">
                <NuxtLink 
                  v-for="servicio in serviciosEspecializados" 
                  :key="servicio.url"
                  :to="servicio.url"
                  class="block px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  :class="{ 'bg-orange-50 text-orange-600': isActive(servicio.url) }"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <div class="font-medium">{{ servicio.nombre }}</div>
                    </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Por Ubicación -->
          <div class="relative group">
            <button class="flex items-center space-x-1 text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">
              <span>Por Ubicación</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div class="py-3">
                <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Santiago</div>
                <NuxtLink 
                  v-for="comuna in comunasDestacadas" 
                  :key="comuna.slug"
                  :to="`/peritajes/santiago/${comuna.slug}`"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                >
                  {{ comuna.nombre }}
                </NuxtLink>
                <div class="border-t border-gray-100 mt-2 pt-2">
                  <NuxtLink to="/peritajes/santiago" class="block px-4 py-2 text-sm text-orange-600 font-medium hover:bg-orange-50 transition-colors duration-200">
                    Ver todas las comunas →
                  </NuxtLink>
                </div>
                
                <div class="border-t border-gray-100 mt-2 pt-2">
                  <div class="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Ciudades Principales</div>
                  <NuxtLink 
                    v-for="ciudad in ciudadesDestacadas" 
                    :key="ciudad.slug"
                    :to="`/peritajes/ciudades/${ciudad.slug}`"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
                  >
                    {{ ciudad.nombre }}
                  </NuxtLink>
                  <NuxtLink to="/peritajes/ciudades" class="block px-4 py-2 text-sm text-orange-600 font-medium hover:bg-orange-50 transition-colors duration-200">
                    Ver todas las ciudades →
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Botón CTA -->
        <div class="flex items-center space-x-4">
          <NuxtLink to="/peritajes/solicitar-peritaje" class="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200">
            Solicitar Ahora
          </NuxtLink>
          
          <!-- Menú móvil toggle -->
          <button 
            @click="mostrarMenuMovil = !mostrarMenuMovil"
            class="lg:hidden text-gray-700 hover:text-orange-500 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menú móvil -->
    <div v-if="mostrarMenuMovil" class="lg:hidden bg-white border-t border-gray-200">
      <div class="px-6 py-4 space-y-4">
        <!-- Servicios Principales Móvil -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-3">Servicios Principales</h3>
          <div class="space-y-2">
            <NuxtLink 
              v-for="servicio in serviciosPrincipales" 
              :key="servicio.url"
              :to="servicio.url"
              class="block text-sm text-gray-700 hover:text-orange-600 transition-colors duration-200"
              @click="mostrarMenuMovil = false"
            >
              {{ servicio.nombre }}
            </NuxtLink>
          </div>
        </div>

        <!-- Servicios Especializados Móvil -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-3">Especializados</h3>
          <div class="space-y-2">
            <NuxtLink 
              v-for="servicio in serviciosEspecializados" 
              :key="servicio.url"
              :to="servicio.url"
              class="block text-sm text-gray-700 hover:text-orange-600 transition-colors duration-200"
              @click="mostrarMenuMovil = false"
            >
              {{ servicio.nombre }}
            </NuxtLink>
          </div>
        </div>

        <!-- Ubicaciones Móvil -->
        <div>
          <h3 class="text-sm font-semibold text-gray-900 mb-3">Por Ubicación</h3>
          <div class="space-y-2">
            <div class="text-xs text-gray-500 font-medium mb-2">Santiago</div>
            <NuxtLink 
              v-for="comuna in comunasDestacadas" 
              :key="comuna.slug"
              :to="`/peritajes/santiago/${comuna.slug}`"
              class="block text-sm text-gray-700 hover:text-orange-600 transition-colors duration-200 ml-2"
              @click="mostrarMenuMovil = false"
            >
              {{ comuna.nombre }}
            </NuxtLink>
            <NuxtLink to="/peritajes/santiago" class="block text-sm text-orange-600 font-medium hover:text-orange-700 transition-colors duration-200 ml-2" @click="mostrarMenuMovil = false">
              Ver todas las comunas →
            </NuxtLink>
            
            <div class="text-xs text-gray-500 font-medium mb-2 mt-4">Ciudades Principales</div>
            <NuxtLink 
              v-for="ciudad in ciudadesDestacadas" 
              :key="ciudad.slug"
              :to="`/peritajes/ciudades/${ciudad.slug}`"
              class="block text-sm text-gray-700 hover:text-orange-600 transition-colors duration-200 ml-2"
              @click="mostrarMenuMovil = false"
            >
              {{ ciudad.nombre }}
            </NuxtLink>
            <NuxtLink to="/peritajes/ciudades" class="block text-sm text-orange-600 font-medium hover:text-orange-700 transition-colors duration-200 ml-2" @click="mostrarMenuMovil = false">
              Ver todas las ciudades →
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mostrarMenuMovil = ref(false)
const route = useRoute()

// Función para verificar si la ruta está activa
const isActive = (url) => {
  return route.path === url
}

// Servicios principales
const serviciosPrincipales = [
  {
    nombre: 'Revisión Precompra',
    url: '/peritajes/revision-precompra-auto'
  },
  {
    nombre: 'Inspección Auto Usado',
    url: '/peritajes/inspeccion-auto-usado'
  },
  {
    nombre: 'Scanner Automotriz',
    url: '/peritajes/scanner-automotriz-domicilio'
  },
  {
    nombre: 'Agendar Peritaje',
    url: '/peritajes/agendar-peritaje-auto'
  }
]

// Servicios especializados
const serviciosEspecializados = [
  {
    nombre: 'Auto Eléctrico',
    url: '/peritajes/peritaje-auto-electrico'
  },
  {
    nombre: 'Verificación Kilometraje',
    url: '/peritajes/verificacion-kilometraje'
  },
  {
    nombre: 'Detectar Auto Clonado',
    url: '/peritajes/detectar-auto-clonado'
  }
]

// Comunas destacadas para el menú
const comunasDestacadas = [
  { nombre: 'Santiago Centro', slug: 'santiago' },
  { nombre: 'Providencia', slug: 'providencia' },
  { nombre: 'Las Condes', slug: 'las-condes' },
  { nombre: 'Vitacura', slug: 'vitacura' },
  { nombre: 'Ñuñoa', slug: 'nunoa' }
]

// Ciudades destacadas para el menú
const ciudadesDestacadas = [
  { nombre: 'Valparaíso', slug: 'valparaiso' },
  { nombre: 'Antofagasta', slug: 'antofagasta' },
  { nombre: 'Concepción', slug: 'concepcion' },
  { nombre: 'Temuco', slug: 'temuco' },
  { nombre: 'La Serena', slug: 'la-serena' }
]

// Schema.org para SiteNavigationElement
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        "name": "Peritajes Vehiculares",
        "url": "https://autoventas360.com/peritajes",
        "hasPart": [
          ...serviciosPrincipales.map(servicio => ({
            "@type": "SiteNavigationElement",
            "name": servicio.nombre,
            "url": `https://autoventas360.com${servicio.url}`
          })),
          ...serviciosEspecializados.map(servicio => ({
            "@type": "SiteNavigationElement",
            "name": servicio.nombre,
            "url": `https://autoventas360.com${servicio.url}`
          }))
        ]
      })
    }
  ]
})
</script>