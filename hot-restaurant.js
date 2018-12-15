var express = require("express");

var app = express();
var PORT = 3000;

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
    
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));

});

app.get("/api/tables", function(req, res) {
    // res.sendFile(path.join(__dirname, "reserve.html"));

});

app.get("/api/waitlist", function(req, res) {
    // res.sendFile(path.join(__dirname, "reserve.html"));

});
  
app.listen(PORT,function(){
    console.log("Now listening on port " + PORT)
});