# 🧪 Estrategia de testing (diseñada)

El plan de pruebas para el MVP contempla:

## 1. Pruebas unitarias

- **Lógica de reposición** (`logic.md`):
  - Cálculo de `promedio_diario_7d` y `proyección_7d`.
  - Detección de riesgo de quiebre.
  - Cálculo de `cantidad_sugerida`.

- **Detección de sobrestock**:
  - Cálculo de `promedio_diario_30d`.
  - Clasificación de productos como estancados / sobrestock según umbral.

## 2. Pruebas de integración

- **Tools MCP**:
  - `getLowStockReport`, `getOverstockReport`, `getProductStock` contra la base de datos.
  - Comportamiento ante datos vacíos o stock nulo.

- **Endpoint `/api/chat`**:
  - Respuesta básica ante preguntas conocidas (usando mocks de IA o stubs para MCP).

## 3. Pruebas E2E (futuras)

- Flujo completo:
  - Usuario → Chat UI → Backend/MCP → IA → Respuesta visible.
- Estas pruebas se consideran para una fase posterior, cuando la UI esté implementada.

> Estado: La estrategia está definida a nivel de diseño; la implementación de los tests se hará por fases junto con el desarrollo del código.
