'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const carrocerias = [
      // Tipos principales
      'Sedán',
      'Hatchback', 
      'SUV',
      'Pickup',
      'Coupé',
      'Convertible',
      'Station Wagon',
      'Crossover',
      
      // Utilitarios y comerciales
      'Furgón',
      'Furgoneta',
      'Minivan',
      'Microbus',
      'Camión',
      'Camioneta',
      'Van',
      'Utilitario',
      
      // Deportivos y especiales
      'Roadster',
      'Liftback',
      'Fastback',
      'Todo Terreno',
      'Jeep',
      
      // Específicos del mercado chileno
      'Doble Cabina',
      'Cabina Simple',
      'Cabina y Media',
      'Familiar',
      'City Car',
      'Compacto',
      'Subcompacto'
    ];

    const fecha = new Date();
    const data = carrocerias.map(nombre => ({
      nombre,
      createdAt: fecha,
      updatedAt: fecha
    }));

    await queryInterface.bulkInsert('Carrocerias', data, {
      ignoreDuplicates: true // <--- evita errores si ya existen
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Carrocerias', null, {});
  }
};
