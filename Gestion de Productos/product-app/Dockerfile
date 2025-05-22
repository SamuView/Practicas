# Etapa de construcción
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist/product-app/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
