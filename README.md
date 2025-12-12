Asistente de Inventario con IA (Cosméticos)
Asistente de inventario con inteligencia artificial orientado a tiendas de cosméticos y perfumerías.
Permite consultar stock, analizar ventas y recibir recomendaciones automáticas de reposición a través de una interfaz tipo chat + dashboard, usando un stack moderno (Node.js, TypeScript, Prisma, LLM open‑source y MCP).

Este proyecto está pensado como prototipo de portfolio para mostrar habilidades de:

IA aplicada a un caso real de negocio.
Backend moderno + base de datos + lógica de negocio.
Orquestación de herramientas vía Model Context Protocol (MCP).
Diseño de una UI simple orientada a usuarios no técnicos.
Índice
Descripción general
Características principales
Arquitectura de alto nivel
Stack tecnológico
Modelo de datos
Lógica de negocio y reasoning de la IA
IA y orquestación con MCP
Interfaz de usuario (UI)
Instalación y configuración
Uso y ejemplos de consultas
Limitaciones actuales
Roadmap y visión futura
Estructura del repositorio
Licencia
1. Descripción general
Problema
Pequeñas y medianas tiendas de cosmética suelen gestionar su inventario con Excel o sistemas básicos. Esto implica:

Revisión manual de stock y ventas.
Quiebres de stock en productos clave.
Sobrestock en productos de baja rotación.
Decisiones de compra basadas en intuición, no en datos.
Solución
Un asistente de inventario con IA que:

Responde en lenguaje natural preguntas como:
“¿Qué tengo que reponer esta semana?”
“¿Qué productos están por agotarse?”
“¿Qué tengo en sobrestock?”
Consulta la base de datos de inventario y ventas.
Aplica reglas simples de negocio para:
detectar riesgo de quiebre de stock,
identificar sobrestock / productos estancados,
resaltar productos estratégicos.
Devuelve respuestas explicadas, no solo números.
Objetivo de portfolio
Demostrar la capacidad de:

Diseñar y construir un sistema end‑to‑end:
IA + backend + BD + UI.
Aplicar razonamiento con IA sobre datos reales.
Pensar en términos de producto y no solo de código.
2. Características principales
Chat con IA para consultas en lenguaje natural.
Dashboard visual con:
lista de productos,
estado de stock (colores),
alertas de bajo stock y sobrestock.
Casos de uso soportados:
Consultar stock de un producto.
Ver productos próximos a agotarse.
Obtener recomendaciones de reposición semanal.
Ver tendencias de ventas de un producto.
Detectar productos estancados / sobrestock.
Ver estado de productos estratégicos.
Explicaciones de la IA:
Justifica por qué recomienda reponer, pausar compras o revisar un producto.
Modelo de datos realista: incluye precio, proveedor, fecha de última reposición, margen básico, etc.
IA local (por defecto):
Uso de modelos open‑source (ej. Mistral) vía Ollama o LM Studio, sin coste por uso.
3. Arquitectura de alto nivel
3.1 Componentes
Frontend (UI)

Next.js (React).
Pantallas:
Chat con el asistente.
Dashboard de inventario (lista, estado, alertas, gráficos simples).
Backend / Servidor MCP

Node.js + TypeScript.
ORM Prisma.
Base de datos (SQLite por defecto, PostgreSQL opcional).
Expone herramientas (tools MCP) para:
Consultar stock.
Generar reportes (bajo stock, sobrestock, productos estratégicos).
Consultar tendencias de ventas.
Motor de IA

Modelo open‑source (ej. Mistral), preferentemente local:
vía Ollama o LM Studio.
El modelo actúa como asistente principal, que:
entiende el mensaje del usuario,
decide qué tools MCP llamar,
combina resultados y genera respuestas.
3.2 Flujo de datos (simplificado)
Usuario escribe en el chat (UI).
Frontend envía la consulta al backend (/api/chat).
Backend:
Llama al modelo de IA con el historial de conversación.
El modelo decide qué tools MCP usar (por ejemplo, getLowStockReport).
Servidor MCP ejecuta la tool:
Consulta la base de datos vía Prisma.
Devuelve datos estructurados (JSON) al modelo.
El modelo genera una respuesta final en lenguaje natural:
explica qué encontró,
y recomienda acciones (reposición, revisión, etc.).
El backend reenvía la respuesta al frontend.
El frontend actualiza:
el chat,
y opcionalmente el dashboard (por ejemplo, resaltando productos críticos).
4. Stack tecnológico
4.1 Backend
Lenguaje: Node.js + TypeScript
ORM: Prisma
Base de datos:
Desarrollo/Demo: SQLite (archivo local).
Producción (opcional): PostgreSQL.
Servidor MCP:
Implementado en Node.js.
Tools conectadas directamente a la BD.
4.2 IA
Modelo local recomendado:
Mistral (por ejemplo, mistral en Ollama).
Opciones de ejecución:
Ollama (ollama pull mistral).
LM Studio.
Modo alternativo (opcional):
API de un modelo externo compatible (OpenAI, etc.).
4.3 Frontend
Framework: Next.js (React).
Estilos: TailwindCSS / CSS Modules (a elección).
Componentes principales:
Componente de chat.
Tabla de inventario.
Indicadores visuales (chips, badges, colores).
4.4 Por qué este stack
Stack conocido por recruiters (Node, TS, Prisma, React).
Uso de MCP para mostrar orquestación de tools por IA (tendencia actual).
Modelos open‑source → demo totalmente local y gratuita.
Next.js → facilita una UI clara para perfiles no técnicos.
5. Modelo de datos
Para el MVP se utiliza una tabla principal Product.
Se pueden añadir más tablas (por ejemplo, Sales) en futuras versiones.

5.1 Tabla Product
Campos sugeridos:

Campo	Tipo	Descripción
id	string/int	Identificador único
sku	string	Código interno del producto
name	string	Nombre del producto
brand	string	Marca
category	string	Categoría (serum, crema, maquillaje, etc.)
supplier	string	Proveedor principal
stock	int	Stock actual en tienda
stock_in_transit	int	Stock en tránsito / pedido en curso (opcional)
sales_last_7	int	Unidades vendidas en los últimos 7 días
sales_last_30	int	Unidades vendidas en los últimos 30 días
last_restock_date	date	Fecha de última reposición
cost_price	float	Costo unitario
sale_price	float	Precio de venta
margin	float	Margen estimado (puede ser calculado)
threshold	int	Umbral de alerta de bajo stock
is_strategic	boolean	Marca productos estratégicos (alto margen/alto volumen)
Nota: la implementación concreta puede variar (por ejemplo, margin calculado en consultas en vez de almacenado).

6. Lógica de negocio y reasoning de la IA
6.1 Reglas básicas de reposición (MVP)
Ejemplo de reglas simples:

Promedio de ventas 7 días
txt

promedio_diario_7d = sales_last_7 / 7
Proyección a 7 días
txt

proyección_7d = promedio_diario_7d * 7
Detección de riesgo de quiebre
txt

Si stock_actual < proyección_7d
  → producto en riesgo de quiebre en la próxima semana
Cantidad sugerida de reposición
txt

cantidad_sugerida = max((proyección_7d * 2) - stock_actual, 0)
La idea es cubrir, por ejemplo, dos semanas de ventas basadas en la última semana.

6.2 Sobreestock / productos estancados
Se consideran productos en sobrestock / estancados aquellos con:

stock alto (por encima de cierto umbral relativo al promedio de ventas).
sales_last_30 bajas o cero.
Regla simple:

txt

Si stock_actual > (promedio_diario_30d * 45 días)
  Y sales_last_30 es baja
  → producto potencialmente estancado/sobrestock
La IA puede sugerir:

descuentos,
bundles,
campañas promocionales.
6.3 Productos estratégicos
Productos marcados con is_strategic = true:

Se consideran prioritarios en:
reportes de bajo stock,
recomendaciones de reposición.
Las alertas son más agresivas (niveles de riesgo más sensibles).
6.4 Ejemplo concreto de reasoning de la IA
Pregunta del usuario:

“¿Qué tengo que reponer esta semana?”

Pasos internos del asistente:

Llama a la tool getLowStockReport() para obtener productos por debajo de cierto umbral de seguridad.
Para cada producto del reporte:
Calcula promedio_diario_7d = sales_last_7 / 7.
Calcula proyección_7d = promedio_diario_7d * 7.
Compara proyección_7d vs stock.
Verifica si is_strategic = true.
Marca como críticos los productos:
cuyo stock no alcanza para la proyección de 7 días, y/o
que son estratégicos y tienen margen alto.
Calcula cantidad_sugerida con la fórmula anterior.
Genera una respuesta en lenguaje natural, por ejemplo:
“Esta semana te conviene reponer:

20 unidades del Serum Antioxidante X: vendiste unas 5 por día en la última semana y solo tenés 10 en stock; en menos de 3 días te quedarías sin unidades. Es un producto estratégico con buen margen.
15 unidades de la Crema Hidratante Y: representa el 12% de tus ventas del mes y tu stock actual solo cubre aproximadamente 5 días.
El resto de los productos está dentro de niveles normales de inventario.”

7. IA y orquestación con MCP
7.1 Tools MCP disponibles
Implementadas en el servidor MCP:

getProductStock(productName | sku)

Devuelve:
stock actual,
ventas recientes,
umbral,
info básica del producto.
getLowStockReport()

Devuelve una lista de productos por debajo de threshold
o con riesgo de quiebre según proyección simple.
getSalesTrends(productName | sku)

Devuelve ventas 7/30 días y tendencia básica (sube/baja/estable).
recommendReorder(productName | sku)

Calcula cantidad_sugerida a partir de ventas + stock + umbral.
searchProducts(keyword)

Busca productos por nombre, marca o categoría.
getOverstockReport()

Detecta productos en potencial sobrestock/estancados.
getStrategicProductsStatus()

Lista productos con is_strategic = true y su nivel de riesgo.
7.2 Asistente de IA (agente principal)
Rol: Asistente de inventario para tiendas de cosmética.
Responsabilidades:
Entender la intención del usuario.
Elegir y llamar tools MCP adecuadas.
Integrar los resultados con las reglas de negocio.
Responder en lenguaje natural, explicando el razonamiento.
Por simplicidad, esta versión utiliza un solo agente (asistente principal).
En una versión futura podría separarse en:

Agente de recomendación (solo lectura).
Módulo de ejecución (validación + escritura en sistemas reales).
8. Interfaz de usuario (UI)
8.1 Chat con el asistente
Panel derecho (por ejemplo):
Historial de conversación.
Entrada de texto.
Botones de “consultas rápidas” (shortcuts), como:
“Productos por agotarse”
“Reposición semanal recomendada”
“Productos en sobrestock”
8.2 Dashboard de inventario
Panel izquierdo o pestaña separada:
Tabla de productos con:
nombre, sku, marca, stock, ventas recientes, estado.
Indicadores visuales:
Verde: stock normal.
Amarillo: revisar pronto.
Rojo: bajo stock / crítico.
Alertas:
Lista de productos críticos.
Lista de productos en posible sobrestock.
Gráfico sencillo (opcional):
Top N productos por ventas últimos 30 días.
O gráfico de barras con los productos estratégicos y su stock.
9. Instalación y configuración
Nota: los nombres de carpetas/scripts son orientativos.
Ajusta según tu implementación real.

9.1 Requisitos previos
Node.js >= 18
npm / pnpm / yarn
Ollama o LM Studio
(para ejecutar el modelo local de IA)
Git
(Opcional) Docker + PostgreSQL si quieres usar Postgres en lugar de SQLite.
9.2 Clonar repositorio
Bash

git clone https://github.com/tu-usuario/asistente-inventario-ia-cosmeticos.git
cd asistente-inventario-ia-cosmeticos
9.3 Configurar modelo de IA (Ollama)
Instala Ollama según tu sistema operativo.
Descarga el modelo Mistral:
Bash

ollama pull mistral
Inicia el servidor de Ollama (si no arranca automáticamente):
Bash

ollama serve
9.4 Backend / MCP
Bash

cd backend
cp .env.example .env
npm install
En el archivo .env, configurar por ejemplo:

env

# Base de datos (SQLite por defecto)
DATABASE_URL="file:./dev.db"

# IA local vía Ollama
LLM_PROVIDER="ollama"
LLM_MODEL="mistral"
OLLAMA_HOST="http://localhost:11434"

# Puerto del servidor backend/MCP
PORT=4000
Migraciones y seed
Bash

npx prisma migrate dev
npx prisma db seed   # si tienes script de seed configurado
Ejecutar backend
Bash

npm run dev
Por defecto debería levantar en http://localhost:4000.

9.5 Frontend (Next.js)
Bash

cd ../frontend
cp .env.example .env
npm install
En .env (frontend):

env

NEXT_PUBLIC_API_URL="http://localhost:4000"
Ejecutar frontend
Bash

npm run dev
Frontend disponible en http://localhost:3000 (por defecto).

10. Uso y ejemplos de consultas
Una vez levantado el backend y el frontend:

Abre http://localhost:3000 en el navegador.
Verás:
el chat con el asistente,
y/o el dashboard con la lista de productos.
10.1 Ejemplos de consultas útiles
Consultar stock de un producto:

“¿Cuántas unidades quedan del serum antioxidante X?”

Ver productos próximos a agotarse:

“¿Qué productos están por agotarse esta semana?”

Recomendaciones de reposición:

“¿Qué tengo que reponer esta semana?”

Tendencia de ventas:

“¿Cómo se movieron las ventas del ácido hialurónico este mes?”

Sobrestock / productos estancados:

“Mostrame los productos que tengo en sobrestock o se venden muy lento.”

Productos estratégicos:

“¿Cómo están mis productos estratégicos hoy?”

10.2 Interpretación de respuestas
El asistente debería:
mencionar el producto, el stock actual y las ventas recientes,
indicar si hay riesgo de quiebre,
sugerir una cantidad a reponer cuando sea necesario,
justificar la recomendación con referencias a ventas y stock.
11. Limitaciones actuales
Este prototipo está pensado como MVP de portfolio, por lo que:

Las reglas de negocio son simples (no hay modelos de series de tiempo avanzados).
La IA no escribe directamente en sistemas externos (no crea órdenes de compra reales).
Depende de que los datos de inventario estén razonablemente actualizados.
No hay aún:
gestión de usuarios/roles avanzada,
multi‑tenant real (múltiples tiendas),
integraciones con ERP / POS.
12. Roadmap y visión futura
Ideas de evolución hacia una solución más avanzada:

Predicción avanzada de demanda (TSF)
Integrar modelos de series de tiempo para estacionalidad (Navidad, campañas, etc.).
Cold Start para nuevos productos
Estimar ventas iniciales basadas en atributos (categoría, marca, tipo de producto).
Arquitectura de doble capa
Separar claramente:
agente de recomendación (solo lectura),
módulo de ejecución (validación + escritura segura).
XAI más formal
Explicaciones locales más detalladas:
contribución de estacionalidad, margen, políticas internas, etc.
Integraciones
Conectar con ERPs, POS o sistemas de e‑commerce reales.
Multi‑tenant
Soporte para múltiples tiendas/cadenas y diferentes usuarios/roles.
13. Estructura del repositorio
Ejemplo de estructura:

Bash

.
├── backend/
│   ├── src/
│   │   ├── mcp/
│   │   │   ├── tools/          # Implementación de tools MCP
│   │   │   └── server.ts       # Servidor MCP / API backend
│   │   ├── db/
│   │   │   └── prismaClient.ts
│   │   ├── routes/
│   │   │   └── chat.ts         # Endpoint /api/chat
│   │   └── index.ts
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── seed.ts
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── app/ o src/
│   │   ├── pages/ o app/
│   │   │   ├── index.tsx       # Dashboard + chat
│   │   │   └── api/ (si se usa Next API)
│   │   ├── components/
│   │   │   ├── Chat.tsx
│   │   │   └── InventoryTable.tsx
│   │   └── lib/
│   ├── package.json
│   └── .env.example
│
├── README.md
└── package.json (root, opcional)
14. Licencia
Define aquí la licencia que desees usar, por ejemplo:

text

MIT License
