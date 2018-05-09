
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let MatchSchema = Schema({
    localTeam: {type: Schema.ObjectId, ref: 'Team', index:true},
    visitorTeam: {type: Schema.ObjectId, ref: 'Team', index:true},
    date: { type: Date, required: true},
    localScore: {type: Number},
    visitorScore: {type: Number},

});


//Export model
module.exports = mongoose.model('Match', MatchSchema);