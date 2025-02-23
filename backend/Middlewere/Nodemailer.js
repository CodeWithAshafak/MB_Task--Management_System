const nodemailer = require('nodemailer');  // installing nodemailer= npm i nodemailer
// Create a transporter

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

// Verify the transporter
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email service:', error);
  } else {
    console.log('Email service ready to send messages');
  }
});

module.exports=transporter;

