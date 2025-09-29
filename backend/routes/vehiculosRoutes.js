const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
require('../utils/ensureUploadsDir');

const subirArchivoBunny = require('../services/bunnyUploader');
const { Vehiculo, Usuario, Marca, Modelo, Region, Comuna, Transmision, Combustible, Carroceria } = require('../models');
const { Op } = require('sequelize');
const verificarToken = require('../middleware/verificarToken');

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
router.post('/crear', verificarToken, upload.array('imagenes', 10), async (req, res) => {
  try {
    const { body, files } = req;

    // Permitir modelo en texto libre: si viene 'modeloNombre' sin 'modeloId', lo guardamos en 'version'
    if (body.modeloNombre && !body.modeloId) {
      body.version = body.version ? `${body.version} ${body.modeloNombre}` : body.modeloNombre;
    }
    // Evitar insertar columna inexistente
    if (body.modeloNombre) {
      delete body.modeloNombre;
    }

    // Permitir comuna en texto libre: si viene 'comunaNombre' sin 'comunaId', lo agregamos a la descripción
    if (body.comunaNombre && !body.comunaId) {
      const descExtra = `\nUbicación: ${body.comunaNombre}`;
      body.descripcion = body.descripcion ? `${body.descripcion}${descExtra}` : descExtra.trim();
    }
    if (body.comunaNombre) {
      delete body.comunaNombre;
    }

    // Asignar automáticamente el vendedorId del usuario logueado
    const vehiculoData = {
      ...body,
      vendedorId: req.usuario.id, // ID del usuario autenticado
      imagenes: []
    };

    console.log('🔍 Datos del vehículo a crear:', vehiculoData);

    const nuevoVehiculo = await Vehiculo.create(vehiculoData);

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
    const {
      marcaId,
      modelo, // texto libre en version
      regionId,
      comunaId,
      anioMin,
      anioMax,
      precioMin,
      precioMax,
      carroceriaId
    } = req.query;

    const filtros = { estado: 'ACTIVO' };
    if (marcaId) filtros.marcaId = marcaId;
    if (regionId) filtros.regionId = regionId;
    if (comunaId) filtros.comunaId = comunaId;
    if (carroceriaId) filtros.carroceriaId = carroceriaId;

    const where = { ...filtros };
    const { Op } = require('sequelize');
    if (anioMin) where.anio = { ...where.anio, [Op.gte]: Number(anioMin) };
    if (anioMax) where.anio = { ...where.anio, [Op.lte]: Number(anioMax) };
    if (precioMin) where.precio = { ...where.precio, [Op.gte]: Number(precioMin) };
    if (precioMax) where.precio = { ...where.precio, [Op.lte]: Number(precioMax) };

    const vehiculos = await Vehiculo.findAll({
      where,
      include: [
        { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'] },
        { model: Marca, as: 'marca' },
        { model: Modelo, as: 'modelo' },
        { model: Region, as: 'region' },
        { model: Comuna, as: 'comuna' },
        { model: Transmision, as: 'transmision' },
        { model: Combustible, as: 'combustible' },
        { model: Carroceria, as: 'carroceria' }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json({ vehiculos });
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
        { model: Combustible, as: 'combustible' },
        { model: Carroceria, as: 'carroceria' }
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



// ✅ Ruta de búsqueda avanzada con filtros
router.post('/buscar', async (req, res) => {
  try {
    const {
      marcaId,
      modelo,
      palabras,
      regionId,
      comunaId,
      anioMin,
      anioMax,
      precioMin,
      precioMax
    } = req.body;

    const { Op } = require('sequelize');
    const filtros = {
      estado: 'ACTIVO'
    };

    if (marcaId) filtros.marcaId = marcaId;
    if (modelo) filtros.version = { [Op.iLike]: `%${modelo}%` };
    if (palabras) filtros.titulo = { [Op.iLike]: `%${palabras}%` };
    if (regionId) filtros.regionId = regionId;
    if (comunaId) filtros.comunaId = comunaId;
    if (anioMin) filtros.anio = { ...filtros.anio, [Op.gte]: anioMin };
    if (anioMax) filtros.anio = { ...filtros.anio, [Op.lte]: anioMax };
    if (precioMin) filtros.precio = { ...filtros.precio, [Op.gte]: precioMin };
    if (precioMax) filtros.precio = { ...filtros.precio, [Op.lte]: precioMax };

    const vehiculos = await Vehiculo.findAll({
      where: filtros,
      include: [
        { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'] },
        { model: Marca, as: 'marca' },
        { model: Modelo, as: 'modelo' },
        { model: Region, as: 'region' },
        { model: Comuna, as: 'comuna' },
        { model: Transmision, as: 'transmision' },
        { model: Combustible, as: 'combustible' },
        { model: Carroceria, as: 'carroceria' }
      ],
      order: [['createdAt', 'DESC']],
      limit: 100
    });

    res.json(vehiculos);
  } catch (error) {
    console.error('❌ Error en búsqueda POST /buscar:', error.message);
    res.status(500).json({ error: 'Error al buscar vehículos' });
  }
});



/**
 * ✅ GET /api/vehiculos/mis-vehiculos
 * Obtener vehículos del usuario logueado
 */
router.get('/mis-vehiculos', verificarToken, async (req, res) => {
  try {
    const vehiculos = await Vehiculo.findAll({
      where: { 
        vendedorId: req.usuario.id,
        estado: { [Op.ne]: 'ELIMINADO' } // Excluir eliminados
      },
      include: [
        { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'], required: false },
        { model: Marca, as: 'marca', required: false },
        { model: Modelo, as: 'modelo', required: false },
        { model: Region, as: 'region', required: false },
        { model: Comuna, as: 'comuna', required: false },
        { model: Transmision, as: 'transmision', required: false },
        { model: Combustible, as: 'combustible', required: false },
        { model: Carroceria, as: 'carroceria', required: false }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.json({ vehiculos });
  } catch (error) {
    console.error('❌ Error al obtener mis vehículos:', error.message);
    res.status(500).json({ error: 'Error al obtener vehículos del usuario' });
  }
});

/**
 * ✅ PUT /api/vehiculos/:id
 * Actualizar vehículo (solo propietario)
 */
router.put('/:id', verificarToken, upload.array('imagenes', 10), async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const vehiculo = await Vehiculo.findByPk(id);
    
    if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }

    // Verificar que el usuario sea el propietario
    if (vehiculo.vendedorId !== req.usuario.id) {
      return res.status(403).json({ error: 'No tienes permisos para editar este vehículo' });
    }

    const { body, files } = req;

    // Manejo de modelo en texto libre
    if (body.modeloNombre && !body.modeloId) {
      body.version = body.version ? `${body.version} ${body.modeloNombre}` : body.modeloNombre;
    }
    if (body.modeloNombre) {
      delete body.modeloNombre;
    }

    // Manejo de comuna en texto libre
    if (body.comunaNombre && !body.comunaId) {
      const descExtra = `\\nUbicación: ${body.comunaNombre}`;
      body.descripcion = body.descripcion ? `${body.descripcion}${descExtra}` : descExtra.trim();
    }
    if (body.comunaNombre) {
      delete body.comunaNombre;
    }

    // Actualizar vehículo
    await vehiculo.update(body);

    // Manejar nuevas imágenes si se subieron
    if (files && files.length > 0) {
      const nuevasUrls = [];
      
      for (const file of files) {
        const subida = await subirArchivoBunny(file.path, file.filename, {
          marca: body.marca || vehiculo.marca,
          anio: body.anio || vehiculo.anio,
          vehiculoId: vehiculo.id
        });

        if (subida.success) {
          nuevasUrls.push(subida.url);
        }

        // Elimina archivo temporal
        fs.unlinkSync(file.path);
      }

      // Combinar imágenes existentes con nuevas
      const imagenesActuales = vehiculo.imagenes || [];
      vehiculo.imagenes = [...imagenesActuales, ...nuevasUrls];
      await vehiculo.save();
    }

    // Obtener vehículo actualizado con relaciones
    const vehiculoActualizado = await Vehiculo.findByPk(id, {
      include: [
        { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'], required: false },
        { model: Marca, as: 'marca', required: false },
        { model: Modelo, as: 'modelo', required: false },
        { model: Region, as: 'region', required: false },
        { model: Comuna, as: 'comuna', required: false },
        { model: Transmision, as: 'transmision', required: false },
        { model: Combustible, as: 'combustible', required: false },
        { model: Carroceria, as: 'carroceria', required: false }
      ]
    });

    res.json({ ok: true, vehiculo: vehiculoActualizado });
  } catch (error) {
    console.error('❌ Error actualizando vehículo:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

/**
 * ✅ DELETE /api/vehiculos/:id
 * Eliminar vehículo (solo propietario)
 */
router.delete('/:id', verificarToken, async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido' });
  }

  try {
    const vehiculo = await Vehiculo.findByPk(id);
    
    if (!vehiculo) {
      return res.status(404).json({ error: 'Vehículo no encontrado' });
    }

    // Verificar que el usuario sea el propietario
    if (vehiculo.vendedorId !== req.usuario.id) {
      return res.status(403).json({ error: 'No tienes permisos para eliminar este vehículo' });
    }

    // Marcar como eliminado en lugar de eliminar físicamente
    await vehiculo.update({ estado: 'ELIMINADO' });

    res.json({ ok: true, message: 'Vehículo eliminado correctamente' });
  } catch (error) {
    console.error('❌ Error eliminando vehículo:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
