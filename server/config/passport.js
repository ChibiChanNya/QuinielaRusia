const passport = require('passport');
const passportJwt = require('passport-jwt');
const User = require('../models/user');
require('./google');
require('./facebook');


const jwtOptions = {
    // Get the JWT from the "Authorization" header.
    // By default this looks for a "JWT " prefix
    jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    // The secret that was used to sign the JWT
    secretOrKey: process.env.JWT_SECRET,
    // The issuer stored in the JWT
    issuer: process.env.JWT_ISSUER,
    // The audience stored in the JWT
    audience: process.env.JWT_AUDIENCE
};

passport.use(new passportJwt.Strategy(jwtOptions, (payload, done) => {
    User.findOne({id: parseInt(payload.sub)}, function(user){
        if (user) {
            return done(null, user, payload);
        }
        return done();
    });

}));