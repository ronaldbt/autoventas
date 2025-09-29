'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('remates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: { type: Sequelize.STRING, allowNull: false },
      descripcion: { type: Sequelize.TEXT },
      slug: { type: Sequelize.STRING, unique: true },
      
      // FECHAS Y ESTADO
      fechaHoraInicio: { type: Sequelize.DATE, allowNull: false },
      fechaHoraFin: { type: Sequelize.DATE },
      duracionMinutos: { type: Sequelize.INTEGER, defaultValue: 30 },
      estado: {
        type: Sequelize.ENUM('programado', 'en_vivo', 'finalizado', 'cancelado'),
        defaultValue: 'programado'
      },
      
      // VEHÍCULO
      vehiculoId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Vehiculos', key: 'id' },
        onDelete: 'CASCADE'
      },
      
      // PRECIOS Y PUJAS
      precioBase: { type: Sequelize.DECIMAL(15, 2), allowNull: false },
      precioReserva: { type: Sequelize.DECIMAL(15, 2) },
      incrementoMinimo: { type: Sequelize.DECIMAL(15, 2), defaultValue: 50000 },
      pujaActual: { type: Sequelize.DECIMAL(15, 2) },
      precioFinal: { type: Sequelize.DECIMAL(15, 2) },
      
      // PARTICIPANTES
      participantesInscritos: { type: Sequelize.INTEGER, defaultValue: 0 },
      participantesActivos: { type: Sequelize.INTEGER, defaultValue: 0 },
      totalPujas: { type: Sequelize.INTEGER, defaultValue: 0 },
      
      // GESTIÓN
      organizadorId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Usuarios', key: 'id' },
        onDelete: 'CASCADE'
      },
      vendedorId: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Usuarios', key: 'id' },
        onDelete: 'CASCADE'
      },
      ganadorId: { 
        type: Sequelize.INTEGER,
        references: { model: 'Usuarios', key: 'id' },
        onDelete: 'SET NULL'
      },
      
      // CONFIGURACIÓN
      requiereInscripcion: { type: Sequelize.BOOLEAN, defaultValue: true },
      requiereVerificacion: { type: Sequelize.BOOLEAN, defaultValue: true },
      comisionPorcentaje: { type: Sequelize.DECIMAL(5, 2), defaultValue: 5.0 },
      esDestacado: { type: Sequelize.BOOLEAN, defaultValue: false },
      
      // METADATA
      observaciones: { type: Sequelize.TEXT },
      condicionesEspeciales: { type: Sequelize.TEXT },
      
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('remates');
  }
};
