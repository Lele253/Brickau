FROM node:16.13.1 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@9.6.2
COPY ./ .
RUN npm run build
FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf