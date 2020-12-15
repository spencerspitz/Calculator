//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//helps to parse data from a html form
//extended: true allows us to post nested objects
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  //__dirname sends back the current path to the directory (ie. Calculator folder)
  //have to use this when running a server because directory path is different on every user's computer
  //console.log(__dirname+"/index.html");
  res.sendFile(__dirname + "/index.html");
});

//handle post methods
app.post("/", function(req, res) {
  //req.body is the parsed values that were sent from form
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight/(Math.pow(height,2));
  res.send("Your BMI is " + result);
});

app.listen("3000", function() {
  console.log("Server is running on port 3000");
});
