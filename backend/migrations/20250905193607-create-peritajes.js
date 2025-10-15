'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('peritajes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // INFORMACIÓN GENERAL
      patente: { type: Sequelize.STRING, allowNull: false },
      servicio: { type: Sequelize.STRING },
      centroServicio: { type: Sequelize.STRING },
      fecha: { type: Sequelize.DATE },
      secuencia: { type: Sequelize.STRING },
      cliente: { type: Sequelize.STRING },
      telefono: { type: Sequelize.STRING },
      direccion: { type: Sequelize.STRING },
      email: { type: Sequelize.STRING },
      marca: { type: Sequelize.STRING },
      modelo: { type: Sequelize.STRING },
      color: { type: Sequelize.STRING },
      propietario: { type: Sequelize.STRING },
      valorAvaluo: { type: Sequelize.DECIMAL },
      numeroMotor: { type: Sequelize.STRING },
      numeroChasis: { type: Sequelize.STRING },
      numeroSerial: { type: Sequelize.STRING },
      tipoTransporte: { type: Sequelize.STRING },
      asegurado: { type: Sequelize.STRING },

      // FRENOS
      frenos_eficacia_delantera: { type: Sequelize.DECIMAL },
      frenos_eficacia_trasera: { type: Sequelize.DECIMAL },
      frenos_diferencia_fuerza_delantera: { type: Sequelize.DECIMAL },
      frenos_diferencia_fuerza_trasera: { type: Sequelize.DECIMAL },
      frenos_ovalizacion: { type: Sequelize.JSON },
      frenos_esfuerzo: { type: Sequelize.DECIMAL },
      frenos_peso: { type: Sequelize.DECIMAL },
      frenos_total: { type: Sequelize.DECIMAL },
      frenos_estado_general: { type: Sequelize.ENUM('BUENO', 'REGULAR', 'MALO') },

      // SUSPENSIÓN
      suspension_delantera_izquierda: { type: Sequelize.DECIMAL },
      suspension_delantera_derecha: { type: Sequelize.DECIMAL },
      suspension_trasera_izquierda: { type: Sequelize.DECIMAL },
      suspension_trasera_derecha: { type: Sequelize.DECIMAL },
      suspension_diferencia_delantera: { type: Sequelize.DECIMAL },
      suspension_diferencia_trasera: { type: Sequelize.DECIMAL },
      suspension_estado_general: { type: Sequelize.ENUM('BUENO', 'REGULAR', 'MALO') },

      // CARROCERÍA y CHASIS
      carroceria: { type: Sequelize.JSON },
      chasis: { type: Sequelize.JSON },

      // LLANTAS
      llantas: { type: Sequelize.JSON },

      // HISTORIAL DE REVISIONES
      historial_revisiones: { type: Sequelize.JSON },

      // OBSERVACIONES
      observaciones_generales: { type: Sequelize.TEXT },

      // ADMINISTRATIVO
      peritoId: { type: Sequelize.INTEGER },
      clienteId: { type: Sequelize.INTEGER },
      vehiculoId: { type: Sequelize.INTEGER },
      precio: { type: Sequelize.DECIMAL },
      comisionPerito: { type: Sequelize.DECIMAL },
      tipo: { 
        type: Sequelize.ENUM('peritaje', 'solicitud', 'informe'),
        defaultValue: 'peritaje'
      },
      titulo: { type: Sequelize.STRING },
      descripcion: { type: Sequelize.TEXT },
      estado: {
        type: Sequelize.ENUM('pendiente', 'en_proceso', 'completado', 'cancelado'),
        defaultValue: 'pendiente',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('peritajes');
  }
};
