// routes/modelosRoutes.js
const express = require('express');
const router = express.Router();
const { Modelo } = require('../models');

/**
 * ✅ GET /api/modelos
 * Obtener todos los modelos (sin filtro)
 */
router.get('/', async (req, res) => {
  try {
    const modelos = await Modelo.findAll({ order: [['nombre', 'ASC']] });
    res.json(modelos);
  } catch (error) {
    console.error('❌ Error al obtener modelos:', error);
    res.status(500).json({ error: 'Error al obtener modelos' });
  }
});

/**
 * ✅ GET /api/modelos/marca/:marcaId
 * Obtener modelos por marca específica
 */
router.get('/marca/:marcaId', async (req, res) => {
  const { marcaId } = req.params;

  try {
    const modelos = await Modelo.findAll({
      where: { marcaId },
      order: [['nombre', 'ASC']]
    });

    res.json(modelos);
  } catch (error) {
    console.error(`❌ Error al obtener modelos de la marca ${marcaId}:`, error);
    res.status(500).json({ error: 'Error al obtener modelos' });
  }
});

module.exports = router;
