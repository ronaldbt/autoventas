<template>
  <footer class="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
    <!-- Patrón decorativo de fondo -->
    <div class="absolute inset-0 opacity-5">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #f97316 2px, transparent 2px); background-size: 50px 50px;"></div>
    </div>

    <div class="relative z-10">
      <!-- Contenido principal del footer -->
      <div class="max-w-7xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <!-- Enlaces -->
          <div class="space-y-6">
            <div class="flex items-center space-x-2 mb-6">
              <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                Autoventas360
              </h3>
            </div>
            <ul class="space-y-3">
              <li><a href="#" class="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group">
                <span class="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-orange-500 transition-colors duration-200"></span>
                <span>Autos en venta</span>
              </a></li>
              <li><a href="#" class="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group">
                <span class="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-orange-500 transition-colors duration-200"></span>
                <span>Concesionarios</span>
              </a></li>
              <li><a href="#" class="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group">
                <span class="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-orange-500 transition-colors duration-200"></span>
                <span>Contacto</span>
              </a></li>
              <li><a href="#" class="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group">
                <span class="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-orange-500 transition-colors duration-200"></span>
                <span>Términos y condiciones</span>
              </a></li>
              <li><a href="#" class="text-slate-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2 group">
                <span class="w-1 h-1 bg-blue-500 rounded-full group-hover:bg-orange-500 transition-colors duration-200"></span>
                <span>Políticas de privacidad</span>
              </a></li>
            </ul>
          </div>

          <!-- Contacto -->
          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <span>Contacto</span>
            </h3>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p class="font-semibold text-slate-200">Dirección:</p>
                  <p class="text-slate-400">Av. Los Motores 123, Santiago</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p class="font-semibold text-slate-200">Correo:</p>
                  <p class="text-slate-400">contacto@autoventas360.cl</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Pago en línea -->
          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <span>Pago en línea</span>
            </h3>
            <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/06/Webpay_logo.png"
                alt="WebPay"
                class="h-12 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>

          <!-- Redes sociales -->
          <div class="space-y-6">
            <h3 class="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
              <div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2"></path>
                </svg>
              </div>
              <span>Síguenos</span>
            </h3>
            <div class="flex space-x-4">
              <a href="#" class="group relative">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div class="relative bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </a>
              <a href="#" class="group relative">
                <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div class="relative bg-gradient-to-r from-orange-500 to-pink-500 p-3 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-white/10">
        <div class="max-w-7xl mx-auto px-6 py-6">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <!-- Créditos -->
            <div class="text-center md:text-left">
              <p class="text-slate-400 text-sm">
                © 2024 <span class="font-semibold text-blue-400">Autoventas360</span>. 
                Diseñado y desarrollado con 
                <span class="inline-block w-4 h-4 text-red-500 mx-1">❤️</span> 
                para concesionarios.
              </p>
            </div>
            
            <!-- Enlaces adicionales -->
            <div class="flex space-x-6 text-sm">
              <a href="#" class="text-slate-400 hover:text-blue-400 transition-colors duration-200">Ayuda</a>
              <a href="#" class="text-slate-400 hover:text-blue-400 transition-colors duration-200">Soporte</a>
              <a href="#" class="text-slate-400 hover:text-blue-400 transition-colors duration-200">API</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
  