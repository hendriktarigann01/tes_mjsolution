# Full Stack Test - MJ Solution Indonesia

## Tech Stack
- Frontend: React.js + Vite + Tailwind CSS
- Backend: Node.js + Express.js
- Auth: JWT

## Quick Start
```bash
# Install dependencies
npm run install-all

# Development (run both)
npm run dev

# Run separately
# Backend
cd backend
npm run dev

# Frontend (new terminal)
cd frontend
npm run dev

# Production build
npm run build
```

## Login Credentials
- Username: `admin`
- Password: `admin`

## Project Structure
```
fullstack-test/
├── frontend/          # React frontend
├── backend/           # Express backend
└── package.json       # Root scripts
```

## API Endpoints
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout  
- `GET /api/dashboard` - Dashboard (protected)

## Port
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

## Dependencies
### Root
- `concurrently` - Run multiple commands
- `lucide-react` - Icon library

### Frontend
- `react` - UI library
- `react-router-dom` - Routing
- `axios` - HTTP client
- `tailwindcss` - CSS framework
- `chart.js` - Data visualization
- `vite` - Build tool

### Backend
- `express` - Web framework
- `jsonwebtoken` - JWT authentication
- `cors` - Cross-origin requests
- `dotenv` - Environment variables
- `nodemon` - Auto-restart (dev)