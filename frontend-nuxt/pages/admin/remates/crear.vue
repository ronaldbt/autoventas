<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Crear Nuevo Remate</h1>
            <p class="text-slate-600 text-lg">Configure todos los detalles del remate</p>
          </div>
          <NuxtLink
            to="/admin/remates"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Volver al Panel
          </NuxtLink>
        </div>
      </div>

      <!-- Formulario -->
      <form @submit.prevent="guardarRemate" class="space-y-8">
        <!-- Información General -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-slate-800 mb-6">Información General</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-slate-700 mb-2">Título del Remate *</label>
              <input
                v-model="remate.titulo"
                type="text"
                required
                maxlength="200"
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ej: Remate Toyota Corolla 2019 - Único Dueño"
              />
            </div>
            
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-slate-700 mb-2">Descripción</label>
              <textarea
                v-model="remate.descripcion"
                rows="4"
                maxlength="1000"
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Describe las características destacadas del vehículo y condiciones del remate..."
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Selección de Vehículo -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-slate-800 mb-6">Vehículo a Rematar</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Buscar Vehículo</label>
              <div class="relative">
                <input
                  v-model="busquedaVehiculo"
                  @input="buscarVehiculos"
                  type="text"
                  class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Busca por patente, marca, modelo..."
                />
                
                <!-- Lista de vehículos encontrados -->
                <div v-if="vehiculosEncontrados.length > 0" class="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                  <div
                    v-for="vehiculo in vehiculosEncontrados"
                    :key="vehiculo.id"
                    @click="seleccionarVehiculo(vehiculo)"
                    class="p-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-b-0"
                  >
                    <div class="font-medium text-slate-800">{{ vehiculo.marca }} {{ vehiculo.modelo }} {{ vehiculo.ano }}</div>
                    <div class="text-sm text-slate-500">{{ vehiculo.patente }} • {{ vehiculo.kilometraje?.toLocaleString() }} km</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Vehículo Seleccionado -->
            <div v-if="vehiculoSeleccionado" class="bg-blue-50 rounded-xl p-4">
              <h3 class="font-semibold text-slate-800 mb-2">Vehículo Seleccionado</h3>
              <div class="text-sm space-y-1">
                <div><strong>Marca/Modelo:</strong> {{ vehiculoSeleccionado.marca }} {{ vehiculoSeleccionado.modelo }}</div>
                <div><strong>Año:</strong> {{ vehiculoSeleccionado.ano }}</div>
                <div><strong>Patente:</strong> {{ vehiculoSeleccionado.patente }}</div>
                <div><strong>Kilometraje:</strong> {{ vehiculoSeleccionado.kilometraje?.toLocaleString() }} km</div>
                <div><strong>Propietario:</strong> {{ vehiculoSeleccionado.usuario?.nombre }}</div>
              </div>
              <button
                type="button"
                @click="limpiarVehiculo"
                class="mt-3 text-sm text-red-600 hover:text-red-700"
              >
                Cambiar vehículo
              </button>
            </div>
          </div>
        </div>

        <!-- Configuración del Remate -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-slate-800 mb-6">Configuración del Remate</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Fecha de Inicio *</label>
              <input
                v-model="remate.fechaInicio"
                type="date"
                required
                :min="fechaMinima"
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Hora de Inicio *</label>
              <input
                v-model="remate.horaInicio"
                type="time"
                required
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Duración (minutos)</label>
              <input
                v-model="remate.duracionMinutos"
                type="number"
                min="15"
                max="180"
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="30"
              />
            </div>
          </div>
        </div>

        <!-- Configuración de Precios -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-slate-800 mb-6">Configuración de Precios</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Precio Base *</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">$</span>
                <input
                  v-model="remate.precioBase"
                  type="number"
                  required
                  min="100000"
                  step="50000"
                  class="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="5000000"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Precio de Reserva</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">$</span>
                <input
                  v-model="remate.precioReserva"
                  type="number"
                  min="100000"
                  step="50000"
                  class="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="6000000"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Incremento Mínimo</label>
              <div class="relative">
                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500">$</span>
                <input
                  v-model="remate.incrementoMinimo"
                  type="number"
                  min="10000"
                  step="10000"
                  class="w-full pl-8 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="50000"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Configuración Adicional -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-slate-800 mb-6">Configuración Adicional</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <label class="flex items-center">
                <input
                  v-model="remate.requiereInscripcion"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <span class="ml-2 text-sm font-medium text-slate-700">Requiere inscripción previa</span>
              </label>
              
              <label class="flex items-center">
                <input
                  v-model="remate.requiereVerificacion"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <span class="ml-2 text-sm font-medium text-slate-700">Requiere verificación de participantes</span>
              </label>
              
              <label class="flex items-center">
                <input
                  v-model="remate.esDestacado"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <span class="ml-2 text-sm font-medium text-slate-700">Destacar en portada</span>
              </label>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Comisión (%)</label>
              <input
                v-model="remate.comisionPorcentaje"
                type="number"
                min="0"
                max="20"
                step="0.5"
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="5.0"
              />
            </div>
          </div>
        </div>

        <!-- Observaciones -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-slate-800 mb-6">Observaciones y Condiciones</h2>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Observaciones Generales</label>
              <textarea
                v-model="remate.observaciones"
                rows="3"
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Observaciones internas para el equipo..."
              ></textarea>
            </div>
            
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Condiciones Especiales</label>
              <textarea
                v-model="remate.condicionesEspeciales"
                rows="3"
                class="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Condiciones especiales que verán los participantes..."
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Botones de Acción -->
        <div class="flex items-center justify-center space-x-4 pb-8">
          <button
            type="button"
            @click="$router.go(-1)"
            class="px-6 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors"
          >
            Cancelar
          </button>
          
          <button
            type="submit"
            :disabled="guardando || !validarFormulario"
            class="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <svg v-if="guardando" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ guardando ? 'Guardando...' : 'Crear Remate' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'

// Meta
definePageMeta({
  middleware: 'auth',
  layout: 'default'
})

useHead({
  title: 'Crear Remate - Administrador | Autoventas360'
})

// Stores
const remateStore = useRemateStore()

// Estado
const guardando = ref(false)
const busquedaVehiculo = ref('')
const vehiculosEncontrados = ref([])
const vehiculoSeleccionado = ref(null)

const remate = reactive({
  titulo: '',
  descripcion: '',
  vehiculoId: null,
  fechaInicio: '',
  horaInicio: '',
  duracionMinutos: 30,
  precioBase: '',
  precioReserva: '',
  incrementoMinimo: 50000,
  requiereInscripcion: true,
  requiereVerificacion: true,
  esDestacado: false,
  comisionPorcentaje: 5.0,
  observaciones: '',
  condicionesEspeciales: ''
})

// Computed
const fechaMinima = computed(() => {
  const hoy = new Date()
  const manana = new Date(hoy.getTime() + 24 * 60 * 60 * 1000)
  return manana.toISOString().split('T')[0]
})

const validarFormulario = computed(() => {
  return remate.titulo && 
         remate.fechaInicio && 
         remate.horaInicio && 
         remate.precioBase && 
         vehiculoSeleccionado.value
})

// Funciones
const buscarVehiculos = async () => {
  if (!busquedaVehiculo.value || busquedaVehiculo.value.length < 2) {
    vehiculosEncontrados.value = []
    return
  }
  
  try {
    // TODO: Implementar búsqueda real
    console.log('Buscando vehículos:', busquedaVehiculo.value)
    
    // Mock data por ahora
    vehiculosEncontrados.value = [
      {
        id: 1,
        marca: 'Toyota',
        modelo: 'Corolla',
        ano: 2019,
        patente: 'ABC123',
        kilometraje: 45000,
        usuario: { nombre: 'Juan Pérez' }
      },
      {
        id: 2,
        marca: 'Honda',
        modelo: 'Civic',
        ano: 2020,
        patente: 'XYZ789',
        kilometraje: 32000,
        usuario: { nombre: 'María González' }
      }
    ].filter(v => 
      v.marca.toLowerCase().includes(busquedaVehiculo.value.toLowerCase()) ||
      v.modelo.toLowerCase().includes(busquedaVehiculo.value.toLowerCase()) ||
      v.patente.toLowerCase().includes(busquedaVehiculo.value.toLowerCase())
    )
  } catch (error) {
    console.error('Error buscando vehículos:', error)
    vehiculosEncontrados.value = []
  }
}

const seleccionarVehiculo = (vehiculo) => {
  vehiculoSeleccionado.value = vehiculo
  remate.vehiculoId = vehiculo.id
  remate.vendedorId = vehiculo.usuarioId
  busquedaVehiculo.value = `${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.ano}`
  vehiculosEncontrados.value = []
  
  // Auto-completar título si está vacío
  if (!remate.titulo) {
    remate.titulo = `Remate ${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.ano} - ${vehiculo.patente}`
  }
}

const limpiarVehiculo = () => {
  vehiculoSeleccionado.value = null
  remate.vehiculoId = null
  remate.vendedorId = null
  busquedaVehiculo.value = ''
  vehiculosEncontrados.value = []
}

const guardarRemate = async () => {
  try {
    guardando.value = true
    
    // Combinar fecha y hora
    const fechaHoraInicio = new Date(`${remate.fechaInicio}T${remate.horaInicio}:00`)
    
    const nuevoRemate = {
      titulo: remate.titulo,
      descripcion: remate.descripcion,
      vehiculoId: remate.vehiculoId,
      vendedorId: vehiculoSeleccionado.value.usuario?.id || vehiculoSeleccionado.value.usuarioId,
      fechaHoraInicio: fechaHoraInicio.toISOString(),
      duracionMinutos: parseInt(remate.duracionMinutos),
      precioBase: parseFloat(remate.precioBase),
      precioReserva: remate.precioReserva ? parseFloat(remate.precioReserva) : null,
      incrementoMinimo: parseFloat(remate.incrementoMinimo),
      requiereInscripcion: remate.requiereInscripcion,
      requiereVerificacion: remate.requiereVerificacion,
      esDestacado: remate.esDestacado,
      comisionPorcentaje: parseFloat(remate.comisionPorcentaje),
      observaciones: remate.observaciones,
      condicionesEspeciales: remate.condicionesEspeciales
    }
    
    await remateStore.crearRemate(nuevoRemate)
    
    alert('Remate creado exitosamente')
    await navigateTo('/admin/remates')
    
  } catch (error) {
    console.error('Error creando remate:', error)
    alert('Error al crear el remate')
  } finally {
    guardando.value = false
  }
}

onMounted(() => {
  // Inicializar valores por defecto
  const hoy = new Date()
  const manana = new Date(hoy.getTime() + 24 * 60 * 60 * 1000)
  remate.fechaInicio = manana.toISOString().split('T')[0]
  remate.horaInicio = '15:00'
})
</script>