# Deployment Testing

A simple Node.js (Express) application designed to test multi-instance deployment on Coolify.

## Features
- Express API server
- Optimized multi-stage `Dockerfile`
- `docker-compose.yml` pre-configured with `replicas: 3` for multi-instance deployment
- Endpoints designed to prove load balancing by returning the internal container hostname.

## API Endpoints

- `GET /` - Returns a welcome message and the container hostname.
- `GET /health-check` - Standard health check endpoint returning server status and uptime.
- `GET /api/data` - Mock JSON data endpoint.

## Deployment to Coolify

1. Push this repository to GitHub or GitLab.
2. In Coolify, create a new Project and Environment.
3. Add a new **Application** and connect it to this Git repository.
4. Set the build pack to **Docker Compose** (Coolify should auto-detect this).
5. Deploy! Coolify will automatically spin up 3 instances of the application and load balance traffic across them using Traefik.
