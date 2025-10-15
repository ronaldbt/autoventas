<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
    <div class="text-center">
      <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
        <svg class="w-8 h-8 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
        </svg>
      </div>
      <h2 class="text-xl font-semibold text-slate-800 mb-2">Redirigiendo al Panel...</h2>
      <p class="text-slate-600">Serás redirigido automáticamente</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'admin'
})

// Redirigir automáticamente al dashboard
await navigateTo('/admin/dashboard')
</script>