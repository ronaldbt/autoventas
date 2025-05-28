<template>
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black px-4 text-center">
      <h1 class="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Página no encontrada</h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        La página que estás buscando no existe o fue movida.
      </p>
      <router-link
        to="/"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
      >
        Volver al inicio
      </router-link>
    </div>
  </template>
  