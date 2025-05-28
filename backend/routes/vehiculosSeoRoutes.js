// backend/routes/vehiculosSeoRoutes.js
const express = require('express');
const router = express.Router();
const { Vehiculo } = require('../models'); // o tu controlador

// Endpoint de búsqueda
router.get('/', async (req, res) => {
  const { region, comuna, marca, modelo, anio } = req.query;

  const filtros = {};

  if (region) filtros.region = region;
  if (comuna) filtros.comuna = comuna;
  if (marca) filtros.marca = marca;
  if (modelo) filtros.modelo = modelo;
  if (anio) filtros.anio = anio;

  try {
    const vehiculos = await Vehiculo.findAll({ where: filtros });
    res.json(vehiculos);
  } catch (err) {
    console.error('❌ Error al buscar vehículos:', err);
    res.status(500).json({ error: 'Error al buscar vehículos' });
  }
});

module.exports = router;
