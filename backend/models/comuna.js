'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comuna extends Model {
    static associate(models) {
      // Cada comuna pertenece a una región
      Comuna.belongsTo(models.Region, {
        foreignKey: 'regionId',
        as: 'region'
      });

      // Una comuna puede estar asociada a muchos vehículos
      Comuna.hasMany(models.Vehiculo, {
        foreignKey: 'comunaId',
        as: 'vehiculos'
      });
    }
  }

  Comuna.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      regionId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Comuna',
      tableName: 'Comunas',
      timestamps: false
    }
  );

  return Comuna;
};
