'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const timestamp = new Date();

    const regiones = [
      { id: 1, nombre: 'Arica y Parinacota', numero: '15', abreviacion: 'XV', createdAt: timestamp, updatedAt: timestamp },
      { id: 2, nombre: 'Tarapacá', numero: '01', abreviacion: 'I', createdAt: timestamp, updatedAt: timestamp },
      { id: 3, nombre: 'Antofagasta', numero: '02', abreviacion: 'II', createdAt: timestamp, updatedAt: timestamp },
      { id: 4, nombre: 'Atacama', numero: '03', abreviacion: 'III', createdAt: timestamp, updatedAt: timestamp },
      { id: 5, nombre: 'Coquimbo', numero: '04', abreviacion: 'IV', createdAt: timestamp, updatedAt: timestamp },
      { id: 6, nombre: 'Valparaíso', numero: '05', abreviacion: 'V', createdAt: timestamp, updatedAt: timestamp },
      { id: 7, nombre: 'Metropolitana de Santiago', numero: '13', abreviacion: 'RM', createdAt: timestamp, updatedAt: timestamp },
      { id: 8, nombre: 'Libertador General Bernardo O’Higgins', numero: '06', abreviacion: 'VI', createdAt: timestamp, updatedAt: timestamp },
      { id: 9, nombre: 'Maule', numero: '07', abreviacion: 'VII', createdAt: timestamp, updatedAt: timestamp },
      { id: 10, nombre: 'Ñuble', numero: '16', abreviacion: 'XVI', createdAt: timestamp, updatedAt: timestamp },
      { id: 11, nombre: 'Biobío', numero: '08', abreviacion: 'VIII', createdAt: timestamp, updatedAt: timestamp },
      { id: 12, nombre: 'La Araucanía', numero: '09', abreviacion: 'IX', createdAt: timestamp, updatedAt: timestamp },
      { id: 13, nombre: 'Los Ríos', numero: '14', abreviacion: 'XIV', createdAt: timestamp, updatedAt: timestamp },
      { id: 14, nombre: 'Los Lagos', numero: '10', abreviacion: 'X', createdAt: timestamp, updatedAt: timestamp },
      { id: 15, nombre: 'Aysén del General Carlos Ibáñez del Campo', numero: '11', abreviacion: 'XI', createdAt: timestamp, updatedAt: timestamp },
      { id: 16, nombre: 'Magallanes y de la Antártica Chilena', numero: '12', abreviacion: 'XII', createdAt: timestamp, updatedAt: timestamp }
    ];

    await queryInterface.bulkInsert('Regiones', regiones, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Regiones', null, {});
  }
};
