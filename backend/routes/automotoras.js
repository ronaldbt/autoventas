// backend/routes/automotoras.js
const express = require('express');
const router = express.Router();
const { Automotora, Vehiculo, Modelo, Marca } = require('../models');

// Ruta pública para ver una automotora por slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const automotora = await Automotora.findOne({
      where: { slug },
      include: [
        {
          model: Vehiculo,
          as: 'autos',
          include: [
            { model: Modelo, as: 'modelo' },
            { model: Marca, as: 'marca' }
          ]
        }
      ]
    });

    if (!automotora) return res.status(404).json({ error: 'Automotora no encontrada' });

    res.json(automotora);
  } catch (err) {
    console.error('Error al obtener automotora:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
