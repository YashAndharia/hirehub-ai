const express = require('express');
const authController = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');
const {
  registerValidation,
  loginValidation,
} = require('../validators/authValidator');

const router = express.Router();

router.post('/register', registerValidation, authController.register);
router.post('/login', loginValidation, authController.login);
router.get('/me', authenticate, authController.getMe);
router.post('/logout', authenticate, authController.logout);

module.exports = router;
