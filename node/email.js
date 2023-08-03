// node/email.js

require("dotenv").config();
const nodemailer = require("nodemailer");

async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });

  let emailHtmlContent = `
  <div style="background-color: #313132; color: #ffffff;">
    <img src="https://via.placeholder.com/150" alt="Logo"/>
    <img src="https://via.placeholder.com/600x200" alt="Hero image"/>
    <p style="text-align: center;">Your centered text here</p>
    <table style="width: 50%; color: #ffffff; margin: auto;">
      <tr>
        <td>Title 1</td>
        <td>Details 1</td>
        <td><a href="#" style="color: #ffffff;">Button 1</a></td>
      </tr>
      <tr>
        <td>Title 2</td>
        <td>Details 2</td>
        <td><a href="#" style="color: #ffffff;">Button 2</a></td>
      </tr>
      <tr>
        <td>Title 3</td>
        <td>Details 3</td>
        <td><a href="#" style="color: #ffffff;">Button 3</a></td>
      </tr>
    </table>
    <p style="text-align: center;">Footer content here</p>
  </div>`;

  let emailPlainTextContent = `
  Logo
  Hero image
  Your centered text here

  Title 1 - Details 1 - Button 1
  Title 2 - Details 2 - Button 2
  Title 3 - Details 3 - Button 3

  Footer content here
`;

// send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.YOUR_EMAIL, // sender address
    to: process.env.RECIPIENT_EMAIL, // list of receivers
    subject: process.env.EMAIL_SUBJECT, // Subject line
    text: emailPlainTextContent, // plain text body
    html: emailHtmlContent, // html body
  });

  console.log("Message sent: %s", info.messageId);

}

main().catch(console.error);
