let PaypalService = require('../config/paypalService');
let User = require('../models/user');


module.exports = {
    checkoutPaypal(req,res){
        console.log("BODY",req.body);
        let user_id = req.body.user_id;
        let execute_payment_json = {
            "payer_id": req.body.data.payerID,
        };
        const payment ={};
        payment.amount=req.body.data.amount;
        const paymentID=req.body.data.paymentID;
        PaypalService.paymentPaypal(paymentID,execute_payment_json,payment,user_id, (err,result)=>{
            if(err){
                console.log(err);
                res.error(err);
            }
            console.log("PROCESS COMPLETE",result);
            User.findOneAndUpdate({_id: user_id}, {$set:{has_paid: true}}, function(err, user){
                if(err){
                    console.log("Failed to give user premium status");
                }
                res.json(result)
            });
        });

    },

};