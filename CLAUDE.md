# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is Autoventas360, a car sales platform with a monorepo structure containing:

- **backend/**: Node.js/Express API with Sequelize ORM and PostgreSQL
- **frontend/**: Vue.js 3 + Vite application (legacy frontend, mostly removed)  
- **frontend-nuxt/**: Nuxt 3 application (primary frontend)

### Backend Architecture

The backend follows a standard MVC pattern:
- **Models**: Located in `backend/models/` - Sequelize models for database entities
- **Controllers**: Located in `backend/controllers/` - Business logic handlers
- **Routes**: Located in `backend/routes/` - API endpoint definitions
- **Middleware**: Authentication (`verificarToken.js`) and authorization (`verificarRol.js`) middleware in `backend/middleware/`
- **Migrations**: Database migrations in `backend/migrations/`
- **Seeders**: Database seeders in `backend/seeders/`
- **Configuration**: Database config in `backend/config/config.js`

Key entities: Usuario, Vehiculo, Marca, Modelo, Automotora, Peritaje, Region, Comuna

### Frontend Architecture (Nuxt 3)

The primary frontend is built with Nuxt 3:
- **Pages**: File-based routing in `frontend-nuxt/pages/`
- **Components**: Vue components in `frontend-nuxt/components/`
- **Stores**: Pinia stores in `frontend-nuxt/stores/`
- **Services**: API service layer in `frontend-nuxt/services/`
- **Composables**: Reusable composition functions in `frontend-nuxt/composables/`
- **Middleware**: Route middleware in `frontend-nuxt/middleware/`
- **Plugins**: Nuxt plugins in `frontend-nuxt/plugins/`
- **Utils**: Utility functions in `frontend-nuxt/utils/`
- **Styling**: Tailwind CSS v4 with custom CSS in `frontend-nuxt/assets/css/`

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
npm run dev  # Uses nodemon for auto-reload
# Start production server
npm start   # or node index.js
# Run migrations
npx sequelize-cli db:migrate
# Run seeders
npx sequelize-cli db:seed:all
# Create new migration
npx sequelize-cli migration:generate --name migration-name
# Create new seeder
npx sequelize-cli seed:generate --name seeder-name
```

### Frontend (Nuxt 3)
```bash
cd frontend-nuxt
npm install
# Development server
npm run dev
# Build for production
npm run build
# Preview production build
npm run preview
# Generate static site
npm run generate
# Run tests
npm run test  # Note: Test framework is Vitest
```

### Testing

Tests are located in `frontend-nuxt/tests/` and use Vitest framework:
- Store tests: `catalogoStore.test.js`
- Composable tests: `useCatalogo.test.js`  
- Service tests: `logoService.test.js`

Run individual test files by specifying the path after the test command.

## Database

- Uses **PostgreSQL** with Sequelize ORM (not MySQL as initially specified)
- Configuration in `backend/config/config.js`
- Supports development, test, and production environments
- Migrations in `backend/migrations/`
- Seeders in `backend/seeders/`
- Models define relationships between entities

## API Structure

Base API URL: `/api/`

Key endpoints:
- `/api/auth/` - Authentication
- `/api/vehiculos/` - Vehicle management
- `/api/vehiculos-seo/` - SEO-friendly vehicle routes
- `/api/peritajes/` - Vehicle appraisal system
- `/api/dashboard/` - Protected dashboard routes
- `/api/automotoras/` - Dealership management
- Catalog endpoints: `/api/marcas/`, `/api/modelos/`, etc.

## Environment Variables

Both backend and frontend use `.env` files:
- Backend: `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_HOST`, `DB_PORT`, JWT secrets
- Frontend: API base URL configuration via `NUXT_PUBLIC_API_BASE` (defaults to http://localhost:3001/api)

## Key Features

- Vehicle listing and search functionality with SEO-friendly URLs
- User authentication and role-based access control
- Dealership management system
- Vehicle appraisal (peritaje) system
- File upload handling for vehicle images with multer
- Catalog management (brands, models, regions, communes)
- Responsive design with Tailwind CSS v4