const { body } = require('express-validator');

const updateProfileValidation = [
  body('headline')
    .optional()
    .trim()
    .isLength({ max: 120 })
    .withMessage('Headline cannot exceed 120 characters'),

  body('bio')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Bio cannot exceed 1000 characters'),

  body('phone')
    .optional()
    .matches(/^[0-9]{10}$/)
    .withMessage('Phone number must contain exactly 10 digits'),

  body('linkedin')
    .optional()
    .isURL()
    .withMessage('LinkedIn must be a valid URL'),

  body('github')
    .optional()
    .isURL()
    .withMessage('GitHub must be a valid URL'),

  body('portfolio')
    .optional()
    .isURL()
    .withMessage('Portfolio must be a valid URL'),

  body('skills')
    .optional()
    .isArray()
    .withMessage('Skills must be an array'),
];

module.exports = {
  updateProfileValidation,
};