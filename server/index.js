const express = require("express");
const MovieRouter = require('./routes/serie');
const app = express();

const Serie = require('./models/serie');

const serie1 = new Serie();
serie1.title = "Test serie 2";
serie1.year = 1930;
serie1.released = Date.now();

serie1.save(function(error, result){
    console.log("save");
    console.log(result);
});


app.use('/series', MovieRouter);


app.listen(3000, () => console.log('listening'));