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

## React js application Docker file instruction

```
FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]
```


## docker-compose.yaml file

```
version: '3.8'

services:
  backend:
    build: ./dockerize_node_application
    container_name: node_c
    ports:
      - '5001:5001'
    volumes:
      - ./dockerize_node_application:/app
      - /app/node_modules
    networks:
      - code-abc-network
    depends_on:
      - frontend

  frontend:
    build: ./dockerize_react_application
    container_name: react_c
    ports:
      - '5173:5173'
    volumes:
      - ./dockerize_react_application:/app
      - /app/node_modules
    networks:
      - code-abc-network


networks:
  code-abc-network:
    driver: bridge
```

