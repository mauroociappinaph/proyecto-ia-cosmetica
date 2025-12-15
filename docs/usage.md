## 💬 Uso y ejemplos de consultas

Una vez levantado el backend y el frontend (cuando estén implementados):

Abre `http://localhost:3000` en el navegador.
Verás:
- el chat con el asistente,
- y/o el dashboard con la lista de productos.

### 10.1 Ejemplos de consultas útiles

**Consultar stock de un producto:**
- "¿Cuántas unidades quedan del serum antioxidante X?"

**Ver productos próximos a agotarse:**
- "¿Qué productos están por agotarse esta semana?"

**Recomendaciones de reposición:**
- "¿Qué tengo que reponer esta semana?"

**Tendencia de ventas:**
- "¿Cómo se movieron las ventas del ácido hialurónico este mes?"

**Sobrestock / productos estancados:**
- "Mostrame los productos que tengo en sobrestock o se venden muy lento."

**Productos estratégicos:**
- "¿Cómo están mis productos estratégicos hoy?"

### 10.2 Interpretación de respuestas

El asistente debería:
- Mencionar el producto, el stock actual y las ventas recientes.
- Indicar si hay riesgo de quiebre o si el stock es suficiente.
- Sugerir una cantidad a reponer cuando sea necesario.
- Justificar la recomendación con referencias a ventas, stock y umbrales.

> **Ejemplo:**
> **Pregunta:** "¿Qué tengo que reponer esta semana?"
> **Respuesta del asistente:** "Esta semana te conviene reponer 20 unidades del Serum Antioxidante X: vendiste unas 5 por día en la última semana y solo tenés 10 en stock; en menos de 3 días te quedarías sin unidades. Es un producto estratégico con buen margen."
