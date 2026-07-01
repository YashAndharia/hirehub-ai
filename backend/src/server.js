require('dotenv').config();

const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log('=================================');
    console.log('  HireHub AI Backend Server');
    console.log(`  Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`  Port: ${PORT}`);
    console.log(`  Health: http://localhost:${PORT}/api/v1/health`);
    console.log('=================================');
  });

  const gracefulShutdown = (signal) => {
    console.log(`\n${signal} received. Shutting down gracefully...`);

    server.close(async () => {
      console.log('HTTP server closed.');

      try {
        await mongoose.connection.close(false);
        console.log('MongoDB connection closed.');
        process.exit(0);
      } catch (error) {
        console.error('Error during MongoDB shutdown:', error.message);
        process.exit(1);
      }
    });

    setTimeout(() => {
      console.error('Forced shutdown after timeout.');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
  process.on('SIGINT', () => gracefulShutdown('SIGINT'));

  process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
    gracefulShutdown('UNHANDLED_REJECTION');
  });

  process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error.message);
    gracefulShutdown('UNCAUGHT_EXCEPTION');
  });
};

startServer();
