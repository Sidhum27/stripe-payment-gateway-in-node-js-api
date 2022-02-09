'use strict';
// Keys for Stripe
require('dotenv').config();

// Keys for Stripe
const keySecret = process.env.SECRET_KEY;
 
// Stripe API
const stripe = require("stripe")(keySecret);

exports.list_all_balances = function(req, res) {
    
    stripe.balance.retrieve(
        function(err, transactions) {
            // asynchronously called
            if(err) {
                console.log(err);
                res.send('REQUEST ERROR -: '+err?.message);
            } else {
                res.json(transactions);
            }
        }
    );
};