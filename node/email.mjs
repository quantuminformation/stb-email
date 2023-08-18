import { config } from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import { emailHtmlContent, emailPlainTextContent } from './templates/default.mjs';

config();

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
  const dkim = {
    domainName: 'nikoskatsikanis.com',
    keySelector: 'key1', // Replace with your selector
    privateKey: fs.readFileSync('keys/key1'), // Load the private key
  };

  console.log(dkim);
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.YOUR_EMAIL, // sender address
    to: process.env.RECIPIENT_EMAIL, // list of receivers
    subject: process.env.EMAIL_SUBJECT, // Subject line
    text: emailPlainTextContent, // plain text body
    html: emailHtmlContent,
    dkim: dkim,
  });

  console.log('Message sent: %s', info.messageId);
  console.log(emailPlainTextContent);
}

main().catch(console.error);
