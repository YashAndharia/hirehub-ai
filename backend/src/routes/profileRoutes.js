const express = require('express');
const {
    updateProfileValidation,
} = require('../validators/profileValidator');

const validate = require('../middleware/validationMiddleware');

const profileController = require('../controllers/profileController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

/**
 * Get logged-in user's profile
 */
router.get(
    '/',
    authenticate,
    profileController.getProfile
);

/**
 * Update logged-in user's profile
 */
router.put(
    '/',
    authenticate,
    updateProfileValidation,
    validate,
    profileController.updateProfile
);

module.exports = router;