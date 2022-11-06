const express = require("express");
// use body parse to get data from body
const bodyParse = require("body-parser");

const app = express();
// allows to post nested object
app.use(bodyParse.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  // get value using name attr and convert string to number
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send(" result is " + result);
})

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = calculateBMI(weight, height);
  res.send(" Your BMI is " + bmi);
})

app.listen(3000, function (){
  console.log("Server running on port 3000");
});


function calculateBMI(weight, height) {
  return weight / (height * height);
}
