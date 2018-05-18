'use strict';
require('dotenv').config();
const express = require('express');
const app = express();
const logger = require('morgan');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
require('./config/database');
let auth = require('./routes/auth');

//Passport
let passport = require('passport');
app.use(passport.initialize());

require('./config/jwt');

//Import static data
const data = require('./data');

//Import Controller to use here
const PaymentsController = require('./controllers/paymentsController');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));

// Import Routes
let users = require('./routes/users');
let User = require('./models/user');
let Prediction = require('./models/gameprediction');


// API to handle Users
// app.use('/api/users', users);

//Handle Passport stuff
app.use('/api/auth', auth);


app.get('/api/battles/public', (req, res) => {
    let publicBattles = data.public_battles;

    res.json(publicBattles);
});

app.get('/api/teams', (req, res) => {
    let teams = data.teams;
    res.json(teams);
});

app.get('/api/matches/all',passport.authenticate('jwt', { session: false}), (req, res)=> {
    let matches= data.matches;
    res.json(matches);
});

app.get('/api/battles/private', passport.authenticate('jwt', { session: false}), (req,res) => {
    let privateBattles = data.private_battles;
    res.json(privateBattles);
});

app.get('/api/battles/private', passport.authenticate('jwt', { session: false}), (req,res) => {
    let privateBattles = data.private_battles;
    res.json(privateBattles);
});

app.get('/api/matches/me', passport.authenticate('jwt', { session: false}), (req, res)=> {
    let matches = data.matches;
    // Got predictions to work with.
    let user_id = req.user._id;

    function find_by_id(id){
        return matches.find((m)=> m.match_id == id);
    }

    User.findOne({_id: user_id}, function(err, user){
        if(err){
            console.log("error finding useer",err);
            res.json(matches);

        }
        else {
            if (!user) {
                console.log("User not found!!!", err);
                res.json(matches);
            }
            else{
                Prediction.find({user: user}, function (err, predictions) {
                    if( err || predictions.length <1){
                        console.log("User has no predictions or error fetcing em");
                        res.json(matches);
                    }
                    else{
                        predictions.forEach((item)=>{
                            let match = find_by_id(item.match_id);

                            if(match){
                                match.localScore = item.localScore;
                                match.visitorScore = item.visitorScore;
                            }
                        });
                        res.json(matches);
                    }
                });
            }
        }
    });
});

app.post('/api/matches/save', passport.authenticate('jwt', { session: false}), (req, res)=> {
    let matches= req.body.matches;
    let user_id = req.body.user_id;
    // console.log(req);
    User.findOne({_id: user_id}, function(err, user){
        if(err){
            console.log("error finding useer",err);
        }
        else{
            if(!user){
                console.log("User not found!!!",err);
                return;
            }
            Prediction.deleteMany({user: user}, function(err,deleted){

                if(err) console.log("ERROR DELETING", error);

                let promises = matches.map((m)=>{
                    if(!m.match_id){
                        return;
                    }
                    return Prediction.create({
                        user: user_id,
                        match_id: m.match_id,
                        localScore: m.localScore,
                        visitorScore: m.visitorScore
                    });
                });
                Promise.all(promises).then(function(results){
                    res.sendStatus(200);
                });
            });


        }
    });
});

app.post('/api/payment', PaymentsController.checkoutPaypal);


app.listen(3333);
console.log('Listening !!!');
