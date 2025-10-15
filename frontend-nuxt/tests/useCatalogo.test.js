// tests/useCatalogo.test.js
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCatalogo } from '../composables/useCatalogo'

// Mock del store
vi.mock('../stores/catalogoStore', () => ({
  useCatalogoStore: vi.fn(() => ({
    marcas: [
      { id: 1, nombre: 'BMW' },
      { id: 2, nombre: 'Audi' },
      { id: 3, nombre: 'Toyota' }
    ],
    marcasPopulares: [
      { id: 1, nombre: 'Toyota' },
      { id: 2, nombre: 'BMW' }
    ],
    modelos: [
      { id: 1, nombre: 'Corolla' },
      { id: 2, nombre: 'Camry' }
    ],
    regiones: [
      { id: 1, nombre: 'Metropolitana' },
      { id: 2, nombre: 'Valparaíso' }
    ],
    loading: {
      marcas: false,
      modelos: false
    },
    cargarMarcas: vi.fn(),
    cargarMarcasPopulares: vi.fn(),
    buscarMarcas: vi.fn(),
    cargarModelos: vi.fn(),
    cargarRegiones: vi.fn(),
    cargarComunas: vi.fn(),
    cargarTransmisiones: vi.fn(),
    cargarCarrocerias: vi.fn(),
    cargarCombustibles: vi.fn(),
    cargarTodosLosCatalogos: vi.fn(),
    isLoaded: vi.fn(),
    isLoading: vi.fn(),
    limpiarCache: vi.fn()
  }))
}))

describe('useCatalogo Composable', () => {
  let catalogo

  beforeEach(() => {
    setActivePinia(createPinia())
    catalogo = useCatalogo()
  })

  describe('Estado reactivo', () => {
    it('debe exponer marcas ordenadas', () => {
      expect(catalogo.marcas.value).toHaveLength(3)
      expect(catalogo.marcas.value[0].nombre).toBe('Audi') // Ordenado alfabéticamente
    })

    it('debe exponer marcas populares', () => {
      expect(catalogo.marcasPopulares.value).toHaveLength(2)
    })

    it('debe exponer modelos ordenados', () => {
      expect(catalogo.modelos.value).toHaveLength(2)
    })

    it('debe exponer regiones ordenadas', () => {
      expect(catalogo.regiones.value).toHaveLength(2)
    })

    it('debe exponer estado de carga', () => {
      expect(catalogo.loading.value).toEqual({
        marcas: false,
        modelos: false
      })
    })
  })

  describe('Métodos', () => {
    it('debe exponer método cargarMarcas', () => {
      expect(typeof catalogo.cargarMarcas).toBe('function')
    })

    it('debe exponer método cargarMarcasPopulares', () => {
      expect(typeof catalogo.cargarMarcasPopulares).toBe('function')
    })

    it('debe exponer método buscarMarcas', () => {
      expect(typeof catalogo.buscarMarcas).toBe('function')
    })

    it('debe exponer método cargarModelos', () => {
      expect(typeof catalogo.cargarModelos).toBe('function')
    })

    it('debe exponer método cargarRegiones', () => {
      expect(typeof catalogo.cargarRegiones).toBe('function')
    })

    it('debe exponer método cargarComunas', () => {
      expect(typeof catalogo.cargarComunas).toBe('function')
    })

    it('debe exponer método cargarTransmisiones', () => {
      expect(typeof catalogo.cargarTransmisiones).toBe('function')
    })

    it('debe exponer método cargarCarrocerias', () => {
      expect(typeof catalogo.cargarCarrocerias).toBe('function')
    })

    it('debe exponer método cargarCombustibles', () => {
      expect(typeof catalogo.cargarCombustibles).toBe('function')
    })

    it('debe exponer método cargarTodosLosCatalogos', () => {
      expect(typeof catalogo.cargarTodosLosCatalogos).toBe('function')
    })

    it('debe exponer método isLoaded', () => {
      expect(typeof catalogo.isLoaded).toBe('function')
    })

    it('debe exponer método isLoading', () => {
      expect(typeof catalogo.isLoading).toBe('function')
    })

    it('debe exponer método limpiarCache', () => {
      expect(typeof catalogo.limpiarCache).toBe('function')
    })
  })

  describe('Utilidades', () => {
    it('debe verificar si un catálogo está cargado', () => {
      const resultado = catalogo.isLoaded('marcas')
      expect(typeof resultado).toBe('boolean')
    })

    it('debe verificar si está cargando', () => {
      const resultado = catalogo.isLoading('marcas')
      expect(typeof resultado).toBe('boolean')
    })
  })
})




