# Use a Node 16 base image
FROM node:20-alpine3.17

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

## EXPOSE [Port you mentioned in the vite.config file]

EXPOSE 5173

CMD ["npm", "run", "dev"]
