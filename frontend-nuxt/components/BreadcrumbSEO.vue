<template>
  <nav aria-label="Breadcrumb" class="flex mb-6" itemscope itemtype="https://schema.org/BreadcrumbList">
    <ol class="inline-flex items-center space-x-1 md:space-x-3">
      <li v-for="(item, index) in breadcrumbs" :key="index" class="inline-flex items-center" 
          itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        
        <!-- Home/First item -->
        <template v-if="index === 0">
          <NuxtLink :to="item.url" 
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    itemprop="item">
            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L9 3.414V19a1 1 0 0 0 2 0V3.414l8.293 8.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            <span itemprop="name">{{ item.name }}</span>
          </NuxtLink>
        </template>
        
        <!-- Middle items -->
        <template v-else-if="index < breadcrumbs.length - 1">
          <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <NuxtLink :to="item.url" 
                    class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                    itemprop="item">
            <span itemprop="name">{{ item.name }}</span>
          </NuxtLink>
        </template>
        
        <!-- Last item (current page) -->
        <template v-else>
          <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" 
                aria-current="page" itemprop="name">
            {{ item.name }}
          </span>
        </template>
        
        <!-- Schema.org position -->
        <meta itemprop="position" :content="index + 1">
        
        <!-- Schema.org URL for non-current items -->
        <link v-if="index < breadcrumbs.length - 1" itemprop="item" :href="getAbsoluteUrl(item.url)">
      </li>
    </ol>
  </nav>
</template>

<script setup>
const { generateBreadcrumbs } = useSEO()

const props = defineProps({
  vehiculo: {
    type: Object,
    default: null
  },
  customBreadcrumbs: {
    type: Array,
    default: null
  },
  showStructuredData: {
    type: Boolean,
    default: true
  }
})

// Generate breadcrumbs based on current route and vehicle data
const breadcrumbs = computed(() => {
  if (props.customBreadcrumbs) {
    return props.customBreadcrumbs
  }
  
  if (props.vehiculo) {
    return generateBreadcrumbs(props.vehiculo)
  }
  
  // Fallback: generate from current route
  return generateBreadcrumbsFromRoute()
})

// Helper function to get absolute URL for schema markup
const getAbsoluteUrl = (path) => {
  const config = useRuntimeConfig()
  const baseUrl = process.client ? window.location.origin : 'https://autoventas360.com'
  return `${baseUrl}${path}`
}

// Generate breadcrumbs from current route when no vehicle data available
const generateBreadcrumbsFromRoute = () => {
  const route = useRoute()
  const breadcrumbs = [{ name: 'Inicio', url: '/' }]
  
  const pathSegments = route.path.split('/').filter(segment => segment !== '')
  let currentPath = ''
  
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`
    
    // Skip the last segment (current page)
    if (index === pathSegments.length - 1) {
      breadcrumbs.push({
        name: formatSegmentName(segment),
        url: currentPath,
        current: true
      })
      return
    }
    
    breadcrumbs.push({
      name: formatSegmentName(segment),
      url: currentPath
    })
  })
  
  return breadcrumbs
}

// Format URL segment to display name
const formatSegmentName = (segment) => {
  const formatMap = {
    'vehiculos': 'Vehículos',
    'metropolitana': 'Región Metropolitana',
    'santiago': 'Santiago',
    'providencia': 'Providencia',
    'las-condes': 'Las Condes',
    'valparaiso': 'Valparaíso',
    'vina-del-mar': 'Viña del Mar',
    'concepcion': 'Concepción',
    'usado': 'Usado',
    'nuevo': 'Nuevo',
    'toyota': 'Toyota',
    'ford': 'Ford',
    'chevrolet': 'Chevrolet',
    'mazda': 'Mazda',
    'bmw': 'BMW',
    'gasolina': 'Gasolina',
    'diesel': 'Diésel',
    'electrico': 'Eléctrico',
    'hibrido': 'Híbrido'
  }
  
  return formatMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1)
}

// Generate JSON-LD structured data for breadcrumbs
const breadcrumbStructuredData = computed(() => {
  if (!props.showStructuredData) return null
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.value.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": index < breadcrumbs.value.length - 1 ? getAbsoluteUrl(item.url) : undefined
    }))
  }
})

// Inject structured data into head
if (process.client) {
  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: () => JSON.stringify(breadcrumbStructuredData.value),
        key: 'breadcrumb-schema'
      }
    ]
  })
}
</script>