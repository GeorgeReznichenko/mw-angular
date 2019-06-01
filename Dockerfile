FROM node:latest

ARG app
ARG env

ENV APP=''

WORKDIR /dock

COPY . ./
RUN npm install && ./tools/build-app.sh "$app" "$env"

EXPOSE 5200
CMD export PORT=5200 && node dist/$APP/server.js
