FROM node:16 as builder

WORKDIR /app

COPY . .

ARG github_token
ENV GITHUB_TOKEN=$github_token

# Required packages for headless-gl to work, which is used to render the icon assets
# RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.2.5/dumb-init_1.2.5_x86_64
# RUN chmod +x /usr/local/bin/dumb-init
RUN apt-get update && apt-get install -y --no-install-recommends -y \
  mesa-utils \
  xvfb \
  xauth \
  libgl1-mesa-dri \
  libglapi-mesa \
  libosmesa6

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN xvfb-run yarn icongen
RUN yarn build

FROM node:18

WORKDIR /app

COPY --from=builder /app/.output  .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "node", "server/index.mjs" ]