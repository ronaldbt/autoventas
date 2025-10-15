const { Peritaje, Usuario, Vehiculo } = require('../models');
const { Op } = require('sequelize');

// Dashboard para peritos - resumen de información
exports.dashboardPerito = async (req, res) => {
  try {
    const peritoId = req.usuario.id;
    
    // Estadísticas generales
    const [
      totalPeritajes,
      peritajesEnProceso,
      peritajesCompletados,
      solicitudesPendientes,
      proximosPeritajes
    ] = await Promise.all([
      // Total de peritajes del perito
      Peritaje.count({
        where: { peritoId }
      }),
      
      // Peritajes en proceso
      Peritaje.count({
        where: { 
          peritoId,
          estado: 'en_proceso'
        }
      }),
      
      // Peritajes completados
      Peritaje.count({
        where: { 
          peritoId,
          estado: 'completado'
        }
      }),
      
      // Solicitudes disponibles para tomar
      Peritaje.count({
        where: { 
          tipo: 'solicitud',
          estado: 'pendiente',
          peritoId: null
        }
      }),
      
      // Próximos peritajes (programados)
      Peritaje.findAll({
        where: { 
          peritoId,
          estado: 'en_proceso',
          fecha: {
            [Op.gte]: new Date()
          }
        },
        include: [
          {
            model: Usuario,
            as: 'usuarioCliente',
            attributes: ['nombre', 'email']
          }
        ],
        order: [['fecha', 'ASC']],
        limit: 5
      })
    ]);

    res.json({
      estadisticas: {
        totalPeritajes,
        peritajesEnProceso,
        peritajesCompletados,
        solicitudesPendientes
      },
      proximosPeritajes
    });
  } catch (err) {
    console.error('Error en dashboard perito:', err);
    res.status(500).json({ error: err.message });
  }
};

// Para peritos - crear peritaje (solo desde solicitudes)
exports.crearPeritaje = async (req, res) => {
  try {
    const data = req.body;
    const peritoId = req.usuario.id;

    console.log('🔍 [Crear Peritaje] Datos recibidos:', data);

    const nuevo = await Peritaje.create({ ...data, peritoId });
    res.status(201).json(nuevo);
  } catch (err) {
    console.error('❌ [Crear Peritaje] Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Para peritos - completar peritaje existente (desde solicitud)
exports.completarPeritaje = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const peritoId = req.usuario.id;
    
    console.log('🔄 [Completar Peritaje] ID:', id, 'Perito:', peritoId);
    console.log('🔄 [Completar Peritaje] Datos técnicos recibidos:', {
      frenos: data.frenos_estado_general,
      suspension: data.suspension_estado_general,
      avaluo: data.valorAvaluo
    });

    // Buscar el peritaje existente que viene de una solicitud
    const peritaje = await Peritaje.findOne({
      where: { 
        id,
        peritoId, // Solo puede actualizar sus propios peritajes
        tipo: 'peritaje', // Debe ser un peritaje (ex-solicitud)
        estado: 'en_proceso' // Debe estar en proceso
      }
    });

    if (!peritaje) {
      return res.status(404).json({ error: 'Peritaje no encontrado o ya completado' });
    }

    // Actualizar solo los campos técnicos, manteniendo los datos del cliente
    const datosActualizacion = {
      // Datos técnicos de frenos
      frenos_eficacia_delantera: data.frenos_eficacia_delantera,
      frenos_eficacia_trasera: data.frenos_eficacia_trasera,
      frenos_diferencia_fuerza_delantera: data.frenos_diferencia_fuerza_delantera,
      frenos_diferencia_fuerza_trasera: data.frenos_diferencia_fuerza_trasera,
      frenos_esfuerzo: data.frenos_esfuerzo,
      frenos_peso: data.frenos_peso,
      frenos_total: data.frenos_total,
      frenos_estado_general: data.frenos_estado_general,
      
      // Datos técnicos de suspensión
      suspension_delantera_izquierda: data.suspension_delantera_izquierda,
      suspension_delantera_derecha: data.suspension_delantera_derecha,
      suspension_trasera_izquierda: data.suspension_trasera_izquierda,
      suspension_trasera_derecha: data.suspension_trasera_derecha,
      suspension_diferencia_delantera: data.suspension_diferencia_delantera,
      suspension_diferencia_trasera: data.suspension_diferencia_trasera,
      suspension_estado_general: data.suspension_estado_general,
      
      // Otros datos técnicos
      carroceria: data.carroceria,
      chasis: data.chasis,
      llantas: data.llantas,
      valorAvaluo: data.valorAvaluo,
      observaciones_generales: data.observaciones_generales,
      
      // Mantener el precio original o usar el proporcionado
      precio: data.precio || peritaje.precio,
      
      // Cambiar estado a completado
      estado: 'completado'
    };

    await peritaje.update(datosActualizacion);
    
    // Obtener el peritaje actualizado con relaciones
    const peritajeActualizado = await Peritaje.findOne({
      where: { id },
      include: [
        {
          model: Usuario,
          as: 'usuarioCliente',
          attributes: ['nombre', 'email'],
          required: false
        },
        {
          model: Usuario,
          as: 'perito',
          attributes: ['nombre', 'email'],
          required: false
        }
      ]
    });

    console.log('✅ [Completar Peritaje] Peritaje completado exitosamente');
    res.json(peritajeActualizado);
  } catch (err) {
    console.error('❌ [Completar Peritaje] Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Para peritos - ver sus peritajes
exports.misPeritajes = async (req, res) => {
  try {
    const peritoId = req.usuario.id;
    const peritajes = await Peritaje.findAll({
      where: { peritoId },
      order: [['createdAt', 'DESC']]
    });
    res.json(peritajes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Para clientes - solicitar peritaje
exports.solicitarPeritaje = async (req, res) => {
  try {
    const { 
      patente, 
      ano, 
      marca, 
      modelo, 
      nombre, 
      telefono, 
      email, 
      fecha, 
      hora, 
      direccion, 
      motivo, 
      comentarios 
    } = req.body;
    const clienteId = req.usuario.id;

    // Crear solicitud de peritaje
    const solicitud = await Peritaje.create({
      titulo: `Peritaje ${marca} ${modelo} - ${patente}`,
      descripcion: `Solicitud de peritaje para ${marca} ${modelo} ${ano}. Motivo: ${motivo}. ${comentarios ? 'Comentarios: ' + comentarios : ''}`,
      tipo: 'solicitud',
      patente,
      marca,
      modelo,
      ano,
      nombre,
      telefono,
      direccion,
      email,
      fecha,
      hora,
      motivo,
      comentarios,
      clienteId,
      estado: 'pendiente'
    });

    res.status(201).json({
      message: 'Solicitud de peritaje enviada correctamente',
      solicitud
    });
  } catch (err) {
    console.error('Error al crear solicitud de peritaje:', err);
    res.status(500).json({ error: err.message });
  }
};

// Para clientes - ver sus peritajes solicitados
exports.misPeritajesCliente = async (req, res) => {
  try {
    const clienteId = req.usuario.id;
    const peritajes = await Peritaje.findAll({
      where: { clienteId },
      include: [
        {
          model: Vehiculo,
          as: 'vehiculo',
          required: false
        },
        {
          model: Usuario,
          as: 'perito',
          attributes: ['nombre', 'email'],
          required: false
        },
        {
          model: Usuario,
          as: 'usuarioCliente',
          attributes: ['nombre', 'email'],
          required: false
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(peritajes);
  } catch (err) {
    console.error('Error al obtener peritajes del cliente:', err);
    res.status(500).json({ error: err.message });
  }
};

// Para clientes - obtener un peritaje específico
exports.obtenerPeritajeCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const clienteId = req.usuario.id;
    
    const peritaje = await Peritaje.findOne({
      where: { 
        id,
        clienteId 
      },
      include: [
        {
          model: Vehiculo,
          as: 'vehiculo',
          required: false
        },
        {
          model: Usuario,
          as: 'perito',
          attributes: ['nombre', 'email', 'telefono'],
          required: false
        },
        {
          model: Usuario,
          as: 'usuarioCliente',
          attributes: ['nombre', 'email', 'telefono'],
          required: false
        }
      ]
    });

    if (!peritaje) {
      return res.status(404).json({ error: 'Peritaje no encontrado' });
    }

    res.json(peritaje);
  } catch (err) {
    console.error('Error al obtener peritaje:', err);
    res.status(500).json({ error: err.message });
  }
};

// Para peritos - ver solicitudes pendientes (sin asignar perito)
exports.solicitudesPendientes = async (req, res) => {
  try {
    const solicitudes = await Peritaje.findAll({
      where: { 
        tipo: 'solicitud',
        estado: 'pendiente',
        peritoId: null // Sin perito asignado
      },
      include: [
        {
          model: Usuario,
          as: 'usuarioCliente',
          attributes: ['nombre', 'email'],
          required: false
        }
      ],
      order: [['createdAt', 'ASC']] // Más antiguos primero
    });
    res.json(solicitudes);
  } catch (err) {
    console.error('Error al obtener solicitudes pendientes:', err);
    res.status(500).json({ error: err.message });
  }
};

// Para peritos - obtener un peritaje específico
exports.obtenerPeritaje = async (req, res) => {
  try {
    const { id } = req.params;
    const peritoId = req.usuario.id;
    
    const peritaje = await Peritaje.findOne({
      where: { 
        id,
        peritoId // Solo puede ver sus propios peritajes
      },
      include: [
        {
          model: Usuario,
          as: 'usuarioCliente',
          attributes: ['nombre', 'email'],
          required: false
        },
        {
          model: Usuario,
          as: 'perito',
          attributes: ['nombre', 'email'],
          required: false
        },
        {
          model: Vehiculo,
          as: 'vehiculo',
          required: false
        }
      ]
    });

    if (!peritaje) {
      return res.status(404).json({ error: 'Peritaje no encontrado' });
    }

    res.json(peritaje);
  } catch (err) {
    console.error('Error al obtener peritaje:', err);
    res.status(500).json({ error: err.message });
  }
};

// Para peritos - tomar una solicitud (asignarse como perito)
exports.tomarSolicitud = async (req, res) => {
  try {
    const { id } = req.params;
    const peritoId = req.usuario.id;
    
    const solicitud = await Peritaje.findOne({
      where: { 
        id,
        tipo: 'solicitud',
        estado: 'pendiente',
        peritoId: null // Solo si no tiene perito asignado
      }
    });

    if (!solicitud) {
      return res.status(404).json({ error: 'Solicitud no disponible' });
    }

    // Asignar perito y cambiar estado
    await solicitud.update({
      peritoId,
      estado: 'en_proceso',
      tipo: 'peritaje' // Cambiar de solicitud a peritaje
    });

    // Devolver solicitud actualizada con información del perito
    const solicitudActualizada = await Peritaje.findOne({
      where: { id },
      include: [
        {
          model: Usuario,
          as: 'usuarioCliente',
          attributes: ['nombre', 'email', 'telefono']
        },
        {
          model: Usuario,
          as: 'perito',
          attributes: ['nombre', 'email', 'telefono']
        }
      ]
    });

    res.json({
      message: 'Solicitud asignada correctamente',
      peritaje: solicitudActualizada
    });
  } catch (err) {
    console.error('Error al tomar solicitud:', err);
    res.status(500).json({ error: err.message });
  }
};
