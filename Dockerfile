FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY index.js ./

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app /app

ENV PORT=3000
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health-check || exit 1

CMD ["npm", "start"]
