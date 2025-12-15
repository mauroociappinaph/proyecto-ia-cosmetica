# 🚀 Plan de Ejecución – Asistente de Inventario con IA

## 🎯 Metadatos del Proyecto
- **Enfoque**: Portfolio – Spec-Driven Development (SDD, doc-first)
- **Stack**: Next.js + Node.js + TypeScript + Prisma + MCP + Mistral AI

## 🔄 Fases de Trabajo

### Fase 1 – Setup inicial y base de datos
- [ ] TASK-001: Configurar estructura básica del repo (root, `backend/`, `frontend/`).
  *Objetivo: tener monorepo funcional con dependencias instaladas, relacionado con docs/structure.md y docs/installation.md.*
- [ ] TASK-002: Definir `schema.prisma` y migraciones iniciales.
  *Objetivo: esquema de BD compilable y funcional, relacionado con docs/model.md.*
- [ ] TASK-003: Implementar `seed.ts` con ~10–20 productos de cosmética ficticios pero realistas.
  *Objetivo: datos de ejemplo para testing, relacionado con docs/installation.md.*

### Fase 2 – Backend + MCP básico
- [ ] TASK-004: Configurar servidor HTTP básico en `backend` (`/health`).
  *Objetivo: servidor TypeScript funcional, relacionado con docs/architecture.md y docs/stack.md.*
- [ ] TASK-005: Integrar Prisma y probar consultas simples a la tabla `Product`.
  *Objetivo: conexión BD operativa, relacionado con docs/stack.md.*
- [ ] TASK-006: Implementar 2–3 tools MCP clave (`getProductStock`, `getLowStockReport`, `getOverstockReport`).
  *Objetivo: herramientas básicas de consulta, relacionado con docs/mcp.md y docs/logic.md.*
- [ ] TASK-007: Implementar una primera versión de `/api/chat` que use estas tools y una llamada simple a Mistral.
  *Objetivo: endpoint conversacional básico, relacionado con docs/architecture.md.*

### Fase 3 – Frontend MVP
- [ ] TASK-008: Inicializar app Next.js con TypeScript y TailwindCSS.
  *Objetivo: frontend base funcional, relacionado con docs/stack.md y docs/ui.md.*
- [ ] TASK-009: Crear layout básico con dashboard (tabla de productos) + chat estático.
  *Objetivo: UI skeleton responsive, relacionado con docs/ui.md.*
- [ ] TASK-010: Conectar el chat con `/api/chat` y mostrar las respuestas.
  *Objetivo: integración frontend-backend, relacionado con docs/architecture.md.*
- [ ] TASK-011: Cargar los productos reales del backend en el dashboard.
  *Objetivo: datos dinámicos en UI, relacionado con docs/features.md y docs/installation.md.*

### Fase 4 – IA avanzada (selector de tools) – Opcional
- [ ] TASK-012: Crear dataset sintético pequeño para clasificar entre `getLowStockReport`, `getOverstockReport`, `getProductStock`.
  *Objetivo: datos de training para ML, relacionado con docs/roadmap.md.*
- [ ] TASK-013: Fine-tuning de un modelo pequeño (por ejemplo DistilBERT) para esa clasificación.
  *Objetivo: modelo ML entrenado, relacionado con docs/roadmap.md.*
- [ ] TASK-014: Desplegar este modelo como demo en un Hugging Face Space (input: pregunta, output: tool sugerida).
  *Objetivo: demo funcional del clasificador, relacionado con docs/roadmap.md.*

### Fase 5 – Testing y pulido
- [ ] TASK-015: Implementar tests unitarios básicos para la lógica de negocio (reposiciones, sobrestock).
  *Objetivo: cobertura básica de lógica, relacionado con docs/testing.md y docs/logic.md.*
- [ ] TASK-016: Implementar tests de integración simples para tools MCP y `/api/chat`.
  *Objetivo: validación de integración, relacionado con docs/testing.md.*
- [ ] TASK-017: Revisar y actualizar la documentación según lo realmente implementado.
  *Objetivo: docs sincronizadas con código, relacionado con docs/project-management.md.*
