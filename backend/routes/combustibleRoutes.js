// routes/combustibleRoutes.js
const express = require('express');
const router = express.Router();
const { Combustible } = require('../models');

/**
 * ✅ GET /api/combustibles
 * Obtener todos los tipos de combustible
 */
router.get('/', async (req, res) => {
  try {
    const combustibles = await Combustible.findAll({
      order: [['nombre', 'ASC']]
    });
    res.json(combustibles);
  } catch (error) {
    console.error('❌ Error al obtener combustibles:', error);
    res.status(500).json({ error: 'Error al obtener combustibles' });
  }
});

module.exports = router;
