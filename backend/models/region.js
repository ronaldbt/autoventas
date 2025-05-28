'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    static associate(models) {
      // Una región tiene muchas comunas
      Region.hasMany(models.Comuna, {
        foreignKey: 'regionId',
        as: 'comunas'
      });

      // Una región puede estar asociada a muchos vehículos
      Region.hasMany(models.Vehiculo, {
        foreignKey: 'regionId',
        as: 'vehiculos'
      });
    }
  }

  Region.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      sequelize,
      modelName: 'Region',
      tableName: 'Regiones',
      timestamps: false
    }
  );

  return Region;
};
