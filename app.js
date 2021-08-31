 //jshint esversion:6

require('dotenv').config();
const express = require("express");

const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true 
}));
app.use(express.static(__dirname + '/public'));


// Render pages

app.get("/", function (req, res) {
  res.render("home");
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, function () {
  console.log("Server started on port 8000");
});
