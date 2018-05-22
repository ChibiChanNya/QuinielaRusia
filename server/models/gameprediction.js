
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MatchPredictionSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User', index: true, required: true},
    match_id: {type: Number, required:true },
    localTeam: {type: String},
    visitorTeam: {type: String},
    localScore: {type: Number},
    visitorScore: {type: Number},
});


//Export model
module.exports = mongoose.model('MatchPrediction', MatchPredictionSchema);