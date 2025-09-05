'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('peritajes', 'hora', {
      type: Sequelize.TIME,
      allowNull: true
    });
    
    await queryInterface.addColumn('peritajes', 'nombre', {
      type: Sequelize.STRING,
      allowNull: true
    });
    
    await queryInterface.addColumn('peritajes', 'ano', {
      type: Sequelize.INTEGER,
      allowNull: true
    });
    
    await queryInterface.addColumn('peritajes', 'motivo', {
      type: Sequelize.STRING,
      allowNull: true
    });
    
    await queryInterface.addColumn('peritajes', 'comentarios', {
      type: Sequelize.TEXT,
      allowNull: true
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('peritajes', 'hora');
    await queryInterface.removeColumn('peritajes', 'nombre');
    await queryInterface.removeColumn('peritajes', 'ano');
    await queryInterface.removeColumn('peritajes', 'motivo');
    await queryInterface.removeColumn('peritajes', 'comentarios');
  }
};