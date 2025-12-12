## 🤖 IA y orquestación con MCP

### 7.1 Tools MCP disponibles

Implementadas en el servidor MCP:

- `getProductStock(productName | sku)`
  Devuelve: stock actual, ventas recientes, umbral, info básica del producto

- `getLowStockReport()`
  Devuelve una lista de productos por debajo de `threshold` o con riesgo de quiebre según proyección simple

- `getSalesTrends(productName | sku)`
  Devuelve ventas 7/30 días y tendencia básica (sube/baja/estable)

- `recommendReorder(productName | sku)`
  Calcula `cantidad_sugerida` a partir de ventas + stock + umbral

- `searchProducts(keyword)`
  Busca productos por nombre, marca o categoría

- `getOverstockReport()`
  Detecta productos en potencial sobrestock/estancados

- `getStrategicProductsStatus()`
  Lista productos con `is_strategic = true` y su nivel de riesgo

### 7.2 Asistente de IA (agente principal)

**Rol**: Asistente de inventario para tiendas de cosmética.

**Responsabilidades**:
- Entender la intención del usuario
- Elegir y llamar tools MCP adecuadas
- Integrar los resultados con las reglas de negocio
- Responder en lenguaje natural, explicando el razonamiento

Por simplicidad, esta versión utiliza un solo agente (asistente principal).
En una versión futura podría separarse en:
- Agente de recomendación (solo lectura)
- Módulo de ejecución (validación + escritura segura)
