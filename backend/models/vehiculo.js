'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vehiculo extends Model {
    static associate(models) {
      Vehiculo.belongsTo(models.Usuario, {
        foreignKey: 'vendedorId',
        as: 'vendedor'
      });

      Vehiculo.belongsTo(models.Marca, {
        foreignKey: 'marcaId',
        as: 'marca'
      });

      Vehiculo.belongsTo(models.Modelo, {
        foreignKey: 'modeloId',
        as: 'modelo'
      });

      Vehiculo.belongsTo(models.Transmision, {
        foreignKey: 'transmisionId',
        as: 'transmision'
      });

      Vehiculo.belongsTo(models.Carroceria, {
        foreignKey: 'carroceriaId',
        as: 'carroceria'
      });

      Vehiculo.belongsTo(models.Combustible, {
        foreignKey: 'combustibleId',
        as: 'combustible'
      });

      Vehiculo.belongsTo(models.Region, {
        foreignKey: 'regionId',
        as: 'region'
      });

      Vehiculo.belongsTo(models.Comuna, {
        foreignKey: 'comunaId',
        as: 'comuna'
      });

      // 🔧 Relación agregada: un vehículo pertenece a una automotora
      Vehiculo.belongsTo(models.Automotora, {
        foreignKey: 'automotoraId',
        as: 'automotora'
      });
    }
  }

  Vehiculo.init(
    {
      patente: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      version: DataTypes.STRING,
      anio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1900,
          max: new Date().getFullYear()
        }
      },
      colorExterior: DataTypes.STRING,
      colorInterior: DataTypes.STRING,
      kilometros: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0
        }
      },
      primerDueno: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          min: 0
        }
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      descripcion: DataTypes.TEXT,

      // Foreign Keys
      vendedorId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      automotoraId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Automotoras',
          key: 'id'
        }
      },
      marcaId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Marcas',
          key: 'id'
        }
      },
      modeloId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Modelos',
          key: 'id'
        }
      },
      transmisionId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Transmisiones',
          key: 'id'
        }
      },
      carroceriaId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Carrocerias',
          key: 'id'
        }
      },
      combustibleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Combustibles',
          key: 'id'
        }
      },
      regionId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Regiones',
          key: 'id'
        }
      },
      comunaId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Comunas',
          key: 'id'
        }
      },

      imagenes: {
        type: DataTypes.TEXT,
        get() {
          const raw = this.getDataValue('imagenes');
          return raw ? JSON.parse(raw) : [];
        },
        set(value) {
          this.setDataValue('imagenes', JSON.stringify(value));
        }
      },

      estado: {
        type: DataTypes.ENUM('ACTIVO', 'INACTIVO', 'VENDIDO'),
        defaultValue: 'ACTIVO'
      },

      visitas: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },

      publicadoEn: {
        type: DataTypes.TEXT,
        get() {
          const raw = this.getDataValue('publicadoEn');
          return raw ? JSON.parse(raw) : [];
        },
        set(value) {
          this.setDataValue('publicadoEn', JSON.stringify(value));
        }
      }
    },
    {
      sequelize,
      modelName: 'Vehiculo',
      tableName: 'Vehiculos',
      timestamps: true
    }
  );

  return Vehiculo;
};
