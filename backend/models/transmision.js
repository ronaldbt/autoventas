'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transmision extends Model {
    static associate(models) {
      Transmision.hasMany(models.Vehiculo, {
        foreignKey: 'transmisionId',
        as: 'vehiculos'
      });
    }
  }

  Transmision.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Transmision',
      tableName: 'Transmisiones',
      timestamps: false
    }
  );

  return Transmision;
};
