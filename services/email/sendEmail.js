const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY, FROM_EMAIL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY, FROM_EMAIL);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: FROM_EMAIL };
    const response = await sgMail.send(email);
    console.log("response:", response);
    return true;
  } catch (error) {
    console.log("error:", error);
    throw error.message;
  }
};

module.exports = sendEmail;
