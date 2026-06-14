# Lev Hedva

Lev Hedva is an in-development organization management platform.

This monorepo consolidates the existing Lev Hedva repositories into one working project so future development can happen from a single place.

## Apps

| App | Path | Purpose | Stack |
| --- | --- | --- | --- |
| Website | `apps/website` | Public-facing Lev Hedva website | Vite, React, TypeScript |
| Client | `apps/client` | Legacy/admin client application | React Scripts, React, TypeScript |
| Server | `apps/server` | Backend API | NestJS, Prisma, PostgreSQL |

## Repository Sources

This repository was created from clean snapshots of:

- `Evyatar-Hazan/lev-chedva-website`
- `Evyatar-Hazan/Lev-Hedva-client`
- `Evyatar-Hazan/Lev-Hedva-server`

Full historical imports were intentionally avoided because one of the source repositories had environment files committed publicly. The new monorepo keeps environment files out of git and uses `.env.example` files only.

## Getting Started

```bash
npm install
```

Run the website:

```bash
npm run dev:website
```

Run the legacy client:

```bash
npm run dev:client
```

Run the backend:

```bash
cp apps/server/.env.example apps/server/.env
npm run dev:server
```

## Common Commands

```bash
npm run build
npm run lint
npm run test
```

The root scripts delegate into the relevant workspace under `apps/*`.

## Status

This project is still in active development and does not currently have real users. That makes this a good moment to consolidate repositories, clean secrets, fix CI, and set a stronger public GitHub story before production usage.

## Next Cleanup Steps

- Verify the backend test/build failures from the old `Lev-Hedva-server` repository.
- Decide whether `apps/client` is still needed after the newer website work.
- Configure a single deployment strategy for website/client/server.
- Archive the old split repositories only after this monorepo is validated and pushed.
