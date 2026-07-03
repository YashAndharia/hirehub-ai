const User = require('../models/User');

/**
 * Get profile of the currently logged-in user.
 */
const getProfile = async (userId) => {
    const user = await User.findById(userId).select('-password');

    if (!user) {
        throw new Error('User not found');
    }

    return user;
};

/**
 * Update profile of the currently logged-in user.
 */
const updateProfile = async (userId, profileData) => {
    const allowedFields = [
      'headline',
      'bio',
      'skills',
      'phone',
      'location',
      'linkedin',
      'github',
      'portfolio',
      'resumeUrl',
      'education',
      'experience',
      'projects',
      'certifications',
      'avatar',
    ];
  
    const updates = {};
  
    allowedFields.forEach((field) => {
      if (profileData[field] !== undefined) {
        updates[field] = profileData[field];
      }
    });
  
    // Update the user in MongoDB
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updates,
      {
        new: true,
        runValidators: true,
      }
    );
  
    if (!updatedUser) {
      throw new Error('User not found');
    }
  
    // Calculate profile completion
    updatedUser.profileCompletion = calculateProfileCompletion(updatedUser);
  
    await updatedUser.save();
  
    return updatedUser.toSafeObject();
  };

/**
* Calculate profile completion percentage.
*/
const calculateProfileCompletion = (user) => {
    const fields = [
        'headline',
        'bio',
        'location',
        'phone',
        'linkedin',
        'github',
        'portfolio',
        'resumeUrl',
    ];

    let completed = 0;

    fields.forEach((field) => {
        if (user[field]) {
            completed++;
        }
    });

    if (user.skills && user.skills.length > 0) completed++;
    if (user.education && user.education.length > 0) completed++;
    if (user.experience && user.experience.length > 0) completed++;
    if (user.projects && user.projects.length > 0) completed++;

    return Math.round((completed / 12) * 100);
};

module.exports = {
    getProfile,
    updateProfile,
    calculateProfileCompletion,
};