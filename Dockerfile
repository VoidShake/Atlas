FROM node:16 as builder

WORKDIR /app

COPY . .

ARG github_token
ENV GITHUB_TOKEN=$github_token

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules
#RUN rm -rf node_modules && \
#  NODE_ENV=production yarn install \
#  --prefer-offline \
#  --pure-lockfile \
#  --non-interactive \
#  --production=true

FROM node:16

WORKDIR /app

COPY --from=builder /app/.output  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "node", "server/index.mjs" ]