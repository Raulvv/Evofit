const nodemailer = require('nodemailer');

// Replace with your email service credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your email password
    }
});

const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,  // Sender's email
        to: to,                        // Receiver's email
        subject: subject,              // Subject of the email
        text: text                     // Body of the email
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

// Example usage
sendEmail('raul.vega.dv@gmail.com', 'Test Subject', 'Test Email Body');
