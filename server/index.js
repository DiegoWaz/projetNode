const express = require("express");

const MovieRouter = require('./routes/serie');
const ActorRouter = require('./routes/actor');

const app = express();

const Serie = require('./models/serie');
const Actor = require('./models/actor');

const actor1 = new Actor();
actor1.firstname = "John";
actor1.lastname = "Doe";
actor1.dateBirthday = Date.now();
actor1.nationality = "french";
actor1.cityBirth = "Paris";
actor1.picture = "picture.png";

// actor1.save(function(error, result){
//     console.log("save");
//     console.log(result);
// });


const serie1 = new Serie();
serie1.title = "Test serie 2";
serie1.year = 1930;
serie1.released = Date.now();

// serie1.save(function(error, result){
//     console.log("save");
//     console.log(result);
// });


app.use('/series', MovieRouter);
app.use('/actors', ActorRouter);


app.listen(3000, () => console.log('listening'));