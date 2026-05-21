FROM node:24-slim AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

FROM node:24-slim

WORKDIR /app
COPY --from=build /app ./

EXPOSE 8080

CMD ["npm", "run", "dev", "--", "--host"]