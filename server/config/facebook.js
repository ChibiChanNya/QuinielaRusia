// src/authentication/facebook.js
const passport = require('passport');
const passportFacebook = require('passport-facebook');
const User = require('../models/user');

const passportConfig = {
    clientID: process.env.FACEBOOK_CLIENTID,
    clientSecret: process.env.FACEBOOK_CLIENTSECRET,
    callbackURL: 'https://quinielasports.com/api/auth/facebook/redirect'
};

if (passportConfig.clientID) {
    passport.use(new passportFacebook.Strategy(passportConfig, function (accessToken, refreshToken, profile, done) {
        console.log("Got this from Facebook", profile);
        User.findOne({'auth.facebook_id': profile.id}, '_id', function(err, user){

            if (!user) {
                // They don't, so register them
                console.log("CREATING NEW USERZ", profile);
                User.create({
                    auth:{
                        facebook_id: profile.id,
                        email: profile.emails[0].value,
                        provider: "facebook",
                    },
                    profile:{
                        display_name: profile.displayName,
                        display_picture: profile.photos[0].value
                    }
                }, function(err, user){
                    console.log("Finished creating USER", user);
                    if(err){
                        console.log(err);
                        return;
                    }
                    return done(null, user);
                })
            }
            else{
                return done(null, user);
            }
        });
    }));
}