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

// 🧑‍💼 Rutas de automotoras (públicas y protegidas)
try {
  console.log('🧩 Cargando rutas: automotorasRoutes');
  const automotorasRoutes = require('./routes/automotoras');
  app.use('/api/automotoras', automotorasRoutes); // Rutas protegidas bajo /api
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

// 📄 Rutas de informes
try {
  const informesRoutes = require('./routes/informeRoutes');
  app.use('/api/informes', informesRoutes);
  console.log('📄 Rutas de informes cargadas');
} catch (e) {
  console.error('❌ Error cargando rutas de informes:', e.message);
}

// 🔨 Rutas de remates
try {
  const remateRoutes = require('./routes/remateRoutes');
  app.use('/api/remates', remateRoutes);
  console.log('🔨 Rutas de remates cargadas');
} catch (e) {
  console.error('❌ Error cargando rutas de remates:', e.message);
}

// 🔍 Rutas de peritajes
try {
  const peritajeRoutes = require('./routes/peritajeRoutes');
  app.use('/api/peritajes', peritajeRoutes);
  console.log('🔍 Rutas de peritajes cargadas');
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

// 🕒 Inicializar scheduler de remates
try {
  const remateScheduler = require('./services/remateScheduler');
  remateScheduler.start();
  console.log('⏰ Scheduler de remates iniciado');
} catch (e) {
  console.error('❌ Error iniciando scheduler de remates:', e.message);
}

// Endpoint de salud para Docker healthcheck
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

module.exports = app;
