'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Marca extends Model {
    static associate(models) {
      // Una marca tiene muchos modelos
      Marca.hasMany(models.Modelo, {
        foreignKey: 'marcaId',
        as: 'modelos'
      });
    }
  }

  Marca.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      pais_origen: {
        type: DataTypes.STRING,
        allowNull: true
      },
      popularidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: 'Puntuación de popularidad de 0 a 100'
      },
      logo_url: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: 'URL del logo de la marca'
      },
      cantidad_vehiculos: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: 'Cantidad de vehículos disponibles de esta marca'
      }
    },
    {
      sequelize,
      modelName: 'Marca',
      tableName: 'Marcas',
      timestamps: false
    }
  );

  return Marca;
};
