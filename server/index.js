const Serie = require('./models/series');

const serie1 = new Serie();
serie1.title = "Test serie 2";
serie1.year = 1930;
serie1.released = Date.now();

serie1.save(function(error, result){
    console.log("save");
    console.log(error);
    console.log(result);
});

const fetchseries = Serie.find({title: "Test serie"}, function(error, result) {
    console.log("find");
    console.log(result);
    console.log(error);
});