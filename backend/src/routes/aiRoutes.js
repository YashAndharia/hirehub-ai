const express = require('express');

const router = express.Router();

const authenticate = require('../middleware/authMiddleware');
const aiController = require('../controllers/aiController');

router.post(
  '/resume-analysis',
  authenticate,
  aiController.analyzeResume
);

module.exports = router;