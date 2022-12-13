FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8000

EXPOSE 8000

CMD sudo chown -R 1000:1000 "/root/.npm

CMD npx nodemon

