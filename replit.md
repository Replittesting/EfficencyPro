# EfficiencyPro - Business Automation & Digital Presence

## Overview

EfficiencyPro is a web application built to help professionals automate processes and build their digital presence. The application features a static landing page with contact functionality. It uses a modern React frontend with a Node.js/Express backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

EfficiencyPro follows a full-stack JavaScript architecture with clear separation between client and server:

1. **Frontend**: React-based SPA using Wouter for routing, styled with Tailwind CSS and shadcn/ui components
2. **Backend**: Express.js server that serves the React application and provides API endpoints
3. **Database**: Postgres (with Drizzle ORM) for data persistence
4. **Build System**: Vite for development and production builds

The application follows a straightforward client-server architecture where:
- The frontend makes API calls to the backend to submit contact form data
- The backend processes requests and interacts with the database
- All frontend code is bundled and served as static files in production

## Key Components

### Frontend

1. **Component Structure**:
   - UI Components: A comprehensive set of reusable components built with shadcn/ui and Radix UI primitives
   - Section Components: Modular sections for the landing page (Hero, Services, Benefits, Testimonials, etc.)
   - Page Components: Main page containers (currently Home and NotFound)

2. **State Management**:
   - React Query for data fetching and caching
   - React's built-in useState/useEffect hooks for local component state

3. **Styling**:
   - Tailwind CSS for utility-first styling
   - CSS variables for theme colors and spacing
   - Dark mode support

### Backend

1. **Express Server**:
   - API routes for handling form submissions
   - Static file serving for the frontend application
   - Request logging middleware

2. **Data Storage**:
   - Drizzle ORM with schema definitions for users and contact messages
   - Currently using a memory-based storage implementation
   - Configured for PostgreSQL database connection

3. **Validation**:
   - Zod for request validation
   - Schema definitions shared between frontend and backend

## Data Flow

1. **Contact Form Submission**:
   - User fills out the contact form in the frontend
   - Form data is validated with React Hook Form and Zod
   - Data is sent to the `/api/contact` endpoint via POST request
   - Server validates the data again using Zod
   - Contact message is stored in the database
   - Success/failure response is returned to the client
   - User receives toast notification based on the response

2. **Page Navigation**:
   - Wouter handles client-side routing
   - The application is currently a single page with section navigation
   - Smooth scrolling is implemented for section links

## External Dependencies

### Core Technologies
- React 18+
- Express.js
- Drizzle ORM
- PostgreSQL (configured but may not be connected yet)
- Vite

### UI Libraries
- shadcn/ui (composed of Radix UI primitives)
- Tailwind CSS
- Framer Motion for animations
- Lucide React for icons

### Form & Validation
- React Hook Form
- Zod schema validation

### Data Fetching
- TanStack Query (React Query)
- Native fetch API

## Deployment Strategy

The application is configured for deployment on Replit with:

1. **Development Mode**:
   - `npm run dev` runs the server in development mode with Vite's HMR
   - Server runs on port 5000

2. **Production Build**:
   - `npm run build` bundles the frontend and builds the server
   - Frontend is built into `dist/public`
   - Server is built into `dist/index.js`
   - `npm run start` runs the production build

3. **Database**:
   - The application is configured to use PostgreSQL
   - Database migrations can be pushed with `npm run db:push`
   - Database URL is expected in the `DATABASE_URL` environment variable

4. **Replit-Specific Configuration**:
   - `.replit` file configures the run command and deployment settings
   - Workflow configured for running the application
   - Uses the Postgres 16 module in Replit