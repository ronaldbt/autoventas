# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is Autoventas360, a car sales platform with a monorepo structure containing:

- **backend/**: Node.js/Express API with Sequelize ORM and MySQL
- **frontend/**: Vue.js 3 + Vite application (legacy frontend)  
- **frontend-nuxt/**: Nuxt 3 application (primary frontend)

### Backend Architecture

The backend follows a standard MVC pattern:
- **Models**: Located in `backend/models/` - Sequelize models for database entities
- **Controllers**: Located in `backend/controllers/` - Business logic handlers
- **Routes**: Located in `backend/routes/` - API endpoint definitions
- **Middleware**: Authentication and authorization middleware in `backend/middleware/`
- **Migrations**: Database migrations in `backend/migrations/`
- **Configuration**: Database config in `backend/config/config.js`

Key entities: Usuario, Vehiculo, Marca, Modelo, Automotora, Peritaje, Region, Comuna

### Frontend Architecture (Nuxt 3)

The primary frontend is built with Nuxt 3:
- **Pages**: File-based routing in `frontend-nuxt/pages/`
- **Components**: Vue components in `frontend-nuxt/components/`
- **Stores**: Pinia stores in `frontend-nuxt/stores/`
- **Services**: API service layer in `frontend-nuxt/services/`
- **Styling**: Tailwind CSS with custom CSS in `frontend-nuxt/assets/css/`

### User Roles & Authentication

The application supports multiple user roles:
- admin
- cliente (customer)
- automotora (dealership)
- publicista (advertiser)
- perito (appraiser)

Role-based access control is implemented via JWT tokens and middleware.

## Development Commands

### Backend
```bash
cd backend
npm install
# Start development server
node index.js
# Run migrations
npx sequelize-cli db:migrate
```

### Frontend (Nuxt 3)
```bash
cd frontend-nuxt
npm install
# Development server
npm run dev
# Build for production
npm run build
```

### Frontend (Legacy Vue)
```bash
cd frontend
npm install
# Development server
npm run dev
# Build for production
npm run build
```

## Database

- Uses MySQL with Sequelize ORM
- Configuration in `backend/config/config.js`
- Migrations in `backend/migrations/`
- Models define relationships between entities

## API Structure

Base API URL: `/api/`

Key endpoints:
- `/api/auth/` - Authentication
- `/api/vehiculos/` - Vehicle management
- `/api/vehiculos-seo/` - SEO-friendly vehicle routes
- `/api/peritajes/` - Vehicle appraisal system
- `/api/dashboard/` - Protected dashboard routes
- Catalog endpoints: `/api/marcas/`, `/api/modelos/`, etc.

## Environment Variables

Both backend and frontend use `.env` files:
- Backend: Database credentials, JWT secrets
- Frontend: API base URL configuration via `NUXT_PUBLIC_API_BASE`

## Key Features

- Vehicle listing and search functionality
- User authentication and role-based access
- Dealership management system
- Vehicle appraisal (peritaje) system
- SEO-friendly URLs for vehicle listings
- File upload handling for vehicle images