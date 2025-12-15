## 🏗️ Arquitectura de alto nivel

### 🧩 Componentes

#### 🎨 Frontend (UI)
- **Next.js (React)** - Framework moderno para React
- **Zustand** - Librería para manejo de estado global (planeada para implementación)
- **Patrones**: SRP, DRY, barrel exports (diseñados para implementación)
- **Pantallas principales**:
  - 💬 Chat con el asistente
  - 📊 Dashboard de inventario (lista, estado, alertas, gráficos simples)

**Diseño de manejo de estado (Zustand, implementación pendiente):**
- **Chat Store**: Diseñado para gestionar mensajes, historial, estados de carga (y opcionalmente conexiones WebSocket)
- **Inventory Store**: Diseñado para gestionar la lista de productos, filtros aplicados, producto seleccionado y caché
- **UI Store**: Diseñado para gestionar tema, modales, notificaciones y estados de carga globales

#### ⚙️ Backend / Servidor MCP
- **Node.js + TypeScript** - Backend robusto y tipado
- **ORM Prisma** - Manejo de base de datos
- **Base de datos**: SQLite (desarrollo) / PostgreSQL (producción opcional)
- **Servidor MCP integrado en el backend** (se ejecutan en el mismo proceso Node.js para simplificar el despliegue del MVP). Expone tools como:
  - 🔍 Consultar stock
  - 📋 Generar reportes (bajo stock, sobrestock, productos estratégicos)
  - 📈 Consultar tendencias de ventas

#### 🤖 Motor de IA
- **API de Mistral AI** – Modelo configurable vía `MISTRAL_MODEL` (por defecto: `mistral-medium-latest`)
- **Rol**: Asistente principal que:
  - Entiende el mensaje del usuario
  - Decide qué tools MCP llamar
  - Combina resultados y genera respuestas explicativas

### 🔄 Flujo de datos (simplificado)
1. 👤 **Usuario** escribe en el chat (UI)
2. 🌐 **Frontend** envía consulta al backend (`/api/chat`)
3. 🖥️ **Backend**:
   - Llama al modelo de IA con el historial de conversación
   - El modelo decide qué tools MCP llamar (ej. `getLowStockReport`)
4. 🔧 **Servidor MCP** ejecuta tool:
   - Consulta BD vía Prisma
   - Devuelve datos JSON al modelo
5. 🧠 **Modelo** genera respuesta en lenguaje natural:
   - Explica hallazgos
   - Recomienda acciones (reposición, revisión, etc.)
6. 📤 **Backend** reenvía respuesta al frontend
7. 🔄 **Frontend** actualiza:
   - Chat
   - Dashboard (resaltando productos críticos)

### Manejo de errores y fallbacks (diseñado)

- Si el modelo de IA no entiende la pregunta o no sugiere una tool válida:
  - El backend devolverá un mensaje genérico ("No entendí tu consulta, ¿podés reformularla…?") y no ejecutará ninguna tool.
- Si una tool MCP devuelve error (por ejemplo, la base de datos no responde):
  - El asistente informará el fallo ("No pude acceder al inventario en este momento…") y registrará el error en los logs.
- Todas las respuestas del asistente deben ser robustas ante errores de red o datos faltantes.
