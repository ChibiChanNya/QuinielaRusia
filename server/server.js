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
let async = require('async');

//Passport
let passport = require('passport');
app.use(passport.initialize());

require('./config/jwt');

//Import static data
const data = require('./data');

//Import Controller to use here
const PaymentsController = require('./controllers/paymentsController');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(logger('dev'));

// Import Routes
let users = require('./routes/users');
let User = require('./models/user');
let Prediction = require('./models/gameprediction');
let GPrediction = require('./models/groupprediction');
let SPrediction = require('./models/specialprediction');


// API to handle Users
app.use('/api/users', users);

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

app.get('/api/matches/all', passport.authenticate('jwt', {session: false}), (req, res) => {
    let matches = data.matches;
    matches.forEach((m)=>{
        m.localScore=0;
        m.visitorScore=0;
    });
    res.json(matches);
});

app.get('/api/battles/private', passport.authenticate('jwt', {session: false}), (req, res) => {
    let privateBattles = data.private_battles;
    res.json(privateBattles);
});

app.get('/api/battles/private', passport.authenticate('jwt', {session: false}), (req, res) => {
    let privateBattles = data.private_battles;
    res.json(privateBattles);
});

app.get('/api/matches/me', passport.authenticate('jwt', {session: false}), (req, res) => {
    let matches = data.matches;
    // Got predictions to work with.
    let user_id = req.user._id;

    function find_by_id(id) {
        return matches.find((m) => m.match_id == id);
    }

    User.findOne({_id: user_id}, async function (err, user) {
        if (err) {
            console.log("error finding useer", err);
            res.json(matches);

        }
        else {
            if (!user) {
                console.log("User not found!!!", err);
                res.json(matches);
            }
            else {
                let [predictions, specials] = await Promise.all([
                    Prediction.find({user: user}).exec(),
                    SPrediction.findOne({user: user}).exec(),
                ]);

                // const default_specials: {first_place: null, second_}

                predictions.forEach((item) => {
                    let match = find_by_id(item.match_id);

                    if (match) {
                        match.localScore = item.localScore;
                        match.visitorScore = item.visitorScore;
                    }
                });

                const results = {matches: matches, specials: specials || {}};
                res.json(results);
            }
        }
    });
});


app.post('/api/matches/save', passport.authenticate('jwt', {session: false}),  (req, res, next) => {

    try{

        let matches = req.body.matches;
        let user_id = req.body.user_id;
        let table = req.body.table;
        let specials = req.body.specials;

        User.findOne({_id: user_id}, async function (err, user) {
            if (err) {
                console.log("error finding useer", err);
                return;
            }
            if (!user) {
                console.log("User not found!!!", err);
                return;
            }

            const [err1, err2] = await Promise.all([
                Prediction.deleteMany({user: user}).exec(),
                GPrediction.deleteMany({user: user}).exec(),
                SPrediction.deleteMany({user: user}).exec()
            ]);

            // if (err1) console.log("ERROR DELETING Match Predictions", err1);
            // if (err2) console.log("ERROR DELETING Table Predictions", err2);


            let promises_matches = matches.map((m) => {
                if (!m.match_id) {
                    return;
                }
                return Prediction.create({
                    user: user_id,
                    match_id: m.match_id,
                    localScore: m.localScore,
                    visitorScore: m.visitorScore,
                    localTeam: m.localTeam,
                    visitorTeam: m.visitorTeam,
                });
            });

            let promises_table = table.map((t) => {
                if (!t.group) {
                    console.log("NO GROUP");
                    return;
                }
                return GPrediction.create({
                    user: user_id,
                    group: t.group,
                    first_place: t.first_place,
                    second_place: t.second_place,
                    third_place: t.third_place,
                    fourth_place: t.fourth_place,
                });
            });

            let special_prediction = SPrediction.create({
                user: user_id,
                first_place: specials.selected_1st,
                second_place: specials.selected_2nd,
                third_place: specials.selected_3rd,
                fourth_place: specials.selected_4th,
                goal_champion: specials.selected_goaler,
            });

            const all_promises = promises_matches.concat(promises_table).concat(special_prediction);

            Promise.all(all_promises).then(function (results) {
                // console.log("ALL DONES", results);
                res.status(200).send("OK");
            });
        });

    } catch (err){
        console.log("ERROR AT THE END",error);
        next(error);
    }

});

app.post('/api/payment', PaymentsController.checkoutPaypal);



app.listen(3333);
console.log('Listening !!!');
