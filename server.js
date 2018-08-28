var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, 'public');
//var db = require("./models");
var bodyParser = require("body-parser");
var logger = require("morgan");
//var favicon = require('serve-favicon');
var nodemailer = require('nodemailer');

var PORT = process.env.PORT || 3000;



// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(public));

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});


app.post('/email', function (req, res) {
	console.log(req);
	var email = req.body.email;
	var first = req.body.fName;
	var last = req.body.lName;
	var number = req.body.number;
	var comment = req.body.comment;
	var text = first + " " + last + " " + number + " " + email + " " + comment
	console.log(email, first);

	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'tt886004@gmail.com',
			pass: 'Qazwsx31'
		}
	});

	var mailOptions = {
	  from: 'tt886004@gmail.com',
	  to: 'yansplace@yahoo.com',
	  subject: 'New Website Message!',
	  text: text
	};

	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});

});




