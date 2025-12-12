## 🏗️ Arquitectura de alto nivel

### 🧩 Componentes

#### 🎨 Frontend (UI)
- **Next.js (React)** - Framework moderno para React
- **Pantallas principales**:
  - 💬 Chat con el asistente
  - 📊 Dashboard de inventario (lista, estado, alertas, gráficos simples)

#### ⚙️ Backend / Servidor MCP
- **Node.js + TypeScript** - Backend robusto y tipado
- **ORM Prisma** - Manejo de base de datos
- **Base de datos**: SQLite (desarrollo) / PostgreSQL (producción opcional)
- **Tools MCP expuestas**:
  - 🔍 Consultar stock
  - 📋 Generar reportes (bajo stock, sobrestock, productos estratégicos)
  - 📈 Consultar tendencias de ventas

#### 🤖 Motor de IA
- **Modelo open‑source** (ej. Mistral), preferentemente local vía Ollama o LM Studio
- **Rol**: Asistente principal que:
  - Entiende el mensaje del usuario
  - Decide qué tools MCP llamar
  - Combina resultados y genera respuestas explicativas

### 🔄 Flujo de datos (simplificado)
1. 👤 **Usuario** escribe en el chat (UI)
2. 🌐 **Frontend** envía consulta al backend (`/api/chat`)
3. 🖥️ **Backend**:
   - Llama al modelo de IA con historial de conversación
   - Modelo decide tools MCP (ej. `getLowStockReport`)
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
