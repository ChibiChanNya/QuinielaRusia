
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let GroupPredictionSchema = Schema({
    user: {type: Schema.ObjectId, ref: 'User', index:true, required:true},
    group: {type: String, required:true },
    first_place: {type: String},
    second_place: {type: String},
    third_place: {type: String},
    fourth_place: {type: String},
});


//Export model
module.exports = mongoose.model('GroupPrediction', GroupPredictionSchema);