# licences

All code is Code -> GPL

Imagery is cc-by-nc

# How to use

make .env file like

```
SMTP_HOST=
SMTP_PORT=465
SMTP_USERNAME=
SMTP_PASSWORD=

YOUR_EMAIL=
RECIPIENT_EMAIL=
EMAIL_SUBJECT=Test Email Template
```

Add your dkim private key to /keys

run `pnpm install`
then
run `pnpm start` to send the email in default dir

# Sending custom emails
Use the name of the template after start `pnpm start Salto1848` or run it directly

`node node/email.mjs Salto1848`
