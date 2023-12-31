import { imageRoot } from '../config.mjs';

//const isWhiteText = true; // You can change this value to false for black text
//const textColor = isWhiteText ? '#ffffff' : '#000000';
const textColor = '#777777';
const linkCSS = 'color: #e74c3c; font-weight: bold; text-decoration: none;';

const link =
  'https://mailing.stb.de/link.php?link=01_02_04_784_6_04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D&utm_source=mailing.stb.de&utm_medium=mailing&utm_campaign=allgemein-theo';

const bodyHTML = ` <div style='text-align:  center;'><p>Hallo liebe Vereinsvertretende,<br><br>

ab heute ist die neue Ausgabe des <strong>Salto 1848</strong> wieder online verfügbar. 
Klickt euch direkt rein, erfahrt viele spannende Dinge aus der Vereinswelt und schaut euch die neuen Praxistipps im Kinderturnen, Turnen sowie in der <strong>GYMWELT</strong> an.
</p>
<a href='${link}'>
  <img style='width:20rem' src='${imageRoot}btn_jetzt.png' />
</a>
<p>
Teilt <a href='${link}' style='${linkCSS}'>den Link</a> gerne in eurem Verein, damit alle einen Blick ins neue Heft werfen können, oder tragt noch weitere E-Mail-Adressen ein.
</p>
</div> 
`;
const tableColumnData = [
  {
    content: 'Viel Spaß beim Lesen wünscht\n' + 'das Redaktionsteam',
  },
  {
    content: `<img style='width:20rem' src='${imageRoot}175.png' />`,
  },
];

let tableHtmlRows = tableColumnData
  .map(
    (data) => `
    <td style='width: 50%; text-align: center; padding: 1rem;'>${data.content}</td>`,
  )
  .join('');

let tableHtml = `
  <table style='color: #ffffff; width: 100%; border-collapse: collapse; padding-bottom: 1rem'>
    <tr>${tableHtmlRows}</tr>
  </table>
`;

let emailHtmlContent = `
  <div style='background-color: #313132; color: ${textColor}; font-size: 1.1rem; font-family:sans-serif;'>
  <div style='background-color: white'>
    <img src='${imageRoot}logo.png'  style='width: 10rem;  padding:1rem; display: block;' alt='Logo'/>
    </div>
    <img src='${imageRoot}hero_salto.jpeg' style='width: 100%;'  alt='Hero image'/>
    <div style=' padding:1rem; max-width: 50rem; width:50rem'>
     ${bodyHTML}
      ${tableHtml}
      
  
<div style='font-size:11pt;text-align: left;'><strong>Schwäbischer Turnerbund e.V.</strong><br>
Fritz-Walter-Weg 19<br>
70372 Stuttgart<br>
Tel: 0711 / 49092 - 0</span></div>
<!--for large links please use variables, don't put in html-->

<!--
<span style='font-size:11pt'><span ><a href='mailto:info@stb.de' target='_blank'><span style='color:#000000'>info@stb.de</span></a></span></span></div>
<div>&nbsp;</div>
<div><span style='font-size:11pt'><span >&nbsp;&nbsp;<a href='https://mailing.stb.de/link.php?link=01_02_04_784_1_04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D&amp;utm_source=mailing.stb.de&amp;utm_medium=mailing&amp;utm_campaign=allgemein-theo' target='_blank' data-saferedirecturl='https://www.google.com/url?q=https://mailing.stb.de/link.php?link%3D01_02_04_784_1_04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D%26utm_source%3Dmailing.stb.de%26utm_medium%3Dmailing%26utm_campaign%3Dallgemein-theo&amp;source=gmail&amp;ust=1692440540817000&amp;usg=AOvVaw3XRiU06KI7malJiF0NT5Yt'><img alt='' height='25' width='25' src='https://mail.google.com/mail/u/0?ui=2&amp;ik=a9e50a09ac&amp;attid=0.5&amp;permmsgid=msg-f:1774561931644476368&amp;th=18a082acbf999bd0&amp;view=fimg&amp;fur=ip&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ_Lucnhw4oq3Y3IVhOEnjAhYavFvoBBUcOVZoihsvMRXnm5XYKfD_VbcK4getpGpdBWoGs6p7EovXFRf0nDitqHkVSzYcu3b4O41v_FM7GgrtXCU0WjCB2EdkM&amp;disp=emb' data-image-whitelisted='' class='CToWUd' data-bit='iit'></a>&nbsp;<a href='https://mailing.stb.de/link.php?link=01_02_04_784_2_04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D&amp;utm_source=mailing.stb.de&amp;utm_medium=mailing&amp;utm_campaign=allgemein-theo' target='_blank' data-saferedirecturl='https://www.google.com/url?q=https://mailing.stb.de/link.php?link%3D01_02_04_784_2_04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D%26utm_source%3Dmailing.stb.de%26utm_medium%3Dmailing%26utm_campaign%3Dallgemein-theo&amp;source=gmail&amp;ust=1692440540817000&amp;usg=AOvVaw0Yfq4l0R0PuVd-5zWSLkoV'><img alt='' height='25' width='25' src='https://mail.google.com/mail/u/0?ui=2&amp;ik=a9e50a09ac&amp;attid=0.6&amp;permmsgid=msg-f:1774561931644476368&amp;th=18a082acbf999bd0&amp;view=fimg&amp;fur=ip&amp;sz=s0-l75-ft&amp;attbid=ANGjdJ9PmIk3vozd1jZM_H24qAoJMU9etwqZvdMYxBxkDdEKLwlB0cHkrHzfn4u7PWcWquC2G8A25D-7wb_k-jeyPEGukLPndDtZf1vd_hI4VpGKgTj_jeO2dqoZITc&amp;disp=emb' data-image-whitelisted='' class='CToWUd' data-bit='iit'></a></span></span></div>
<div>&nbsp;</div>
<div><span style='font-size:11pt'><span ><a href='https://mailing.stb.de/link.php?link=01_02_04_784_3_04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D&amp;utm_source=mailing.stb.de&amp;utm_medium=mailing&amp;utm_campaign=allgemein-theo' target='_blank' data-saferedirecturl='https://www.google.com/url?q=https://mailing.stb.de/link.php?link%3D01_02_04_784_3_04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D%26utm_source%3Dmailing.stb.de%26utm_medium%3Dmailing%26utm_campaign%3Dallgemein-theo&amp;source=gmail&amp;ust=1692440540817000&amp;usg=AOvVaw0i5RaOMvCj2TEi1NqdwPHG'><span style='color:#000000'>Datenschutz</span></a><span style='color:#000000'>
 I </span><a href='https://mailing.stb.de/link.php?link=01_02_04_784_4_04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D&amp;utm_source=mailing.stb.de&amp;utm_medium=mailing&amp;utm_campaign=allgemein-theo' target='_blank' data-saferedirecturl='https://www.google.com/url?q=https://mailing.stb.de/link.php?link%3D01_02_04_784_4_04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D%26utm_source%3Dmailing.stb.de%26utm_medium%3Dmailing%26utm_campaign%3Dallgemein-theo&amp;source=gmail&amp;ust=1692440540817000&amp;usg=AOvVaw17Bp1RCoPEQBR-_qNXlB6K'><span style='color:#000000'>Impressum</span></a><span style='color:#000000'>&nbsp;I
</span><a href='https://mailing.stb.de/nlu.php?key=04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D&amp;rid=01_02_04_784' target='_blank' data-saferedirecturl='https://www.google.com/url?q=https://mailing.stb.de/nlu.php?key%3D04-3CE-01-9FB063983E6E8D12929A925F38A20454-FFC1F06C0B7FA6A3E49D%26rid%3D01_02_04_784&amp;source=gmail&amp;ust=1692440540817000&amp;usg=AOvVaw3CMtsPaPgTaPn7jrBrTGvX'><span style='color:#000000'>Newsletter
 abbestellen</span></a></span></span></div>
-->

      

 
`;

let emailPlainTextContent = bodyHTML;

export { emailHtmlContent, emailPlainTextContent };

//  rgb(119,119,199) to hash code

//  #7777c7
