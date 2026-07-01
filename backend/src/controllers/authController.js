const authService = require('../services/authService');
const ApiResponse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');

const TOKEN_COOKIE_NAME = 'accessToken';
const TOKEN_MAX_AGE_MS = 7 * 24 * 60 * 60 * 1000;

/**
 * Cookie options for JWT storage.
 * httpOnly prevents XSS; secure flag enabled in production.
 */
const getTokenCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: TOKEN_MAX_AGE_MS,
});

/**
 * Sets the JWT access token as an httpOnly cookie.
 * @param {import('express').Response} res
 * @param {string} token
 */
const setTokenCookie = (res, token) => {
  res.cookie(TOKEN_COOKIE_NAME, token, getTokenCookieOptions());
};

/**
 * Clears the JWT access token cookie.
 * @param {import('express').Response} res
 */
const clearTokenCookie = (res) => {
  res.clearCookie(TOKEN_COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
};

/**
 * @route   POST /api/v1/auth/register
 * @desc    Register a new user
 * @access  Public
 */
const register = asyncHandler(async (req, res) => {
  const { user, token } = await authService.register(req.body);

  setTokenCookie(res, token);

  res
    .status(201)
    .json(new ApiResponse(201, { user, token }, 'Registration successful'));
});

/**
 * @route   POST /api/v1/auth/login
 * @desc    Authenticate user and return JWT
 * @access  Public
 */
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const { user, token } = await authService.login(email, password);

  setTokenCookie(res, token);

  res.status(200).json(new ApiResponse(200, { user, token }, 'Login successful'));
});

/**
 * @route   GET /api/v1/auth/me
 * @desc    Get current authenticated user profile
 * @access  Private
 */
const getMe = asyncHandler(async (req, res) => {
  const user = await authService.getCurrentUser(req.user._id);

  res.status(200).json(new ApiResponse(200, { user }, 'User profile retrieved'));
});

/**
 * @route   POST /api/v1/auth/logout
 * @desc    Log out the current user
 * @access  Private
 */
const logout = asyncHandler(async (req, res) => {
  const result = await authService.logout();

  clearTokenCookie(res);

  res.status(200).json(new ApiResponse(200, null, result.message));
});

module.exports = {
  register,
  login,
  getMe,
  logout,
};
