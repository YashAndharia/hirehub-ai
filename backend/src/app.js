const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const express = require('express');
const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsOptions = require('./config/cors');
const { apiRateLimiter } = require('./middleware/rateLimitMiddleware');
const notFound = require('./middleware/notFoundMiddleware');
const errorHandler = require('./middleware/errorMiddleware');

const app = express();

app.set('trust proxy', 1);

app.use(helmet());
app.use(compression());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());
app.use(apiRateLimiter);

app.get('/api/v1/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'HireHub AI API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/profile', profileRoutes);
app.use('/api/v1/jobs', jobRoutes);
app.use('/api/v1/applications', applicationRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
