FROM oven/bun:1
WORKDIR /home/bun/app
COPY ./package.json .
RUN bun install
COPY ./src ./src
#COPY ./videos ./videos

# ARG PORT
# EXPOSE ${PORT:-3000}

CMD ["bun", "./src/index.ts"]
# Dockerfile

# # use the official Bun image
# # see all versions at https://hub.docker.com/r/oven/bun/tags
# FROM oven/bun:1 as base
# WORKDIR /usr/src/app

# # install dependencies into temp folder
# # this will cache them and speed up future builds
# FROM base AS install
# RUN mkdir -p /temp/dev
# COPY package.json bun.lockb /temp/dev/
# RUN cd /temp/dev && bun install --frozen-lockfile

# # install with --production (exclude devDependencies)
# RUN mkdir -p /temp/prod
# COPY package.json bun.lockb /temp/prod/
# RUN cd /temp/prod && bun install --frozen-lockfile --production

# # copy node_modules from temp folder
# # then copy all (non-ignored) project files into the image
# FROM install AS prerelease
# COPY --from=install /temp/dev/node_modules node_modules
# COPY . .

# # [optional] tests & build
# # ENV NODE_ENV=production
# # RUN bun test
# # RUN bun run build

# # copy production dependencies and source code into final image
# FROM base AS release
# COPY --from=install /temp/prod/node_modules node_modules
# COPY --from=prerelease /usr/src/app/src/index.ts .
# COPY --from=prerelease /usr/src/app/videos/SampleVideo_1280x720_1mb.mp4 .
# COPY --from=prerelease /usr/src/app/package.json .

# # run the app
# USER bun
# EXPOSE 3000/tcp
# CMD ["bun", "run", "start"]
# FROM oven/bun:1.0.15-debian
# WORKDIR /app

# # first i run : bun run build before creating docker image
# COPY /build /app/build
# COPY /videos /app/videos

# # copy prisma configuration // This is your Prisma schema file,
# #COPY /prisma /app/prisma

# COPY bun.lockb package.json /app/
# RUN bun i --production

# # some time error: lockfile had changes, but lockfile is frozen
# # sove this error:
# # run: bun install && bun install --frozen-lockfile
# # this will regenerate your bun.lockb 


# # RUN bunx prisma generate was error:undefined
# # I copy my node_modules/.prisma into dockerfile 
# # so doesn't need to do bunx prisma generate

# #COPY ["/node_modules/.prisma", "/app/node_modules/.prisma"]

# EXPOSE 3000/tcp
# ENTRYPOINT [ "bun", "run", "build/index.js" ]