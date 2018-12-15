var express = require("express");

var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
    res.send("Welcome to our hot restaurant!");
});

app.listen(PORT,function(){
    console.log("Now listening on port " + PORT)
});