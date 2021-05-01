# Step 1
FROM node:10-alpine as build-step

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm i react-scripts --silent
COPY .htaccess.example .htaccess
COPY . ./
RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d


EXPOSE 80
CMD ["nginx","-g","daemon off;"]

