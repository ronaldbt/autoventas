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
