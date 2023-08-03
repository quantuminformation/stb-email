// lib/email.ts

import { load, SmtpClient } from "../deps.ts";

const env = await load();

const client = new SmtpClient();

try {
  await client.connect({
    hostname: env["SMTP_HOST"],
    port: Number(env["SMTP_PORT"]),
    username: env["SMTP_USERNAME"],
    password: env["SMTP_PASSWORD"],
  });

  await client.send({
    from: env["SMTP_USERNAME"], // Your Email address
    to: env["RECIPIENT_EMAIL"], // Email address of the recipient
    subject: "Hello, World!",
    content: "A test email from my Deno server.",
    html: "<a href='https://github.com'>Github</a>", // HTML content of the email
  });

  console.log("Email sent successfully");
} catch (err) {
  console.error(`Failed to send email: ${err}`);
} finally {
  await client.close();
}
