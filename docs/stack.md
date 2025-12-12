## 🛠️ Stack tecnológico

### ⚙️ Backend
- **Lenguaje**: Node.js + TypeScript
- **ORM**: Prisma
- **Base de datos**:
  - 🗄️ Desarrollo/Demo: SQLite (archivo local)
  - 🐘 Producción (opcional): PostgreSQL
- **Servidor MCP**: Integrado en el backend Node.js, con tools conectadas directamente a la BD

### 🤖 IA
- **API de Mistral AI**: Modelos como mistral-medium o mistral-large
- **Ventajas**: Rendimiento consistente, sin necesidad de ejecutar modelos localmente

### 🎨 Frontend
- **Framework**: Next.js (React)
- **Estado global**: Zustand (librería ligera para manejo de estado)
- **Estilos**: TailwindCSS / CSS Modules (a elección)
- **Patrones de arquitectura**:
  - **SRP** (Single Responsibility Principle): Cada componente/función tiene una sola responsabilidad
  - **DRY** (Don't Repeat Yourself): Reutilización de lógica mediante custom hooks y utilities
  - **Barrel exports**: Archivos `index.ts` para exportar módulos relacionados

**Stores Zustand:**
- `useChatStore`: Estado del chat (mensajes, loading, historial)
- `useInventoryStore`: Estado de inventario (productos, filtros, selección)
- `useUIStore`: Estado de UI (modales, notificaciones, tema)

- **Componentes principales**:
  - 💬 Componente de chat
  - 📊 Tabla de inventario
  - 🎯 Indicadores visuales (chips, badges, colores)

### ❓ Por qué este stack
- 🎯 **Stack conocido** por recruiters (Node, TS, Prisma, React)
- 🔗 **Uso de MCP** para mostrar orquestación de tools por IA (tendencia actual)
- 💰 **API de Mistral AI** (requiere API key; sujeto a límites/costos según plan)
- 🚀 **Next.js** → facilita una UI clara para perfiles no técnicos
