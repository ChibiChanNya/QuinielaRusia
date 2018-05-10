'use strict';
require('dotenv').config();
const express = require('express');
const exphbs  = require('express-handlebars');
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

//Import static data
const data = require('./data');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger('dev'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


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
    let token = getToken(req.headers);

    if (token) {
        res.json(matches);
    }
    else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

app.get('/api/battles/private', passport.authenticate('jwt', { session: false}), (req,res) => {
    let privateBattles = data.private_battles;

    let token = getToken(req.headers);
    if (token) {
        res.json(privateBattles);
    }
    else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }

});

app.listen(3333);
console.log('Listening on localhost:3333');
