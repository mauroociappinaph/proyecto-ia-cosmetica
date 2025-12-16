import express from 'express';
import prisma from './prismaClient';
import { getProductStock, getLowStockReport, getOverstockReport } from './mcp/tools/productTools';
import { callMistral } from './mistralClient';

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

// Endpoint de chat con IA
app.post('/api/chat', async (req, res) => {
  const { message } = req.body as { message?: string };

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid message' });
  }

  try {
    let usedTool: string | null = null;
    let toolResult: any = null;

    // Enrutamiento simple según keywords (MVP)
    const lower = message.toLowerCase();

    if (lower.includes('agotarse') || lower.includes('bajo stock') || lower.includes('reponer')) {
      usedTool = 'getLowStockReport';
      toolResult = await getLowStockReport();
    } else if (lower.includes('sobrestock') || lower.includes('se venden muy lento') || lower.includes('estancados')) {
      usedTool = 'getOverstockReport';
      toolResult = await getOverstockReport();
    } else if (lower.includes('cuántas') || lower.includes('quedan') || lower.includes('stock de')) {
      // MVP: usar hardcodeado SER001
      usedTool = 'getProductStock';
      toolResult = await getProductStock('SER001');
    }

    // Construir prompt para Mistral
    let prompt = `El usuario preguntó: "${message}".\n\n`;
    if (usedTool && toolResult) {
      prompt += `Usaste la tool ${usedTool} y obtuviste estos datos:\n${JSON.stringify(toolResult, null, 2)}\n\n`;
      prompt += `Genera una respuesta breve y clara en español explicando la situación del inventario y, si aplica, qué debería hacer la administradora.`;
    } else {
      prompt += `No se usó ninguna tool específica. Responde de forma genérica que aún no entiendes este tipo de pregunta o que la funcionalidad es parte de un MVP.`;
    }

    let answer: string;
    try {
      answer = await callMistral(prompt);
    } catch (err) {
      console.error('Error calling Mistral:', err);
      answer = 'Hubo un problema al consultar la IA. Sin embargo, aquí están los datos que tengo: ' + JSON.stringify(toolResult);
    }

    res.json({
      answer,
      usedTool,
      toolResult,
    });
  } catch (error) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({ error: 'Error interno en /api/chat' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
