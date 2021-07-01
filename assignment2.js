var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
const path = require("path");
app.get("/", function(req, res){
    res.sendFile(path.join(dirname, "/canadian_web_hosting.html"));
});
app.get("/home.html", function(req, res){
    res.sendFile(path.join(dirname, "/home.html"));
});
app.get("/canadian_web_hosting.html", function(req, res){
    res.sendFile(path.join(dirname, "/canadian_web_hosting.html"));
});
app.get("/sign_in.html", function(req, res){
    res.sendFile(path.join(dirname, "/sign_in.html"));
});
app.get("/create_account.html", function(req, res){
    res.sendFile(path.join(__dirname, "/create_account.html"));
});
app.listen(HTTP_PORT);




const { body, validationResult } = require('express-validator');

app.post('/user',
    body('email1').isEmail().normalizeEmail(),


    body('pass').isLength(
        {
        min: 6
    }),
    (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(
                {
                success: false,


                errors: errors.array()
            });
        }

        res.status(200).json({
            success: true,
            
            message: 'Login successful',
        })
    });