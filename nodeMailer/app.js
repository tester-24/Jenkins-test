
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'tester3.elitetechno@gmail.com',
        pass: 'turlhuuhgdlyglnx'
    }
});

const mailOptions = {
    from: 'tester3.elitetechno@gmail.com',
    to: "tester3.elitetechno@gmail.com, product.development@jainam.in",
    subject: 'Comet_report',
    text: 'automation-Report',
    attachments: [{
        filename: 'index.html',
        path: './index.html',
        cid: 'unique@gmail.com'
    }]
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });



    
