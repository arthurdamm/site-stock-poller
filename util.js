const { Console } = require("console");
const fs = require("fs");
const nodemailer = require('nodemailer');

const logger = new Console({
  stdout: fs.createWriteStream("log/out.txt"),
  stderr: fs.createWriteStream("log/err.txt"),
});

function log(str) {
    console.log(str);
    logger.log(str);
}

function err(str) {
    console.log(str);
    logger.error(str);
}

const mailer = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

const mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

function mail(opts, subj, body) {
	mailer.sendMail(opts, function(error, info) {
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email sent: ' + info.response);
	  }
	});
}

module.exports = {
	log,
	err,
	mail,
	mailOptions
}
