'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Vehiculos', 'automotoraId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Automotoras',
        key: 'id'
      },
      allowNull: true, // Puedes poner false si todos los vehículos deben tener automotora
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Vehiculos', 'automotoraId');
  }
};
