// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// cypress/support/commands.js

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('sendEmail', (subject, body, recipient) => {
  // Implement the logic to send the email using your preferred email service or library
  // For example, you can use Nodemailer or a third-party email API

  // Example using Nodemailer library
  const nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    // Configure the transporter settings according to your email service provider
    // For example, SMTP settings for Gmail
    service: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'tester3.elitetechno@gmail.com',
      pass: 'turlhuuhgdlyglnx',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'tester3.elitetechno@gmail.com',
    subject: testreport,
    text: autopmation_testing,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(`Error sending email: ${error}`);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';
