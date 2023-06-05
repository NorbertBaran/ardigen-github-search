FROM node:18.16.0-alpine as build
WORKDIR /app
COPY . /app
RUN yarn install
EXPOSE 3000
CMD [ "node", "index.js" ]