import { imageRoot } from './config.mjs';
import { config } from 'dotenv';
import nodemailer from 'nodemailer';

config();

const bodyText = 'Hello Nikos, ' + '\n\n' + 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

const tableColumnData = [{
  title: 'Title 1',
  dateRange: '14 - 16 May 2021',
  location: 'Location 1',
  name: 'Name 1',
  description: 'Description 1',
  link: 'https://www.google.com'
}, {
  title: 'Title 2',
  dateRange: '14 - 16 May 2021',
  location: 'Location 2',
  name: 'Name 2',
  description: 'Description 2',
  link: 'https://www.google.com'
}];

let tableHtmlRows = tableColumnData.map(data => `
    <td style='border: 2px solid black;'>📆 ${data.dateRange}<br>
        📍 ${data.location}<br>
        👩 ${data.name}<br>
        ${data.description}
    </td>`).join('');

let tableHtmlTitles = tableColumnData.map(data => `<td style='border: 2px solid black;'>${data.title}</td>`).join('');

let tableHtmlButtons = tableColumnData.map(data => `
    <td style='border: 2px solid black;'><a href='${data.link}' style=' color: #ffffff; padding: 10px; text-decoration: none;'>Button</a></td>`).join('');

let tableHtml = `
  <table style=' color: #ffffff; margin: auto; border-collapse: collapse;'>
    <tr>${tableHtmlTitles}</tr>
    <tr>${tableHtmlRows}</tr>
    <tr>${tableHtmlButtons}</tr>
  </table>
`;

let emailHtmlContent = `
  <div style='background-color: #313132; color: #ffffff; font-size: 1.1rem;'>
    <img src='${imageRoot}/STB-Logo-neu_transparent.png'  style='width: 12rem;  padding:1rem; display: block;' alt='Logo'/>
    <img src='${imageRoot}/hero.png' style='width: 100%;  alt='Hero image"/>
    <center><div style=' padding:1rem; max-width: 50rem;'><p style='text-align: center;'>${bodyText}</p>
    ${tableHtml}
    <p style='text-align: center;'>Footer content here</p>
    </div></center>
  </div>
`;

let emailPlainTextContent = `
  ${bodyText}
  ${tableColumnData.map(data => `📆 ${data.dateRange}\n📍 ${data.location}\n👩 ${data.name}\n${data.description}`).join('\n')}
`;

async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, port: process.env.SMTP_PORT, secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USERNAME, // generated ethereal user
      pass: process.env.SMTP_PASSWORD // generated ethereal password
    }

  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.YOUR_EMAIL, // sender address
    to: process.env.RECIPIENT_EMAIL, // list of receivers
    subject: process.env.EMAIL_SUBJECT, // Subject line
    text: emailPlainTextContent, // plain text body
    html: emailHtmlContent // html body
  });

  console.log('Message sent: %s', info.messageId);
  console.log(emailPlainTextContent);
}

main().catch(console.error);
