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

    res.status(500).send("Closed");
});

// app.post('/api/payment', PaymentsController.checkoutPaypal);



app.listen(3333);
console.log('Listening !!!');
