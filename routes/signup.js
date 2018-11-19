var express = require("express")
var app = express()
const bcrypt = require('bcrypt');

var User = require("../models/login")

app.get('/', function(req, res) {
  res.render('signup')
})

app.post("/", function(req, res) {
  bcrypt.hash(req.body.password, 5, function(err, encryptedPassword) {
    if (err) res.send("ERROR")
    else {
    User.create({
      username: req.body.username,
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: encryptedPassword
    })
    .then(()=>{
      res.cookie("loggedIn", "true", {signed: true})
      res.render("yourspace", {loggedIn: true})
    })
    .catch((err)=>{
      res.end("ERROR", err)
    })
  }
  });
})

module.exports = app