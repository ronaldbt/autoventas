'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Combustible extends Model {
    static associate(models) {
      // Un tipo de combustible puede estar asociado a varios vehículos
      Combustible.hasMany(models.Vehiculo, {
        foreignKey: 'combustibleId',
        as: 'vehiculos'
      });
    }
  }

  Combustible.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Combustible',
      tableName: 'Combustibles',
      timestamps: false
    }
  );

  return Combustible;
};
