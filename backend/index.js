// backend/index.js
const app = require('./app');
const PORT = process.env.PORT || 3001;

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Autoventas360 Backend corriendo en http://localhost:${PORT}`);
});
