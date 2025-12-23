
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

export const getGeminiResponse = async (userMessage: string) => {
  if (!apiKey) {
    return "API Key is missing. Please ensure it is configured in the environment.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `You are the AI design assistant for 'Aura', a professional 3D designer. 
        Your goal is to answer questions about Aura's work, 3D design techniques, and professional background. 
        Aura specializes in Blender, ZBrush, and Unreal Engine. 
        Keep your tone professional, creative, and slightly futuristic. 
        If asked for project ideas, provide creative 3D design prompts.`,
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "There was an error connecting to my neural network. Please try again later.";
  }
};
