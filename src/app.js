var express = require("express");
const body_parser = require('body-parser');

var app = express();

app.listen(4444, () => {
    console.log("Server running on port 4444");
});

app.use(body_parser.json());

var moviesArray = [
    { id:1001, name:"Star Wars", year:1977 },
    { id:1002, name:"Alien", year:1979 },
    { id:1003, name:"Blade Runner", year:1982 }
]

app.get('/', (req, res) => res.send('Movies Rest API with NodeJS and Express'))

app.get('/api/movies', (req, res) => {
    console.log("Get all movies");
    res.json(moviesArray)
});

