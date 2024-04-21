FROM node:20 AS node-builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.25-alpine
COPY --from=node-builder /app/dist /usr/share/nginx/html