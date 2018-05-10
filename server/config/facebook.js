// src/authentication/facebook.js
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const users = require('../models/user');

const passportConfig = {
    clientID: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_CLIENTSECRET,
    callbackURL: 'http://localhost:3333/api/auth/facebook/redirect'
};

if (passportConfig.clientID) {
    passport.use(new passportFacebook.Strategy(passportConfig, function (accessToken, refreshToken, profile, done) {
        let user = users.getUserByExternalId('facebook', profile.id);
        if (!user) {
            user = users.createUser(profile.displayName, 'facebook', profile.id);
        }
        return done(null, user);
    }));
}
