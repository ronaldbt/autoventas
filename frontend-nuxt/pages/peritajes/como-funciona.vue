<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-blue-900 to-indigo-900 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Cómo Funciona un Peritaje Vehicular?
          </h1>
          <p class="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Proceso paso a paso de nuestro servicio profesional de peritaje vehicular
          </p>
        </div>
    <!-- Menú de navegación secundario -->
    <PeritajesNavigation />
    
      </div>
    </section>

    <!-- Proceso Principal -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">
              4 Pasos Simples para tu Peritaje
            </h2>
            <p class="text-lg text-gray-600 mb-8">
              Nuestro proceso está diseñado para ser rápido, eficiente y completamente transparente. 
              Desde la solicitud hasta la entrega del informe, te acompañamos en cada paso.
            </p>
            <NuxtLink 
              to="/peritajes/solicitar"
              class="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-colors"
            >
              Solicitar Peritaje
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </NuxtLink>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <svg class="w-full h-64 text-blue-600" viewBox="0 0 400 300" fill="none">
                <!-- Car silhouette -->
                <path d="M60 200 L80 180 L120 170 L280 170 L320 180 L340 200 L340 220 L320 230 L300 230 L290 220 L110 220 L100 230 L80 230 L60 220 Z" fill="currentColor" opacity="0.3"/>
                <!-- Magnifying glass -->
                <circle cx="200" cy="140" r="30" stroke="currentColor" stroke-width="4" fill="none"/>
                <path d="225 165 L245 185" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                <!-- Checkmark -->
                <path d="190 140 L200 150 L215 130" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Timeline de Pasos -->
        <div class="relative">
          <!-- Línea central -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden lg:block"></div>
          
          <!-- Paso 1 -->
          <div class="relative flex items-center mb-16">
            <div class="lg:w-1/2 lg:pr-12">
              <div class="bg-white border-2 border-orange-200 rounded-2xl p-8 ml-auto lg:max-w-md hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-xl font-bold text-white">1</span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Solicita Online</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  Completa nuestro formulario web con los datos básicos de tu vehículo: patente, marca, modelo, año y ubicación.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                  <li>✓ Formulario simple de 5 minutos</li>
                  <li>✓ Selección de fecha y hora</li>
                  <li>✓ Confirmación instantánea</li>
                  <li>✓ Disponible 24/7</li>
                </ul>
              </div>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white hidden lg:block"></div>
            <div class="lg:w-1/2 lg:pl-12">
              <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                <svg class="w-full h-32 text-orange-600" viewBox="0 0 200 100" fill="none">
                  <rect x="20" y="20" width="160" height="60" rx="8" stroke="currentColor" stroke-width="2" fill="none"/>
                  <rect x="30" y="30" width="20" height="3" fill="currentColor"/>
                  <rect x="30" y="38" width="30" height="3" fill="currentColor"/>
                  <rect x="30" y="46" width="25" height="3" fill="currentColor"/>
                  <rect x="30" y="54" width="35" height="3" fill="currentColor"/>
                  <rect x="30" y="62" width="15" height="3" fill="currentColor"/>
                  <rect x="140" y="35" width="30" height="8" rx="4" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Paso 2 -->
          <div class="relative flex items-center mb-16 lg:flex-row-reverse">
            <div class="lg:w-1/2 lg:pl-12">
              <div class="bg-white border-2 border-blue-200 rounded-2xl p-8 mr-auto lg:max-w-md hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-xl font-bold text-white">2</span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Confirmación</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  Nuestro equipo te contacta en menos de 2 horas para confirmar los detalles y asignar un perito certificado.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                  <li>✓ Llamada de confirmación</li>
                  <li>✓ Asignación de perito</li>
                  <li>✓ Instrucciones detalladas</li>
                  <li>✓ Documentos necesarios</li>
                </ul>
              </div>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white hidden lg:block"></div>
            <div class="lg:w-1/2 lg:pr-12">
              <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <svg class="w-full h-32 text-blue-600" viewBox="0 0 200 100" fill="none">
                  <rect x="60" y="20" width="80" height="50" rx="25" stroke="currentColor" stroke-width="2" fill="none"/>
                  <circle cx="100" cy="35" r="8" fill="currentColor"/>
                  <path d="M85 55 C85 50, 115 50, 115 55" stroke="currentColor" stroke-width="2" fill="none"/>
                  <path d="M20 45 Q60 35, 60 45" stroke="currentColor" stroke-width="2" fill="none"/>
                  <path d="M140 45 Q180 35, 180 45" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Paso 3 -->
          <div class="relative flex items-center mb-16">
            <div class="lg:w-1/2 lg:pr-12">
              <div class="bg-white border-2 border-green-200 rounded-2xl p-8 ml-auto lg:max-w-md hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-xl font-bold text-white">3</span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Evaluación</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  El perito realiza una inspección completa de 45-60 minutos evaluando todos los sistemas del vehículo.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                  <li>✓ Inspección visual externa</li>
                  <li>✓ Revisión mecánica</li>
                  <li>✓ Prueba de sistemas</li>
                  <li>✓ Documentación fotográfica</li>
                </ul>
              </div>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-white hidden lg:block"></div>
            <div class="lg:w-1/2 lg:pl-12">
              <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <svg class="w-full h-32 text-green-600" viewBox="0 0 200 100" fill="none">
                  <ellipse cx="100" cy="65" rx="70" ry="15" fill="currentColor" opacity="0.2"/>
                  <rect x="40" y="35" width="120" height="30" rx="15" fill="currentColor" opacity="0.3"/>
                  <circle cx="60" cy="65" r="8" stroke="currentColor" stroke-width="2" fill="white"/>
                  <circle cx="140" cy="65" r="8" stroke="currentColor" stroke-width="2" fill="white"/>
                  <rect x="90" y="25" width="20" height="10" rx="2" fill="currentColor"/>
                  <path d="M80 20 L100 15 L120 20" stroke="currentColor" stroke-width="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          <!-- Paso 4 -->
          <div class="relative flex items-center mb-16 lg:flex-row-reverse">
            <div class="lg:w-1/2 lg:pl-12">
              <div class="bg-white border-2 border-purple-200 rounded-2xl p-8 mr-auto lg:max-w-md hover:shadow-lg transition-shadow">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-xl font-bold text-white">4</span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-900">Informe</h3>
                </div>
                <p class="text-gray-600 mb-4">
                  Recibes el informe detallado en un máximo de 24 horas con validez oficial para todos los trámites.
                </p>
                <ul class="text-sm text-gray-600 space-y-2">
                  <li>✓ Informe digital y físico</li>
                  <li>✓ Fotos y documentación</li>
                  <li>✓ Validez oficial</li>
                  <li>✓ Entrega garantizada</li>
                </ul>
              </div>
            </div>
            <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-500 rounded-full border-4 border-white hidden lg:block"></div>
            <div class="lg:w-1/2 lg:pr-12">
              <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <svg class="w-full h-32 text-purple-600" viewBox="0 0 200 100" fill="none">
                  <rect x="60" y="20" width="80" height="60" rx="4" stroke="currentColor" stroke-width="2" fill="white"/>
                  <rect x="70" y="30" width="20" height="3" fill="currentColor"/>
                  <rect x="70" y="38" width="30" height="3" fill="currentColor"/>
                  <rect x="70" y="46" width="25" height="3" fill="currentColor"/>
                  <rect x="70" y="54" width="35" height="3" fill="currentColor"/>
                  <rect x="70" y="62" width="15" height="3" fill="currentColor"/>
                  <path d="M120 35 L130 45 L150 25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Qué Incluye -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            ¿Qué Incluye Nuestro Peritaje?
          </h2>
          <p class="text-xl text-gray-600">
            Evaluación completa de todos los sistemas críticos del vehículo
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Sistema de Frenos</h3>
            <ul class="text-gray-600 space-y-2">
              <li>• Eficacia de frenado</li>
              <li>• Estado de pastillas y discos</li>
              <li>• Sistema hidráulico</li>
              <li>• Freno de mano</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Motor y Transmisión</h3>
            <ul class="text-gray-600 space-y-2">
              <li>• Estado del motor</li>
              <li>• Transmisión y embrague</li>
              <li>• Sistema de enfriamiento</li>
              <li>• Niveles de fluidos</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Suspensión</h3>
            <ul class="text-gray-600 space-y-2">
              <li>• Amortiguadores</li>
              <li>• Resortes y espirales</li>
              <li>• Rótulas y terminales</li>
              <li>• Alineación y balanceo</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Carrocería y Chasis</h3>
            <ul class="text-gray-600 space-y-2">
              <li>• Integridad estructural</li>
              <li>• Oxidación y corrosión</li>
              <li>• Golpes y abolladuras</li>
              <li>• Pintura y acabados</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Sistemas Eléctricos</h3>
            <ul class="text-gray-600 space-y-2">
              <li>• Luces y señalización</li>
              <li>• Batería y alternador</li>
              <li>• Sistema de ignición</li>
              <li>• Aire acondicionado</li>
            </ul>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-4">
              <svg class="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Documentación</h3>
            <ul class="text-gray-600 space-y-2">
              <li>• Revisión técnica</li>
              <li>• Permiso de circulación</li>
              <li>• Documentos de propiedad</li>
              <li>• Multas pendientes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentos Necesarios -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Documentos Necesarios
          </h2>
          <p class="text-xl text-gray-600">
            Prepara estos documentos para agilizar el proceso
          </p>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Documentos Obligatorios</h3>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Permiso de circulación vigente</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Cédula de identidad del propietario</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Llaves del vehículo</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700">Última revisión técnica</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4">Documentos Adicionales</h3>
              <ul class="space-y-3">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-gray-700">Seguro vigente (si aplica)</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-gray-700">Historial de mantenciones</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-gray-700">Formulario de seguros (peritaje para seguros)</span>
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="text-gray-700">Manual del propietario</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8 p-4 bg-white rounded-xl border border-blue-200">
            <div class="flex items-start">
              <svg class="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h4 class="font-semibold text-gray-900 mb-2">Nota Importante</h4>
                <p class="text-gray-600 text-sm">
                  Si no tienes alguno de los documentos adicionales, no te preocupes. 
                  Podemos realizar el peritaje igualmente, pero tener la documentación completa 
                  ayuda a generar un informe más detallado y preciso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          ¿Listo para tu Peritaje?
        </h2>
        <p class="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
          Ahora que conoces todo el proceso, solicita tu peritaje vehicular con peritos certificados
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/peritajes/solicitar"
            class="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Solicitar Peritaje
          </NuxtLink>
          <NuxtLink 
            to="/peritajes/precios"
            class="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold rounded-xl transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
            Ver Precios
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO
const { 
  generatePeritajeMeta, 
  generateGuiaHowToSchema, 
  generateBreadcrumbSchema 
} = usePeritajeSEO()

useHead(generatePeritajeMeta('como-funciona'))

// HowTo Schema para el proceso
const howToSteps = [
  {
    name: "Solicitar Online",
    description: "Completa el formulario web con los datos de tu vehículo y selecciona fecha y hora",
    image: "https://autoventas360.com/images/paso-1-solicitar.jpg"
  },
  {
    name: "Confirmación",
    description: "Nuestro equipo te contacta para confirmar detalles y asignar perito certificado",
    image: "https://autoventas360.com/images/paso-2-confirmacion.jpg"
  },
  {
    name: "Evaluación",
    description: "El perito realiza inspección completa del vehículo en 45-60 minutos",
    image: "https://autoventas360.com/images/paso-3-evaluacion.jpg"
  },
  {
    name: "Informe",
    description: "Recibes el informe detallado en máximo 24 horas con validez oficial",
    image: "https://autoventas360.com/images/paso-4-informe.jpg"
  }
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateGuiaHowToSchema(
        "Cómo Funciona un Peritaje Vehicular en Chile",
        howToSteps
      ))
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateBreadcrumbSchema([
        { name: 'Inicio', url: 'https://autoventas360.com' },
        { name: 'Peritajes', url: 'https://autoventas360.com/peritajes' },
        { name: 'Cómo Funciona', url: 'https://autoventas360.com/peritajes/como-funciona' }
      ]))
    }
  ]
})
</script>