<template>
    <div class="p-6 max-w-xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">Mi perfil</h1>
  
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium">Nombre</label>
          <input v-model="usuario.nombre" class="input" />
        </div>
  
        <div>
          <label class="block text-sm font-medium">Email</label>
          <input v-model="usuario.email" class="input" disabled />
        </div>
  
        <button class="btn btn-primary mt-4" @click="guardar">Guardar cambios</button>
      </div>
    </div>
  </template>
  
  <script setup>
  const { $api } = useNuxtApp()
  const { data: usuario } = await useAsyncData('usuario', () =>
    $api.get('/usuarios/me').then(res => res.data)
  )
  
  const guardar = async () => {
    await $api.put('/usuarios/me', usuario.value)
    alert('Cambios guardados')
  }
  </script>
  