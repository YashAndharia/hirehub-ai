const User = require('../models/User');
const Job = require('../models/Job');
const Application = require('../models/Application');

const getRecruiterDashboard = async (recruiterId) => {
  const totalJobs = await Job.countDocuments({
    recruiter: recruiterId,
  });

  const activeJobs = await Job.countDocuments({
    recruiter: recruiterId,
    isActive: true,
  });

  const jobs = await Job.find({ recruiter: recruiterId }).select('_id');

  const jobIds = jobs.map((job) => job._id);

  const totalApplications = await Application.countDocuments({
    job: { $in: jobIds },
  });

  const recentApplications = await Application.find({
    job: { $in: jobIds },
  })
    .populate('candidate', 'firstName lastName email')
    .populate('job', 'title company')
    .sort({ createdAt: -1 })
    .limit(5);

  return {
    totalJobs,
    activeJobs,
    totalApplications,
    recentApplications,
  };
};

const getCandidateDashboard = async (candidateId) => {
  const totalApplications = await Application.countDocuments({
    candidate: candidateId,
  });

  const shortlisted = await Application.countDocuments({
    candidate: candidateId,
    status: 'Shortlisted',
  });

  const hired = await Application.countDocuments({
    candidate: candidateId,
    status: 'Hired',
  });

  const recentApplications = await Application.find({
    candidate: candidateId,
  })
    .populate('job', 'title company location')
    .sort({ createdAt: -1 })
    .limit(5);

  return {
    totalApplications,
    shortlisted,
    hired,
    recentApplications,
  };
};

module.exports = {
  getRecruiterDashboard,
  getCandidateDashboard,
};