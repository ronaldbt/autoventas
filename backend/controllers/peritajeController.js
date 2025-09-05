const { Peritaje, Usuario, Vehiculo } = require('../models');

// Para peritos - crear peritaje
exports.crearPeritaje = async (req, res) => {
  try {
    const data = req.body;
    const peritoId = req.usuario.id;

    const nuevo = await Peritaje.create({ ...data, peritoId });
    res.status(201).json(nuevo);
  } catch (err) {
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
