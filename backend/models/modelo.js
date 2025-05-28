// models/modelo.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Modelo extends Model {
    static associate(models) {
      // Cada modelo pertenece a una marca
      Modelo.belongsTo(models.Marca, {
        foreignKey: 'marcaId',
        as: 'marca'
      });
    }
  }

  Modelo.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      marcaId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Modelo',
      tableName: 'Modelos',
      timestamps: false
    }
  );

  return Modelo;
};
