## 🧮 Lógica de negocio y reasoning de la IA

### 6.1 Reglas básicas de reposición (MVP)

Ejemplo de reglas simples:

**Promedio de ventas 7 días**
```txt
promedio_diario_7d = sales_last_7 / 7
```

**Proyección a 7 días**
```txt
proyección_7d = promedio_diario_7d * 7
```

**Detección de riesgo de quiebre**
```txt
Si stock_actual < proyección_7d
  → producto en riesgo de quiebre en la próxima semana
```

**Cantidad sugerida de reposición**
```txt
cantidad_sugerida = max((proyección_7d * 2) - stock_actual, 0)
```

La idea es cubrir, por ejemplo, dos semanas de ventas basadas en la última semana.

Estas reglas forman parte del diseño del MVP y se implementarán en el backend como lógica de negocio básica.

### 6.2 Sobreestock / productos estancados

Se consideran productos en sobrestock / estancados aquellos con:
- Stock alto (por encima de cierto umbral relativo al promedio de ventas)
- `sales_last_30` bajas o cero

**Promedio de ventas 30 días**
```txt
promedio_diario_30d = sales_last_30 / 30
```

**Regla simple:**
```txt
Si stock_actual > (promedio_diario_30d * 45)
  Y sales_last_30 es baja
  → producto potencialmente estancado/sobrestock
```

(45 días ≈ horizonte de stock máximo deseado)

Donde `sales_last_30` "es baja" puede definirse como:
- `sales_last_30 = 0` (productos totalmente parados), o
- `sales_last_30 < umbral_mínimo_ventas_30d` definido por la tienda.

La IA puede sugerir:
- Descuentos
- Bundles
- Campañas promocionales

### 6.3 Productos estratégicos

Productos marcados con `is_strategic = true`:

Se consideran prioritarios en:
- Reportes de bajo stock
- Recomendaciones de reposición

Las alertas son más agresivas (niveles de riesgo más sensibles).

### 6.4 Ejemplo concreto de reasoning de la IA

Pregunta del usuario:

> "¿Qué tengo que reponer esta semana?"

Pasos internos del asistente:

1. Llama a la tool `getLowStockReport()` para obtener productos por debajo de cierto umbral de seguridad.
2. Para cada producto del reporte:
   - Calcula `promedio_diario_7d = sales_last_7 / 7`
   - Calcula `proyección_7d = promedio_diario_7d * 7`
   - Compara `proyección_7d` vs `stock`
   - Verifica si `is_strategic = true`
3. Marca como críticos los productos:
   - Cuyo stock no alcanza para la proyección de 7 días, y/o
   - Que son estratégicos y tienen margen alto.
4. Calcula `cantidad_sugerida` con la fórmula anterior.
5. Genera una respuesta en lenguaje natural, por ejemplo:

> "Esta semana te conviene reponer:
> 20 unidades del Serum Antioxidante X: vendiste unas 5 por día en la última semana y solo tenés 10 en stock; en menos de 3 días te quedarías sin unidades. Es un producto estratégico con buen margen.
> 15 unidades de la Crema Hidratante Y: representa el 12% de tus ventas del mes y tu stock actual solo cubre aproximadamente 5 días.
> El resto de los productos está dentro de niveles normales de inventario."
