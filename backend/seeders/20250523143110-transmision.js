'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transmisiones = [
      'Manual',
      'Automática',
      'Automática Secuencial',
      'CVT',
      'DCT (Doble Embrague)',
      'Tiptronic',
      'SMG',
      'AMT (Transmisión Manual Automatizada)',
      'Multitronic',
      'PowerShift',
      'Hydramatic',
      'Semi-Automática',
      'Transmisión Directa Eléctrica'
    ];

    const fecha = new Date();
    const data = transmisiones.map(nombre => ({
      nombre,
      createdAt: fecha,
      updatedAt: fecha
    }));

    await queryInterface.bulkInsert('Transmisiones', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transmisiones', null, {});
  }
};
