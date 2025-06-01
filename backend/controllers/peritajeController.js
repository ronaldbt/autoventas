const { Peritaje, Usuario } = require('../models');

exports.crearPeritaje = async (req, res) => {
  try {
    const data = req.body;
    const peritoId = req.user.id;

    const nuevo = await Peritaje.create({ ...data, peritoId });
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.misPeritajes = async (req, res) => {
  try {
    const peritoId = req.user.id;
    const peritajes = await Peritaje.findAll({
      where: { peritoId },
      order: [['createdAt', 'DESC']]
    });
    res.json(peritajes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
