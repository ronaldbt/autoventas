<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div class="mb-6 md:mb-8">
        <h1 class="text-2xl md:text-3xl font-bold tracking-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600">Agregar vehículo</span>
        </h1>
        <p class="mt-2 text-sm text-slate-300">Completa los datos para publicar tu vehículo en minutos.</p>
      </div>

      <!-- Paso 1: Patente -->
      <div v-if="!patenteConfirmada" class="bg-white text-slate-900 rounded-xl shadow-sm ring-1 ring-slate-200 p-6 md:p-8 max-w-3xl">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-lg font-semibold">Verificación rápida de patente</h2>
          <span class="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700">Paso 1 de 2</span>
        </div>
        <label class="block text-sm font-medium text-slate-700 mb-1">Patente</label>
        <input v-model="patente" type="text" class="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" placeholder="Ej: RT4412" />
        <p class="text-xs text-slate-500 mt-2">Esta información no se mostrará en la publicación.</p>
        <div class="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <button @click="noVerificar" type="button" class="inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 transition">
            Continuar sin verificar
          </button>
          <button @click="confirmarPatente" type="button" class="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-sm transition">
            Verificar patente
          </button>
        </div>
      </div>

      <!-- Paso 2: Formulario de vehículo -->
      <div v-else class="bg-white text-slate-900 rounded-xl shadow-sm ring-1 ring-slate-200 p-6 md:p-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-bold">Información del vehículo</h2>
          <span class="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-700">Paso 2 de 2</span>
        </div>
        <form @submit.prevent="guardarVehiculo" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Patente</label>
              <input type="text" class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-900" :value="patente" disabled />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Marca</label>
              <select v-model="marcaId" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option disabled value="">Seleccionar Marca</option>
                <option v-for="m in marcas" :key="m.id" :value="m.id">{{ m.nombre }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Modelo</label>
              <input v-model="modeloTexto" type="text" placeholder="Ej: 405" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
              <p class="mt-1 text-xs text-slate-500">Por ahora puedes escribir el modelo manualmente.</p>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Versión</label>
              <input v-model="version" type="text" placeholder="Ej: 2.0 TSI DSG" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Año</label>
              <input v-model="anio" type="number" placeholder="Ej: 2021" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Transmisión</label>
              <select v-model="transmisionId" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option disabled value="">Transmisión</option>
                <option v-for="t in transmisiones" :key="t.id" :value="t.id">{{ t.nombre }}</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Combustible</label>
              <select v-model="combustibleId" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option disabled value="">Combustible</option>
                <option v-for="c in combustibles" :key="c.id" :value="c.id">{{ c.nombre }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Color exterior</label>
              <input v-model="colorExterior" type="text" placeholder="Ej: Gris Oscuro" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Color interior</label>
              <input v-model="colorInterior" type="text" placeholder="Ej: Negro" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
            </div>

            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Kilómetros</label>
              <input v-model="kilometros" type="text" placeholder="Ej: 45.000" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Precio</label>
              <input v-model="precio" type="number" placeholder="Ej: 15990000" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Región</label>
              <select v-model="regionId" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option disabled value="">Seleccionar Región</option>
                <option v-for="r in regiones" :key="r.id" :value="r.id">{{ r.nombre }}</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Comuna</label>
              <input v-model="comunaTexto" type="text" placeholder="Ej: Providencia" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
              <p class="mt-1 text-xs text-slate-500">Puedes escribir la comuna manualmente.</p>
            </div>

            <div class="md:col-span-3">
              <label class="block text-sm font-medium text-slate-700 mb-1">Título</label>
              <input v-model="titulo" type="text" placeholder="Ej: Golf GTI 2.0 TSI 2021 - Único dueño" class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500" />
            </div>
            <div class="md:col-span-3">
              <label class="block text-sm font-medium text-slate-700 mb-1">Descripción</label>
              <textarea v-model="descripcion" rows="4" placeholder="Agrega detalles relevantes del estado, mantenciones, extras, etc." class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"></textarea>
            </div>

            <div class="md:col-span-3">
              <label class="block text-sm font-medium text-slate-700 mb-2">Imágenes</label>
              <input type="file" multiple @change="manejarArchivos" class="block w-full text-sm text-slate-600 file:mr-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-orange-500 file:to-orange-600 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:from-orange-600 hover:file:to-orange-700" />
              <p class="text-xs text-slate-500 mt-2">Sugerencia: sube al menos 5 fotos en buena iluminación.</p>
            </div>
          </div>

          <div class="flex justify-end">
            <button type="submit" class="inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-sm transition">
              Guardar vehículo
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, computed, onMounted } from 'vue'
import { useNuxtApp } from '#app'
import { vehiculoService } from '~/services/vehiculoService'
import { catalogoService } from '~/services/catalogoService'
import { notificacionService } from '~/services/notificacionService'

// Datos del formulario
const patente = ref('')
const patenteConfirmada = ref(false)
const archivos = ref([])

const marcaId = ref('')
const modeloId = ref('')
const modeloTexto = ref('')
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
const comunaTexto = ref('')
const titulo = ref('')
const descripcion = ref('')

// Catálogos
const marcas = ref([])
const modelos = ref([])
const transmisiones = ref([])
const combustibles = ref([])
const regiones = ref([])
const comunas = ref([])

const comunasFiltradas = computed(() =>
  comunas.value.filter(c => c.regionId === regionId.value)
)

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
  marcas.value = await catalogoService.getMarcas()
  modelos.value = await catalogoService.getModelos() // si aún no está en el service, consérvalo como llamada directa
  transmisiones.value = await catalogoService.getTransmisiones()
  combustibles.value = await catalogoService.getCombustibles()
  regiones.value = await catalogoService.getRegiones()
  comunas.value = await catalogoService.getComunas()
}

onMounted(cargarDatos)

async function guardarVehiculo() {
  try {
    if (!titulo.value.trim()) return notificacionService.warning('⚠️ Debes ingresar un título para el vehículo')
    if (!marcaId.value) return notificacionService.warning('⚠️ Selecciona la marca')
    if (!anio.value || anio.value < 1900 || anio.value > new Date().getFullYear() + 1) return notificacionService.warning('⚠️ Ingresa un año válido')
    if (!transmisionId.value) return notificacionService.warning('⚠️ Selecciona el tipo de transmisión')
    if (!combustibleId.value) return notificacionService.warning('⚠️ Selecciona el tipo de combustible')
    if (!colorExterior.value.trim() || !colorInterior.value.trim()) return notificacionService.warning('⚠️ Ingresa colores')
    if (!kilometros.value.trim() || isNaN(kilometros.value)) return notificacionService.warning('⚠️ Ingresa kilómetros válidos')
    if (!precio.value || precio.value <= 0) return notificacionService.warning('⚠️ Ingresa un precio válido')
    if (!regionId.value || (!comunaId.value && !comunaTexto.value)) return notificacionService.warning('⚠️ Selecciona región e ingresa comuna')

    const formData = new FormData()
    formData.append('patente', patente.value)
    formData.append('marcaId', marcaId.value)
    if (modeloId.value) formData.append('modeloId', modeloId.value)
    if (modeloTexto.value) formData.append('modeloNombre', modeloTexto.value)
    formData.append('version', version.value)
    formData.append('anio', anio.value)
    formData.append('transmisionId', transmisionId.value)
    formData.append('combustibleId', combustibleId.value)
    formData.append('colorExterior', colorExterior.value)
    formData.append('colorInterior', colorInterior.value)
    formData.append('kilometros', kilometros.value)
    formData.append('precio', precio.value)
    formData.append('regionId', regionId.value)
    if (comunaId.value) formData.append('comunaId', comunaId.value)
    if (comunaTexto.value) formData.append('comunaNombre', comunaTexto.value)
    formData.append('titulo', titulo.value)
    formData.append('descripcion', descripcion.value)
    archivos.value.forEach(file => formData.append('imagenes', file))

    console.log('📦 Enviando datos del vehículo:', Object.fromEntries(formData.entries()))
    const respuesta = await vehiculoService.crearVehiculo(formData)
    console.log('✅ Vehículo creado con éxito:', respuesta)

    notificacionService.success('✅ Vehículo creado con éxito')
  } catch (error) {
    console.error('❌ Error al crear vehículo (agregar.vue):', error)
    const mensaje = error?.response?.data?.message || '❌ Error al crear el vehículo'
    notificacionService.error(mensaje)
  }
}
</script>
