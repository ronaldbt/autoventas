// routes/regionRoutes.js
const express = require('express');
const router = express.Router();
const { Region } = require('../models');

/**
 * ✅ GET /api/regiones
 * Obtener todas las regiones ordenadas alfabéticamente
 */
router.get('/', async (req, res) => {
  try {
    const regiones = await Region.findAll({
      order: [['nombre', 'ASC']]
    });
    res.json(regiones);
  } catch (error) {
    console.error('❌ Error al obtener regiones:', error.message);
    res.status(500).json({ error: 'Error al obtener regiones' });
  }
});

module.exports = router;
