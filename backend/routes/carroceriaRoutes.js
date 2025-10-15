// routes/carroceriaRoutes.js
const express = require('express');
const router = express.Router();
const { Carroceria } = require('../models');

/**
 * ✅ GET /api/carrocerias
 * Obtener todas las carrocerías
 */
router.get('/', async (req, res) => {
  try {
    const carrocerias = await Carroceria.findAll({
      order: [['nombre', 'ASC']]
    });
    res.json(carrocerias);
  } catch (error) {
    console.error('❌ Error al obtener carrocerías:', error);
    res.status(500).json({ error: 'Error al obtener carrocerías' });
  }
});

module.exports = router;
