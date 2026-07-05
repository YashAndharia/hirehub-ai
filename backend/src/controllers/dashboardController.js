const dashboardService = require('../services/dashboardService');

const getDashboard = async (req, res, next) => {
  try {
    let dashboard;

    if (req.user.role === 'recruiter') {
      dashboard = await dashboardService.getRecruiterDashboard(req.user._id);
    } else if (req.user.role === 'candidate') {
      dashboard = await dashboardService.getCandidateDashboard(req.user._id);
    } else {
      return res.status(403).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Dashboard fetched successfully',
      data: dashboard,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDashboard,
};