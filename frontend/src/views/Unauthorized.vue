<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black px-4">
      <div class="text-center max-w-md">
        <h1 class="text-4xl font-bold text-red-600 mb-4">🚫 Acceso no autorizado</h1>
        <p class="text-gray-700 dark:text-gray-300 mb-6">
          No tienes permiso para acceder a esta sección. Asegúrate de haber iniciado sesión con el rol adecuado.
        </p>
        <router-link
          to="/"
          class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Volver al inicio
        </router-link>
      </div>
    </div>
  </template>
  