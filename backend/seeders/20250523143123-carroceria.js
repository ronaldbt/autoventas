'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const carrocerias = [
      'Sedán', 'Hatchback', 'SUV', 'Pickup', 'Coupé', 'Convertible',
      'Station Wagon', 'Furgón', 'Minivan', 'Camión', 'Todo Terreno',
      'Utilitario', 'Liftback', 'Fastback', 'Roadster', 'Crossover', 'Microbús'
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
