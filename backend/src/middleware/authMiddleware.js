const jwt = require('jsonwebtoken');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');

/**
 * Extracts JWT from Authorization header or httpOnly cookie.
 * @param {import('express').Request} req
 * @returns {string|null}
 */
const extractToken = (req) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.split(' ')[1];
  }

  if (req.cookies && req.cookies.accessToken) {
    return req.cookies.accessToken;
  }

  return null;
};

/**
 * Verifies JWT and attaches the authenticated user to the request.
 */
const authenticate = async (req, res, next) => {
  try {
    const token = extractToken(req);

    if (!token) {
      throw new ApiError(401, 'Authentication required. Please log in');
    }

    if (!process.env.JWT_ACCESS_SECRET) {
      throw new ApiError(500, 'Authentication service is misconfigured');
    }

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      throw new ApiError(401, 'User belonging to this token no longer exists');
    }

    if (!user.isActive) {
      throw new ApiError(403, 'Your account has been deactivated. Please contact support');
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;
