const nodemailer = require('nodemailer'); 


require("dotenv").config();
const key = process.env.KEY
const email_ad = process.env.USER
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: email_ad,
    pass: key
  }
});


transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email service:', error);
  } else {
    console.log('Email service ready to send messages');
  }
});

module.exports=transporter;

