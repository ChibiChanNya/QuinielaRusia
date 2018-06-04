
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MatchSchema = Schema({
    match_id: {type: Number, index: true, unique: true},
    local_team: {type: String},
    visitor_team: {type: String},
    date: { type: Date, required: true, index: true},
    localScore: {type: Number, default: null},
    visitorScore: {type: Number, default: null},
    type: {type: String}
});


//Export model
module.exports = mongoose.model('Match', MatchSchema);