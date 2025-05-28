// backend/index.js
const app = require('./app');
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Autoventas360 Backend corriendo en http://localhost:${PORT}`);
});
