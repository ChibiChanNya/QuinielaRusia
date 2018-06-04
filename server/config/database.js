/**
 * Created by Chibi on 20/10/17.
 */
//Import the mongoose module
let mongoose = require('mongoose');


//Set up default mongoose connection
// let mongoDB = 'mongodb://admin:abcd1234@ds245337.mlab.com:45337/quiniela'; // Cloud
let mongoDB = process.env.MONGO_CONNECT;

mongoose.Promise = global.Promise;


mongoose.connect(mongoDB, {
});

//Get the default connection
let database = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
database.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = database;