// controllers/usuarioController.js
const { Usuario, Automotora } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  console.log('🔵 [REGISTER] Iniciando registro...');
  console.log('🔵 [REGISTER] Datos recibidos:', req.body);
  
  const { nombre, email, password, rol } = req.body;
  
  try {
    console.log('🔵 [REGISTER] Verificando email existente...');
    const existing = await Usuario.findOne({ where: { email } });
    if (existing) {
      console.log('❌ [REGISTER] Email ya registrado:', email);
      return res.status(400).json({ error: 'Email ya registrado' });
    }

    console.log('🔵 [REGISTER] Creando hash de contraseña...');
    const hash = await bcrypt.hash(password, 10);
    
    console.log('🔵 [REGISTER] Creando usuario...');
    const nuevoUsuario = await Usuario.create({ nombre, email, password: hash, rol });
    console.log('✅ [REGISTER] Usuario creado:', nuevoUsuario.id);

    if (rol === 'AUTOMOTORA') {
      console.log('🔵 [REGISTER] Creando automotora...');
      const slug = nombre
        .toLowerCase()
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9\-]/g, '');

      console.log('🔵 [REGISTER] Slug generado:', slug);
      
      const nuevaAutomotora = await Automotora.create({
        nombre,
        slug,
        email,
        usuarioId: nuevoUsuario.id,
        direccion: '',
        telefono: '',
        logo: ''
      });
      
      console.log('✅ [REGISTER] Automotora creada:', nuevaAutomotora.id);
    }

    console.log('✅ [REGISTER] Registro exitoso para:', email);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    console.error('❌ [REGISTER] Error en registro:', err);
    console.error('❌ [REGISTER] Stack trace:', err.stack);
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
