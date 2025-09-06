'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('remate_inscripciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      remateId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'remates', key: 'id' },
        onDelete: 'CASCADE'
      },
      usuarioId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
        onDelete: 'CASCADE'
      },
      estado: {
        type: Sequelize.ENUM('pendiente', 'aprobado', 'rechazado'),
        defaultValue: 'pendiente'
      },
      fechaInscripcion: { type: Sequelize.DATE, allowNull: false },
      verificado: { type: Sequelize.BOOLEAN, defaultValue: false },
      documentosVerificacion: { type: Sequelize.JSON },
      observaciones: { type: Sequelize.TEXT },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });

    // Índice único para evitar inscripciones duplicadas
    await queryInterface.addIndex('remate_inscripciones', ['remateId', 'usuarioId'], {
      unique: true,
      name: 'unique_remate_usuario'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('remate_inscripciones');
  }
};