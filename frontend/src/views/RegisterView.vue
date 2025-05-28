<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div class="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Crear Cuenta</h2>
  
        <form @submit.prevent="register">
          <div class="mb-4">
            <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Nombre</label>
            <input v-model="nombre" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Correo</label>
            <input v-model="email" type="email" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Contraseña</label>
            <input v-model="password" type="password" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Rol</label>
            <select v-model="rol" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white">
              <option disabled value="">Selecciona un rol</option>
              <option value="CLIENTE">Cliente</option>
              <option value="CONCESIONARIO">Concesionario</option>
              <option value="PUBLICISTA">Publicista</option>
            </select>
          </div>
  
          <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Registrarse
          </button>
  
          <p v-if="error" class="text-red-500 mt-3 text-sm text-center">{{ error }}</p>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const nombre = ref('');
  const email = ref('');
  const password = ref('');
  const rol = ref('');
  const error = ref('');
  const router = useRouter();
  
  const register = async () => {
    try {
      await axios.post('http://localhost:3000/api/auth/register', {
        nombre: nombre.value,
        email: email.value,
        password: password.value,
        rol: rol.value,
      });
      router.push('/login');
    } catch (err) {
      error.value = err.response?.data?.error || 'Error al registrarse';
    }
  };
  </script>
  