// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });
// app.post("/", function (req, res) {
//   var num1 = Number(req.body.n1);
//   var num2 = Number(req.body.n2);

//   var result = num1 + num2;
//   res.send("The Calculation is: " + result);
// });
// app.listen(3000, function () {
//   console.log("This server is running on 3000");
// });

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var weight = Number(req.body.Weight);
  var height = Number(req.body.height);

  var n = Math.round(weight / (height * height));
  res.send("Your BMI is " + n);
});
app.listen(3000, function () {
  console.log("This server is running on port 3000");
});
