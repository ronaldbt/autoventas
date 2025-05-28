'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Vehiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patente: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      version: Sequelize.STRING,
      anio: Sequelize.INTEGER,
      colorExterior: Sequelize.STRING,
      colorInterior: Sequelize.STRING,
      kilometros: Sequelize.INTEGER,
      primerDueno: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      precio: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: Sequelize.TEXT,

      // Relaciones
      vendedorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      marcaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Marcas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      modeloId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Modelos',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      transmisionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Transmisiones',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      carroceriaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Carrocerias',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      combustibleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Combustibles',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      regionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Regiones',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      comunaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Comunas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },

      imagenes: Sequelize.TEXT,
      estado: {
        type: Sequelize.ENUM('ACTIVO', 'INACTIVO', 'VENDIDO'),
        defaultValue: 'ACTIVO'
      },
      visitas: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      publicadoEn: Sequelize.TEXT,

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Vehiculos');
  }
};
