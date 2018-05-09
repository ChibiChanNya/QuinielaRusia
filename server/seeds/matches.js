// require('dotenv').config();
let Database = require('../config/database');
let Match = require('../models/match');
let mongoose = require('mongoose');
let async = require('async');

mongoose.Promise = global.Promise;

let teams =[
    "",
    ObjectId("5af30e67837f68372697e635"),
    ObjectId("5af30e68837f68372697e636"),
    ObjectId("5af30e68837f68372697e637"),
    ObjectId("5af30e69837f68372697e638"),
    ObjectId("5af30e69837f68372697e639"),
    ObjectId("5af30e69837f68372697e63a"),
    ObjectId("5af30e69837f68372697e63b"),
    ObjectId("5af30e69837f68372697e63c"),
    ObjectId("5af30e69837f68372697e63d"),
    ObjectId("5af30e69837f68372697e63e"),
    ObjectId("5af30e69837f68372697e63f"),
    ObjectId("5af30e6a837f68372697e640"),
    ObjectId("5af30e6a837f68372697e641"),
    ObjectId("5af30e6a837f68372697e642"),
    ObjectId("5af30e6a837f68372697e643"),
    ObjectId("5af30e6a837f68372697e644"),
    ObjectId("5af30e6a837f68372697e645"),
    ObjectId("5af30e6a837f68372697e646"),
    ObjectId("5af30e6a837f68372697e647"),
    ObjectId("5af30e6a837f68372697e648"),
];



function finish(){
    process.exit();
}

//Declare all products
let match_list = [
    //Manuales
    {
        localTeam: teams[1],
        visitorTeam: teams[2],
        date: '14/06/2018',
        localScore: null,
        visitorScore: null,
    },
    {
        localTeam: teams[3],
        visitorTeam: teams[4],
        date: '15/06/2018',
        localScore: null,
        visitorScore: null,
    },
    {
        localTeam: teams[5],
        visitorTeam: teams[6],
        date: '15/06/2018',
        localScore: null,
        visitorScore: null,
    },
    {
        localTeam: teams[7],
        visitorTeam: teams[8],
        date: '15/06/2018',
        localScore: null,
        visitorScore: null,
    },
];

let calls = match_list.map(function(item){
    return function(callback){
        Match.create(item,callback)
    }
});

async.series(calls, function(err, result){
    if(err) console.log(err);
    console.log("Finished inserting Matches");
    finish();
});



