## 🔮 Roadmap y visión futura

Ideas de evolución hacia una solución más avanzada:

#### 🔬 Funcionalidades técnicas (corto/medio plazo)
- **Predicción avanzada de demanda (TSF, time-series forecasting)**: Integrar modelos de series de tiempo para estacionalidad (Navidad, campañas, etc.).
- **Cold Start para nuevos productos**: Estimar ventas iniciales basadas en atributos (categoría, marca, tipo de producto).
- **Módulo CRUD de productos**: Interfaz de administración para que el dueño/encargado gestione inventario (crear/editar/eliminar productos, actualizar stock, importar/exportar datos).
- **XAI más formal**: Explicaciones locales más detalladas con contribución de estacionalidad, margen, políticas internas, etc.

#### 🏗️ Arquitectura y escalabilidad (medio/largo plazo)
- **Arquitectura de doble capa**: Separar claramente agente de recomendación (solo lectura) y módulo de ejecución (validación + escritura segura).
- **Integraciones**: Conectar con ERPs, POS o sistemas de e‑commerce reales.
- **Multi‑tenant**: Soporte para múltiples tiendas/cadenas y diferentes usuarios/roles.

> Estas funcionalidades no están implementadas en el MVP; se listan como visión futura para una versión enterprise.
