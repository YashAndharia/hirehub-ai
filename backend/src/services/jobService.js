const Job = require('../models/Job');
const ApiError = require('../utils/ApiError');

const createJob = async (jobData, recruiterId) => {
  return Job.create({
    ...jobData,
    recruiter: recruiterId,
  });
};

const getAllJobs = async (query) => {
  const {
    page = 1,
    limit = 10,
    keyword,
    location,
    jobType,
    experienceLevel,
    minSalary,
    maxSalary,
    skills,
    sort = 'newest',
  } = query;

  const filter = {
    isActive: true,
  };

  if (keyword) {
    filter.$or = [
      {
        title: {
          $regex: keyword,
          $options: 'i',
        },
      },
      {
        company: {
          $regex: keyword,
          $options: 'i',
        },
      },
      {
        description: {
          $regex: keyword,
          $options: 'i',
        },
      },
    ];
  }

  if (location) {
    filter.location = {
      $regex: location,
      $options: 'i',
    };
  }

  if (jobType) {
    filter.jobType = jobType;
  }

  if (experienceLevel) {
    filter.experienceLevel = experienceLevel;
  }

  if (skills) {
    filter.skills = {
      $in: skills.split(','),
    };
  }

  if (minSalary || maxSalary) {
    filter.salary = {};

    if (minSalary) {
      filter.salary.$gte = Number(minSalary);
    }

    if (maxSalary) {
      filter.salary.$lte = Number(maxSalary);
    }
  }

  let sortOption = {
    createdAt: -1,
  };

  if (sort === 'salaryAsc') {
    sortOption = { salary: 1 };
  }

  if (sort === 'salaryDesc') {
    sortOption = { salary: -1 };
  }

  if (sort === 'oldest') {
    sortOption = { createdAt: 1 };
  }

  const skip = (Number(page) - 1) * Number(limit);

  const jobs = await Job.find(filter)
    .populate('recruiter', 'firstName lastName company')
    .sort(sortOption)
    .skip(skip)
    .limit(Number(limit));

  const total = await Job.countDocuments(filter);

  return {
    jobs,
    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
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
  return Job.find({
    recruiter: recruiterId,
  }).sort({
    createdAt: -1,
  });
};

const updateJob = async (
  jobId,
  recruiterId,
  updates
) => {
  const job = await Job.findOne({
    _id: jobId,
    recruiter: recruiterId,
  });

  if (!job) {
    throw new ApiError(
      404,
      'Job not found or unauthorized'
    );
  }

  Object.keys(updates).forEach((key) => {
    job[key] = updates[key];
  });

  await job.save();

  return job;
};

const deleteJob = async (
  jobId,
  recruiterId
) => {
  const job = await Job.findOneAndDelete({
    _id: jobId,
    recruiter: recruiterId,
  });

  if (!job) {
    throw new ApiError(
      404,
      'Job not found or unauthorized'
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