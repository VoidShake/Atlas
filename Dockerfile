FROM node:18-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
ENV CI=true

FROM base AS builder

WORKDIR /app

COPY . .

ARG github_token
ENV GITHUB_TOKEN=$github_token

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

RUN pnpm run build

FROM base AS runner

WORKDIR /app

COPY --from=builder /app/.output  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "node", "server/index.mjs" ]