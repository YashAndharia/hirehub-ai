const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const analyzeResume = async (resumeText) => {
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.5-flash',
  });

  const prompt = `
You are an ATS Resume Analyzer.

Analyze the following resume.

Return ONLY valid JSON.

{
  "atsScore": number,
  "summary": "",
  "strengths": [],
  "weaknesses": [],
  "missingSkills": [],
  "suggestions": []
}

Resume:

${resumeText}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

module.exports = {
  analyzeResume,
};