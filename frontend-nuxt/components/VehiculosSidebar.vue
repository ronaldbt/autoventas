<template>
  <div class="w-full max-w-sm bg-white rounded-lg shadow-lg border border-gray-200">
    <!-- Información básica -->
    <div class="border-b border-gray-200">
      <button 
        @click="toggleSection('basic')"
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
      >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="font-medium text-gray-900">Información básica</span>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': expandedSections.basic }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-if="expandedSections.basic" class="px-4 pb-4 space-y-3">
        <!-- Marca -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Marca</label>
          <select 
            v-model="filtros.marcaId" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Seleccionar marca</option>
            <option v-for="marca in marcas" :key="marca.id" :value="marca.id">
              {{ marca.nombre }}
            </option>
          </select>
        </div>

        <!-- Modelo -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
          <input
            v-model="filtros.modelo"
            type="text"
            placeholder="Ingresa el modelo"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Año -->
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Año desde</label>
            <select 
              v-model="filtros.anioMin" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Desde</option>
              <option v-for="anio in generarAnios()" :key="anio" :value="anio">{{ anio }}</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Año hasta</label>
            <select 
              v-model="filtros.anioMax" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Hasta</option>
              <option v-for="anio in generarAnios()" :key="anio" :value="anio">{{ anio }}</option>
            </select>
          </div>
        </div>

        <!-- Versión -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Versión</label>
          <input
            v-model="filtros.version"
            type="text"
            placeholder="Ejemplo: Sport, Limited, Premium"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>

    <!-- Costo del auto -->
    <div class="border-b border-gray-200">
      <button 
        @click="toggleSection('cost')"
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
      >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
          </svg>
          <span class="font-medium text-gray-900">Precio del auto</span>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': expandedSections.cost }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-if="expandedSections.cost" class="px-4 pb-4 space-y-3">
        <!-- Rango de precios con slider -->
        <div>
          <div class="flex justify-between text-sm text-gray-600 mb-2">
            <span>Precio desde: ${{ formatPrice(filtros.precioMin || 21000) }}</span>
            <span>Precio hasta: ${{ formatPrice(filtros.precioMax || 34000) }}</span>
          </div>
          
          <!-- Slider dual para precios -->
          <div class="relative">
            <div class="h-2 bg-gray-200 rounded-full">
              <div 
                class="h-2 bg-red-500 rounded-full"
                :style="{ 
                  left: precioMinPercent + '%', 
                  width: (precioMaxPercent - precioMinPercent) + '%' 
                }"
              ></div>
            </div>
            <input
              v-model.number="filtros.precioMin"
              type="range"
              :min="minPrecio"
              :max="maxPrecio"
              :step="1000"
              class="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
            />
            <input
              v-model.number="filtros.precioMax"
              type="range"
              :min="minPrecio"
              :max="maxPrecio"
              :step="1000"
              class="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
            />
            <!-- Thumbs del slider -->
            <div 
              class="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full shadow-md cursor-pointer -mt-1"
              :style="{ left: 'calc(' + precioMinPercent + '% - 8px)' }"
            ></div>
            <div 
              class="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full shadow-md cursor-pointer -mt-1"
              :style="{ left: 'calc(' + precioMaxPercent + '% - 8px)' }"
            ></div>
          </div>
        </div>

        <!-- Opciones de financiamiento -->
        <div class="space-y-2">
          <label class="flex items-center">
            <input 
              v-model="filtros.posibleRemate"
              type="checkbox" 
              class="mr-2 text-red-500 focus:ring-red-500"
            >
            <span class="text-sm text-gray-700">Posible regateo</span>
          </label>
          <label class="flex items-center">
            <input 
              v-model="filtros.intercambio"
              type="checkbox" 
              class="mr-2 text-red-500 focus:ring-red-500"
            >
            <span class="text-sm text-gray-700">Intercambio por inmueble</span>
          </label>
          <label class="flex items-center">
            <input 
              v-model="filtros.intercambioAuto"
              type="checkbox" 
              class="mr-2 text-red-500 focus:ring-red-500"
            >
            <span class="text-sm text-gray-700">Intercambio por auto</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Región de búsqueda -->
    <div class="border-b border-gray-200">
      <button 
        @click="toggleSection('region')"
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
      >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          <span class="font-medium text-gray-900">Región de búsqueda</span>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': expandedSections.region }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-if="expandedSections.region" class="px-4 pb-4">
        <select 
          v-model="filtros.regionId" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Seleccionar región</option>
          <option v-for="region in regiones" :key="region.id" :value="region.id">
            {{ region.nombre }}
          </option>
        </select>
      </div>
    </div>

    <!-- Condición del vehículo -->
    <div class="border-b border-gray-200">
      <button 
        @click="toggleSection('condition')"
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
      >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="font-medium text-gray-900">Vehicle condition</span>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': expandedSections.condition }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-if="expandedSections.condition" class="px-4 pb-4">
        <select 
          v-model="filtros.condicion" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Cualquier condición</option>
          <option value="nuevo">Nuevo</option>
          <option value="usado">Usado</option>
          <option value="seminuevo">Seminuevo</option>
        </select>
      </div>
    </div>

    <!-- Tipo de carrocería -->
    <div class="border-b border-gray-200">
      <button 
        @click="toggleSection('bodyType')"
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
      >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 8h6M4 21h16a2 2 0 002-2V9a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span class="font-medium text-gray-900">Tipo de carrocería</span>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': expandedSections.bodyType }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-if="expandedSections.bodyType" class="px-4 pb-4">
        <select 
          v-model="filtros.carroceriaId" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Any body type</option>
          <option v-for="carroceria in carrocerias" :key="carroceria.id" :value="carroceria.id">
            {{ carroceria.nombre }}
          </option>
        </select>
      </div>
    </div>

    <!-- Kilometraje -->
    <div class="border-b border-gray-200">
      <button 
        @click="toggleSection('mileage')"
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
      >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
          <span class="font-medium text-gray-900">Kilometraje</span>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': expandedSections.mileage }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-if="expandedSections.mileage" class="px-4 pb-4 space-y-3">
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>Desde: {{ formatNumber(filtros.kilometrosMin || 0) }} km</span>
          <span>Hasta: {{ formatNumber(filtros.kilometrosMax || 300000) }} km</span>
        </div>
        
        <!-- Slider dual para kilometraje -->
        <div class="relative">
          <div class="h-2 bg-gray-200 rounded-full">
            <div 
              class="h-2 bg-red-500 rounded-full"
              :style="{ 
                left: kilometrosMinPercent + '%', 
                width: (kilometrosMaxPercent - kilometrosMinPercent) + '%' 
              }"
            ></div>
          </div>
          <input
            v-model.number="filtros.kilometrosMin"
            type="range"
            :min="minKilometros"
            :max="maxKilometros"
            :step="5000"
            class="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
          />
          <input
            v-model.number="filtros.kilometrosMax"
            type="range"
            :min="minKilometros"
            :max="maxKilometros"
            :step="5000"
            class="absolute top-0 w-full h-2 opacity-0 cursor-pointer"
          />
          <div 
            class="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full shadow-md cursor-pointer -mt-1"
            :style="{ left: 'calc(' + kilometrosMinPercent + '% - 8px)' }"
          ></div>
          <div 
            class="absolute w-4 h-4 bg-red-500 border-2 border-white rounded-full shadow-md cursor-pointer -mt-1"
            :style="{ left: 'calc(' + kilometrosMaxPercent + '% - 8px)' }"
          ></div>
        </div>

        <!-- Opciones rápidas de kilometraje -->
        <div class="grid grid-cols-2 gap-2 text-xs">
          <button 
            @click="setKilometrajeRange(0, 50000)"
            class="px-2 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
          >
            0-50k km
          </button>
          <button 
            @click="setKilometrajeRange(50000, 100000)"
            class="px-2 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
          >
            50k-100k km
          </button>
          <button 
            @click="setKilometrajeRange(100000, 200000)"
            class="px-2 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
          >
            100k-200k km
          </button>
          <button 
            @click="setKilometrajeRange(200000, 300000)"
            class="px-2 py-1 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
          >
            200k+ km
          </button>
        </div>
      </div>
    </div>

    <!-- Características adicionales -->
    <div class="border-b border-gray-200">
      <button 
        @click="toggleSection('additional')"
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
      >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"></path>
          </svg>
          <span class="font-medium text-gray-900">Características adicionales</span>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': expandedSections.additional }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-if="expandedSections.additional" class="px-4 pb-4 space-y-3">
        <!-- Transmisión -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Transmisión</label>
          <select 
            v-model="filtros.transmisionId" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Cualquier transmisión</option>
            <option v-for="transmision in transmisiones" :key="transmision.id" :value="transmision.id">
              {{ transmision.nombre }}
            </option>
          </select>
        </div>

        <!-- Combustible -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Combustible</label>
          <select 
            v-model="filtros.combustibleId" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Cualquier combustible</option>
            <option v-for="combustible in combustibles" :key="combustible.id" :value="combustible.id">
              {{ combustible.nombre }}
            </option>
          </select>
        </div>

        <!-- Características especiales -->
        <div class="space-y-2 pt-2">
          <h4 class="text-sm font-medium text-gray-700">Características especiales</h4>
          <label class="flex items-center">
            <input 
              v-model="filtros.primerDueno"
              type="checkbox" 
              class="mr-2 text-red-500 focus:ring-red-500 rounded"
            >
            <span class="text-sm text-gray-700">Primer dueño</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Color -->
    <div class="border-b border-gray-200">
      <button 
        @click="toggleSection('color')"
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
      >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2H7z"></path>
          </svg>
          <span class="font-medium text-gray-900">Color</span>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': expandedSections.color }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-if="expandedSections.color" class="px-4 pb-4 space-y-3">
        <!-- Color exterior -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Color exterior</label>
          <select 
            v-model="filtros.colorExterior" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Cualquier color</option>
            <option value="blanco">Blanco</option>
            <option value="negro">Negro</option>
            <option value="gris">Gris</option>
            <option value="plata">Plata</option>
            <option value="azul">Azul</option>
            <option value="rojo">Rojo</option>
            <option value="verde">Verde</option>
            <option value="amarillo">Amarillo</option>
            <option value="beige">Beige</option>
            <option value="cafe">Café</option>
            <option value="dorado">Dorado</option>
            <option value="naranja">Naranja</option>
          </select>
        </div>

        <!-- Color interior -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Color interior</label>
          <select 
            v-model="filtros.colorInterior" 
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
          >
            <option value="">Cualquier color</option>
            <option value="negro">Negro</option>
            <option value="gris">Gris</option>
            <option value="beige">Beige</option>
            <option value="cuero">Cuero</option>
            <option value="tela">Tela</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Estado del vehículo -->
    <div>

      <button 
        @click="toggleSection('status')"
        class="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50"
      >
        <div class="flex items-center">
          <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span class="font-medium text-gray-900">Estado del vehículo</span>
        </div>
        <svg 
          class="w-5 h-5 text-gray-400 transition-transform duration-200"
          :class="{ 'rotate-180': expandedSections.status }"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div v-if="expandedSections.status" class="px-4 pb-4">
        <select 
          v-model="filtros.estado" 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
        >
          <option value="ACTIVO">Activos</option>
          <option value="VENDIDO">Vendidos</option>
          <option value="INACTIVO">Inactivos</option>
        </select>
      </div>
    </div>

    <!-- Contador de resultados y botones de acción -->
    <div class="p-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
      <div class="text-center text-sm text-gray-600 mb-3">
        Found cars: <span class="font-bold text-red-600">{{ totalResultados }}</span>
      </div>
      
      <div class="space-y-2">
        <button
          @click="aplicarFiltros"
          class="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md"
        >
          <span class="flex items-center justify-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
            Show results
          </span>
        </button>
        
        <button
          @click="limpiarFiltros"
          class="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          <span class="flex items-center justify-center">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            Clear filters
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watchEffect, onMounted } from 'vue'
import { useCatalogo } from '../composables/useCatalogo'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({})
  },
  totalResultados: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['update:modelValue', 'aplicar-filtros'])

// Usar el composable de catálogo
const { 
  marcas,
  regiones,
  carrocerias,
  transmisiones,
  combustibles,
  cargarMarcas,
  cargarRegiones,
  cargarCarrocerias,
  cargarTransmisiones,
  cargarCombustibles
} = useCatalogo()

// Filtros reactivos
const filtros = ref({
  marcaId: '',
  modelo: '',
  version: '',
  anioMin: '',
  anioMax: '',
  precioMin: 21000,
  precioMax: 34000,
  kilometrosMin: 0,
  kilometrosMax: 300000,
  carroceriaId: '',
  transmisionId: '',
  combustibleId: '',
  regionId: '',
  condicion: '',
  colorExterior: '',
  colorInterior: '',
  estado: 'ACTIVO',
  primerDueno: false,
  posibleRemate: false,
  intercambio: false,
  intercambioAuto: false,
  ...props.modelValue
})

// Estado de las secciones expandidas
const expandedSections = ref({
  basic: true,
  cost: false,
  bodyType: false,
  mileage: false,
  region: false,
  condition: false,
  additional: false,
  color: false,
  status: false
})

// Constantes para el slider de precios
const minPrecio = 5000
const maxPrecio = 100000

// Constantes para el slider de kilometraje
const minKilometros = 0
const maxKilometros = 300000

// Computed para los porcentajes del slider de precios
const precioMinPercent = computed(() => {
  return ((filtros.value.precioMin - minPrecio) / (maxPrecio - minPrecio)) * 100
})

const precioMaxPercent = computed(() => {
  return ((filtros.value.precioMax - minPrecio) / (maxPrecio - minPrecio)) * 100
})

// Computed para los porcentajes del slider de kilometraje
const kilometrosMinPercent = computed(() => {
  return ((filtros.value.kilometrosMin - minKilometros) / (maxKilometros - minKilometros)) * 100
})

const kilometrosMaxPercent = computed(() => {
  return ((filtros.value.kilometrosMax - minKilometros) / (maxKilometros - minKilometros)) * 100
})

// Funciones
function toggleSection(section) {
  expandedSections.value[section] = !expandedSections.value[section]
}

function generarAnios() {
  const anioActual = new Date().getFullYear()
  const anios = []
  for (let i = anioActual; i >= 1990; i--) {
    anios.push(i)
  }
  return anios
}

function formatPrice(price) {
  return new Intl.NumberFormat('es-CL').format(price)
}

function formatNumber(number) {
  return new Intl.NumberFormat('es-CL').format(number)
}

function setKilometrajeRange(min, max) {
  filtros.value.kilometrosMin = min
  filtros.value.kilometrosMax = max
}

function aplicarFiltros() {
  emit('aplicar-filtros', filtros.value)
}

function limpiarFiltros() {
  // Resetear todos los filtros a sus valores por defecto
  filtros.value = {
    marcaId: '',
    modelo: '',
    version: '',
    anioMin: '',
    anioMax: '',
    precioMin: 21000,
    precioMax: 34000,
    kilometrosMin: 0,
    kilometrosMax: 300000,
    carroceriaId: '',
    transmisionId: '',
    combustibleId: '',
    regionId: '',
    condicion: '',
    colorExterior: '',
    colorInterior: '',
    estado: 'ACTIVO',
    primerDueno: false,
    posibleRemate: false,
    intercambio: false,
    intercambioAuto: false
  }
  
  // Emitir los filtros limpios
  emit('aplicar-filtros', filtros.value)
}

// Cargar catálogos al montar
onMounted(async () => {
  try {
    await Promise.all([
      cargarMarcas(),
      cargarRegiones(),
      cargarCarrocerias(),
      cargarTransmisiones(),
      cargarCombustibles()
    ])
  } catch (error) {
    console.error('❌ Error cargando catálogos:', error)
  }
})

// Watcher para emitir cambios
watchEffect(() => {
  emit('update:modelValue', filtros.value)
})
</script>