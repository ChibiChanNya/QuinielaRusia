let express = require('express');
let passport = require('passport');
const token = require('../config/token');
const jwt = require('jsonwebtoken');
let router = express.Router();
let User = require("../models/user");
module.exports = router;
require('../config/google');
require('../config/facebook');



router.post('/register', function(req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'Please pass username and password.'});
    } else {
        let newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        // save the user
        newUser.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
});


router.post('/login', function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            // check if password matches
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign(user.toJSON(), settings.secret);
                    // return the information including token as JSON
                    res.json({success: true, token: "JWT "+token});
                } else {
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
});

function generateUserToken(req, res) {
    // console.log("GENERATING NEW TOKEN", req.user);
    const accessToken = token.generateAccessToken(req.user._id);
    res.redirect(process.env.CLIENT_URL+'/authenticated?token=JWT ' + accessToken+'&user_id='+req.user._id+'&has_paid='+req.user.profile.has_paid);
}

router.get('/google/start',
    passport.authenticate('google', { session: false, scope: ['openid', 'profile', 'email'] }));
router.get('/google/redirect',
    passport.authenticate('google', { session: false }),
    generateUserToken);

router.get('/facebook/start',
    passport.authenticate('facebook', {scope:['email', 'id'], session: false }));
router.get('/facebook/redirect',
    passport.authenticate('facebook', { session: false }),
    generateUserToken);