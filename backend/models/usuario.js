'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasOne(models.Automotora, {
        foreignKey: 'usuarioId',
        as: 'automotora',
        onDelete: 'CASCADE'
      });
    }
    
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    rol: {
      type: DataTypes.ENUM('CLIENTE', 'AUTOMOTORA', 'PUBLICISTA', 'ADMIN', 'PERITO'),
      defaultValue: 'CLIENTE'
    }    
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};
