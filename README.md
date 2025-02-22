# NextJS SaaS Template

> A minimal premade SaaS template

## Features

- ShadCN/UI for a clean and customizable UI
- Stripe integration for subscription management
- Authentication with NextAuth
- Database with MongoDB

Minimal & Scalable structure

## Installation

Clone the repository and install dependencies:

### Clone the repo

git clone https://github.com/lewwiss/next-saas-template.git
cd saas-template

### Install dependencies

```
npm install  # or yarn install
```

### Configuration

Create a `.env.local` file in the root directory and add the following environment variables:

```
# Database
MONGODB_URI=
MONGODB_DB=

# Auth
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_ID=
GOOGLE_SECRET=
DISCORD_ID=
DISCORD_SECRET=
RESEND_API_KEY=

# Payments
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID=
NEXT_PUBLIC_STRIPE_ONE_TIME_PRICE_ID=
```

### Running the App

Start the development server:

```
npm run dev  # or yarn dev
```

### Deployment

Deploy the app using Vercel, Netlify, or any NextJS compatible hosting provider.

```
npm run build
npm start
```
