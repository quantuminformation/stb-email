// node/email.mjs
import {imageRoot} from './config.mjs'
import {config} from 'dotenv';

config();

import nodemailer from 'nodemailer';

const bodyText = 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath';

const tableColumnData = [
    {
        title: 'Title 1',
        dateRange: '14 - 16 May 2021',
        location: 'Location 1',
        name: 'Name 1',
        description: 'Description 1',
    },
    {
        title: 'Title 2',
        dateRange: '14 - 16 May 2021',
        location: 'Location 2',
        name: 'Name 2',
        description: 'Description 2',

    }]

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
    <img src="${imageRoot}/STB-Logo-neu_transparent.png" width="12rem" alt="Logo"/>
    <img src="${imageRoot}/hero.png" width="100rem" alt="Hero image"/>
    <p style="text-align: center;">${bodyText}</p>
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
  ${bodyText}
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
