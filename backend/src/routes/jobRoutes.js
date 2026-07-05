const express = require('express');

const router = express.Router();

const jobController = require('../controllers/jobController');
const authenticate = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const validate = require('../middleware/validationMiddleware');

const {
  createJobValidation,
  updateJobValidation,
} = require('../validators/jobValidator');

// Public Routes
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);

// Recruiter Routes
router.post(
  '/',
  authenticate,
  authorize('recruiter'),
  createJobValidation,
  validate,
  jobController.createJob
);

router.get(
  '/recruiter/my-jobs',
  authenticate,
  authorize('recruiter'),
  jobController.getRecruiterJobs
);

router.put(
  '/:id',
  authenticate,
  authorize('recruiter'),
  updateJobValidation,
  validate,
  jobController.updateJob
);

router.delete(
  '/:id',
  authenticate,
  authorize('recruiter'),
  jobController.deleteJob
);

module.exports = router;