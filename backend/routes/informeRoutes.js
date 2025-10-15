// backend/routes/informeRoutes.js

const express = require('express');
const router = express.Router();

const { 
  solicitarInforme,
  misInformesCliente,
  obtenerInformeCliente,
  cancelarInforme
} = require('../controllers/informeController');

const verificarToken = require('../middleware/verificarToken');

// Rutas para clientes - informes
router.post('/solicitar', verificarToken, solicitarInforme);
router.get('/cliente', verificarToken, misInformesCliente);
router.get('/cliente/:id', verificarToken, obtenerInformeCliente);
router.put('/cliente/:id/cancelar', verificarToken, cancelarInforme);

module.exports = router;
