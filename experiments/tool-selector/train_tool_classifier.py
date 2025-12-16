"""
TASK-013: Fine-tuning de Clasificador de Tools MCP

Este script entrena un modelo DistilBERT para clasificar consultas de usuario
en las 3 herramientas disponibles: getLowStockReport, getOverstockReport, getProductStock.

Dataset: experiments/tool-selector/dataset.jsonl (90 ejemplos sintéticos, 30 por clase)
Modelo base: distilbert-base-multilingual-cased
Salida: modelo guardado en experiments/tool-selector/model/
"""

import json
import os
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import torch
from torch.utils.data import Dataset, DataLoader
from transformers import (
    DistilBertTokenizer,
    DistilBertForSequenceClassification,
    Trainer,
    TrainingArguments,
    EarlyStoppingCallback
)

# Configuración
MODEL_NAME = "distilbert-base-multilingual-cased"
DATASET_PATH = "dataset.jsonl"
MODEL_OUTPUT_DIR = "model"
NUM_LABELS = 3
LABEL_TO_ID = {
    "getLowStockReport": 0,
    "getOverstockReport": 1,
    "getProductStock": 2
}
ID_TO_LABEL = {v: k for k, v in LABEL_TO_ID.items()}

class ToolDataset(Dataset):
    """Dataset personalizado para clasificación de tools MCP."""

    def __init__(self, texts, labels, tokenizer, max_length=128):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_length = max_length

    def __len__(self):
        return len(self.texts)

    def __getitem__(self, idx):
        text = self.texts[idx]
        label = self.labels[idx]

        encoding = self.tokenizer(
            text,
            truncation=True,
            padding='max_length',
            max_length=self.max_length,
            return_tensors='pt'
        )

        return {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
            'labels': torch.tensor(label, dtype=torch.long)
        }

def load_dataset(file_path):
    """Carga el dataset desde archivo JSONL."""
    texts = []
    labels = []

    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line:  # Skip empty lines
                data = json.loads(line)
                texts.append(data['text'])
                labels.append(LABEL_TO_ID[data['label']])

    return texts, labels

def compute_metrics(eval_pred):
    """Calcula métricas de evaluación."""
    predictions, labels = eval_pred
    predictions = predictions.argmax(axis=1)
    accuracy = accuracy_score(labels, predictions)
    return {"accuracy": accuracy}

def main():
    print("🚀 Iniciando fine-tuning del clasificador de tools MCP...")

    # 1. Cargar dataset
    print("📚 Cargando dataset...")
    texts, labels = load_dataset(DATASET_PATH)
    print(f"Dataset cargado: {len(texts)} ejemplos")
    print(f"Distribución de clases: {[labels.count(i) for i in range(NUM_LABELS)]}")

    # 2. Dividir en train/test
    train_texts, test_texts, train_labels, test_labels = train_test_split(
        texts, labels, test_size=0.2, random_state=42, stratify=labels
    )
    print(f"Train: {len(train_texts)} ejemplos, Test: {len(test_texts)} ejemplos")

    # 3. Cargar tokenizer y modelo
    print("🤖 Cargando modelo y tokenizer...")
    tokenizer = DistilBertTokenizer.from_pretrained(MODEL_NAME)
    model = DistilBertForSequenceClassification.from_pretrained(
        MODEL_NAME,
        num_labels=NUM_LABELS,
        id2label=ID_TO_LABEL,
        label2id=LABEL_TO_ID
    )

    # 4. Crear datasets
    train_dataset = ToolDataset(train_texts, train_labels, tokenizer)
    test_dataset = ToolDataset(test_texts, test_labels, tokenizer)

    # 5. Configurar entrenamiento
    training_args = TrainingArguments(
        output_dir="./results",
        num_train_epochs=5,
        per_device_train_batch_size=8,
        per_device_eval_batch_size=8,
        warmup_steps=50,
        weight_decay=0.01,
        logging_dir="./logs",
        logging_steps=10,
        eval_strategy="epoch",
        save_strategy="epoch",
        load_best_model_at_end=True,
        metric_for_best_model="accuracy",
        greater_is_better=True,
        save_total_limit=2,
        learning_rate=2e-5,
    )

    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=train_dataset,
        eval_dataset=test_dataset,
        compute_metrics=compute_metrics,
        callbacks=[EarlyStoppingCallback(early_stopping_patience=2)]
    )

    # 6. Entrenar modelo
    print("🏃 Entrenando modelo...")
    trainer.train()

    # 7. Evaluar modelo
    print("📊 Evaluando modelo...")
    eval_results = trainer.evaluate()
    print(f"Resultados de evaluación: {eval_results}")

    predictions = trainer.predict(test_dataset)
    preds = predictions.predictions.argmax(axis=1)
    print("Classification Report:")
    print(classification_report(test_labels, preds, target_names=list(LABEL_TO_ID.keys())))

    # 8. Guardar modelo
    print("💾 Guardando modelo...")
    os.makedirs(MODEL_OUTPUT_DIR, exist_ok=True)
    trainer.save_model(MODEL_OUTPUT_DIR)
    tokenizer.save_pretrained(MODEL_OUTPUT_DIR)

    print("✅ Modelo guardado exitosamente!")
    print(f"📁 Ubicación: {MODEL_OUTPUT_DIR}/")
    print(f"🎯 Accuracy final: {eval_results['eval_accuracy']:.4f}")

    # 9. Ejemplos de predicción
    print("\n🔍 Ejemplos de predicción en test set:")
    model.eval()
    for i in range(min(5, len(test_texts))):
        text = test_texts[i]
        true_label = ID_TO_LABEL[test_labels[i]]
        pred_label = ID_TO_LABEL[preds[i]]

        print(f"Texto: {text}")
        print(f"Verdadero: {true_label} | Predicho: {pred_label}")
        print("-" * 50)

if __name__ == "__main__":
    main()
