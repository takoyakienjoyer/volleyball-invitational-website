FROM node:current-alpine3.18

RUN mkdir -p /usr/src/volleyball-invitational-website
WORKDIR /usr/src/volleyball-invitational-website

COPY . /usr/src/volleyball-invitational-website

RUN npm install -g pnpm

RUN pnpm install
RUN pnpm run build

FROM oven/bun:latest

WORKDIR /usr/src/volleyball-invitational-website

COPY --from=0 /usr/src/volleyball-invitational-website/.output /usr/src/volleyball-invitational-website/.output

EXPOSE 3000

CMD ["bun", "run", ".output/server/index.mjs"]
