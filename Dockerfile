FROM oven/bun:latest
WORKDIR /usr/src/volleyball-invitational-website

COPY . .

ENV NODE_ENV=production

RUN bun install
RUN bun run build

EXPOSE 3000/tcp
CMD ["bun", "run", ".output/server/index.mjs"]
