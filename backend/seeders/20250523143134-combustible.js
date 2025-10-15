'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Combustibles', [
      { nombre: 'Gasolina', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Diésel', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Eléctrico', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Híbrido Gasolina', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Híbrido Diésel', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Gas Natural Comprimido (GNC)', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Gas Licuado de Petróleo (GLP)', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Etanol', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Hidrógeno', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Microhíbrido (MHEV)', createdAt: new Date(), updatedAt: new Date() },
      { nombre: 'Plug-in Hybrid (PHEV)', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Combustibles', null, {});
  }
};
