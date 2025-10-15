'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Automotora extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Automotora.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario'
      });
    
      Automotora.hasMany(models.Vehiculo, {
        foreignKey: 'automotoraId',
        as: 'autos'
      });
    }
    
    
  }
  Automotora.init({
    nombre: DataTypes.STRING,
    slug: DataTypes.STRING,
    logo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    email: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Automotora',
  });
  return Automotora;
};