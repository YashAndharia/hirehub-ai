# HireHub AI — Backend

Production-ready Node.js / Express backend foundation for the HireHub AI MERN SaaS platform.

## Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** MongoDB Atlas with Mongoose
- **File Storage:** Cloudinary
- **AI:** Google Gemini API (`@google/genai`)
- **Security:** Helmet, CORS, express-rate-limit, cookie-parser
- **Utilities:** Multer, express-validator, bcryptjs, jsonwebtoken (auth phase)

## Project Setup

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher
- MongoDB Atlas cluster
- Cloudinary account
- Google Gemini API key

### Installation

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your environment file:

   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your credentials:

   - `MONGODB_URI` — MongoDB Atlas connection string
   - `CLOUDINARY_*` — Cloudinary credentials
   - `GEMINI_API_KEY` — Google Gemini API key
   - `CLIENT_URL` — Frontend URL for CORS (e.g. `http://localhost:5173`)

## Run Development

Start the development server with hot reload:

```bash
npm run dev
```

Start the production server:

```bash
npm start
```

The API will be available at `http://localhost:5000`.

### Health Check

```bash
GET http://localhost:5000/api/v1/health
```

Expected response:

```json
{
  "success": true,
  "message": "HireHub AI API is running",
  "timestamp": "2026-06-30T12:00:00.000Z",
  "environment": "development"
}
```

## Folder Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── cloudinary.js      # Cloudinary SDK configuration
│   │   ├── cors.js            # CORS options
│   │   ├── db.js              # MongoDB connection
│   │   └── gemini.js          # Google Gemini client
│   ├── controllers/           # Route handlers (future phase)
│   ├── middleware/
│   │   ├── errorMiddleware.js     # Global error handler
│   │   ├── notFoundMiddleware.js    # 404 handler
│   │   └── rateLimitMiddleware.js   # Rate limiting configs
│   ├── models/                # Mongoose schemas (future phase)
│   ├── routes/                # Express route modules (future phase)
│   ├── services/              # Business logic layer (future phase)
│   ├── utils/
│   │   ├── ApiError.js        # Custom error class
│   │   ├── ApiResponse.js     # Standardized success response
│   │   └── asyncHandler.js    # Async route wrapper
│   ├── validators/            # Request validation schemas (future phase)
│   ├── app.js                 # Express application setup
│   └── server.js              # Server entry point
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | No | Server port (default: `5000`) |
| `NODE_ENV` | Yes | `development` or `production` |
| `MONGODB_URI` | Yes | MongoDB Atlas connection string |
| `JWT_ACCESS_SECRET` | Later | JWT access token secret |
| `JWT_REFRESH_SECRET` | Later | JWT refresh token secret |
| `CLOUDINARY_CLOUD_NAME` | Yes | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Yes | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Yes | Cloudinary API secret |
| `GEMINI_API_KEY` | Yes | Google Gemini API key |
| `CLIENT_URL` | Yes | Frontend origin for CORS |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start server with nodemon (development) |
| `npm start` | Start server (production) |

## License

MIT
