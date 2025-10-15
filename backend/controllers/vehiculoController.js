const { Op } = require('sequelize');
const {
  Vehiculo,
  Marca,
  Modelo,
  Region,
  Comuna,
  Transmision,
  Combustible,
  Carroceria,
  Usuario
} = require('../models');

/**
 * ✅ Buscar vehículos o mostrar detalle desde una URL SEO-friendly
 * Segmentos esperados: /:region?/:comuna?/:marca?/:modelo?/:anio?/:id?
 */
exports.buscarDesdeUrlSeo = async (req, res) => {
  try {
    const { region, comuna, marca, modelo, anio, id } = req.params;

    // 🟡 Si hay ID y es número → mostrar detalle del vehículo
    if (id && /^\d+$/.test(id)) {
      const vehiculo = await Vehiculo.findByPk(id, {
        include: [
          { model: Marca, as: 'marca', required: false },
          { model: Modelo, as: 'modelo', required: false },
          { model: Region, as: 'region', required: false },
          { model: Comuna, as: 'comuna', required: false },
          { model: Transmision, as: 'transmision', required: false },
          { model: Combustible, as: 'combustible', required: false },
          { model: Carroceria, as: 'carroceria', required: false },
          { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'], required: false }
        ]
      });

      if (!vehiculo) {
        return res.status(404).json({ message: 'Vehículo no encontrado' });
      }

      return res.json(vehiculo);
    }

    // 🔍 Búsqueda filtrada por slug (si no hay ID)
    const filtros = {};

    if (region) {
      filtros['$region.nombre$'] = {
        [Op.iLike]: decodeURIComponent(region.replace(/-/g, ' '))
      };
    }

    if (comuna) {
      filtros['$comuna.nombre$'] = {
        [Op.iLike]: decodeURIComponent(comuna.replace(/-/g, ' '))
      };
    }

    if (marca) {
      filtros['$marca.nombre$'] = {
        [Op.iLike]: decodeURIComponent(marca.replace(/-/g, ' '))
      };
    }

    if (modelo) {
      filtros['$modelo.nombre$'] = {
        [Op.iLike]: decodeURIComponent(modelo.replace(/-/g, ' '))
      };
    }

    if (anio && !isNaN(anio)) {
      filtros.anio = parseInt(anio);
    }

    // 🐞 Mostrar filtros aplicados (útil para debug)
    console.log('🔍 Filtros aplicados:', filtros);

    const vehiculos = await Vehiculo.findAll({
      where: filtros,
      include: [
        { model: Marca, as: 'marca', required: false },
        { model: Modelo, as: 'modelo', required: false },
        { model: Region, as: 'region', required: false },
        { model: Comuna, as: 'comuna', required: false },
        { model: Transmision, as: 'transmision', required: false },
        { model: Combustible, as: 'combustible', required: false },
        { model: Carroceria, as: 'carroceria', required: false },
        { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'], required: false }
      ],
      order: [['createdAt', 'DESC']]
    });

    res.json(vehiculos);
  } catch (error) {
    console.error('❌ Error en búsqueda SEO-friendly:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
