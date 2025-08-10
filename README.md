# Next.js Dating Site (Supabase + CometChat + EasyPay)

This repository is a **production-ready scaffold** for a dating site:
- Next.js (Pages router)
- UI: shadcn/ui (components scaffolded)
- Auth & DB: Supabase (Postgres)
- Realtime chat: CometChat integration
- Payments: EasyPay (Uganda Mobile Money) integration (server endpoints + webhook)
- Admin panel at `/admin` (role-based via Supabase)
- Paywall: pay-to-view contacts & pay-to-chat

**IMPORTANT:** This scaffold contains placeholders for API keys and secrets. Fill `.env.local` from `.env.example` before deploying.

## What's included
- `pages/` — Next.js pages (index, auth, profile, chat, admin)
- `lib/` — supabase, cometchat, easypay helpers
- `migrations/` — SQL migrations to create tables and geolocation index
- `README` — this file
- `env.example` — required environment variables

## How to run (local)
1. Install:
```bash
npm install
```
2. Copy `.env.example` to `.env.local` and fill values.
3. Start dev server:
```bash
npm run dev
```

## Deployment
Recommended: Vercel for Next.js + Supabase for Postgres/Storage. Set environment variables in Vercel. Configure EasyPay webhooks to point to `/api/webhooks/easypay`.

## Files of interest
- `pages/api/auth/*` - Supabase session helpers (server)
- `pages/api/easypay/*` - EasyPay initiation & webhook
- `lib/supabase.js` - Supabase client
- `lib/cometchat.js` - CometChat init helper
- `migrations/001_init.sql` - DB schema

