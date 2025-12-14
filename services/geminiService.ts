import { GoogleGenAI, Chat, GenerativeModel } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from "../constants";

let chatSession: Chat | null = null;
let genAI: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.warn("API Key not found inside environment variables.");
    }
    // Using loose type casting to handle potential environment issues gracefully in demo
    genAI = new GoogleGenAI({ apiKey: apiKey || 'DEMO_KEY' });
  }
  return genAI;
};

export const initializeChat = async (): Promise<Chat> => {
  const ai = getAIClient();
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: AI_SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 300,
    },
  });
  return chatSession;
};

export const sendMessageToGemini = async function* (message: string) {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
      throw new Error("Failed to initialize chat session.");
  }

  try {
    const streamResult = await chatSession.sendMessageStream({ message });
    
    for await (const chunk of streamResult) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    yield "Maaf, saat ini sistem sedang sibuk. Silahkan hubungi admin via WhatsApp untuk respon lebih cepat.";
  }
};
