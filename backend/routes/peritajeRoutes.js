// backend/routes/peritajeRoutes.js

const express = require('express');
const router = express.Router();

const { 
  crearPeritaje, 
  misPeritajes 
} = require('../controllers/peritajeController');

const verificarToken = require('../middleware/verificarToken');

router.post('/', verificarToken, crearPeritaje);
router.get('/mios', verificarToken, misPeritajes);

module.exports = router;
