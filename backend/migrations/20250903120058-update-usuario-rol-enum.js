'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Actualizar el enum de roles para incluir AUTOMOTORA y PERITO
    await queryInterface.sequelize.query(`
      ALTER TYPE "enum_Usuarios_rol" ADD VALUE IF NOT EXISTS 'AUTOMOTORA';
    `);
    
    await queryInterface.sequelize.query(`
      ALTER TYPE "enum_Usuarios_rol" ADD VALUE IF NOT EXISTS 'PERITO';
    `);
    
    // Actualizar los registros existentes de CONCESIONARIO a AUTOMOTORA
    await queryInterface.sequelize.query(`
      UPDATE "Usuarios" SET rol = 'AUTOMOTORA' WHERE rol = 'CONCESIONARIO';
    `);
  },

  async down (queryInterface, Sequelize) {
    // Revertir los cambios
    await queryInterface.sequelize.query(`
      UPDATE "Usuarios" SET rol = 'CONCESIONARIO' WHERE rol = 'AUTOMOTORA';
    `);
    
    // Nota: No podemos eliminar valores del enum en PostgreSQL
    // Los valores AUTOMOTORA y PERITO permanecerán en el enum
  }
};
