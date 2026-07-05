const Application = require('../models/Application');
const Job = require('../models/Job');
const ApiError = require('../utils/ApiError');

const applyJob = async (candidateId, jobId, data) => {
  const job = await Job.findById(jobId);

  if (!job || !job.isActive) {
    throw new ApiError(404, 'Job not found');
  }

  const exists = await Application.findOne({
    candidate: candidateId,
    job: jobId,
  });

  if (exists) {
    throw new ApiError(400, 'You have already applied for this job');
  }

  const application = await Application.create({
    candidate: candidateId,
    job: jobId,
    resumeUrl: data.resumeUrl || '',
    coverLetter: data.coverLetter || '',
  });

  return application.populate([
    {
      path: 'candidate',
      select: 'firstName lastName email',
    },
    {
      path: 'job',
      select: 'title company location',
    },
  ]);
};

const getCandidateApplications = async (candidateId) => {
  return Application.find({
    candidate: candidateId,
  })
    .populate('job')
    .sort({ createdAt: -1 });
};

const getJobApplicants = async (jobId, recruiterId) => {
  const job = await Job.findOne({
    _id: jobId,
    recruiter: recruiterId,
  });

  if (!job) {
    throw new ApiError(404, 'Job not found');
  }

  return Application.find({ job: jobId })
    .populate('candidate', '-password')
    .sort({ createdAt: -1 });
};

const updateApplicationStatus = async (
  applicationId,
  recruiterId,
  status
) => {
  const application = await Application.findById(applicationId).populate('job');

  if (!application) {
    throw new ApiError(404, 'Application not found');
  }

  if (application.job.recruiter.toString() !== recruiterId.toString()) {
    throw new ApiError(403, 'Unauthorized');
  }

  application.status = status;

  await application.save();

  return application;
};

module.exports = {
  applyJob,
  getCandidateApplications,
  getJobApplicants,
  updateApplicationStatus,
};