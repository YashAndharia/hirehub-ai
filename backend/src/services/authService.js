const bcrypt = require('bcryptjs');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');
const generateToken = require('../utils/generateToken');

const SALT_ROUNDS = 12;
const REGISTERABLE_ROLES = ['candidate', 'recruiter'];

/**
 * Hashes a plain-text password using bcrypt.
 * @param {string} password - Plain-text password
 * @returns {Promise<string>} Hashed password
 */
const hashPassword = async (password) => {
  return bcrypt.hash(password, SALT_ROUNDS);
};

/**
 * Builds a JWT payload and token for an authenticated user.
 * @param {import('../models/User')} user - Mongoose user document
 * @returns {{ user: Object, token: string }}
 */
const buildAuthResponse = (user) => {
  const token = generateToken({
    userId: user._id.toString(),
    role: user.role,
  });

  return {
    user: user.toSafeObject(),
    token,
  };
};

/**
 * Registers a new user account.
 * @param {Object} userData - Registration payload
 * @returns {Promise<{ user: Object, token: string }>}
 */
const register = async (userData) => {
  const { firstName, lastName, email, password, role } = userData;
  const normalizedEmail = email.toLowerCase().trim();

  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
    throw new ApiError(409, 'An account with this email already exists');
  }

  const assignedRole =
    role && REGISTERABLE_ROLES.includes(role) ? role : 'candidate';

  const hashedPassword = await hashPassword(password);

  const user = await User.create({
    firstName,
    lastName,
    email: normalizedEmail,
    password: hashedPassword,
    role: assignedRole,
  });

  return buildAuthResponse(user);
};

/**
 * Authenticates a user with email and password.
 * @param {string} email - User email
 * @param {string} password - Plain-text password
 * @returns {Promise<{ user: Object, token: string }>}
 */
const login = async (email, password) => {
  const normalizedEmail = email.toLowerCase().trim();

  const user = await User.findOne({ email: normalizedEmail }).select('+password');
  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  if (!user.isActive) {
    throw new ApiError(403, 'Your account has been deactivated. Please contact support');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password');
  }

  return buildAuthResponse(user);
};

/**
 * Retrieves the currently authenticated user's profile.
 * @param {string} userId - Authenticated user's ID
 * @returns {Promise<Object>}
 */
const getCurrentUser = async (userId) => {
  const user = await User.findById(userId).select('-password');

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  if (!user.isActive) {
    throw new ApiError(403, 'Your account has been deactivated. Please contact support');
  }

  return user.toSafeObject();
};

/**
 * Handles server-side logout acknowledgement.
 * Token invalidation is handled client-side or via cookie clearing in the controller.
 * @returns {{ message: string }}
 */
const logout = () => {
  return { message: 'Logged out successfully' };
};

module.exports = {
  register,
  login,
  getCurrentUser,
  logout,
};
