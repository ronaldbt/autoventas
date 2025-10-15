// backend/routes/dashboardRoutes.js
const express = require('express');
const router = express.Router();
const verificarToken = require('../middleware/verificarToken');
const verificarRol = require('../middleware/verificarRol');

// 🎯 Dashboard de ADMIN
router.get('/admin', verificarToken, verificarRol('ADMIN'), (req, res) => {
  res.json({ mensaje: 'Bienvenido al panel de administración 👑', usuario: req.usuario });
});

// 🚗 Dashboard de CONCESIONARIO
router.get('/concesionario', verificarToken, verificarRol('CONCESIONARIO'), (req, res) => {
  res.json({ mensaje: 'Panel del concesionario 🚗', usuario: req.usuario });
});

// 👥 Dashboard de CLIENTE
router.get('/cliente', verificarToken, verificarRol('CLIENTE'), (req, res) => {
  res.json({ mensaje: 'Zona de cliente 👤', usuario: req.usuario });
});

// 📢 Dashboard de PUBLICISTA
router.get('/publicista', verificarToken, verificarRol('PUBLICISTA'), (req, res) => {
  res.json({ mensaje: 'Panel de publicista 📣', usuario: req.usuario });
});

module.exports = router;
