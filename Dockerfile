FROM node:alpine

WORKDIR /edurekajs

COPY package*.json ./

RUN npm install
RUN npm install -g .

COPY . /edurekajs

EXPOSE 3000

CMD ["node","./bin/index.js","--help"]