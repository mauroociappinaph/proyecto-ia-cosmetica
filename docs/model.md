## 🗄️ Modelo de datos

Para el MVP se utiliza una tabla principal `Product`.
Se pueden añadir más tablas (por ejemplo, `Sales`) en futuras versiones.

### Tabla `Product`

Campos sugeridos:

| Campo              | Tipo      | Descripción |
|--------------------|-----------|-------------|
| `id`               | int       | Identificador único (autoincremental) |
| `sku`              | string    | Código interno del producto |
| `name`             | string    | Nombre del producto |
| `brand`            | string    | Marca |
| `category`         | string    | Categoría (serum, crema, maquillaje, etc.) |
| `supplier`         | string    | Proveedor principal |
| `stock`            | int       | Stock actual en tienda |
| `stock_in_transit` | int       | Stock en tránsito / pedido en curso (opcional) |
| `sales_last_7`     | int       | Unidades vendidas en los últimos 7 días |
| `sales_last_30`    | int       | Unidades vendidas en los últimos 30 días |
| `last_restock_date`| date      | Fecha de última reposición |
| `cost_price`       | float     | Costo unitario |
| `sale_price`       | float     | Precio de venta |
| `margin`           | float     | Margen estimado (puede ser calculado) |
| `threshold`        | int       | Umbral de alerta de bajo stock |
| `is_strategic`     | boolean   | Marca productos estratégicos (alto margen/alto volumen) |

> **Nota**: La implementación concreta puede variar (por ejemplo, `margin` calculado en consultas en vez de almacenado).
