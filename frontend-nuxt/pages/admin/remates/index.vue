<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-4xl font-bold text-slate-800 mb-2">Panel de Remates - Administrador</h1>
            <p class="text-slate-600 text-lg">Gestiona todos los remates y subastas del sistema</p>
          </div>
          <button
            @click="mostrarModalCrear = true"
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Crear Remate
          </button>
        </div>
      </div>

      <!-- Estadísticas -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Total Remates</p>
              <p class="text-2xl font-bold text-slate-800">{{ stats.total }}</p>
            </div>
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Programados</p>
              <p class="text-2xl font-bold text-orange-600">{{ stats.programados }}</p>
            </div>
            <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">En Vivo</p>
              <p class="text-2xl font-bold text-red-600">{{ stats.enVivo }}</p>
            </div>
            <div class="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500">Finalizados</p>
              <p class="text-2xl font-bold text-green-600">{{ stats.finalizados }}</p>
            </div>
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtros -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Estado</label>
            <select v-model="filtros.estado" @change="aplicarFiltros" class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Todos</option>
              <option value="programado">Programados</option>
              <option value="en_vivo">En Vivo</option>
              <option value="finalizado">Finalizados</option>
              <option value="cancelado">Cancelados</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Destacado</label>
            <select v-model="filtros.destacado" @change="aplicarFiltros" class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option value="">Todos</option>
              <option value="true">Solo Destacados</option>
              <option value="false">No Destacados</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Fecha</label>
            <input v-model="filtros.fecha" @change="aplicarFiltros" type="date" class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-2">Buscar</label>
            <input v-model="filtros.busqueda" @input="buscarDebounced" placeholder="Título, marca, modelo..." class="w-full px-4 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          </div>
          <div class="flex items-end">
            <button @click="limpiarFiltros" class="w-full px-4 py-2 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all duration-200">
              Limpiar
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="space-y-4">
        <div v-for="n in 3" :key="n" class="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="w-20 h-20 bg-slate-200 rounded-xl"></div>
              <div>
                <div class="h-6 bg-slate-200 rounded w-48 mb-2"></div>
                <div class="h-4 bg-slate-200 rounded w-32"></div>
              </div>
            </div>
            <div class="w-24 h-8 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>

      <!-- Tabla de Remates -->
      <div v-else-if="remates.length > 0" class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Remate</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Vehículo</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Fecha/Hora</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Estado</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Precio Base</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Participantes</th>
                <th class="px-6 py-4 text-left text-sm font-semibold text-slate-700">Acciones</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200">
              <tr v-for="remate in remates" :key="remate.id" class="hover:bg-slate-50 transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                      </svg>
                    </div>
                    <div>
                      <div class="font-semibold text-slate-800">{{ remate.titulo }}</div>
                      <div class="text-sm text-slate-500">#{{ remate.id.toString().padStart(6, '0') }}</div>
                      <div v-if="remate.esDestacado" class="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full mt-1">
                        ⭐ Destacado
                      </div>
                    </div>
                  </div>
                </td>
                
                <td class="px-6 py-4">
                  <div class="text-sm">
                    <div class="font-medium text-slate-800">{{ remate.vehiculo?.marca }} {{ remate.vehiculo?.modelo }}</div>
                    <div class="text-slate-500">{{ remate.vehiculo?.ano }} • {{ remate.vehiculo?.patente }}</div>
                  </div>
                </td>
                
                <td class="px-6 py-4 text-sm">
                  <div class="font-medium text-slate-800">{{ formatFecha(remate.fechaHoraInicio) }}</div>
                  <div class="text-slate-500">{{ formatHora(remate.fechaHoraInicio) }}</div>
                </td>
                
                <td class="px-6 py-4">
                  <span :class="getEstadoClass(remate.estado)" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium">
                    {{ getEstadoTexto(remate.estado) }}
                  </span>
                </td>
                
                <td class="px-6 py-4">
                  <div class="text-sm">
                    <div class="font-medium text-green-600">${{ remate.precioBase?.toLocaleString() }}</div>
                    <div v-if="remate.pujaActual" class="text-slate-500">Actual: ${{ remate.pujaActual.toLocaleString() }}</div>
                  </div>
                </td>
                
                <td class="px-6 py-4 text-center">
                  <div class="text-lg font-bold text-blue-600">{{ remate.participantesInscritos || 0 }}</div>
                  <div class="text-xs text-slate-500">inscritos</div>
                </td>
                
                <td class="px-6 py-4">
                  <div class="flex items-center space-x-2">
                    <button
                      @click="editarRemate(remate)"
                      class="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg transition-colors"
                      title="Editar"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </button>
                    
                    <NuxtLink
                      :to="`/admin/remates/${remate.id}/inscripciones`"
                      class="p-2 bg-green-100 hover:bg-green-200 text-green-600 rounded-lg transition-colors"
                      title="Ver Inscripciones"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                      </svg>
                    </NuxtLink>
                    
                    <button
                      @click="cambiarEstado(remate)"
                      :class="getAccionClass(remate.estado)"
                      class="p-2 rounded-lg transition-colors text-xs font-medium px-3 py-1"
                      :title="getAccionTexto(remate.estado)"
                    >
                      {{ getAccionTexto(remate.estado) }}
                    </button>
                    
                    <NuxtLink
                      :to="`/remates/${remate.slug || remate.id}`"
                      class="p-2 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg transition-colors"
                      title="Ver Remate"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </NuxtLink>
                    
                    <button
                      v-if="remate.estado === 'programado'"
                      @click="eliminarRemate(remate)"
                      class="p-2 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
                      title="Eliminar"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else class="bg-white rounded-2xl shadow-lg p-12 text-center">
        <div class="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <h3 class="text-xl font-semibold text-slate-700 mb-2">No hay remates</h3>
        <p class="text-slate-500 mb-6">Comienza creando tu primer remate</p>
        <NuxtLink
          to="/admin/remates/crear"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Crear Primer Remate
        </NuxtLink>
      </div>

      <!-- Paginación -->
      <div v-if="remates.length > 0 && totalPages > 1" class="flex justify-center mt-8">
        <div class="flex items-center space-x-2">
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="cambiarPagina(page)"
            :class="[
              'px-4 py-2 rounded-xl font-semibold transition-all duration-200',
              currentPage === page 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            ]"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>

    <!-- Modal Crear/Editar Remate -->
    <div v-if="mostrarModalCrear || mostrarModalEditar" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-screen overflow-y-auto">
        <div class="px-6 py-4 border-b border-gray-200">
          <h3 class="text-lg font-medium text-gray-900">
            {{ mostrarModalCrear ? 'Crear Nuevo Remate' : 'Editar Remate' }}
          </h3>
        </div>
        
        <form @submit.prevent="submitRemate" class="p-6 space-y-6">
          <!-- Título -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Título *</label>
            <input 
              v-model="formRemate.titulo"
              type="text" 
              required
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ej: Remate Toyota Corolla 2020"
            >
          </div>

          <!-- Descripción -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
            <textarea 
              v-model="formRemate.descripcion"
              rows="3"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Descripción del remate..."
            ></textarea>
          </div>

          <!-- Vehículo -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Vehículo *</label>
            <select 
              v-model="formRemate.vehiculoId"
              required
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Seleccionar vehículo</option>
              <option 
                v-for="vehiculo in vehiculosDisponibles" 
                :key="vehiculo.id" 
                :value="vehiculo.id"
              >
                {{ vehiculo.marca }} {{ vehiculo.modelo }} {{ vehiculo.ano }} - ${{ formatNumber(vehiculo.precio) }}
              </option>
            </select>
          </div>

          <!-- Fecha y hora -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Fecha *</label>
              <input 
                v-model="formRemate.fecha"
                type="date" 
                required
                :min="fechaMinima"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Hora *</label>
              <input 
                v-model="formRemate.hora"
                type="time" 
                required
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
            </div>
          </div>

          <!-- Duración -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Duración (minutos) *</label>
            <select 
              v-model="formRemate.duracionMinutos"
              required
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="30">30 minutos</option>
              <option value="60">1 hora</option>
              <option value="90">1.5 horas</option>
              <option value="120">2 horas</option>
            </select>
          </div>

          <!-- Precios -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Precio Base *</label>
              <input 
                v-model="formRemate.precioBase"
                type="number" 
                required
                min="0"
                step="10000"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="1000000"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Precio Reserva</label>
              <input 
                v-model="formRemate.precioReserva"
                type="number" 
                min="0"
                step="10000"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="1500000"
              >
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Incremento Mínimo</label>
              <input 
                v-model="formRemate.incrementoMinimo"
                type="number" 
                min="1000"
                step="1000"
                class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="50000"
              >
            </div>
          </div>

          <!-- Opciones -->
          <div class="space-y-3">
            <div class="flex items-center">
              <input 
                v-model="formRemate.requiereInscripcion"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label class="ml-2 block text-sm text-gray-900">Requiere inscripción previa</label>
            </div>
            
            <div class="flex items-center">
              <input 
                v-model="formRemate.requiereVerificacion"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label class="ml-2 block text-sm text-gray-900">Requiere verificación de participantes</label>
            </div>
            
            <div class="flex items-center">
              <input 
                v-model="formRemate.esDestacado"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              >
              <label class="ml-2 block text-sm text-gray-900">Remate destacado</label>
            </div>
          </div>

          <!-- Observaciones -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Observaciones</label>
            <textarea 
              v-model="formRemate.observaciones"
              rows="2"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Observaciones adicionales..."
            ></textarea>
          </div>

          <!-- Condiciones especiales -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Condiciones Especiales</label>
            <textarea 
              v-model="formRemate.condicionesEspeciales"
              rows="2"
              class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Condiciones especiales del remate..."
            ></textarea>
          </div>

          <!-- Botones -->
          <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button 
              type="button"
              @click="cerrarModales"
              class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit"
              :disabled="enviandoRemate"
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-md transition-colors"
            >
              {{ enviandoRemate ? 'Guardando...' : (mostrarModalCrear ? 'Crear Remate' : 'Actualizar Remate') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'

// Meta
definePageMeta({
  middleware: ['auth', 'admin'],
  layout: 'default'
})

useHead({
  title: 'Panel de Remates - Administrador | Autoventas360'
})

// Store
const remateStore = useRemateStore()
const { $api } = useNuxtApp()

// Estado
const loading = ref(true)
const remates = ref([])
const currentPage = ref(1)
const totalPages = ref(1)
const vehiculosDisponibles = ref([])
const mostrarModalCrear = ref(false)
const mostrarModalEditar = ref(false)
const enviandoRemate = ref(false)
const remateEditando = ref(null)

const filtros = reactive({
  estado: '',
  destacado: '',
  fecha: '',
  busqueda: ''
})

// Formulario de remate
const formRemate = ref({
  titulo: '',
  descripcion: '',
  vehiculoId: '',
  fecha: '',
  hora: '',
  duracionMinutos: 60,
  precioBase: '',
  precioReserva: '',
  incrementoMinimo: 50000,
  requiereInscripcion: true,
  requiereVerificacion: false,
  esDestacado: false,
  observaciones: '',
  condicionesEspeciales: ''
})

const stats = computed(() => {
  return {
    total: remates.value.length,
    programados: remates.value.filter(r => r.estado === 'programado').length,
    enVivo: remates.value.filter(r => r.estado === 'en_vivo').length,
    finalizados: remates.value.filter(r => r.estado === 'finalizado').length
  }
})

const fechaMinima = computed(() => {
  const hoy = new Date()
  return hoy.toISOString().split('T')[0]
})

// Funciones de utilidad
const formatFecha = (fecha) => {
  return new Date(fecha).toLocaleDateString('es-CL', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

const formatHora = (fecha) => {
  return new Date(fecha).toLocaleTimeString('es-CL', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatNumber = (num) => {
  return new Intl.NumberFormat('es-CL').format(num)
}

const getEstadoClass = (estado) => {
  const clases = {
    'programado': 'bg-yellow-100 text-yellow-800',
    'en_vivo': 'bg-red-100 text-red-800',
    'finalizado': 'bg-green-100 text-green-800',
    'cancelado': 'bg-gray-100 text-gray-800'
  }
  return clases[estado] || 'bg-gray-100 text-gray-800'
}

const getEstadoTexto = (estado) => {
  const textos = {
    'programado': 'Programado',
    'en_vivo': 'En Vivo',
    'finalizado': 'Finalizado',
    'cancelado': 'Cancelado'
  }
  return textos[estado] || estado
}

const getAccionClass = (estado) => {
  const clases = {
    'programado': 'bg-green-100 hover:bg-green-200 text-green-700',
    'en_vivo': 'bg-red-100 hover:bg-red-200 text-red-700',
    'finalizado': 'bg-gray-100 text-gray-500 cursor-not-allowed'
  }
  return clases[estado] || 'bg-gray-100 text-gray-500'
}

const getAccionTexto = (estado) => {
  const textos = {
    'programado': 'Iniciar',
    'en_vivo': 'Finalizar',
    'finalizado': 'Finalizado'
  }
  return textos[estado] || 'N/A'
}

// Funciones principales
const cargarRemates = async () => {
  try {
    loading.value = true
    const data = await remateStore.fetchRemates({
      ...filtros,
      page: currentPage.value
    })
    remates.value = data.remates
    totalPages.value = data.totalPages
  } catch (error) {
    console.error('Error cargando remates:', error)
  } finally {
    loading.value = false
  }
}

const aplicarFiltros = () => {
  currentPage.value = 1
  cargarRemates()
}

const limpiarFiltros = () => {
  Object.keys(filtros).forEach(key => {
    filtros[key] = ''
  })
  aplicarFiltros()
}

const buscarDebounced = debounce(() => {
  aplicarFiltros()
}, 500)

const cambiarPagina = (page) => {
  currentPage.value = page
  cargarRemates()
}

const cambiarEstado = async (remate) => {
  try {
    let nuevoEstado
    if (remate.estado === 'programado') nuevoEstado = 'en_vivo'
    else if (remate.estado === 'en_vivo') nuevoEstado = 'finalizado'
    else return
    
    await remateStore.cambiarEstadoRemate(remate.id, nuevoEstado)
    await cargarRemates()
    
    alert(`Remate ${nuevoEstado === 'en_vivo' ? 'iniciado' : 'finalizado'} exitosamente`)
  } catch (error) {
    console.error('Error cambiando estado:', error)
    alert('Error al cambiar el estado del remate')
  }
}

const eliminarRemate = async (remate) => {
  if (!confirm(`¿Estás seguro de eliminar el remate "${remate.titulo}"?`)) return
  
  try {
    await remateStore.eliminarRemate(remate.id)
    await cargarRemates()
    alert('Remate eliminado exitosamente')
  } catch (error) {
    console.error('Error eliminando remate:', error)
    alert('Error al eliminar el remate')
  }
}

// Cargar vehículos disponibles
const cargarVehiculos = async () => {
  try {
    const { data } = await $api.get('/vehiculos')
    vehiculosDisponibles.value = data.vehiculos || []
  } catch (error) {
    console.error('Error cargando vehículos:', error)
    vehiculosDisponibles.value = []
  }
}

// Modal functions
const editarRemate = (remate) => {
  remateEditando.value = remate
  const fechaInicio = new Date(remate.fechaHoraInicio)
  
  formRemate.value = {
    titulo: remate.titulo,
    descripcion: remate.descripcion || '',
    vehiculoId: remate.vehiculoId,
    fecha: fechaInicio.toISOString().split('T')[0],
    hora: fechaInicio.toTimeString().substring(0, 5),
    duracionMinutos: remate.duracionMinutos || 60,
    precioBase: remate.precioBase,
    precioReserva: remate.precioReserva || '',
    incrementoMinimo: remate.incrementoMinimo || 50000,
    requiereInscripcion: remate.requiereInscripcion,
    requiereVerificacion: remate.requiereVerificacion,
    esDestacado: remate.esDestacado,
    observaciones: remate.observaciones || '',
    condicionesEspeciales: remate.condicionesEspeciales || ''
  }
  
  mostrarModalEditar.value = true
}

const submitRemate = async () => {
  enviandoRemate.value = true
  
  try {
    // Combinar fecha y hora
    const fechaHoraInicio = new Date(`${formRemate.value.fecha}T${formRemate.value.hora}`)
    
    const datosRemate = {
      ...formRemate.value,
      fechaHoraInicio: fechaHoraInicio.toISOString(),
      precioBase: parseInt(formRemate.value.precioBase),
      precioReserva: formRemate.value.precioReserva ? parseInt(formRemate.value.precioReserva) : null,
      incrementoMinimo: parseInt(formRemate.value.incrementoMinimo),
      duracionMinutos: parseInt(formRemate.value.duracionMinutos),
      vehiculoId: parseInt(formRemate.value.vehiculoId)
    }
    
    // Eliminar campos que no se envían al backend
    delete datosRemate.fecha
    delete datosRemate.hora
    
    if (mostrarModalCrear.value) {
      await remateStore.crearRemate(datosRemate)
      alert('Remate creado exitosamente')
    } else {
      await remateStore.actualizarRemate(remateEditando.value.id, datosRemate)
      alert('Remate actualizado exitosamente')
    }
    
    cerrarModales()
    await cargarRemates()
  } catch (error) {
    console.error('Error guardando remate:', error)
    alert('Error al guardar el remate')
  } finally {
    enviandoRemate.value = false
  }
}

const cerrarModales = () => {
  mostrarModalCrear.value = false
  mostrarModalEditar.value = false
  remateEditando.value = null
  
  // Limpiar formulario
  formRemate.value = {
    titulo: '',
    descripcion: '',
    vehiculoId: '',
    fecha: '',
    hora: '',
    duracionMinutos: 60,
    precioBase: '',
    precioReserva: '',
    incrementoMinimo: 50000,
    requiereInscripcion: true,
    requiereVerificacion: false,
    esDestacado: false,
    observaciones: '',
    condicionesEspeciales: ''
  }
}

// Utility function
function debounce(func, delay) {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(this, args), delay)
  }
}

// Cargar datos
onMounted(() => {
  cargarRemates()
  cargarVehiculos()
})
</script>