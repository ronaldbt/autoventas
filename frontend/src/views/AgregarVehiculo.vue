<template>
    <div class="p-4 md:p-8 bg-gray-900 min-h-screen text-white">
      <!-- Paso 1: Ingreso de patente -->
      <div v-if="!patenteConfirmada" class="bg-white text-gray-900 rounded-lg shadow p-6 max-w-2xl mx-auto">
        <h2 class="text-lg font-semibold mb-4">Ingrese la patente</h2>
        <label class="block text-sm font-medium mb-1">Patente:</label>
        <input v-model="patente" type="text" class="w-full border border-gray-300 rounded px-4 py-2 mb-2" placeholder="Ej: rt4412" />
        <p class="text-red-500 text-xs mb-4">Esta información no se mostrará en la publicación</p>
        <div class="flex justify-between gap-4">
          <button @click="noVerificar" class="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded text-sm">→ NO verificar</button>
          <button @click="confirmarPatente" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded text-sm">Verificar</button>
        </div>
      </div>
  
      <!-- Paso 2: Formulario completo -->
      <div v-else class="bg-white text-gray-900 rounded-lg shadow p-6 mt-6">
        <h2 class="text-xl font-bold mb-4">Complete la información del vehículo</h2>
        <form @submit.prevent="guardarVehiculo">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" class="border p-2 rounded" :value="patente" disabled />
            <select v-model="marcaId" class="border p-2 rounded">
              <option disabled value="">Seleccionar Marca</option>
              <option v-for="m in marcas" :key="m.id" :value="m.id">{{ m.nombre }}</option>
            </select>
            <select v-model="modeloId" class="border p-2 rounded">
              <option disabled value="">Seleccionar Modelo</option>
              <option v-for="m in modelos" :key="m.id" :value="m.id">{{ m.nombre }}</option>
            </select>
            <input v-model="version" type="text" placeholder="Versión" class="border p-2 rounded" />
            <input v-model="anio" type="number" placeholder="Año" class="border p-2 rounded" />
            <select v-model="transmisionId" class="border p-2 rounded">
              <option disabled value="">Transmisión</option>
              <option v-for="t in transmisiones" :key="t.id" :value="t.id">{{ t.nombre }}</option>
            </select>
            <select v-model="combustibleId" class="border p-2 rounded">
              <option disabled value="">Combustible</option>
              <option v-for="c in combustibles" :key="c.id" :value="c.id">{{ c.nombre }}</option>
            </select>
            <input v-model="colorExterior" type="text" placeholder="Color Exterior" class="border p-2 rounded" />
            <input v-model="colorInterior" type="text" placeholder="Color Interior" class="border p-2 rounded" />
            <input v-model="kilometros" type="text" placeholder="Kilómetros" class="border p-2 rounded" />
            <input v-model="precio" type="number" placeholder="Precio" class="border p-2 rounded" />
            <select v-model="regionId" class="border p-2 rounded">
              <option disabled value="">Seleccionar Región</option>
              <option v-for="r in regiones" :key="r.id" :value="r.id">{{ r.nombre }}</option>
            </select>
            <select v-model="comunaId" class="border p-2 rounded">
              <option disabled value="">Seleccionar Comuna</option>
              <option v-for="c in comunasFiltradas" :key="c.id" :value="c.id">{{ c.nombre }}</option>
            </select>
            <input v-model="titulo" type="text" placeholder="Título" class="border p-2 rounded col-span-3" />
            <textarea v-model="descripcion" placeholder="Descripción" class="border p-2 rounded col-span-3"></textarea>
            <input type="file" multiple @change="manejarArchivos" class="col-span-3" />
          </div>
          <button type="submit" class="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow text-sm">Guardar Vehículo</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, computed, onMounted } from 'vue'
import { vehiculoService } from '@/services/vehiculoService'
import api from '@/axios'
import { notificacionService } from '@/services/notificacionService'

const patente = ref('')
const patenteConfirmada = ref(false)
const archivos = ref([])

const marcaId = ref('')
const modeloId = ref('')
const version = ref('')
const anio = ref('')
const transmisionId = ref('')
const combustibleId = ref('')
const colorExterior = ref('')
const colorInterior = ref('')
const kilometros = ref('')
const precio = ref('')
const regionId = ref('')
const comunaId = ref('')
const titulo = ref('')
const descripcion = ref('')

const marcas = ref([])
const modelos = ref([])
const transmisiones = ref([])
const combustibles = ref([])
const regiones = ref([])
const comunas = ref([])

const comunasFiltradas = computed(() => {
  return comunas.value.filter(c => c.regionId === regionId.value)
})

function confirmarPatente() {
  if (patente.value.trim()) patenteConfirmada.value = true
}
function noVerificar() {
  confirmarPatente()
}
function manejarArchivos(e) {
  archivos.value = Array.from(e.target.files)
}

async function cargarDatos() {
  const [resMarcas, resModelos, resTransmision, resCombustible, resRegion, resComunas] = await Promise.all([
    api.get('/marcas'),
    api.get('/modelos'),
    api.get('/transmisiones'),
    api.get('/combustibles'),
    api.get('/regiones'),
    api.get('/comunas')
  ])
  marcas.value = resMarcas.data
  modelos.value = resModelos.data
  transmisiones.value = resTransmision.data
  combustibles.value = resCombustible.data
  regiones.value = resRegion.data
  comunas.value = resComunas.data
}

onMounted(() => {
  cargarDatos()
})

async function guardarVehiculo() {
  try {
    // Validaciones previas
if (!titulo.value.trim()) {
  notificacionService.warning('⚠️ Debes ingresar un título para el vehículo')
  return
}

if (!marcaId.value || !modeloId.value) {
  notificacionService.warning('⚠️ Selecciona la marca y el modelo')
  return
}

if (!anio.value || anio.value < 1900 || anio.value > new Date().getFullYear() + 1) {
  notificacionService.warning('⚠️ Ingresa un año válido')
  return
}

if (!transmisionId.value) {
  notificacionService.warning('⚠️ Selecciona el tipo de transmisión')
  return
}

if (!combustibleId.value) {
  notificacionService.warning('⚠️ Selecciona el tipo de combustible')
  return
}

if (!colorExterior.value.trim()) {
  notificacionService.warning('⚠️ Ingresa el color exterior')
  return
}

if (!colorInterior.value.trim()) {
  notificacionService.warning('⚠️ Ingresa el color interior')
  return
}

if (!kilometros.value.trim() || isNaN(kilometros.value)) {
  notificacionService.warning('⚠️ Ingresa los kilómetros del vehículo')
  return
}

if (!precio.value || precio.value <= 0) {
  notificacionService.warning('⚠️ Ingresa un precio válido')
  return
}

if (!regionId.value || !comunaId.value) {
  notificacionService.warning('⚠️ Selecciona la región y la comuna')
  return
}


    const formData = new FormData()
    formData.append('patente', patente.value)
    formData.append('marcaId', marcaId.value)
    formData.append('modeloId', modeloId.value)
    formData.append('version', version.value)
    formData.append('anio', anio.value)
    formData.append('transmisionId', transmisionId.value)
    formData.append('combustibleId', combustibleId.value)
    formData.append('colorExterior', colorExterior.value)
    formData.append('colorInterior', colorInterior.value)
    formData.append('kilometros', kilometros.value)
    formData.append('precio', precio.value)
    formData.append('regionId', regionId.value)
    formData.append('comunaId', comunaId.value)
    formData.append('titulo', titulo.value)
    formData.append('descripcion', descripcion.value)

    archivos.value.forEach(file => {
      formData.append('imagenes', file)
    })

    await vehiculoService.crearVehiculo(formData)
    notificacionService.success('✅ Vehículo creado con éxito')
  } catch (error) {
    console.error(error)

    const mensaje = error.response?.data?.message || '❌ Error al crear el vehículo'
    notificacionService.error(mensaje)
  }
}
</script>
