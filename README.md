MOVIES REST API
-------------------------------------------------------------------------------

Sencilla API Rest desarrollada con Node y Express que se levanta
dentro de contenedor Docker.

-------------------------------------------------------------------------------

Se genera archivo Dockerfile que utiliza imagen Node Alpine:

```

    FROM node:alpine

    COPY ./src ./src
    COPY ./package.json .
    RUN npm install

    CMD ["npm", "start"] 
    EXPOSE 4444

```

-------------------------------------------------------------------------------

Se construye imagen a partir de archivo Dockerfile y se levanta 
contenedor a partir de la imagen generada:


```

    docker build -t node-docker-app .

    docker run -d --net=host node-docker-app

```

-------------------------------------------------------------------------------

**Aplicación corriendo en el puerto 4444:**

![Screenshot PostmanCall](screenshots/postman-movies-get-endpoint.png)

-------------------------------------------------------------------------------