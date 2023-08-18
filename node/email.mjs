// stored in node/default.mjs

import { config } from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Dynamically import the template based on CLI input
const templateName = process.argv[2] || 'default';
const { emailHtmlContent, emailPlainTextContent } = await import(`./templates/${templateName}.mjs`);

config();

async function saveEmailContentToDisk(plainText, htmlContent, templateName) {
  const timestamp = new Date().toISOString().replace(/:/g, '-');

  // We are storing the emails up a directory
  const emailDir = path.join(__dirname, '..', 'saved_emails', templateName, timestamp);

  // Ensure directory exists
  if (!fs.existsSync(emailDir)) {
    fs.mkdirSync(emailDir, { recursive: true });
  }

  // Write content to files
  fs.writeFileSync(path.join(emailDir, 'plain.txt'), plainText);
  fs.writeFileSync(path.join(emailDir, 'content.html'), htmlContent);
}

async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const dkim = {
    domainName: 'nikoskatsikanis.com',
    keySelector: 'key1',
    privateKey: fs.readFileSync('keys/key1'),
  };

  console.log(dkim);

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.YOUR_EMAIL,
    to: process.env.RECIPIENT_EMAIL,
    subject: process.env.EMAIL_SUBJECT,
    text: emailPlainTextContent,
    html: emailHtmlContent,
    dkim: dkim,
  });

  // Save email content to disk
  await saveEmailContentToDisk(emailPlainTextContent, emailHtmlContent, templateName); // use 'templateName' instead of 'default'

  console.log('Message sent: %s', info.messageId);
  console.log(emailPlainTextContent);
}

main().catch(console.error);
