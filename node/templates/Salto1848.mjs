import { imageRoot } from '../config.mjs';

const bodyText =
  'Hello Test User, ' + '\n\n' + 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit...';

const tableColumnData = [
  {
    content: 'Content for first half of the table',
  },
  {
    content: 'Content for second half of the table',
  },
];

let tableHtmlRows = tableColumnData
  .map(
    (data) => `
    <td style='border: 2px solid black; width: 50%;'>${data.content}</td>`,
  )
  .join('');

let tableHtml = `
  <table style=' color: #ffffff; width: 100%; border-collapse: collapse;'>
    <tr>${tableHtmlRows}</tr>
  </table>
`;

let emailHtmlContent = `
  <div style='background-color: #313132; color: #ffffff; font-size: 1.1rem;'>
    <img src='${imageRoot}logo.png'  style='width: 10rem;  padding:1rem; display: block;' alt='Logo'/>
    <img src='${imageRoot}hero_salto.png' style='width: 100%;'  alt='Hero image'/>
    <div style=' padding:1rem; max-width: 50rem; width:50rem'>
      <p style='text-align: justify; color: #ffffff;'>${bodyText}</p>
      ${tableHtml}
      <p style='text-align: left;'>Footer content here</p>
    </div>
  </div>
`;

let emailPlainTextContent = bodyText;

export { emailHtmlContent, emailPlainTextContent };
