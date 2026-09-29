# Shipyard demo

Minimal TypeScript Express app with Docker Compose, set up to exercise [Shipyard](https://shipyard.build) preview environments.

## What's included

- TypeScript Express server on port 3000
- Static page that hits `/api/health` and `/api/info`
- `docker-compose.yml` with Shipyard labels (`shipyard.route`, readiness/liveness probes)

## Run locally

```bash
docker compose up --build
```

Open http://localhost:3000

Without Docker:

```bash
npm install
npm run dev
```

## Deploy on Shipyard

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In the [Shipyard dashboard](https://shipyard.build), click **+ Application**.
3. Select this repository and branch.
4. Confirm Compose picks up the `web` service.
5. Create the application and wait for the build.
6. Click **Visit** when the environment is ready.

To verify GitOps rebuilds, change `WELCOME_MESSAGE` in `docker-compose.yml` (or the default in `src/index.ts`), push, and refresh the preview URL.

Optional env vars (set in Compose or Shipyard secrets):

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `3000` | HTTP port |
| `APP_ENV` | `local` | Shown on the page |
| `WELCOME_MESSAGE` | `Hello from Shipyard` | Page headline |

## Shipyard labels used

```yaml
shipyard.route: "/"
shipyard.primary-route: "true"
shipyard.readiness.http.path: "/api/health"
shipyard.liveness.http.path: "/api/health"
```

Docs: [Docker Compose on Shipyard](https://docs.shipyard.build/docker-compose)
# shipyard-demo
