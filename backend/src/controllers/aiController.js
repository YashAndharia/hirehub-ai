const aiService = require('../services/aiService');

const analyzeResume = async (req, res, next) => {
  try {
    const { resumeText } = req.body;

    if (!resumeText) {
      return res.status(400).json({
        success: false,
        message: 'resumeText is required',
      });
    }

    let analysis = await aiService.analyzeResume(resumeText);

    // Remove markdown code fences if Gemini returns them
    analysis = analysis
      .replace(/```json/g, '')
      .replace(/```/g, '')
      .trim();

    const parsedAnalysis = JSON.parse(analysis);

    res.status(200).json({
      success: true,
      message: 'Resume analyzed successfully',
      data: parsedAnalysis,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  analyzeResume,
};