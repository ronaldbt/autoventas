<template>
  <form @submit.prevent="handleSubmit" class="space-y-8">
    <!-- INFORMACIÓN GENERAL -->
    <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-8 border-b border-slate-200">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-800">Información del Vehículo</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Patente *</label>
          <input 
            v-model="form.patente" 
            placeholder="Ej: ABC123" 
            required 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Marca</label>
          <input 
            v-model="form.marca" 
            placeholder="Ej: Toyota" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Modelo</label>
          <input 
            v-model="form.modelo" 
            placeholder="Ej: Corolla" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Color</label>
          <input 
            v-model="form.color" 
            placeholder="Ej: Blanco" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Propietario</label>
          <input 
            v-model="form.propietario" 
            placeholder="Nombre del propietario" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Cliente</label>
          <input 
            v-model="form.cliente" 
            placeholder="Nombre del cliente" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Teléfono</label>
          <input 
            v-model="form.telefono" 
            placeholder="+56 9 1234 5678" 
            type="tel"
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Email</label>
          <input 
            v-model="form.email" 
            placeholder="cliente@email.com" 
            type="email"
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Fecha del Peritaje</label>
          <input 
            v-model="form.fecha" 
            type="date" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2 md:col-span-2">
          <label class="block text-sm font-semibold text-slate-700">Dirección</label>
          <input 
            v-model="form.direccion" 
            placeholder="Dirección completa del vehículo" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Número de Motor</label>
          <input 
            v-model="form.numeroMotor" 
            placeholder="Número de motor" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Número de Chasis</label>
          <input 
            v-model="form.numeroChasis" 
            placeholder="Número de chasis" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Número de Serial</label>
          <input 
            v-model="form.numeroSerial" 
            placeholder="Número de serial" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Tipo de Transporte</label>
          <select 
            v-model="form.tipoTransporte" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
          >
            <option value="">Seleccionar tipo</option>
            <option value="AUTOMOVIL">Automóvil</option>
            <option value="CAMIONETA">Camioneta</option>
            <option value="SUV">SUV</option>
            <option value="MOTOCICLETA">Motocicleta</option>
            <option value="CAMION">Camión</option>
            <option value="BUS">Bus</option>
          </select>
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Valor Avalúo ($)</label>
          <input 
            v-model="form.valorAvaluo" 
            type="number" 
            placeholder="0" 
            min="0"
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
      </div>
    </div>
  
    <!-- FRENOS -->
    <div class="p-8">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-800">Sistema de Frenos</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Eficacia Delantera (%)</label>
          <input 
            v-model.number="form.frenos_eficacia_delantera" 
            type="number" 
            placeholder="0" 
            min="0" 
            max="100"
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Eficacia Trasera (%)</label>
          <input 
            v-model.number="form.frenos_eficacia_trasera" 
            type="number" 
            placeholder="0" 
            min="0" 
            max="100"
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Dif. Fuerza Delantera</label>
          <input 
            v-model.number="form.frenos_diferencia_fuerza_delantera" 
            type="number" 
            placeholder="0" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Dif. Fuerza Trasera</label>
          <input 
            v-model.number="form.frenos_diferencia_fuerza_trasera" 
            type="number" 
            placeholder="0" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Esfuerzo (kg)</label>
          <input 
            v-model.number="form.frenos_esfuerzo" 
            type="number" 
            placeholder="0" 
            min="0"
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Peso (kg)</label>
          <input 
            v-model.number="form.frenos_peso" 
            type="number" 
            placeholder="0" 
            min="0"
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Total</label>
          <input 
            v-model.number="form.frenos_total" 
            type="number" 
            placeholder="0" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Estado General</label>
          <select 
            v-model="form.frenos_estado_general" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
          >
            <option value="">Seleccionar estado</option>
            <option value="BUENO">Bueno</option>
            <option value="REGULAR">Regular</option>
            <option value="MALO">Malo</option>
          </select>
        </div>
      </div>
    </div>
  
    <!-- SUSPENSIÓN -->
    <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-8 border-t border-slate-200">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-800">Sistema de Suspensión</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Delantera Izquierda</label>
          <input 
            v-model.number="form.suspension_delantera_izquierda" 
            type="number" 
            placeholder="0" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Delantera Derecha</label>
          <input 
            v-model.number="form.suspension_delantera_derecha" 
            type="number" 
            placeholder="0" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Trasera Izquierda</label>
          <input 
            v-model.number="form.suspension_trasera_izquierda" 
            type="number" 
            placeholder="0" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Trasera Derecha</label>
          <input 
            v-model.number="form.suspension_trasera_derecha" 
            type="number" 
            placeholder="0" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Diferencia Delantera</label>
          <input 
            v-model.number="form.suspension_diferencia_delantera" 
            type="number" 
            placeholder="0" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Diferencia Trasera</label>
          <input 
            v-model.number="form.suspension_diferencia_trasera" 
            type="number" 
            placeholder="0" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
          />
        </div>
        
        <div class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700">Estado General</label>
          <select 
            v-model="form.suspension_estado_general" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
          >
            <option value="">Seleccionar estado</option>
            <option value="BUENO">Bueno</option>
            <option value="REGULAR">Regular</option>
            <option value="MALO">Malo</option>
          </select>
        </div>
      </div>
    </div>
  
    <!-- CARROCERÍA -->
    <div class="p-8">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-800">Inspección de Carrocería</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(value, key) in form.carroceria" :key="key" class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700 capitalize">{{ key.replaceAll('_', ' ') }}</label>
          <select 
            v-model="form.carroceria[key]" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
          >
            <option value="">Seleccionar estado</option>
            <option value="TIENE">Tiene</option>
            <option value="NO TIENE">No tiene</option>
            <option value="GOLPE LEVE">Golpe leve</option>
            <option value="SUMIDO">Sumido</option>
            <option value="BUENO">Bueno</option>
          </select>
        </div>
      </div>
    </div>
  
    <!-- CHASIS -->
    <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-8 border-t border-slate-200">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-800">Inspección de Chasis</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(value, key) in form.chasis" :key="key" class="space-y-2">
          <label class="block text-sm font-semibold text-slate-700 capitalize">{{ key.replaceAll('_', ' ') }}</label>
          <select 
            v-model="form.chasis[key]" 
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900"
          >
            <option value="">Seleccionar estado</option>
            <option value="BUENO">Bueno</option>
            <option value="GOLPEADO">Golpeado</option>
            <option value="DEFORMADO">Deformado</option>
            <option value="ALTERADO">Alterado</option>
          </select>
        </div>
      </div>
    </div>

    <!-- LLANTAS -->
    <div class="p-8">
      <div class="flex items-center space-x-3 mb-6">
        <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
          </svg>
        </div>
        <h2 class="text-2xl font-bold text-slate-800">Estado de Llantas</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div v-for="(llanta, key) in form.llantas" :key="key" class="bg-gradient-to-r from-slate-50 to-slate-100 p-6 rounded-xl border border-slate-200">
          <h3 class="font-bold text-lg text-slate-800 mb-4 capitalize flex items-center">
            <div class="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center mr-3">
              <span class="text-white text-sm font-bold">{{ key.split('_')[0].charAt(0) }}</span>
            </div>
            {{ key.replace('_', ' ') }}
          </h3>
          
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Marca</label>
              <input 
                v-model="form.llantas[key].marca" 
                placeholder="Ej: Bridgestone" 
                class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
              />
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Medida</label>
              <input 
                v-model="form.llantas[key].medida" 
                placeholder="Ej: 205/55R16" 
                class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
              />
            </div>
            
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Profundidad (mm)</label>
              <input 
                v-model.number="form.llantas[key].profundidad" 
                type="number" 
                placeholder="0" 
                min="0"
                class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-slate-900" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- OBSERVACIONES Y PRECIO -->
    <div class="bg-gradient-to-r from-slate-50 to-slate-100 p-8 border-t border-slate-200">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- OBSERVACIONES -->
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Observaciones Generales</h2>
          </div>
          
          <textarea 
            v-model="form.observaciones_generales" 
            rows="6" 
            placeholder="Ingrese observaciones adicionales sobre el estado del vehículo..."
            class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm resize-none text-slate-900"
          ></textarea>
        </div>

        <!-- PRECIO -->
        <div>
          <div class="flex items-center space-x-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Precio del Peritaje</h2>
          </div>
          
          <div class="space-y-4">
            <div class="space-y-2">
              <label class="block text-sm font-semibold text-slate-700">Valor ($)</label>
              <input 
                v-model.number="form.precio" 
                type="number" 
                placeholder="0" 
                min="0"
                class="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm text-lg font-semibold text-slate-900" 
              />
            </div>
            
            <div class="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p class="text-sm text-emerald-700">
                <span class="font-semibold">💡 Nota:</span> El precio incluye la inspección completa del vehículo y el informe técnico detallado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BOTÓN DE ENVÍO -->
    <div class="p-8 bg-white border-t border-slate-200">
      <div class="flex items-center justify-between">
        <div class="text-sm text-slate-500">
          <p>Al enviar este formulario, confirma que ha realizado una inspección completa y precisa del vehículo.</p>
        </div>
        
        <button 
          type="submit" 
          :disabled="isLoading"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
        >
          <svg v-if="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <svg v-else class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          {{ isLoading ? 'Guardando...' : 'Guardar Peritaje' }}
        </button>
      </div>
    </div>
  </form>
  </template>
  
  <script setup>
  import { reactive } from 'vue'
  
  const emit = defineEmits(['submit'])
  const props = defineProps({
    isLoading: {
      type: Boolean,
      default: false
    }
  })
  
  const form = reactive({
    patente: '', marca: '', modelo: '', color: '', propietario: '', cliente: '', telefono: '',
    direccion: '', email: '', fecha: '', numeroMotor: '', numeroChasis: '', numeroSerial: '',
    tipoTransporte: '', valorAvaluo: '',
  
    frenos_eficacia_delantera: '', frenos_eficacia_trasera: '', frenos_diferencia_fuerza_delantera: '',
    frenos_diferencia_fuerza_trasera: '', frenos_esfuerzo: '', frenos_peso: '', frenos_total: '', frenos_estado_general: '',
  
    suspension_delantera_izquierda: '', suspension_delantera_derecha: '', suspension_trasera_izquierda: '',
    suspension_trasera_derecha: '', suspension_diferencia_delantera: '', suspension_diferencia_trasera: '', suspension_estado_general: '',
  
    carroceria: {
      antena: '', retrovisor_derecho: '', retrovisor_izquierdo: '', guarda_fango_derecho: '', guarda_fango_izquierdo: '',
      puerta_delantera_derecha: '', puerta_delantera_izquierda: '', puerta_trasera_derecha: '', puerta_trasera_izquierda: '',
      capo: '', techo: '', baul: '', parachoques_delantero: '', parachoques_trasero: '', faros_delanteros: '',
      luces_traseras: '', vidrio_panoramico_delantero: '', vidrio_panoramico_trasero: '',
      vidrio_puerta_delantera_derecha: '', vidrio_puerta_delantera_izquierda: '',
      vidrio_puerta_trasera_derecha: '', vidrio_puerta_trasera_izquierda: '',
      vidrios_laterales: '', tercer_stop: ''
    },
  
    chasis: {
      estribo_derecho: '', estribo_izquierdo: '', pisos_carroceria: '', puntal_derecho: '', puntal_izquierdo: '',
      base_tijera_derecha: '', base_tijera_izquierda: '', piso_baul: '', panel_trasero: '',
      soportes_parachoques_delantero: '', soportes_parachoques_trasero: '', marcos_puertas_delanteras: '',
      marcos_puertas_traseras: '', torre_suspension_delantera_derecha: '', torre_suspension_delantera_izquierda: '',
      largueros_delanteros: '', largueros_traseros: '', marco_panoramico_delantero: '', marco_panoramico_trasero: ''
    },
  
    llantas: {
      delantera_derecha: { marca: '', medida: '', profundidad: '' },
      delantera_izquierda: { marca: '', medida: '', profundidad: '' },
      trasera_derecha: { marca: '', medida: '', profundidad: '' },
      trasera_izquierda: { marca: '', medida: '', profundidad: '' }
    },
  
    observaciones_generales: '',
    precio: ''
  })
  
  function handleSubmit() {
    emit('submit', { ...form })
  }
  </script>
  