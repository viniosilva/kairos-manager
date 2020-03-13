FROM node:12.16-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./

FROM builder AS development
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]

FROM builder AS production
RUN npm ci --only production
COPY src/ ./src/
CMD [ "npm", "start" ]
