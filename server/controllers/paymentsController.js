let PaypalService = require('../config/paypalService');

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
            res.json(result)
        });

    },

};