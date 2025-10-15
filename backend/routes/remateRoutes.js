const express = require('express');
const router = express.Router();

const {
  listarRemates,
  rematesDestacados,
  obtenerRemate,
  crearRemate,
  actualizarRemate,
  eliminarRemate,
  inscribirseRemate,
  listarInscripciones,
  solicitarRemate,
  cambiarEstadoRemate
} = require('../controllers/remateController');

const verificarToken = require('../middleware/verificarToken');
const verificarRol = require('../middleware/verificarRol');

// Rutas públicas
router.get('/', listarRemates);
router.get('/destacados', rematesDestacados);
router.get('/:id', obtenerRemate);

// Rutas para clientes autenticados
router.post('/:id/inscripcion', verificarToken, inscribirseRemate);
router.post('/solicitar', verificarToken, solicitarRemate);

// Rutas para administradores
router.post('/', verificarToken, verificarRol(['admin']), crearRemate);
router.put('/:id', verificarToken, verificarRol(['admin']), actualizarRemate);
router.put('/:id/estado', verificarToken, verificarRol(['admin']), cambiarEstadoRemate);
router.delete('/:id', verificarToken, verificarRol(['admin']), eliminarRemate);
router.get('/:id/inscripciones', verificarToken, verificarRol(['admin']), listarInscripciones);

module.exports = router;