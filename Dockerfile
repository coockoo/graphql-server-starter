FROM node:12.16.1-alpine as modules

WORKDIR /build

COPY package*.json ./

RUN npm ci --production

FROM node:12.16.1-alpine

WORKDIR /app

COPY --from=modules /build/node_modules ./node_modules

COPY package*.json ./

COPY src ./src

EXPOSE 3000

CMD ["node", "/app/src"]
