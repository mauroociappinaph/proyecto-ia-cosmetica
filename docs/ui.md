## 🖥️ Interfaz de usuario (UI)

> **Estado**: Diseño completo, implementación pendiente.

> Nota: El layout (chat a la derecha y dashboard a la izquierda) es una referencia visual. En la implementación real puede adaptarse a pestañas o diseño responsive según el tamaño de pantalla.

### Diseño de Estado de la UI (Zustand)

El diseño contempla Zustand para manejar el estado global de manera eficiente:

**Chat Store (diseñado para implementación):**
- `messages`: Array de mensajes (usuario/IA)
- `isTyping`: Estado de carga durante respuestas
- `chatHistory`: Historial persistente en localStorage
- `connectionStatus`: Estado de conexión con backend

**Inventory Store (diseñado para implementación):**
- `products`: Lista completa de productos
- `filteredProducts`: Productos después de aplicar filtros
- `selectedProduct`: Producto actualmente seleccionado
- `filters`: Objeto con filtros aplicados (categoría, stock, marca)
- `loading`: Estado de carga de datos

**UI Store (diseñado para implementación):**
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

### Módulo futuro: gestión de productos (CRUD)

> **Estado**: Diseño completo, implementación pendiente.

En el estado actual, los productos se cargan de forma técnica mediante scripts de seed en la base de datos. Para una versión más avanzada del sistema, se diseñará un **módulo de administración completo** que permita al dueño/encargado de la tienda gestionar su inventario sin intervención técnica.

**Funcionalidades planeadas:**
- **Crear productos**: Formulario intuitivo para añadir nuevos productos con campos como nombre, marca, categoría, precios, umbrales, etc.
- **Editar productos**: Modificar información de productos existentes (precios, categorías, proveedores, etc.)
- **Eliminar productos**: Opción para dar de baja productos obsoletos
- **Actualizar stock manualmente**: Interfaz simple para ajustar niveles de stock cuando llegan nuevas mercancías
- **Importar/exportar datos**: Funcionalidad opcional para importar productos desde CSV/Excel o exportar el catálogo completo

**Diseño de UX:**
- Interfaz separada del dashboard de consulta (accesible desde menú de administración)
- Formularios validados con mensajes de error claros
- Confirmaciones para acciones destructivas (eliminar producto)
- Diseño responsive para uso en tablet/dispositivo móvil
- Navegación intuitiva con breadcrumbs y botones de acción contextuales

Este módulo transformará el sistema de un asistente de consulta en una **solución completa de gestión de inventario**, permitiendo al usuario final tener control total sobre su catálogo de productos.
