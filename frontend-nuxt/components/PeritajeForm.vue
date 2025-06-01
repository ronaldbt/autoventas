<template>
    <form @submit.prevent="handleSubmit" class="space-y-8 p-6">
      <!-- INFORMACIÓN GENERAL -->
      <h2 class="text-xl font-bold mb-2">Información del Vehículo</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input v-model="form.patente" placeholder="Patente" required class="input" />
        <input v-model="form.marca" placeholder="Marca" class="input" />
        <input v-model="form.modelo" placeholder="Modelo" class="input" />
        <input v-model="form.color" placeholder="Color" class="input" />
        <input v-model="form.propietario" placeholder="Propietario" class="input" />
        <input v-model="form.cliente" placeholder="Cliente" class="input" />
        <input v-model="form.telefono" placeholder="Teléfono" class="input" />
        <input v-model="form.email" placeholder="Email" class="input" />
        <input v-model="form.fecha" type="date" class="input" />
        <input v-model="form.direccion" placeholder="Dirección" class="input" />
        <input v-model="form.numeroMotor" placeholder="Número de Motor" class="input" />
        <input v-model="form.numeroChasis" placeholder="Número de Chasis" class="input" />
        <input v-model="form.numeroSerial" placeholder="Número de Serial" class="input" />
        <input v-model="form.tipoTransporte" placeholder="Tipo de Transporte" class="input" />
        <input v-model="form.valorAvaluo" type="number" placeholder="Valor Avalúo" class="input" />
      </div>
  
      <!-- FRENOS -->
      <h2 class="text-xl font-bold mt-8 mb-2">Frenos</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <input v-model.number="form.frenos_eficacia_delantera" type="number" placeholder="Eficacia Delantera" class="input" />
        <input v-model.number="form.frenos_eficacia_trasera" type="number" placeholder="Eficacia Trasera" class="input" />
        <input v-model.number="form.frenos_diferencia_fuerza_delantera" type="number" placeholder="Dif. Fuerza Delantera" class="input" />
        <input v-model.number="form.frenos_diferencia_fuerza_trasera" type="number" placeholder="Dif. Fuerza Trasera" class="input" />
        <input v-model.number="form.frenos_esfuerzo" type="number" placeholder="Esfuerzo" class="input" />
        <input v-model.number="form.frenos_peso" type="number" placeholder="Peso" class="input" />
        <input v-model.number="form.frenos_total" type="number" placeholder="Total" class="input" />
        <select v-model="form.frenos_estado_general" class="input">
          <option disabled value="">Estado General</option>
          <option>BUENO</option>
          <option>REGULAR</option>
          <option>MALO</option>
        </select>
      </div>
  
      <!-- SUSPENSIÓN -->
      <h2 class="text-xl font-bold mt-8 mb-2">Suspensión</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <input v-model.number="form.suspension_delantera_izquierda" type="number" placeholder="Delantera Izquierda" class="input" />
        <input v-model.number="form.suspension_delantera_derecha" type="number" placeholder="Delantera Derecha" class="input" />
        <input v-model.number="form.suspension_trasera_izquierda" type="number" placeholder="Trasera Izquierda" class="input" />
        <input v-model.number="form.suspension_trasera_derecha" type="number" placeholder="Trasera Derecha" class="input" />
        <input v-model.number="form.suspension_diferencia_delantera" type="number" placeholder="Diferencia Delantera" class="input" />
        <input v-model.number="form.suspension_diferencia_trasera" type="number" placeholder="Diferencia Trasera" class="input" />
        <select v-model="form.suspension_estado_general" class="input">
          <option disabled value="">Estado General</option>
          <option>BUENO</option>
          <option>REGULAR</option>
          <option>MALO</option>
        </select>
      </div>
  
      <!-- CARROCERÍA -->
      <h2 class="text-xl font-bold mt-8 mb-2">Carrocería</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(value, key) in form.carroceria" :key="key">
          <label class="block text-sm font-semibold capitalize">{{ key.replaceAll('_', ' ') }}</label>
          <select v-model="form.carroceria[key]" class="input">
            <option>TIENE</option>
            <option>NO TIENE</option>
            <option>GOLPE LEVE</option>
            <option>SUMIDO</option>
            <option>BUENO</option>
          </select>
        </div>
      </div>
  
      <!-- CHASIS -->
      <h2 class="text-xl font-bold mt-8 mb-2">Chasis</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(value, key) in form.chasis" :key="key">
          <label class="block text-sm font-semibold capitalize">{{ key.replaceAll('_', ' ') }}</label>
          <select v-model="form.chasis[key]" class="input">
            <option>BUENO</option>
            <option>GOLPEADO</option>
            <option>DEFORMADO</option>
            <option>ALTERADO</option>
          </select>
        </div>
      </div>
  
      <!-- LLANTAS -->
      <h2 class="text-xl font-bold mt-8 mb-2">Llantas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(llanta, key) in form.llantas" :key="key" class="border p-4 rounded">
          <h3 class="font-semibold mb-2 capitalize">{{ key.replace('_', ' ') }}</h3>
          <input v-model="form.llantas[key].marca" placeholder="Marca" class="input mb-2" />
          <input v-model="form.llantas[key].medida" placeholder="Medida" class="input mb-2" />
          <input v-model.number="form.llantas[key].profundidad" type="number" placeholder="Profundidad (mm)" class="input" />
        </div>
      </div>
  
      <!-- OBSERVACIONES -->
      <div>
        <h2 class="text-xl font-bold mt-8 mb-2">Observaciones Generales</h2>
        <textarea v-model="form.observaciones_generales" rows="4" class="input w-full"></textarea>
      </div>
  
      <!-- PRECIO -->
      <div class="mt-6">
        <input v-model.number="form.precio" type="number" placeholder="Precio del peritaje" class="input" />
      </div>
  
      <div class="mt-6">
        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Guardar Peritaje
        </button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  const emit = defineEmits(['submit'])
  
  const form = reactive({
    patente: '', marca: '', modelo: '', color: '', propietario: '', cliente: '', telefono: '',
    direccion: '', email: '', fecha: '', numeroMotor: '', numeroChasis: '', numeroSerial: '',
    tipoTransporte: '', valorAvaluo: '',
  
    frenos_eficacia_delantera: '', frenos_eficacia_trasera: '', frenos_diferencia_fuerza_delantera: '',
    frenos_diferencia_fuerza_trasera: '', frenos_esfuerzo: '', frenos_peso: '', frenos_total: '', frenos_estado_general: '',
  
    suspension_delantera_izquierda: '', suspension_delantera_derecha: '', suspension_trasera_izquierda: '',
    suspension_trasera_derecha: '', suspension_diferencia_delantera: '', suspension_diferencia_trasera: '', suspension_estado_general: '',
  
    carroceria: {
      antena: '', retrovisor_derecho: '', retrovisor_izquierdo: '', guarda_fango_derecho: '', guarda_fango_izquierdo: '',
      puerta_delantera_derecha: '', puerta_delantera_izquierda: '', puerta_trasera_derecha: '', puerta_trasera_izquierda: '',
      capo: '', techo: '', baul: '', parachoques_delantero: '', parachoques_trasero: '', faros_delanteros: '',
      luces_traseras: '', vidrio_panoramico_delantero: '', vidrio_panoramico_trasero: '',
      vidrio_puerta_delantera_derecha: '', vidrio_puerta_delantera_izquierda: '',
      vidrio_puerta_trasera_derecha: '', vidrio_puerta_trasera_izquierda: '',
      vidrios_laterales: '', tercer_stop: ''
    },
  
    chasis: {
      estribo_derecho: '', estribo_izquierdo: '', pisos_carroceria: '', puntal_derecho: '', puntal_izquierdo: '',
      base_tijera_derecha: '', base_tijera_izquierda: '', piso_baul: '', panel_trasero: '',
      soportes_parachoques_delantero: '', soportes_parachoques_trasero: '', marcos_puertas_delanteras: '',
      marcos_puertas_traseras: '', torre_suspension_delantera_derecha: '', torre_suspension_delantera_izquierda: '',
      largueros_delanteros: '', largueros_traseros: '', marco_panoramico_delantero: '', marco_panoramico_trasero: ''
    },
  
    llantas: {
      delantera_derecha: { marca: '', medida: '', profundidad: '' },
      delantera_izquierda: { marca: '', medida: '', profundidad: '' },
      trasera_derecha: { marca: '', medida: '', profundidad: '' },
      trasera_izquierda: { marca: '', medida: '', profundidad: '' }
    },
  
    observaciones_generales: '',
    precio: ''
  })
  
  function handleSubmit() {
    emit('submit', { ...form })
  }
  </script>
  