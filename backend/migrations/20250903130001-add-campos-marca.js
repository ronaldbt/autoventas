'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Marcas', 'popularidad', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Puntuación de popularidad de 0 a 100'
    });

    await queryInterface.addColumn('Marcas', 'logo_url', {
      type: Sequelize.STRING,
      allowNull: true,
      comment: 'URL del logo de la marca'
    });

    await queryInterface.addColumn('Marcas', 'cantidad_vehiculos', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: 'Cantidad de vehículos disponibles de esta marca'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Marcas', 'popularidad');
    await queryInterface.removeColumn('Marcas', 'logo_url');
    await queryInterface.removeColumn('Marcas', 'cantidad_vehiculos');
  }
};


