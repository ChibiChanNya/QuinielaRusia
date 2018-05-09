
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let SpecialPredictionSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User', index:true},
    first_place: {type: Schema.ObjectId, ref: 'Team'},
    second_place: {type: Schema.ObjectId, ref: 'Team'},
    third_place: {type: Schema.ObjectId, ref: 'Team'},
    fourth_place: {type: Schema.ObjectId, ref: 'Team'},
    goal_champion: {type: String}
});


//Export model
module.exports = mongoose.model('SpecialPrediction', SpecialPredictionSchema);