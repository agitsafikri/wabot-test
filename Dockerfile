# Step 1
FROM node:10-alpine as build-step

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm i react-scripts --silent
COPY . ./
RUN npm run build

# Stage 2 nginx
FROM nginx:1.17.1-alpine
#COPY --from=build-step /app/build /usr/share/nginx/html
#COPY --from=build-step /app/example-httaccess.conf /usr/share/nginx/html/.htaccess

#stage 2 apache
FROM php:7-apache
COPY --from=build-step /app/build /var/www/html
COPY --from=build-step /app/example-httaccess.conf /var/www/html/.htaccess



EXPOSE 80
#CMD ["nginx","-g","daemon off;"]
CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]

