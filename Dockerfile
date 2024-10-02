FROM node:18-alpine

WORKDIR /home/app

COPY . ./

RUN npm i

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]
