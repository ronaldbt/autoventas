<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-2xl shadow-lg p-8">
        <div class="text-center py-12">
          <h1 class="text-3xl font-bold text-slate-800 mb-4">Servicios de Peritaje Automotriz</h1>
          <p class="text-slate-600 mb-8">Peritajes profesionales para vehículos usados en Chile</p>
          
          <!-- Servicios principales -->
          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="bg-slate-50 rounded-xl p-6 text-left">
              <h2 class="text-xl font-semibold text-slate-800 mb-3">Peritaje de Compra</h2>
              <p class="text-slate-600 mb-4">Evaluación técnica completa antes de comprar un vehículo usado</p>
              <ul class="text-sm text-slate-500 space-y-1">
                <li>• Inspección mecánica detallada</li>
                <li>• Revisión de documentación</li>
                <li>• Evaluación de valor de mercado</li>
                <li>• Informe técnico completo</li>
              </ul>
            </div>
            
            <div class="bg-slate-50 rounded-xl p-6 text-left">
              <h2 class="text-xl font-semibold text-slate-800 mb-3">Peritaje de Venta</h2>
              <p class="text-slate-600 mb-4">Certificación profesional para maximizar el valor de venta</p>
              <ul class="text-sm text-slate-500 space-y-1">
                <li>• Certificado de estado técnico</li>
                <li>• Tasación profesional</li>
                <li>• Informe fotográfico</li>
                <li>• Garantía de transparencia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { generatePeritajeMeta, generatePeritajeSchema, generatePeritajeFAQSchema } = usePeritajeSEO()

// SEO optimization para servicios de peritaje
useHead(generatePeritajeMeta('servicios', 'general'))

// Structured Data para servicios
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generatePeritajeSchema('general'))
    },
    {
      type: 'application/ld+json', 
      innerHTML: JSON.stringify(generatePeritajeFAQSchema('servicios'))
    }
  ]
})
</script>

















