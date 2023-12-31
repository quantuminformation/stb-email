//stored in node/templates/default.mjs

import { imageRoot } from '../config.mjs';

const bodyText =
  'Hello Test User, ' +
  '\n\n' +
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.';

const tableColumnData = [
  {
    title: 'Title 1',
    dateRange: '14 - 16 May 2021',
    location: 'Location 1',
    name: 'Name 1',
    description: 'Description 1',
    link: 'https://www.google.com',
  },
  {
    title: 'Title 2',
    dateRange: '14 - 16 May 2021',
    location: 'Location 2',
    name: 'Name 2',
    description: 'Description 2',
    link: 'https://www.google.com',
  },
];

let tableHtmlRows = tableColumnData
  .map(
    (data) => `
    <td style='border: 2px solid black;'>📆 ${data.dateRange}<br>
        📍 ${data.location}<br>
        👩 ${data.name}<br>
        ${data.description}
    </td>`,
  )
  .join('');

let tableHtmlTitles = tableColumnData
  .map((data) => `<td style='border: 2px solid black;'>${data.title}</td>`)
  .join('');

let tableHtmlButtons = tableColumnData
  .map(
    (data) => `
    <td style='border: 2px solid black;'><a href='${data.link}' style=' color: #ffffff; padding: 10px; text-decoration: none;'>Button</a></td>`,
  )
  .join('');

let tableHtml = `
  <table style=' color: #ffffff; width: 100%; border-collapse: collapse;'>
    <tr>${tableHtmlTitles}</tr>
    <tr>${tableHtmlRows}</tr>
    <tr>${tableHtmlButtons}</tr>
  </table>
`;

let emailHtmlContent = `
  <div style='background-color: #313132; color: #ffffff; font-size: 1.1rem;'>
    <img src='${imageRoot}logo_border_white.png'  style='width: 10rem;  padding:1rem; display: block;' alt='Logo'/>
    <img src='${imageRoot}hero.png' style='width: 100%;'  alt='Hero image'/>
    <center><div style=' padding:1rem; max-width: 50rem; width:50rem'><p style='text-align: justify;color: #ffffff; '>${bodyText}</p>
    ${tableHtml}
    <p style='text-align: center;'>Footer content here</p>
    </div></center>
  </div>
`;

let emailPlainTextContent = `
  ${bodyText}
  ${tableColumnData
    .map(
      (data) => `📆 ${data.dateRange}\n📍 ${data.location}\n👩 ${data.name}\n${data.description}`,
    )
    .join('\n')}
`;

export { emailHtmlContent, emailPlainTextContent };
