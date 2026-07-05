const { body } = require('express-validator');

const applyJobValidation = [
  body('resumeUrl')
    .optional()
    .isURL()
    .withMessage('Resume URL must be a valid URL'),

  body('coverLetter')
    .optional()
    .trim()
    .isLength({ max: 3000 })
    .withMessage('Cover letter cannot exceed 3000 characters'),
];

const updateApplicationStatusValidation = [
  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn([
      'Applied',
      'Reviewed',
      'Shortlisted',
      'Rejected',
      'Hired',
    ])
    .withMessage('Invalid application status'),
];

module.exports = {
  applyJobValidation,
  updateApplicationStatusValidation,
};