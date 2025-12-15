## 🛠️ Stack tecnológico

### ⚙️ Backend
- **Lenguaje**: Node.js + TypeScript
- **ORM**: Prisma
- **Base de datos**:
  - 🗄️ Desarrollo/Demo: SQLite (archivo local)
  - 🐘 Producción (opcional): PostgreSQL
- **Servidor MCP**: Integrado en el backend Node.js, con tools conectadas directamente a la BD

### 🤖 IA
- **API de Mistral AI**: Modelo configurable vía `MISTRAL_MODEL` (por defecto: `mistral-medium-latest`)
- **Ventajas**: Rendimiento consistente, sin necesidad de ejecutar modelos localmente

### 🎨 Frontend
- **Framework**: Next.js (React)
- **Estado global**: Zustand (librería ligera para manejo de estado - planeada para implementación)
- **Estilos**: TailwindCSS / CSS Modules (a elección)
- **Patrones de arquitectura** (diseñados para implementación):
  - **SRP** (Single Responsibility Principle): Cada componente/función tendrá una sola responsabilidad
  - **DRY** (Don't Repeat Yourself): Reutilización de lógica mediante custom hooks y utilities
  - **Barrel exports**: Archivos `index.ts` para exportar módulos relacionados

**Diseño de Stores Zustand (implementación pendiente):**
- `useChatStore`: Diseñado para gestionar estado del chat (mensajes, loading, historial)
- `useInventoryStore`: Diseñado para gestionar estado de inventario (productos, filtros, selección)
- `useUIStore`: Diseñado para gestionar estado de UI (modales, notificaciones, tema)

- **Componentes principales**:
  - 💬 Componente de chat
  - 📊 Tabla de inventario
  - 🎯 Indicadores visuales (chips, badges, colores)

### ❓ Por qué este stack
- 🎯 **Stack conocido** por recruiters (Node, TS, Prisma, React)
- 🔗 **Uso de MCP** para mostrar orquestación de tools por IA (tendencia actual)
- 💰 **API de Mistral AI** (requiere API key; sujeto a límites/costos según plan)
- 🚀 **Next.js** → facilita una UI clara para perfiles no técnicos
