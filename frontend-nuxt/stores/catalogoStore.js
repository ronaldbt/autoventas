// stores/catalogoStore.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { catalogoService } from '../services/catalogoService'

export const useCatalogoStore = defineStore('catalogo', () => {
  // Estado
  const marcas = ref([])
  const marcasPopulares = ref([])
  const modelos = ref([])
  const regiones = ref([])
  const comunas = ref([])
  const transmisiones = ref([])
  const carrocerias = ref([])
  const combustibles = ref([])

  const loading = ref({
    marcas: false,
    marcasPopulares: false,
    modelos: false,
    regiones: false,
    comunas: false,
    transmisiones: false,
    carrocerias: false,
    combustibles: false
  })

  // Getters ordenados alfabéticamente
  const marcasOrdenadas = computed(() => {
    return [...marcas.value].sort((a, b) => a.nombre.localeCompare(b.nombre))
  })

  const modelosOrdenados = computed(() => {
    return [...modelos.value].sort((a, b) => a.nombre.localeCompare(b.nombre))
  })

  const regionesOrdenadas = computed(() => {
    return [...regiones.value].sort((a, b) => a.nombre.localeCompare(b.nombre))
  })

  const comunasOrdenadas = computed(() => {
    return [...comunas.value].sort((a, b) => a.nombre.localeCompare(b.nombre))
  })

  // Utilidades
  const isLoading = computed(() => Object.values(loading.value).some(v => v))
  const isLoaded = computed(() => (
    marcas.value.length > 0 ||
    regiones.value.length > 0 ||
    carrocerias.value.length > 0
  ))

  function limpiarCache() {
    marcas.value = []
    marcasPopulares.value = []
    modelos.value = []
    regiones.value = []
    comunas.value = []
    transmisiones.value = []
    carrocerias.value = []
    combustibles.value = []
  }

  // Actions
  async function cargarMarcas(search = '') {
    if (loading.value.marcas) return marcas.value
    loading.value.marcas = true
    try {
      const data = await catalogoService.getMarcas({ search })
      marcas.value = Array.isArray(data) ? data : (data?.marcas || [])
      return marcas.value
    } finally {
      loading.value.marcas = false
    }
  }

  async function cargarMarcasPopulares(limit = 12) {
    if (loading.value.marcasPopulares) return marcasPopulares.value
    loading.value.marcasPopulares = true
    try {
      const data = await catalogoService.getMarcasPopulares(limit)
      marcasPopulares.value = Array.isArray(data) ? data : (data?.marcas || [])
      return marcasPopulares.value
    } finally {
      loading.value.marcasPopulares = false
    }
  }

  async function buscarMarcas(texto = '') {
    return cargarMarcas(texto)
  }

  async function cargarModelos(marcaId = null) {
    if (loading.value.modelos) return modelos.value
    loading.value.modelos = true
    try {
      const data = await catalogoService.getModelos(marcaId)
      modelos.value = Array.isArray(data) ? data : (data?.modelos || [])
      return modelos.value
    } finally {
      loading.value.modelos = false
    }
  }

  async function cargarRegiones() {
    if (loading.value.regiones) return regiones.value
    loading.value.regiones = true
    try {
      const data = await catalogoService.getRegiones()
      regiones.value = Array.isArray(data) ? data : (data?.regiones || [])
      return regiones.value
    } finally {
      loading.value.regiones = false
    }
  }

  async function cargarComunas(regionId = null) {
    if (loading.value.comunas) return comunas.value
    loading.value.comunas = true
    try {
      const data = regionId ? await catalogoService.getComunasPorRegion(regionId) : await catalogoService.getComunas()
      comunas.value = Array.isArray(data) ? data : (data?.comunas || [])
      return comunas.value
    } finally {
      loading.value.comunas = false
    }
  }

  async function cargarTransmisiones() {
    if (loading.value.transmisiones) return transmisiones.value
    loading.value.transmisiones = true
    try {
      const data = await catalogoService.getTransmisiones()
      transmisiones.value = Array.isArray(data) ? data : (data?.transmisiones || [])
      return transmisiones.value
    } finally {
      loading.value.transmisiones = false
    }
  }

  async function cargarCarrocerias() {
    if (loading.value.carrocerias) return carrocerias.value
    loading.value.carrocerias = true
    try {
      const data = await catalogoService.getCarrocerias()
      carrocerias.value = Array.isArray(data) ? data : (data?.carrocerias || [])
      return carrocerias.value
    } finally {
      loading.value.carrocerias = false
    }
  }

  async function cargarCombustibles() {
    if (loading.value.combustibles) return combustibles.value
    loading.value.combustibles = true
    try {
      const data = await catalogoService.getCombustibles()
      combustibles.value = Array.isArray(data) ? data : (data?.combustibles || [])
      return combustibles.value
    } finally {
      loading.value.combustibles = false
    }
  }

  async function cargarTodosLosCatalogos() {
    await Promise.all([
      cargarMarcas(),
      cargarRegiones(),
      cargarCarrocerias(),
      cargarTransmisiones(),
      cargarCombustibles()
    ])
  }

  return {
    // state
    marcas,
    marcasPopulares,
    modelos,
    regiones,
    comunas,
    transmisiones,
    carrocerias,
    combustibles,
    loading,
    // getters
    marcasOrdenadas,
    modelosOrdenados,
    regionesOrdenadas,
    comunasOrdenadas,
    isLoaded,
    isLoading,
    // actions
    cargarMarcas,
    cargarMarcasPopulares,
    buscarMarcas,
    cargarModelos,
    cargarRegiones,
    cargarComunas,
    cargarTransmisiones,
    cargarCarrocerias,
    cargarCombustibles,
    cargarTodosLosCatalogos,
    limpiarCache
  }
})
























