// services/peritajeService.js

const { Peritaje, Usuario } = require('../models');

// Función reutilizable para calcular la comisión del perito
function calcularComisionPerito(precioTotal) {
  const porcentajePerito = 0.60;
  return +(precioTotal * porcentajePerito).toFixed(2); // 2 decimales
}

module.exports = {
  // Crear un nuevo peritaje
  async crearPeritaje(data) {
    if (!data.precio || isNaN(data.precio)) {
      throw new Error('El precio del peritaje es requerido y debe ser numérico.');
    }

    const comision = calcularComisionPerito(data.precio);

    const peritaje = await Peritaje.create({
      ...data,
      comisionPerito: comision,
      estado: data.estado || 'PENDIENTE'
    });

    return peritaje;
  },

  // Obtener todos los peritajes (admin o general)
  async obtenerTodos() {
    return await Peritaje.findAll({
      include: [
        {
          model: Usuario,
          as: 'perito',
          attributes: ['id', 'nombre', 'email']
        }
      ],
      order: [['fecha', 'DESC']]
    });
  },

  // Obtener peritajes por ID de perito
  async obtenerPorPerito(peritoId) {
    return await Peritaje.findAll({
      where: { peritoId },
      order: [['fecha', 'DESC']]
    });
  },

  // Obtener un solo peritaje por ID
  async obtenerPorId(id) {
    const peritaje = await Peritaje.findByPk(id, {
      include: [
        {
          model: Usuario,
          as: 'perito',
          attributes: ['id', 'nombre', 'email']
        }
      ]
    });

    if (!peritaje) throw new Error('Peritaje no encontrado');
    return peritaje;
  },

  // Actualizar un peritaje
  async actualizarPeritaje(id, data) {
    const peritaje = await Peritaje.findByPk(id);
    if (!peritaje) throw new Error('Peritaje no encontrado');

    // Si se actualiza el precio, recalcular la comisión
    if (data.precio && !isNaN(data.precio)) {
      data.comisionPerito = calcularComisionPerito(data.precio);
    }

    await peritaje.update(data);
    return peritaje;
  },

  // Eliminar peritaje
  async eliminarPeritaje(id) {
    const peritaje = await Peritaje.findByPk(id);
    if (!peritaje) throw new Error('Peritaje no encontrado');

    await peritaje.destroy();
    return { mensaje: 'Peritaje eliminado correctamente' };
  }
};
