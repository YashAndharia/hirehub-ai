const { GoogleGenAI } = require('@google/genai');

const createGeminiClient = () => {
  if (!process.env.GEMINI_API_KEY) {
    console.warn('Gemini Warning: GEMINI_API_KEY is not defined in environment variables');
    return null;
  }

  return new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });
};

module.exports = createGeminiClient();
