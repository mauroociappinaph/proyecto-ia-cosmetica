import express from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear JSON (aunque no necesario para /health)
app.use(express.json());

// Endpoint de health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
