const { body } = require('express-validator');

const createJobValidation = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Job title is required'),

  body('company')
    .trim()
    .notEmpty()
    .withMessage('Company name is required'),

  body('location')
    .trim()
    .notEmpty()
    .withMessage('Location is required'),

  body('description')
    .trim()
    .notEmpty()
    .withMessage('Job description is required'),

  body('salary')
    .optional()
    .isNumeric()
    .withMessage('Salary must be a number'),

  body('jobType')
    .optional()
    .isIn(['Full-time', 'Part-time', 'Internship', 'Contract'])
    .withMessage('Invalid job type'),

  body('experienceLevel')
    .optional()
    .isIn(['Fresher', 'Junior', 'Mid', 'Senior'])
    .withMessage('Invalid experience level'),

  body('requirements')
    .optional()
    .isArray()
    .withMessage('Requirements must be an array'),

  body('responsibilities')
    .optional()
    .isArray()
    .withMessage('Responsibilities must be an array'),

  body('skills')
    .optional()
    .isArray()
    .withMessage('Skills must be an array'),
];

const updateJobValidation = createJobValidation.map((validation) =>
  validation.optional()
);

module.exports = {
  createJobValidation,
  updateJobValidation,
};