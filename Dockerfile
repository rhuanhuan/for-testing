FROM node:8.12.0-alpine

WORKDIR /app

COPY ./package.json ./package-lock.json /app/

RUN cd /app && npm install

COPY . /app

EXPOSE 3000

CMD ["node", "app.js"]
