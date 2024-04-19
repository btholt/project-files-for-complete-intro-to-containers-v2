FROM node:20 AS node-builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

# you could totally use nginx:alpine here too
FROM nginx:latest
COPY --from=node-builder /app/dist /usr/share/nginx/html