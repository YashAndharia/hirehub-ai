const mongoose = require('mongoose');

const JOB_TYPES = ['Full-time', 'Part-time', 'Internship', 'Contract'];
const EXPERIENCE_LEVELS = ['Fresher', 'Junior', 'Mid', 'Senior'];

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
      maxlength: [100, 'Job title cannot exceed 100 characters'],
    },

    company: {
      type: String,
      required: [true, 'Company name is required'],
      trim: true,
      maxlength: [100, 'Company name cannot exceed 100 characters'],
    },

    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true,
    },

    description: {
      type: String,
      required: [true, 'Job description is required'],
    },

    requirements: {
      type: [String],
      default: [],
    },

    responsibilities: {
      type: [String],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    salary: {
      type: Number,
      default: 0,
    },

    jobType: {
      type: String,
      enum: JOB_TYPES,
      default: 'Full-time',
    },

    experienceLevel: {
      type: String,
      enum: EXPERIENCE_LEVELS,
      default: 'Fresher',
    },

    applicationDeadline: {
      type: Date,
    },

    recruiter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;