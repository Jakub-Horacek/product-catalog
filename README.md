# Product Catalog

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React Router](https://img.shields.io/badge/React%20Router-6-61DAFB?style=for-the-badge&logo=react-router)](https://reactrouter.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5.0-FF4154?style=for-the-badge&logo=tanstack)](https://tanstack.com/query)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MockAPI.io](https://img.shields.io/badge/MockAPI.io-API-FF6B6B?style=for-the-badge)](https://mockapi.io)

A simple product catalog application built with React, TypeScript, and React Router.

## Features

- 🚀 Product listing page with grid layout
- 📱 Responsive design for desktop and mobile
- 🔄 Data fetching with TanStack Query
- 🎯 Product detail view
- ⚡️ Fast page transitions
- 🎨 Clean and modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/product-catalog.git
cd product-catalog
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Create a production build:

```bash
npm run build
```

## Project Structure

```
├── app/
│   ├── components/     # Reusable components
│   ├── routes/         # Page components
│   ├── services/       # API services
│   ├── types/          # TypeScript types
│   └── root.tsx        # Root component
├── public/             # Static assets
└── package.json        # Project dependencies
```

## Technologies Used

- React 19
- TypeScript
- React Router
- TanStack Query
- Tailwind CSS
- MockAPI.io (for mock REST API endpoints)

## API Integration

This project uses [MockAPI.io](https://mockapi.io) to provide mock REST API endpoints for the product catalog. The mock API provides the following endpoints:

- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch a single product by ID

To use your own mock API:

1. Create an account at [MockAPI.io](https://mockapi.io)
2. Create a new resource with the schema matching the product data structure
3. Update the API base URL in the application configuration
