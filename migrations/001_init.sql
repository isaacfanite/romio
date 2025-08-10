-- Supabase / Postgres schema for dating site
create extension if not exists pg_trgm;
create extension if not exists postgis;

-- users are managed by supabase auth; we create profiles table
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  bio text,
  gender text,
  birthdate date,
  location geography(Point, 4326),
  avatar_url text,
  can_view_contact boolean default false,
  can_chat boolean default false,
  role text default 'user',
  suspended boolean default false,
  created_at timestamptz default now()
);

create index if not exists profiles_location_idx on profiles using gist (location);
create index if not exists profiles_name_trgm on profiles using gin (display_name gin_trgm_ops);

create table if not exists payments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  amount numeric,
  currency text,
  provider text,
  provider_reference text,
  metadata jsonb,
  status text,
  created_at timestamptz default now()
);

create table if not exists settings (
  id serial primary key,
  key text unique,
  value jsonb,
  updated_at timestamptz default now()
);
