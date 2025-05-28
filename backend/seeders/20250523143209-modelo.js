'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const [results] = await queryInterface.sequelize.query(
      `SELECT id, nombre FROM Marcas`
    );

    // Verifica resultados
    if (!results.length) {
      throw new Error('No se encontraron marcas. Asegúrate de haber ejecutado el seeder de marcas primero.');
    }

    // Crear un mapa marcaNombre -> id
    const marcaIdMap = {};
    for (const m of results) {
      if (m.nombre && m.id) {
        marcaIdMap[m.nombre] = m.id;
      }
    }

    const modelos = [
      { nombre: 'Corolla', marca: 'Toyota' },
      { nombre: 'Yaris', marca: 'Toyota' },
      { nombre: 'Hilux', marca: 'Toyota' },
      { nombre: 'Civic', marca: 'Honda' },
      { nombre: 'Cruze', marca: 'Chevrolet' },
      { nombre: 'Focus', marca: 'Ford' },
      { nombre: 'Tucson', marca: 'Hyundai' },
      { nombre: 'Rio', marca: 'Kia' },
      { nombre: 'Sentra', marca: 'Nissan' },
      { nombre: 'Polo', marca: 'Volkswagen' },
      { nombre: '208', marca: 'Peugeot' },
      { nombre: 'Logan', marca: 'Renault' }
    ];

    const now = new Date();
    const modelosFinal = modelos.map(({ nombre, marca }) => {
      const marcaId = marcaIdMap[marca];
      if (!marcaId) throw new Error(`Marca no encontrada: ${marca}`);
      return {
        nombre,
        marcaId,
        createdAt: now,
        updatedAt: now
      };
    });

    await queryInterface.bulkInsert('Modelos', modelosFinal, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Modelos', null, {});
  }
};
