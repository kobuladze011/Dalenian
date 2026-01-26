# Dalenian

Premium handmade clay lighter cases built with Next.js (App Router) and MySQL.

## Features
- Peach-pink, minimal UI with mobile-first layout
- Server components by default, client-only for interactive widgets
- SEO-ready metadata, Open Graph, and JSON-LD structured data
- Admin dashboard with product + variant CRUD
- Docker setup for app + MySQL

## Local setup
1. Install dependencies:
   - `npm install`
2. Create a `.env.local` file:
   - `NEXT_PUBLIC_SITE_URL=http://localhost:3000`
   - `DATABASE_URL=mysql://root:password@localhost:3306/dalenian`
   - `ADMIN_TOKEN=change-me`
   - `STRIPE_SECRET_KEY=sk_test_your_key`
3. Create the database and tables:
   - Create a MySQL database named `dalenian`
   - Run `db/schema.sql` against it
4. Start dev server:
   - `npm run dev`

## Admin access
Go to `/admin/login` and enter the password (`pass1234`).
Admin pages are protected by a login cookie set on successful sign in.

## Docker
1. Build and run (production):
   - `docker compose up --build`
2. Dev mode with hot reload (no rebuilds on changes):
   - `docker compose -f docker-compose.yml -f docker-compose.dev.yml up --build`
2. Run migrations:
   - `docker exec -i dalenian-db mysql -uroot -ppassword dalenian < db/schema.sql`

App runs on `http://localhost:3000`.

## Payments
Stripe logic is currently removed. Checkout is disabled until a new flow is added.

