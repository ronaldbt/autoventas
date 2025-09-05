// tests/catalogoStore.test.js
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCatalogoStore } from '../stores/catalogoStore'

// Mock del servicio de catálogo
vi.mock('../services/catalogoService', () => ({
  catalogoService: {
    getMarcas: vi.fn(),
    getMarcasPopulares: vi.fn(),
    getModelos: vi.fn(),
    getRegiones: vi.fn(),
    getComunas: vi.fn(),
    getTransmisiones: vi.fn(),
    getCarrocerias: vi.fn(),
    getCombustibles: vi.fn()
  }
}))

describe('CatalogoStore', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useCatalogoStore()
  })

  describe('Estado inicial', () => {
    it('debe tener arrays vacíos para catálogos', () => {
      expect(store.marcas).toEqual([])
      expect(store.modelos).toEqual([])
      expect(store.regiones).toEqual([])
    })

    it('debe tener estados de carga en false', () => {
      expect(store.loading.marcas).toBe(false)
      expect(store.loading.modelos).toBe(false)
    })

    it('debe tener timestamps en null', () => {
      expect(store.lastUpdated.marcas).toBeNull()
      expect(store.lastUpdated.modelos).toBeNull()
    })
  })

  describe('Getters', () => {
    beforeEach(() => {
      store.marcas = [
        { id: 1, nombre: 'BMW' },
        { id: 2, nombre: 'Audi' },
        { id: 3, nombre: 'Toyota' }
      ]
    })

    it('debe ordenar marcas alfabéticamente', () => {
      const marcasOrdenadas = store.marcasOrdenadas
      expect(marcasOrdenadas[0].nombre).toBe('Audi')
      expect(marcasOrdenadas[1].nombre).toBe('BMW')
      expect(marcasOrdenadas[2].nombre).toBe('Toyota')
    })

    it('debe retornar las primeras 10 marcas como populares', () => {
      store.marcas = Array.from({ length: 15 }, (_, i) => ({
        id: i + 1,
        nombre: `Marca${i + 1}`
      }))
      
      const populares = store.marcasPopulares
      expect(populares).toHaveLength(10)
    })

    it('debe verificar si un catálogo está cargado', () => {
      expect(store.isLoaded('marcas')).toBe(true)
      expect(store.isLoaded('modelos')).toBe(false)
    })

    it('debe verificar si está cargando', () => {
      store.loading.marcas = true
      expect(store.isLoading('marcas')).toBe(true)
      expect(store.isLoading('modelos')).toBe(false)
    })
  })

  describe('Acciones', () => {
    it('debe cargar marcas correctamente', async () => {
      const marcasMock = [
        { id: 1, nombre: 'Toyota', pais_origen: 'Japón' },
        { id: 2, nombre: 'BMW', pais_origen: 'Alemania' }
      ]

      const { catalogoService } = await import('../services/catalogoService')
      catalogoService.getMarcas.mockResolvedValue(marcasMock)

      const resultado = await store.cargarMarcas()

      expect(catalogoService.getMarcas).toHaveBeenCalled()
      expect(store.marcas).toEqual(marcasMock)
      expect(store.lastUpdated.marcas).not.toBeNull()
      expect(store.loading.marcas).toBe(false)
    })

    it('debe manejar errores al cargar marcas', async () => {
      const { catalogoService } = await import('../services/catalogoService')
      catalogoService.getMarcas.mockRejectedValue(new Error('Error de red'))

      await expect(store.cargarMarcas()).rejects.toThrow('Error de red')
      expect(store.loading.marcas).toBe(false)
    })

    it('debe usar cache cuando está disponible', async () => {
      const marcasMock = [{ id: 1, nombre: 'Toyota' }]
      store.marcas = marcasMock
      store.lastUpdated.marcas = Date.now()

      const { catalogoService } = await import('../services/catalogoService')
      
      const resultado = await store.cargarMarcas()

      expect(catalogoService.getMarcas).not.toHaveBeenCalled()
      expect(resultado).toEqual(marcasMock)
    })

    it('debe cargar marcas populares', async () => {
      const marcasPopularesMock = [
        { id: 1, nombre: 'Toyota', popularidad: 100 },
        { id: 2, nombre: 'BMW', popularidad: 95 }
      ]

      const { catalogoService } = await import('../services/catalogoService')
      catalogoService.getMarcasPopulares.mockResolvedValue(marcasPopularesMock)

      const resultado = await store.cargarMarcasPopulares(10)

      expect(catalogoService.getMarcasPopulares).toHaveBeenCalledWith(10)
      expect(store.marcas).toEqual(marcasPopularesMock)
    })

    it('debe buscar marcas por término', async () => {
      const marcasBuscadas = [{ id: 1, nombre: 'Toyota' }]

      const { catalogoService } = await import('../services/catalogoService')
      catalogoService.getMarcas.mockResolvedValue(marcasBuscadas)

      const resultado = await store.buscarMarcas('toyota', 20)

      expect(catalogoService.getMarcas).toHaveBeenCalledWith({
        search: 'toyota',
        limit: 20
      })
      expect(resultado).toEqual(marcasBuscadas)
    })

    it('debe limpiar cache correctamente', () => {
      store.modelosPorMarca.set('1', [{ id: 1, nombre: 'Modelo1' }])
      store.comunasPorRegion.set('1', [{ id: 1, nombre: 'Comuna1' }])
      store.lastUpdated.marcas = Date.now()

      store.limpiarCache()

      expect(store.modelosPorMarca.size).toBe(0)
      expect(store.comunasPorRegion.size).toBe(0)
      expect(store.lastUpdated.marcas).toBeNull()
    })
  })

  describe('Paginación', () => {
    it('debe tener estado inicial de paginación correcto', () => {
      expect(store.pagination.marcas).toEqual({
        page: 1,
        limit: 20,
        total: 0,
        hasMore: false
      })
    })

    it('debe resetear paginación correctamente', () => {
      store.pagination.marcas.page = 5
      store.pagination.marcas.hasMore = true

      store.resetearPaginacionMarcas()

      expect(store.pagination.marcas).toEqual({
        page: 1,
        limit: 20,
        total: 0,
        hasMore: false
      })
    })
  })
})




