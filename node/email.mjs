import {imageRoot} from './config.mjs';
import {config} from 'dotenv';
import nodemailer from 'nodemailer';

config();

const bodyText = 'Hello Nikos ' +
    '' +
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. ' +
    'Nullam quis ante. Etiam sit amet orci eget eros faucib'; // Truncated for brevity

const tableColumnData = [
    {
        title: 'Title 1',
        dateRange: '14 - 16 May 2021',
        location: 'Location 1',
        name: 'Name 1',
        description: 'Description 1',
        link: 'https://www.google.com'
    },
    {
        title: 'Title 2',
        dateRange: '14 - 16 May 2021',
        location: 'Location 2',
        name: 'Name 2',
        description: 'Description 2',
        link: 'https://www.google.com'
    }
];

let tableHtmlRows = tableColumnData.map(data => `
    <td>📆 ${data.dateRange}<br>
        📍 ${data.location}<br>
       👩 ${data.name}<br>
        ${data.description}
    </td>`).join('');

let tableHtmlTitles = tableColumnData.map(data => `<td>${data.title}</td>`).join('');

let tableHtml = `
  <table style="width: 100%; color: #ffffff; margin: auto; border:  1px solid black">
    <tr>${tableHtmlTitles}</tr>
    <tr>${tableHtmlRows}</tr>
  </table>
`;

let emailHtmlContent = `
  <div style="background-color: #313132; color: #ffffff; padding:1rem">
    <img src="${imageRoot}/STB-Logo-neu_transparent.png" style="width: 12rem; display: block;" alt="Logo"/>
    <img src="${imageRoot}/hero.png" style="width: 100%;" alt="Hero image"/>
    <p style="text-align: center;">${bodyText}</p>
    ${tableHtml}
    <p style="text-align: center;">Footer content here</p>
  </div>
`;

let emailPlainTextContent = `
  ${bodyText}
  ${tableColumnData}
`;
console.log(emailPlainTextContent);
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
