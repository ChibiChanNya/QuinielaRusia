require('dotenv').config();
let Database = require('./config/database');
let Match = require('./models/match');
let GamePrediction = require('./models/gameprediction');
let GroupPrediction = require('./models/groupprediction');
let mongoose = require('mongoose');
let async = require('async');
let User = require('./models/user');
mongoose.Promise = global.Promise;




function clearPoints(callback){
    User.update({}, {
        $set: { points: 0 }
    }, {
        multi: true
    }, callback);
}

function getScore(match, prediction){
    let winner, score, teams;
    let points = 0;
    switch(match.type){
        case "Grupos":
            winner = 5;
            score = 10;
            teams = 0;
            break;
        case "Octavos":
            teams = 15;
            winner = 12;
            score = 18;
            break;
        case "Cuartos":
            teams = 40;
            winner = 30;
            score = 50;
            break;
        case "Semifinales":
            teams= 75;
            winner= 60;
            score = 90;
            break;
        case "Final":
            teams = 150;
            winner= 120;
            score = 180;
    }

    if(match.local_team === prediction.localTeam && match.visitor_team === prediction.visitorTeam)
        points += team;
    if(match.localScore === prediction.localScore && match.visitorScore === prediction.visitorScore)
        points += score;
    if( match.localScore > match.visitorScore && prediction.localScore > prediction.visitorScore)
        points += winner;
    else if(  match.localScore < match.visitorScore && prediction.localScore < prediction.visitorScore)
        points += winner;
    else if(  match.localScore === match.visitorScore && prediction.localScore === prediction.visitorScore )
        points += winner;

    return points;
}

async function calculate( ){
    try{
        let increases = [];
        const [matches, predictions] = await Promise.all([

            Match.find({date: {$lt: new Date() }}).exec(),
            GamePrediction.find({}).exec(),
        ]);

        matches.forEach(function(match){
            let predicts = predictions.filter((p)=> p.match_id === match.match_id);
            let points;
            predicts.forEach(function(p){
                points =  getScore(match, p);
                increases.push({
                    user_id:  p.user_id,
                    points: points,
                });
            })
        });
        let results = reduceIncreases(increases);
        console.log("Got results", results);
        finish();
    }
    catch (err) {
        console.log("ERROR", err);
        finish();
    }

}

function reduceIncreases(arr){
    arr.sort(function(a,b){
        return a.user_id - b.user_id;
    })
}

function finish(){
    process.exit();
}


clearPoints(calculate);