// utils/logoService.js

// Base de datos de logos de marcas populares
const logosMarcas = {
  // Top 20 Marcas Mundiales
  'Toyota': 'https://cdn.worldvectorlogo.com/logos/toyota.svg',
  'Volkswagen': 'https://cdn.worldvectorlogo.com/logos/volkswagen-1.svg',
  'Ford': 'https://cdn.worldvectorlogo.com/logos/ford-4.svg',
  'Honda': 'https://cdn.worldvectorlogo.com/logos/honda.svg',
  'Nissan': 'https://cdn.worldvectorlogo.com/logos/nissan-9.svg',
  'Hyundai': 'https://cdn.worldvectorlogo.com/logos/hyundai-4.svg',
  'Kia': 'https://cdn.worldvectorlogo.com/logos/kia-motors.svg',
  'BMW': 'https://cdn.worldvectorlogo.com/logos/bmw.svg',
  'Mercedes-Benz': 'https://cdn.worldvectorlogo.com/logos/mercedes-benz-9.svg',
  'Audi': 'https://cdn.worldvectorlogo.com/logos/audi-2.svg',
  'Chevrolet': 'https://cdn.worldvectorlogo.com/logos/chevrolet.svg',
  'Mazda': 'https://cdn.worldvectorlogo.com/logos/mazda-6.svg',
  'Subaru': 'https://cdn.worldvectorlogo.com/logos/subaru-6.svg',
  'Lexus': 'https://cdn.worldvectorlogo.com/logos/lexus-6.svg',
  'Infiniti': 'https://cdn.worldvectorlogo.com/logos/infiniti-3.svg',
  'Acura': 'https://cdn.worldvectorlogo.com/logos/acura-2.svg',
  'Volvo': 'https://cdn.worldvectorlogo.com/logos/volvo-2.svg',
  'Porsche': 'https://cdn.worldvectorlogo.com/logos/porsche-4.svg',
  'Jaguar': 'https://cdn.worldvectorlogo.com/logos/jaguar-4.svg',
  'Land Rover': 'https://cdn.worldvectorlogo.com/logos/land-rover-2.svg',

  // Marcas Europeas Premium
  'Ferrari': 'https://cdn.worldvectorlogo.com/logos/ferrari-9.svg',
  'Lamborghini': 'https://cdn.worldvectorlogo.com/logos/lamborghini-4.svg',
  'Maserati': 'https://cdn.worldvectorlogo.com/logos/maserati-2.svg',
  'Bentley': 'https://cdn.worldvectorlogo.com/logos/bentley-2.svg',
  'Rolls-Royce': 'https://cdn.worldvectorlogo.com/logos/rolls-royce-3.svg',
  'Aston Martin': 'https://cdn.worldvectorlogo.com/logos/aston-martin-2.svg',
  'McLaren': 'https://cdn.worldvectorlogo.com/logos/mclaren-2.svg',
  'Bugatti': 'https://cdn.worldvectorlogo.com/logos/bugatti-2.svg',
  'Pagani': 'https://cdn.worldvectorlogo.com/logos/pagani-2.svg',
  'Koenigsegg': 'https://cdn.worldvectorlogo.com/logos/koenigsegg-2.svg',

  // Marcas Europeas Populares
  'Peugeot': 'https://cdn.worldvectorlogo.com/logos/peugeot.svg',
  'Renault': 'https://cdn.worldvectorlogo.com/logos/renault-4.svg',
  'Citroën': 'https://cdn.worldvectorlogo.com/logos/citroen-2.svg',
  'Fiat': 'https://cdn.worldvectorlogo.com/logos/fiat-2.svg',
  'Alfa Romeo': 'https://cdn.worldvectorlogo.com/logos/alfa-romeo-2.svg',
  'Lancia': 'https://cdn.worldvectorlogo.com/logos/lancia-2.svg',
  'SEAT': 'https://cdn.worldvectorlogo.com/logos/seat-2.svg',
  'Skoda': 'https://cdn.worldvectorlogo.com/logos/skoda-2.svg',
  'Opel': 'https://cdn.worldvectorlogo.com/logos/opel-2.svg',
  'Mini': 'https://cdn.worldvectorlogo.com/logos/mini-2.svg',

  // Marcas Americanas
  'Cadillac': 'https://cdn.worldvectorlogo.com/logos/cadillac-2.svg',
  'Lincoln': 'https://cdn.worldvectorlogo.com/logos/lincoln-2.svg',
  'Buick': 'https://cdn.worldvectorlogo.com/logos/buick-2.svg',
  'GMC': 'https://cdn.worldvectorlogo.com/logos/gmc-2.svg',
  'Chrysler': 'https://cdn.worldvectorlogo.com/logos/chrysler-2.svg',
  'Dodge': 'https://cdn.worldvectorlogo.com/logos/dodge-2.svg',
  'Jeep': 'https://cdn.worldvectorlogo.com/logos/jeep-2.svg',
  'RAM': 'https://cdn.worldvectorlogo.com/logos/ram-2.svg',
  'Tesla': 'https://cdn.worldvectorlogo.com/logos/tesla-9.svg',
  'Rivian': 'https://cdn.worldvectorlogo.com/logos/rivian-2.svg',

  // Marcas Asiáticas
  'Genesis': 'https://cdn.worldvectorlogo.com/logos/genesis-2.svg',
  'Suzuki': 'https://cdn.worldvectorlogo.com/logos/suzuki-1.svg',
  'Mitsubishi': 'https://cdn.worldvectorlogo.com/logos/mitsubishi.svg',
  'Isuzu': 'https://cdn.worldvectorlogo.com/logos/isuzu-2.svg',
  'Daihatsu': 'https://cdn.worldvectorlogo.com/logos/daihatsu-2.svg',
  'Chery': 'https://cdn.worldvectorlogo.com/logos/chery-6.svg',
  'BYD': 'https://cdn.worldvectorlogo.com/logos/byd-2.svg',
  'Geely': 'https://cdn.worldvectorlogo.com/logos/geely-2.svg',
  'Great Wall': 'https://cdn.worldvectorlogo.com/logos/great-wall-2.svg',
  'Haval': 'https://cdn.worldvectorlogo.com/logos/haval-2.svg',

  // Marcas Chinas Modernas
  'MG': 'https://cdn.worldvectorlogo.com/logos/mg-2.svg',
  'NIO': 'https://cdn.worldvectorlogo.com/logos/nio-2.svg',
  'XPeng': 'https://cdn.worldvectorlogo.com/logos/xpeng-2.svg',
  'Li Auto': 'https://cdn.worldvectorlogo.com/logos/li-auto-2.svg',
  'Polestar': 'https://cdn.worldvectorlogo.com/logos/polestar-2.svg',
  'Lynk & Co': 'https://cdn.worldvectorlogo.com/logos/lynk-co-2.svg',
  'Weilai': 'https://cdn.worldvectorlogo.com/logos/weilai-2.svg',
  'Hongqi': 'https://cdn.worldvectorlogo.com/logos/hongqi-2.svg',
  'JAC': 'https://cdn.worldvectorlogo.com/logos/jac-2.svg',
  'Changan': 'https://cdn.worldvectorlogo.com/logos/changan-2.svg',

  // Marcas Indias
  'Tata': 'https://cdn.worldvectorlogo.com/logos/tata-2.svg',
  'Mahindra': 'https://cdn.worldvectorlogo.com/logos/mahindra-2.svg',
  'Maruti Suzuki': 'https://cdn.worldvectorlogo.com/logos/maruti-suzuki-2.svg',
  'Bajaj': 'https://cdn.worldvectorlogo.com/logos/bajaj-2.svg',
  'Force': 'https://cdn.worldvectorlogo.com/logos/force-2.svg',

  // Marcas Rusas
  'Lada': 'https://cdn.worldvectorlogo.com/logos/lada-2.svg',
  'UAZ': 'https://cdn.worldvectorlogo.com/logos/uaz-2.svg',
  'GAZ': 'https://cdn.worldvectorlogo.com/logos/gaz-2.svg',

  // Marcas Brasileñas
  'Holden': 'https://cdn.worldvectorlogo.com/logos/holden-2.svg',

  // Marcas Coreanas Adicionales
  'SsangYong': 'https://cdn.worldvectorlogo.com/logos/ssangyong-2.svg',
  'Daewoo': 'https://cdn.worldvectorlogo.com/logos/daewoo-2.svg',

  // Marcas Japonesas Adicionales
  'Datsun': 'https://cdn.worldvectorlogo.com/logos/datsun-2.svg',
  'Hino': 'https://cdn.worldvectorlogo.com/logos/hino-2.svg',
  'Mitsubishi Fuso': 'https://cdn.worldvectorlogo.com/logos/mitsubishi-fuso-2.svg',

  // Marcas Europeas Adicionales
  'Saab': 'https://cdn.worldvectorlogo.com/logos/saab-2.svg',
  'Smart': 'https://cdn.worldvectorlogo.com/logos/smart-2.svg',
  'Maybach': 'https://cdn.worldvectorlogo.com/logos/maybach-2.svg',
  'Cupra': 'https://cdn.worldvectorlogo.com/logos/cupra-2.svg',
  'DS': 'https://cdn.worldvectorlogo.com/logos/ds-2.svg',

  // Marcas Americanas Adicionales
  'Hummer': 'https://cdn.worldvectorlogo.com/logos/hummer-2.svg',
  'Saturn': 'https://cdn.worldvectorlogo.com/logos/saturn-2.svg',
  'Pontiac': 'https://cdn.worldvectorlogo.com/logos/pontiac-2.svg',
  'Oldsmobile': 'https://cdn.worldvectorlogo.com/logos/oldsmobile-2.svg',
  'Plymouth': 'https://cdn.worldvectorlogo.com/logos/plymouth-2.svg',

  // Marcas de Lujo Adicionales
  'Lotus': 'https://cdn.worldvectorlogo.com/logos/lotus-2.svg',
  'TVR': 'https://cdn.worldvectorlogo.com/logos/tvr-2.svg'
}

// Colores para placeholders
const coloresPlaceholder = [
  'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500',
  'bg-teal-500', 'bg-cyan-500', 'bg-lime-500', 'bg-amber-500'
]

export const logoService = {
  /**
   * Obtiene el logo de una marca
   * @param {string} nombreMarca - Nombre de la marca
   * @param {string} logoUrl - URL del logo desde la base de datos (opcional)
   * @returns {string} URL del logo o placeholder
   */
  obtenerLogo(nombreMarca, logoUrl = null) {
    // Si hay URL en la base de datos, usarla
    if (logoUrl) {
      return logoUrl
    }
    
    // Buscar en la base de datos local
    return logosMarcas[nombreMarca] || this.generarPlaceholder(nombreMarca)
  },

  /**
   * Genera un placeholder para marcas sin logo
   * @param {string} nombreMarca - Nombre de la marca
   * @returns {string} URL del placeholder
   */
  generarPlaceholder(nombreMarca) {
    const inicial = nombreMarca.charAt(0).toUpperCase()
    const colorIndex = nombreMarca.charCodeAt(0) % coloresPlaceholder.length
    const color = coloresPlaceholder[colorIndex].replace('bg-', '').replace('-500', '')
    
    return `https://via.placeholder.com/64x64/${color}/ffffff?text=${inicial}`
  },

  /**
   * Verifica si una marca tiene logo
   * @param {string} nombreMarca - Nombre de la marca
   * @returns {boolean} True si tiene logo
   */
  tieneLogo(nombreMarca) {
    return !!logosMarcas[nombreMarca]
  },

  /**
   * Obtiene todas las marcas con logos disponibles
   * @returns {Array} Array de nombres de marcas con logos
   */
  obtenerMarcasConLogos() {
    return Object.keys(logosMarcas)
  },

  /**
   * Agrega un logo personalizado
   * @param {string} nombreMarca - Nombre de la marca
   * @param {string} urlLogo - URL del logo
   */
  agregarLogo(nombreMarca, urlLogo) {
    logosMarcas[nombreMarca] = urlLogo
  }
}


