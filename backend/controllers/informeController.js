const { Peritaje, Usuario, Vehiculo } = require('../models');

// Para clientes - solicitar informe
exports.solicitarInforme = async (req, res) => {
  try {
    const { tipo, titulo, descripcion } = req.body;
    const clienteId = req.usuario.id;

    // Crear solicitud de informe
    const informe = await Peritaje.create({
      tipo: 'informe',
      titulo,
      descripcion,
      clienteId,
      estado: 'pendiente'
    });

    res.status(201).json({
      message: 'Solicitud de informe enviada correctamente',
      informe
    });
  } catch (err) {
    console.error('Error al crear solicitud de informe:', err);
    res.status(500).json({ error: err.message });
  }
};

// Para clientes - ver sus informes
exports.misInformesCliente = async (req, res) => {
  try {
    const clienteId = req.usuario.id;
    const informes = await Peritaje.findAll({
      where: { 
        clienteId,
        tipo: 'informe'
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
    res.json(informes);
  } catch (err) {
    console.error('Error al obtener informes del cliente:', err);
    res.status(500).json({ error: err.message });
  }
};

// Para clientes - obtener un informe específico
exports.obtenerInformeCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const clienteId = req.usuario.id;
    
    const informe = await Peritaje.findOne({
      where: { 
        id,
        clienteId,
        tipo: 'informe'
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

    if (!informe) {
      return res.status(404).json({ error: 'Informe no encontrado' });
    }

    res.json(informe);
  } catch (err) {
    console.error('Error al obtener informe:', err);
    res.status(500).json({ error: err.message });
  }
};

// Para clientes - cancelar informe
exports.cancelarInforme = async (req, res) => {
  try {
    const { id } = req.params;
    const clienteId = req.usuario.id;
    
    const informe = await Peritaje.findOne({
      where: { 
        id,
        clienteId,
        tipo: 'informe'
      }
    });

    if (!informe) {
      return res.status(404).json({ error: 'Informe no encontrado' });
    }

    if (informe.estado === 'completado') {
      return res.status(400).json({ error: 'No se puede cancelar un informe completado' });
    }

    await informe.update({ estado: 'cancelado' });

    res.json({
      message: 'Informe cancelado correctamente',
      informe
    });
  } catch (err) {
    console.error('Error al cancelar informe:', err);
    res.status(500).json({ error: err.message });
  }
};
