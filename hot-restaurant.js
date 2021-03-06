var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname,"tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname,"reserve.html"));
});

app.get("/api/tables", function(req,res) {
    return(res.json(sitting));
});

app.get("/api/waitlist", function(req,res) {
    return(res.json(waiting));
});

app.listen(PORT,function(){
    console.log("Now listening on port " + PORT)
});

var sitting = [
    {
        name:"Stevey Boye",
        phone:"1234567890",
        email:"asjldkvhasdlkg@kljsh.com",
        guestId:"123456"
    }
];

var waiting = [
    {
        name:"Big Ben",
        phone:"87235623489",
        email:"iurlg@lairsj.com",
        guestId:"3427856"
    }
];

app.post("/api/tables",function(req,res){
    var newObj = req.body;
    sitting.push(newObj);
    res.json(newObj);
});

app.post("/api/waitlist",function(req,res){
    var newObj = req.body;
    waiting.push(newObj);
    res.json(newObj);
});

app.post("/api/clear",function(req,res){
    sitting = [];
});