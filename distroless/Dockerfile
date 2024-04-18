# build stage
FROM node:20 AS node-builder
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .

# runtime stage
FROM gcr.io/distroless/nodejs20
COPY --from=node-builder --chown=node:node /build /app
WORKDIR /app
CMD ["index.js"]