const { Remate, RemateInscripcion, Usuario, Vehiculo } = require('../models');
const { Op } = require('sequelize');

// CRUD para remates

// GET /api/remates - Listar remates con filtros
exports.listarRemates = async (req, res) => {
  try {
    const { 
      estado, 
      tipo, 
      precio, 
      page = 1, 
      limit = 10,
      destacados 
    } = req.query;

    const where = {};
    
    // Filtros
    if (estado) where.estado = estado;
    if (destacados === 'true') where.esDestacado = true;
    
    // Filtro de precio
    if (precio) {
      const [min, max] = precio.split('-');
      if (max === '+') {
        where.precioBase = { [Op.gte]: parseInt(min) };
      } else {
        where.precioBase = { 
          [Op.between]: [parseInt(min), parseInt(max)] 
        };
      }
    }

    const offset = (page - 1) * limit;

    const { rows: remates, count } = await Remate.findAndCountAll({
      where,
      include: [
        {
          model: Vehiculo,
          as: 'vehiculo',
          attributes: ['marca', 'modelo', 'ano', 'kilometraje', 'imagenes']
        },
        {
          model: Usuario,
          as: 'vendedor',
          attributes: ['nombre', 'email']
        }
      ],
      order: [['fechaHoraInicio', 'ASC']],
      limit: parseInt(limit),
      offset
    });

    res.json({
      remates,
      totalPages: Math.ceil(count / limit),
      currentPage: parseInt(page),
      totalRemates: count
    });
  } catch (err) {
    console.error('Error listando remates:', err);
    res.status(500).json({ error: err.message });
  }
};

// GET /api/remates/destacados - Remates destacados
exports.rematesDestacados = async (req, res) => {
  try {
    const remates = await Remate.findAll({
      where: { 
        esDestacado: true,
        estado: { [Op.in]: ['programado', 'en_vivo'] }
      },
      include: [
        {
          model: Vehiculo,
          as: 'vehiculo',
          attributes: ['marca', 'modelo', 'ano', 'imagenes']
        }
      ],
      order: [['fechaHoraInicio', 'ASC']],
      limit: 6
    });

    res.json(remates);
  } catch (err) {
    console.error('Error obteniendo remates destacados:', err);
    res.status(500).json({ error: err.message });
  }
};

// GET /api/remates/:id - Obtener remate por ID
exports.obtenerRemate = async (req, res) => {
  try {
    const { id } = req.params;
    
    const remate = await Remate.findOne({
      where: { 
        [Op.or]: [
          { id: isNaN(id) ? null : id },
          { slug: id }
        ]
      },
      include: [
        {
          model: Vehiculo,
          as: 'vehiculo'
        },
        {
          model: Usuario,
          as: 'vendedor',
          attributes: ['nombre', 'telefono', 'email']
        },
        {
          model: Usuario,
          as: 'organizador',
          attributes: ['nombre', 'email']
        },
        {
          model: RemateInscripcion,
          as: 'inscripciones',
          include: [{
            model: Usuario,
            as: 'usuario',
            attributes: ['nombre', 'email']
          }]
        }
      ]
    });

    if (!remate) {
      return res.status(404).json({ error: 'Remate no encontrado' });
    }

    res.json(remate);
  } catch (err) {
    console.error('Error obteniendo remate:', err);
    res.status(500).json({ error: err.message });
  }
};

// POST /api/remates - Crear remate (solo admins)
exports.crearRemate = async (req, res) => {
  try {
    const {
      titulo,
      descripcion,
      vehiculoId,
      fechaHoraInicio,
      duracionMinutos,
      precioBase,
      precioReserva,
      incrementoMinimo,
      requiereInscripcion,
      requiereVerificacion,
      esDestacado,
      observaciones,
      condicionesEspeciales,
      vendedorId
    } = req.body;

    const organizadorId = req.usuario.id;

    // Generar slug
    const slug = titulo
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    const remate = await Remate.create({
      titulo,
      descripcion,
      slug: `${slug}-${Date.now()}`,
      vehiculoId,
      fechaHoraInicio,
      duracionMinutos,
      precioBase,
      precioReserva,
      incrementoMinimo,
      requiereInscripcion,
      requiereVerificacion,
      esDestacado,
      observaciones,
      condicionesEspeciales,
      organizadorId,
      vendedorId: vendedorId || organizadorId
    });

    res.status(201).json(remate);
  } catch (err) {
    console.error('Error creando remate:', err);
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/remates/:id - Actualizar remate
exports.actualizarRemate = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const remate = await Remate.findByPk(id);
    if (!remate) {
      return res.status(404).json({ error: 'Remate no encontrado' });
    }

    await remate.update(updates);
    res.json(remate);
  } catch (err) {
    console.error('Error actualizando remate:', err);
    res.status(500).json({ error: err.message });
  }
};

// DELETE /api/remates/:id - Eliminar remate
exports.eliminarRemate = async (req, res) => {
  try {
    const { id } = req.params;
    
    const remate = await Remate.findByPk(id);
    if (!remate) {
      return res.status(404).json({ error: 'Remate no encontrado' });
    }

    // Solo permitir eliminar si no está en vivo o finalizado
    if (['en_vivo', 'finalizado'].includes(remate.estado)) {
      return res.status(400).json({ 
        error: 'No se puede eliminar un remate en vivo o finalizado' 
      });
    }

    await remate.destroy();
    res.json({ message: 'Remate eliminado exitosamente' });
  } catch (err) {
    console.error('Error eliminando remate:', err);
    res.status(500).json({ error: err.message });
  }
};

// INSCRIPCIONES

// POST /api/remates/:id/inscripcion - Inscribirse a un remate
exports.inscribirseRemate = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioId = req.usuario.id;

    const remate = await Remate.findByPk(id);
    if (!remate) {
      return res.status(404).json({ error: 'Remate no encontrado' });
    }

    if (remate.estado !== 'programado') {
      return res.status(400).json({ 
        error: 'Solo puedes inscribirte a remates programados' 
      });
    }

    // Verificar si ya está inscrito
    const inscripcionExistente = await RemateInscripcion.findOne({
      where: { remateId: id, usuarioId }
    });

    if (inscripcionExistente) {
      return res.status(400).json({ error: 'Ya estás inscrito en este remate' });
    }

    const inscripcion = await RemateInscripcion.create({
      remateId: id,
      usuarioId,
      fechaInscripcion: new Date(),
      estado: remate.requiereVerificacion ? 'pendiente' : 'aprobado'
    });

    // Actualizar contador
    await remate.increment('participantesInscritos');

    res.status(201).json({
      message: 'Inscripción exitosa',
      inscripcion
    });
  } catch (err) {
    console.error('Error en inscripción:', err);
    res.status(500).json({ error: err.message });
  }
};

// GET /api/remates/:id/inscripciones - Listar inscripciones (solo organizador)
exports.listarInscripciones = async (req, res) => {
  try {
    const { id } = req.params;

    const inscripciones = await RemateInscripcion.findAll({
      where: { remateId: id },
      include: [{
        model: Usuario,
        as: 'usuario',
        attributes: ['id', 'nombre', 'email', 'telefono']
      }],
      order: [['fechaInscripcion', 'DESC']]
    });

    res.json(inscripciones);
  } catch (err) {
    console.error('Error listando inscripciones:', err);
    res.status(500).json({ error: err.message });
  }
};

// PARA VENDEDORES - Solicitar rematar vehículo
exports.solicitarRemate = async (req, res) => {
  try {
    const {
      vehiculoId,
      precioBase,
      fechaPreferida,
      observaciones
    } = req.body;
    
    const vendedorId = req.usuario.id;

    // Verificar que el vehículo existe y pertenece al usuario
    const vehiculo = await Vehiculo.findOne({
      where: { 
        id: vehiculoId,
        usuarioId: vendedorId
      }
    });

    if (!vehiculo) {
      return res.status(404).json({ 
        error: 'Vehículo no encontrado o no te pertenece' 
      });
    }

    // Crear solicitud de remate (pendiente de aprobación)
    const solicitudRemate = await Remate.create({
      titulo: `Remate ${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.ano}`,
      descripcion: `Solicitud de remate para ${vehiculo.marca} ${vehiculo.modelo}`,
      slug: `remate-${vehiculo.marca}-${vehiculo.modelo}-${Date.now()}`.toLowerCase(),
      vehiculoId,
      fechaHoraInicio: fechaPreferida || new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // +7 días
      precioBase,
      organizadorId: 1, // TODO: Admin por defecto
      vendedorId,
      estado: 'programado',
      observaciones,
      requiereVerificacion: true
    });

    res.status(201).json({
      message: 'Solicitud de remate enviada correctamente',
      remate: solicitudRemate
    });
  } catch (err) {
    console.error('Error solicitando remate:', err);
    res.status(500).json({ error: err.message });
  }
};

// PUT /api/remates/:id/estado - Cambiar estado del remate (solo admins)
exports.cambiarEstadoRemate = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado } = req.body;

    const remateScheduler = require('../services/remateScheduler');
    const remate = await remateScheduler.cambiarEstadoRemate(id, estado);

    res.json({
      message: `Estado del remate cambiado a ${estado}`,
      remate
    });
  } catch (err) {
    console.error('Error cambiando estado del remate:', err);
    res.status(500).json({ error: err.message });
  }
};