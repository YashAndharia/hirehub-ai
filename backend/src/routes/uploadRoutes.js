const express = require('express');

const router = express.Router();

const authenticate = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const uploadController = require('../controllers/uploadController');

router.post(
  '/resume',
  authenticate,
  upload.single('resume'),
  uploadController.uploadResume
);

module.exports = router;