// routes/transmisionRoutes.js
const express = require('express');
const router = express.Router();
const { Transmision } = require('../models');

/**
 * ✅ GET /api/transmisiones
 * Obtener todas las transmisiones
 */
router.get('/', async (req, res) => {
  try {
    const transmisiones = await Transmision.findAll({
      order: [['nombre', 'ASC']]
    });
    res.json(transmisiones);
  } catch (error) {
    console.error('❌ Error al obtener transmisiones:', error);
    res.status(500).json({ error: 'Error al obtener transmisiones' });
  }
});

module.exports = router;
