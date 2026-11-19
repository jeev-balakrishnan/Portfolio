# Jeevanantham B. — Portfolio platform

Stage 1 of 5 (foundation). React + TypeScript + Vite + Tailwind + Framer Motion + React Router + Supabase.

## Run locally
```bash
npm install
cp .env.example .env   # add Supabase URL and anon key (optional until Stage 2)
npm run dev
npm run build          # type-check + production build
```

## Roadmap
1. Foundation (this stage): theme, loader, cursor, grain, menu, transitions, hero, SEO files
2. Supabase schema, Row Level Security, storage, admin auth
3. Public pages driven by the database (work gallery, filters, search, about, skills, contact)
4. Admin dashboard (content, media uploads, categories, bookings, enquiries)
5. Chatbot, booking workflow, email, deployment guide

Secret keys (AI, email, service role) are server-only and never use the `VITE_` prefix.
