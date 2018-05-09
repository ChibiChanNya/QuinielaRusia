
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MatchPredictionSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User', index:true},
    match: {type: Schema.ObjectId, ref: 'Match', index:true},
    localTeam: {type: Schema.ObjectId, ref: 'Team', index:true},
    visitorTeam: {type: Schema.ObjectId, ref: 'Team', index:true},
    localScore: {type: Number},
    visitorScore: {type: Number},
});


//Export model
module.exports = mongoose.model('Match', MatchPredictionSchema);