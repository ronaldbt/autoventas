<template>
    <div class="p-6 max-w-xl mx-auto">
      <h1 class="text-2xl font-bold mb-4">Editar mi automotora</h1>
  
      <form @submit.prevent="guardarCambios">
        <label class="block mb-2 font-semibold">Nombre</label>
        <input v-model="automotora.nombre" class="w-full border rounded p-2 mb-4" />
  
        <label class="block mb-2 font-semibold">Dirección</label>
        <input v-model="automotora.direccion" class="w-full border rounded p-2 mb-4" />
  
        <label class="block mb-2 font-semibold">Teléfono</label>
        <input v-model="automotora.telefono" class="w-full border rounded p-2 mb-4" />
  
        <label class="block mb-2 font-semibold">Email</label>
        <input v-model="automotora.email" class="w-full border rounded p-2 mb-4" />
  
        <label class="block mb-2 font-semibold">Logo</label>
        <input type="file" @change="subirLogo" class="mb-4" />
        <img v-if="automotora.logo" :src="automotora.logo" class="w-32 h-32 object-cover" />
  
        <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Guardar
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  const { $api } = useNuxtApp()
  const user = useAuthStore() // asumiendo que tienes Pinia para auth
  
  const { data: automotora } = await useAsyncData('miAutomotora', () =>
    $api.get(`/automotoras/por-usuario/${user.usuario.id}`).then(res => res.data)
  )
  
  async function guardarCambios() {
    await $api.put(`/automotoras/${automotora.value.id}`, automotora.value)
    alert('Cambios guardados')
  }
  
  async function subirLogo(event) {
    const file = event.target.files[0]
    const formData = new FormData()
    formData.append('logo', file)
  
    const res = await $api.post(`/automotoras/${automotora.value.id}/logo`, formData)
    automotora.value.logo = res.data.logo
  }
  </script>
  