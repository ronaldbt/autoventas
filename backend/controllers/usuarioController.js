// controllers/usuarioController.js
const { Usuario, Automotora } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nombre, email, password, rol } = req.body;
  try {
    const existing = await Usuario.findOne({ where: { email } });
    if (existing) return res.status(400).json({ error: 'Email ya registrado' });

    const hash = await bcrypt.hash(password, 10);
    const nuevoUsuario = await Usuario.create({ nombre, email, password: hash, rol });

    if (rol === 'AUTOMOTORA') {
      const slug = nombre
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '');

      await Automotora.create({
        nombre,
        slug,
        email,
        usuarioId: nuevoUsuario.id,
        direccion: '',
        telefono: '',
        logo: ''
      });
    }

    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const valido = await bcrypt.compare(password, usuario.password);
    if (!valido) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ token, usuario: { id: usuario.id, nombre: usuario.nombre, rol: usuario.rol } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
