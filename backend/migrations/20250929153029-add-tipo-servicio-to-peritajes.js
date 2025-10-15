'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('peritajes', 'tipoServicio', {
      type: Sequelize.ENUM('domicilio', 'sucursal'),
      allowNull: true,
      defaultValue: 'domicilio'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('peritajes', 'tipoServicio');
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_peritajes_tipoServicio";');
  }
};
