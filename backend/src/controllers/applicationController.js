const applicationService = require('../services/applicationService');

const applyJob = async (req, res, next) => {
  try {
    const application = await applicationService.applyJob(
      req.user._id,
      req.params.jobId,
      req.body
    );

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

const getCandidateApplications = async (req, res, next) => {
  try {
    const applications = await applicationService.getCandidateApplications(
      req.user._id
    );

    res.status(200).json({
      success: true,
      message: 'Applications fetched successfully',
      data: applications,
    });
  } catch (error) {
    next(error);
  }
};

const getJobApplicants = async (req, res, next) => {
  try {
    const applicants = await applicationService.getJobApplicants(
      req.params.jobId,
      req.user._id
    );

    res.status(200).json({
      success: true,
      message: 'Applicants fetched successfully',
      data: applicants,
    });
  } catch (error) {
    next(error);
  }
};

const updateApplicationStatus = async (req, res, next) => {
  try {
    const application = await applicationService.updateApplicationStatus(
      req.params.applicationId,
      req.user._id,
      req.body.status
    );

    res.status(200).json({
      success: true,
      message: 'Application status updated successfully',
      data: application,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  applyJob,
  getCandidateApplications,
  getJobApplicants,
  updateApplicationStatus,
};