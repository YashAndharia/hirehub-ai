const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = process.env.CLIENT_URL
      ? process.env.CLIENT_URL.split(',').map((url) => url.trim())
      : ['http://localhost:5173'];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy: Origin ${origin} is not allowed`));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Set-Cookie'],
  optionsSuccessStatus: 204,
};

module.exports = corsOptions;
