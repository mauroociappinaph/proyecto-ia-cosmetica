const MISTRAL_API_KEY = process.env.MISTRAL_API_KEY;
const MISTRAL_MODEL = process.env.MISTRAL_MODEL ?? "mistral-medium-latest";

if (!MISTRAL_API_KEY) {
  throw new Error("MISTRAL_API_KEY is not set");
}

export async function callMistral(prompt: string): Promise<string> {
  // Usar endpoint de chat completions de Mistral AI (similar a OpenAI)
  const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${MISTRAL_API_KEY}`,
    },
    body: JSON.stringify({
      model: MISTRAL_MODEL,
      messages: [
        { role: "system", content: "Eres un asistente de inventario para una tienda de cosméticos. Responde en español de forma clara y útil." },
        { role: "user", content: prompt },
      ],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("Error from Mistral API:", response.status, text);
    throw new Error(`Mistral API error: ${response.status}`);
  }

  const data: any = await response.json();
  const content = data.choices?.[0]?.message?.content ?? "";
  return content;
}
