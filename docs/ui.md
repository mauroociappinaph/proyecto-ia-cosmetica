## 🖥️ Interfaz de usuario (UI)

> Nota: El layout (chat a la derecha y dashboard a la izquierda) es una referencia visual. En la implementación real puede adaptarse a pestañas o diseño responsive según el tamaño de pantalla.

### Estado de la UI (Zustand)

La interfaz utiliza Zustand para manejar el estado global de manera eficiente:

**Chat Store:**
- `messages`: Array de mensajes (usuario/IA)
- `isTyping`: Estado de carga durante respuestas
- `chatHistory`: Historial persistente en localStorage
- `connectionStatus`: Estado de conexión con backend

**Inventory Store:**
- `products`: Lista completa de productos
- `filteredProducts`: Productos después de aplicar filtros
- `selectedProduct`: Producto actualmente seleccionado
- `filters`: Objeto con filtros aplicados (categoría, stock, marca)
- `loading`: Estado de carga de datos

**UI Store:**
- `theme`: Tema claro/oscuro
- `sidebarOpen`: Estado del sidebar en móvil
- `notifications`: Array de notificaciones toast
- `modals`: Estados de modales abiertos

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
