# Ultimate-Docker-and-Docker-Compose-Course

## Node js application Docker file instruction

```
FROM node

WORKDIR /app

RUN npm install -g nodemon

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm", "run", "dev"]
```
