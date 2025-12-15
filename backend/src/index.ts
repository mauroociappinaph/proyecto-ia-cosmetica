import express from 'express';
import prisma from './prismaClient';
import { getProductStock, getLowStockReport, getOverstockReport } from './tools';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para parsear JSON
app.use(express.json());

// Endpoint de health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Endpoint de debug para listar productos
app.get('/debug/products', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products', error);
    res.status(500).json({ error: 'Error fetching products' });
  }
});

// Endpoint de debug para getProductStock
app.get('/debug/product-stock', async (req, res) => {
  const { sku } = req.query;
  if (!sku || typeof sku !== 'string') {
    return res.status(400).json({ error: 'Parámetro sku requerido' });
  }
  try {
    const result = await getProductStock(sku);
    res.json(result);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});

// Endpoint de debug para getLowStockReport
app.get('/debug/low-stock', async (req, res) => {
  try {
    const result = await getLowStockReport();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint de debug para getOverstockReport
app.get('/debug/overstock', async (req, res) => {
  try {
    const result = await getOverstockReport();
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
