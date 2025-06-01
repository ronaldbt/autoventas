// backend/app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 🧩 Middlewares
console.log('🔧 Aplicando middlewares...');
app.use(cors());
app.use(express.json());

// 📁 Asegurar carpeta temporal para multer
console.log('📁 Verificando carpeta de uploads...');
require('./utils/ensureUploadsDir');

// 🛣️ Rutas públicas (auth)
try {
  console.log('🧩 Cargando rutas: authRoutes');
  const authRoutes = require('./routes/authRoutes');
  app.use('/api/auth', authRoutes);
} catch (e) {
  console.error('❌ Error cargando authRoutes:', e.message);
}

// 🧑‍💼 Rutas públicas: automotoras por slug
try {
  console.log('🧩 Cargando rutas: automotorasRoutes');
  const automotorasRoutes = require('./routes/automotoras');
  app.use('/automotoras', automotorasRoutes); // Nota: sin /api para URL SEO-friendly
} catch (e) {
  console.error('❌ Error cargando automotorasRoutes:', e.message);
}


// 🛡️ Rutas protegidas (dashboard)
try {
  console.log('🧩 Cargando rutas: dashboardRoutes');
  const dashboardRoutes = require('./routes/dashboardRoutes');
  app.use('/api/dashboard', dashboardRoutes);
} catch (e) {
  console.error('❌ Error cargando dashboardRoutes:', e.message);
}

// 🚗 Rutas para vehículos
try {
  console.log('🧩 Cargando rutas: vehiculosRoutes');
  const vehiculosRoutes = require('./routes/vehiculosRoutes');
  app.use('/api/vehiculos', vehiculosRoutes);
} catch (e) {
  console.error('❌ Error cargando vehiculosRoutes:', e.message);
}

// 🚀 Rutas SEO-friendly
try {
  console.log('🧩 Cargando rutas: vehiculosSeoRoutes');
  const vehiculosSeoRoutes = require('./routes/vehiculosSeoRoutes');
  app.use('/api/vehiculos-seo', vehiculosSeoRoutes); // ❗ esta puede ser la conflictiva
} catch (e) {
  console.error('❌ Error cargando vehiculosSeoRoutes:', e.message);
}

// 🧾 Rutas de peritajes
try {
  const peritajesRoutes = require('./routes/peritajeRoutes');
  app.use('/api/peritajes', peritajesRoutes);
  console.log('🧾 Rutas de peritajes cargadas');
} catch (e) {
  console.error('❌ Error cargando rutas de peritajes:', e.message);
}


// 📚 Rutas catálogos
const catalogRoutes = [
  { path: '/api/marcas', file: 'marcasRoutes' },
  { path: '/api/modelos', file: 'modelosRoutes' },
  { path: '/api/transmisiones', file: 'transmisionRoutes' },
  { path: '/api/carrocerias', file: 'carroceriaRoutes' },
  { path: '/api/combustibles', file: 'combustibleRoutes' },
  { path: '/api/regiones', file: 'regionRoutes' },
  { path: '/api/comunas', file: 'comunaRoutes' }
];

catalogRoutes.forEach(({ path, file }) => {
  try {
    console.log(`📚 Cargando rutas: ${file}`);
    app.use(path, require(`./routes/${file}`));
  } catch (e) {
    console.error(`❌ Error cargando ${file}:`, e.message);
  }
});

// 🧪 Ruta base de prueba
app.get('/', (req, res) => {
  res.send('🚗 Autoventas360 Backend funcionando correctamente.');
});

console.log('✅ Todas las rutas fueron cargadas con éxito');

module.exports = app;
