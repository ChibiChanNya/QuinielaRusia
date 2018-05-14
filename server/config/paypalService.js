const paypal = require('paypal-rest-sdk');
let Payment = require('../models/payment');
let User = require('../models/user');


paypal.configure({
    mode: 'sandbox', // Sandbox or live
    client_id: 'AXa7tZ6EUuladHZ7LeazvYj8DNFNzjIgXtkooGrLB1sjlpZMP6KNfGmKghkwyZia1yafqD6kcmN6tmJA',
    client_secret: 'EMi1DEvh49sBAJs6PWIAZNHVGbs2FnwKVe5wKz-h8bkuTDvUv46Lbuf0LbRa3CqC3nphgJUjNUX-s1Gu'
});
module.exports = {
    paymentPaypal(paymentID,execute_payment_json,payment,user_id, cb){
        console.log("Starting service");
        paypal.payment.execute(paymentID,execute_payment_json,(error, paymentLog)=> {
            if (error) {
                return cb(error)
            }
            else{
                //the logic after  successful payment  here just save the payment in a databse
                payment.email=paymentLog.payer.payer_info.email;
                payment.first_name=paymentLog.payer.payer_info.first_name;
                payment.last_name=paymentLog.payer.payer_info.last_name;
                payment.paypal_id= paymentLog.id;
                console.log("PAYMENT COMPLETE",payment);
                Payment.create(payment, function(err, result){
                    if(err){
                        console.log("DB error saving payment", err);
                        cb(err, "fail");
                    }
                    else{
                        User.update({ _id: user_id }, { $set: { 'profile.has_paid': true }}, function(err){
                            if(err){
                                console.log("Failed updating User Premium", err);
                                cb(err, "fail");
                            }
                            else{
                                console.log("Updated User!");
                                cb(null,'done');
                            }
                        });
                    }
                })
            }
        })
    }
};