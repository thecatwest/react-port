// load dependencies
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
// const dotenv = require('dotenv');
// const { google } = require('googleapis');

// const CLIENT_ID = 'process.env.CLIENT_ID';
// const CLIENT_SECRET = 'process.env.CLIENT_SECRET';
// const REDIRECT_URI = 'process.env.REDIRECT_URI';
// const REFRESH_TOKEN = 'process.env.REFRESH_TOKEN';

// set server to run on port 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
// oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

// const accessToken = oAuth2Client.getAccessToken();

const EMAIL_PW = process.env.EMAIL_PW;

const contactEmail = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   auth: {
//     type: "OAuth2",
//     user: "westoverca@gmail.com",
//     clientId: CLIENT_ID,
//     clientSecret: CLIENT_SECRET,
//     refreshToken: REFRESH_TOKEN,
//     accessToken: accessToken
    service: 'gmail',
    auth: {
      user: "westoverca@gmail.com",
      pass: EMAIL_PW,
    },
//   },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// set up router and send email from form
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "westoverca@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
