"use strict";
const nodemailer = require("nodemailer");

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, message } = data;
    const myEmail = "markuslec@gmail.com";

    // For debugging
    console.log("Processing email from:", email);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: myEmail,
      to: myEmail,
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Email sending error:", error);

    return new Response(
      JSON.stringify({
        message: "Email failed to send",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
