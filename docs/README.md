# 🗺️ Mapa de la Documentación

Este archivo sirve como índice central para toda la documentación técnica y de producto del proyecto "Asistente de Inventario con IA". Cada documento se enfoca en un aspecto específico del sistema y describe el diseño previsto del MVP (implementación en desarrollo).

Este proyecto sigue una metodología de **Spec-Driven Development (SDD)**, donde las especificaciones completas y la documentación detallada se crean antes de comenzar la implementación del código.

### Documentos Principales

-   **[overview.md](./overview.md)**: Describe el problema de negocio, la solución propuesta y los objetivos del proyecto como pieza de portfolio.
-   **[features.md](./features.md)**: Detalla las características principales y los casos de uso que el asistente soporta.
-   **[roadmap.md](./roadmap.md)**: Presenta la visión a futuro y las posibles evoluciones del prototipo hacia una solución más avanzada.
-   **[limitations.md](./limitations.md)**: Enumera las limitaciones actuales del prototipo de forma transparente.

### Arquitectura y Stack

-   **[architecture.md](./architecture.md)**: Explica la arquitectura de alto nivel, los componentes principales (Frontend, Backend, IA) y el flujo de datos.
-   **[stack.md](./stack.md)**: Describe el stack tecnológico elegido (Node.js, TypeScript, Prisma, Next.js, etc.) y la razón de su elección.
-   **[structure.md](./structure.md)**: Muestra la estructura de carpetas y archivos diseñada para el repositorio.
-   **[model.md](./model.md)**: Define el modelo de datos de la base de datos, principalmente la tabla `Product`.

### Lógica de Negocio e IA

-   **[logic.md](./logic.md)**: Detalla las reglas de negocio simples para detectar quiebres de stock, sobrestock y productos estratégicos.
-   **[mcp.md](./mcp.md)**: Describe el rol del asistente de IA y las `tools` que el servidor MCP expone para interactuar con los datos.

### Interfaz y Uso

-   **[ui.md](./ui.md)**: Presenta el diseño de la interfaz de usuario, incluyendo el chat, el dashboard y la futura gestión de productos (CRUD).
-   **[usage.md](./usage.md)**: Proporciona ejemplos de consultas en lenguaje natural que el usuario puede hacer al asistente.
-   **[installation.md](./installation.md)**: Contiene las instrucciones para la instalación y configuración local del proyecto.

### Gestión del Proyecto

-   **[project-management.md](./project-management.md)**: Explica la metodología de desarrollo, el uso de GitHub Issues, labels y el workflow de trabajo.

---

Para una vista rápida del proyecto orientada a recruiters, consulta el [`README.md` en la raíz del repositorio](../README.md).
