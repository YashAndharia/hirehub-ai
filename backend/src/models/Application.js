const mongoose = require('mongoose');

const APPLICATION_STATUS = [
  'Applied',
  'Reviewed',
  'Shortlisted',
  'Rejected',
  'Hired',
];

const applicationSchema = new mongoose.Schema(
  {
    candidate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
    resumeUrl: {
      type: String,
      default: '',
    },
    coverLetter: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: APPLICATION_STATUS,
      default: 'Applied',
    },
  },
  {
    timestamps: true,
  }
);

// One candidate can apply only once to the same job
applicationSchema.index(
  { candidate: 1, job: 1 },
  { unique: true }
);

const Application = mongoose.model(
  'Application',
  applicationSchema
);

module.exports = Application;