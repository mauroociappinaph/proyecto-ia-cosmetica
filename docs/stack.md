## 🛠️ Stack tecnológico

### ⚙️ Backend
- **Lenguaje**: Node.js + TypeScript
- **ORM**: Prisma
- **Base de datos**:
  - 🗄️ Desarrollo/Demo: SQLite (archivo local)
  - 🐘 Producción (opcional): PostgreSQL
- **Servidor MCP**: Implementado en Node.js con tools conectadas directamente a la BD

### 🤖 IA
- **Modelo local recomendado**: Mistral (ej. `mistral` en Ollama)
- **Opciones de ejecución**:
  - 🦙 Ollama (`ollama pull mistral`)
  - 🏠 LM Studio
- **Modo alternativo** (opcional): API de modelo externo compatible (OpenAI, etc.)

### 🎨 Frontend
- **Framework**: Next.js (React)
- **Estilos**: TailwindCSS / CSS Modules (a elección)
- **Componentes principales**:
  - 💬 Componente de chat
  - 📊 Tabla de inventario
  - 🎯 Indicadores visuales (chips, badges, colores)

### ❓ Por qué este stack
- 🎯 **Stack conocido** por recruiters (Node, TS, Prisma, React)
- 🔗 **Uso de MCP** para mostrar orquestación de tools por IA (tendencia actual)
- 💰 **Modelos open‑source** → demo totalmente local y gratuita
- 🚀 **Next.js** → facilita una UI clara para perfiles no técnicos
