// routes/marcasRoutes.js
const express = require('express');
const router = express.Router();
const { Marca, Modelo } = require('../models');

/**
 * ✅ GET /api/marcas
 * Listar todas las marcas ordenadas alfabéticamente
 * Query params:
 * - popular: boolean - Solo marcas populares (con vehículos)
 * - search: string - Buscar por nombre
 * - limit: number - Límite de resultados
 */
router.get('/', async (req, res) => {
  try {
    const { popular, search, limit } = req.query;
    
    let whereClause = {};
    let includeClause = [];
    
    // Si se solicita solo marcas populares
    if (popular === 'true') {
      includeClause.push({
        model: Modelo,
        as: 'modelos',
        required: true, // INNER JOIN para solo marcas con modelos
        attributes: [] // No necesitamos los datos del modelo
      });
    }
    
    // Si hay búsqueda por texto
    if (search) {
      whereClause.nombre = {
        [require('sequelize').Op.iLike]: `%${search}%`
      };
    }
    
    const options = {
      where: whereClause,
      order: [['nombre', 'ASC']],
      attributes: ['id', 'nombre', 'pais_origen', 'popularidad', 'logo_url', 'cantidad_vehiculos']
    };
    
    if (includeClause.length > 0) {
      options.include = includeClause;
    }
    
    if (limit) {
      options.limit = parseInt(limit);
    }
    
    const marcas = await Marca.findAll(options);
    
    // Agregar headers de cache
    res.set({
      'Cache-Control': 'public, max-age=300', // 5 minutos
      'ETag': `"marcas-${Date.now()}"`
    });
    
    res.json(marcas);
  } catch (error) {
    console.error('❌ Error al obtener marcas:', error);
    res.status(500).json({ error: 'Error al obtener marcas' });
  }
});

/**
 * ✅ GET /api/marcas/populares
 * Obtener marcas más populares (con más vehículos)
 */
router.get('/populares', async (req, res) => {
  try {
    const { limit = 10 } = req.query;
    
    const marcas = await Marca.findAll({
      attributes: [
        'id', 
        'nombre', 
        'pais_origen',
        'popularidad',
        'logo_url',
        'cantidad_vehiculos'
      ],
      order: [
        ['popularidad', 'DESC'],
        ['cantidad_vehiculos', 'DESC']
      ],
      limit: parseInt(limit)
    });
    
    res.set({
      'Cache-Control': 'public, max-age=600', // 10 minutos
      'ETag': `"marcas-populares-${Date.now()}"`
    });
    
    res.json(marcas);
  } catch (error) {
    console.error('❌ Error al obtener marcas populares:', error);
    res.status(500).json({ error: 'Error al obtener marcas populares' });
  }
});

/**
 * ✅ GET /api/marcas/:id
 * Obtener una marca específica con sus modelos
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const marca = await Marca.findByPk(id, {
      include: [{
        model: Modelo,
        as: 'modelos',
        attributes: ['id', 'nombre'],
        order: [['nombre', 'ASC']]
      }],
      attributes: ['id', 'nombre', 'pais_origen']
    });
    
    if (!marca) {
      return res.status(404).json({ error: 'Marca no encontrada' });
    }
    
    res.json(marca);
  } catch (error) {
    console.error('❌ Error al obtener marca:', error);
    res.status(500).json({ error: 'Error al obtener marca' });
  }
});

module.exports = router;
