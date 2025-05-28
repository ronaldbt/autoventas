const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('../utils/ensureUploadsDir');

const subirArchivoBunny = require('../services/bunnyUploader');
const { Vehiculo, Usuario, Marca, Modelo, Region, Comuna, Transmision, Combustible } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

// 📁 Configuración de almacenamiento temporal
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  }
});
const upload = multer({ storage });

/**
 * ✅ POST /api/vehiculos/crear
 * Crear un vehículo y subir imágenes a BunnyCDN
 */
router.post('/crear', upload.array('imagenes', 10), async (req, res) => {
  try {
    const { body, files } = req;

    const nuevoVehiculo = await Vehiculo.create({
      ...body,
      imagenes: []
    });

    const urls = [];

    for (const file of files || []) {
      const subida = await subirArchivoBunny(file.path, file.filename, {
        marca: body.marca,
        anio: body.anio,
        vehiculoId: nuevoVehiculo.id
      });

      if (subida.success) {
        urls.push(subida.url);
      }

      // Elimina archivo temporal local
      fs.unlinkSync(file.path);
    }

    nuevoVehiculo.imagenes = urls;
    await nuevoVehiculo.save();

    res.json({ ok: true, vehiculo: nuevoVehiculo });
  } catch (error) {
    console.error('❌ Error creando vehículo:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/**
 * ✅ GET /api/vehiculos
 * Listar todos los vehículos
 */
router.get('/', async (req, res) => {
  try {
    const vehiculos = await Vehiculo.findAll({
      include: [
        { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'] },
        { model: Marca, as: 'marca' },
        { model: Modelo, as: 'modelo' },
        { model: Region, as: 'region' },
        { model: Comuna, as: 'comuna' },
        { model: Transmision, as: 'transmision' },
        { model: Combustible, as: 'combustible' }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(vehiculos);
  } catch (error) {
    console.error('❌ Error al obtener vehículos:', error.message);
    res.status(500).json({ error: 'Error al obtener vehículos' });
  }
});

/**
 * ✅ GET /api/vehiculos/:id
 * Obtener un vehículo por ID
 */
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const vehiculo = await Vehiculo.findByPk(id, {
      include: [
        { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'] },
        { model: Marca, as: 'marca' },
        { model: Modelo, as: 'modelo' },
        { model: Region, as: 'region' },
        { model: Comuna, as: 'comuna' },
        { model: Transmision, as: 'transmision' },
        { model: Combustible, as: 'combustible' }
      ]
    });

    if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }

    res.json(vehiculo);
  } catch (error) {
    console.error('❌ Error al obtener vehículo:', error.message);
    res.status(500).json({ error: 'Error al obtener vehículo' });
  }
});



module.exports = router;
