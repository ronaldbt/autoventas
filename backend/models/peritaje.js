'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Peritaje extends Model {
    static associate(models) {
      // Asociaciones si es necesario, ejemplo:
      Peritaje.belongsTo(models.Usuario, {
        foreignKey: 'peritoId',
        as: 'perito'
      });

      Peritaje.belongsTo(models.Vehiculo, {
        foreignKey: 'vehiculoId',
        as: 'vehiculo'
      });
    }
  }

  Peritaje.init({
    // INFORMACIÓN GENERAL
    patente: { type: DataTypes.STRING, allowNull: false },
    servicio: { type: DataTypes.STRING },
    centroServicio: { type: DataTypes.STRING },
    fecha: { type: DataTypes.DATE },
    secuencia: { type: DataTypes.STRING },
    cliente: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    direccion: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    marca: { type: DataTypes.STRING },
    modelo: { type: DataTypes.STRING },
    color: { type: DataTypes.STRING },
    propietario: { type: DataTypes.STRING },
    valorAvaluo: { type: DataTypes.DECIMAL },
    numeroMotor: { type: DataTypes.STRING },
    numeroChasis: { type: DataTypes.STRING },
    numeroSerial: { type: DataTypes.STRING },
    tipoTransporte: { type: DataTypes.STRING },
    asegurado: { type: DataTypes.STRING },

    // FRENOS
    frenos_eficacia_delantera: { type: DataTypes.DECIMAL },
    frenos_eficacia_trasera: { type: DataTypes.DECIMAL },
    frenos_diferencia_fuerza_delantera: { type: DataTypes.DECIMAL },
    frenos_diferencia_fuerza_trasera: { type: DataTypes.DECIMAL },
    frenos_ovalizacion: { type: DataTypes.JSON },
    frenos_esfuerzo: { type: DataTypes.DECIMAL },
    frenos_peso: { type: DataTypes.DECIMAL },
    frenos_total: { type: DataTypes.DECIMAL },
    frenos_estado_general: { type: DataTypes.ENUM('BUENO', 'REGULAR', 'MALO') },

    // SUSPENSIÓN
    suspension_delantera_izquierda: { type: DataTypes.DECIMAL },
    suspension_delantera_derecha: { type: DataTypes.DECIMAL },
    suspension_trasera_izquierda: { type: DataTypes.DECIMAL },
    suspension_trasera_derecha: { type: DataTypes.DECIMAL },
    suspension_diferencia_delantera: { type: DataTypes.DECIMAL },
    suspension_diferencia_trasera: { type: DataTypes.DECIMAL },
    suspension_estado_general: { type: DataTypes.ENUM('BUENO', 'REGULAR', 'MALO') },

    // CARROCERÍA y CHASIS
    carroceria: { type: DataTypes.JSON },
    chasis: { type: DataTypes.JSON },

    // LLANTAS
    llantas: { type: DataTypes.JSON },

    // HISTORIAL DE REVISIONES
    historial_revisiones: { type: DataTypes.JSON },

    // OBSERVACIONES
    observaciones_generales: { type: DataTypes.TEXT },

    // ADMINISTRATIVO
    peritoId: { type: DataTypes.INTEGER, allowNull: false },
    vehiculoId: { type: DataTypes.INTEGER },
    precio: { type: DataTypes.DECIMAL },
    comisionPerito: { type: DataTypes.DECIMAL },
    estado: {
      type: DataTypes.ENUM('PENDIENTE', 'EN_PROCESO', 'FINALIZADO'),
      defaultValue: 'PENDIENTE',
    }
  }, {
    sequelize,
    modelName: 'Peritaje',
    tableName: 'peritajes',
    timestamps: true
  });

  return Peritaje;
};
