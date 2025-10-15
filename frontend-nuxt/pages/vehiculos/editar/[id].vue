<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold text-slate-800 mb-2">Editar Vehículo</h1>
            <p class="text-slate-600">Actualiza la información de tu vehículo</p>
          </div>
          <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Loading state -->
      <div v-if="cargandoVehiculo" class="flex items-center justify-center py-12">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p class="text-slate-600">Cargando información del vehículo...</p>
        </div>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="bg-white rounded-2xl shadow-lg p-12 text-center">
        <svg class="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
        <h3 class="text-xl font-semibold text-slate-700 mb-2">Error al cargar vehículo</h3>
        <p class="text-slate-500 mb-6">{{ error }}</p>
        <NuxtLink 
          to="/cliente/mis-autos"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Volver a Mis Autos
        </NuxtLink>
      </div>

      <!-- Edit Form -->
      <div v-else-if="vehiculo" class="bg-white rounded-2xl shadow-lg p-8">
        <form @submit.prevent="actualizarVehiculo" class="space-y-8">
          <!-- Información Básica -->
          <div class="border-b border-slate-200 pb-8">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-slate-800">Información Básica</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Título del anuncio *</label>
                <input
                  v-model="form.titulo"
                  type="text"
                  placeholder="Ej: Toyota Corolla 2018 en excelente estado"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Precio (CLP) *</label>
                <input
                  v-model="form.precio"
                  type="number"
                  placeholder="12000000"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Año *</label>
                <input
                  v-model="form.anio"
                  type="number"
                  min="1980"
                  :max="new Date().getFullYear() + 1"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Kilometraje *</label>
                <input
                  v-model="form.kilometros"
                  type="number"
                  min="0"
                  required
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Color exterior</label>
                <input
                  v-model="form.colorExterior"
                  type="text"
                  placeholder="Ej: Blanco, Negro, Plata"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Color interior</label>
                <input
                  v-model="form.colorInterior"
                  type="text"
                  placeholder="Ej: Negro, Beige, Gris"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                />
              </div>
            </div>

            <div class="mt-6">
              <label class="block text-sm font-semibold text-slate-800 mb-2">Descripción</label>
              <textarea
                v-model="form.descripcion"
                rows="4"
                placeholder="Describe las características, estado y cualquier información relevante del vehículo..."
                class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none bg-white text-slate-900 placeholder-slate-500"
              ></textarea>
            </div>
          </div>

          <!-- Especificaciones del Vehículo -->
          <div class="border-b border-slate-200 pb-8">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-slate-800">Especificaciones Técnicas</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Marca -->
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Marca *</label>
                <select
                  v-model="form.marcaId"
                  required
                  @change="cargarModelosPorMarca"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                >
                  <option value="">Selecciona una marca</option>
                  <option v-for="marca in marcas" :key="marca.id" :value="marca.id">
                    {{ marca.nombre }}
                  </option>
                </select>
              </div>

              <!-- Modelo -->
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Modelo</label>
                <select
                  v-model="form.modeloId"
                  :disabled="!form.marcaId || cargandoModelos"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500 disabled:bg-slate-100 disabled:text-slate-600 disabled:cursor-not-allowed"
                >
                  <option value="">{{ cargandoModelos ? 'Cargando modelos...' : 'Selecciona un modelo' }}</option>
                  <option v-for="modelo in modelos" :key="modelo.id" :value="modelo.id">
                    {{ modelo.nombre }}
                  </option>
                </select>
                <p class="text-xs text-slate-500 mt-1">Si no encuentras tu modelo, déjalo vacío y especifica en la versión</p>
              </div>

              <!-- Versión -->
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Versión/Modelo específico</label>
                <input
                  v-model="form.version"
                  type="text"
                  placeholder="Ej: 1.8 XEI, GLI, Sport"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                />
              </div>

              <!-- Transmisión -->
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Transmisión</label>
                <select
                  v-model="form.transmisionId"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                >
                  <option value="">Selecciona transmisión</option>
                  <option v-for="transmision in transmisiones" :key="transmision.id" :value="transmision.id">
                    {{ transmision.nombre }}
                  </option>
                </select>
              </div>

              <!-- Combustible -->
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Combustible</label>
                <select
                  v-model="form.combustibleId"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                >
                  <option value="">Selecciona combustible</option>
                  <option v-for="combustible in combustibles" :key="combustible.id" :value="combustible.id">
                    {{ combustible.nombre }}
                  </option>
                </select>
              </div>

              <!-- Carrocería -->
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Carrocería</label>
                <select
                  v-model="form.carroceriaId"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                >
                  <option value="">Selecciona tipo de carrocería</option>
                  <option v-for="carroceria in carrocerias" :key="carroceria.id" :value="carroceria.id">
                    {{ carroceria.nombre }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <!-- Ubicación -->
          <div class="border-b border-slate-200 pb-8">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-slate-800">Ubicación</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Región -->
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Región *</label>
                <select
                  v-model="form.regionId"
                  required
                  @change="cargarComunasPorRegion"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500"
                >
                  <option value="">Selecciona una región</option>
                  <option v-for="region in regiones" :key="region.id" :value="region.id">
                    {{ region.nombre }}
                  </option>
                </select>
              </div>

              <!-- Comuna -->
              <div>
                <label class="block text-sm font-semibold text-slate-800 mb-2">Comuna</label>
                <select
                  v-model="form.comunaId"
                  :disabled="!form.regionId || cargandoComunas"
                  class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 placeholder-slate-500 disabled:bg-slate-100 disabled:text-slate-600 disabled:cursor-not-allowed"
                >
                  <option value="">{{ cargandoComunas ? 'Cargando comunas...' : 'Selecciona una comuna' }}</option>
                  <option v-for="comuna in comunas" :key="comuna.id" :value="comuna.id">
                    {{ comuna.nombre }}
                  </option>
                </select>
                <p class="text-xs text-slate-500 mt-1">Si no encuentras tu comuna, déjalo vacío y especifica en la descripción</p>
              </div>
            </div>
          </div>

          <!-- Imágenes Adicionales -->
          <div class="border-b border-slate-200 pb-8">
            <div class="flex items-center space-x-3 mb-6">
              <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h2 class="text-xl font-semibold text-slate-800">Agregar Más Imágenes</h2>
            </div>

            <!-- Imágenes actuales -->
            <div v-if="vehiculo.imagenes && vehiculo.imagenes.length > 0" class="mb-6">
              <h3 class="text-sm font-medium text-slate-700 mb-3">Imágenes actuales:</h3>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div v-for="(imagen, index) in vehiculo.imagenes" :key="index" class="relative group">
                  <img :src="imagen" :alt="`Imagen ${index + 1}`" class="w-full h-20 object-cover rounded-lg">
                  <button 
                    type="button"
                    @click="eliminarImagen(index)"
                    class="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <!-- Subir nuevas imágenes -->
            <div>
              <label class="block text-sm font-semibold text-slate-800 mb-2">Agregar nuevas imágenes</label>
              <input
                ref="imageInput"
                type="file"
                multiple
                accept="image/*"
                @change="manejarImagenes"
                class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
              <p class="text-xs text-slate-500 mt-1">Puedes subir hasta 10 imágenes. Formatos admitidos: JPG, PNG, WEBP</p>
            </div>
          </div>

          <!-- Botones de acción -->
          <div class="flex gap-4">
            <NuxtLink 
              to="/cliente/mis-autos"
              class="flex-1 px-6 py-3 bg-slate-200 text-slate-700 text-center rounded-xl hover:bg-slate-300 transition-all duration-200 font-medium"
            >
              Cancelar
            </NuxtLink>
            <button
              type="submit"
              :disabled="guardando"
              class="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {{ guardando ? 'Guardando...' : 'Actualizar Vehículo' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { catalogoService } from '~/services/catalogoService'

definePageMeta({
  middleware: ['auth']
})

const { $api } = useNuxtApp()
const route = useRoute()
const router = useRouter()

// Estados reactivos
const cargandoVehiculo = ref(true)
const vehiculo = ref(null)
const error = ref(null)
const guardando = ref(false)

// Datos del catálogo
const marcas = ref([])
const modelos = ref([])
const regiones = ref([])
const comunas = ref([])
const transmisiones = ref([])
const combustibles = ref([])
const carrocerias = ref([])

// Estados de carga
const cargandoModelos = ref(false)
const cargandoComunas = ref(false)

// Formulario
const form = ref({
  titulo: '',
  precio: '',
  anio: '',
  kilometros: '',
  colorExterior: '',
  colorInterior: '',
  descripcion: '',
  version: '',
  marcaId: '',
  modeloId: '',
  transmisionId: '',
  combustibleId: '',
  carroceriaId: '',
  regionId: '',
  comunaId: ''
})

// Cargar vehículo a editar
const cargarVehiculo = async () => {
  try {
    cargandoVehiculo.value = true
    const id = route.params.id
    
    console.log('🔵 [Editar Vehículo] Cargando vehículo ID:', id)
    
    const response = await $api.get(`/vehiculos/${id}`)
    vehiculo.value = response.data
    
    console.log('🔵 [Editar Vehículo] Vehículo cargado:', vehiculo.value)
    
    // Llenar el formulario con los datos existentes
    form.value = {
      titulo: vehiculo.value.titulo || '',
      precio: vehiculo.value.precio || '',
      anio: vehiculo.value.anio || '',
      kilometros: vehiculo.value.kilometros || '',
      colorExterior: vehiculo.value.colorExterior || '',
      colorInterior: vehiculo.value.colorInterior || '',
      descripcion: vehiculo.value.descripcion || '',
      version: vehiculo.value.version || '',
      marcaId: vehiculo.value.marcaId || '',
      modeloId: vehiculo.value.modeloId || '',
      transmisionId: vehiculo.value.transmisionId || '',
      combustibleId: vehiculo.value.combustibleId || '',
      carroceriaId: vehiculo.value.carroceriaId || '',
      regionId: vehiculo.value.regionId || '',
      comunaId: vehiculo.value.comunaId || ''
    }
    
    // Cargar modelos si hay marca seleccionada
    if (form.value.marcaId) {
      await cargarModelosPorMarca()
    }
    
    // Cargar comunas si hay región seleccionada
    if (form.value.regionId) {
      await cargarComunasPorRegion()
    }
    
  } catch (err) {
    console.error('Error al cargar vehículo:', err)
    error.value = err.response?.data?.error || 'No se pudo cargar el vehículo'
  } finally {
    cargandoVehiculo.value = false
  }
}

// Cargar datos del catálogo
const cargarCatalogo = async () => {
  try {
    console.log('🔵 [Editar Vehículo] Iniciando carga de catálogo...')
    
    const [
      marcasRes,
      regionesRes,
      transmisionesRes,
      combustiblesRes,
      carroceriasRes
    ] = await Promise.all([
      catalogoService.getMarcas(),
      catalogoService.getRegiones(),
      catalogoService.getTransmisiones(),
      catalogoService.getCombustibles(),
      catalogoService.getCarrocerias()
    ])

    console.log('🔵 [Editar Vehículo] Respuestas recibidas:', {
      marcas: marcasRes?.length || 0,
      regiones: regionesRes?.length || 0,
      transmisiones: transmisionesRes?.length || 0,
      combustibles: combustiblesRes?.length || 0,
      carrocerias: carroceriasRes?.length || 0
    })

    // Las APIs retornan los datos directamente, no en objetos wrapper
    marcas.value = marcasRes || []
    regiones.value = regionesRes || []
    transmisiones.value = transmisionesRes || []
    combustibles.value = combustiblesRes || []
    carrocerias.value = carroceriasRes || []
    
    console.log('✅ [Editar Vehículo] Catálogo cargado exitosamente')
  } catch (error) {
    console.error('❌ [Editar Vehículo] Error al cargar catálogo:', error)
  }
}

// Cargar modelos por marca
const cargarModelosPorMarca = async () => {
  if (!form.value.marcaId) {
    modelos.value = []
    return
  }
  
  try {
    cargandoModelos.value = true
    const response = await catalogoService.getModelos(form.value.marcaId)
    modelos.value = response || [] // La API retorna los modelos directamente
  } catch (error) {
    console.error('Error al cargar modelos:', error)
    modelos.value = []
  } finally {
    cargandoModelos.value = false
  }
}

// Cargar comunas por región
const cargarComunasPorRegion = async () => {
  if (!form.value.regionId) {
    comunas.value = []
    return
  }
  
  try {
    cargandoComunas.value = true
    console.log('🔵 [Editar Vehículo] Cargando comunas para región ID:', form.value.regionId)
    
    const response = await catalogoService.getComunasPorRegion(form.value.regionId)
    comunas.value = response || [] // La API retorna las comunas directamente
    
    console.log('🔵 [Editar Vehículo] Comunas cargadas:', comunas.value.length)
  } catch (error) {
    console.error('❌ [Editar Vehículo] Error al cargar comunas:', error)
    comunas.value = []
  } finally {
    cargandoComunas.value = false
  }
}

// Manejar nuevas imágenes
const manejarImagenes = (event) => {
  form.value.imagenes = event.target.files
}

// Eliminar imagen existente
const eliminarImagen = (indice) => {
  if (vehiculo.value.imagenes && vehiculo.value.imagenes.length > indice) {
    vehiculo.value.imagenes.splice(indice, 1)
  }
}

// Actualizar vehículo
const actualizarVehiculo = async () => {
  try {
    guardando.value = true
    
    const formData = new FormData()
    
    // Agregar todos los campos del formulario
    Object.keys(form.value).forEach(key => {
      if (key !== 'imagenes' && form.value[key] !== '' && form.value[key] !== null) {
        formData.append(key, form.value[key])
      }
    })
    
    // Agregar nuevas imágenes
    if (form.value.imagenes) {
      Array.from(form.value.imagenes).forEach((imagen, index) => {
        formData.append('imagenes', imagen)
      })
    }
    
    const id = route.params.id
    const response = await $api.put(`/vehiculos/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    
    if (response.data.ok) {
      // Redirigir a Mis Autos
      router.push('/cliente/mis-autos')
    }
    
  } catch (error) {
    console.error('❌ [Editar Vehículo] Error al actualizar:', error)
    console.error('❌ [Editar Vehículo] Status:', error.response?.status)
    console.error('❌ [Editar Vehículo] Response data:', error.response?.data)
    
    if (error.response?.status === 403) {
      alert('No tienes permisos para editar este vehículo. Solo el propietario puede editarlo.')
    } else if (error.response?.status === 401) {
      alert('Sesión expirada. Por favor, inicia sesión nuevamente.')
    } else {
      alert('Error al actualizar el vehículo. Por favor, inténtalo de nuevo.')
    }
  } finally {
    guardando.value = false
  }
}

// Cargar datos al montar el componente
onMounted(() => {
  cargarCatalogo()
  cargarVehiculo()
})

// SEO
useHead({
  title: 'Editar Vehículo - Autoventas360',
  meta: [
    { name: 'description', content: 'Edita la información de tu vehículo publicado en Autoventas360' }
  ]
})
</script>

<style scoped>
/* Estilos específicos para mejorar la legibilidad en todas las plataformas */
input, select, textarea {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga" off;
}

/* Asegurar que los inputs tengan fondo blanco sólido */
input:not(:disabled), 
select:not(:disabled), 
textarea:not(:disabled) {
  background-color: #ffffff !important;
  color: #0f172a !important;
}

/* Placeholder mejorado */
input::placeholder,
textarea::placeholder {
  color: #64748b !important;
  opacity: 1;
}

/* Estados disabled mejorados */
input:disabled, 
select:disabled {
  background-color: #f1f5f9 !important;
  color: #475569 !important;
  opacity: 1;
}

/* Labels con mejor contraste */
label {
  color: #1e293b !important;
}

/* Mejorar legibilidad en Safari */
@supports (-webkit-appearance: none) {
  input, select, textarea {
    -webkit-appearance: none;
    appearance: none;
  }
}
</style>