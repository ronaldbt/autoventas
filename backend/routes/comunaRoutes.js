// routes/comunaRoutes.js
const express = require('express');
const router = express.Router();
const { Comuna } = require('../models');

/**
 * ✅ GET /api/comunas
 * Obtener todas las comunas (ordenadas)
 */
router.get('/', async (req, res) => {
  try {
    const comunas = await Comuna.findAll({
      order: [['nombre', 'ASC']]
    });
    res.json(comunas);
  } catch (error) {
    console.error('❌ Error al obtener comunas:', error.message);
    res.status(500).json({ error: 'Error al obtener comunas' });
  }
});

/**
 * ✅ GET /api/comunas/por-region/:regionId
 * Obtener comunas filtradas por región
 */
router.get('/por-region/:regionId', async (req, res) => {
  const { regionId } = req.params;

  try {
    const comunas = await Comuna.findAll({
      where: { regionId },
      order: [['nombre', 'ASC']]
    });

    res.json(comunas);
  } catch (error) {
    console.error('❌ Error al filtrar comunas:', error.message);
    res.status(500).json({ error: 'Error al obtener comunas por región' });
  }
});

module.exports = router;
