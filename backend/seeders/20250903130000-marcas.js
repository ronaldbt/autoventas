'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const fecha = new Date();

    // Las 100 marcas más populares del mundo (2024-2025)
    const marcasPopulares = [
      // Top 20 - Marcas Premium y Masivas
      { nombre: 'Toyota', pais_origen: 'Japón', popularidad: 100 },
      { nombre: 'Volkswagen', pais_origen: 'Alemania', popularidad: 99 },
      { nombre: 'Ford', pais_origen: 'Estados Unidos', popularidad: 98 },
      { nombre: 'Honda', pais_origen: 'Japón', popularidad: 97 },
      { nombre: 'Nissan', pais_origen: 'Japón', popularidad: 96 },
      { nombre: 'Hyundai', pais_origen: 'Corea del Sur', popularidad: 95 },
      { nombre: 'Kia', pais_origen: 'Corea del Sur', popularidad: 94 },
      { nombre: 'BMW', pais_origen: 'Alemania', popularidad: 93 },
      { nombre: 'Mercedes-Benz', pais_origen: 'Alemania', popularidad: 92 },
      { nombre: 'Audi', pais_origen: 'Alemania', popularidad: 91 },
      { nombre: 'Chevrolet', pais_origen: 'Estados Unidos', popularidad: 90 },
      { nombre: 'Mazda', pais_origen: 'Japón', popularidad: 89 },
      { nombre: 'Subaru', pais_origen: 'Japón', popularidad: 88 },
      { nombre: 'Lexus', pais_origen: 'Japón', popularidad: 87 },
      { nombre: 'Infiniti', pais_origen: 'Japón', popularidad: 86 },
      { nombre: 'Acura', pais_origen: 'Japón', popularidad: 85 },
      { nombre: 'Volvo', pais_origen: 'Suecia', popularidad: 84 },
      { nombre: 'Porsche', pais_origen: 'Alemania', popularidad: 83 },
      { nombre: 'Jaguar', pais_origen: 'Reino Unido', popularidad: 82 },
      { nombre: 'Land Rover', pais_origen: 'Reino Unido', popularidad: 81 },

      // Marcas Europeas Premium
      { nombre: 'Ferrari', pais_origen: 'Italia', popularidad: 80 },
      { nombre: 'Lamborghini', pais_origen: 'Italia', popularidad: 79 },
      { nombre: 'Maserati', pais_origen: 'Italia', popularidad: 78 },
      { nombre: 'Bentley', pais_origen: 'Reino Unido', popularidad: 77 },
      { nombre: 'Rolls-Royce', pais_origen: 'Reino Unido', popularidad: 76 },
      { nombre: 'Aston Martin', pais_origen: 'Reino Unido', popularidad: 75 },
      { nombre: 'McLaren', pais_origen: 'Reino Unido', popularidad: 74 },
      { nombre: 'Bugatti', pais_origen: 'Francia', popularidad: 73 },
      { nombre: 'Pagani', pais_origen: 'Italia', popularidad: 72 },
      { nombre: 'Koenigsegg', pais_origen: 'Suecia', popularidad: 71 },

      // Marcas Europeas Populares
      { nombre: 'Peugeot', pais_origen: 'Francia', popularidad: 70 },
      { nombre: 'Renault', pais_origen: 'Francia', popularidad: 69 },
      { nombre: 'Citroën', pais_origen: 'Francia', popularidad: 68 },
      { nombre: 'Fiat', pais_origen: 'Italia', popularidad: 67 },
      { nombre: 'Alfa Romeo', pais_origen: 'Italia', popularidad: 66 },
      { nombre: 'Lancia', pais_origen: 'Italia', popularidad: 65 },
      { nombre: 'SEAT', pais_origen: 'España', popularidad: 64 },
      { nombre: 'Skoda', pais_origen: 'República Checa', popularidad: 63 },
      { nombre: 'Opel', pais_origen: 'Alemania', popularidad: 62 },
      { nombre: 'Mini', pais_origen: 'Reino Unido', popularidad: 61 },

      // Marcas Americanas
      { nombre: 'Cadillac', pais_origen: 'Estados Unidos', popularidad: 60 },
      { nombre: 'Lincoln', pais_origen: 'Estados Unidos', popularidad: 59 },
      { nombre: 'Buick', pais_origen: 'Estados Unidos', popularidad: 58 },
      { nombre: 'GMC', pais_origen: 'Estados Unidos', popularidad: 57 },
      { nombre: 'Chrysler', pais_origen: 'Estados Unidos', popularidad: 56 },
      { nombre: 'Dodge', pais_origen: 'Estados Unidos', popularidad: 55 },
      { nombre: 'Jeep', pais_origen: 'Estados Unidos', popularidad: 54 },
      { nombre: 'RAM', pais_origen: 'Estados Unidos', popularidad: 53 },
      { nombre: 'Tesla', pais_origen: 'Estados Unidos', popularidad: 52 },
      { nombre: 'Rivian', pais_origen: 'Estados Unidos', popularidad: 51 },

      // Marcas Asiáticas Emergentes
      { nombre: 'Genesis', pais_origen: 'Corea del Sur', popularidad: 50 },
      { nombre: 'Suzuki', pais_origen: 'Japón', popularidad: 49 },
      { nombre: 'Mitsubishi', pais_origen: 'Japón', popularidad: 48 },
      { nombre: 'Isuzu', pais_origen: 'Japón', popularidad: 47 },
      { nombre: 'Daihatsu', pais_origen: 'Japón', popularidad: 46 },
      { nombre: 'Chery', pais_origen: 'China', popularidad: 45 },
      { nombre: 'BYD', pais_origen: 'China', popularidad: 44 },
      { nombre: 'Geely', pais_origen: 'China', popularidad: 43 },
      { nombre: 'Great Wall', pais_origen: 'China', popularidad: 42 },
      { nombre: 'Haval', pais_origen: 'China', popularidad: 41 },

      // Marcas Chinas Modernas
      { nombre: 'MG', pais_origen: 'China', popularidad: 40 },
      { nombre: 'NIO', pais_origen: 'China', popularidad: 39 },
      { nombre: 'XPeng', pais_origen: 'China', popularidad: 38 },
      { nombre: 'Li Auto', pais_origen: 'China', popularidad: 37 },
      { nombre: 'Polestar', pais_origen: 'China', popularidad: 36 },
      { nombre: 'Lynk & Co', pais_origen: 'China', popularidad: 35 },
      { nombre: 'Weilai', pais_origen: 'China', popularidad: 34 },
      { nombre: 'Hongqi', pais_origen: 'China', popularidad: 33 },
      { nombre: 'JAC', pais_origen: 'China', popularidad: 32 },
      { nombre: 'Changan', pais_origen: 'China', popularidad: 31 },

      // Marcas Indias
      { nombre: 'Tata', pais_origen: 'India', popularidad: 30 },
      { nombre: 'Mahindra', pais_origen: 'India', popularidad: 29 },
      { nombre: 'Maruti Suzuki', pais_origen: 'India', popularidad: 28 },
      { nombre: 'Bajaj', pais_origen: 'India', popularidad: 27 },
      { nombre: 'Force', pais_origen: 'India', popularidad: 26 },

      // Marcas Rusas
      { nombre: 'Lada', pais_origen: 'Rusia', popularidad: 25 },
      { nombre: 'UAZ', pais_origen: 'Rusia', popularidad: 24 },
      { nombre: 'GAZ', pais_origen: 'Rusia', popularidad: 23 },

      // Marcas Brasileñas
      { nombre: 'Fiat', pais_origen: 'Brasil', popularidad: 22 },
      { nombre: 'Volkswagen', pais_origen: 'Brasil', popularidad: 21 },
      { nombre: 'Chevrolet', pais_origen: 'Brasil', popularidad: 20 },

      // Marcas Australianas
      { nombre: 'Holden', pais_origen: 'Australia', popularidad: 19 },
      { nombre: 'Ford', pais_origen: 'Australia', popularidad: 18 },

      // Marcas Coreanas Adicionales
      { nombre: 'SsangYong', pais_origen: 'Corea del Sur', popularidad: 17 },
      { nombre: 'Daewoo', pais_origen: 'Corea del Sur', popularidad: 16 },

      // Marcas Japonesas Adicionales
      { nombre: 'Datsun', pais_origen: 'Japón', popularidad: 15 },
      { nombre: 'Hino', pais_origen: 'Japón', popularidad: 14 },
      { nombre: 'Mitsubishi Fuso', pais_origen: 'Japón', popularidad: 13 },

      // Marcas Europeas Adicionales
      { nombre: 'Saab', pais_origen: 'Suecia', popularidad: 12 },
      { nombre: 'Smart', pais_origen: 'Alemania', popularidad: 11 },
      { nombre: 'Maybach', pais_origen: 'Alemania', popularidad: 10 },
      { nombre: 'Cupra', pais_origen: 'España', popularidad: 9 },
      { nombre: 'DS', pais_origen: 'Francia', popularidad: 8 },

      // Marcas Americanas Adicionales
      { nombre: 'Hummer', pais_origen: 'Estados Unidos', popularidad: 7 },
      { nombre: 'Saturn', pais_origen: 'Estados Unidos', popularidad: 6 },
      { nombre: 'Pontiac', pais_origen: 'Estados Unidos', popularidad: 5 },
      { nombre: 'Oldsmobile', pais_origen: 'Estados Unidos', popularidad: 4 },
      { nombre: 'Plymouth', pais_origen: 'Estados Unidos', popularidad: 3 },

      // Marcas de Lujo Adicionales
      { nombre: 'Lotus', pais_origen: 'Reino Unido', popularidad: 2 },
      { nombre: 'TVR', pais_origen: 'Reino Unido', popularidad: 1 }
    ];

    // Postgres: UPSERT por nombre para evitar duplicados y actualizar campos nuevos
    const values = marcasPopulares
      .map(m => `($$${m.nombre}$$, $$${m.pais_origen}$$, ${m.popularidad}, '${fecha.toISOString()}', '${fecha.toISOString()}')`)
      .join(',\n');

    const sql = `
      INSERT INTO "Marcas" ("nombre", "pais_origen", "popularidad", "createdAt", "updatedAt")
      VALUES ${values}
      ON CONFLICT ("nombre") DO UPDATE SET
        "pais_origen" = EXCLUDED."pais_origen",
        "popularidad" = EXCLUDED."popularidad",
        "updatedAt" = EXCLUDED."updatedAt";
    `;

    await queryInterface.sequelize.query(sql);
    console.log('✅ Marcas populares insertadas/actualizadas (upsert)');
  },

  async down(queryInterface, Sequelize) {
    // Revertir: eliminar popularidad (no borrar marcas existentes)
    await queryInterface.sequelize.query(`
      UPDATE "Marcas"
      SET "popularidad" = NULL
      WHERE "popularidad" IS NOT NULL;
    `);
  }
};
