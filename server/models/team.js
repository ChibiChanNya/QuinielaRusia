
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let TeamSchema = Schema({
    name: {type: String},
    logo_url: {type: String}
});


//Export model
module.exports = mongoose.model('Team', TeamSchema);