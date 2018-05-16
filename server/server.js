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

// Function to check auth tokens
let getToken = function (headers) {
    if (headers && headers.authorization) {
        let parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};


// Import Routes
let users = require('./routes/users');

// API to handle Users
// app.use('/api/users', users);

//Handle Passport stuff
app.use('/api/auth', auth);


app.get('/api/battles/public', (req, res) => {
    let publicBattles = data.public_battles;

    res.json(publicBattles);
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

app.post('/api/matches/save', passport.authenticate('jwt', { session: false}), (req, res)=> {
    let matches= req.body.matches;
    let user_id = req.body.user_id;
    console.log("Got prediction", matches, user_id);
    res.sendStatus(200);
});

app.post('/api/payment', PaymentsController.checkoutPaypal);


app.listen(3333);
console.log('Listening on localhost:3333');
