## 🏗️ Metodología y Organización del Desarrollo

Este documento describe la metodología que aplico para organizar el desarrollo de este prototipo, siguiendo principios de **Spec-Driven Development (SDD)** donde la documentación completa precede a la implementación. El proceso se centra en GitHub Issues para asegurar un flujo de trabajo transparente y profesional, incluso en un proyecto individual.

### 📋 Tareas y Planificación (GitHub Issues)

Todo el trabajo, desde la implementación de features hasta la corrección de bugs, se desglosa y gestiona en **GitHub Issues**. Esto permite tener una trazabilidad completa de cada tarea y mantener el desarrollo enfocado en los objetivos del MVP.

El estado actualizado de todas las tareas, sus prioridades y los detalles técnicos se pueden consultar directamente en el [**tablero de Issues del repositorio**](https://github.com/mauroociappinaph/proyecto-ia-cosmetica/issues).

### 🏷️ Sistema de Labels

Para mantener las issues organizadas, utilizo un sistema de labels basado en prefijos que permite filtrar y priorizar el trabajo de forma eficiente.

#### Labels por Área
- **`area:backend`** 🔵 - Desarrollo backend e infraestructura.
- **`area:frontend`** 🟢 - Desarrollo frontend y UI.
- **`area:ia`** 🔴 - Integración de IA y lógica de negocio.

#### Labels por Tipo
- **`type:feature`** ✨ - Nuevas funcionalidades.
- **`type:bug`** 🐞 - Corrección de errores.
- **`type:docs`** 📄 - Tareas relacionadas con la documentación.

#### Labels por Prioridad
- **`priority:high`** 🔴 - Crítico para el MVP.
- **`priority:medium`** 🟠 - Importante, pero no bloqueante.
- **`priority:low`** 🟢 - Deseable, pero puede posponerse.

### 🔄 Workflow de Desarrollo

Aunque es un proyecto individual, sigo un flujo de trabajo disciplinado basado en GitFlow para asegurar la calidad y el orden del código.

1.  **Selección de Issue**: Comienzo el trabajo seleccionando una issue prioritaria del backlog.
2.  **Desarrollo en Ramas**: Creo una rama específica para la issue desde `develop` (ej: `feature/issue-4-chat-ui`). Todo el trabajo se realiza en esta rama.
3.  **Commits Descriptivos**: Utilizo el estándar de [Conventional Commits](https://www.conventionalcommits.org/) para los mensajes de commit (ej: `feat(ui): add chat message component`).
4.  **Pull Request**: Una vez finalizada la implementación y las pruebas locales, abro un Pull Request contra la rama `develop`, vinculando la issue que resuelve.
5.  **Auto-Revisión y Merge**: Realizo una auto-revisión crítica del Pull Request, verificando que el código cumple con los objetivos, sigue las buenas prácticas y los tests pasan. Una vez validado, se hace el merge.

### 📈 Próximos Milestones

El trabajo del MVP se agrupa en dos grandes hitos (milestones) para organizar el progreso:

-   **Milestone 1**: Backend funcional e IA (Issues #1, #2, #3, #6).
-   **Milestone 2**: Interfaz de usuario (Issues #4, #5).

### 🤝 Colaboración

Este es un proyecto de portfolio personal, pero cualquier sugerencia, reporte de bug o idea de mejora es bienvenida. La mejor forma de colaborar es creando un **Issue** en el repositorio para iniciar la conversación.

### 🛠️ Herramientas Principales

-   **Versionado**: Git.
-   **Gestión de Tareas**: GitHub Issues, Labels & Milestones.
-   **Calidad de Código**: ESLint/Prettier y TypeScript (planeado).
-   **Testing**: Pruebas unitarias y de integración (planeado). Consulta la [estrategia completa en **docs/testing.md**](../testing.md).
-   **Automatización de calidad (diseñada)**: Hooks pre-commit con Husky y workflow de GitHub Actions para validar documentación y cambios.

---

Esta metodología complementa el enfoque Spec-Driven Development (SDD): primero se definen las especificaciones y el plan de trabajo, luego se ejecuta la implementación de forma controlada.
