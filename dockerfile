
FROM node:16.0.0-alpine3.11

WORKDIR /mnt/travel-fly

COPY package*.json ./

COPY . .

RUN apk add nano

EXPOSE 3000

ENTRYPOINT npm install && npm rebuild node-sass && npm start