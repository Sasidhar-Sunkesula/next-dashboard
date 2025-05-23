# Pizza Dashboard

A Next.js dashboard for pizza orders with Google authentication. This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Overview

This project is a modern, server-rendered web application built with Next.js that includes:

- Google OAuth authentication using NextAuth.js
- Protected dashboard routes
- A welcome page displaying user information
- A pizza orders page with a responsive table
- Sorting and filtering functionality for orders
- Responsive design for all device sizes

## Technologies Used

- **Framework**: Next.js 15.1.8
- **Styling**: Tailwind CSS
- **Authentication**: NextAuth.js with Google OAuth
- **State Management**: React Hooks
- **UI Components**: Custom components with Tailwind CSS
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Google OAuth credentials (Client ID and Client Secret)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd next-dashboard
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### Setting up Google OAuth Credentials

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Navigate to "APIs & Services" > "Credentials"
4. Click "Create Credentials" > "OAuth client ID"
5. Select "Web application" as the application type
6. Add "http://localhost:3000" to the "Authorized JavaScript origins"
7. Add "http://localhost:3000/api/auth/callback/google" to the "Authorized redirect URIs"
8. Click "Create" and note your Client ID and Client Secret

### Running the Application

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a custom font for the UI.

## Features

### Authentication

- Google OAuth sign-in
- Protected routes for authenticated users
- Session management
- Sign-out functionality

### Dashboard

- Welcome page with user information and quick stats
- Pizza orders page with a responsive table
- Sorting functionality for all table columns
- Filtering by order status
- Search functionality for orders

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - Reusable UI components
- `/data` - Mock data for pizza orders
- `/lib` - Utility functions and authentication helpers
- `/public` - Static assets
- `/types` - TypeScript type definitions

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Assumptions and Challenges

- The application uses mock data for pizza orders as specified in the requirements
- The UI is designed to be responsive and work on all device sizes
- The authentication flow is implemented using NextAuth.js with Google OAuth
- The dashboard is protected and only accessible to authenticated users

## Third-Party Libraries

- `next-auth` - Authentication library for Next.js
- `lucide-react` - Icon library
- `date-fns` - Date utility library
- `zustand` - State management library (optional for future enhancements)
