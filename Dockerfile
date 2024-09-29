# Gunakan official Bun image
# Lihat semua versi di https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Instal dependencies ke directory temp untuk caching
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Install dependencies untuk production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json bun.lockb /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# Copy node_modules dari temp directory dan project files
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] Build nuxt untuk production
ENV NODE_ENV=production
RUN bun run build

# Copy production dependencies dan source code ke final image
FROM base AS release
COPY --from=install /temp/prod/node_modules node_modules
COPY --from=prerelease /usr/src/app/ .

# Jalankan aplikasi Nuxt.js
USER bun
EXPOSE 2000/tcp
ENV HOST=0.0.0.0
ENV PORT=2000
ENTRYPOINT [ "bun", "run", "start" ]
