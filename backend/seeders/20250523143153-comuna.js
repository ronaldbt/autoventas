'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comunas', [
      { nombre: 'Arica', regionId: 1 },
      { nombre: 'Camarones', regionId: 1 },
      { nombre: 'Putre', regionId: 1 },
      { nombre: 'General Lagos', regionId: 1 },
      { nombre: 'Iquique', regionId: 2 },
      { nombre: 'Alto Hospicio', regionId: 2 },
      { nombre: 'Pozo Almonte', regionId: 2 },
      { nombre: 'Camiña', regionId: 2 },
      { nombre: 'Colchane', regionId: 2 },
      { nombre: 'Huara', regionId: 2 },
      { nombre: 'Pica', regionId: 2 },
      { nombre: 'Antofagasta', regionId: 3 },
      { nombre: 'Mejillones', regionId: 3 },
      { nombre: 'Sierra Gorda', regionId: 3 },
      { nombre: 'Taltal', regionId: 3 },
      { nombre: 'Calama', regionId: 3 },
      { nombre: 'Ollagüe', regionId: 3 },
      { nombre: 'San Pedro de Atacama', regionId: 3 },
      { nombre: 'Tocopilla', regionId: 3 },
      { nombre: 'María Elena', regionId: 3 },
      // ... aquí continúan todas las comunas ...
      { nombre: 'Torres del Paine', regionId: 16 }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comunas', null, {});
  }
};
