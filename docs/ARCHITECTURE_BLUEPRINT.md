# HireHub AI — Master Architecture & Development Blueprint

> **Version:** 1.0  
> **Stack:** MERN (MongoDB, Express, React 19, Node.js)  
> **Purpose:** Production-ready architecture blueprint — no implementation code.

---

## Table of Contents

1. [Complete Folder Structure](#1-complete-folder-structure)
2. [Database Collections](#2-database-collections)
3. [Mongoose Models](#3-mongoose-models)
4. [Every API Endpoint](#4-every-api-endpoint)
5. [Authentication Flow](#5-authentication-flow)
6. [Authorization Flow](#6-authorization-flow)
7. [User Roles](#7-user-roles)
8. [Route Protection Strategy](#8-route-protection-strategy)
9. [Frontend Pages](#9-frontend-pages)
10. [React Components](#10-react-components)
11. [Context API Structure](#11-context-api-structure)
12. [Backend Middleware](#12-backend-middleware)
13. [Controllers](#13-controllers)
14. [Services](#14-services)
15. [Utilities](#15-utilities)
16. [Environment Variables](#16-environment-variables)
17. [Validation Strategy](#17-validation-strategy)
18. [Error Handling Strategy](#18-error-handling-strategy)
19. [AI Resume Analysis Flow](#19-ai-resume-analysis-flow)
20. [Resume Upload Flow](#20-resume-upload-flow)
21. [Job Application Flow](#21-job-application-flow)
22. [Recruiter Dashboard Flow](#22-recruiter-dashboard-flow)
23. [Candidate Dashboard Flow](#23-candidate-dashboard-flow)
24. [Admin Dashboard Flow](#24-admin-dashboard-flow)
25. [Notification System](#25-notification-system)
26. [Folder Naming Convention](#26-folder-naming-convention)
27. [Coding Standards](#27-coding-standards)
28. [Security Best Practices](#28-security-best-practices)
29. [Responsive Design Strategy](#29-responsive-design-strategy)
30. [Color Palette](#30-color-palette)
31. [Typography](#31-typography)
32. [UI Design Style](#32-ui-design-style)
33. [Icons Library](#33-icons-library)
34. [Charts Library](#34-charts-library)
35. [Future Scalability Plan](#35-future-scalability-plan)
36. [Deployment Strategy](#36-deployment-strategy)
37. [README Structure](#37-readme-structure)
38. [Git Branch Strategy](#38-git-branch-strategy)
39. [Development Roadmap](#39-development-roadmap)
40. [Complete Build Order](#40-complete-build-order)

---

## 1. Complete Folder Structure

### Monorepo Layout (Recommended)

```
hirehub-ai/
├── docs/
│   ├── ARCHITECTURE_BLUEPRINT.md
│   ├── API_REFERENCE.md
│   └── DEPLOYMENT.md
├── frontend/
└── backend/
```

### Frontend (`frontend/`)

```
frontend/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/
│   │   ├── common/           # Button, Input, Modal, Spinner, Badge, Avatar
│   │   ├── layout/           # Navbar, Sidebar, Footer, DashboardLayout
│   │   ├── auth/             # LoginForm, RegisterForm, ProtectedRoute
│   │   ├── candidate/        # ResumeUploader, ATSScoreCard, ApplicationCard
│   │   ├── recruiter/        # JobForm, ApplicantTable, InterviewScheduler
│   │   ├── admin/            # UserTable, AnalyticsCard, ReportExport
│   │   ├── jobs/             # JobCard, JobList, JobFilters, JobDetail
│   │   └── notifications/    # NotificationBell, NotificationList
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   └── NotificationContext.jsx
│   ├── hooks/
│   │   ├── useAuth.js
│   │   ├── useDebounce.js
│   │   ├── usePagination.js
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── public/
│   │   │   ├── HomePage.jsx
│   │   │   ├── JobsPage.jsx
│   │   │   ├── JobDetailPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RegisterPage.jsx
│   │   │   └── NotFoundPage.jsx
│   │   ├── candidate/
│   │   │   ├── CandidateDashboard.jsx
│   │   │   ├── ResumePage.jsx
│   │   │   ├── ApplicationsPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   ├── recruiter/
│   │   │   ├── RecruiterDashboard.jsx
│   │   │   ├── PostJobPage.jsx
│   │   │   ├── ManageJobsPage.jsx
│   │   │   ├── ApplicantsPage.jsx
│   │   │   └── InterviewsPage.jsx
│   │   └── admin/
│   │       ├── AdminDashboard.jsx
│   │       ├── UsersPage.jsx
│   │       ├── JobsManagementPage.jsx
│   │       ├── AnalyticsPage.jsx
│   │       └── ReportsPage.jsx
│   ├── routes/
│   │   ├── AppRoutes.jsx
│   │   ├── PublicRoutes.jsx
│   │   ├── CandidateRoutes.jsx
│   │   ├── RecruiterRoutes.jsx
│   │   └── AdminRoutes.jsx
│   ├── services/
│   │   ├── api.js              # Axios instance + interceptors
│   │   ├── authService.js
│   │   ├── jobService.js
│   │   ├── resumeService.js
│   │   ├── applicationService.js
│   │   ├── interviewService.js
│   │   ├── notificationService.js
│   │   └── adminService.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── formatDate.js
│   │   ├── formatSalary.js
│   │   ├── getRoleDashboard.js
│   │   └── validators.js       # Client-side helpers only
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .env.local                  # Git-ignored
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── README.md
```

### Backend (`backend/`)

```
backend/
├── src/
│   ├── config/
│   │   ├── db.js               # MongoDB connection
│   │   ├── cloudinary.js
│   │   ├── gemini.js
│   │   └── cors.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── jobController.js
│   │   ├── resumeController.js
│   │   ├── applicationController.js
│   │   ├── interviewController.js
│   │   ├── notificationController.js
│   │   ├── analyticsController.js
│   │   └── adminController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   │   ├── validateMiddleware.js
│   │   ├── errorMiddleware.js
│   │   ├── uploadMiddleware.js
│   │   └── rateLimitMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Job.js
│   │   ├── Resume.js
│   │   ├── Application.js
│   │   ├── Interview.js
│   │   ├── Notification.js
│   │   └── AuditLog.js
│   ├── routes/
│   │   ├── index.js            # Mounts all route modules
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── jobRoutes.js
│   │   ├── resumeRoutes.js
│   │   ├── applicationRoutes.js
│   │   ├── interviewRoutes.js
│   │   ├── notificationRoutes.js
│   │   └── adminRoutes.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── jobService.js
│   │   ├── resumeService.js
│   │   ├── applicationService.js
│   │   ├── interviewService.js
│   │   ├── notificationService.js
│   │   ├── geminiService.js
│   │   ├── cloudinaryService.js
│   │   ├── analyticsService.js
│   │   └── emailService.js     # Future: transactional email
│   ├── utils/
│   │   ├── ApiError.js
│   │   ├── ApiResponse.js
│   │   ├── asyncHandler.js
│   │   ├── generateToken.js
│   │   ├── parseResumeText.js
│   │   └── paginationHelper.js
│   ├── validators/
│   │   ├── authValidator.js
│   │   ├── userValidator.js
│   │   ├── jobValidator.js
│   │   ├── resumeValidator.js
│   │   ├── applicationValidator.js
│   │   └── interviewValidator.js
│   ├── app.js                  # Express app setup
│   └── server.js               # Entry point
├── .env.example
├── .env                        # Git-ignored
├── package.json
├── render.yaml                 # Render deployment config
└── README.md
```

---

## 2. Database Collections

| Collection       | Purpose |
|------------------|---------|
| `users`          | All platform users (candidates, recruiters, admins) |
| `jobs`           | Job postings created by recruiters |
| `resumes`        | Candidate resume metadata, Cloudinary URLs, AI analysis results |
| `applications`   | Job applications linking candidates to jobs |
| `interviews`     | Scheduled interviews between recruiters and candidates |
| `notifications`  | In-app notifications for all user roles |
| `auditlogs`      | Admin audit trail for sensitive actions |

### Collection Relationships

```
users (1) ──< (N) resumes
users (1) ──< (N) jobs          [recruiterId]
users (1) ──< (N) applications  [candidateId]
jobs  (1) ──< (N) applications  [jobId]
applications (1) ──< (N) interviews
users (1) ──< (N) notifications
users (1) ──< (N) auditlogs     [admin actions]
```

### Indexing Strategy

| Collection     | Indexes |
|----------------|---------|
| `users`        | `email` (unique), `role`, `isActive` |
| `jobs`         | `recruiterId`, `status`, `title` (text), `location`, `createdAt` |
| `resumes`        | `userId`, `isPrimary`, `createdAt` |
| `applications` | `jobId + candidateId` (compound unique), `status`, `candidateId`, `jobId` |
| `interviews`   | `applicationId`, `scheduledAt`, `recruiterId`, `candidateId` |
| `notifications`| `userId + isRead`, `createdAt` |
| `auditlogs`    | `adminId`, `action`, `createdAt` |

---

## 3. Mongoose Models

> Schema definitions below describe fields and constraints — not implementation code.

### User Model

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `_id` | ObjectId | Auto | Primary key |
| `firstName` | String | Required, trim, max 50 | First name |
| `lastName` | String | Required, trim, max 50 | Last name |
| `email` | String | Required, unique, lowercase | Login email |
| `password` | String | Required, min 8, select: false | bcrypt hashed |
| `role` | String | Enum: `candidate`, `recruiter`, `admin` | User role |
| `avatar` | String | Optional | Cloudinary URL |
| `phone` | String | Optional | Contact number |
| `company` | String | Optional | Recruiter company name |
| `companyLogo` | String | Optional | Recruiter company logo URL |
| `bio` | String | Max 500 | Profile bio |
| `skills` | [String] | Default [] | Candidate skills |
| `experience` | Number | Min 0 | Years of experience |
| `location` | String | Optional | City/region |
| `isActive` | Boolean | Default true | Soft-disable account |
| `isEmailVerified` | Boolean | Default false | Email verification flag |
| `refreshToken` | String | select: false | Hashed refresh token |
| `lastLoginAt` | Date | Optional | Last login timestamp |
| `createdAt` | Date | Auto | Timestamp |
| `updatedAt` | Date | Auto | Timestamp |

**Virtual:** `fullName` → `firstName + lastName`

---

### Job Model

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `_id` | ObjectId | Auto | Primary key |
| `recruiterId` | ObjectId | Ref: User, required | Job poster |
| `title` | String | Required, max 100 | Job title |
| `description` | String | Required, max 5000 | Full description |
| `requirements` | [String] | Required | Skill/requirement list |
| `responsibilities` | [String] | Optional | Role responsibilities |
| `employmentType` | String | Enum: `full-time`, `part-time`, `contract`, `internship` | Employment type |
| `experienceLevel` | String | Enum: `entry`, `mid`, `senior`, `lead` | Experience level |
| `location` | String | Required | Job location |
| `isRemote` | Boolean | Default false | Remote flag |
| `salaryMin` | Number | Optional | Minimum salary |
| `salaryMax` | Number | Optional | Maximum salary |
| `salaryCurrency` | String | Default `USD` | Currency code |
| `category` | String | Required | e.g. Engineering, Design |
| `status` | String | Enum: `draft`, `active`, `closed`, `archived` | Job status |
| `applicationDeadline` | Date | Optional | Closing date |
| `applicantCount` | Number | Default 0 | Denormalized count |
| `viewCount` | Number | Default 0 | View counter |
| `createdAt` | Date | Auto | Timestamp |
| `updatedAt` | Date | Auto | Timestamp |

---

### Resume Model

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `_id` | ObjectId | Auto | Primary key |
| `userId` | ObjectId | Ref: User, required | Owner |
| `fileName` | String | Required | Original filename |
| `fileUrl` | String | Required | Cloudinary secure URL |
| `publicId` | String | Required | Cloudinary public ID |
| `fileType` | String | Enum: `pdf`, `doc`, `docx` | File extension |
| `fileSize` | Number | Required | Size in bytes |
| `extractedText` | String | Optional | Parsed resume text |
| `isPrimary` | Boolean | Default false | Primary resume flag |
| `aiAnalysis` | Object | Optional | Nested AI results (see below) |
| `createdAt` | Date | Auto | Timestamp |
| `updatedAt` | Date | Auto | Timestamp |

**`aiAnalysis` Sub-document:**

| Field | Type | Description |
|-------|------|-------------|
| `atsScore` | Number (0–100) | Overall ATS compatibility score |
| `summary` | String | AI-generated resume summary |
| `strengths` | [String] | Identified strengths |
| `weaknesses` | [String] | Areas for improvement |
| `suggestedSkills` | [String] | Recommended skills to add |
| `keywordMatch` | [String] | Matched industry keywords |
| `missingKeywords` | [String] | Missing important keywords |
| `formattingIssues` | [String] | Formatting/structure issues |
| `analyzedAt` | Date | Analysis timestamp |
| `modelVersion` | String | Gemini model identifier |

---

### Application Model

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `_id` | ObjectId | Auto | Primary key |
| `jobId` | ObjectId | Ref: Job, required | Applied job |
| `candidateId` | ObjectId | Ref: User, required | Applicant |
| `resumeId` | ObjectId | Ref: Resume, required | Submitted resume |
| `coverLetter` | String | Max 2000, optional | Cover letter text |
| `status` | String | Enum: `applied`, `reviewing`, `shortlisted`, `interview`, `offered`, `rejected`, `withdrawn` | Pipeline status |
| `matchScore` | Number | 0–100, optional | AI job-resume match score |
| `recruiterNotes` | String | Max 1000, optional | Internal recruiter notes |
| `statusHistory` | [Object] | `{ status, changedBy, changedAt, note }` | Audit trail |
| `appliedAt` | Date | Default now | Application date |
| `updatedAt` | Date | Auto | Timestamp |

**Compound Unique Index:** `{ jobId, candidateId }` — one application per job per candidate.

---

### Interview Model

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `_id` | ObjectId | Auto | Primary key |
| `applicationId` | ObjectId | Ref: Application, required | Linked application |
| `recruiterId` | ObjectId | Ref: User, required | Scheduling recruiter |
| `candidateId` | ObjectId | Ref: User, required | Interviewee |
| `jobId` | ObjectId | Ref: Job, required | Related job |
| `title` | String | Required | e.g. "Technical Round 1" |
| `type` | String | Enum: `phone`, `video`, `in-person` | Interview type |
| `scheduledAt` | Date | Required | Date and time |
| `duration` | Number | Default 60 | Duration in minutes |
| `location` | String | Optional | Address or meeting link |
| `meetingLink` | String | Optional | Video call URL |
| `status` | String | Enum: `scheduled`, `completed`, `cancelled`, `rescheduled` | Status |
| `notes` | String | Max 1000, optional | Recruiter notes |
| `feedback` | String | Max 1000, optional | Post-interview feedback |
| `createdAt` | Date | Auto | Timestamp |
| `updatedAt` | Date | Auto | Timestamp |

---

### Notification Model

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `_id` | ObjectId | Auto | Primary key |
| `userId` | ObjectId | Ref: User, required | Recipient |
| `type` | String | Enum: see Notification System | Notification category |
| `title` | String | Required | Short title |
| `message` | String | Required | Notification body |
| `link` | String | Optional | Frontend route to navigate |
| `metadata` | Object | Optional | Related entity IDs |
| `isRead` | Boolean | Default false | Read status |
| `createdAt` | Date | Auto | Timestamp |

---

### AuditLog Model

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| `_id` | ObjectId | Auto | Primary key |
| `adminId` | ObjectId | Ref: User, required | Acting admin |
| `action` | String | Required | e.g. `USER_DEACTIVATED` |
| `targetType` | String | Enum: `user`, `job`, `application` | Entity type |
| `targetId` | ObjectId | Required | Affected entity ID |
| `details` | Object | Optional | Change payload |
| `ipAddress` | String | Optional | Request IP |
| `createdAt` | Date | Auto | Timestamp |

---

## 4. Every API Endpoint

**Base URL:** `https://api.hirehub-ai.com/api/v1`  
**Auth Header:** `Authorization: Bearer <accessToken>`

### Auth Routes — `/auth`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/auth/register` | Public | Register new user (role in body) |
| POST | `/auth/login` | Public | Login, returns access + refresh tokens |
| POST | `/auth/logout` | Private | Invalidate refresh token |
| POST | `/auth/refresh-token` | Public | Issue new access token via refresh token |
| GET | `/auth/me` | Private | Get current authenticated user |
| POST | `/auth/forgot-password` | Public | Send password reset email (future) |
| POST | `/auth/reset-password` | Public | Reset password with token (future) |
| PATCH | `/auth/change-password` | Private | Change password (requires current password) |

### User Routes — `/users`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/users/profile` | Private | Get own profile |
| PATCH | `/users/profile` | Private | Update own profile |
| POST | `/users/avatar` | Private | Upload profile avatar |
| DELETE | `/users/avatar` | Private | Remove profile avatar |
| GET | `/users/:id` | Private (Recruiter/Admin) | Get user public profile |

### Job Routes — `/jobs`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/jobs` | Public | List active jobs (paginated, filterable) |
| GET | `/jobs/:id` | Public | Get single job detail |
| POST | `/jobs` | Recruiter | Create new job |
| PATCH | `/jobs/:id` | Recruiter (owner) | Update job |
| DELETE | `/jobs/:id` | Recruiter (owner) | Delete/archive job |
| PATCH | `/jobs/:id/status` | Recruiter (owner) | Change job status |
| GET | `/jobs/recruiter/my-jobs` | Recruiter | List recruiter's own jobs |
| GET | `/jobs/:id/applicants` | Recruiter (owner) | List applicants for a job |

**Query Params for GET `/jobs`:** `page`, `limit`, `search`, `location`, `category`, `employmentType`, `experienceLevel`, `isRemote`, `salaryMin`, `sortBy`

### Resume Routes — `/resumes`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/resumes/upload` | Candidate | Upload resume to Cloudinary |
| GET | `/resumes` | Candidate | List own resumes |
| GET | `/resumes/:id` | Candidate (owner) | Get resume with AI analysis |
| PATCH | `/resumes/:id/primary` | Candidate (owner) | Set as primary resume |
| DELETE | `/resumes/:id` | Candidate (owner) | Delete resume |
| POST | `/resumes/:id/analyze` | Candidate (owner) | Trigger AI resume analysis |
| GET | `/resumes/:id/analysis` | Candidate (owner) | Get AI analysis results |

### Application Routes — `/applications`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/applications` | Candidate | Apply to a job |
| GET | `/applications/my-applications` | Candidate | List own applications |
| GET | `/applications/:id` | Private (owner/recruiter) | Get application detail |
| PATCH | `/applications/:id/status` | Recruiter | Update application status |
| PATCH | `/applications/:id/withdraw` | Candidate (owner) | Withdraw application |
| PATCH | `/applications/:id/notes` | Recruiter | Add/update recruiter notes |
| POST | `/applications/:id/match-score` | Recruiter | Calculate AI job-resume match |

### Interview Routes — `/interviews`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| POST | `/interviews` | Recruiter | Schedule interview |
| GET | `/interviews/my-interviews` | Private | List own interviews (role-aware) |
| GET | `/interviews/:id` | Private (participant) | Get interview detail |
| PATCH | `/interviews/:id` | Recruiter | Update interview |
| PATCH | `/interviews/:id/status` | Recruiter | Cancel/complete interview |
| PATCH | `/interviews/:id/feedback` | Recruiter | Add post-interview feedback |

### Notification Routes — `/notifications`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/notifications` | Private | List notifications (paginated) |
| GET | `/notifications/unread-count` | Private | Get unread count |
| PATCH | `/notifications/:id/read` | Private | Mark single as read |
| PATCH | `/notifications/read-all` | Private | Mark all as read |
| DELETE | `/notifications/:id` | Private | Delete notification |

### Admin Routes — `/admin`

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/admin/dashboard` | Admin | Dashboard summary stats |
| GET | `/admin/users` | Admin | List all users (paginated, filterable) |
| PATCH | `/admin/users/:id/status` | Admin | Activate/deactivate user |
| PATCH | `/admin/users/:id/role` | Admin | Change user role |
| DELETE | `/admin/users/:id` | Admin | Soft-delete user |
| GET | `/admin/jobs` | Admin | List all jobs |
| PATCH | `/admin/jobs/:id/status` | Admin | Force change job status |
| DELETE | `/admin/jobs/:id` | Admin | Force delete job |
| GET | `/admin/analytics` | Admin | Platform analytics data |
| GET | `/admin/analytics/users` | Admin | User growth analytics |
| GET | `/admin/analytics/jobs` | Admin | Job posting analytics |
| GET | `/admin/analytics/applications` | Admin | Application funnel analytics |
| GET | `/admin/reports/applications` | Admin | Export applications report |
| GET | `/admin/reports/users` | Admin | Export users report |
| GET | `/admin/audit-logs` | Admin | View audit logs |

### Health Check

| Method | Endpoint | Access | Description |
|--------|----------|--------|-------------|
| GET | `/health` | Public | Server health status |

### Standard Response Envelope

```json
{
  "success": true,
  "message": "Descriptive message",
  "data": {},
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

### Standard Error Envelope

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    { "field": "email", "message": "Email is required" }
  ],
  "statusCode": 400
}
```

---

## 5. Authentication Flow

### Registration Flow

```
Client                          Backend                         Database
  │                                │                                │
  │── POST /auth/register ────────>│                                │
  │   { email, password, role,       │── Validate input               │
  │     firstName, lastName }        │── Check email uniqueness ─────>│
  │                                │<── Not found ──────────────────│
  │                                │── Hash password (bcrypt, 12)   │
  │                                │── Create user ─────────────────>│
  │                                │── Generate access token (15m)  │
  │                                │── Generate refresh token (7d)  │
  │                                │── Store hashed refresh token ─>│
  │<── 201 { user, accessToken,    │                                │
  │         refreshToken } ─────────│                                │
  │── Store tokens in memory/       │                                │
  │   httpOnly cookie (optional)   │                                │
```

### Login Flow

```
Client                          Backend                         Database
  │                                │                                │
  │── POST /auth/login ───────────>│                                │
  │   { email, password }          │── Find user by email ─────────>│
  │                                │<── User document ──────────────│
  │                                │── Compare password (bcrypt)    │
  │                                │── Check isActive               │
  │                                │── Generate access + refresh    │
  │                                │── Update refreshToken +        │
  │                                   lastLoginAt ────────────────>│
  │<── 200 { user, accessToken,    │                                │
  │         refreshToken } ─────────│                                │
```

### Token Refresh Flow

```
Client                          Backend                         Database
  │                                │                                │
  │── POST /auth/refresh-token ───>│                                │
  │   { refreshToken }             │── Verify refresh JWT           │
  │                                │── Find user, compare hash ────>│
  │                                │── Issue new access token       │
  │                                │── Rotate refresh token (opt)   │
  │<── 200 { accessToken } ────────│                                │
```

### Logout Flow

```
Client                          Backend                         Database
  │                                │                                │
  │── POST /auth/logout ──────────>│  (Bearer access token)         │
  │                                │── Clear refreshToken ─────────>│
  │<── 200 { message } ────────────│                                │
```

### Token Strategy

| Token | Expiry | Storage (Frontend) | Payload |
|-------|--------|-------------------|---------|
| Access Token | 15 minutes | Memory (AuthContext state) | `{ userId, role, email }` |
| Refresh Token | 7 days | httpOnly cookie OR secure localStorage | `{ userId, tokenVersion }` |

---

## 6. Authorization Flow

### Role-Based Access Control (RBAC)

```
Request → authMiddleware (verify JWT)
       → roleMiddleware (check allowed roles)
       → ownershipMiddleware (check resource owner, if applicable)
       → controller
```

### Permission Matrix

| Resource / Action | Candidate | Recruiter | Admin |
|-------------------|:---------:|:---------:|:-----:|
| View public jobs | ✅ | ✅ | ✅ |
| Apply to jobs | ✅ | ❌ | ❌ |
| Upload/analyze resume | ✅ | ❌ | ❌ |
| Post/manage own jobs | ❌ | ✅ | ✅ |
| View job applicants | ❌ | ✅ (own jobs) | ✅ |
| Update application status | ❌ | ✅ (own jobs) | ✅ |
| Schedule interviews | ❌ | ✅ | ✅ |
| Manage all users | ❌ | ❌ | ✅ |
| View platform analytics | ❌ | ❌ | ✅ |
| Force delete any resource | ❌ | ❌ | ✅ |

### Ownership Checks

- **Recruiter → Job:** `job.recruiterId === req.user._id`
- **Candidate → Resume:** `resume.userId === req.user._id`
- **Candidate → Application:** `application.candidateId === req.user._id`
- **Recruiter → Application:** `job.recruiterId === req.user._id` (via populated job)
- **Interview participants:** `recruiterId === req.user._id OR candidateId === req.user._id`

---

## 7. User Roles

### Candidate

- Register and manage profile
- Upload resumes and receive AI analysis
- Browse and search jobs
- Apply to jobs with selected resume
- Track application status
- View scheduled interviews
- Receive notifications

### Recruiter

- Register with company details
- Create, edit, publish, and close job postings
- View and filter applicants per job
- Update applicant pipeline status
- Schedule and manage interviews
- Add notes and feedback on applications
- View recruiter dashboard analytics

### Admin

- Full read access to all users, jobs, and applications
- Activate/deactivate user accounts
- Change user roles
- Force-modify or delete jobs
- Access platform-wide analytics and reports
- View audit logs
- Export CSV/PDF reports

### Role Assignment Rules

- Default role on registration: selected by user (`candidate` or `recruiter`)
- `admin` role: assigned manually in database or by existing admin via admin panel
- Role cannot be self-elevated via API without admin privileges

---

## 8. Route Protection Strategy

### Frontend Route Guards

| Route Group | Guard Component | Allowed Roles |
|-------------|-----------------|---------------|
| Public routes | None | All |
| `/candidate/*` | `ProtectedRoute` | `candidate` |
| `/recruiter/*` | `ProtectedRoute` | `recruiter` |
| `/admin/*` | `ProtectedRoute` | `admin` |

### ProtectedRoute Logic

1. Check if user is authenticated (AuthContext)
2. If not authenticated → redirect to `/login` with `returnUrl`
3. If authenticated but wrong role → redirect to role-appropriate dashboard
4. If authenticated and correct role → render children

### Axios Interceptor Strategy

1. **Request interceptor:** Attach `Authorization: Bearer <accessToken>` header
2. **Response interceptor (401):** Attempt token refresh once; on failure, clear auth state and redirect to login
3. **Response interceptor (403):** Show toast "Access denied" and redirect to dashboard

### Backend Route Protection Layers

```
Route Definition
  └── rateLimitMiddleware (auth routes: 10 req/15min)
  └── authMiddleware (JWT verification)
  └── roleMiddleware(['recruiter', 'admin'])
  └── validateMiddleware (Joi schema)
  └── uploadMiddleware (file routes only)
  └── controller → service
  └── errorMiddleware (global)
```

---

## 9. Frontend Pages

### Public Pages

| Page | Route | Description |
|------|-------|-------------|
| HomePage | `/` | Landing page with hero, features, CTA |
| JobsPage | `/jobs` | Public job listings with filters |
| JobDetailPage | `/jobs/:id` | Single job detail + apply CTA |
| LoginPage | `/login` | User login form |
| RegisterPage | `/register` | Registration with role selection |
| NotFoundPage | `*` | 404 error page |

### Candidate Pages

| Page | Route | Description |
|------|-------|-------------|
| CandidateDashboard | `/candidate/dashboard` | Overview: applications, ATS score, recommendations |
| ResumePage | `/candidate/resume` | Upload, manage, analyze resumes |
| ApplicationsPage | `/candidate/applications` | Track all applications |
| ProfilePage | `/candidate/profile` | Edit profile and skills |

### Recruiter Pages

| Page | Route | Description |
|------|-------|-------------|
| RecruiterDashboard | `/recruiter/dashboard` | Job stats, recent applicants |
| PostJobPage | `/recruiter/jobs/new` | Create new job posting |
| ManageJobsPage | `/recruiter/jobs` | List and manage own jobs |
| ApplicantsPage | `/recruiter/jobs/:id/applicants` | View/filter applicants |
| InterviewsPage | `/recruiter/interviews` | Manage scheduled interviews |

### Admin Pages

| Page | Route | Description |
|------|-------|-------------|
| AdminDashboard | `/admin/dashboard` | Platform KPIs overview |
| UsersPage | `/admin/users` | User management table |
| JobsManagementPage | `/admin/jobs` | All jobs management |
| AnalyticsPage | `/admin/analytics` | Charts and trends |
| ReportsPage | `/admin/reports` | Generate and download reports |

---

## 10. React Components

### Common Components (`components/common/`)

| Component | Purpose |
|-----------|---------|
| `Button` | Primary, secondary, danger, ghost variants |
| `Input` | Text input with label, error state |
| `TextArea` | Multi-line input |
| `Select` | Dropdown select |
| `Modal` | Reusable dialog overlay |
| `Spinner` | Loading indicator |
| `Badge` | Status badges (applied, shortlisted, etc.) |
| `Avatar` | User avatar with fallback initials |
| `Card` | Content container |
| `Pagination` | Page navigation |
| `EmptyState` | No data placeholder |
| `ConfirmDialog` | Delete/action confirmation |
| `SearchBar` | Debounced search input |
| `FileUpload` | Drag-and-drop file upload zone |
| `ProgressBar` | Upload/analysis progress |
| `Tooltip` | Hover tooltip |
| `Tabs` | Tab navigation |
| `Dropdown` | Action menu dropdown |
| `Skeleton` | Loading skeleton placeholders |

### Layout Components (`components/layout/`)

| Component | Purpose |
|-----------|---------|
| `Navbar` | Top navigation with auth state |
| `Sidebar` | Dashboard side navigation (role-aware) |
| `Footer` | Public footer |
| `DashboardLayout` | Sidebar + content wrapper |
| `PageHeader` | Page title + breadcrumbs + actions |
| `MobileMenu` | Responsive hamburger menu |

### Auth Components (`components/auth/`)

| Component | Purpose |
|-----------|---------|
| `LoginForm` | Email/password login |
| `RegisterForm` | Registration with role toggle |
| `ProtectedRoute` | Route guard wrapper |
| `RoleRedirect` | Redirect to correct dashboard |
| `ChangePasswordForm` | Password change form |

### Candidate Components (`components/candidate/`)

| Component | Purpose |
|-----------|---------|
| `ResumeUploader` | Upload resume with progress |
| `ResumeCard` | Display resume with actions |
| `ATSScoreCard` | Visual ATS score display |
| `AIAnalysisPanel` | Strengths, weaknesses, suggestions |
| `ApplicationCard` | Application status card |
| `ApplicationTimeline` | Status history visualization |
| `SkillsTagInput` | Skills management input |
| `ProfileForm` | Candidate profile editor |

### Recruiter Components (`components/recruiter/`)

| Component | Purpose |
|-----------|---------|
| `JobForm` | Create/edit job form |
| `JobCard` | Recruiter job listing card |
| `ApplicantTable` | Sortable/filterable applicant table |
| `ApplicantDetail` | Single applicant view |
| `StatusPipeline` | Kanban-style status board |
| `InterviewScheduler` | Schedule interview form |
| `InterviewCard` | Interview list item |
| `MatchScoreBadge` | AI match score indicator |
| `RecruiterNotes` | Internal notes editor |

### Admin Components (`components/admin/`)

| Component | Purpose |
|-----------|---------|
| `UserTable` | All users management table |
| `UserActions` | Activate/deactivate/role change |
| `AnalyticsCard` | KPI stat card |
| `LineChart` | Trend line chart wrapper |
| `BarChart` | Bar chart wrapper |
| `PieChart` | Distribution chart wrapper |
| `ReportExport` | Export button with format selection |
| `AuditLogTable` | Audit log viewer |

### Job Components (`components/jobs/`)

| Component | Purpose |
|-----------|---------|
| `JobCard` | Public job listing card |
| `JobList` | Paginated job grid/list |
| `JobFilters` | Filter sidebar/panel |
| `JobDetail` | Full job description view |
| `ApplyJobModal` | Apply with resume selection |
| `SalaryRange` | Formatted salary display |

### Notification Components (`components/notifications/`)

| Component | Purpose |
|-----------|---------|
| `NotificationBell` | Bell icon with unread badge |
| `NotificationDropdown` | Recent notifications popup |
| `NotificationList` | Full notification list page item |
| `NotificationItem` | Single notification row |

---

## 11. Context API Structure

### AuthContext

**State:**
- `user` — Current user object (null if logged out)
- `accessToken` — JWT access token
- `isAuthenticated` — Boolean derived state
- `isLoading` — Auth initialization loading
- `error` — Auth error message

**Actions:**
- `login(email, password)` — Authenticate user
- `register(userData)` — Register new user
- `logout()` — Clear session
- `refreshToken()` — Silently refresh access token
- `updateUser(updatedData)` — Update local user state after profile edit

**Provider placement:** Wrap entire app in `main.jsx`

---

### ThemeContext (Optional — Light mode default)

**State:**
- `theme` — `'light'` | `'dark'`

**Actions:**
- `toggleTheme()` — Switch theme
- `setTheme(theme)` — Set explicit theme

---

### NotificationContext

**State:**
- `notifications` — Array of recent notifications
- `unreadCount` — Number of unread notifications
- `isLoading` — Loading state

**Actions:**
- `fetchNotifications()` — Load notifications
- `fetchUnreadCount()` — Poll unread count
- `markAsRead(id)` — Mark single notification read
- `markAllAsRead()` — Mark all read
- `addNotification(notification)` — Push new notification (from polling)

**Polling interval:** Every 60 seconds when authenticated

---

### Context Usage Pattern

```
App
└── AuthProvider
    └── NotificationProvider
        └── ThemeProvider
            └── AppRoutes
```

---

## 12. Backend Middleware

| Middleware | File | Purpose |
|------------|------|---------|
| `authMiddleware` | `authMiddleware.js` | Verify JWT, attach `req.user` |
| `roleMiddleware` | `roleMiddleware.js` | Factory: `roleMiddleware(['admin'])` |
| `validateMiddleware` | `validateMiddleware.js` | Joi schema validation |
| `errorMiddleware` | `errorMiddleware.js` | Global error handler (last middleware) |
| `uploadMiddleware` | `uploadMiddleware.js` | Multer memory storage for resume/avatar |
| `rateLimitMiddleware` | `rateLimitMiddleware.js` | express-rate-limit configs |
| `ownershipMiddleware` | `ownershipMiddleware.js` | Verify resource ownership |
| `notFoundMiddleware` | `errorMiddleware.js` | 404 for undefined routes |

### authMiddleware Behavior

1. Extract token from `Authorization` header
2. Verify JWT signature and expiry
3. Fetch user from DB (exclude password)
4. Check `isActive === true`
5. Attach user to `req.user`
6. On failure: throw `ApiError(401, 'Unauthorized')`

### validateMiddleware Behavior

1. Accept Joi schema for `body`, `params`, `query`
2. Validate and strip unknown fields
3. On failure: throw `ApiError(400, 'Validation failed', errors[])`

### uploadMiddleware Config

| Route | Max Size | Allowed Types |
|-------|----------|---------------|
| Resume upload | 5 MB | `.pdf`, `.doc`, `.docx` |
| Avatar upload | 2 MB | `.jpg`, `.jpeg`, `.png`, `.webp` |

---

## 13. Controllers

Controllers handle HTTP request/response only — no business logic.

| Controller | Responsibilities |
|------------|-----------------|
| `authController` | register, login, logout, refreshToken, getMe, changePassword |
| `userController` | getProfile, updateProfile, uploadAvatar, deleteAvatar, getUserById |
| `jobController` | CRUD jobs, list jobs, getRecruiterJobs, getJobApplicants, updateStatus |
| `resumeController` | uploadResume, listResumes, getResume, deleteResume, setPrimary, analyzeResume |
| `applicationController` | apply, getMyApplications, getApplication, updateStatus, withdraw, addNotes, getMatchScore |
| `interviewController` | schedule, listMyInterviews, getInterview, updateInterview, updateStatus, addFeedback |
| `notificationController` | list, getUnreadCount, markRead, markAllRead, delete |
| `analyticsController` | getDashboardStats, getUserAnalytics, getJobAnalytics, getApplicationAnalytics |
| `adminController` | manageUsers, manageJobs, getAuditLogs, exportReports |

### Controller Pattern

Each controller method:
1. Extract data from `req.body`, `req.params`, `req.query`, `req.user`
2. Call corresponding service method
3. Return `ApiResponse` with appropriate status code
4. Errors propagate to `errorMiddleware` via `asyncHandler`

---

## 14. Services

Services contain all business logic.

| Service | Key Methods |
|---------|-------------|
| `authService` | `registerUser`, `loginUser`, `logoutUser`, `refreshAccessToken`, `changePassword` |
| `userService` | `getProfile`, `updateProfile`, `uploadAvatar`, `getUserById`, `deactivateUser` |
| `jobService` | `createJob`, `updateJob`, `deleteJob`, `getJobs`, `getJobById`, `getRecruiterJobs`, `incrementViewCount` |
| `resumeService` | `uploadResume`, `getResumes`, `deleteResume`, `setPrimaryResume`, `extractText` |
| `applicationService` | `createApplication`, `getApplications`, `updateStatus`, `withdrawApplication`, `addNotes`, `calculateMatchScore` |
| `interviewService` | `scheduleInterview`, `getInterviews`, `updateInterview`, `cancelInterview`, `addFeedback` |
| `notificationService` | `createNotification`, `getNotifications`, `markAsRead`, `markAllAsRead`, `getUnreadCount` |
| `geminiService` | `analyzeResume`, `calculateJobMatch`, `generateSummary` |
| `cloudinaryService` | `uploadFile`, `deleteFile`, `getOptimizedUrl` |
| `analyticsService` | `getDashboardStats`, `getUserGrowth`, `getJobStats`, `getApplicationFunnel` |
| `emailService` | `sendWelcomeEmail`, `sendInterviewInvite` (future phase) |

### Service Layer Rules

- Services never access `req` or `res` directly
- Services throw `ApiError` for business rule violations
- Services call other services when needed (e.g., `applicationService` calls `notificationService`)
- Database operations live exclusively in services

---

## 15. Utilities

### Backend Utilities

| Utility | Purpose |
|---------|---------|
| `ApiError` | Custom error class with `statusCode`, `message`, `errors[]` |
| `ApiResponse` | Standardized success response builder |
| `asyncHandler` | Wraps async route handlers, forwards errors to middleware |
| `generateToken` | Create JWT access/refresh tokens |
| `parseResumeText` | Extract plain text from PDF/DOCX buffers |
| `paginationHelper` | Build skip/limit/sort from query params |

### Frontend Utilities

| Utility | Purpose |
|---------|---------|
| `constants.js` | API base URL, role enums, status enums, route paths |
| `formatDate.js` | Human-readable date formatting |
| `formatSalary.js` | Salary range formatting with currency |
| `getRoleDashboard.js` | Return dashboard path by role |
| `validators.js` | Client-side format checks (email, password strength) |

---

## 16. Environment Variables

### Backend (`.env`)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NODE_ENV` | Yes | Environment | `production` |
| `PORT` | Yes | Server port | `5000` |
| `MONGODB_URI` | Yes | MongoDB Atlas connection string | `mongodb+srv://...` |
| `JWT_ACCESS_SECRET` | Yes | Access token signing secret | Random 64+ chars |
| `JWT_REFRESH_SECRET` | Yes | Refresh token signing secret | Random 64+ chars |
| `JWT_ACCESS_EXPIRY` | Yes | Access token TTL | `15m` |
| `JWT_REFRESH_EXPIRY` | Yes | Refresh token TTL | `7d` |
| `CLOUDINARY_CLOUD_NAME` | Yes | Cloudinary cloud name | `hirehub-ai` |
| `CLOUDINARY_API_KEY` | Yes | Cloudinary API key | — |
| `CLOUDINARY_API_SECRET` | Yes | Cloudinary API secret | — |
| `GEMINI_API_KEY` | Yes | Google Gemini API key | — |
| `CLIENT_URL` | Yes | Frontend URL for CORS | `https://hirehub-ai.vercel.app` |
| `BCRYPT_SALT_ROUNDS` | No | bcrypt rounds | `12` |
| `MAX_FILE_SIZE` | No | Max upload bytes | `5242880` |

### Frontend (`.env.local`)

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_API_BASE_URL` | Yes | Backend API URL | `https://hirehub-api.onrender.com/api/v1` |
| `VITE_APP_NAME` | No | App display name | `HireHub AI` |
| `VITE_CLOUDINARY_CLOUD_NAME` | No | For client-side upload preset (if used) | — |

### Security Notes

- Never commit `.env` files
- Provide `.env.example` with placeholder values
- Rotate secrets on deployment platform dashboards
- Use different secrets for development and production

---

## 17. Validation Strategy

### Backend Validation (Joi)

Validation runs in `validateMiddleware` before controllers.

| Validator File | Schemas |
|----------------|---------|
| `authValidator` | `registerSchema`, `loginSchema`, `changePasswordSchema` |
| `userValidator` | `updateProfileSchema` |
| `jobValidator` | `createJobSchema`, `updateJobSchema`, `jobQuerySchema` |
| `resumeValidator` | `analyzeResumeSchema` |
| `applicationValidator` | `applySchema`, `updateStatusSchema` |
| `interviewValidator` | `scheduleInterviewSchema`, `updateInterviewSchema` |

### Validation Rules Summary

| Field | Rules |
|-------|-------|
| Email | Valid email format, required |
| Password | Min 8 chars, 1 uppercase, 1 lowercase, 1 number |
| Job title | Required, max 100 chars |
| Job description | Required, min 50, max 5000 chars |
| Cover letter | Optional, max 2000 chars |
| Application status | Must be valid enum value |
| Interview date | Must be future date |
| Salary range | `salaryMin <= salaryMax` when both provided |

### Frontend Validation (React Hook Form)

- Mirror backend rules for immediate user feedback
- Use `mode: 'onBlur'` for field validation
- Display field-level errors below inputs
- Disable submit button while form is invalid or submitting
- Server validation errors mapped to form fields on 400 responses

---

## 18. Error Handling Strategy

### Error Classification

| Type | Status Code | Example |
|------|-------------|---------|
| Validation Error | 400 | Missing required field |
| Unauthorized | 401 | Invalid/expired token |
| Forbidden | 403 | Wrong role for action |
| Not Found | 404 | Job/resume not found |
| Conflict | 409 | Duplicate application |
| Payload Too Large | 413 | File exceeds limit |
| Rate Limited | 429 | Too many login attempts |
| Server Error | 500 | Unhandled exception |

### Backend Error Flow

```
Service throws ApiError
  → asyncHandler catches
  → errorMiddleware formats response
  → Client receives standard error envelope
```

### ApiError Structure

- `statusCode` — HTTP status
- `message` — Human-readable message
- `errors` — Optional array of field errors
- `isOperational` — true for expected errors (don't log stack)

### Frontend Error Handling

1. **Axios interceptor:** Global toast for 5xx errors
2. **Form level:** Map 400 validation errors to fields
3. **Page level:** Error boundary for render crashes
4. **Toast messages:** User-friendly messages via React Hot Toast
5. **401 handling:** Silent refresh → logout on failure

### Logging Strategy

| Environment | Behavior |
|-------------|----------|
| Development | Console log full error + stack |
| Production | Log operational errors to stdout; log 500 stack traces; never expose stack to client |

---

## 19. AI Resume Analysis Flow

```
Candidate                Frontend              Backend              Gemini API
    │                        │                     │                     │
    │── Click "Analyze" ────>│                     │                     │
    │                        │── POST /resumes/    │                     │
    │                        │   :id/analyze ─────>│                     │
    │                        │                     │── Fetch resume doc  │
    │                        │                     │── Get extractedText │
    │                        │                     │   (or parse file)   │
    │                        │                     │── Build prompt:     │
    │                        │                     │   resume text +     │
    │                        │                     │   analysis template │
    │                        │                     │── Call Gemini API ─>│
    │                        │                     │<── AI response ─────│
    │                        │                     │── Parse JSON output │
    │                        │                     │── Save aiAnalysis   │
    │                        │                     │   to Resume doc     │
    │                        │<── 200 { analysis }─│                     │
    │<── Display ATS score,  │                     │                     │
    │    strengths, etc. ────│                     │                     │
```

### Gemini Prompt Structure (Conceptual)

**Input to Gemini:**
- Extracted resume plain text
- System instruction: "You are an ATS resume analyzer..."
- Request structured JSON output matching `aiAnalysis` schema

**Output Fields:**
- `atsScore` (0–100)
- `summary`
- `strengths[]`, `weaknesses[]`
- `suggestedSkills[]`
- `keywordMatch[]`, `missingKeywords[]`
- `formattingIssues[]`

### Job-Resume Match Score Flow

Triggered by recruiter on applicant view:

1. Fetch resume `extractedText` + job `requirements` + `description`
2. Send to Gemini with match-scoring prompt
3. Return `matchScore` (0–100) stored on Application document
4. Display in ApplicantTable as MatchScoreBadge

### Rate Limiting for AI

- Max 5 resume analyses per candidate per day
- Max 20 match score calculations per recruiter per day
- Return 429 with retry-after header when exceeded

---

## 20. Resume Upload Flow

```
Candidate              Frontend              Backend           Cloudinary
    │                      │                     │                  │
    │── Select/drop file ─>│                     │                  │
    │                      │── Validate client:  │                  │
    │                      │   type, size        │                  │
    │                      │── POST /resumes/    │                  │
    │                      │   upload (multipart)│                  │
    │                      │                     │── uploadMiddleware│
    │                      │                     │   validates file  │
    │                      │                     │── Upload buffer ─>│
    │                      │                     │<── secure_url,    │
    │                      │                     │    public_id ─────│
    │                      │                     │── parseResumeText │
    │                      │                     │── Save Resume doc │
    │                      │                     │── If first resume:│
    │                      │                     │   set isPrimary   │
    │                      │<── 201 { resume } ──│                  │
    │<── Show in resume list│                     │                  │
```

### Upload Rules

- Accepted formats: PDF, DOC, DOCX
- Max file size: 5 MB
- Max resumes per candidate: 5
- On delete: remove from Cloudinary AND database
- Primary resume: only one per user; switching primary unsets previous

### Text Extraction

1. PDF → use `pdf-parse` library
2. DOCX → use `mammoth` library
3. DOC → attempt mammoth; fallback to error message asking for PDF/DOCX
4. Store `extractedText` on Resume document for AI analysis

---

## 21. Job Application Flow

```
Candidate              Frontend              Backend              Services
    │                      │                     │                     │
    │── View job detail ───>│                     │                     │
    │── Click "Apply" ─────>│                     │                     │
    │                      │── Open ApplyJobModal│                     │
    │                      │   (select resume,   │                     │
    │                      │    cover letter)    │                     │
    │── Submit ────────────>│                     │                     │
    │                      │── POST /applications│                     │
    │                      │   { jobId, resumeId,│                     │
    │                      │     coverLetter } ─>│                     │
    │                      │                     │── Validate:         │
    │                      │                     │   job is active     │
    │                      │                     │   no duplicate app  │
    │                      │                     │   resume belongs    │
    │                      │                     │   to candidate      │
    │                      │                     │── Create Application│
    │                      │                     │── Increment job     │
    │                      │                     │   applicantCount    │
    │                      │                     │── Notify recruiter ─>│
    │                      │                     │   notificationService│
    │                      │<── 201 { application}│                     │
    │<── Toast "Applied!" ──│                     │                     │
```

### Application Status Pipeline

```
applied → reviewing → shortlisted → interview → offered
                                              ↘ rejected
         applied → withdrawn (candidate action)
```

### Business Rules

- One application per candidate per job (unique compound index)
- Cannot apply to closed/archived jobs
- Must have at least one uploaded resume
- Withdrawal only allowed before `offered` or `rejected` status
- Status changes append to `statusHistory` array

---

## 22. Recruiter Dashboard Flow

### Dashboard Load Sequence

1. Recruiter logs in → redirect to `/recruiter/dashboard`
2. Fetch dashboard data:
   - Active jobs count
   - Total applicants across all jobs
   - Pending reviews count
   - Upcoming interviews (next 7 days)
   - Recent applicants list (last 10)
3. Render stat cards + recent activity feed

### Recruiter Workflow Paths

**Path A — Post a Job:**
Dashboard → Post Job → Fill JobForm → Submit → Job published (status: `active`) → Redirect to Manage Jobs

**Path B — Review Applicants:**
Dashboard → Manage Jobs → Select Job → Applicants Page → Filter/sort applicants → View detail → Update status → Optionally schedule interview

**Path C — Schedule Interview:**
Applicants Page → Select applicant → Change status to `interview` → InterviewScheduler modal → Submit → Notification sent to candidate

### Recruiter Dashboard Data Endpoints

- `GET /jobs/recruiter/my-jobs?status=active&limit=5`
- `GET /applications?jobId=X&status=applied&limit=10` (aggregated)
- `GET /interviews/my-interviews?upcoming=true&limit=5`

---

## 23. Candidate Dashboard Flow

### Dashboard Load Sequence

1. Candidate logs in → redirect to `/candidate/dashboard`
2. Fetch dashboard data:
   - Primary resume ATS score (if analyzed)
   - Active applications count by status
   - Recommended jobs (based on skills)
   - Upcoming interviews
   - Recent application updates
3. Render personalized dashboard

### Candidate Workflow Paths

**Path A — Upload & Analyze Resume:**
Dashboard → Resume Page → Upload → Auto text extraction → Click Analyze → View ATS results → Improve resume

**Path B — Find & Apply:**
Dashboard → Browse Jobs → Filter/search → Job Detail → Apply with primary resume → Track in Applications

**Path C — Track Application:**
Dashboard → Applications Page → View ApplicationCard → See ApplicationTimeline → View interview details if scheduled

### Candidate Dashboard Data Endpoints

- `GET /resumes?isPrimary=true`
- `GET /applications/my-applications?limit=5&sort=-updatedAt`
- `GET /jobs?category=X&limit=6` (based on profile skills)
- `GET /interviews/my-interviews?upcoming=true`

---

## 24. Admin Dashboard Flow

### Dashboard Load Sequence

1. Admin logs in → redirect to `/admin/dashboard`
2. Fetch platform KPIs:
   - Total users (by role breakdown)
   - Total active jobs
   - Total applications (by status)
   - New registrations (last 30 days)
   - Application conversion rate
3. Render analytics cards + charts

### Admin Workflow Paths

**Path A — User Management:**
Admin Dashboard → Users Page → Search/filter users → Deactivate user / Change role → Audit log created

**Path B — Job Moderation:**
Admin Dashboard → Jobs Management → View all jobs → Force close/delete inappropriate jobs

**Path C — Analytics & Reports:**
Admin Dashboard → Analytics Page → View trends → Reports Page → Export CSV

### Admin Analytics Metrics

| Metric | Source |
|--------|--------|
| User growth over time | `users.createdAt` aggregation |
| Jobs by category | `jobs.category` group |
| Application funnel | `applications.status` group |
| Avg ATS score | `resumes.aiAnalysis.atsScore` average |
| Top recruiters | `jobs` count by `recruiterId` |
| Application rate | applications / total job views |

---

## 25. Notification System

### Notification Types

| Type | Trigger | Recipient |
|------|---------|-----------|
| `APPLICATION_RECEIVED` | Candidate applies to job | Recruiter |
| `APPLICATION_STATUS_CHANGED` | Recruiter updates status | Candidate |
| `INTERVIEW_SCHEDULED` | Interview created | Candidate |
| `INTERVIEW_UPDATED` | Interview rescheduled | Candidate |
| `INTERVIEW_CANCELLED` | Interview cancelled | Candidate |
| `RESUME_ANALYZED` | AI analysis complete | Candidate |
| `JOB_CLOSED` | Job status → closed | Applicants (bulk) |
| `ACCOUNT_STATUS_CHANGED` | Admin activates/deactivates | User |
| `WELCOME` | User registers | User |

### Notification Delivery (Phase 1 — In-App Only)

1. Event occurs in service layer
2. `notificationService.createNotification()` called
3. Notification document saved to MongoDB
4. Frontend polls `GET /notifications/unread-count` every 60s
5. NotificationBell badge updates
6. User clicks bell → dropdown shows recent notifications
7. Click notification → navigate to `link` → mark as read

### Future Phase — Email Notifications

- Integrate SendGrid or Nodemailer
- Send email for interview scheduled, application status changes
- User preference toggles for email notifications

---

## 26. Folder Naming Convention

| Item | Convention | Example |
|------|------------|---------|
| Folders | kebab-case | `components/`, `resume-service/` |
| React components | PascalCase files | `JobCard.jsx`, `AuthContext.jsx` |
| Backend files | camelCase | `jobController.js`, `authService.js` |
| Routes | camelCase + Routes suffix | `jobRoutes.js` |
| Models | PascalCase singular | `User.js`, `Application.js` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_FILE_SIZE`, `USER_ROLES` |
| CSS classes | Tailwind utility classes | No custom CSS unless necessary |
| Environment vars | SCREAMING_SNAKE_CASE | `JWT_ACCESS_SECRET` |
| API endpoints | kebab-case paths | `/my-applications`, `/refresh-token` |
| Database fields | camelCase | `firstName`, `applicantCount` |
| Git branches | kebab-case with prefix | `feature/job-filters`, `fix/auth-token` |

---

## 27. Coding Standards

### General Principles

- **Single Responsibility:** One function = one job
- **DRY:** Reuse services and common components
- **KISS:** Avoid premature abstraction
- **Consistent async:** Use async/await everywhere; no callback hell
- **No magic numbers:** Use named constants

### Backend Standards

- All route handlers wrapped in `asyncHandler`
- All responses use `ApiResponse` / `ApiError`
- No business logic in controllers
- No direct DB queries in controllers
- Mongoose queries use `.lean()` for read-only list endpoints
- Populate only required fields
- Use transactions for multi-document writes (application + notification)

### Frontend Standards

- Functional components only (React 19)
- Custom hooks for reusable logic
- Service layer for all API calls (no fetch in components)
- Destructure props at function signature
- Colocate component-specific styles with Tailwind classes
- Lazy load dashboard pages with `React.lazy()` + `Suspense`
- Avoid prop drilling beyond 2 levels — use Context

### Git Commit Messages

Format: `type(scope): description`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples:
- `feat(auth): add JWT refresh token rotation`
- `fix(jobs): prevent duplicate applications`
- `feat(resume): integrate Gemini AI analysis`

---

## 28. Security Best Practices

### Authentication & Authorization

- bcrypt with 12 salt rounds for password hashing
- Short-lived access tokens (15 min) + refresh token rotation
- Store refresh token hashed in database
- Never expose password or refresh token in API responses
- Role checks on every protected endpoint

### Input & Data Security

- Joi validation on all inputs
- Sanitize user-generated HTML content
- Mongoose schema validation as second layer
- Parameterized queries only (Mongoose default)
- File type validation by MIME type AND extension

### HTTP Security

- Helmet.js for security headers
- CORS restricted to `CLIENT_URL` only
- Rate limiting on auth routes (10 req/15 min)
- Rate limiting on AI routes (see section 19)
- Request size limits (`express.json({ limit: '10kb' })`)

### File Upload Security

- Validate file type and size server-side
- Upload to Cloudinary (never store on server filesystem)
- Generate unique Cloudinary public IDs
- No executable file types allowed

### Environment & Deployment

- All secrets in environment variables
- Different JWT secrets for dev/production
- MongoDB Atlas IP whitelist + database user with minimal privileges
- HTTPS enforced on all endpoints
- No sensitive data in JWT payload beyond id, role, email

### Frontend Security

- Access token in memory only (not localStorage)
- Refresh token in httpOnly cookie (preferred) or secure storage
- No API keys exposed in frontend bundle
- XSS prevention: React's default escaping; no `dangerouslySetInnerHTML`

---

## 29. Responsive Design Strategy

### Breakpoints (Tailwind Defaults)

| Breakpoint | Min Width | Target |
|------------|-----------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Layout Strategy

| Area | Mobile (< md) | Tablet (md) | Desktop (lg+) |
|------|---------------|-------------|---------------|
| Navigation | Hamburger menu | Hamburger menu | Full navbar |
| Dashboard sidebar | Hidden (drawer) | Collapsed icons | Full sidebar |
| Job listings | Single column cards | 2-column grid | 3-column grid |
| Applicant table | Card list view | Horizontal scroll table | Full table |
| Forms | Full width stacked | Full width stacked | Max-width centered |
| Analytics charts | Stacked vertically | 2-column | 3-column grid |

### Mobile-First Approach

- Write base styles for mobile, add responsive modifiers (`md:`, `lg:`)
- Touch-friendly tap targets (min 44px)
- Bottom navigation optional for candidate mobile dashboard
- Collapsible filter panels on jobs page
- Swipe-friendly notification dropdown

---

## 30. Color Palette

### Primary Brand Colors

| Name | Hex | Tailwind Custom | Usage |
|------|-----|-----------------|-------|
| Primary | `#2563EB` | `primary-600` | Buttons, links, active states |
| Primary Dark | `#1D4ED8` | `primary-700` | Hover states |
| Primary Light | `#DBEAFE` | `primary-100` | Backgrounds, badges |
| Secondary | `#7C3AED` | `secondary-600` | AI features, accents |
| Secondary Light | `#EDE9FE` | `secondary-100` | AI section backgrounds |

### Semantic Colors

| Name | Hex | Usage |
|------|-----|-------|
| Success | `#16A34A` | Offered, active, success toasts |
| Warning | `#D97706` | Pending, reviewing status |
| Error | `#DC2626` | Rejected, errors, destructive actions |
| Info | `#0891B2` | Informational badges |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| Background | `#F8FAFC` | Page background |
| Surface | `#FFFFFF` | Cards, modals |
| Border | `#E2E8F0` | Dividers, input borders |
| Text Primary | `#0F172A` | Headings, body text |
| Text Secondary | `#64748B` | Subtitles, placeholders |
| Text Muted | `#94A3B8` | Disabled, timestamps |

### ATS Score Color Scale

| Score Range | Color | Label |
|-------------|-------|-------|
| 80–100 | `#16A34A` (Green) | Excellent |
| 60–79 | `#D97706` (Amber) | Good |
| 40–59 | `#EA580C` (Orange) | Fair |
| 0–39 | `#DC2626` (Red) | Needs Work |

---

## 31. Typography

### Font Stack

| Usage | Font | Fallback |
|-------|------|----------|
| Headings & Body | **Inter** | `system-ui, sans-serif` |
| Code/Monospace | **JetBrains Mono** | `monospace` |

Import via Google Fonts in `index.html` or `@fontsource/inter`.

### Type Scale

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Page title) | 2.25rem (36px) | 700 | 1.2 |
| H2 (Section) | 1.875rem (30px) | 600 | 1.3 |
| H3 (Card title) | 1.25rem (20px) | 600 | 1.4 |
| Body | 1rem (16px) | 400 | 1.6 |
| Small / Caption | 0.875rem (14px) | 400 | 1.5 |
| Label | 0.875rem (14px) | 500 | 1.4 |
| Button | 0.875rem (14px) | 600 | 1 |

### Tailwind Config Mapping

- `font-sans` → Inter
- `font-mono` → JetBrains Mono
- Headings use `tracking-tight`
- Body text uses default tracking

---

## 32. UI Design Style

### Design Philosophy

**Modern Professional SaaS** — Clean, trustworthy, data-forward interface suitable for both job seekers and hiring professionals.

### Key Design Principles

1. **Clarity over decoration** — Every element serves a purpose
2. **Data visualization** — ATS scores, application stats prominently displayed
3. **Progressive disclosure** — Show summary first, details on demand
4. **Consistent spacing** — 4px base grid (Tailwind spacing scale)
5. **Accessible contrast** — WCAG AA minimum for all text

### Component Style Guide

| Component | Style |
|-----------|-------|
| Cards | White surface, `rounded-xl`, subtle shadow (`shadow-sm`), `border border-slate-200` |
| Buttons | `rounded-lg`, primary filled / secondary outlined / ghost text |
| Inputs | `rounded-lg`, focus ring `ring-2 ring-primary-500` |
| Badges | `rounded-full`, small caps, semantic colors |
| Modals | Centered overlay, `rounded-2xl`, backdrop blur |
| Tables | Striped rows, hover highlight, sticky header |
| Sidebar | Dark navy `#0F172A` background, white text, active item highlighted |

### Animation (Framer Motion)

- Page transitions: fade + slide up (200ms)
- Modal: scale in from 0.95 (150ms)
- Notification bell: subtle bounce on new notification
- Card hover: lift shadow transition
- Skeleton loading: pulse animation
- Keep animations subtle — never block interaction

### Empty States

- Illustration or icon + descriptive text + CTA button
- Example: "No applications yet — Browse Jobs"

---

## 33. Icons Library

**Library:** [Lucide React](https://lucide.dev/)

### Commonly Used Icons

| Icon | Usage |
|------|-------|
| `Briefcase` | Jobs, recruiter section |
| `FileText` | Resume, documents |
| `User` / `Users` | Profile, user management |
| `Bell` | Notifications |
| `Search` | Job search |
| `Upload` | Resume upload |
| `Sparkles` | AI features |
| `BarChart3` | Analytics |
| `Calendar` | Interviews |
| `CheckCircle` | Success, offered status |
| `XCircle` | Rejected, errors |
| `Clock` | Pending, scheduled |
| `Settings` | Profile settings |
| `LogOut` | Logout |
| `Plus` | Create/add actions |
| `Filter` | Filter panels |
| `Download` | Report export |
| `Star` | Shortlisted |
| `TrendingUp` | Analytics trends |

### Icon Sizing

- Navigation: 20px (`size={20}`)
- Inline text: 16px
- Feature icons: 24–32px
- Empty states: 48–64px

---

## 34. Charts Library

**Library:** [Recharts](https://recharts.org/)

### Charts Used

| Chart | Component | Used In |
|-------|-----------|---------|
| Line Chart | `LineChart` | User growth, application trends |
| Bar Chart | `BarChart` | Jobs by category, applications by status |
| Pie/Donut Chart | `PieChart` | Role distribution, status breakdown |
| Area Chart | `AreaChart` | Application funnel over time |
| Radial Bar | `RadialBarChart` | ATS score visualization |

### Chart Wrapper Pattern

Create reusable wrapper components in `components/admin/`:
- `LineChartWidget` — accepts `data`, `title`, `xKey`, `yKey`
- `BarChartWidget` — accepts `data`, `title`, `dataKey`
- `DonutChartWidget` — accepts `data`, `title`

### Chart Styling

- Colors from palette (section 30)
- Responsive container (`ResponsiveContainer width="100%"`)
- Tooltip with formatted values
- Legend below chart on mobile, right on desktop
- Grid lines: subtle `#E2E8F0`

---

## 35. Future Scalability Plan

### Phase 2 Enhancements

| Feature | Approach |
|---------|----------|
| Real-time notifications | Socket.io or Server-Sent Events |
| Email notifications | SendGrid / Nodemailer integration |
| Advanced job search | MongoDB Atlas Search (full-text) |
| Resume builder | In-app resume creator with AI suggestions |
| Company profiles | Separate Company model, multi-recruiter |
| Saved jobs | SavedJob collection |
| Job alerts | Scheduled email digest based on preferences |

### Phase 3 — Scale Architecture

| Concern | Solution |
|---------|----------|
| API load | Horizontal scaling on Render + load balancer |
| Database | MongoDB Atlas auto-scaling, read replicas |
| File storage | Cloudinary auto-optimization + CDN |
| AI costs | Queue system (Bull/BullMQ) for async analysis |
| Caching | Redis for session, job listings cache |
| Search | Elasticsearch or Atlas Search index |
| Monitoring | Sentry (errors) + Render metrics |
| CI/CD | GitHub Actions pipeline |

### Database Scaling

- Denormalize `applicantCount` on Job (already planned)
- Add compound indexes as query patterns emerge
- Archive closed jobs older than 12 months to `jobs_archive` collection
- Paginate all list endpoints (default limit: 10, max: 50)

### Multi-Tenancy (Future)

- Company model with `companyId` on User and Job
- Recruiter belongs to company
- Admin scoped to platform level

---

## 36. Deployment Strategy

### Architecture Overview

```
Users → Vercel (Frontend CDN)
           ↓ API calls
        Render (Backend API)
           ↓                ↓
    MongoDB Atlas    Cloudinary + Gemini API
```

### Frontend — Vercel

| Setting | Value |
|---------|-------|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Environment | `VITE_API_BASE_URL` → Render backend URL |
| Custom domain | `hirehub-ai.vercel.app` or custom |
| SPA routing | `vercel.json` rewrite all → `/index.html` |

**`vercel.json` rewrites:**
- All non-asset routes → `/index.html` (SPA support)

### Backend — Render

| Setting | Value |
|---------|-------|
| Service type | Web Service |
| Environment | Node |
| Build command | `npm install` |
| Start command | `npm start` |
| Health check | `GET /api/v1/health` |
| Auto-deploy | On push to `main` branch |
| Instance | Starter (upgrade as needed) |

### Database — MongoDB Atlas

| Setting | Value |
|---------|-------|
| Cluster tier | M0 (free) → M10 (production) |
| Region | Same as Render region (low latency) |
| Network access | Allow Render outbound IPs |
| Backups | Enable on production tier |

### CI/CD Pipeline (GitHub Actions)

1. Push to feature branch → run lint + build checks
2. PR to `develop` → run checks, require review
3. Merge to `main` → auto-deploy frontend (Vercel) + backend (Render)

### Environment Separation

| Environment | Frontend | Backend | Database |
|-------------|----------|---------|----------|
| Development | localhost:5173 | localhost:5000 | Local / Atlas dev cluster |
| Staging | Vercel preview | Render staging | Atlas staging |
| Production | Vercel prod | Render prod | Atlas prod cluster |

---

## 37. README Structure

### Root README.md

```markdown
# HireHub AI

AI-powered job portal for candidates and recruiters.

## Tech Stack
- Frontend: React 19, Vite, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- AI: Google Gemini API
- Storage: Cloudinary

## Project Structure
- `/frontend` — React application
- `/backend` — Express API server
- `/docs` — Architecture and API documentation

## Getting Started
1. Clone repository
2. Set up environment variables (see .env.example)
3. Start backend: `cd backend && npm install && npm run dev`
4. Start frontend: `cd frontend && npm install && npm run dev`

## Documentation
- [Architecture Blueprint](./docs/ARCHITECTURE_BLUEPRINT.md)
- [API Reference](./docs/API_REFERENCE.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)

## User Roles
- Candidate — Upload resume, apply to jobs
- Recruiter — Post jobs, manage applicants
- Admin — Platform management and analytics

## License
MIT
```

### Backend README.md

- Installation steps
- Environment variables table
- Available npm scripts (`dev`, `start`, `seed`)
- API base URL and health check endpoint
- Folder structure overview

### Frontend README.md

- Installation steps
- Environment variables
- Available npm scripts (`dev`, `build`, `preview`)
- Component structure overview
- Deployment to Vercel steps

---

## 38. Git Branch Strategy

### Branch Model (GitHub Flow + Environment Branches)

```
main          ← Production (auto-deploy)
  ↑
develop       ← Integration branch
  ↑
feature/*     ← New features
fix/*         ← Bug fixes
hotfix/*      ← Urgent production fixes (branch from main)
release/*     ← Release preparation (optional)
```

### Branch Naming

| Pattern | Example |
|---------|---------|
| `feature/<description>` | `feature/resume-ai-analysis` |
| `fix/<description>` | `fix/login-token-expiry` |
| `hotfix/<description>` | `hotfix/security-cors` |
| `chore/<description>` | `chore/update-dependencies` |
| `docs/<description>` | `docs/api-reference` |

### Workflow Rules

1. Never commit directly to `main`
2. Feature branches branch from `develop`
3. PR required for merge to `develop` and `main`
4. Squash merge preferred for feature branches
5. Delete feature branches after merge
6. Hotfixes branch from `main`, merge to both `main` and `develop`

### PR Checklist Template

- [ ] Code follows project coding standards
- [ ] Environment variables documented in `.env.example`
- [ ] No secrets committed
- [ ] Tested locally (frontend + backend)
- [ ] API changes documented

---

## 39. Development Roadmap

### Sprint 1 — Foundation (Week 1–2)

- [ ] Project scaffolding (frontend + backend)
- [ ] MongoDB Atlas setup + connection
- [ ] User model + auth (register, login, JWT)
- [ ] AuthContext + protected routes
- [ ] Basic layout (Navbar, Footer, DashboardLayout)
- [ ] Login/Register pages

### Sprint 2 — Core Job Portal (Week 3–4)

- [ ] Job CRUD (recruiter)
- [ ] Public job listing + detail pages
- [ ] Job filters and search
- [ ] Recruiter dashboard (basic)
- [ ] Manage jobs page

### Sprint 3 — Resume & AI (Week 5–6)

- [ ] Cloudinary integration
- [ ] Resume upload + text extraction
- [ ] Gemini AI resume analysis
- [ ] ATS score display
- [ ] Candidate dashboard + resume page

### Sprint 4 — Applications & Interviews (Week 7–8)

- [ ] Job application flow
- [ ] Application tracking (candidate)
- [ ] Applicant management (recruiter)
- [ ] Status pipeline updates
- [ ] Interview scheduling
- [ ] Notification system (in-app)

### Sprint 5 — Admin & Analytics (Week 9–10)

- [ ] Admin dashboard
- [ ] User management
- [ ] Job moderation
- [ ] Analytics charts (Recharts)
- [ ] Report export
- [ ] Audit logs

### Sprint 6 — Polish & Deploy (Week 11–12)

- [ ] Responsive design pass
- [ ] Error handling polish
- [ ] Rate limiting + security hardening
- [ ] Performance optimization (lazy loading)
- [ ] Deploy frontend (Vercel) + backend (Render)
- [ ] End-to-end testing
- [ ] Documentation finalization

---

## 40. Complete Build Order

> Follow this exact sequence to minimize rework and dependency conflicts.

### Phase 1 — Project Setup

1. Initialize monorepo folder structure
2. Scaffold backend: Express, Mongoose, dotenv, cors, helmet
3. Scaffold frontend: Vite + React 19 + Tailwind CSS
4. Configure Tailwind with custom color palette
5. Set up `.env.example` files for both projects
6. Connect MongoDB Atlas from backend
7. Create health check endpoint
8. Configure Axios instance with base URL

### Phase 2 — Authentication

9. Create User model
10. Implement `authService` (register, login, bcrypt, JWT)
11. Create auth validators (Joi)
12. Build auth controller + routes
13. Implement authMiddleware
14. Build AuthContext + authService (frontend)
15. Build LoginForm + RegisterForm pages
16. Implement ProtectedRoute component
17. Configure Axios interceptors (token attach + refresh)

### Phase 3 — User Profiles

18. User profile endpoints (get, update)
19. Cloudinary config + cloudinaryService
20. Avatar upload endpoint + middleware
21. ProfilePage + ProfileForm (candidate)
22. Role-based dashboard redirect logic

### Phase 4 — Jobs Module

23. Create Job model with indexes
24. Implement jobService (CRUD + filters + pagination)
25. Job validators
26. Job controller + routes with roleMiddleware
27. jobService (frontend)
28. JobCard, JobList, JobFilters components
29. JobsPage + JobDetailPage (public)
30. PostJobPage + JobForm (recruiter)
31. ManageJobsPage (recruiter)

### Phase 5 — Resume Module

32. Create Resume model
33. uploadMiddleware (multer memory storage)
34. parseResumeText utility (pdf-parse, mammoth)
35. resumeService backend (upload, list, delete, setPrimary)
36. Resume controller + routes
37. ResumeUploader + ResumeCard components
38. ResumePage (candidate)
39. Cloudinary upload integration (backend-side upload)

### Phase 6 — AI Integration

40. Gemini config + geminiService
41. Design and test analysis prompt template
42. analyzeResume endpoint
43. AIAnalysisPanel + ATSScoreCard components
44. Job-resume match score endpoint
45. MatchScoreBadge component
46. Rate limiting for AI endpoints

### Phase 7 — Applications Module

47. Create Application model with compound index
48. applicationService (apply, status updates, history)
49. Application validators
50. Application controller + routes
51. ApplyJobModal component
52. ApplicationCard + ApplicationTimeline components
53. ApplicationsPage (candidate)
54. ApplicantsPage + ApplicantTable (recruiter)
55. StatusPipeline component

### Phase 8 — Interviews Module

56. Create Interview model
57. interviewService
58. Interview controller + routes
59. InterviewScheduler + InterviewCard components
60. InterviewsPage (recruiter + candidate views)

### Phase 9 — Notifications

61. Create Notification model
62. notificationService (create, list, markRead)
63. Notification controller + routes
64. NotificationContext + polling
65. NotificationBell + NotificationDropdown components
66. Integrate notification triggers in application + interview services

### Phase 10 — Admin Module

67. Create AuditLog model
68. analyticsService (aggregations)
69. Admin controller + routes
70. Admin dashboard page + AnalyticsCard
71. UsersPage + UserTable + UserActions
72. JobsManagementPage
73. AnalyticsPage with Recharts wrappers
74. ReportsPage + ReportExport
75. AuditLogTable

### Phase 11 — Dashboards

76. CandidateDashboard (aggregate data)
77. RecruiterDashboard (aggregate data)
78. AdminDashboard (KPI cards + charts)
79. Sidebar navigation (role-aware menu items)

### Phase 12 — Security & Error Handling

80. ApiError + ApiResponse + asyncHandler utilities
81. Global errorMiddleware
82. rateLimitMiddleware on auth + AI routes
83. roleMiddleware on all protected routes
84. ownershipMiddleware for resource routes
85. Frontend error boundaries
86. React Hot Toast integration

### Phase 13 — UI Polish

87. Framer Motion page transitions
88. Skeleton loading states
89. EmptyState components
90. Responsive design pass (all pages)
91. Mobile menu + drawer sidebar
92. 404 page

### Phase 14 — Deployment

93. Configure `vercel.json` for SPA routing
94. Deploy backend to Render with env vars
95. Deploy frontend to Vercel with API URL
96. MongoDB Atlas production cluster + IP whitelist
97. Smoke test all critical flows in production
98. Write DEPLOYMENT.md documentation

---

## Appendix A — API Versioning

- Current version: `v1`
- All routes prefixed with `/api/v1`
- Breaking changes require new version (`v2`)
- Non-breaking additions allowed in current version

## Appendix B — Seed Data Plan

For development, create a seed script (`backend/src/seeds/seed.js`):

| Entity | Count | Notes |
|--------|-------|-------|
| Admin | 1 | `admin@hirehub.ai` |
| Recruiters | 3 | With company names |
| Candidates | 10 | With skills |
| Jobs | 15 | Mix of categories/statuses |
| Resumes | 8 | Some with AI analysis |
| Applications | 20 | Various statuses |
| Interviews | 5 | Upcoming and past |

## Appendix C — Key Dependencies

### Backend

| Package | Purpose |
|---------|---------|
| express | Web framework |
| mongoose | MongoDB ODM |
| jsonwebtoken | JWT auth |
| bcryptjs | Password hashing |
| joi | Validation |
| multer | File upload parsing |
| cloudinary | File storage |
| @google/generative-ai | Gemini API |
| pdf-parse | PDF text extraction |
| mammoth | DOCX text extraction |
| helmet | Security headers |
| cors | CORS middleware |
| express-rate-limit | Rate limiting |
| dotenv | Environment variables |
| morgan | HTTP logging (dev) |

### Frontend

| Package | Purpose |
|---------|---------|
| react + react-dom | UI library (v19) |
| react-router-dom | Routing |
| axios | HTTP client |
| react-hook-form | Form management |
| framer-motion | Animations |
| react-hot-toast | Toast notifications |
| lucide-react | Icons |
| recharts | Charts |
| tailwindcss | Styling |

---

*End of HireHub AI Architecture Blueprint v1.0*
