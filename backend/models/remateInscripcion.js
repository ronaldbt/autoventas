'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RemateInscripcion extends Model {
    static associate(models) {
      // Remate
      RemateInscripcion.belongsTo(models.Remate, {
        foreignKey: 'remateId',
        as: 'remate'
      });

      // Usuario inscrito
      RemateInscripcion.belongsTo(models.Usuario, {
        foreignKey: 'usuarioId',
        as: 'usuario'
      });
    }
  }

  RemateInscripcion.init({
    remateId: { type: DataTypes.INTEGER, allowNull: false },
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
    estado: {
      type: DataTypes.ENUM('pendiente', 'aprobado', 'rechazado'),
      defaultValue: 'pendiente'
    },
    fechaInscripcion: { type: DataTypes.DATE, allowNull: false },
    verificado: { type: DataTypes.BOOLEAN, defaultValue: false },
    documentosVerificacion: { type: DataTypes.JSON },
    observaciones: { type: DataTypes.TEXT }
  }, {
    sequelize,
    modelName: 'RemateInscripcion',
    tableName: 'remate_inscripciones',
    timestamps: true
  });

  return RemateInscripcion;
};