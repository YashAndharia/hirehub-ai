const profileService = require('../services/profileService');

/**
 * Get logged-in user's profile
 */
const getProfile = async (req, res, next) => {
  try {
    const user = await profileService.getProfile(req.user._id);

    res.status(200).json({
      success: true,
      message: 'Profile fetched successfully',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update logged-in user's profile
 */
const updateProfile = async (req, res, next) => {
  try {
    const updatedUser = await profileService.updateProfile(
      req.user._id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
  updateProfile,
};