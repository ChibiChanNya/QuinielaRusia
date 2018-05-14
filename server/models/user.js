let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let bcrypt = require('bcrypt-nodejs');

let UserSchema = new Schema({

    auth:{
        username: {
            type: String,
            unique: false,
            required: false
        },
        provider: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: false
        },
        google_id:{
            type: String,
            unique: true,
        },
        facebook_id:{
            type: String,
            unique: true,
        },
        email:{
            type: String,
            required: true,
        },
    },
    profile:{
        display_name: {type: String},
        display_pic: {type: String},
        has_paid : {type: Boolean, default: false},
    },

    points: {type: Number, default: 0},
});

UserSchema.pre('save', function (next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);