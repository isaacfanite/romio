Production checklist
- Fill environment variables in Vercel/Supabase as per .env.example
- Set up Supabase Auth email settings (SMTP)
- Enable PostGIS extension (already in migrations)
- Configure EasyPay credentials and webhooks.
- Deploy Next.js to Vercel and set EASYPAY_CALLBACK_URL to https://yourdomain.com/api/webhooks/easypay
- Generate CometChat server tokens using CometChat REST API (server-side) and provide to clients.
- Secure admin routes: ensure only users with role='admin' can access /admin (this scaffold requires extra server-side checks).
- Consider rate-limiting, logging, and monitoring.
