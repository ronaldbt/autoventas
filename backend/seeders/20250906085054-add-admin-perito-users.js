'use strict';
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedAdminPassword = await bcryptjs.hash('yosoy9', 10);
    const hashedPeritoPassword = await bcryptjs.hash('perito123', 10);

    await queryInterface.bulkInsert('Usuarios', [
      {
        nombre: 'Ronald Bravo',
        email: 'ronald.bravo.t@gmail.com',
        password: hashedAdminPassword,
        rol: 'ADMIN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Perito Test',
        email: 'perito1@test.com',
        password: hashedPeritoPassword,
        rol: 'PERITO',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', {
      email: ['ronald.bravo.t@gmail.com', 'perito1@test.com']
    }, {});
  }
};
