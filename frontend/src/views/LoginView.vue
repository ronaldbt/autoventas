<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div class="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 class="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Iniciar Sesión</h2>
  
        <form @submit.prevent="login">
          <div class="mb-4">
            <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Correo</label>
            <input v-model="email" type="email" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
          </div>
          <div class="mb-4">
            <label class="block mb-1 text-sm text-gray-600 dark:text-gray-300">Contraseña</label>
            <input v-model="password" type="password" required class="w-full p-2 border rounded dark:bg-gray-700 dark:text-white" />
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Entrar
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
  
  const email = ref('');
  const password = ref('');
  const error = ref('');
  const router = useRouter();
  
  const login = async () => {
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', {
        email: email.value,
        password: password.value,
      });
  
      const { token, usuario } = res.data;
  
      localStorage.setItem('token', token);
      localStorage.setItem('rol', usuario.rol);
  
      if (usuario.rol === 'CLIENTE') router.push('/cliente/dashboard');
      else if (usuario.rol === 'CONCESIONARIO') router.push('/concesionario/dashboard');
      else if (usuario.rol === 'PUBLICISTA') router.push('/publicista/dashboard');
      else if (usuario.rol === 'ADMIN') router.push('/admin');
  
    } catch (err) {
      error.value = err.response?.data?.error || 'Error al iniciar sesión';
    }
  };
  </script>
  