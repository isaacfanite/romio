# Next.js Dating (Starter)

This is a starter **Next.js** (app router, TypeScript) dating site scaffold with:
- Beautiful Tailwind UI styled components (shadcn-friendly design)
- Public pages, user profile, matches, chat placeholder
- Admin dashboard (shadcn-style layout)
- Subscription & paywall placeholders (Stripe integration points)
- Mock API routes

## What you get
A complete project scaffold you can run locally and extend.

## Setup (locally)
1. Install dependencies:
```bash
npm install
```

2. Initialize Tailwind:
```bash
npx tailwindcss init -p
```

3. (Optional) Install ShadCN UI and run their setup for components:
```bash
# install shadcn UI (optional but recommended)
npm i @shadcn/ui
npx shadcn-ui@latest init
```

4. Run dev:
```bash
npm run dev
```

## Notes
- This scaffold includes placeholders for Stripe keys and age verification.
- Replace environment variables in `.env.local` (create at project root).
- The admin dashboard is accessible at `/admin` (mock data).
- Chat is stubbed out (use real-time service like Supabase Realtime, Pusher, or Socket.io).

Enjoy!  
