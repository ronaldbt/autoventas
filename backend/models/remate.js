'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Remate extends Model {
    static associate(models) {
      // Vehículo en remate
      Remate.belongsTo(models.Vehiculo, {
        foreignKey: 'vehiculoId',
        as: 'vehiculo'
      });

      // Organizador (admin)
      Remate.belongsTo(models.Usuario, {
        foreignKey: 'organizadorId',
        as: 'organizador'
      });

      // Vendedor (propietario del vehículo)
      Remate.belongsTo(models.Usuario, {
        foreignKey: 'vendedorId',
        as: 'vendedor'
      });

      // Ganador del remate
      Remate.belongsTo(models.Usuario, {
        foreignKey: 'ganadorId',
        as: 'ganador'
      });

      // Inscripciones al remate
      Remate.hasMany(models.RemateInscripcion, {
        foreignKey: 'remateId',
        as: 'inscripciones'
      });

      // Comentar pujas por ahora hasta crear el modelo
      // Remate.hasMany(models.RematesPuja, {
      //   foreignKey: 'remateId',
      //   as: 'pujas'
      // });
    }
  }

  Remate.init({
    titulo: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT },
    slug: { type: DataTypes.STRING, unique: true },
    
    // FECHAS Y ESTADO
    fechaHoraInicio: { type: DataTypes.DATE, allowNull: false },
    fechaHoraFin: { type: DataTypes.DATE },
    duracionMinutos: { type: DataTypes.INTEGER, defaultValue: 30 },
    estado: {
      type: DataTypes.ENUM('programado', 'en_vivo', 'finalizado', 'cancelado'),
      defaultValue: 'programado'
    },
    
    // VEHÍCULO
    vehiculoId: { type: DataTypes.INTEGER, allowNull: false },
    
    // PRECIOS Y PUJAS
    precioBase: { type: DataTypes.DECIMAL(15, 2), allowNull: false },
    precioReserva: { type: DataTypes.DECIMAL(15, 2) },
    incrementoMinimo: { type: DataTypes.DECIMAL(15, 2), defaultValue: 50000 },
    pujaActual: { type: DataTypes.DECIMAL(15, 2) },
    precioFinal: { type: DataTypes.DECIMAL(15, 2) },
    
    // PARTICIPANTES
    participantesInscritos: { type: DataTypes.INTEGER, defaultValue: 0 },
    participantesActivos: { type: DataTypes.INTEGER, defaultValue: 0 },
    totalPujas: { type: DataTypes.INTEGER, defaultValue: 0 },
    
    // GESTIÓN
    organizadorId: { type: DataTypes.INTEGER, allowNull: false },
    vendedorId: { type: DataTypes.INTEGER, allowNull: false },
    ganadorId: { type: DataTypes.INTEGER },
    
    // CONFIGURACIÓN
    requiereInscripcion: { type: DataTypes.BOOLEAN, defaultValue: true },
    requiereVerificacion: { type: DataTypes.BOOLEAN, defaultValue: true },
    comisionPorcentaje: { type: DataTypes.DECIMAL(5, 2), defaultValue: 5.0 },
    esDestacado: { type: DataTypes.BOOLEAN, defaultValue: false },
    
    // METADATA
    observaciones: { type: DataTypes.TEXT },
    condicionesEspeciales: { type: DataTypes.TEXT }
  }, {
    sequelize,
    modelName: 'Remate',
    tableName: 'remates',
    timestamps: true
  });

  return Remate;
};