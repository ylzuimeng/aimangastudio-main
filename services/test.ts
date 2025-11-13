import { GoogleGenAI } from "@google/genai";

function getAiClient(): GoogleGenAI {
  const key = getApiKey();
  if (!key) {
    throw new Error("No Gemini API key found. Please set it in the app.");
  }
  return new GoogleGenAI({
    apiKey: "sk-tpqQiwMCPUKji13p5f154d8c8dBb4374BbD37d29Ad4f61Dc",
    base_ur: "https://dpapi.cn/v1" // ← 这部分我会帮你改
  });
}