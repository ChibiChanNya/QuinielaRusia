
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let PaymentSchema = Schema({
    amount: {type: Number},
    user: {type: Schema.ObjectId, ref: 'User', index:true},
    paypal_id: {type: String, required: true, unique: true},
    first_name: {type: String},
    last_name: {type: String}

});


//Export model
module.exports = mongoose.model('Payment', PaymentSchema);