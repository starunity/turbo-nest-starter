FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS builder
RUN apk add --no-cache jq libc6-compat
RUN pnpm install -g turbo

COPY . /app
RUN pnpm exec turbo prune api --docker

FROM base AS installer
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

RUN pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .
RUN pnpm --filter api run build

FROM base as runner
COPY --from=builder /app/out/json .
COPY --from=installer /app/apps/api/dist ./apps/api/dist
COPY --from=installer /app/node_modules node_modules
COPY --from=installer /app/apps/api/node_modules ./apps/api/node_modules

EXPOSE 4000

CMD node apps/api/dist/main.js
