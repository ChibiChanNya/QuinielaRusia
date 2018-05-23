let PaypalService = require('../config/paypalService');
let User = require('../models/user');


module.exports = {
    checkoutPaypal(req,res){
        let user_id = req.body.data.user_id;
        let execute_payment_json = {
            "payer_id": req.body.data.payerID,
        };
        const payment ={};
        payment.amount=req.body.data.amount;
        const paymentID=req.body.data.paymentID;
        PaypalService.paymentPaypal(paymentID,execute_payment_json,payment,user_id, (err,result)=>{
            if(err){
                console.log(err);
                res.status(500).send("Error en el pago, no se te ha cobrado");
            }
            console.log("PROCESS COMPLETE",result);
            User.findOneAndUpdate({_id: user_id}, {$set:{'profile.has_paid': true}}, function(err, user){
                if(err){
                    console.log("Failed to give user premium status");
                }
                res.json(result)
            });
        });

    },

};