const { Op } = require('sequelize')
const {
  Vehiculo,
  Marca,
  Modelo,
  Region,
  Comuna,
  Transmision,
  Combustible,
  Usuario
} = require('../models')

/**
 * ✅ Buscar vehículos o mostrar detalle desde una URL SEO-friendly
 * Segmentos: /:region?/:comuna?/:marca?/:modelo?/:anio?/:id?
 */
exports.buscarDesdeUrlSeo = async (req, res) => {
  try {
    const { region, comuna, marca, modelo, anio, id } = req.params

    // 🟡 Si hay ID y es número → mostrar detalle del vehículo
    if (id && /^\d+$/.test(id)) {
      const vehiculo = await Vehiculo.findByPk(id, {
        include: [
          { model: Marca, as: 'marca' },
          { model: Modelo, as: 'modelo' },
          { model: Region, as: 'region' },
          { model: Comuna, as: 'comuna' },
          { model: Transmision, as: 'transmision' },
          { model: Combustible, as: 'combustible' },
          { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'] }
        ]
      })

      if (!vehiculo) {
        return res.status(404).json({ message: 'Vehículo no encontrado' })
      }

      return res.json(vehiculo)
    }

    // 🔍 Búsqueda filtrada por slug
    const filtros = {}

    if (region) {
      filtros['$region.nombre$'] = { [Op.iLike]: region.replace(/-/g, ' ') }
    }

    if (comuna) {
      filtros['$comuna.nombre$'] = { [Op.iLike]: comuna.replace(/-/g, ' ') }
    }

    if (marca) {
      filtros['$marca.nombre$'] = { [Op.iLike]: marca.replace(/-/g, ' ') }
    }

    if (modelo) {
      filtros['$modelo.nombre$'] = { [Op.iLike]: modelo.replace(/-/g, ' ') }
    }

    if (anio && !isNaN(anio)) {
      filtros.anio = parseInt(anio)
    }

    const vehiculos = await Vehiculo.findAll({
      where: filtros,
      include: [
        { model: Marca, as: 'marca' },
        { model: Modelo, as: 'modelo' },
        { model: Region, as: 'region' },
        { model: Comuna, as: 'comuna' },
        { model: Transmision, as: 'transmision' },
        { model: Combustible, as: 'combustible' },
        { model: Usuario, as: 'vendedor', attributes: ['id', 'nombre', 'email', 'rol'] }
      ],
      order: [['createdAt', 'DESC']]
    })

    res.json(vehiculos)
  } catch (error) {
    console.error('❌ Error en búsqueda SEO-friendly:', error)
    res.status(500).json({ message: 'Error interno del servidor' })
  }
}
