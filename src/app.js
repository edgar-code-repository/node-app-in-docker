var express = require("express");
const body_parser = require('body-parser');
const uuid = require('uuid')

var app = express();

app.listen(4444, () => {
    console.log("Server running on port 4444");
});

app.use(body_parser.json());

let moviesArray = [
    { id:uuid.v4(), name:"Star Wars", year:1977 },
    { id:uuid.v4(), name:"Alien", year:1979 },
    { id:uuid.v4(), name:"Blade Runner", year:1982 }
]

app.get('/', (req, res) => res.send('Movies Rest API with NodeJS and Express'));

app.get('/api/movies', (req, res) => {
    console.log("[Movies API][Get all movies]");
    res.json(moviesArray)
});

app.get("/api/movies/:id", (req, res) => {
    console.log("[Movies API][Get movie by id][id: " , req.params.id , "]");

    const movieId = req.params.id;
    const movieItem = moviesArray.find(movie => movie.id == movieId);
 
    if (movieItem) {
       res.json(movieItem);
    } else {
       res.json({ message: `Movie with id ${movieId} doesn't exist`})
    }

});

app.post("/api/movies", (req, res) => {
    console.log("[Movies API][Create movie][movie: " , req.body , "]");

    const newMovie = req.body;
    newMovie.id = uuid.v4();
 
    moviesArray.push(newMovie)
    res.json(newMovie);

});

app.put("/api/movies/:id", (req, res) => {
    console.log("[Movies API][Update movie][id: " , req.params.id , "]");
    console.log("[Movies API][Update movie][movie: " , req.body , "]");

    const movieId = req.params.id;
    const movie = req.body;
    movie.id = movieId;
 
    moviesArray = moviesArray.map(oldItem => oldItem.id === movieId ? movie : oldItem);
    res.json(movie);
});

app.delete("/api/movies/:id", (req, res) => {
    console.log("[Movies API][Delete movie][id: " , req.params.id , "]");

    const movieId = req.params.id;
    const filteredMoviesList = moviesArray.filter(movie => movie.id !== movieId);
    moviesArray = filteredMoviesList;
 
    res.json({
        message: `Movie with id ${movieId} was deleted`
    });
});