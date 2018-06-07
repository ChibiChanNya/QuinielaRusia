let express = require('express');
let router = express.Router();
const User = require('../models/user');
module.exports = router;


router.get('/leaderboard', function (req, res, next) {
    User.find({"profile.has_paid": true}, 'auth.email profile.display_name points').sort({points: -1})
        .exec(function (err, users) {
            res.json(users);
        })

});