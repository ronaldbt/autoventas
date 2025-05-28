// routes/marcasRoutes.js
const express = require('express');
const router = express.Router();
const { Marca } = require('../models');

/**
 * ✅ GET /api/marcas
 * Listar todas las marcas ordenadas alfabéticamente
 */
router.get('/', async (req, res) => {
  try {
    const marcas = await Marca.findAll({
      order: [['nombre', 'ASC']]
    });
    res.json(marcas);
  } catch (error) {
    console.error('❌ Error al obtener marcas:', error);
    res.status(500).json({ error: 'Error al obtener marcas' });
  }
});

module.exports = router;
