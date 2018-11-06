
FROM node:8

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9696

ENV PATH /app/node_modules/.bin:$PATH

ADD . /app

CMD [ "npm", "start" ]
