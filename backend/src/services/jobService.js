const Job = require('../models/Job');
const ApiError = require('../utils/ApiError');

const createJob = async (jobData, recruiterId) => {
  const job = await Job.create({
    ...jobData,
    recruiter: recruiterId,
  });

  return job;
};

const getAllJobs = async () => {
  return Job.find({ isActive: true })
    .populate('recruiter', 'firstName lastName company email')
    .sort({ createdAt: -1 });
};

const getJobById = async (jobId) => {
  const job = await Job.findById(jobId).populate(
    'recruiter',
    'firstName lastName company email'
  );

  if (!job) {
    throw new ApiError(404, 'Job not found');
  }

  return job;
};

const getRecruiterJobs = async (recruiterId) => {
  return Job.find({ recruiter: recruiterId }).sort({
    createdAt: -1,
  });
};

const updateJob = async (jobId, recruiterId, updates) => {
  const job = await Job.findOne({
    _id: jobId,
    recruiter: recruiterId,
  });

  if (!job) {
    throw new ApiError(
      404,
      'Job not found or you are not authorized to update it'
    );
  }

  const allowedFields = [
    'title',
    'company',
    'location',
    'description',
    'requirements',
    'responsibilities',
    'skills',
    'salary',
    'jobType',
    'experienceLevel',
    'applicationDeadline',
    'isActive',
  ];

  allowedFields.forEach((field) => {
    if (updates[field] !== undefined) {
      job[field] = updates[field];
    }
  });

  await job.save();

  return job;
};

const deleteJob = async (jobId, recruiterId) => {
  const job = await Job.findOneAndDelete({
    _id: jobId,
    recruiter: recruiterId,
  });

  if (!job) {
    throw new ApiError(
      404,
      'Job not found or you are not authorized to delete it'
    );
  }

  return job;
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  getRecruiterJobs,
  updateJob,
  deleteJob,
};