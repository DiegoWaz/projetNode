const express = require("express");
const MovieRouter = require('./routes/movies');
const app = express();

const Movie = require('./models/movie');

const movie1 = new Movie();
movie1.title = "Test Movie 2";
movie1.year = 1930;
movie1.released = Date.now();

movie1.save(function(error, result){
    console.log("save");
    console.log(result);
});


app.use('/movies', MovieRouter);


app.listen(3000, () => console.log('listening'));