const ApiError = require('../utils/ApiError');

/**
 * Restricts route access to users with one of the specified roles.
 * Must be used after authenticate middleware.
 *
 * @param  {...string} allowedRoles - Roles permitted to access the route
 * @returns {import('express').RequestHandler}
 */
const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(401, 'Authentication required. Please log in'));
    }

    if (!allowedRoles.includes(req.user.role)) {
      return next(
        new ApiError(403, 'You do not have permission to perform this action')
      );
    }

    next();
  };
};

module.exports = authorize;
