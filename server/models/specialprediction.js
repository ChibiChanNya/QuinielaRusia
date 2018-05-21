
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let SpecialPredictionSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User', index:true},
    first_place: {type: String},
    second_place: {type: String},
    third_place: {type: String},
    fourth_place: {type: String},
    goal_champion: {type: String}
});


//Export model
module.exports = mongoose.model('SpecialPrediction', SpecialPredictionSchema);