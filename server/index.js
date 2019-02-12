const Movie = require('./models/movies');

const movie1 = new Movie();
movie1.title = "Test Movie 2";
movie1.year = 1930;
movie1.released = Date.now();

movie1.save(function(error, result){
    console.log("save");
    console.log(error);
    console.log(result);
});

const fetchMovies = Movie.find({title: "Test Movie"}, function(error, result) {
    console.log("find");
    console.log(result);
    console.log(error);
});