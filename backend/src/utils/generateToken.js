const jwt = require('jsonwebtoken');

/**
 * Generates a signed JWT access token.
 * @param {Object} payload - Data to encode in the token (e.g. userId, role)
 * @returns {string} Signed JWT access token
 */
const generateToken = (payload) => {
  if (!process.env.JWT_ACCESS_SECRET) {
    throw new Error('JWT_ACCESS_SECRET is not configured');
  }

  return jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '7d',
  });
};

module.exports = generateToken;
