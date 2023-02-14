# Name the node stage "builder"
FROM node:19-alpine AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm install && npm run build
# nginx state for serving content

FROM nginx:alpine
# Remove default nginx conf to run on port 8080
RUN rm /etc/nginx/conf.d/default.conf 
# Copy new nginx conf to same location
COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
# Expose endpoint for fly.io
EXPOSE 8080
