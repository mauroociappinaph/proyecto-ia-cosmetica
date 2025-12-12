## 🖥️ Interfaz de usuario (UI)

> Nota: El layout (chat a la derecha y dashboard a la izquierda) es una referencia visual. En la implementación real puede adaptarse a pestañas o diseño responsive según el tamaño de pantalla.

### 8.1 Chat con el asistente

Panel derecho (por ejemplo):
- Historial de conversación.
- Campo de entrada de texto.
- Botones de "consultas rápidas" (shortcuts), como:
  - "Productos por agotarse"
  - "Reposición semanal recomendada"
  - "Productos en sobrestock"

### 8.2 Dashboard de inventario

Panel izquierdo o pestaña separada:
- Tabla de productos con:
  - Nombre, SKU, marca, stock, ventas recientes, estado.
- Indicadores visuales:
  - Verde: stock normal.
  - Amarillo: revisar pronto.
  - Rojo: bajo stock / crítico.
- Alertas:
  - Lista de productos críticos.
  - Lista de productos en posible sobrestock.
- Gráfico sencillo (opcional):
  - Top N productos por ventas en los últimos 30 días.
  - O gráfico de barras con los productos estratégicos y su stock.
