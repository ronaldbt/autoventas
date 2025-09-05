// backend/routes/peritajeRoutes.js

const express = require('express');
const router = express.Router();

const { 
  crearPeritaje, 
  misPeritajes,
  solicitarPeritaje,
  misPeritajesCliente,
  obtenerPeritajeCliente,
  solicitudesPendientes,
  tomarSolicitud
} = require('../controllers/peritajeController');

const verificarToken = require('../middleware/verificarToken');

// Rutas para peritos
router.post('/', verificarToken, crearPeritaje);
router.get('/mios', verificarToken, misPeritajes);
router.get('/pendientes', verificarToken, solicitudesPendientes);
router.post('/tomar/:id', verificarToken, tomarSolicitud);

// Rutas para clientes
router.post('/solicitar', verificarToken, solicitarPeritaje);
router.get('/cliente', verificarToken, misPeritajesCliente);
router.get('/cliente/:id', verificarToken, obtenerPeritajeCliente);

module.exports = router;
