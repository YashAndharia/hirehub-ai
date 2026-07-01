const mongoose = require('mongoose');

const ROLES = ['candidate', 'recruiter', 'admin'];

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      maxlength: [50, 'First name cannot exceed 50 characters'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      maxlength: [50, 'Last name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false,
    },
    role: {
      type: String,
      enum: {
        values: ROLES,
        message: 'Role must be candidate, recruiter, or admin',
      },
      default: 'candidate',
    },
    avatar: {
      type: String,
      default: '',
    },
    skills: {
      type: [String],
      default: [],
    },
    bio: {
      type: String,
      default: '',
      maxlength: [1000, 'Bio cannot exceed 1000 characters'],
    },
    company: {
      type: String,
      default: '',
      trim: true,
      maxlength: [100, 'Company name cannot exceed 100 characters'],
    },
    location: {
      type: String,
      default: '',
      trim: true,
      maxlength: [100, 'Location cannot exceed 100 characters'],
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

/**
 * Returns a safe representation of the user without sensitive fields.
 */
userSchema.methods.toSafeObject = function toSafeObject() {
  const user = this.toObject();
  delete user.password;
  return user;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
