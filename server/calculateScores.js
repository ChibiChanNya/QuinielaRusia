require('dotenv').config();
let Database = require('./config/database');
let Match = require('./models/match');
let GamePrediction = require('./models/gameprediction');
let GroupPrediction = require('./models/groupprediction');
let mongoose = require('mongoose');
let async = require('async');
let User = require('./models/user');
let Teams = require('./data').teams;
mongoose.Promise = global.Promise;




 function clearPoints(callback){
    User.update({points:{$gt: 0}}, {
        $set: { points: 0 }
    }, {
        multi: true
    }, function(err,res){
        console.log("Done with points", err);
        callback(err, "Points are 0!");
    });
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
        points += teams;
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


function findTeam(team){
    return Teams.find((t)=> t.name.toUpperCase() === team);
}

function calculateTable(matches){
    let results= {};

    Teams.forEach( (t) =>{
        t.name = t.name.toUpperCase();
        t.points=0;
        t.wins=0;
        t.loses=0;
        t.draws=0;
        t.goals=0;
        t.goals_against=0;
    });

    results.groupA = Teams.filter( (t)=> t.group==="A");
    results.groupB = Teams.filter( (t)=> t.group==="B");
    results.groupC = Teams.filter( (t)=> t.group==="C");
    results.groupD = Teams.filter( (t)=> t.group==="D");
    results.groupE = Teams.filter( (t)=> t.group==="E");
    results.groupF = Teams.filter( (t)=> t.group==="F");
    results.groupG = Teams.filter( (t)=> t.group==="G");
    results.groupH = Teams.filter( (t)=> t.group==="H");


    matches.forEach(function(m){
        if(m.localScore == null || m.visitorScore ==  null)
            return;

        let local = findTeam(m.local_team);
        let visitor = findTeam(m.visitor_team);
        let ls = parseInt(m.localScore);
        let vs = parseInt(m.visitorScore);
        let winner= {};
        let loser = {};

        visitor.goals += vs;
        visitor.goals_against += ls;
        local.goals += ls;
        local.goals_against += vs;

        if(ls === vs) {

            local.draws +=1;
            local.points +=1;
            visitor.draws +=1;
            visitor.points +=1;
        }
        else {
            if (ls > vs) {
                winner = local;
                loser = visitor;
            }
            else {
                winner = visitor;
                loser = local;
            }

            winner.wins += 1;
            winner.points += 3;
            loser.loses += 1;
        }
    });

    results.groupA.sort(compare_points);
    results.groupB.sort(compare_points);
    results.groupC.sort(compare_points);
    results.groupD.sort(compare_points);
    results.groupE.sort(compare_points);
    results.groupF.sort(compare_points);
    results.groupG.sort(compare_points);
    results.groupH.sort(compare_points);

    return results;
}

async function calculateGroupsPoints(){
    try {

        let increases = [];

        const [matches, predictions] = await Promise.all([

            Match.find({date: {$lt: new Date()}, type:"Grupos"}).exec(),
            GroupPrediction.find({}).exec(),
        ]);

        let table = calculateTable(matches);


        predictions.forEach(function(prediction){
            let group_name = "group"+prediction.group;
            let group_results = table[group_name];
            if(prediction.first_place === group_results[0].name
                && prediction.second_place === group_results[1].name
                && prediction.third_place === group_results[2].name
                && prediction.fourth_place === group_results[3].name){

                increases.push({user_id:prediction.user, points:25});
                console.log("GUESSED", group_name, prediction, group_results);
            }
        });
        let result = await assign_points(increases);
        console.log("RESULT OF GROUPS-POINTS", result);
    }
    catch(err){
        if(err){
            console.log("ERROR", err);
        }
    }
}

function compare_points(teamA, teamB){
    let scoreA = teamA.points;
    let scoreB = teamB.points;
    let goalsA = teamA.goals;
    let goalsB = teamB.goals;

    if(scoreA > scoreB)
        return -1;
    if(scoreB > scoreA)
        return 1;
    if(goalsA > goalsB)
        return -1;
    if(goalsB > goalsA)
        return 1;
    return 0;
}

async function calculateMatchesPoints(){
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
                if(points >0 )
                    increases.push({
                        user_id:  p.user,
                        points: points,
                    });
            })
        });
        let result = await assign_points(increases);
        console.log("RESULT OF MATCHES-POINTS", result);
    }
    catch (err) {
        console.log("ERROR", err);
    }

}

function assign_points(increases){
    return new Promise(resolve => {
        let results = reduceIncreases(increases);

        let promises = results.map(function(res){
            return function(callback){
                User.findOneAndUpdate({_id: res.user_id}, {$set:{ points: res.points}}, callback);
            }
        });
        async.series(promises, function(err, results){
            console.log("Done", err, results);
            resolve('Resolved');
        })
    })
}

function reduceIncreases(arr){
    let results= [];
   let sorted = arr.sort(function(a,b){
       if(a.user_id < b.user_id) return -1;
       if(a.user_id > b.user_id) return 1;
       return 0;
    });


    let group = groupBy(sorted, "user_id");


    for(let key in group){
        if (group.hasOwnProperty(key)) {
            let sum = group[key].reduce(function(total, elem){
                  return total + parseInt(elem.points);
            },0);
            let reduced = {user_id: key, points: sum};
            results.push(reduced);
        }
    }
    return results;
}

let groupBy = function(xs, key) {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

function finish(){
    process.exit();
}


async.series([ clearPoints, calculateGroupsPoints, calculateMatchesPoints ], (res)=>{
    console.log("100% Finishes", res);
    finish();
});
