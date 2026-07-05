const express = require('express');

const router = express.Router();

const applicationController = require('../controllers/applicationController');
const authenticate = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const validate = require('../middleware/validationMiddleware');

const {
  applyJobValidation,
  updateApplicationStatusValidation,
} = require('../validators/applicationValidator');

// Candidate
router.post(
  '/:jobId',
  authenticate,
  authorize('candidate'),
  applyJobValidation,
  validate,
  applicationController.applyJob
);

router.get(
  '/my-applications',
  authenticate,
  authorize('candidate'),
  applicationController.getCandidateApplications
);

// Recruiter
router.get(
  '/job/:jobId',
  authenticate,
  authorize('recruiter'),
  applicationController.getJobApplicants
);

router.patch(
  '/:applicationId/status',
  authenticate,
  authorize('recruiter'),
  updateApplicationStatusValidation,
  validate,
  applicationController.updateApplicationStatus
);

module.exports = router;