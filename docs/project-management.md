## 🏗️ Gestión del Proyecto

Este documento describe el sistema de gestión de proyecto implementado, centrado en GitHub Issues para organizar el desarrollo del MVP.

### 📊 Estado del Proyecto

- **Repositorio**: [mauroociappinaph/proyecto-ia-cosmetica](https://github.com/mauroociappinaph/proyecto-ia-cosmetica)
- **Rama principal**: `develop`
- **Issues activas**: 6
- **Labels configuradas**: 5
- **Commits**: 30+ commits organizados

## 📋 GitHub Issues Activas

### Issues del MVP

| ID | Título | Área | Prioridad | Estado | Descripción |
|----|--------|------|-----------|--------|-------------|
| **#1** | [Implementar Backend + Prisma + Base de Datos](https://github.com/mauroociappinaph/proyecto-ia-cosmetica/issues/1) | Backend | Alta | Abierta | Configuración completa del backend con Prisma ORM y SQLite |
| **#2** | [Implementar MCP Tools para Consultas de Inventario](https://github.com/mauroociappinaph/proyecto-ia-cosmetica/issues/2) | Backend + IA | Alta | Abierta | 7 tools MCP para consultas de productos y análisis de inventario |
| **#3** | [Integrar API de Mistral AI](https://github.com/mauroociappinaph/proyecto-ia-cosmetica/issues/3) | IA | Alta | Abierta | Cliente HTTP, manejo de errores y configuración de rate limiting |
| **#4** | [Implementar UI Chat con Historial de Conversación](https://github.com/mauroociappinaph/proyecto-ia-cosmetica/issues/4) | Frontend | Alta | Abierta | `good first issue` - Componentes de chat con Zustand |
| **#5** | [Implementar Dashboard con Gráficos y Alertas](https://github.com/mauroociappinaph/proyecto-ia-cosmetica/issues/5) | Frontend | Alta | Abierta | Tabla de productos, indicadores visuales y métricas |
| **#6** | [Implementar Lógica de Negocio y Reglas de Reposición](https://github.com/mauroociappinaph/proyecto-ia-cosmetica/issues/6) | Backend + IA | Alta | Abierta | Algoritmos de proyección de demanda y reglas de negocio |

## 🏷️ Sistema de Labels

### Labels por Área
- **`area:backend`** 🔵 - Desarrollo backend e infraestructura
- **`area:frontend`** 🟢 - Desarrollo frontend y UI
- **`area:ia`** 🔴 - Integración de IA y machine learning

### Labels por Tipo
- **`type:feature`** 🔵 - Nueva funcionalidad/implementación

### Labels por Prioridad
- **`priority:high`** 🔴 - Crítico para el MVP

### Labels Especiales
- **`good first issue`** 🟣 - Ideal para colaboradores nuevos

## 🔄 Workflow de Desarrollo

### 1. Selección de Issue
- Revisar issues abiertas con `priority:high`
- Comenzar por dependencias: Backend (#1) → IA (#3) → MCP (#2) → Lógica (#6) → Frontend (#4, #5)

### 2. Desarrollo
- Crear rama desde `develop`: `git checkout -b feature/issue-N-titulo`
- Implementar siguiendo checklist del issue
- Commits descriptivos: `feat: implement backend with Prisma ORM`

### 3. Testing y QA
- Tests unitarios para lógica de negocio
- Tests de integración para APIs
- Validación manual de funcionalidades

### 4. Pull Request
- Push a rama feature
- Crear PR contra `develop`
- Descripción detallada de cambios
- Vincular issue resuelta

### 5. Code Review y Merge
- Revisión por pares (cuando haya equipo)
- Tests pasan
- Merge a `develop`

## 🤝 Guía de Contribución

### Para Contribuidores Externos
1. Revisar issues con label `good first issue`
2. Fork del repositorio
3. Crear rama feature
4. Implementar siguiendo especificaciones del issue
5. Crear PR con descripción detallada

### Requisitos para Contribuciones
- Código comentado y legible
- Tests incluidos cuando aplique
- Actualización de documentación si es necesario
- Commits siguiendo conventional commits

### Comunicación
- Usar issues para reportar bugs o sugerir features
- Discusiones técnicas en los threads de issues
- Preguntas generales en discussions (si está habilitado)

## 📈 Métricas del Proyecto

### Commits por Categoría
- **Documentación**: 15+ commits
- **Configuración**: 5+ commits
- **Features**: Pendiente de implementación

### Cobertura de Documentación
- ✅ Arquitectura completa
- ✅ Stack tecnológico detallado
- ✅ Roadmap definido
- ✅ Estructura de código diseñada
- ✅ Guía de instalación completa

### Próximos Milestones
- **Milestone 1**: Backend + IA (Issues #1, #2, #3, #6)
- **Milestone 2**: Frontend (Issues #4, #5)

## 🛠️ Herramientas de Desarrollo

### Versionado
- **Git**: Control de versiones distribuido
- **Conventional Commits**: Estándar para mensajes de commit

### Gestión de Proyecto
- **GitHub Issues**: Sistema de tickets y seguimiento
- **Labels**: Organización por área y prioridad
- **Milestones**: Agrupación de issues relacionadas

### Calidad de Código
- **ESLint/Prettier**: Linting y formateo (planeado)
- **TypeScript**: Tipado estático
- **Tests**: Unitarios y de integración (planeado)

## 📞 Soporte

Para preguntas sobre el proyecto:
- Issues en GitHub para bugs/features
- Documentación en `/docs/` para referencia técnica
- README.md para visión general

---

*Esta documentación refleja el estado actual del proyecto. Se actualizará conforme avance la implementación.*
