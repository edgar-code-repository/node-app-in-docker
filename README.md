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

**Ejecucion de endpoint que recupera movies en Postman:**

![Screenshot GetMovies](screenshots/node-get-movies.png)

-------------------------------------------------------------------------------

**Ejecucion de endpoint que recupera movie by id en Postman:**

![Screenshot GetMovieById](screenshots/node-get-movie-by-id.png)

-------------------------------------------------------------------------------

**Ejecucion de endpoint que agrega movie en Postman:**

![Screenshot PostMovie](screenshots/node-add-movie.png)

-------------------------------------------------------------------------------

**Ejecucion de endpoint que actualiza movie en Postman:**

![Screenshot PutMovie](screenshots/node-update-movie.png)

-------------------------------------------------------------------------------

**Ejecucion de endpoint que elimina movie en Postman:**

![Screenshot DeleteMovie](screenshots/node-delete-movie.png)

-------------------------------------------------------------------------------