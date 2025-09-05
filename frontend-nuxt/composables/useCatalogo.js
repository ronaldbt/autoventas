// composables/useCatalogo.js
import { computed } from 'vue'
import { useCatalogoStore } from '../stores/catalogoStore'

export const useCatalogo = () => {
  const catalogoStore = useCatalogoStore()

  return {
    // Estado
    marcas: computed(() => catalogoStore.marcasOrdenadas),
    marcasPopulares: computed(() => catalogoStore.marcasPopulares),
    modelos: computed(() => catalogoStore.modelosOrdenados),
    regiones: computed(() => catalogoStore.regionesOrdenadas),
    comunas: computed(() => catalogoStore.comunasOrdenadas),
    transmisiones: computed(() => catalogoStore.transmisiones),
    carrocerias: computed(() => catalogoStore.carrocerias),
    combustibles: computed(() => catalogoStore.combustibles),
    
    // Estados de carga
    loading: computed(() => catalogoStore.loading),
    
    // Métodos
    cargarMarcas: catalogoStore.cargarMarcas,
    cargarMarcasPopulares: catalogoStore.cargarMarcasPopulares,
    buscarMarcas: catalogoStore.buscarMarcas,
    cargarModelos: catalogoStore.cargarModelos,
    cargarRegiones: catalogoStore.cargarRegiones,
    cargarComunas: catalogoStore.cargarComunas,
    cargarTransmisiones: catalogoStore.cargarTransmisiones,
    cargarCarrocerias: catalogoStore.cargarCarrocerias,
    cargarCombustibles: catalogoStore.cargarCombustibles,
    cargarTodosLosCatalogos: catalogoStore.cargarTodosLosCatalogos,
    
    // Utilidades
    isLoaded: catalogoStore.isLoaded,
    isLoading: catalogoStore.isLoading,
    limpiarCache: catalogoStore.limpiarCache
  }
}
