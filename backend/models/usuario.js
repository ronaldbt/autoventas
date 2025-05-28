'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // definir asociaciones aquí más adelante
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
      type: DataTypes.ENUM('CLIENTE', 'CONCESIONARIO', 'PUBLICISTA', 'ADMIN'),
      defaultValue: 'CLIENTE'
    }
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};
