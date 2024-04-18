# build stage
FROM node:20 AS node-builder
WORKDIR /build
COPY package-lock.json package.json ./
RUN npm ci
COPY . .

# runtime stage
FROM alpine:3.19
RUN apk add --update nodejs
RUN addgroup -S node && adduser -S node -G node
USER node
RUN mkdir /home/node/code
WORKDIR /home/node/code
COPY --from=node-builder --chown=node:node /build .
CMD ["node", "index.js"]