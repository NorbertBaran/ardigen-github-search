FROM node:18.16.0-alpine as build
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 3000
CMD ["node", "index.js"]