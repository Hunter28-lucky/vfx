# Personal Portfolio Website - Replit MD

## Overview

This is a cinematic personal portfolio website inspired by GTA VI's design aesthetic. The application features immersive scrolling experiences, custom imagery, and gaming-inspired visual elements to create an engaging digital showcase. Built as a full-stack application with a React frontend and Express backend, it's designed to present personal and professional information in a visually compelling way.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom GTA VI-inspired color scheme and animations
- **UI Components**: Radix UI components via shadcn/ui for consistent design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth, cinematic transitions and scroll-based effects
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Ready for implementation with connect-pg-simple
- **Development**: Hot reloading with Vite integration in development mode

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling to sections
- **Hero Section**: Full-screen parallax hero with animated text and backgrounds
- **About Section**: Interactive profile section with gaming-inspired cards
- **Journey Section**: Timeline-based storytelling with image galleries
- **Gallery Section**: Image showcase with hover effects
- **Stats Section**: Animated counters and achievement displays
- **Contact Section**: Contact form and social media integration
- **Footer**: Branded footer with gaming references

### Backend Components
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route System**: Modular route registration system
- **User Management**: Basic user schema with authentication preparation
- **Database Schema**: Drizzle-based schema definitions in shared directory

## Data Flow

1. **Client Requests**: React application makes API calls through TanStack Query
2. **API Layer**: Express server handles requests with prefixed `/api` routes
3. **Storage Layer**: Requests are processed through the storage interface
4. **Database**: PostgreSQL database accessed via Drizzle ORM
5. **Response**: Data flows back through the same layers with proper error handling

## External Dependencies

### UI and Styling
- **Radix UI**: Comprehensive component library for accessible UI elements
- **Framer Motion**: Animation library for smooth transitions and scroll effects
- **Tailwind CSS**: Utility-first CSS framework with custom GTA VI theme
- **Lucide Icons**: Consistent icon system throughout the application

### Backend Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle ORM**: Type-safe database operations
- **Express.js**: Web application framework

### Development Tools
- **Vite**: Build tool with hot module replacement
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with Express backend
- **Hot Reloading**: Automatic refresh for both frontend and backend changes
- **Environment Variables**: DATABASE_URL required for database connection

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Deployment**: Single command deployment with `npm run build && npm start`

### Database Management
- **Migrations**: Drizzle-kit handles schema migrations
- **Schema**: Centralized schema definitions in `shared/schema.ts`
- **Environment**: Requires PostgreSQL database URL for production

## Changelog

```
Changelog:
- July 07, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```