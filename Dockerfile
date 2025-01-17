FROM node:18.13.0-alpine

WORKDIR /app

RUN apk update && apk add git

RUN git clone https://github.com/PartyTime11/AnimalShelter.git
WORKDIR /app/AnimalShelter

RUN git checkout release/v0.1.0

RUN npm install
RUN npm run build

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host",  "0.0.0.0"]
