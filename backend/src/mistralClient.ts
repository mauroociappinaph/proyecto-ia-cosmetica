import OpenAI from 'openai';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL ?? "mistralai/devstral-2512:free";

if (!OPENROUTER_API_KEY) {
  throw new Error("OPENROUTER_API_KEY is not set");
}

const client = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: OPENROUTER_API_KEY,
});

export async function callMistral(prompt: string): Promise<string> {
  try {
    const response = await client.chat.completions.create({
      model: OPENROUTER_MODEL,
      messages: [
        { role: "system", content: "Eres un asistente de inventario para una tienda de cosméticos. Responde en español de forma clara y útil." },
        { role: "user", content: prompt },
      ],
    });

    const content = response.choices?.[0]?.message?.content ?? "";
    return content;
  } catch (error: any) {
    console.error("Error from OpenRouter API:", error);
    throw new Error(`OpenRouter API error: ${error.message}`);
  }
}
