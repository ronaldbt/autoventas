<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 to-indigo-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Precios Peritaje Vehicular 2024
          </h1>
          <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Tarifas transparentes y competitivas. Sin sorpresas, sin costos ocultos.
          </p>
        </div>
    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />
    
      </div>
    </section>

    <!-- Calculadora de Precios -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-8">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">Calculadora de Precios</h2>
            <p class="text-gray-600">Obtén una cotización instantánea para tu peritaje</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Formulario -->
            <div class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Vehículo</label>
                <select v-model="calculadora.tipoVehiculo" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Selecciona el tipo</option>
                  <option value="auto">Automóvil</option>
                  <option value="suv">SUV/Camioneta</option>
                  <option value="comercial">Vehículo Comercial</option>
                  <option value="moto">Motocicleta</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Tipo de Peritaje</label>
                <select v-model="calculadora.tipoPeritaje" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Selecciona el tipo</option>
                  <option value="seguros">Para Seguros</option>
                  <option value="compraventa">Compra-Venta</option>
                  <option value="judicial">Judicial</option>
                  <option value="tasacion">Tasación</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Ciudad</label>
                <select v-model="calculadora.ciudad" class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Selecciona la ciudad</option>
                  <option value="santiago">Santiago</option>
                  <option value="valparaiso">Valparaíso</option>
                  <option value="concepcion">Concepción</option>
                  <option value="otras">Otras ciudades</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Servicio</label>
                <div class="space-y-3">
                  <label class="flex items-center">
                    <input v-model="calculadora.servicio" type="radio" value="sucursal" class="text-blue-600">
                    <span class="ml-3">En Sucursal (Sin costo adicional)</span>
                  </label>
                  <label class="flex items-center">
                    <input v-model="calculadora.servicio" type="radio" value="domicilio" class="text-blue-600">
                    <span class="ml-3">A Domicilio (+$15.000)</span>
                  </label>
                </div>
              </div>

              <button 
                @click="calcularPrecio"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Calcular Precio
              </button>
            </div>

            <!-- Resultado -->
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">Cotización</h3>
              
              <div v-if="!cotizacion.calculado" class="text-center py-8">
                <svg class="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
                <p class="text-gray-500">Completa el formulario para ver tu cotización</p>
              </div>

              <div v-else class="space-y-4">
                <div class="flex justify-between items-center py-2 border-b border-gray-200">
                  <span class="text-gray-600">Peritaje base:</span>
                  <span class="font-semibold">${{ cotizacion.base.toLocaleString() }}</span>
                </div>
                <div v-if="cotizacion.adicionales.domicilio > 0" class="flex justify-between items-center py-2 border-b border-gray-200">
                  <span class="text-gray-600">Servicio a domicilio:</span>
                  <span class="font-semibold">${{ cotizacion.adicionales.domicilio.toLocaleString() }}</span>
                </div>
                <div v-if="cotizacion.adicionales.ciudad > 0" class="flex justify-between items-center py-2 border-b border-gray-200">
                  <span class="text-gray-600">Traslado otras ciudades:</span>
                  <span class="font-semibold">${{ cotizacion.adicionales.ciudad.toLocaleString() }}</span>
                </div>
                <div class="flex justify-between items-center py-3 border-t-2 border-blue-200">
                  <span class="text-xl font-bold text-gray-900">Total:</span>
                  <span class="text-2xl font-bold text-blue-600">${{ cotizacion.total.toLocaleString() }}</span>
                </div>
                
                <div class="mt-6 space-y-3">
                  <NuxtLink 
                    to="/peritajes/solicitar"
                    class="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors block text-center"
                  >
                    Solicitar Peritaje
                  </NuxtLink>
                  <p class="text-xs text-gray-500 text-center">
                    * Precios incluyen IVA. Válidos por 30 días.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tarifas por Tipo -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Tarifas por Tipo de Peritaje</h2>
          <p class="text-gray-600">Precios competitivos según tus necesidades específicas</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-center">
              <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Para Seguros</h3>
              <div class="text-3xl font-bold text-red-600 mb-4">$65.000</div>
              <ul class="text-sm text-gray-600 space-y-2 text-left">
                <li>✓ Evaluación completa</li>
                <li>✓ Informe oficial</li>
                <li>✓ Reconocido por aseguradoras</li>
                <li>✓ Entrega 24 horas</li>
              </ul>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-center">
              <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0 0v2a2 2 0 002 2h2a2 2 0 002-2v-2m0 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3a2 2 0 00-2-2H9a2 2 0 00-2 2v2"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Compra-Venta</h3>
              <div class="text-3xl font-bold text-green-600 mb-4">$80.000</div>
              <ul class="text-sm text-gray-600 space-y-2 text-left">
                <li>✓ Inspección pre-compra</li>
                <li>✓ Evaluación de mercado</li>
                <li>✓ Verificación documentos</li>
                <li>✓ Recomendaciones</li>
              </ul>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Judicial</h3>
              <div class="text-3xl font-bold text-purple-600 mb-4">$120.000</div>
              <ul class="text-sm text-gray-600 space-y-2 text-left">
                <li>✓ Validez legal</li>
                <li>✓ Perito certificado</li>
                <li>✓ Informe pericial</li>
                <li>✓ Testimonio en tribunal</li>
              </ul>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Tasación</h3>
              <div class="text-3xl font-bold text-blue-600 mb-4">$90.000</div>
              <ul class="text-sm text-gray-600 space-y-2 text-left">
                <li>✓ Valor comercial real</li>
                <li>✓ Análisis de mercado</li>
                <li>✓ Informe detallado</li>
                <li>✓ Validez bancaria</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparación con Competencia -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">¿Por Qué Elegir Autoventas360?</h2>
          <p class="text-gray-600">Comparación con la competencia</p>
        </div>

        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <tr>
                  <th class="px-6 py-4 text-left">Característica</th>
                  <th class="px-6 py-4 text-center">Autoventas360</th>
                  <th class="px-6 py-4 text-center">Competencia A</th>
                  <th class="px-6 py-4 text-center">Competencia B</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-4 font-medium">Precio Peritaje Seguros</td>
                  <td class="px-6 py-4 text-center font-bold text-green-600">$65.000</td>
                  <td class="px-6 py-4 text-center text-gray-600">$75.000</td>
                  <td class="px-6 py-4 text-center text-gray-600">$80.000</td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 font-medium">Tiempo de Entrega</td>
                  <td class="px-6 py-4 text-center font-bold text-green-600">24 horas</td>
                  <td class="px-6 py-4 text-center text-gray-600">48-72 horas</td>
                  <td class="px-6 py-4 text-center text-gray-600">3-5 días</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium">Servicio a Domicilio</td>
                  <td class="px-6 py-4 text-center"><span class="text-green-600 font-bold">✓ Disponible</span></td>
                  <td class="px-6 py-4 text-center text-gray-400">✗ No disponible</td>
                  <td class="px-6 py-4 text-center"><span class="text-orange-600">✓ Costo extra alto</span></td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-6 py-4 font-medium">Cobertura Nacional</td>
                  <td class="px-6 py-4 text-center font-bold text-green-600">15 ciudades</td>
                  <td class="px-6 py-4 text-center text-gray-600">5 ciudades</td>
                  <td class="px-6 py-4 text-center text-gray-600">Solo Santiago</td>
                </tr>
                <tr>
                  <td class="px-6 py-4 font-medium">Plataforma Digital</td>
                  <td class="px-6 py-4 text-center"><span class="text-green-600 font-bold">✓ Completa</span></td>
                  <td class="px-6 py-4 text-center text-gray-400">✗ Básica</td>
                  <td class="px-6 py-4 text-center text-gray-400">✗ No disponible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Precios -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Preguntas sobre Precios</h2>
        </div>

        <div class="space-y-6">
          <div 
            v-for="(faq, index) in faqPrecios" 
            :key="index"
            class="bg-gray-50 rounded-xl overflow-hidden"
          >
            <button 
              @click="toggleFAQ(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
            >
              <h3 class="text-lg font-semibold text-gray-900">{{ faq.pregunta }}</h3>
              <svg 
                :class="[
                  'w-6 h-6 text-gray-500 transition-transform duration-200',
                  faqAbierto === index ? 'rotate-180' : ''
                ]" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div 
              v-show="faqAbierto === index"
              class="px-6 pb-4"
            >
              <p class="text-gray-600">{{ faq.respuesta }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// SEO
const { generatePeritajeMeta, generateTipoPeritajeSchema, generatePeritajeFAQSchema } = usePeritajeSEO()

useHead(generatePeritajeMeta('precios'))

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generatePeritajeFAQSchema('precios'))
    }
  ]
})

// State
const faqAbierto = ref(null)
const calculadora = ref({
  tipoVehiculo: '',
  tipoPeritaje: '',
  ciudad: '',
  servicio: 'sucursal'
})

const cotizacion = ref({
  calculado: false,
  base: 0,
  adicionales: {
    domicilio: 0,
    ciudad: 0
  },
  total: 0
})

const faqPrecios = [
  {
    pregunta: '¿Los precios incluyen IVA?',
    respuesta: 'Sí, todos nuestros precios incluyen IVA. No hay costos adicionales ocultos.'
  },
  {
    pregunta: '¿Ofrecen descuentos por volumen?',
    respuesta: 'Sí, para automotoras y empresas que requieren múltiples peritajes, ofrecemos descuentos especiales. Contáctanos para una cotización personalizada.'
  },
  {
    pregunta: '¿Cuál es la validez de la cotización?',
    respuesta: 'Nuestras cotizaciones tienen validez de 30 días. Después de este período, los precios pueden estar sujetos a cambios.'
  },
  {
    pregunta: '¿Aceptan pagos con tarjeta?',
    respuesta: 'Sí, aceptamos efectivo, transferencia bancaria, tarjetas de débito y crédito. También ofrecemos facilidades de pago.'
  },
  {
    pregunta: '¿Cobran por cancelación?',
    respuesta: 'No cobramos por cancelaciones realizadas con al menos 24 horas de anticipación. Para cancelaciones el mismo día, se aplica un cargo del 30%.'
  }
]

// Methods
const calcularPrecio = () => {
  if (!calculadora.value.tipoVehiculo || !calculadora.value.tipoPeritaje || !calculadora.value.ciudad) {
    alert('Por favor completa todos los campos')
    return
  }

  // Precios base según tipo de peritaje
  const preciosBase = {
    seguros: 65000,
    compraventa: 80000,
    judicial: 120000,
    tasacion: 90000
  }

  // Multiplicadores por tipo de vehículo
  const multiplicadores = {
    auto: 1,
    suv: 1.2,
    comercial: 1.5,
    moto: 0.8
  }

  const base = preciosBase[calculadora.value.tipoPeritaje] * multiplicadores[calculadora.value.tipoVehiculo]
  
  let adicionales = {
    domicilio: calculadora.value.servicio === 'domicilio' ? 15000 : 0,
    ciudad: calculadora.value.ciudad === 'otras' ? 25000 : 0
  }

  cotizacion.value = {
    calculado: true,
    base: Math.round(base),
    adicionales,
    total: Math.round(base + adicionales.domicilio + adicionales.ciudad)
  }
}

const toggleFAQ = (index) => {
  faqAbierto.value = faqAbierto.value === index ? null : index
}
</script>