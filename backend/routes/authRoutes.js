// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const verificarToken = require('../middleware/verificarToken');



router.post('/register', usuarioController.register);
router.post('/login', usuarioController.login);

router.get('/verificar', verificarToken, (req, res) => {
  res.json({ ok: true, usuario: req.usuario });
});

module.exports = router;
