"""
Hugging Face Space: Clasificador de Tools MCP

Demo para clasificar consultas de usuario en las herramientas disponibles:
- getLowStockReport
- getOverstockReport
- getProductStock

Modelo: DistilBERT fine-tuneado en dataset sintético.
"""

import gradio as gr
from transformers import pipeline

# Cargar el modelo desde Hugging Face Hub
MODEL_NAME = "marioxasas/tool-classifier-mcp"

# Crear pipeline de clasificación
classifier = pipeline("text-classification", model=MODEL_NAME)

# Mapeo de labels a descripciones
LABEL_DESCRIPTIONS = {
    "LABEL_0": "getLowStockReport - Reporte de productos con stock bajo",
    "LABEL_1": "getOverstockReport - Reporte de productos con sobrestock",
    "LABEL_2": "getProductStock - Consulta de stock de un producto específico"
}

def classify_query(query):
    """Clasifica la consulta del usuario."""
    if not query.strip():
        return "Por favor, ingresa una consulta válida."

    result = classifier(query)[0]
    label = result['label']
    confidence = result['score']

    description = LABEL_DESCRIPTIONS.get(label, "Tool desconocida")

    return f"**Tool sugerida:** {description}\n\n**Confianza:** {confidence:.2f}"

# Interfaz Gradio
with gr.Blocks(title="Clasificador de Tools MCP", theme=gr.themes.Soft()) as demo:
    gr.Markdown("# 🤖 Clasificador de Tools MCP")
    gr.Markdown("""
    Este demo clasifica consultas de usuario relacionadas con inventario de cosméticos
    en las herramientas disponibles del asistente IA.

    **Ejemplos de consultas:**
    - "¿Qué productos están por agotarse?"
    - "¿Tengo productos con sobrestock?"
    - "¿Cuántas unidades quedan del serum facial?"
    """)

    with gr.Row():
        with gr.Column():
            input_text = gr.Textbox(
                label="Consulta del usuario",
                placeholder="Ingresa tu consulta sobre inventario...",
                lines=3
            )
            submit_btn = gr.Button("Clasificar", variant="primary")

        with gr.Column():
            output_text = gr.Textbox(
                label="Resultado de clasificación",
                lines=4,
                interactive=False
            )

    submit_btn.click(fn=classify_query, inputs=input_text, outputs=output_text)

    gr.Markdown("""
    ---
    **Modelo:** DistilBERT fine-tuneado en dataset sintético de 90 ejemplos.

    **Accuracy en test:** ~67%

    **Proyecto:** Asistente de Inventario con IA (Cosméticos)
    """)

if __name__ == "__main__":
    demo.launch()
