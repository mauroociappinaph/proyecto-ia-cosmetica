import prisma from './prismaClient';

// Tool: getProductStock - Devuelve info de un producto por SKU
export async function getProductStock(sku: string) {
  const product = await prisma.product.findUnique({
    where: { sku },
  });

  if (!product) {
    throw new Error(`Producto con SKU ${sku} no encontrado`);
  }

  return {
    sku: product.sku,
    name: product.name,
    brand: product.brand,
    category: product.category,
    stock: product.stock,
    stock_in_transit: product.stock_in_transit,
    sales_last_7: product.sales_last_7,
    sales_last_30: product.sales_last_30,
    threshold: product.threshold,
    is_strategic: product.is_strategic,
  };
}

// Tool: getLowStockReport - Productos con riesgo de quiebre de stock
export async function getLowStockReport() {
  const products = await prisma.product.findMany();

  const lowStockProducts = products.filter((p) => {
    const promedioDiario7d = p.sales_last_7 / 7;
    const proyeccion7d = promedioDiario7d * 7; // = sales_last_7
    return p.stock < proyeccion7d;
  });

  return lowStockProducts.map((p) => ({
    sku: p.sku,
    name: p.name,
    stock: p.stock,
    sales_last_7: p.sales_last_7,
    projected_7d: p.sales_last_7, // proyección = sales_last_7
    is_strategic: p.is_strategic,
  }));
}

// Tool: getOverstockReport - Productos en potencial sobrestock/estancados
export async function getOverstockReport() {
  const products = await prisma.product.findMany();

  const overstockProducts = products.filter((p) => {
    const promedioDiario30d = p.sales_last_30 / 30;
    const limiteSobrestock = promedioDiario30d * 45;
    const ventasBajas = p.sales_last_30 < 10; // Definir "bajas" como < 10 en 30 días
    return p.stock > limiteSobrestock && ventasBajas;
  });

  return overstockProducts.map((p) => ({
    sku: p.sku,
    name: p.name,
    stock: p.stock,
    sales_last_30: p.sales_last_30,
    overstock_limit: (p.sales_last_30 / 30) * 45,
  }));
}
