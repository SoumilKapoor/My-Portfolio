require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log("Email error:", error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;

  const name = `${firstName} ${lastName}`;

  const mail = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: "Portfolio Contact Form",
    html: `
      <h3>New Contact Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong><br/> ${message}</p>
    `,
  };

  try {
    await contactEmail.sendMail(mail);
    res.json({ code: 200, status: "Message Sent" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ code: 500, status: "Failed to Send" });
  }
});

app.listen(5000, () => console.log("Server Running on 5000"));