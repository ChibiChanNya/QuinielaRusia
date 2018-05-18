// src/authentication/google.js
const passport = require('passport');
const passportGoogle = require('passport-google-oauth');
const User = require('../models/user');

const passportConfig = {
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_CLIENTSECRET,
    callbackURL: process.env.SERVER_URL+'/api/auth/google/redirect'
};

if (passportConfig.clientID) {
    passport.use(new passportGoogle.OAuth2Strategy(passportConfig, function (request, accessToken, refreshToken, profile, done) {
        // See if this user already exists
        User.findOne({'auth.google_id': profile.id}, '_id profile.has_paid', function(err, user){
            console.log("ERROR?", err);
            console.log("CHECKING USER!", user);

            if (!user) {
                // They don't, so register them
                console.log("CREATING NEW USERZ", profile);
                User.create({
                    auth:{
                        google_id: profile.id,
                        email: profile.emails[0].value,
                        provider: "google",
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
