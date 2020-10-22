FROM node:12.19.0 as builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

###

FROM node:12.19.0-alpine
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

COPY package*.json ./
RUN npm install --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD [ "node", "dist/main" ]