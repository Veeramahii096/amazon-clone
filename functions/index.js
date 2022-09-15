const functions = require("firebase-functions");
const express=require('express');
const cors=require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe=require('stripe')('sk_test_51Li441SEqeYd8iuHkVZ9MVqh1Cs4zqKqVmGmhnzBmcgyTb8Lq3uDK0rRCis7E0dYzbb6cF3BrAE6MbTEfIhlIMLE00eAwzxxf7')

//app config
const app=express();

//middlewares
app.use(cors({origin:true}));
app.use(express.json());
app.get('/',(request,response)=>response.status(200).send('hello world'))
app.post('/payments/create',async(request,response)=>{
    const total=request.query.total;
    console.log("payment Request Recived fot this amount >>>",total);
    const paymentIndent=await stripe.paymentIntents.create({
        amount:total,
        currency:"usd",
    });
    response.status(201).send({
        clientSecret: paymentIndent.client_secret,
    });
});

//Listen command
exports.api=functions.https.onRequest(app)


//example endpoint
//http://localhost:5001/challenge-c09ba/us-central1/api