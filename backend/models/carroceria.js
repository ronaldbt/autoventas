'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Carroceria extends Model {
    static associate(models) {
      // Una carrocería puede estar asociada a varios vehículos
      Carroceria.hasMany(models.Vehiculo, {
        foreignKey: 'carroceriaId',
        as: 'vehiculos'
      });
    }
  }

  Carroceria.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Carroceria',
      tableName: 'Carrocerias',
      timestamps: false
    }
  );

  return Carroceria;
};
