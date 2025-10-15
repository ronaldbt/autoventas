<template>
  <div class="p-6">
    <!-- Título + Botón -->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
        Panel de Perito - Peritajes Vehiculares Profesionales
      </h1>
      <NuxtLink
        to="/perito/nuevo"
        class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        ➕ Nuevo Peritaje
      </NuxtLink>
    </div>

    <!-- Resumen estadístico -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div class="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p class="text-gray-600 dark:text-gray-300 text-sm">Total de peritajes</p>
        <p class="text-2xl font-bold text-gray-800 dark:text-white">{{ resumen.total }}</p>
      </div>
      <div class="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p class="text-gray-600 dark:text-gray-300 text-sm">Ganancias totales (60%)</p>
        <p class="text-2xl font-bold text-green-600">
          ${{ resumen.ganado.toLocaleString() }}
        </p>
      </div>
    </div>

    <!-- Últimos peritajes -->
    <div>
      <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Últimos peritajes
      </h2>

      <div v-if="ultimos.length === 0" class="text-gray-500">
        Aún no has realizado peritajes.
      </div>

      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <PeritajeCard
          v-for="p in ultimos"
          :key="p.id"
          :peritaje="p"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePeritajeStore } from '../stores/peritajeStore'
import PeritajeCard from '../components/PeritajeCard.vue'
import { usePeritajeSEO } from '~/composables/usePeritajeSEO'

const store = usePeritajeStore()
const resumen = ref({ total: 0, ganado: 0 })
const ultimos = ref([])

// SEO para peritajes
const { generatePeritajeServiceSchema } = usePeritajeSEO()
useSeoMeta({
  title: 'Panel de Perito - Peritajes Vehiculares Profesionales | Autoventas360',
  description: 'Accede a tu panel de perito en Autoventas360. Gestiona peritajes vehiculares, revisa solicitudes y administra tu cartera de clientes como perito certificado.',
  keywords: 'panel perito, peritajes vehiculares, dashboard perito, perito automotriz, gestión peritajes',
  robots: 'noindex, nofollow'
})

// Schema para el servicio (solo si es perito verificado)
const serviceSchema = generatePeritajeServiceSchema()
useSchemaOrg([serviceSchema])

onMounted(async () => {
  const peritajes = await store.fetchMisPeritajes()

  resumen.value.total = peritajes.length
  resumen.value.ganado = peritajes.reduce((sum, p) => sum + (p.comisionPerito || 0), 0)
  ultimos.value = peritajes.slice(0, 6)
})
</script>
